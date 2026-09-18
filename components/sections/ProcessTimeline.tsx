"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

import { Icon, type IconName } from "@/components/hg";
import { processSteps } from "@/lib/site-content";

/* Node coordinates in the curve's own viewBox (1200 × 300). The path below is
   built so its tangent is horizontal at each node, which makes the wave smooth
   and puts every node on a crest or in a trough. Keep the two in step: a node
   that drifts off its segment end no longer sits on the line. */
const VIEW = { w: 1200, h: 300 };
/* Troughs and crests alternate, which is what keeps the cards apart: a card
   floats above its own node, and its neighbours are then half a wave away
   vertically. Same-height neighbours would put the last card over node 03. */
const NODES = [
  { x: 150, y: 200 },
  { x: 470, y: 100 },
  { x: 800, y: 200 },
  { x: 1070, y: 100 },
];

/* One path per span rather than a single line: lighting the travelled part is
   then a colour swap on the first N spans, with no length maths at runtime.
   The last span is the dashed tail that runs off the right edge. */
const SPANS = [
  "M 0 175 C 40 195, 90 200, 150 200",
  "M 150 200 C 250 200, 370 100, 470 100",
  "M 470 100 C 570 100, 700 200, 800 200",
  "M 800 200 C 890 200, 980 100, 1070 100",
];
const TAIL = "M 1070 100 C 1120 100, 1160 88, 1200 80";

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

export function ProcessTimeline() {
  /* Step 02 opens by default, so the interaction explains itself without a
     first hover — the same habit as the FAQ, which opens on its first row. */
  const [selected, setSelected] = useState<number | null>(1);
  /* Hover and keyboard focus preview a step without committing to it; letting
     go falls back to the selected one, so exactly one card is ever open. */
  const [preview, setPreview] = useState<number | null>(null);
  const shown = preview ?? selected;

  return (
    <div className="hg-process-timeline">
      <div className="hg-process-track" onMouseLeave={() => setPreview(null)}>
        <svg
          className="hg-process-curve"
          viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
          /* The curve stretches to the track; `non-scaling-stroke` keeps the
             line a hairline at any width and on any pixel density. */
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          {SPANS.map((d, i) => (
            <path
              key={d}
              className="hg-process-curve__span"
              data-lit={shown !== null && i <= shown ? "true" : "false"}
              d={d}
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <path className="hg-process-curve__tail" d={TAIL} vectorEffect="non-scaling-stroke" />
        </svg>

        {/* Two freight glyphs sitting under the line, at the scale of a caption
            rather than an illustration. */}
        <span className="hg-process-glyph" style={{ left: "27%", top: "80%" }} aria-hidden="true">
          <Icon name="ship" size={30} />
        </span>
        <span className="hg-process-glyph" style={{ left: "79%", top: "78%" }} aria-hidden="true">
          <Icon name="truck" size={30} />
        </span>

        <ol className="hg-process-steps">
          {processSteps.map((step, i) => {
            const open = shown === i;
            const panelId = `process-panel-${i}`;
            const buttonId = `process-step-${i}`;
            const number = `/${String(i + 1).padStart(2, "0")}`;
            return (
              <li
                key={step.title}
                className="hg-process-step"
                data-open={open ? "true" : "false"}
                /* The first and last cards are pulled back towards the middle
                   so they stay inside the container; the tip follows. */
                data-edge={i === 0 ? "start" : i === processSteps.length - 1 ? "end" : undefined}
                style={
                  {
                    "--node-x": pct(NODES[i].x, VIEW.w),
                    "--node-y": pct(NODES[i].y, VIEW.h),
                  } as CSSProperties
                }
              >
                <button
                  type="button"
                  id={buttonId}
                  className="hg-process-node"
                  aria-expanded={open}
                  aria-controls={panelId}
                  /* Clearing the preview lets a tap close the step it just
                     opened: a touch fires mouseenter before click and never
                     fires mouseleave, so the preview would otherwise hold it
                     open against the press. */
                  onClick={() => {
                    setPreview(null);
                    setSelected(selected === i ? null : i);
                  }}
                  onMouseEnter={() => setPreview(i)}
                  onFocus={() => setPreview(i)}
                  onBlur={() => setPreview(null)}
                >
                  <span className="hg-process-node__dot" aria-hidden="true">
                    <Icon name={step.icon as IconName} size={19} />
                  </span>
                  <span className="hg-process-node__label">
                    <span className="hg-process-node__num hg-mono">{number}</span>
                    <span className="hg-process-node__title">{step.title}</span>
                  </span>
                </button>

                <div
                  className="hg-process-panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={open ? undefined : true}
                >
                  <div className="hg-process-card">
                    <span className="hg-process-card__num hg-mono">{number}</span>
                    <h3 className="hg-process-card__title">{step.title}</h3>
                    <p className="hg-process-card__body">{step.body}</p>
                    <span className="hg-process-card__tip" aria-hidden="true" />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
