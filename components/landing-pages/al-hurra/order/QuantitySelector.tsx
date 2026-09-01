"use client";

import { useOrderState } from "../OrderStateProvider";
import styles from "../styles/order.module.css";

/**
 * Minus / value / plus. The minus button is first in the DOM, so in this RTL
 * page it renders on the right exactly as in the source design.
 */
export function QuantitySelector() {
  const { content, quantity, changeQuantity, canDecrease, canIncrease } = useOrderState();
  const { orderCopy } = content;

  return (
    <div className={styles.qty}>
      <button
        type="button"
        className={styles.qtyBtn}
        aria-label={orderCopy.decrease}
        disabled={!canDecrease}
        onClick={() => changeQuantity(-1)}
      >
        −
      </button>
      <span className={styles.qtyValue} aria-live="polite" aria-atomic="true">
        {quantity}
      </span>
      <button
        type="button"
        className={styles.qtyBtn}
        aria-label={orderCopy.increase}
        disabled={!canIncrease}
        onClick={() => changeQuantity(1)}
      >
        +
      </button>
    </div>
  );
}
