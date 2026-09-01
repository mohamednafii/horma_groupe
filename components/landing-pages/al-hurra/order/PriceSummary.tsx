"use client";

import { formatPrice } from "../format";
import { useOrderState } from "../OrderStateProvider";
import styles from "../styles/order.module.css";

/** Product price, delivery, and the grand total. */
export function PriceSummary() {
  const { content, productPrice, deliveryFee, freeDelivery, total } = useOrderState();
  const { config, orderCopy } = content;

  return (
    <div className={styles.totals}>
      <p className={styles.totalsLine}>
        <span>{orderCopy.productPrice}</span>
        <span>{formatPrice(productPrice, config)}</span>
      </p>
      <p className={styles.totalsLine}>
        <span>{orderCopy.deliveryPrice}</span>
        {/* A pack that advertises free delivery says so instead of showing 0. */}
        <span>{freeDelivery ? orderCopy.freeDelivery : formatPrice(deliveryFee, config)}</span>
      </p>
      <div className={styles.totalsSep} />
      <p className={styles.totalsGrand}>
        <span className={styles.totalsGrandLabel}>{orderCopy.total}</span>
        <span className={styles.totalsGrandValue}>{formatPrice(total, config)}</span>
      </p>
    </div>
  );
}
