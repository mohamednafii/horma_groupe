import { Card, Icon, Reveal, Section, SectionHead } from "@/components/hg";
import { painPoints, remedies } from "@/lib/site-content";

/* The problem/answer pair. The system allows one navy card per band as the
   "answer" side, which is what carries the contrast here — no third colour. */
export function Challenges() {
  return (
    <Section tone="white" id="risques">
      <Reveal>
        <SectionHead
          eyebrow="Ce que nous servons"
          title="Les risques de l'import-export, et ce que nous en faisons"
          lead="Importateurs, distributeurs et producteurs à l'export. Les mêmes cinq problèmes reviennent sur chaque dossier."
        />
      </Reveal>

      <div className="hg-grid-2" style={{ marginTop: 48 }}>
        <Reveal>
          <Card variant="flat" padding="lg" style={{ height: "100%" }}>
            <span className="hg-overline" style={{ color: "var(--text-muted)" }}>
              Ce que vous vivez
            </span>
            <ol style={{ display: "flex", flexDirection: "column", gap: 18, margin: "20px 0 0", padding: 0, listStyle: "none" }}>
              {painPoints.map((point, i) => (
                <li key={point} style={{ display: "flex", gap: 14, font: "var(--type-body-sm)", color: "var(--text-body)" }}>
                  <span className="hg-mono" style={{ color: "var(--text-subtle)", flex: "none" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {point}
                </li>
              ))}
            </ol>
          </Card>
        </Reveal>

        <Reveal delay={80}>
          <Card variant="inverse" padding="lg" style={{ height: "100%" }}>
            <span className="hg-overline" style={{ color: "var(--orange-300)" }}>
              Ce que nous mettons en place
            </span>
            <ol style={{ display: "flex", flexDirection: "column", gap: 18, margin: "20px 0 0", padding: 0, listStyle: "none" }}>
              {remedies.map((remedy) => (
                <li
                  key={remedy}
                  style={{
                    display: "flex",
                    gap: 14,
                    font: "var(--type-body-sm)",
                    color: "var(--text-on-inverse-muted)",
                  }}
                >
                  <span style={{ flex: "none", paddingTop: 2 }}>
                    <Icon name="check" size={16} color="var(--orange-400)" />
                  </span>
                  {remedy}
                </li>
              ))}
            </ol>
          </Card>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <p style={{ marginTop: 32, font: "var(--type-body)", color: "var(--text-muted)", maxWidth: 640 }}>
          Le principe est le même dans les deux sens : rien ne part tant que le dossier n&apos;est pas complet.
        </p>
      </Reveal>
    </Section>
  );
}
