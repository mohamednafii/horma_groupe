"use client";

import { ProductLanding } from "../ProductLanding";
import { antiAgeProduct } from "@/data/al-hurra/anti-age";

/* The product data carries Lucide icon *components*, which cannot be passed
   from a Server Component into ProductLanding (a Client Component) — React
   cannot serialise a function across that boundary. Importing the data inside
   the client boundary keeps the route's page.tsx a Server Component, so its
   metadata and static prerender are preserved. */
export function AntiAgeLanding() {
  return <ProductLanding product={antiAgeProduct} />;
}
