import type { LandingConfig } from "./types";

/**
 * Formats a money amount the way every price on the page is written:
 * the number, a space, then the currency word.
 *
 * Grouping is opt-in per product so a page that never reaches four digits
 * keeps its plain rendering.
 */
export function formatPrice(amount: number, config: LandingConfig): string {
  const digits = config.groupThousands ? amount.toLocaleString("en-US") : String(amount);
  return digits + " " + config.currency;
}

/** Delivery is waived while a pack marked `freeDelivery` is selected. */
export function deliveryFeeFor(config: LandingConfig, freeDelivery: boolean | undefined): number {
  return freeDelivery ? 0 : config.deliveryFee;
}
