import Image from "next/image";

import { HorizonRule, Reveal, SectionLabel, ServiceImageCard } from "@/components/hg";
import type { IconName } from "@/components/hg";
import { services, servicesHead, servicesTagline } from "@/lib/site-content";

/* Services band — four photographic capability tiles on the paper surface,
   over the dotted trade map.

   The band builds its own <section> rather than composing <Section> because
   the map has to bleed past the 1280 container while the copy stays inside it;
   Hero does the same for its photograph. Geometry and hover live in
   `.hg-service-*` in globals.css. */
export function Services() {
  return (
    <section
      id="services"
      className="hg-section hg-section--lg"
      style={{ position: "relative", background: "var(--bg-page)", overflow: "hidden" }}
    >
      {/* Decorative: the map carries no meaning the copy does not already give,
          so it is hidden from assistive tech and cannot take a pointer. */}
      <Image
        src="/brand/world-map-dotted.webp"
        alt=""
        aria-hidden="true"
        className="hg-service-map"
        width={1672}
        height={941}
        sizes="(min-width: 1600px) 1600px, 130vw"
      />

      <div className="hg-container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              textAlign: "center",
              maxWidth: 880,
              marginInline: "auto",
            }}
          >
            <SectionLabel style={{ alignSelf: "center" }}>{servicesHead.eyebrow}</SectionLabel>
            <h2 style={{ color: "var(--text-strong)", textWrap: "balance" }}>{servicesHead.title}</h2>
            <p style={{ font: "var(--type-body-lg)", color: "var(--text-muted)", maxWidth: 720 }}>
              {servicesHead.lead}
            </p>
          </div>
        </Reveal>

        <div className="hg-grid-services" style={{ marginTop: 48 }}>
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 70} style={{ display: "flex" }}>
              <ServiceImageCard
                icon={service.icon as IconName}
                title={service.title}
                description={service.body}
                image={service.image}
                imageAlt={service.imageAlt}
                href="/contact"
                actionLabel={`Nous parler de votre besoin : ${service.title}`}
              />
            </Reveal>
          ))}
        </div>

        {/* Closing rule — the band signs off with the trade line, as in the
            system's horizon habit. */}
        <div className="hg-service-signoff">
          <HorizonRule style={{ flex: "1 1 24px" }} />
          <p className="hg-overline">{servicesTagline}</p>
          <HorizonRule style={{ flex: "1 1 24px" }} />
        </div>
      </div>
    </section>
  );
}
