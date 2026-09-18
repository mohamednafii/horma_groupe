import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

/* Served at /robots.txt.

   Everything public is crawlable. Only the form endpoints under /api are
   disallowed: they answer POSTs, have no content to index, and crawling them
   would just add noise to the logs. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
