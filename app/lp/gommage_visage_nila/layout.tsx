import type { Metadata } from "next";
import { Tajawal } from "next/font/google";

import { gommageVisageNila } from "@/components/landing-pages/gommage-visage-nila/content";

/* Tajawal is the landing pages' face only. Loading it here rather than in the
   root layout keeps it off every other Horma Group route. */
const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

/* Absolute URLs for the OG image. Set NEXT_PUBLIC_SITE_URL in the deploy
   environment; the localhost fallback only affects local previews. Declared
   here rather than in the root layout so no other route's metadata changes. */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title = "قناع التقشير للوجه بالنيلة الزرقاء | الحُرّة";
const description =
  "اكتشفي قناع التقشير الطبيعي للوجه من الحُرّة، بالنيلة الزرقاء وأعشاب مغربية وزيت الأركان وزيت اللوز الحلو لبشرة ناعمة ومشرقة.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "ar_MA",
    title,
    description,
    images: [{ url: gommageVisageNila.brand.ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

/**
 * Scopes Arabic + RTL to this route.
 *
 * The root layout stays `lang="fr"` with no direction, so the rest of the
 * Horma Group site is untouched. `lang` and `dir` are valid on any element,
 * so setting them on this wrapper flips direction for the subtree only.
 */
export default function GommageVisageNilaLayout({ children }: LayoutProps<"/lp/gommage_visage_nila">) {
  return (
    <div lang="ar" dir="rtl" className={tajawal.variable}>
      {children}
    </div>
  );
}
