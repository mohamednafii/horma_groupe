import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import { Icon, type IconName } from "./Icon";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost" | "ai";
export type ButtonSize = "sm" | "md" | "lg";

/* Heights and padding come straight from the design system's Button.
   Only the orange primary carries a shadow, and only one primary is allowed
   per band. */
const SIZES: Record<ButtonSize, { h: number; padX: number; font: string; icon: number; gap: number }> = {
  sm: { h: 36, padX: 14, font: "var(--text-caption)", icon: 16, gap: 6 },
  md: { h: 44, padX: 20, font: "var(--text-body-sm)", icon: 18, gap: 8 },
  lg: { h: 52, padX: 26, font: "var(--text-body)", icon: 20, gap: 10 },
};

/** The icon box each size uses. Exported so a button composed on top of this
    one can draw its own glyph — a spinner, say — at exactly the size the
    `icon` prop would have given it, and keep the button's width stable. */
export const BUTTON_ICON_SIZE: Record<ButtonSize, number> = {
  sm: SIZES.sm.icon,
  md: SIZES.md.icon,
  lg: SIZES.lg.icon,
};

function skin(variant: ButtonVariant, inverse: boolean): CSSProperties {
  switch (variant) {
    /* The AI variant paints nothing inline on purpose: its surface, hover,
       press, focus and disabled states all live in `.hg-btn[data-variant="ai"]`
       in globals.css. An inline colour here would out-rank every one of them. */
    case "ai":
      return {};
    case "secondary":
      return {
        background: "var(--action-secondary)",
        color: "var(--white)",
        border: "1px solid var(--action-secondary)",
      };
    case "tertiary":
      return inverse
        ? {
            background: "rgba(255,255,255,.10)",
            color: "var(--white)",
            border: "1px solid rgba(255,255,255,.28)",
          }
        : {
            background: "var(--white)",
            color: "var(--text-strong)",
            border: "1px solid var(--border-default)",
          };
    case "ghost":
      return {
        background: "transparent",
        color: inverse ? "var(--white)" : "var(--text-strong)",
        border: "1px solid transparent",
      };
    default:
      return {
        background: "var(--action-primary)",
        color: "var(--text-on-brand)",
        border: "1px solid var(--action-primary)",
      };
  }
}

type CommonProps = {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  iconAfter?: IconName;
  block?: boolean;
  /** Light treatment for use over navy or a photo scrim. */
  inverse?: boolean;
  className?: string;
  style?: CSSProperties;
};

type Props = CommonProps &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | "href">)
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>)
  );

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  block = false,
  inverse = false,
  className,
  style,
  ...rest
}: Props) {
  const s = SIZES[size];
  const base: CSSProperties = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.h,
    padding: `0 ${s.padX}px`,
    minWidth: size === "sm" ? undefined : "var(--tap-min)",
    font: "var(--type-button)",
    fontSize: s.font,
    letterSpacing: "var(--tracking-tight)",
    borderRadius: "var(--radius-button)",
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    /* `undefined` for the AI variant, not "none": an inline shadow would beat
       both its hover glow and the system's :focus-visible ring. */
    boxShadow: variant === "primary" ? "var(--shadow-brand)" : variant === "ai" ? undefined : "none",
    ...skin(variant, inverse),
    ...style,
  };

  const cls = ["hg-btn", className].filter(Boolean).join(" ");
  const inner = (
    <>
      {icon ? <Icon name={icon} size={s.icon} /> : null}
      {children}
      {iconAfter ? <Icon name={iconAfter} size={s.icon} /> : null}
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchorRest } = rest as { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        className={cls}
        href={href}
        style={base}
        data-variant={variant}
        data-inverse={inverse ? "" : undefined}
        {...anchorRest}
      >
        {inner}
      </a>
    );
  }

  const { type = "button", ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      className={cls}
      type={type}
      style={base}
      data-variant={variant}
      data-inverse={inverse ? "" : undefined}
      {...buttonRest}
    >
      {inner}
    </button>
  );
}
