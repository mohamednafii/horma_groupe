"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

/**
 * Meta (Facebook) Pixel — ONE pixel for the whole site.
 *
 * Mounted a single time, in the root layout (`app/layout.tsx`), so every route
 * is covered at once:
 *   - /lp/gommage_akar_fasi
 *   - /lp/gommage-nilla
 *   - /lp/gommage_visage_nila
 *   - /lp/creme-hydratante
 *   - /lp/creme-anti-age
 *   - plus every corporate page.
 *
 * Do NOT render <MetaPixel /> anywhere else — one mount = one pixel = one
 * `fbq('init')`. The five Meta Ads campaigns all report to this same pixel;
 * they only differ by their destination URL.
 *
 * PageView strategy (see also the dedup notes on `lastTrackedPath` below):
 *   - Direct hit / ad click (full page load): the inline bootstrap script runs
 *     `fbq('track', 'PageView')` once, synchronously.
 *   - Client-side navigation (Next.js route change with no full reload): the
 *     effect below sends one more `PageView`, once per new pathname.
 *   - The entry pathname is adopted without re-tracking, and repeat effect runs
 *     for the same pathname are ignored, so a single visit is never counted
 *     twice — including under React Strict Mode in development.
 */

export const META_PIXEL_ID = "1431501005500133";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * The last pathname a PageView was sent for. Kept at module scope on purpose:
 *   - it survives React Strict Mode's double-mount of the effect in dev;
 *   - it survives client-side route changes (the component never unmounts);
 *   - it resets naturally on a real full page load, which is when the inline
 *     bootstrap script fires its own PageView.
 */
let lastTrackedPath: string | null = null;

export function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // First run after a full page load: the inline script already sent the
    // PageView for this pathname. Adopt it, don't send a second one.
    if (lastTrackedPath === null) {
      lastTrackedPath = pathname;
      return;
    }

    // Same pathname as last time (Strict Mode re-run, or a query-string-only
    // change): nothing new to report.
    if (pathname === lastTrackedPath) {
      return;
    }

    // Genuine client-side navigation to a new page.
    lastTrackedPath = pathname;
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');
fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

/**
 * Fire a standard Meta Pixel event from any Client Component.
 *
 * NOT wired to anything yet — PageView is the only event live for now. This is
 * the hook for the next step (Purchase / Lead / …). Each landing page maps to
 * one product, so a later Purchase call identifies which campaign converted:
 *
 *   // landing-mouad flow — components/landing-mouad/ProductLanding.tsx,
 *   // right after setSubmittedOrder(...) succeeds:
 *   trackMeta("Purchase", {
 *     content_name: product.name,
 *     content_ids: [product.slug],
 *     content_type: "product",
 *     value: totalPayable,
 *     currency: "MAD",
 *   });
 *
 *   // al-hurra flow — components/landing-pages/al-hurra/order/OrderForm.tsx,
 *   // right after setStatus("success"):
 *   trackMeta("Purchase", {
 *     content_name: content.brand.name,
 *     content_ids: [content.brand.slug],
 *     content_type: "product",
 *     value: total,
 *     currency: "MAD",
 *   });
 *
 * Guarded so it is a no-op on the server (SSR-safe) and before the pixel loads.
 */
export function trackMeta(
  event: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }
  window.fbq("track", event, params);
}
