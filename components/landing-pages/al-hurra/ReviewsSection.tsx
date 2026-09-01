import type { Review, SectionHeading } from "./types";
import styles from "./styles/reviews.module.css";
import shared from "./styles/shared.module.css";
import { ReviewCard } from "./ui/ReviewCard";
import { SectionHead } from "./ui/SectionHead";

const TITLE_ID = "alh-reviews-title";

/** Customer reviews, with the decorative pager dots from the source design. */
export function ReviewsSection({
  heading,
  reviews,
  starsLabel,
}: {
  heading: SectionHeading;
  reviews: Review[];
  starsLabel: string;
}) {
  return (
    <section className={shared.section} aria-labelledby={TITLE_ID}>
      <SectionHead eyebrow={heading.eyebrow} title={heading.title} titleId={TITLE_ID} />

      <div className={styles.list}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} starsLabel={starsLabel} />
        ))}
      </div>

      <div className={styles.dots} aria-hidden="true">
        {reviews.map((review, index) => (
          <span
            key={review.id}
            className={[styles.dot, index === reviews.length - 1 ? styles.dotActive : null]
              .filter(Boolean)
              .join(" ")}
          />
        ))}
      </div>
    </section>
  );
}
