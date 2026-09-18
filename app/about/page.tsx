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
    title: "Une préparation structurée",
    body: "Chaque projet commence par l'analyse du produit, des quantités, de l'origine, de la destination et des contraintes de l'opération. Cette préparation permet d'anticiper les besoins documentaires, douaniers et logistiques.",
  },
  {
    icon: "users",
    title: "Un suivi à chaque étape",
    body: "De la recherche du fournisseur jusqu'à l'expédition et la livraison, nous assurons la coordination des différents intervenants et vous tenons informé de l'avancement de votre dossier.",
  },
  {
    icon: "globe",
    title: "Une ouverture sur les marchés internationaux",
    body: "Basée au Maroc, Horma Group accompagne les échanges entre fournisseurs, producteurs et entreprises sur différents marchés internationaux, aussi bien à l'import qu'à l'export.",
  },
];

const pillars = [
  { value: "01", label: "Sourcing", sublabel: "Identification et sélection de fournisseurs ou producteurs selon votre besoin." },
  { value: "02", label: "Import & export", sublabel: "Accompagnement et coordination des opérations dans les deux sens." },
  {
    value: "03",
    label: "Formalités",
    sublabel: "Préparation et vérification des documents nécessaires à l'opération et coordination des démarches douanières.",
  },
  {
    value: "04",
    label: "Logistique",
    sublabel: "Organisation et suivi de l'acheminement de la marchandise jusqu'à la destination convenue.",
  },
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
              <SectionLabel tone="inverse">À propos</SectionLabel>
              <h1 style={{ color: "var(--white)" }}>Connecter les marchés, simplifier vos échanges</h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-on-inverse-muted)", maxWidth: 660 }}>
                Horma Group accompagne les entreprises dans leurs opérations d&apos;importation, d&apos;exportation et
                de commerce international, avec une approche structurée allant de l&apos;identification du besoin
                jusqu&apos;à l&apos;acheminement des marchandises.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingTop: 8 }}>
                <Button href="/contact" size="lg" variant="primary" iconAfter="arrowRight">
                  Parler de votre projet
                </Button>
                <Button href="/#processus" size="lg" variant="tertiary" inverse iconAfter="arrowUpRight">
                  Découvrir notre approche
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Section tone="paper">
          <div className="hg-split">
            <Reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <SectionLabel>Notre mission</SectionLabel>
              <h2>Faciliter vos opérations à l&apos;international</h2>
            </Reveal>
            <Reveal delay={80} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)" }}>
                Importer ou exporter implique de coordonner de nombreux acteurs : fournisseurs, producteurs,
                transporteurs, transitaires et administrations. Horma Group vous accompagne dans cette coordination
                afin de rendre chaque opération plus claire et mieux organisée.
              </p>
              <p style={{ font: "var(--type-body)", color: "var(--text-muted)", maxWidth: "62ch" }}>
                Notre objectif : vous permettre de vous concentrer sur votre activité pendant que nous facilitons le
                suivi des différentes étapes de votre opération internationale.
              </p>
              <HorizonRule style={{ marginTop: 6 }} />
            </Reveal>
          </div>
        </Section>

        <Section tone="white">
          <Reveal>
            <SectionHead
              eyebrow="Notre approche"
              title="Un accompagnement adapté à chaque opération"
            />
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
              <SectionLabel tone="inverse">Notre savoir-faire</SectionLabel>
              <h2 style={{ color: "var(--white)" }}>De l&apos;origine jusqu&apos;à destination</h2>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-on-inverse-muted)", maxWidth: 570 }}>
                Nous réunissons les différentes composantes nécessaires à la réussite d&apos;une opération
                internationale : sourcing, documentation, douane, transport et suivi logistique.
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
              <SectionLabel>Construisons votre prochaine opération</SectionLabel>
              <h2>Un projet d&apos;importation ou d&apos;exportation ?</h2>
              <p style={{ font: "var(--type-body)", color: "var(--text-muted)" }}>
                Présentez-nous votre produit, vos quantités, l&apos;origine et la destination. Notre équipe étudie
                votre besoin et vous accompagne dans la mise en place d&apos;une solution adaptée.
              </p>
            </div>
            <Button href="/contact" size="lg" variant="primary" iconAfter="arrowUpRight">
              Démarrer mon projet
            </Button>
          </Reveal>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
