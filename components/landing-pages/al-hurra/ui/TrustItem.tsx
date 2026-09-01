import type { TrustPoint } from "../types";
import styles from "../styles/trust.module.css";
import { Icon } from "./icons";

/** One purchase guarantee in the trust strip. */
export function TrustItem({ icon, title, note }: TrustPoint) {
  return (
    <div className={styles.item}>
      <Icon
        name={icon}
        size={30}
        stroke="var(--atlas-900)"
        strokeWidth={1.4}
        className={styles.icon}
      />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.note}>{note}</p>
      </div>
    </div>
  );
}
