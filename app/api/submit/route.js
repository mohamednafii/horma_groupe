import { NextResponse } from "next/server";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

/* ------------------------------------------------------------------ */
/*  POST /api/submit                                                  */
/*  Appends a contact-form row (Name, Email, Company, Phone)          */
/*  to the first sheet of the configured Google Spreadsheet.           */
/* ------------------------------------------------------------------ */

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

export async function POST(request) {
  console.log("[/api/submit] ⏳ Incoming POST request…");

  try {
    /* ---------- 1. Validate env ---------- */
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const rawKey = process.env.GOOGLE_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!email || !rawKey || !sheetId) {
      console.error("[/api/submit] ❌ Missing env vars:", {
        hasEmail: !!email,
        hasKey: !!rawKey,
        hasSheetId: !!sheetId,
      });
      return NextResponse.json(
        { error: "Server misconfigured — missing Google credentials." },
        { status: 500 }
      );
    }

    /* ---------- 2. Parse & validate body ---------- */
    const body = await request.json().catch(() => null);

    if (!body) {
      console.error("[/api/submit] ❌ Invalid or empty JSON body.");
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    const { Name, Email, Company, Phone } = body;

    if (!Name?.trim() || !Email?.trim()) {
      console.error("[/api/submit] ❌ Validation failed — Name or Email missing.", { Name, Email });
      return NextResponse.json(
        { error: "Name and Email are required." },
        { status: 400 }
      );
    }

    console.log("[/api/submit] 📋 Data received:", { Name, Email, Company, Phone });

    /* ---------- 3. Authenticate ---------- */
    const jwt = new JWT({
      email,
      key: rawKey.replace(/\\n/g, "\n"),
      scopes: SCOPES,
    });

    console.log("[/api/submit] 🔑 Authenticating with service account:", email);

    /* ---------- 4. Open spreadsheet ---------- */
    const doc = new GoogleSpreadsheet(sheetId, jwt);
    await doc.loadInfo();

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
    // Headers in the Google Sheet must be: Name | Email | Company | Phone
    await sheet.addRow({
      Name: Name.trim(),
      Email: Email.trim(),
      Company: Company?.trim() ?? "",
      Phone: Phone?.trim() ?? "",
    });

    console.log("[/api/submit] ✅ Row added successfully!");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/submit] ❌ Unexpected error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
