import type { MetadataRoute } from "next";

import { siteName } from "@/lib/seo";

/* Served at /manifest.webmanifest and linked from every page by Next.
   Colours are the design system's: navy for the UI, paper for the surface. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} — Import & Export, Casablanca`,
    short_name: siteName,
    description:
      "Horma Group gère le processus complet, du sourcing à la livraison, à l'import comme à l'export.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f8f8f8",
    theme_color: "#08111f",
    lang: "fr",
    dir: "ltr",
    categories: ["business", "shopping"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
