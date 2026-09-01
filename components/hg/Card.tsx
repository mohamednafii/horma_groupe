import type { CSSProperties, ElementType, ReactNode } from "react";

export type CardVariant = "default" | "flat" | "sunken" | "raised" | "inverse" | "brand" | "trust";

/* Container-geometry surface: the single shell every Horma card composes.
   Default is white, 1px hairline, 20px radius, shadow-sm — no shadow drama. */
const SKINS: Record<CardVariant, CSSProperties> = {
  default: { background: "var(--surface-card)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" },
  flat: { background: "var(--surface-card)", border: "1px solid var(--border-default)", boxShadow: "none" },
  sunken: { background: "var(--surface-sunken)", border: "1px solid transparent", boxShadow: "none" },
  raised: { background: "var(--surface-card)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-md)" },
  inverse: { background: "var(--navy-800)", border: "1px solid var(--border-inverse)", boxShadow: "none", color: "var(--white)" },
  brand: { background: "var(--action-primary)", border: "1px solid var(--action-primary)", boxShadow: "var(--shadow-brand)", color: "var(--white)" },
  trust: { background: "var(--blue-500)", border: "1px solid var(--blue-500)", boxShadow: "var(--shadow-trust)", color: "var(--white)" },
};

const PADDING = { none: 0, sm: 16, md: "var(--pad-card)", lg: "var(--pad-card-lg)" } as const;

export function Card({
  children,
  variant = "default",
  padding = "md",
  radius = "card",
  interactive = false,
  as: Tag = "div",
  className,
  style,
  ...rest
}: {
  children?: ReactNode;
  variant?: CardVariant;
  padding?: keyof typeof PADDING;
  radius?: "card" | "card-lg" | "md" | "lg" | "xl";
  interactive?: boolean;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
} & Record<string, unknown>) {
  return (
    <Tag
      className={["hg-card", className].filter(Boolean).join(" ")}
      data-interactive={interactive ? "" : undefined}
      style={{
        position: "relative",
        padding: PADDING[padding],
        borderRadius: `var(--radius-${radius})`,
        overflow: "hidden",
        ...SKINS[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
