/**
 * TEMPORARY DIAGNOSTIC — delete this file (and its two import sites in
 * `app/api/order/route.js` and `app/api/submit/route.js`) once the Hostinger
 * production endpoint is confirmed working.
 *
 * It answers one question: when `POST /api/order` fails in production with
 * `error:1E08010C:DECODER routines::unsupported`, is the normalised PEM string
 * itself unparseable by Node/OpenSSL (A), or does Node accept it and the failure
 * happen later inside google-auth-library / the Sheets API (B)?
 *
 * Kept out of `google-credentials.ts` on purpose so that permanent module does
 * not pull in `node:crypto`.
 */

import { createPrivateKey } from "node:crypto";

// A PEM armor line, e.g. "-----BEGIN PRIVATE KEY-----". Anything that is NOT one
// of these could be base64 key material, so it must never be logged verbatim.
const PEM_ARMOR = /^-----(?:BEGIN|END) [A-Z0-9 ]+-----$/;

/**
 * Logs *structural* facts about the normalised key (never the key body), then
 * asks Node's OpenSSL to parse it. Re-throws the original decoder error on
 * failure so the caller's existing `catch` still returns its usual 500.
 *
 * @param privateKey  the already-normalised PEM string
 * @param tag         log prefix, e.g. "[/api/order]"
 */
export function assertPrivateKeyUsable(privateKey: string, tag: string): void {
  const trimmedEnd = privateKey.replace(/\s+$/, "");
  const firstLine = privateKey.split("\n", 1)[0] ?? "";
  const lastLine = trimmedEnd.slice(trimmedEnd.lastIndexOf("\n") + 1);
  const safeLine = (line: string) =>
    PEM_ARMOR.test(line) ? line : `«non-armor line — length ${line.length}»`;

  const shape = {
    nodeVersion: process.version,
    opensslVersion: process.versions.openssl,
    rawKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length ?? 0,
    normalizedKeyLength: privateKey.length,
    lineCount: trimmedEnd === "" ? 0 : trimmedEnd.split("\n").length,
    startsCorrectly: privateKey.startsWith("-----BEGIN PRIVATE KEY-----"),
    endsCorrectly: trimmedEnd.endsWith("-----END PRIVATE KEY-----"),
    hasRealNewlines: privateKey.includes("\n"),
    hasLiteralBackslashN: privateKey.includes("\\n"),
    hasCarriageReturn: privateKey.includes("\r"),
    hasStrayBackslash: privateKey.includes("\\"),
    firstLine: safeLine(firstLine),
    lastLine: safeLine(lastLine),
  };

  console.log(`${tag} [Google credentials diagnostic]`, shape);

  try {
    createPrivateKey({ key: privateKey, format: "pem" });
    console.log(`${tag} ✅ Node crypto accepts private key`);
  } catch (error) {
    console.error(`${tag} ❌ Node crypto rejected private key`, {
      message: error instanceof Error ? error.message : String(error),
      code:
        error && typeof error === "object" && "code" in error
          ? (error as { code?: unknown }).code
          : undefined,
      ...shape,
    });
    throw error;
  }
}
