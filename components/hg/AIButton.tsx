import type { ButtonHTMLAttributes, ReactNode } from "react";

import { BUTTON_ICON_SIZE, Button, type ButtonSize } from "./Button";
import { Icon } from "./Icon";

/* The AI action, one step warmer than a tertiary button and one step quieter
   than the orange primary: the brand-soft surface the system already uses for
   badges and nav hovers, with the sparkle from the icon set.

   It composes Button rather than restating it, so height, padding, type, gap,
   press scale and the href/button split all keep coming from one place. Only
   the skin and the loading glyph are its own. */
export function AIButton({
  children = "Ask AI",
  size = "md",
  loading = false,
  inverse = false,
  disabled = false,
  style,
  ...rest
}: {
  children?: ReactNode;
  size?: ButtonSize;
  /** Swaps the sparkle for a spinner and takes the button out of service. */
  loading?: boolean;
  /** Light treatment for the navy bands — the system's dark surface. */
  inverse?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">) {
  const glyph = BUTTON_ICON_SIZE[size];

  return (
    <Button
      variant="ai"
      size={size}
      inverse={inverse}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      /* Button hard-codes `cursor: pointer` inline, so the unavailable cursor
         has to come through the style prop to out-rank it. */
      style={{ cursor: disabled || loading ? "not-allowed" : "pointer", ...style }}
      {...rest}
    >
      {/* Both glyphs occupy the same box, so the label never shifts when the
          button starts working. */}
      <span className="hg-ai-btn__glyph" style={{ width: glyph, height: glyph }} aria-hidden="true">
        {loading ? (
          <svg className="hg-ai-btn__spinner" viewBox="0 0 24 24" width={glyph} height={glyph} focusable="false">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.25" opacity="0.25" />
            <path
              d="M12 3a9 9 0 0 1 9 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <Icon name="sparkle" size={glyph} />
        )}
      </span>
      {children}
    </Button>
  );
}
