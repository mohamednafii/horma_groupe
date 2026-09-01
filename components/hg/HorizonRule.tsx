import type { CSSProperties } from "react";

/* Two structural line treatments: the sea-horizon rule that fades at both
   ends, and the dashed trade route. Sections are separated by the horizon. */
export function HorizonRule({
  variant = "horizon",
  inverse = false,
  style,
}: {
  variant?: "horizon" | "route" | "solid";
  inverse?: boolean;
  style?: CSSProperties;
}) {
  const background =
    variant === "route"
      ? inverse
        ? "repeating-linear-gradient(90deg,rgba(255,255,255,.4) 0 4px,transparent 4px 10px)"
        : "var(--line-route)"
      : variant === "solid"
        ? inverse
          ? "var(--border-inverse)"
          : "var(--border-default)"
        : inverse
          ? "linear-gradient(90deg,transparent,rgba(255,255,255,.22) 12%,rgba(255,255,255,.22) 88%,transparent)"
          : "var(--line-horizon)";

  return <div role="separator" style={{ width: "100%", height: 1, flex: "none", background, ...style }} />;
}
