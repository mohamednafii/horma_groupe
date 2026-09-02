/**
 * Reads the Google service-account credentials from the environment, tolerating
 * the different ways a host can serialise them.
 *
 * Locally, `.env` is parsed by Next's dotenv loader: it removes the wrapping
 * quotes and expands `\n`, so `GOOGLE_PRIVATE_KEY` already holds a clean
 * multi-line PEM and every step below is a no-op.
 *
 * On Hostinger the generated env file is read more literally — wrapping quotes
 * survive, and each newline arrives *double*-escaped as `\\n` (backslash,
 * backslash, `n`), so the PEM cannot be decoded and JWT signing fails with
 * `error:1E08010C:DECODER routines::unsupported`. Normalising here fixes
 * production without altering the already-correct local value.
 *
 * These helpers only trim whitespace, strip one layer of wrapping quotes, and
 * turn escaped newline markers (`\n`, `\r\n`, and any number of leading
 * backslashes) into real ones. A valid PEM — armor lines plus a base64 body
 * over `[A-Za-z0-9+/=]` — contains no backslash at all, so every backslash in
 * the value is a serialisation artifact. They never touch the base64 body, the
 * configured email, or the sheet id.
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
 * A newline may reach us escaped zero times (local: real `\n`), once (`\n` —
 * the common hosted case), or several times (`\\n` — Hostinger). Each rule
 * below collapses *one or more* leading backslashes before the marker, so every
 * escaping depth resolves to a single real newline. Guarantees exactly one
 * trailing newline so the result matches the local dotenv-parsed value.
 */
export function normalizeGooglePrivateKey(raw: string | undefined | null): string {
  const pem = readEnv(raw)
    .replace(/\\+r\\+n/g, "\n") // escaped CRLF, any depth  ->  newline
    .replace(/\\+n/g, "\n") // escaped LF, any depth   ->  newline
    .replace(/\\+r/g, "") // escaped stray CR, any depth
    .replace(/\r\n/g, "\n") // real CRLF  ->  newline
    .replace(/\\+(?=\n|$)/g, "") // backslash(es) stranded on a line boundary or the end
    .trim();

  return pem ? `${pem}\n` : "";
}
