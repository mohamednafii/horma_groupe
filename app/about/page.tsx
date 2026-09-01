import type { Metadata } from "next";

import { Button, Card, HorizonRule, Icon, Reveal, Section, SectionHead, SectionLabel, StatBlock } from "@/components/hg";
import type { IconName } from "@/components/hg";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";

export const metadata: Metadata = {
  title: "À propos | Horma Group",
  description:
    "Horma Group accompagne vos projets de sourcing, import, export et logistique depuis Casablanca.",
};

const commitments: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shieldCheck",
    title: "La rigueur avant le départ",
    body: "Chaque dossier est vérifié avant expédition : produit, emballage, documents et code douanier sont alignés avant que la marchandise ne parte.",
  },
  {
    icon: "users",
    title: "Un interlocuteur responsable",
    body: "Du premier brief à la livraison, vous avancez avec une équipe qui connaît votre dossier et vous tient informé à chaque étape décisive.",
  },
  {
    icon: "globe",
    title: "Une vision sans frontières",
    body: "Depuis Casablanca, nous relions producteurs, acheteurs et transporteurs pour construire des flux d'import et d'export fiables.",
  },
];

const pillars = [
  { value: "01", label: "Point de contact", sublabel: "Une équipe qui suit votre dossier." },
  { value: "02", label: "Sens de circulation", sublabel: "Import et export, sans rupture." },
  { value: "03", label: "Moments contrôlés", sublabel: "Avant départ, douane et livraison." },
  { value: "04", label: "Axes de confiance", sublabel: "Produit, documents, transport, suivi." },
];

export default function AboutPage() {
  return (
    <div className="hg-site">
      <SiteHeader />
      <main>
        {/* Page header — navy band rather than a photo, so the hero photograph
            stays unique to the homepage. */}
        <section style={{ background: "var(--navy-900)" }}>
          <div className="hg-container" style={{ paddingBlock: "clamp(56px, 8vw, 96px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 790 }}>
              <SectionLabel tone="inverse">Horma Group — Casablanca</SectionLabel>
              <h1 style={{ color: "var(--white)" }}>Faire circuler les bons produits, avec la bonne information</h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-on-inverse-muted)", maxWidth: 660 }}>
                Horma Group accompagne les entreprises qui veulent importer ou exporter avec un processus clair,
                maîtrisé et humain.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingTop: 8 }}>
                <Button href="/contact" size="lg" variant="primary" iconAfter="arrowRight">
                  Parler de votre projet
                </Button>
                <Button href="/#processus" size="lg" variant="tertiary" inverse iconAfter="arrowUpRight">
                  Notre méthode
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Section tone="paper">
          <div className="hg-split">
            <Reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <SectionLabel>Notre raison d&apos;être</SectionLabel>
              <h2>Rendre le commerce international plus lisible</h2>
            </Reveal>
            <Reveal delay={80} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)" }}>
                Un flux international ne doit pas être une suite d&apos;incertitudes. Nous organisons les détails qui
                font la différence : le bon fournisseur, les bonnes preuves et le bon chemin jusqu&apos;à destination.
              </p>
              <p style={{ font: "var(--type-body)", color: "var(--text-muted)", maxWidth: "62ch" }}>
                Notre rôle est de transformer une opération complexe en une séquence de décisions simples et
                documentées. Vous gardez la visibilité ; nous prenons en charge la coordination.
              </p>
              <HorizonRule style={{ marginTop: 6 }} />
            </Reveal>
          </div>
        </Section>

        <Section tone="white">
          <Reveal>
            <SectionHead eyebrow="Nos engagements" title="Ce qui guide chaque dossier" />
          </Reveal>
          <div className="hg-grid-3" style={{ marginTop: 48 }}>
            {commitments.map((commitment, i) => (
              <Reveal key={commitment.title} delay={i * 70}>
                <Card padding="lg" interactive style={{ display: "flex", flexDirection: "column", gap: 14, height: "100%" }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 48,
                      height: 48,
                      borderRadius: "var(--radius-md)",
                      background: "var(--blue-500)",
                      flex: "none",
                    }}
                  >
                    <Icon name={commitment.icon} size={24} color="var(--white)" />
                  </span>
                  <h3 style={{ font: "var(--type-h4)" }}>{commitment.title}</h3>
                  <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>{commitment.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section tone="navy" size="lg">
          <div className="hg-split">
            <Reveal style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <SectionLabel tone="inverse">Une équipe, un cap</SectionLabel>
              <h2 style={{ color: "var(--white)" }}>Du port de Casablanca jusqu&apos;à votre destination</h2>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-on-inverse-muted)", maxWidth: 570 }}>
                Nous combinons l&apos;ancrage local, la discipline documentaire et un réseau de partenaires pour faire
                avancer vos marchandises avec confiance.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 24 }}>
                {pillars.map((pillar) => (
                  <Card key={pillar.value} variant="inverse" padding="lg">
                    <StatBlock inverse value={pillar.value} label={pillar.label} sublabel={pillar.sublabel} />
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        <Section tone="sand">
          <Reveal
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 28,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 680 }}>
              <SectionLabel>Prêt à avancer ?</SectionLabel>
              <h2>Votre prochain flux mérite un plan clair</h2>
            </div>
            <Button href="/contact" size="lg" variant="primary" iconAfter="arrowUpRight">
              Demander un devis
            </Button>
          </Reveal>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
