import type { CSSProperties, ReactNode } from "react";

export type SectionLabelTone = "brand" | "inverse" | "quiet";

/* The eyebrow pill that opens every Horma marketing section. Orange on light,
   translucent white on navy. Uppercase 11px — the only 11px text in the system. */
export function SectionLabel({
  children,
  tone = "brand",
  style,
}: {
  children: ReactNode;
  tone?: SectionLabelTone;
  style?: CSSProperties;
}) {
  const skin: CSSProperties =
    tone === "inverse"
      ? { background: "rgba(255,255,255,.12)", color: "var(--white)", border: "1px solid rgba(255,255,255,.24)" }
      : tone === "quiet"
        ? { background: "var(--white)", color: "var(--orange-600)", border: "1px solid var(--orange-200)" }
        : { background: "var(--action-primary)", color: "var(--white)", border: "1px solid var(--action-primary)" };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        alignSelf: "flex-start",
        height: 28,
        padding: "0 14px",
        borderRadius: "var(--radius-pill)",
        font: "var(--type-overline)",
        letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase",
        ...skin,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
