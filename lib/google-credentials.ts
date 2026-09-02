/**
 * Reads the Google service-account credentials from the environment, tolerating
 * the different ways a host can serialise them.
 *
 * Locally, `.env` is parsed by Next's dotenv loader: it removes the wrapping
 * quotes and expands `\n`, so `GOOGLE_PRIVATE_KEY` already holds a clean
 * multi-line PEM and every step below is a no-op.
 *
 * On Hostinger the generated env file is read more literally — the surrounding
 * single quotes and the two-character `\n` sequences reach `process.env`
 * verbatim, so the PEM cannot be decoded and JWT signing fails with
 * `error:1E08010C:DECODER routines::unsupported`. Normalising here fixes
 * production without altering the already-correct local value.
 *
 * These helpers only trim whitespace, strip one layer of wrapping quotes, and
 * turn escaped newlines into real ones. They never change the configured email,
 * key material, or sheet id.
 */

/** Trim whitespace and strip one layer of host-added wrapping quotes. */
export function readEnv(raw: string | undefined | null): string {
  return (raw ?? "")
    .trim()
    .replace(/^['"]/, "")
    .replace(/['"]$/, "")
    .trim();
}

/**
 * Normalise `GOOGLE_PRIVATE_KEY` into a valid PEM string.
 *
 * Mirrors the transform verified against the production key with
 * `openssl pkey -check` (strip wrapping quotes, then `\n` -> newline), and
 * guarantees exactly one trailing newline so the result matches what the local
 * dotenv-parsed value already looks like.
 */
export function normalizeGooglePrivateKey(raw: string | undefined | null): string {
  const pem = readEnv(raw)
    .replace(/\\r\\n/g, "\n") // escaped CRLF
    .replace(/\\n/g, "\n") // escaped LF
    .replace(/\\r/g, "") // stray escaped CR
    .replace(/\r\n/g, "\n") // real CRLF
    .trim();

  return pem ? `${pem}\n` : "";
}
