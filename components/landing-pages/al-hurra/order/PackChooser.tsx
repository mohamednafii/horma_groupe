"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useRef } from "react";

import { formatPrice } from "../format";
import { useOrderState } from "../OrderStateProvider";
import styles from "../styles/order.module.css";

const PACKS_TITLE_ID = "alh-packs-title";

/**
 * The offer tiles. They behave as a real radio group: arrow keys move the
 * selection and only the checked tile stays in the tab order.
 */
export function PackChooser() {
  const { content, packIndex, selectPack } = useOrderState();
  const { packs, config, orderCopy } = content;
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    // The page is RTL, so ArrowLeft advances and ArrowRight goes back.
    const forward = event.key === "ArrowLeft" || event.key === "ArrowDown";
    const back = event.key === "ArrowRight" || event.key === "ArrowUp";
    if (!forward && !back) return;

    event.preventDefault();
    const next = (packIndex + (forward ? 1 : -1) + packs.length) % packs.length;
    selectPack(next);
    buttons.current[next]?.focus();
  }

  return (
    <>
      <h3 className={styles.cardTitle} id={PACKS_TITLE_ID}>
        {orderCopy.packsTitle}
      </h3>

      <div
        className={styles.packGroup}
        role="radiogroup"
        aria-labelledby={PACKS_TITLE_ID}
        onKeyDown={handleKeyDown}
      >
        {packs.map((pack, index) => {
          const checked = index === packIndex;

          return (
            <button
              key={pack.id}
              ref={(node) => {
                buttons.current[index] = node;
              }}
              type="button"
              className={styles.pack}
              role="radio"
              aria-checked={checked}
              tabIndex={checked ? 0 : -1}
              onClick={() => selectPack(index)}
            >
              {pack.badge ? <span className={styles.packBadge}>{pack.badge}</span> : null}
              <Image
                className={styles.packImage}
                src={pack.image.src}
                width={pack.image.width}
                height={pack.image.height}
                alt=""
                sizes="66px"
              />
              <span className={styles.packInfo}>
                <span className={styles.packName}>{pack.name}</span>
                <span className={styles.packPrice}>{formatPrice(pack.price, config)}</span>
              </span>
              <span className={styles.packRadio} aria-hidden="true" />
            </button>
          );
        })}
      </div>
    </>
  );
}
