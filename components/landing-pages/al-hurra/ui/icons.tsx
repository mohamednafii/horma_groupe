import type { ReactNode } from "react";

import type { IconName } from "../types";

/* ==========================================================================
   Line icons, transcribed verbatim from the source landing page.

   Each call site in the original markup sets its own size, stroke colour and
   stroke width, so those stay props rather than being baked in.
   ========================================================================== */

const GLYPHS: Record<IconName, ReactNode> = {
  shield: (
    <>
      <path d="M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6z" />
      <path d="M9 12.2l2 2 4-4.2" />
    </>
  ),
  leaf: (
    <>
      <path d="M12 3.2c3.7 4.1 5.6 7 5.6 9.6a5.6 5.6 0 11-11.2 0c0-2.6 1.9-5.5 5.6-9.6z" />
      <path d="M9.7 15c2.4.3 4.4-1.3 4.6-3.8-2.4-.3-4.4 1.3-4.6 3.8z" />
      <path d="M11 17.4c0-1.4.5-2.6 1.4-3.5" />
    </>
  ),
  sparkle: (
    <>
      <path d="M10.5 3.5l1.7 4.3 4.3 1.7-4.3 1.7-1.7 4.3-1.7-4.3L4.5 9.5l4.3-1.7z" />
      <path d="M17.8 14.2l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" />
      <path d="M5.6 17.6l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5z" />
    </>
  ),
  drop: (
    <>
      <path d="M3.4 15.6c2.2 3.1 5.2 4.7 8.6 4.7s6.4-1.6 8.6-4.7" />
      <path d="M12 13.2c0-3.7 2.7-6.7 6.2-6.7 0 3.7-2.7 6.7-6.2 6.7z" />
      <path d="M12 13.2C12 9.5 9.3 6.5 5.8 6.5c0 3.7 2.7 6.7 6.2 6.7z" />
      <path d="M12 13.2v3.1" />
    </>
  ),
  morocco: (
    <>
      <path d="M5 19.5c0-7.2 5.7-12.8 14.2-13.3.5 8.7-5.2 14.3-13.4 14.3H5z" />
      <path d="M5 19.5c3.6-3.6 6.7-6.2 11.3-8.7" />
    </>
  ),
  "no-chemicals": (
    <>
      <path d="M12 3.6a8.4 8.4 0 108.4 8.4" />
      <path d="M4.6 4.6l14.8 14.8" />
      <path d="M15.6 3.6h5v5" />
    </>
  ),
  cash: (
    <>
      <rect x="2.5" y="6" width="19" height="10" rx="1.6" />
      <circle cx="12" cy="11" r="2.6" />
      <path d="M5.6 8.8h.01M18.4 13.2h.01" />
      <path d="M5 19h14" />
    </>
  ),
  truck: (
    <>
      <path d="M8.5 6.5h8.2v9.8H8.5z" />
      <path d="M16.7 10h2.4l2.4 2.9v3.4h-4.8z" />
      <circle cx="11" cy="17.8" r="1.7" />
      <circle cx="18.4" cy="17.8" r="1.7" />
      <path d="M2 8.8h4.2M1 12h4.6M2.6 15.2h3.6" />
    </>
  ),
  support: (
    <>
      <path d="M4.6 14.6v-2.4a7.4 7.4 0 0114.8 0v2.4" />
      <rect x="2.6" y="13.4" width="3.6" height="5.6" rx="1.5" />
      <rect x="17.8" y="13.4" width="3.6" height="5.6" rx="1.5" />
      <path d="M19.4 19a3 3 0 01-3 2.4h-2" />
      <circle cx="12.4" cy="21.4" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10.5" width="16" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 018 0v3" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20 11.5a7.5 7.5 0 01-11 6.6L4 19.5l1.4-4.8A7.5 7.5 0 1120 11.5z" />
      <path d="M9 9.5c.4 2.6 2.4 4.6 5 5l1-1.4 2 .9-.4 1.6c-2.9.5-6.6-2.8-7.2-6.4l1.6-.4z" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  size: number;
  /** Any CSS colour; the source markup passes design tokens. */
  stroke: string;
  strokeWidth: number;
  className?: string;
};

export function Icon({ name, size, stroke, strokeWidth, className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      // `currentColor` lets the one filled sub-shape (the Instagram dot) follow
      // the stroke colour without a second prop.
      color={stroke}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {GLYPHS[name]}
    </svg>
  );
}

/* ── Masthead ornaments ──────────────────────────────────────────────────── */

/**
 * The repeating interlace band beside the logo. `id` must be unique per
 * instance because the gradient, mask and pattern are referenced by `url(#…)`.
 */
export function FriezeBand({ id, className }: { id: string; className?: string }) {
  const fade = `${id}Fade`;
  const mask = `${id}Mask`;
  const pattern = `${id}Pattern`;

  return (
    <svg className={className} width="100%" height="40" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={fade} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--white)" stopOpacity="0" />
          <stop offset="0.45" stopColor="var(--white)" stopOpacity="0.7" />
          <stop offset="1" stopColor="var(--white)" stopOpacity="1" />
        </linearGradient>
        <mask id={mask}>
          <rect x="0" y="0" width="100%" height="40" fill={`url(#${fade})`} />
        </mask>
        <pattern id={pattern} patternUnits="userSpaceOnUse" width="38" height="40">
          <g fill="none" stroke="var(--brass-400)" strokeWidth="1" strokeLinejoin="round">
            <rect x="12.5" y="14.5" width="13" height="13" />
            <rect x="12.5" y="14.5" width="13" height="13" transform="rotate(45 19 21)" />
            <path d="M0 21h5M33 21h5" />
          </g>
          <circle cx="19" cy="21" r="1.6" fill="var(--brass-400)" />
          <path d="M0 33.5h38" stroke="var(--border-hairline)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="40" fill={`url(#${pattern})`} mask={`url(#${mask})`} />
    </svg>
  );
}

/** The single interlaced square that caps each frieze. */
export function FriezeCap({ className }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false">
      <g fill="none" stroke="var(--brass-700)" strokeWidth="1.2">
        <rect x="5" y="5" width="16" height="16" />
        <rect x="5" y="5" width="16" height="16" transform="rotate(45 13 13)" />
      </g>
      <circle cx="13" cy="13" r="2.2" fill="var(--brass-700)" />
    </svg>
  );
}

/** The four-pointed star on the rule under the masthead. */
export function DividerMark({ className }: { className?: string }) {
  return (
    <svg className={className} width="46" height="10" viewBox="0 0 46 10" aria-hidden="true" focusable="false">
      <path d="M23 0l2.4 3.1L28.5 5l-3.1 1.9L23 10l-2.4-3.1L17.5 5l3.1-1.9z" fill="var(--brass-400)" />
      <path d="M6 5h8M32 5h8" stroke="var(--brass-200)" strokeWidth="1" />
    </svg>
  );
}
