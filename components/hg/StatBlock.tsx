import type { CSSProperties } from "react";

import { Icon, type IconName } from "./Icon";

/* Proof figure: big tabular number over a quiet label. The system asks for
   numbers that are named and bounded, so `label` carries the qualifier. */
export function StatBlock({
  value,
  label,
  sublabel,
  icon,
  inverse = false,
  size = "md",
  style,
}: {
  value: string;
  label: string;
  sublabel?: string;
  icon?: IconName;
  inverse?: boolean;
  size?: "md" | "lg";
  style?: CSSProperties;
}) {
  const big = size === "lg";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {icon ? (
          <Icon name={icon} size={big ? 24 : 18} color={inverse ? "var(--orange-300)" : "var(--action-primary)"} />
        ) : null}
        <span
          style={{
            font: big ? "var(--type-display-2)" : "var(--type-h2)",
            letterSpacing: "var(--tracking-display)",
            color: inverse ? "var(--white)" : "var(--text-strong)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {value}
        </span>
      </div>
      <span style={{ font: "var(--type-body-sm)", color: inverse ? "var(--text-on-inverse-muted)" : "var(--text-muted)" }}>
        {label}
      </span>
      {sublabel ? (
        <span style={{ font: "var(--type-caption)", color: inverse ? "rgba(255,255,255,.44)" : "var(--text-subtle)" }}>
          {sublabel}
        </span>
      ) : null}
    </div>
  );
}
