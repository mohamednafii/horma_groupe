import type { CSSProperties } from "react";

/* Loading placeholder. Sizes are passed by the caller so a skeleton can be cut
   to the exact block it stands in for — the point is that nothing shifts when
   the real content arrives. The sheen stops under reduced motion. */
export function Skeleton({
  width,
  height,
  radius = "var(--radius-xs)",
  style,
}: {
  width?: number | string;
  height?: number | string;
  radius?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className="hg-skeleton"
      aria-hidden="true"
      style={{ width, height, borderRadius: radius, ...style }}
    />
  );
}
