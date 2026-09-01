import Image from "next/image";
import type { CSSProperties } from "react";

/* The supplied brand artwork, never redrawn.
   - `horizontal` pairs the globe mark with the wordmark set in live type,
     which is what the header and footer use.
   - `stacked` and `mark` use the supplied lockups directly.
   White variants exist for navy surfaces; the raster is never inverted in CSS
   because inversion maps the brand orange to blue. */
export type LogoVariant = "horizontal" | "stacked" | "mark";

export function Logo({
  variant = "horizontal",
  height = 36,
  inverse = false,
  sub = "Import & Export",
  style,
}: {
  variant?: LogoVariant;
  height?: number;
  inverse?: boolean;
  /** Pass null to drop the descriptor line. */
  sub?: string | null;
  style?: CSSProperties;
}) {
  if (variant === "mark") {
    return (
      <Image
        src="/brand/horma-mark.webp"
        alt="Horma Group"
        width={270}
        height={210}
        style={{ height, width: "auto", ...style }}
        priority
      />
    );
  }

  if (variant === "stacked") {
    return (
      <Image
        src={inverse ? "/brand/horma-logo-stacked-white.webp" : "/brand/horma-logo-stacked.webp"}
        alt="Horma Group"
        width={616}
        height={340}
        style={{ height, width: "auto", ...style }}
        priority
      />
    );
  }

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10, ...style }}>
      <Image
        src="/brand/horma-mark.webp"
        alt=""
        width={270}
        height={210}
        style={{ height, width: "auto" }}
        priority
      />
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            font: `var(--weight-bold) ${Math.round(height * 0.46)}px/1 var(--font-display)`,
            letterSpacing: "-0.01em",
            color: inverse ? "var(--white)" : "var(--ink-900)",
          }}
        >
          HORMA GROUP
        </span>
        {sub !== null ? (
          <span
            style={{
              marginTop: 3,
              font: `var(--weight-medium) ${Math.max(9, Math.round(height * 0.2))}px/1.4 var(--font-body)`,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: inverse ? "rgba(255,255,255,.7)" : "var(--text-muted)",
            }}
          >
            {sub}
          </span>
        ) : null}
      </span>
    </span>
  );
}
