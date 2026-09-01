import type { ReactNode } from "react";

import { SectionLabel } from "./SectionLabel";

/* Every marketing band opens the same way: eyebrow, h2, one lead sentence.
   The lead is capped at a 640px measure so it never runs the full 1280 grid. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  inverse = false,
  align = "start",
  action,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  inverse?: boolean;
  align?: "start" | "center";
  action?: ReactNode;
}) {
  const centred = align === "center";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: centred ? "center" : "flex-start",
        textAlign: centred ? "center" : "start",
        maxWidth: centred ? 720 : 640,
        marginInline: centred ? "auto" : undefined,
      }}
    >
      <SectionLabel tone={inverse ? "inverse" : "brand"}>{eyebrow}</SectionLabel>
      <h2 style={{ color: inverse ? "var(--white)" : "var(--text-strong)" }}>{title}</h2>
      {lead ? (
        <p
          style={{
            font: "var(--type-body-lg)",
            color: inverse ? "var(--text-on-inverse-muted)" : "var(--text-muted)",
          }}
        >
          {lead}
        </p>
      ) : null}
      {action}
    </div>
  );
}
