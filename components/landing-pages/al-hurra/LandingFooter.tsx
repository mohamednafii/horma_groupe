import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink";
import type { ContactPoint, LegalLink } from "./types";
import styles from "./styles/footer.module.css";
import shared from "./styles/shared.module.css";
import { Icon } from "./ui/icons";

/** Contact channels and legal links, on the deep Atlas green. */
export function LandingFooter({
  contacts,
  legal,
}: {
  contacts: ContactPoint[];
  legal: LegalLink[];
}) {
  return (
    <footer className={styles.footer}>
      <div className={`${shared.shell} ${styles.row}`}>
        {contacts.map((point) => (
          <div key={point.id} className={styles.contact}>
            <Icon name={point.icon} size={24} stroke="var(--border-hairline)" strokeWidth={1.5} />
            <div>
              <p className={styles.contactLabel}>{point.label}</p>
              <p className={styles.contactValue}>
                {/* A WhatsApp contact goes through <WhatsAppLink> like every
                    other WhatsApp CTA, so this one also reports `Contact` and
                    resolves the number from lib/whatsapp.ts. Everything else
                    (Instagram, e-mail) stays a plain link. */}
                {point.href.startsWith("https://wa.me/") ? (
                  <WhatsAppLink className={styles.ltr}>{point.value}</WhatsAppLink>
                ) : (
                  <a className={styles.ltr} href={point.href} rel="noopener">
                    {point.value}
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.legal}>
        {legal.map((link) => (
          <a key={link.id} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
