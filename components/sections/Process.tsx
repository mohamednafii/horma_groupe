import { Card, HorizonRule, Reveal, Section, SectionHead } from "@/components/hg";
import { processSteps } from "@/lib/site-content";

/* Four-step process. Counters are zero-padded in mono — the manifest habit the
   system uses for steps, carousels and pagination. */
export function Process() {
  return (
    <Section tone="sand" id="processus">
      <Reveal>
        <SectionHead
          eyebrow="Comment ça marche"
          title="Quatre étapes, à l'import comme à l'export"
          lead="Chaque étape a une date, un livrable et un responsable nommé."
        />
      </Reveal>

      <Reveal delay={60}>
        <HorizonRule style={{ marginBlock: 40 }} />
      </Reveal>

      <div className="hg-grid-4">
        {processSteps.map((step, i) => (
          <Reveal key={step.title} delay={i * 70}>
            <Card padding="lg" interactive style={{ display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>
              <span className="hg-mono" style={{ color: "var(--action-primary)" }}>
                /{String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{ font: "var(--type-h4)" }}>{step.title}</h3>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>{step.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
