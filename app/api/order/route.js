import { NextResponse } from "next/server";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

import { normalizeGooglePrivateKey, readEnv } from "@/lib/google-credentials";
import { assertPrivateKeyUsable } from "@/lib/google-credentials-diagnostic";

/* ------------------------------------------------------------------ */
/*  POST /api/order                                                    */
/*  Appends a landing-page order to the "Commandes" tab of the         */
/*  configured spreadsheet. Kept separate from /api/submit because an  */
/*  order and a contact request have different shapes; the contact tab */
/*  ("Feuille 1") is left exactly as it is.                            */
/* ------------------------------------------------------------------ */

// google-auth-library signs the JWT with Node crypto, so this handler must run
// on the Node runtime, never the Edge one. It also must never be cached.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const ORDERS_TAB = "Commandes";

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
const ORDER_HEADERS = [
  "Date",
  "Page",
  "Produit",
  "Offre",
  "Quantite",
  "Nom",
  "Telephone",
  "Ville",
  "Adresse",
  "Total",
];

/**
 * The two landing templates post different payloads. Normalise both into the
 * columns above rather than forcing either template to change its own shape.
 */
function normalise(body) {
  const pick = (...keys) => {
    for (const k of keys) {
      const v = body[k];
      if (v !== undefined && v !== null && String(v).trim() !== "") return String(v).trim();
    }
    return "";
  };

  return {
    Date: new Date().toISOString(),
    Page: pick("page", "slug", "source"),
    Produit: pick("product", "productName", "packLabel"),
    Offre: pick("offer", "offerName", "packLabel"),
    Quantite: pick("quantity", "qty"),
    Nom: pick("name", "fullName", "customer"),
    Telephone: pick("phone", "telephone"),
    Ville: pick("city", "ville"),
    Adresse: pick("address", "adresse"),
    Total: pick("total", "price", "productPrice"),
  };
}

export async function POST(request) {
  console.log("[/api/order] ⏳ Incoming POST request…");

  // Templates that cannot easily add a field to their payload identify
  // themselves with ?page=… on the endpoint URL instead.
  const pageFromQuery = new URL(request.url).searchParams.get("page") ?? "";

  try {
    // Hostinger's env file keeps the wrapping quotes and literal `\n` on these
    // values; locally Next's dotenv loader has already stripped them. Normalise
    // so both environments hand `new JWT` a valid PEM — otherwise production
    // fails at signing time with "DECODER routines::unsupported".
    const email = readEnv(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    const privateKey = normalizeGooglePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
    const sheetId = readEnv(process.env.GOOGLE_SHEET_ID);

    if (!email || !privateKey || !sheetId) {
      console.error("[/api/order] ❌ Missing env vars:", {
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
    assertPrivateKeyUsable(privateKey, "[/api/order]");

    const body = await request.json().catch(() => null);
    if (!body) {
      console.error("[/api/order] ❌ Invalid or empty JSON body.");
      return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }

    const row = normalise(body);
    if (!row.Page) row.Page = pageFromQuery;

    // Name and phone are what make an order actionable; everything else is
    // useful but not sufficient on its own.
    if (!row.Nom || !row.Telephone) {
      console.error("[/api/order] ❌ Validation failed — missing name or phone.");
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    // Log the shape, not the contents: this runs on every public submission.
    console.log("[/api/order] 📋 Payload received — fields:", Object.keys(body).join(", "));

    const jwt = new JWT({ email, key: privateKey, scopes: SCOPES });
    const doc = new GoogleSpreadsheet(sheetId, jwt);
    await withTimeout(doc.loadInfo(), "Loading the spreadsheet");

    console.log("[/api/order] ✅ Connected to spreadsheet:", doc.title);

    // Self-healing: create the orders tab on first use so nobody has to
    // hand-build the header row.
    let sheet = doc.sheetsByTitle[ORDERS_TAB];
    if (!sheet) {
      console.log("[/api/order] 📄 Creating tab:", ORDERS_TAB);
      sheet = await withTimeout(
        doc.addSheet({ title: ORDERS_TAB, headerValues: ORDER_HEADERS }),
        "Creating the orders tab"
      );
    }

    // `raw: true` sends valueInputOption=RAW so Sheets stores each cell exactly
    // as given — otherwise a phone like "0600000000" is parsed as a number and
    // written as 600000000.
    await withTimeout(sheet.addRow(row, { raw: true }), "Appending the order row");

    console.log("[/api/order] ✅ Order row added to", ORDERS_TAB);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/order] ❌ Unexpected error:", err);

    // 504 tells the caller the request reached us but the upstream (Google) did
    // not answer in time — distinct from a bad request or our own bug.
    const isTimeout = err instanceof GoogleTimeoutError;
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: isTimeout ? 504 : 500 }
    );
  }
}
