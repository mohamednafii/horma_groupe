import type { Benefit, SectionHeading } from "./types";
import styles from "./styles/benefits.module.css";
import shared from "./styles/shared.module.css";
import { BenefitCard } from "./ui/BenefitCard";
import { SectionHead } from "./ui/SectionHead";

const TITLE_ID = "alh-benefits-title";

/**
 * Product benefits. The heading is optional: without one the row renders bare
 * under the hero, which is how the Aker Fassi page is laid out.
 */
export function BenefitsBar({
  benefits,
  label,
  heading,
}: {
  benefits: Benefit[];
  label: string;
  heading?: SectionHeading;
}) {
  return (
    <section
      className={shared.section}
      aria-label={heading ? undefined : label}
      aria-labelledby={heading ? TITLE_ID : undefined}
    >
      {heading ? (
        <SectionHead eyebrow={heading.eyebrow} title={heading.title} titleId={TITLE_ID} />
      ) : null}

      <div className={styles.list}>
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} {...benefit} />
        ))}
      </div>
    </section>
  );
}
