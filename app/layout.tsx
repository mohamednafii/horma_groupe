import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Poppins } from "next/font/google";

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

export const metadata: Metadata = {
  title: "Horma Group — Import & Export, Casablanca",
  description:
    "Horma Group gère le processus complet, du sourcing à la livraison, à l'import comme à l'export. Un seul interlocuteur, un seul dossier, des documents conformes avant l'arrivée en douane.",
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
      </body>
    </html>
  );
}
