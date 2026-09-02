import { NextResponse } from "next/server";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

import { normalizeGooglePrivateKey, readEnv } from "@/lib/google-credentials";
import { assertPrivateKeyUsable } from "@/lib/google-credentials-diagnostic";

/* ------------------------------------------------------------------ */
/*  POST /api/submit                                                  */
/*  Appends a contact-form row (Name, Email, Company, Phone)          */
/*  to the first sheet of the configured Google Spreadsheet.           */
/* ------------------------------------------------------------------ */

// google-auth-library signs the JWT with Node crypto, so this handler must run
// on the Node runtime, never the Edge one. It also must never be cached.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// Every Google call is an outbound HTTPS request. On hosts where outbound
// traffic is blocked or throttled the socket hangs with no error, and the
// gateway eventually kills the request as a 504 with no body. Racing each call
// against a timeout turns that into a fast, readable response instead.
const GOOGLE_TIMEOUT_MS = 12_000;

class GoogleTimeoutError extends Error {}

function withTimeout(promise, label, ms = GOOGLE_TIMEOUT_MS) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(
      () =>
        reject(
          new GoogleTimeoutError(
            `${label} timed out after ${ms}ms — the server could not reach Google.`
          )
        ),
      ms
    );
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

export async function POST(request) {
  console.log("[/api/submit] ⏳ Incoming POST request…");

  try {
    /* ---------- 1. Validate env ---------- */
    // Hostinger's env file keeps the wrapping quotes and literal `\n` on these
    // values; locally Next's dotenv loader has already stripped them. Normalise
    // so both environments hand `new JWT` a valid PEM — otherwise production
    // fails at signing time with "DECODER routines::unsupported".
    const email = readEnv(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    const privateKey = normalizeGooglePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
    const sheetId = readEnv(process.env.GOOGLE_SHEET_ID);

    if (!email || !privateKey || !sheetId) {
      console.error("[/api/submit] ❌ Missing env vars:", {
        hasEmail: !!email,
        hasKey: !!privateKey,
        hasSheetId: !!sheetId,
      });
      return NextResponse.json(
        { error: "Server misconfigured — missing Google credentials." },
        { status: 500 }
      );
    }

    // DIAGNOSTIC (temporary): log the key's structure and prove whether
    // Node/OpenSSL can parse the normalised PEM, before it ever reaches
    // google-auth-library. Throws on failure so the catch below returns the
    // same 500. Runs on every POST regardless of payload.
    assertPrivateKeyUsable(privateKey, "[/api/submit]");

    /* ---------- 2. Parse & validate body ---------- */
    const body = await request.json().catch(() => null);

    if (!body) {
      console.error("[/api/submit] ❌ Invalid or empty JSON body.");
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    const { Name, Email, Company, Phone, Message } = body;

    if (!Name?.trim() || !Email?.trim()) {
      console.error("[/api/submit] ❌ Validation failed — Name or Email missing.", { Name, Email });
      return NextResponse.json(
        { error: "Name and Email are required." },
        { status: 400 }
      );
    }

    // Log the shape, not the contents: this runs on every public submission.
    console.log("[/api/submit] 📋 Payload received — fields:", Object.keys(body).join(", "));

    /* ---------- 3. Authenticate ---------- */
    const jwt = new JWT({
      email,
      key: privateKey,
      scopes: SCOPES,
    });

    console.log("[/api/submit] 🔑 Authenticating with the configured service account…");

    /* ---------- 4. Open spreadsheet ---------- */
    const doc = new GoogleSpreadsheet(sheetId, jwt);
    await withTimeout(doc.loadInfo(), "Loading the spreadsheet");

    console.log("[/api/submit] ✅ Connected to spreadsheet:", doc.title);

    const sheet = doc.sheetsByIndex[0];
    if (!sheet) {
      console.error("[/api/submit] ❌ No sheet found at index 0.");
      return NextResponse.json(
        { error: "No sheet found in the spreadsheet." },
        { status: 500 }
      );
    }

    console.log("[/api/submit] 📄 Using sheet:", sheet.title);

    /* ---------- 5. Append row ---------- */
    // Sheet headers are: Name | Email | Company | Phone | Message
    // `raw: true` sends valueInputOption=RAW so Sheets stores each cell exactly
    // as given. Without it Sheets parses the phone as a number and a Moroccan
    // "0600000000" is written as 600000000.
    await withTimeout(
      sheet.addRow(
        {
          Name: Name.trim(),
          Email: Email.trim(),
          Company: Company?.trim() ?? "",
          Phone: Phone?.trim() ?? "",
          Message: Message?.trim() ?? "",
        },
        { raw: true }
      ),
      "Appending the contact row"
    );

    console.log("[/api/submit] ✅ Row added successfully!");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/submit] ❌ Unexpected error:", err);

    // 504 tells the caller the request reached us but the upstream (Google) did
    // not answer in time — distinct from a bad request or our own bug.
    const isTimeout = err instanceof GoogleTimeoutError;
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: isTimeout ? 504 : 500 }
    );
  }
}
