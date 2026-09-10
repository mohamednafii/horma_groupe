import { WhatsAppIcon, WhatsAppLink } from "@/components/whatsapp/WhatsAppLink";

import shared from "../styles/shared.module.css";
import styles from "../styles/whatsapp.module.css";

/**
 * WhatsApp CTAs in the AL HURRA template's visual language.
 *
 * Styling only: the wa.me destination and the Meta Pixel `Contact` event are
 * <WhatsAppLink>'s job, shared with the other landing-page family, so every
 * WhatsApp button on the site reports identically.
 */

const LABEL = "اطلب عبر واتساب";

/** Filled button, sized to pair with the terracotta `btnCta` above it. */
export function WhatsAppCta({
  message,
  label = LABEL,
  variant = "solid",
  className,
}: {
  /** Chat pre-fill. Product copy only — never customer data. */
  message?: string;
  label?: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <WhatsAppLink
      message={message}
      className={[styles[variant], className].filter(Boolean).join(" ")}
    >
      <WhatsAppIcon className={styles.icon} />
      <span>{label}</span>
    </WhatsAppLink>
  );
}

/**
 * Floating WhatsApp bubble, offset above the fixed order bar when the page
 * shows one. `position: fixed`, so it reserves no space and shifts no layout.
 */
export function WhatsAppFab({
  message,
  hasStickyBar,
}: {
  message?: string;
  hasStickyBar: boolean;
}) {
  return (
    <WhatsAppLink
      message={message}
      ariaLabel="تواصل معنا عبر واتساب"
      className={[styles.fab, hasStickyBar ? null : styles.fabNoSticky]
        .filter(Boolean)
        .join(" ")}
    >
      <WhatsAppIcon />
    </WhatsAppLink>
  );
}

/**
 * Closing conversion band, sitting after the FAQ: the last prompt for a reader
 * who got to the bottom without ordering.
 */
export function WhatsAppBand({
  message,
  title = "عندك سؤال قبل الطلب؟",
  note = "راسلنا على واتساب وغادي نجاوبوك دغيا ونكملو الطلب معاك.",
}: {
  message?: string;
  title?: string;
  note?: string;
}) {
  return (
    <section className={shared.section}>
      <div className={styles.band}>
        <h2 className={styles.bandTitle}>{title}</h2>
        <p className={styles.bandNote}>{note}</p>
        <WhatsAppCta message={message} />
      </div>
    </section>
  );
}
