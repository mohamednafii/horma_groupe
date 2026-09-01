import type { TrustPoint } from "./types";
import styles from "./styles/trust.module.css";
import shared from "./styles/shared.module.css";
import { TrustItem } from "./ui/TrustItem";

/** Purchase guarantees, sitting directly beneath the order block. */
export function TrustStrip({ points, label }: { points: TrustPoint[]; label: string }) {
  return (
    <section className={`${shared.section} ${styles.section}`} aria-label={label}>
      <div className={`${shared.panel} ${styles.panel}`}>
        {points.map((point) => (
          <TrustItem key={point.id} {...point} />
        ))}
      </div>
    </section>
  );
}
