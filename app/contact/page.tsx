import type { Metadata } from "next";

import { Card, HorizonRule, Icon, Reveal, Section, SectionLabel } from "@/components/hg";
import type { IconName } from "@/components/hg";
import { ContactForm } from "@/components/sections/ContactForm";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { contact } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact | Horma Group",
  description: "Parlez-nous de votre projet d'import, d'export, de sourcing ou de logistique.",
};

const details: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "mail", label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
  { icon: "phone", label: "Téléphone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: "mapPin", label: "Bureau", value: contact.address },
  { icon: "clock", label: "Horaires", value: "Lun–Sam, 08:00–19:00 GMT+1" },
];

export default function ContactPage() {
  return (
    <div className="hg-site">
      <SiteHeader />
      <main>
        <section style={{ background: "var(--navy-900)" }}>
          <div className="hg-container" style={{ paddingBlock: "clamp(56px, 8vw, 96px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 720 }}>
              <SectionLabel tone="inverse">Contact</SectionLabel>
              <h1 style={{ color: "var(--white)" }}>Parlons de votre prochain flux</h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-on-inverse-muted)", maxWidth: 650 }}>
                Décrivez-nous votre besoin : produit, volume, origine, destination ou délai. Notre équipe vous répond
                avec les prochaines étapes.
              </p>
            </div>
          </div>
        </section>

        <Section tone="paper" size="lg">
          <div className="hg-split">
            <Reveal style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <SectionLabel>Coordonnées</SectionLabel>
                <h2 style={{ font: "var(--type-h3)" }}>Joignez-nous directement</h2>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>
                  Vous pouvez aussi nous joindre pendant les heures ouvrables.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {details.map((detail) => (
                  <div key={detail.label}>
                    <HorizonRule variant="solid" />
                    <div style={{ display: "flex", gap: 14, padding: "18px 0" }}>
                      <span style={{ paddingTop: 2, flex: "none" }}>
                        <Icon name={detail.icon} size={19} color="var(--action-secondary)" />
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        <span className="hg-overline">{detail.label}</span>
                        {detail.href ? (
                          <a href={detail.href} style={{ font: "var(--type-label)", color: "var(--text-strong)" }}>
                            {detail.value}
                          </a>
                        ) : (
                          <span style={{ font: "var(--type-label)", color: "var(--text-strong)" }}>{detail.value}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <HorizonRule variant="solid" />
              </div>
            </Reveal>

            <Reveal delay={90}>
              <Card padding="lg" radius="card-lg" variant="raised" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <span className="hg-overline" style={{ color: "var(--orange-600)" }}>
                    Votre demande
                  </span>
                  <h2 style={{ font: "var(--type-h3)" }}>Quelques détails pour bien vous orienter</h2>
                </div>
                <ContactForm />
              </Card>
            </Reveal>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
