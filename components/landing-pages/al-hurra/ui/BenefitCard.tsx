import type { Benefit } from "../types";
import styles from "../styles/benefits.module.css";
import { Icon } from "./icons";

/** One of the three cards in the benefits bar. */
export function BenefitCard({ icon, title, note }: Benefit) {
  return (
    <div className={styles.card}>
      <Icon name={icon} size={38} stroke="var(--brass-700)" strokeWidth={1.3} />
      <p className={styles.title}>{title}</p>
      <p className={styles.note}>{note}</p>
    </div>
  );
}
