"use client";

import Image from "next/image";

import { formatPrice } from "./format";
import { useOrderState } from "./OrderStateProvider";
import { scrollToOrder } from "./scrollToOrder";
import styles from "./styles/sticky.module.css";
import { Icon } from "./ui/icons";

/** Fixed bottom bar mirroring the selected pack's running product price. */
export function StickyOrderBar() {
  const { content, productPrice } = useOrderState();
  const { config, packs, stickyCopy } = content;
  const thumb = config.stickyThumb ?? packs[0].image;

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <Image
          className={styles.thumb}
          src={thumb.src}
          width={thumb.width}
          height={thumb.height}
          alt=""
          aria-hidden="true"
          sizes="46px"
        />

        <div className={styles.price}>
          <span className={styles.amount}>{formatPrice(productPrice, config)}</span>
          <span className={styles.terms}>{stickyCopy.terms}</span>
        </div>

        <button type="button" className={styles.cta} onClick={scrollToOrder}>
          <span>{stickyCopy.cta}</span>
          <span className={styles.ctaChevron} aria-hidden="true">
            &lsaquo;
          </span>
        </button>

        <span className={styles.lock} aria-hidden="true">
          <Icon name="lock" size={18} stroke="var(--white)" strokeWidth={1.8} />
        </span>
      </div>
    </div>
  );
}
