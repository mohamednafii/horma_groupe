import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

/* Served at /sitemap.xml.

   Listed by hand rather than globbed: a sitemap is a statement about which
   URLs are worth crawling, and every route here has been checked to render a
   real page. Add a route to this list when you add it to app/.

   `lastModified` is the build date — the site is statically generated, so a
   deploy is the only thing that changes a page. */
const lastModified = new Date();

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  // Arabic product landing pages — real, distinct pages, each its own product.
  { path: "/lp/gommage-nilla", priority: 0.7, changeFrequency: "monthly" },
  { path: "/lp/creme-hydratante", priority: 0.7, changeFrequency: "monthly" },
  { path: "/lp/creme-anti-age", priority: 0.7, changeFrequency: "monthly" },
  { path: "/lp/gommage_visage_nila", priority: 0.6, changeFrequency: "monthly" },
  { path: "/lp/gommage_akar_fasi", priority: 0.6, changeFrequency: "monthly" },
  // Legal pages: indexable, but never the answer to a search.
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
