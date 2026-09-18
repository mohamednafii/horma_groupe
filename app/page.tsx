import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { Catalogue } from "@/components/sections/Catalogue";
import { Challenges } from "@/components/sections/Challenges";
import { ComplianceStrip } from "@/components/sections/ComplianceStrip";
import { ContactCta } from "@/components/sections/ContactCta";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Proof } from "@/components/sections/Proof";
import { Services } from "@/components/sections/Services";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { faqLd, localBusinessLd, pageMetadata, servicesLd, websiteLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Horma Group — Import & Export, Casablanca",
  description:
    "Sourcing, dédouanement, transport et suivi : Horma Group gère vos opérations d'import-export de bout en bout depuis Casablanca, avec un seul interlocuteur.",
  path: "/",
});

/* Band order follows the design system's marketing page system: hero photo,
   reference strip, services, the problem/answer pair, process, one navy proof
   band, catalogue, FAQ, closing quote form, footer. Backgrounds alternate
   paper/white with a single navy block mid-page. */
export default function Home() {
  return (
    <div className="hg-site">
      <SiteHeader />
      <main>
        <Hero />
        {/* <ComplianceStrip /> */}
        <Services />
        <Challenges />
        <Process />
        <Proof />
        {/* <Catalogue /> */}
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
      {/* The home page carries the site graph, the service catalogue and the
          FAQ that the band below actually renders. */}
      <JsonLd data={[websiteLd(), localBusinessLd(), servicesLd(), faqLd()]} />
    </div>
  );
}
