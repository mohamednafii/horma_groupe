import Link from "next/link";

import { Icon } from "./Icon";

export type Crumb = { label: string; href?: string };

/* Trail above a page title. The last crumb is the current page: it is plain
   text carrying aria-current, never a link to where the reader already is. */
export function Breadcrumb({ items, inverse = false }: { items: Crumb[]; inverse?: boolean }) {
  const muted = inverse ? "var(--text-on-inverse-muted)" : "var(--text-muted)";
  return (
    <nav aria-label="Fil d'Ariane">
      <ol
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 8,
          margin: 0,
          padding: 0,
          listStyle: "none",
          font: "var(--type-caption)",
          color: muted,
        }}
      >
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {i > 0 ? (
                <span aria-hidden="true" style={{ display: "flex", opacity: 0.6 }}>
                  <Icon name="chevronRight" size={12} />
                </span>
              ) : null}
              {last || !item.href ? (
                <span aria-current={last ? "page" : undefined} style={{ color: inverse ? "var(--white)" : "var(--text-body)" }}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hg-crumb" style={{ color: muted }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
