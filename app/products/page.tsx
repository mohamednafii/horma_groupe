import type { Metadata } from "next";
import { Suspense } from "react";

import { Breadcrumb, Section, SectionLabel } from "@/components/hg";
import { ProductGridSkeleton } from "@/components/products/ProductGrid";
import { ProductsBrowser } from "@/components/products/ProductsBrowser";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { products } from "@/lib/products";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Nos produits | Horma Group",
  description:
    "Références sourcées au Maroc et à l'international : origine, prix indicatif et quantité minimum de commande affichés par produit.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="hg-site">
      <SiteHeader />
      <main>
        {/* Page header — the navy band the other inner pages open with, kept
            short here because the toolbar underneath is the real entry point. */}
        <section style={{ background: "var(--navy-900)" }}>
          <div className="hg-container" style={{ paddingBlock: "clamp(32px, 5vw, 56px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 720 }}>
              <Breadcrumb inverse items={[{ label: "Accueil", href: "/" }, { label: "Nos produits" }]} />
              <SectionLabel tone="inverse">Catalogue</SectionLabel>
              <h1 style={{ color: "var(--white)" }}>Nos produits</h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-on-inverse-muted)", maxWidth: 640 }}>
                Une sélection de références sourcées au Maroc et à l&apos;international, avec origine, prix indicatif
                et quantité minimum de commande.
              </p>
              <p className="hg-mono" style={{ color: "var(--orange-300)" }}>
                {`${products.length} produits au catalogue`}
              </p>
            </div>
          </div>
        </section>

        <Section tone="paper">
          {/* The browser reads the query string, so it renders under Suspense:
              the skeleton is what a reader sees while it hydrates, and it is
              cut to the same grid the products land in. */}
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductsBrowser />
          </Suspense>
        </Section>
      </main>
      <SiteFooter />
      <JsonLd data={breadcrumbLd([{ name: "Nos produits", path: "/products" }])} />
    </div>
  );
}
