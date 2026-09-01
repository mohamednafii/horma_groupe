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
        <ComplianceStrip />
        <Services />
        <Challenges />
        <Process />
        <Proof />
        <Catalogue />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  );
}
