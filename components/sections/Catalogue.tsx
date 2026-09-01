import { Badge, Button, Card, Icon, Reveal, Section, SectionHead } from "@/components/hg";
import { products } from "@/lib/site-content";

/* Product catalogue. Provenance, price and MOQ are stated before persuasion,
   and every machine-readable field is set in mono per the system's rules. */
export function Catalogue() {
  return (
    <Section tone="white" id="catalogue">
      <div
        style={{
          display: "flex",
          gap: 24,
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
        }}
      >
        <Reveal>
          <SectionHead
            eyebrow="Catalogue"
            title="Produits marocains, prêts à l'export"
            lead="Origine, prix indicatif et quantité minimum affichés par référence — pas une brochure."
          />
        </Reveal>
        <Reveal delay={60}>
          <Button href="/contact" variant="tertiary" iconAfter="arrowRight">
            Demander le catalogue
          </Button>
        </Reveal>
      </div>

      <div className="hg-grid-3" style={{ marginTop: 48 }}>
        {products.map((product, i) => (
          <Reveal key={`${product.name}-${i}`} delay={i * 70}>
            <Card padding="none" interactive style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              {/* No real product photography exists yet, so the media slot uses
                  the system's navy fallback rather than off-brand stock. */}
              <span
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "4 / 3",
                  background: "linear-gradient(140deg,var(--blue-700),var(--navy-900))",
                }}
              >
                <Icon name="package" size={40} color="rgba(255,255,255,.34)" />
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: "auto 16px 16px auto",
                    font: "var(--type-overline)",
                    letterSpacing: "var(--tracking-overline)",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.38)",
                  }}
                >
                  Visuel à fournir
                </span>
              </span>

              <span style={{ display: "flex", flexDirection: "column", gap: 12, padding: "var(--pad-card)" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                  <span className="hg-mono" style={{ color: "var(--text-subtle)" }}>
                    {product.ref}
                  </span>
                  <Badge tone="brand" size="sm">
                    Export
                  </Badge>
                </span>

                <span style={{ font: "var(--type-h4)", fontFamily: "var(--font-display)", color: "var(--text-strong)" }}>
                  {product.name}
                </span>
                <span style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>{product.origin}</span>

                <span
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 12,
                    marginTop: 4,
                    paddingTop: 14,
                    borderTop: "1px solid var(--border-subtle)",
                  }}
                >
                  <span className="hg-mono" style={{ color: "var(--text-strong)", fontSize: "var(--text-body)" }}>
                    {product.price}
                  </span>
                  <span style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>MOQ {product.moq}</span>
                </span>
              </span>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
