import type { ReactNode } from "react";

import { Card, HorizonRule, Reveal, Section, SectionLabel } from "@/components/hg";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";

/* Shared shell for the two legal routes. Long-form copy sits on the system's
   820px narrow measure; clauses are separated by hairlines with a zero-padded
   mono counter, not boxed one card per clause. */
export function LegalPage({
  eyebrow,
  title,
  lead,
  updated,
  intro,
  sections,
  footer,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  updated?: string;
  intro: string;
  sections: { title: string; body: string }[];
  footer: { title: string; body: ReactNode };
}) {
  return (
    <div className="hg-site">
      <SiteHeader />
      <main>
        <section style={{ background: "var(--navy-900)" }}>
          <div className="hg-container" style={{ paddingBlock: "clamp(56px, 8vw, 88px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 700 }}>
              <SectionLabel tone="inverse">{eyebrow}</SectionLabel>
              <h1 style={{ color: "var(--white)" }}>{title}</h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-on-inverse-muted)" }}>{lead}</p>
              {updated ? (
                <span className="hg-mono" style={{ color: "rgba(255,255,255,.5)" }}>
                  {updated}
                </span>
              ) : null}
            </div>
          </div>
        </section>

        <Section tone="paper" size="lg">
          <div style={{ maxWidth: "var(--container-narrow)" }}>
            <Reveal>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)", paddingBottom: 40 }}>{intro}</p>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {sections.map((section, index) => (
                <Reveal key={section.title} delay={index * 40}>
                  <HorizonRule variant="solid" />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "56px minmax(0, 1fr)",
                      gap: 24,
                      padding: "32px 0",
                    }}
                  >
                    <span className="hg-mono" style={{ color: "var(--action-primary)" }}>
                      /{String(index + 1).padStart(2, "0")}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <h2 style={{ font: "var(--type-h4)" }}>{section.title}</h2>
                      <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>{section.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <HorizonRule variant="solid" />
            </div>

            <Reveal delay={60}>
              <Card variant="sunken" padding="lg" style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 8 }}>
                <h2 style={{ font: "var(--type-h4)" }}>{footer.title}</h2>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-body)" }}>{footer.body}</p>
              </Card>
            </Reveal>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
