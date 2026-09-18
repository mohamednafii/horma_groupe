import { Icon, Reveal, Section, SectionHead } from "@/components/hg";
import { processNote } from "@/lib/site-content";
import { ProcessTimeline } from "./ProcessTimeline";

/* Four-step process, walked along a curve rather than listed in four cards.
   Counters stay zero-padded in mono — the manifest habit the system uses for
   steps, carousels and pagination. Geometry and states live in
   `.hg-process-*` in globals.css. */
export function Process() {
  return (
    <Section tone="sand" id="processus">
      <div className="hg-process-head">
        <Reveal>
          <SectionHead
            eyebrow="Comment ça marche"
            title="Une méthode claire, de la demande à la livraison"
            lead="À l'import comme à l'export, nous pilotons chaque opération avec des étapes définies, des documents vérifiés et un suivi continu."
          />
        </Reveal>

        {/* Balances the title row on a wide screen; it repeats nothing the
            steps say, so it drops out once the head takes the full width. */}
        <Reveal delay={60} className="hg-process-note">
          <span className="hg-process-note__icon" aria-hidden="true">
            <Icon name="package" size={20} />
          </span>
          <p>{processNote}</p>
        </Reveal>
      </div>

      <Reveal delay={90} style={{ display: "block" }}>
        <ProcessTimeline />
      </Reveal>
    </Section>
  );
}
