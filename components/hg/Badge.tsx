import type { CSSProperties, ReactNode } from "react";

import { Icon, type IconName } from "./Icon";

export type BadgeTone = "brand" | "trust" | "neutral" | "success" | "warning" | "error" | "solid" | "inverse";

const TONES: Record<BadgeTone, { bg: string; fg: string; bd: string }> = {
  brand: { bg: "var(--surface-brand-soft)", fg: "var(--orange-700)", bd: "var(--orange-200)" },
  trust: { bg: "var(--surface-trust-soft)", fg: "var(--blue-600)", bd: "var(--blue-200)" },
  neutral: { bg: "var(--ink-050)", fg: "var(--text-body)", bd: "var(--border-default)" },
  success: { bg: "var(--success-50)", fg: "var(--success-700)", bd: "#BFE3CE" },
  warning: { bg: "var(--warning-50)", fg: "var(--warning-700)", bd: "#EBD6A6" },
  error: { bg: "var(--error-50)", fg: "var(--error-700)", bd: "#F0C2BC" },
  solid: { bg: "var(--action-primary)", fg: "var(--white)", bd: "var(--action-primary)" },
  inverse: { bg: "rgba(255,255,255,.12)", fg: "var(--white)", bd: "rgba(255,255,255,.22)" },
};

export function Badge({
  children,
  tone = "neutral",
  icon,
  size = "md",
  style,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: IconName;
  size?: "sm" | "md";
  style?: CSSProperties;
}) {
  const t = TONES[tone];
  const sm = size === "sm";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: sm ? 22 : 26,
        padding: sm ? "0 8px" : "0 10px",
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        borderRadius: "var(--radius-pill)",
        font: "var(--type-overline)",
        fontSize: sm ? 10 : 11,
        letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {icon ? <Icon name={icon} size={sm ? 12 : 13} /> : null}
      {children}
    </span>
  );
}
