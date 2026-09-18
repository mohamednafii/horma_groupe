import Image from "next/image";

import { Reveal, Section, SectionLabel } from "@/components/hg";
import { challengePillars, challengesHead } from "@/lib/site-content";
import { ChallengeCarousel } from "./ChallengeCarousel";

/* The challenges band: the promise on the left, the illustrated stage on the
   right, and the risks/method carousel underneath.

   The stage is assembled from the separate cut-out assets — clouds, globe,
   plane, ship, slogan and the courier in front — positioned in percentages
   inside one aspect-ratio box, so the composition scales as a whole.
   Positions and layer order live in `.hg-challenge-stage*` in globals.css. */
export function Challenges() {
  return (
    <Section tone="white" id="risques">
      <div className="hg-split" style={{ alignItems: "center" }}>
        <Reveal style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <SectionLabel>{challengesHead.eyebrow}</SectionLabel>
          <h2 style={{ color: "var(--text-strong)", textWrap: "balance" }}>
            {challengesHead.title}{" "}
            <span style={{ color: "var(--action-primary)" }}>{challengesHead.titleAccent}</span>
          </h2>
          <p style={{ font: "var(--type-body-lg)", color: "var(--text-muted)", maxWidth: 520 }}>
            {challengesHead.lead}
          </p>

          <ul className="hg-challenge-pillars">
            {challengePillars.map((pillar) => (
              <li key={pillar.label} className="hg-challenge-pillar">
                <Image src={pillar.icon} alt="" aria-hidden="true" width={192} height={192} sizes="56px" />
                <span>{pillar.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Decorative composition: it restates the copy rather than adding to
            it, so every layer is hidden from assistive tech. */}
        <Reveal delay={80}>
          <div className="hg-challenge-stage" aria-hidden="true">
            <Image className="hg-challenge-stage__clouds" src="/challenges/clouds.webp" alt="" width={960} height={519} sizes="(min-width: 900px) 40vw, 92vw" />
            <Image className="hg-challenge-stage__ship" src="/challenges/ship.webp" alt="" width={760} height={429} sizes="(min-width: 900px) 20vw, 46vw" />
            <Image className="hg-challenge-stage__globe" src="/challenges/globe.webp" alt="" width={640} height={635} sizes="(min-width: 900px) 20vw, 46vw" />
            <Image className="hg-challenge-stage__plane" src="/challenges/plane.webp" alt="" width={520} height={157} sizes="(min-width: 900px) 13vw, 30vw" />
            <Image className="hg-challenge-stage__slogan" src="/challenges/slogan.webp" alt="" width={420} height={247} sizes="(min-width: 900px) 10vw, 24vw" />
            <Image className="hg-challenge-stage__figure" src="/challenges/character.webp" alt="" width={760} height={996} sizes="(min-width: 900px) 24vw, 56vw" />
          </div>
        </Reveal>
      </div>

      <Reveal delay={120} style={{ display: "block", marginTop: 56 }}>
        <ChallengeCarousel />
      </Reveal>
    </Section>
  );
}
