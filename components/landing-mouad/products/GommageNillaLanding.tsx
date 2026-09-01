"use client";

import { ProductLanding } from "../ProductLanding";
import { gommageNillaProduct } from "@/data/al-hurra/gommage-nilla";

/* The product data carries Lucide icon *components*, which cannot be passed
   from a Server Component into ProductLanding (a Client Component) — React
   cannot serialise a function across that boundary. Importing the data inside
   the client boundary keeps the route's page.tsx a Server Component, so its
   metadata and static prerender are preserved. */
export function GommageNillaLanding() {
  return <ProductLanding product={gommageNillaProduct} />;
}
