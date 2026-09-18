"use client";

import { usePathname } from "next/navigation";

import { AIButton } from "@/components/hg";

/* The floating assistant trigger, mounted once in the root layout.

   Two things it has to get right about where it lives:

   - It is a sibling of the page, not a child, so it carries `.hg-site` itself.
     Every design-system state rule — including the AI button's skin — hangs off
     that scope, and the button would render bare without it. The class also
     paints the page background, which `.hg-ai-fab` turns back off.

   - It stays off /lp/*. Those landing pages are a separate style scope with
     their own fixed CTAs (see landing-mouad/StickyCta), and a second floating
     control would land on top of the first. */
export function AIAssistantFab() {
  const pathname = usePathname();

  if (pathname.startsWith("/lp")) return null;

  return (
    <div className="hg-site hg-ai-fab">
      <AIButton />
    </div>
  );
}
