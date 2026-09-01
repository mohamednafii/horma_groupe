"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button, Icon, Logo } from "@/components/hg";
import { contact, nav } from "@/lib/site-content";

/* Horma site header — utility strip over a white nav bar, sticky, hairline
   bottom, never a shadow. On mobile the pill nav becomes a full-height navy
   drawer with display-font rows, as the system's responsive rules require. */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer when the route changes. Adjusting state during render is
  // React's documented pattern for this; a setState inside an effect would
  // render the open drawer once on the new page first.
  const [drawerPath, setDrawerPath] = useState(pathname);
  if (drawerPath !== pathname) {
    setDrawerPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 200 }}>
      {/* Utility strip: contact details, scrolls away with the page. */}
      <div style={{ background: "var(--navy-900)", color: "var(--white)" }}>
        <div
          className="hg-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            height: 40,
            font: "var(--type-caption)",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 20, opacity: 0.82 }}>
            <a
              href={`mailto:${contact.email}`}
              style={{ display: "flex", alignItems: "center", gap: 7, color: "inherit" }}
            >
              <Icon name="mail" size={13} />
              {contact.email}
            </a>
            <span style={{ display: "flex", alignItems: "center", gap: 7 }} className="hg-hide-sm">
              <Icon name="mapPin" size={13} />
              {contact.address}
            </span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 7, opacity: 0.82 }} className="hg-hide-sm">
            <Icon name="clock" size={13} />
            {contact.hours}
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div
        style={{
          background: "var(--white)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="hg-container"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            height: "var(--header-h)",
          }}
        >
          <Link href="/" aria-label="Horma Group — accueil" style={{ display: "flex", flex: "none" }}>
            <Logo variant="horizontal" height={34} />
          </Link>

          <nav className="hg-nav" aria-label="Navigation principale">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hg-nav-link"
                  aria-current={active ? "page" : undefined}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 38,
                    padding: "0 14px",
                    borderRadius: "var(--radius-pill)",
                    font: "var(--type-nav)",
                    color: active ? "var(--orange-700)" : "var(--text-strong)",
                    background: active ? "var(--surface-brand-soft)" : "transparent",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <span style={{ flex: 1 }} />

          <span className="hg-hide-md">
            <Button href="/contact" variant="primary" size="md" iconAfter="arrowUpRight">
              Demander un devis
            </Button>
          </span>

          <button
            type="button"
            className="hg-burger"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              background: "transparent",
              border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-control)",
              cursor: "pointer",
              color: "var(--text-strong)",
            }}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile drawer — navy, full height, 52px display-font rows. */}
      {open ? (
        <div
          style={{
            position: "fixed",
            inset: `calc(var(--header-h) + 40px) 0 0 0`,
            zIndex: 300,
            background: "var(--navy-900)",
            padding: "24px var(--gutter-mobile) 40px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            overflowY: "auto",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column" }} aria-label="Navigation mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: 52,
                  padding: "8px 0",
                  borderBottom: "1px solid var(--border-inverse)",
                  font: "var(--type-h4)",
                  fontFamily: "var(--font-display)",
                  color: pathname === item.href ? "var(--orange-300)" : "var(--white)",
                }}
              >
                {item.label}
                <Icon name="arrowRight" size={18} color="rgba(255,255,255,.5)" />
              </Link>
            ))}
          </nav>

          <Button href="/contact" variant="primary" size="lg" block iconAfter="arrowUpRight">
            Demander un devis
          </Button>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              font: "var(--type-body-sm)",
              color: "var(--text-on-inverse-muted)",
            }}
          >
            <a href={`mailto:${contact.email}`} style={{ display: "flex", gap: 9, color: "inherit" }}>
              <Icon name="mail" size={16} />
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} style={{ display: "flex", gap: 9, color: "inherit" }}>
              <Icon name="phone" size={16} />
              {contact.phone}
            </a>
            <span style={{ display: "flex", gap: 9 }}>
              <Icon name="mapPin" size={16} />
              {contact.address}
            </span>
          </div>
        </div>
      ) : null}
    </header>
  );
}
