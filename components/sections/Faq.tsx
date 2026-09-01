"use client";

import { useState } from "react";

import { HorizonRule, Icon, Section, SectionHead } from "@/components/hg";
import { faqs } from "@/lib/site-content";

/* FAQ — hairline-separated rows, no card per question. The system separates
   lists with rules rather than boxing every item. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section tone="paper" id="faq">
      <div className="hg-split">
        <SectionHead
          eyebrow="FAQ"
          title="Les questions qui reviennent avant un premier dossier"
          lead="Si la vôtre n'y est pas, écrivez-nous : la réponse arrive sous un jour ouvré."
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={faq.q}>
                <HorizonRule variant="solid" />
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      width: "100%",
                      minHeight: 68,
                      padding: "18px 0",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "start",
                      font: "var(--type-h5)",
                      fontFamily: "var(--font-body)",
                      color: "var(--text-strong)",
                    }}
                  >
                    <span style={{ flex: 1 }}>{faq.q}</span>
                    <span
                      aria-hidden="true"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 32,
                        height: 32,
                        flex: "none",
                        borderRadius: "var(--radius-sm)",
                        background: isOpen ? "var(--action-primary)" : "var(--surface-sunken)",
                        color: isOpen ? "var(--white)" : "var(--text-body)",
                        transition: "var(--transition-control)",
                      }}
                    >
                      <Icon name={isOpen ? "minus" : "plus"} size={16} />
                    </span>
                  </button>
                </h3>
                {isOpen ? (
                  <p
                    id={panelId}
                    style={{
                      paddingBottom: 22,
                      maxWidth: 620,
                      font: "var(--type-body-sm)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {faq.a}
                  </p>
                ) : null}
              </div>
            );
          })}
          <HorizonRule variant="solid" />
        </div>
      </div>
    </Section>
  );
}
