import shared from "../styles/shared.module.css";

type Props = {
  eyebrow: string;
  title: string;
  /** Ties the section's `aria-labelledby` to this heading. */
  titleId?: string;
  /** Light-on-dark treatment, used by the order section. */
  inverse?: boolean;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
};

/** Eyebrow, heading and ornamental rule — the header of every content section. */
export function SectionHead({
  eyebrow,
  title,
  titleId,
  inverse = false,
  className,
  eyebrowClassName,
  titleClassName,
}: Props) {
  return (
    <div className={[shared.sectionHead, className].filter(Boolean).join(" ")}>
      <p className={[shared.eyebrow, eyebrowClassName].filter(Boolean).join(" ")}>{eyebrow}</p>
      <h2 id={titleId} className={[shared.sectionTitle, titleClassName].filter(Boolean).join(" ")}>
        {title}
      </h2>
      <div
        className={[shared.rule, inverse ? shared.ruleInverse : null].filter(Boolean).join(" ")}
        aria-hidden="true"
      >
        <span className={shared.lozenge} />
      </div>
    </div>
  );
}
