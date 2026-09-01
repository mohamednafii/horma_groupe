import { Button, HorizonRule, Icon, SectionLabel, StatBlock } from "@/components/hg";
import type { IconName } from "@/components/hg";
import { heroPoints, heroStats } from "@/lib/site-content";

/* Hero — full-bleed port photography under the system's two scrims (side for
   the copy column, bottom for the stat row). Text never sits on a bare photo.
   One orange primary, one inverse tertiary: exactly one action per view. */
export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        minHeight: "clamp(560px, 78vh, 760px)",
        backgroundImage: "url(/brand/hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Side scrim carries the copy; the vertical wash keeps the stat row legible. */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "var(--scrim-photo-side)" }} />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg,rgba(8,17,31,.58),rgba(8,17,31,.18) 42%,rgba(8,17,31,.80))",
        }}
      />

      <div
        className="hg-container"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 28,
          paddingBlock: "clamp(64px, 9vw, 104px)",
        }}
      >
        <SectionLabel tone="inverse">Casablanca, Maroc — Import &amp; Export</SectionLabel>

        <h1
          className="hg-display"
          style={{
            color: "var(--white)",
            maxWidth: 880,
            letterSpacing: "var(--tracking-display)",
          }}
        >
          Importer et exporter sans mauvaise surprise
        </h1>

        <p style={{ font: "var(--type-body-lg)", color: "rgba(255,255,255,.82)", maxWidth: 560 }}>
          Horma Group gère le processus complet, du sourcing à la livraison, à l&apos;import comme à l&apos;export. Un seul
          interlocuteur, un seul dossier, des documents conformes avant l&apos;arrivée en douane.
        </p>

        <ul style={{ display: "flex", flexDirection: "column", gap: 12, margin: 0, padding: 0, listStyle: "none" }}>
          {heroPoints.map((point) => (
            <li
              key={point.text}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                font: "var(--type-body-sm)",
                color: "rgba(255,255,255,.86)",
                maxWidth: 560,
              }}
            >
              <span style={{ paddingTop: 2 }}>
                <Icon name={point.icon as IconName} size={17} color="var(--orange-400)" />
              </span>
              {point.text}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button href="/contact" variant="primary" size="lg" iconAfter="arrowRight">
            Demander un devis
          </Button>
          <Button href="#catalogue" variant="tertiary" size="lg" inverse iconAfter="arrowUpRight">
            Voir le catalogue
          </Button>
        </div>

        {/* <HorizonRule inverse style={{ marginTop: 12 }} /> */}
{/* 
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "clamp(20px, 4vw, 56px)",
          }}
        >
          {heroStats.map((stat) => (
            <StatBlock key={stat.label} inverse value={stat.value} label={stat.label} sublabel={stat.sublabel} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
