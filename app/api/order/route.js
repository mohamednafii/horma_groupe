import { NextResponse } from "next/server";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

/* ------------------------------------------------------------------ */
/*  POST /api/order                                                    */
/*  Appends a landing-page order to the "Commandes" tab of the         */
/*  configured spreadsheet. Kept separate from /api/submit because an  */
/*  order and a contact request have different shapes; the contact tab */
/*  ("Feuille 1") is left exactly as it is.                            */
/* ------------------------------------------------------------------ */

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const ORDERS_TAB = "Commandes";
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
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const rawKey = process.env.GOOGLE_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!email || !rawKey || !sheetId) {
      console.error("[/api/order] ❌ Missing env vars:", {
        hasEmail: !!email,
        hasKey: !!rawKey,
        hasSheetId: !!sheetId,
      });
      return NextResponse.json(
        { error: "Server misconfigured — missing Google credentials." },
        { status: 500 }
      );
    }

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

    const jwt = new JWT({ email, key: rawKey.replace(/\\n/g, "\n"), scopes: SCOPES });
    const doc = new GoogleSpreadsheet(sheetId, jwt);
    await doc.loadInfo();

    console.log("[/api/order] ✅ Connected to spreadsheet:", doc.title);

    // Self-healing: create the orders tab on first use so nobody has to
    // hand-build the header row.
    let sheet = doc.sheetsByTitle[ORDERS_TAB];
    if (!sheet) {
      console.log("[/api/order] 📄 Creating tab:", ORDERS_TAB);
      sheet = await doc.addSheet({ title: ORDERS_TAB, headerValues: ORDER_HEADERS });
    }

    // `raw: true` sends valueInputOption=RAW so Sheets stores each cell exactly
    // as given — otherwise a phone like "0600000000" is parsed as a number and
    // written as 600000000.
    await sheet.addRow(row, { raw: true });

    console.log("[/api/order] ✅ Order row added to", ORDERS_TAB);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/order] ❌ Unexpected error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
