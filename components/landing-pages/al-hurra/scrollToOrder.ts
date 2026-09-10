import { trackMetaOnce } from "@/components/analytics/meta-pixel";

/** Id of the order section, and the anchor both CTAs scroll to. */
export const ORDER_SECTION_ID = "order";

/** The source page stops 12px short so the section's top edge stays visible. */
const SCROLL_OFFSET = 12;

/**
 * Smooth-scrolls to the order section, matching the original page exactly.
 * Falls back to an instant jump when the visitor prefers reduced motion.
 *
 * This is the one route to the order form — the hero CTA and the sticky bar
 * both come through here — so it is also where `InitiateCheckout` is reported,
 * identically for both. `trackMetaOnce` keeps a visitor who taps the hero and
 * then the sticky bar down to the single checkout they actually began.
 */
export function scrollToOrder(): void {
  trackMetaOnce("InitiateCheckout");

  const el = document.getElementById(ORDER_SECTION_ID);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
}
