import Link from "next/link";

import { HorizonRule, Icon, Logo } from "@/components/hg";
import { contact, footerColumns, nav } from "@/lib/site-content";

/* Footer — navy band, orange column headings, horizon rule above the legal
   line. Matches the system's Footer composition without inventing new copy. */
export function SiteFooter() {
  return (
    <footer style={{ background: "var(--navy-900)", color: "var(--white)" }}>
      <div className="hg-container" style={{ paddingBlock: "clamp(48px, 7vw, 72px) 28px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 320 }}>
            <Logo variant="horizontal" height={40} inverse />
            <p style={{ font: "var(--type-body-sm)", color: "var(--text-on-inverse-muted)" }}>
              Import export, sourcing, dédouanement et logistique. Zone portuaire, Casablanca, Maroc.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 9,
                font: "var(--type-body-sm)",
                color: "var(--text-on-inverse-muted)",
              }}
            >
              <a href={`mailto:${contact.email}`} className="hg-link-inverse" style={{ display: "flex", gap: 9 }}>
                <Icon name="mail" size={15} />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="hg-link-inverse"
                style={{ display: "flex", gap: 9 }}
              >
                <Icon name="phone" size={15} />
                {contact.phone}
              </a>
              <span style={{ display: "flex", gap: 9 }}>
                <Icon name="mapPin" size={15} />
                {contact.address}
              </span>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} style={{ display: "flex", flexDirection: "column", gap: 14, minWidth: 160 }}>
              <span
                style={{
                  font: "var(--type-overline)",
                  letterSpacing: "var(--tracking-overline)",
                  textTransform: "uppercase",
                  color: "var(--orange-300)",
                }}
              >
                {column.title}
              </span>
              {column.links.map((link) => (
                <a key={link.label} href={link.href} className="hg-link-inverse" style={{ font: "var(--type-body-sm)" }}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: 14, minWidth: 160 }}>
            <span
              style={{
                font: "var(--type-overline)",
                letterSpacing: "var(--tracking-overline)",
                textTransform: "uppercase",
                color: "var(--orange-300)",
              }}
            >
              Navigation
            </span>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hg-link-inverse" style={{ font: "var(--type-body-sm)" }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 48 }}>
          <HorizonRule inverse />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "space-between",
              font: "var(--type-caption)",
              color: "rgba(255,255,255,.5)",
            }}
          >
            <span>© 2026 Horma Group. Import &amp; export, Casablanca — Maroc.</span>
            <span style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
              <Link href="/privacy-policy" className="hg-link-inverse">
                Politique de confidentialité
              </Link>
              <Link href="/terms-and-conditions" className="hg-link-inverse">
                Conditions générales
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
