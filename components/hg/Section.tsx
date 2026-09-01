import type { CSSProperties, ReactNode } from "react";

export type SectionTone = "paper" | "white" | "sand" | "navy";

/* Band shell. The system allows a maximum of two background colours per
   screenful, so tones alternate paper/white with at most one navy band. */
const BACKGROUNDS: Record<SectionTone, string> = {
  paper: "var(--bg-page)",
  white: "var(--white)",
  sand: "var(--bg-page-alt)",
  navy: "var(--navy-900)",
};

export function Section({
  children,
  tone = "paper",
  size = "md",
  id,
  className,
  style,
}: {
  children: ReactNode;
  tone?: SectionTone;
  size?: "md" | "lg";
  id?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <section
      id={id}
      className={["hg-section", size === "lg" ? "hg-section--lg" : null, className].filter(Boolean).join(" ")}
      style={{ background: BACKGROUNDS[tone], ...style }}
    >
      <div className="hg-container">{children}</div>
    </section>
  );
}
