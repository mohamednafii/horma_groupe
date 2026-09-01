import Image from "next/image";

import type { Review } from "../types";
import styles from "../styles/reviews.module.css";

const STARS = "★★★★★";

/** A customer review: avatar, name, five stars, and the quote. */
export function ReviewCard({ name, body, avatar, starsLabel }: Review & { starsLabel: string }) {
  return (
    <figure className={styles.card}>
      <figcaption className={styles.head}>
        <Image
          className={styles.avatar}
          src={avatar.src}
          width={avatar.width}
          height={avatar.height}
          alt={name}
          sizes="56px"
        />
        <span className={styles.who}>
          <span className={styles.name}>{name}</span>
          <span className={styles.stars} aria-label={starsLabel}>
            {STARS}
          </span>
        </span>
      </figcaption>
      <p className={styles.body}>{body}</p>
    </figure>
  );
}
