import { Reveal, Section, SectionHead, ServiceCard } from "@/components/hg";
import type { IconName } from "@/components/hg";
import { services } from "@/lib/site-content";

/* Services band — four capabilities on the paper surface, blue icon tiles.
   Cards reveal with a short stagger so the row still reads as one gesture. */
export function Services() {
  return (
    <Section tone="paper" id="services">
      <Reveal>
        <SectionHead
          eyebrow="Ce que nous faisons"
          title="Quatre métiers, un seul interlocuteur"
          lead="Pas d'intermédiaire entre vous et la marchandise. Horma prend en charge le sourcing, le transport, la douane et le catalogue sous un même dossier."
        />
      </Reveal>

      <div className="hg-grid-4" style={{ marginTop: 48 }}>
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 70}>
            <ServiceCard
              icon={service.icon as IconName}
              index={service.index}
              title={service.title}
              description={service.body}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
