import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Poppins } from "next/font/google";

import { MetaPixel } from "@/components/analytics/meta-pixel";
import { JsonLd } from "@/components/seo/JsonLd";
import { AIAssistantFab } from "@/components/sections/AIAssistantFab";
import { defaultOgImage, organizationLd, siteName, siteUrl } from "@/lib/seo";

import "./globals.css";

/* Horma Group type system:
   Poppins for display and headings (geometric, mirrors the logo wordmark),
   Inter for body and UI, IBM Plex Mono for anything a human reads back
   character by character — references, ports, HS codes, transit times.
   Exposed as CSS variables so the token layer in globals.css resolves them. */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const rootTitle = "Horma Group — Import & Export, Casablanca";
const rootDescription =
  "Horma Group gère le processus complet, du sourcing à la livraison, à l'import comme à l'export. Un seul interlocuteur, un seul dossier, des documents conformes avant l'arrivée en douane.";

/* Site-wide defaults. Each page then sets its own title, description and
   canonical; nothing here declares a canonical, because a page that forgot to
   override it would inherit the wrong one. Titles are written out per page
   rather than through a `template`, so the Arabic landing pages keep their own
   brand in the tab. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: rootTitle,
  description: rootDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: { telephone: true, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName,
    title: rootTitle,
    description: rootDescription,
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: `${siteName} — import & export, Casablanca` }],
  },
  twitter: {
    card: "summary_large_image",
    title: rootTitle,
    description: rootDescription,
    images: [defaultOgImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#08111f",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body style={{ margin: 0 }}>
        {/* Scroll reveals start at opacity 0. If the bundle never executes, this
            keeps the whole page readable instead of blank. */}
        <noscript>
          <style>{`.hg-reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        {/* The company graph, on every page. Pages add their own graphs
            (WebSite, FAQPage, BreadcrumbList…) and reference this one by @id. */}
        <JsonLd data={organizationLd()} />
        {/* Site-wide floating controls sit beside the page, not inside it, so
            every route gets them from one place. */}
        <AIAssistantFab />
        {/* One Meta Pixel for the whole site — see components/analytics/meta-pixel.tsx */}
        <MetaPixel />
      </body>
    </html>
  );
}
