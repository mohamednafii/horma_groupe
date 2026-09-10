/**
 * WhatsApp — one number for the whole site.
 *
 * Every WhatsApp link on every landing page resolves through this module, so
 * changing the number is a one-line change (see "Changing the number" below).
 * Never hard-code a `wa.me` URL in a component.
 *
 * Changing the number
 * -------------------
 * Preferred: set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env` (or in the hosting
 * provider's environment settings) and rebuild. `NEXT_PUBLIC_` values are
 * inlined by `next build`, so the change ships to the browser but only takes
 * effect on the next build — not at runtime.
 *
 * Fallback: if that variable is unset, `DEFAULT_WHATSAPP_NUMBER` below is used,
 * which keeps the links working out of the box with no env file.
 */

/** Used whenever `NEXT_PUBLIC_WHATSAPP_NUMBER` is absent. */
const DEFAULT_WHATSAPP_NUMBER = "+212668615964";

/**
 * The configured number, in human form (leading `+`, country code included).
 *
 * `process.env.NEXT_PUBLIC_WHATSAPP_NUMBER` is written out literally on
 * purpose: Next.js only inlines a static reference into the client bundle, and
 * a dynamic lookup such as `process.env[name]` would silently be `undefined` in
 * the browser.
 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;

/**
 * Strip a number down to the digits `wa.me` accepts.
 *
 * wa.me takes the country code with no `+`, no spaces, no parentheses and no
 * hyphens — `+212 668-615964` is a broken link, `212668615964` is a valid one.
 */
export function toWhatsAppDigits(raw: string): string {
  return raw.replace(/\D/g, "");
}

/** The configured number as wa.me wants it, e.g. `212668615964`. */
export const WHATSAPP_DIGITS = toWhatsAppDigits(WHATSAPP_NUMBER);

/** Readable form for contact lists, e.g. `+212 668 615 964`. */
export const WHATSAPP_DISPLAY = `+${WHATSAPP_DIGITS.replace(
  /^(\d{3})(\d{3})(\d{3})(\d{3})$/,
  "$1 $2 $3 $4",
)}`;

/**
 * Build the link a WhatsApp CTA points at.
 *
 * `message` is optional and pre-fills the customer's chat box; it is
 * URL-encoded here, so callers pass plain text. Only product-facing copy
 * belongs in it — never anything the customer typed (name, phone, address),
 * which would end up in a shareable URL.
 */
export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_DIGITS}`;
  const text = message?.trim();
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/**
 * The standard Arabic order enquiry, matching the language of the landing
 * pages. `price` is omitted when the CTA is not tied to a specific pack.
 */
export function buildOrderMessage(
  product: string,
  price?: number,
  currency = "درهم",
): string {
  return price === undefined
    ? `السلام عليكم، أنا مهتم(ة) بـ${product} وأرغب في تسجيل طلب.`
    : `السلام عليكم، أرغب في طلب ${product} بثمن ${price} ${currency}.`;
}
