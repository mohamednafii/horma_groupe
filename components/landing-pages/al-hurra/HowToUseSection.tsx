import { Fragment } from "react";

import type { SectionHeading, Step } from "./types";
import styles from "./styles/howto.module.css";
import shared from "./styles/shared.module.css";
import { SectionHead } from "./ui/SectionHead";
import { StepCard } from "./ui/StepCard";

const TITLE_ID = "alh-howto-title";

/** The usage steps, separated by forward-pointing arrows. */
export function HowToUseSection({ heading, steps }: { heading: SectionHeading; steps: Step[] }) {
  return (
    <section className={shared.section} aria-labelledby={TITLE_ID}>
      <SectionHead eyebrow={heading.eyebrow} title={heading.title} titleId={TITLE_ID} />

      <div className={`${shared.panel} ${styles.panel}`}>
        {steps.map((step, index) => (
          <Fragment key={step.id}>
            {/* The arrow sits between cards, never before the first one. */}
            {index > 0 ? (
              <div className={styles.arrow} aria-hidden="true">
                &larr;
              </div>
            ) : null}
            <StepCard {...step} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
