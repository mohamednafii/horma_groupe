import { Button, HorizonRule, Icon, SectionLabel, StatBlock } from "@/components/hg";
import type { IconName } from "@/components/hg";
import { heroPoints, heroStats } from "@/lib/site-content";

/* Hero — full-bleed port photography under the system's two scrims (side for
   the copy column, bottom for the stat row). Text never sits on a bare photo.
   One orange primary, one inverse tertiary: exactly one action per view. */
export function Hero() {
  return (
    <>
      {/* The hero photograph is the LCP element. As a CSS background it
          is only discovered once the stylesheet parses, so it is
          preloaded here; React hoists this link into <head>. */}
      <link rel="preload" as="image" href="/brand/hero.webp" fetchPriority="high" />
    <section
      style={{
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        /* One screenful minus the sticky header (40px utility strip + nav), so
           the whole hero is readable before any scroll. `svh` is the viewport
           with the mobile URL bar expanded — `vh` would hide the CTAs behind it.
           The clamp keeps it usable on very short and very tall screens. */
        minHeight: "clamp(500px, calc(100svh - var(--header-h) - 40px), 820px)",
        backgroundImage: "url(/brand/hero.webp)",
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
          background: "linear-gradient(180deg,rgba(49, 52, 57, 0.58),rgba(8,17,31,.18) 42%,rgba(8,17,31,.80))",
        }}
      />

      <div
        className="hg-container"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          /* Tightened from 28 / 64–104px: the rhythm is unchanged, but the hero
             now clears a 1366×768 laptop without pushing the CTAs off-screen. */
          gap: "clamp(12px, 1.4vw, 16px)",
          paddingBlock: "clamp(24px, 3vw, 56px)",
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
          Vos échanges internationaux, simplifiés
        </h1>

        {/* 600px rather than 560: the lead then sets on two lines instead of
            three at the same type size, which buys back a line of height. */}
        <p style={{ font: "var(--type-body-lg)", color: "rgba(255,255,255,.82)", maxWidth: 600 }}>
          Horma Group prend en charge vos opérations d&apos;import-export et coordonne chaque étape pour assurer une
          circulation efficace et maîtrisée de vos marchandises.
        </p>

        {/* Two per row on desktop, one per row on a phone. Inside a 640px cap,
            240px tracks can only ever lay out two columns (a third would need
            768px), and a 350px phone container fits one — the 2×2 block is
            fixed by the geometry, so no media query is needed. */}
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
            columnGap: 28,
            rowGap: 12,
            maxWidth: 640,
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {heroPoints.map((point) => (
            <li key={point.text} style={{ display: "flex", gap: 10 }}>
              <span style={{ display: "flex", flex: "none", paddingTop: 2 }}>
                <Icon name={point.icon as IconName} size={17} color="var(--orange-400)" />
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                
                <span style={{ font: "var(--type-caption)", color: "rgba(255,255,255,.7)" }}>{point.note}</span>
              </span>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button href="/contact" variant="primary" size="lg" iconAfter="arrowRight">
            Demander un devis
          </Button>
          <Button href="/products" variant="tertiary" size="lg" inverse iconAfter="arrowUpRight">
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
    </>
  );
}
