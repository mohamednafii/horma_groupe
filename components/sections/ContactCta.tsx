import { Badge, Card, HorizonRule, Icon, Reveal, Section, SectionHead } from "@/components/hg";
import { contact } from "@/lib/site-content";

import { ContactForm } from "./ContactForm";

/* Closing band — the system's "start a lane" pattern: contact block beside the
   request form, on paper. The form card is the page's last surface. */
export function ContactCta() {
  const lines = [
    { icon: "mail" as const, text: contact.email, href: `mailto:${contact.email}` },
    { icon: "phone" as const, text: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: "mapPin" as const, text: contact.address },
    { icon: "clock" as const, text: contact.hours },
  ];

  return (
    <Section tone="paper" size="lg" id="contact">
      <div className="hg-split">
        <Reveal style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <SectionHead
            eyebrow="Démarrer un dossier"
            title="Dites-nous ce que vous importez ou exportez"
            lead="Produit, quantité, origine et destination suffisent pour un premier devis. Réponse sous une heure ouvrée."
          />

          <HorizonRule />

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {lines.map((line) => {
              const content = (
                <>
                  <Icon name={line.icon} size={16} color="var(--action-secondary)" />
                  {line.text}
                </>
              );
              const style = {
                display: "flex",
                alignItems: "center",
                gap: 10,
                font: "var(--type-body-sm)",
                color: "var(--text-body)",
              } as const;
              return line.href ? (
                <a key={line.text} href={line.href} style={{ ...style, color: "var(--text-body)" }}>
                  {content}
                </a>
              ) : (
                <span key={line.text} style={style}>
                  {content}
                </span>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Badge tone="trust" icon="shieldCheck">
              ONSSA
            </Badge>
            <Badge tone="trust" icon="fileText">
              Certificat EUR.1
            </Badge>
            <Badge tone="neutral" icon="scale">
              Incoterms 2020
            </Badge>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <Card padding="lg" radius="card-lg" variant="raised">
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
