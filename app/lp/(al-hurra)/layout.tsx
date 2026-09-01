import { Cairo } from "next/font/google";

import "../al-hurra.css";

/* Cairo is loaded in this route-group layout, not the root, so no other page
   requests it. The existing /lp pages sit outside this group and are
   unaffected — a route group adds a layout without changing any URL. */
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

/**
 * Scopes Arabic, RTL and the ported template's styles to these three routes.
 *
 * The root layout stays `lang="fr"` with no direction; `lang` and `dir` are
 * valid on any element, so setting them here flips direction for this subtree
 * only. `.lp-alhurra-mouad` is the style scope every rule in al-hurra.css
 * hangs off.
 */
export default function AlHurraLayout({ children }: LayoutProps<"/lp">) {
  return (
    <div lang="ar" dir="rtl" className={`lp-alhurra-mouad ${cairo.variable} antialiased`}>
      {children}
    </div>
  );
}
