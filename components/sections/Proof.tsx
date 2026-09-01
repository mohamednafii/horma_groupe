import { Badge, Button, Card, Icon, Reveal, Section, SectionHead, StatBlock } from "@/components/hg";
import { proofStats, testimonial } from "@/lib/site-content";

/* The one navy band on the page — the system allows a single dark mid-page
   block for proof points. Stats sit beside the reference testimonial. */
export function Proof() {
  return (
    <Section tone="navy" size="lg" id="preuve">
      <div className="hg-split">
        <Reveal style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <SectionHead
            inverse
            eyebrow="Preuve"
            title="Des chiffres que nous pouvons documenter"
            lead="Réseau, volumes et dossiers traités. Les valeurs marquées « à confirmer » attendent encore leur source interne."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 32 }}>
            {proofStats.map((stat) => (
              <StatBlock key={stat.label} inverse value={stat.value} label={stat.label} sublabel={stat.sublabel} />
            ))}
          </div>
          <Button href="/contact" variant="primary" iconAfter="arrowRight" style={{ alignSelf: "flex-start" }}>
            Parler de votre dossier
          </Button>
        </Reveal>

        <Reveal delay={90}>
          <Card variant="inverse" padding="lg" radius="card-lg" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <Icon name="quote" size={30} color="var(--orange-400)" />
              <Badge tone="inverse">{testimonial.note}</Badge>
            </div>
            <p style={{ font: "var(--type-h4)", fontFamily: "var(--font-display)", color: "var(--white)", lineHeight: 1.4 }}>
              {testimonial.quote}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
              <span
                aria-hidden="true"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: "var(--radius-avatar)",
                  background: "var(--navy-700)",
                  border: "1px solid var(--border-inverse)",
                  flex: "none",
                }}
              >
                <Icon name="user" size={20} color="rgba(255,255,255,.7)" />
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <span style={{ font: "var(--type-label)", color: "var(--white)" }}>{testimonial.name}</span>
                <span style={{ font: "var(--type-caption)", color: "var(--text-on-inverse-muted)" }}>
                  {testimonial.role}
                </span>
              </span>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
