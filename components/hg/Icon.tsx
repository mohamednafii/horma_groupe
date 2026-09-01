import type { CSSProperties } from "react";

/* Horma geometric icon set — 24px grid, 1.75px stroke, square caps, mitred
   joins. Cut to the same hard geometry as the logo. Stroke only: the system
   allows no filled glyphs, no emoji and no third-party icon font.
   Source: design system → components/core/Icon.jsx */
export const HORMA_ICONS = {
  globe: "M12 3a9 9 0 100 18 9 9 0 000-18ZM3 12h18M12 3c3 3.6 3 14.4 0 18M12 3c-3 3.6-3 14.4 0 18",
  container: "M2 7h20v10H2zM6.5 7v10M10.5 7v10M14.5 7v10M18.5 7v10",
  containerStack: "M3 4h18v6H3zM3 14h18v6H3zM7.5 4v6M12 4v6M16.5 4v6M7.5 14v6M12 14v6M16.5 14v6",
  ship: "M2.5 14h19l-2.5 6H5zM12 3v11M12 5.5l6 2.8-6 2.8",
  plane: "M2 13.5 21.5 6.5 14 20l-2.2-5.4z",
  truck: "M1.5 7h11.5v9H1.5zM13 11h4l3.5 3.5V16H13M5.5 16.5a2 2 0 100 4 2 2 0 000-4M17.5 16.5a2 2 0 100 4 2 2 0 000-4",
  train: "M5 3h14v13H5zM5 10h14M4 20l2-4M20 20l-2-4M9 6.5h2M13 6.5h2",
  warehouse: "M2 10 12 4l10 6v10H2zM9 20v-6h6v6",
  package: "M3 7 12 3l9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10",
  route: "M5 17a2 2 0 100 4 2 2 0 000-4M19 3a2 2 0 100 4 2 2 0 000-4M7 19h6a4 4 0 004-4V7",
  anchor: "M12 2.5a2 2 0 100 4 2 2 0 000-4M12 6.5V21M5 13a7 7 0 0014 0M8.5 9.5h7",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14M16.2 16.2 21 21",
  filter: "M3 5h18l-7 8.2V20l-4-2.2v-4.6z",
  chevronRight: "M9.5 5 16.5 12 9.5 19",
  chevronLeft: "M14.5 5 7.5 12 14.5 19",
  chevronDown: "M5 9.5 12 16.5 19 9.5",
  arrowRight: "M4 12h15M13 6l6 6-6 6",
  arrowLeft: "M20 12H5M11 6l-6 6 6 6",
  arrowUpRight: "M7 17 17 7M9 7h8v8",
  check: "M4 12.5 9 17.5 20 6.5",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  close: "M6 6 18 18M18 6 6 18",
  menu: "M3 6h18M3 12h18M3 18h18",
  user: "M12 4a4 4 0 100 8 4 4 0 000-8M4 21c1.6-4 4.4-6 8-6s6.4 2 8 6",
  users: "M9 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7M2.5 20c1.4-3.4 3.7-5 6.5-5s5.1 1.6 6.5 5M16 5.2a3.2 3.2 0 010 6.1M18 20c-.4-1.9-1-3.4-1.8-4.6 2.6.2 4.3 1.8 5.3 4.6",
  building: "M4 3h16v18H4zM8 7h3M13 7h3M8 11h3M13 11h3M9.5 21v-5h5v5",
  fileText: "M6 2h8l4 4v16H6zM14 2v4h4M9 12h6M9 16h6",
  shieldCheck: "M12 2 20 5v7c0 5-3.5 8.4-8 10-4.5-1.6-8-5-8-10V5z M8.5 12l2.6 2.6L16 9.6",
  clock: "M12 3a9 9 0 100 18 9 9 0 000-18M12 7v5.2l3.8 2.2",
  calendar: "M3 5h18v16H3zM3 10h18M8 3v4M16 3v4",
  mail: "M2 5h20v14H2zM2.5 6.5 12 13.8l9.5-7.3",
  phone: "M5 4h4l1.6 4.6-2.2 1.5a11 11 0 005.5 5.5l1.5-2.2L20 15v4h-2C11.4 19 5 12.6 5 6z",
  mapPin: "M12 21.5S19 14.4 19 10a7 7 0 10-14 0c0 4.4 7 11.5 7 11.5M12 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5",
  cart: "M2.5 4h3l2.7 11h9.4L21 7.2H7M9 17.6a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6M18 17.6a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6",
  heart: "M12 20.2S3 14.6 3 9.2A4.9 4.9 0 0 1 12 6.6 4.9 4.9 0 0 1 21 9.2c0 5.4-9 11-9 11",
  star: "M12 3.2l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 10l6.5-.9z",
  download: "M12 3v12M7 11l5 5 5-5M4 20h16",
  upload: "M12 20V8M7 12l5-5 5 5M4 4h16",
  externalLink: "M14 4h6v6M20 4l-9 9M18 14.5V19H5V6h4.5",
  grid: "M3 3h7.5v7.5H3zM13.5 3H21v7.5h-7.5zM3 13.5h7.5V21H3zM13.5 13.5H21V21h-7.5z",
  layers: "M12 3 21 8l-9 5-9-5zM3 12.5 12 17.5l9-5M3 17 12 22l9-5",
  chart: "M4 20V4M4 20h16M8 20v-6M13 20v-10M18 20v-4",
  trendingUp: "M4 17 10 11l3.5 3.5L21 7M15 7h6v6",
  sparkle: "M11 3.5l2 5.4 5.4 2-5.4 2-2 5.4-2-5.4-5.4-2 5.4-2zM18.6 15.4l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z",
  message: "M4 5h16v11H9.5L4 20z",
  quote: "M9 6C6 7.5 4.5 10 4.5 13V18h5v-6H7c0-2 .7-3.6 2-4.6zM19 6c-3 1.5-4.5 4-4.5 7v5h5v-6H17c0-2 .7-3.6 2-4.6z",
  checkCircle: "M12 3a9 9 0 100 18 9 9 0 000-18M8 12.2l2.8 2.8L16.5 9.3",
  alert: "M12 3.5 22 20H2zM12 9.5v5M12 17h.01",
  info: "M12 3a9 9 0 100 18 9 9 0 000-18M12 11v6M12 7.8h.01",
  tag: "M20.5 12.5 12.5 20.5 3.5 11.5V3.5h8zM8 8h.01",
  box: "M4 4h16v16H4zM4 9.5h16M9.5 4v5.5",
  scale: "M12 4v16M6 8h12M6 8 3.5 15h5zM18 8l-2.5 7h5zM8.5 20h7",
  refresh: "M20 8a9 9 0 10-1.5 10M20 3v5h-5",
  lock: "M6 11h12v10H6zM9 11V8a3 3 0 016 0v3M12 15v2.5",
  eye: "M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12M12 9a3 3 0 100 6 3 3 0 000-6",
  play: "M7 4.5 19 12 7 19.5z",
  more: "M6 12h.01M12 12h.01M18 12h.01",
} as const;

export type IconName = keyof typeof HORMA_ICONS;

type Props = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  color?: string;
  /** Supply when the icon carries meaning on its own; otherwise it is hidden. */
  label?: string;
  style?: CSSProperties;
  className?: string;
};

export function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  label,
  style,
  className,
}: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role={label ? "img" : "presentation"}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      style={{ display: "block", flex: "none", ...style }}
    >
      <path
        d={HORMA_ICONS[name]}
        stroke={color}
        // Above 32px the system drops the stroke to 1.5 so the glyph stays light.
        strokeWidth={size > 32 ? 1.5 : strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
