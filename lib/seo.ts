import type { Metadata } from "next";

import { contact, faqs, services } from "./site-content";

/* ==========================================================================
   SEO — one source for the canonical origin, page metadata and JSON-LD.

   The origin comes from NEXT_PUBLIC_SITE_URL, the variable the landing pages
   already use. It MUST be set in the deploy environment: canonical tags and
   OG URLs are absolute, and a wrong origin is worse than none.
   ========================================================================== */

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");
export const siteName = "Horma Group";
export const defaultOgImage = "/og/horma-group.jpg";

export const absoluteUrl = (path = "/") => new URL(path, siteUrl).toString();

/** Page-level metadata. `path` is the canonical route, always leading-slashed. */
export function pageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "fr_MA",
      siteName,
      url: path,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: `${siteName} — import & export, Casablanca` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */

const ORG_ID = `${siteUrl}/#organization`;
const SITE_ID = `${siteUrl}/#website`;

/** The company itself. Referenced by @id from the other graphs. */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteName,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/horma-logo-stacked.webp"),
    },
    image: absoluteUrl(defaultOgImage),
    description:
      "Horma Group gère le processus complet, du sourcing à la livraison, à l'import comme à l'export, depuis Casablanca.",
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zone portuaire",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    areaServed: { "@type": "Place", name: "International" },
    knowsLanguage: ["fr", "ar", "en"],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: absoluteUrl("/"),
    name: siteName,
    inLanguage: "fr",
    publisher: { "@id": ORG_ID },
  };
}

/** The Casablanca office, with the hours the header already publishes. */
export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    url: absoluteUrl("/contact"),
    parentOrganization: { "@id": ORG_ID },
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zone portuaire",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
  };
}

/** Trail for an inner page. `items` excludes the home crumb, which is added. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Accueil", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** The four capabilities of the services band, as Service entities. */
export function servicesLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services Horma Group",
    itemListElement: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.body,
        serviceType: service.title,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Place", name: "International" },
      },
    })),
  };
}

/** Mirrors the FAQ band on the home page — same questions, same answers. */
export function faqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
