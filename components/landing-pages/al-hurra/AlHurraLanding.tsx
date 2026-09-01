import { BenefitsBar } from "./BenefitsBar";
import { FaqSection } from "./FaqSection";
import { HeroSection } from "./HeroSection";
import { HowToUseSection } from "./HowToUseSection";
import { IngredientsSection } from "./IngredientsSection";
import { LandingFooter } from "./LandingFooter";
import { Masthead } from "./Masthead";
import { OrderSection } from "./OrderSection";
import { OrderStateProvider } from "./OrderStateProvider";
import { ReviewsSection } from "./ReviewsSection";
import { StickyOrderBar } from "./StickyOrderBar";
import { TrustStrip } from "./TrustStrip";
import type { LandingContent } from "./types";
import styles from "./styles/landing.module.css";
import { ZelligeCorners } from "./ui/ZelligeCorners";

/**
 * The AL HURRA product landing page.
 *
 * Every product renders this same composition; only `content` differs. Section
 * order, spacing and styling live here and in `styles/`, never in the product
 * content files.
 */
export function AlHurraLanding({ content }: { content: LandingContent }) {
  const { config, brand, hero, headings, orderCopy, sectionLabels } = content;

  const scopeClass = [styles.scope, config.showStickyBar ? null : styles.noSticky]
    .filter(Boolean)
    .join(" ");

  return (
    // OrderStateProvider is the only shared state: the sticky bar mirrors the
    // pack and quantity chosen further up in the order section.
    <OrderStateProvider content={content}>
      <div className={scopeClass}>
        <ZelligeCorners image={brand.zellige} />
        <Masthead brand={brand} />

        <main>
          <HeroSection hero={hero} />
          <BenefitsBar
            benefits={content.benefits}
            label={sectionLabels.benefits}
            heading={headings.benefits}
          />
          <IngredientsSection
            heading={headings.ingredients}
            ingredients={content.ingredients}
            claims={content.ingredientClaims}
          />
          <HowToUseSection heading={headings.howTo} steps={content.steps} />
          <ReviewsSection
            heading={headings.reviews}
            reviews={content.reviews}
            starsLabel={content.starsLabel}
          />
          <OrderSection heading={headings.order} formTitle={orderCopy.formTitle} />
          <TrustStrip points={content.trustPoints} label={sectionLabels.trust} />
          <FaqSection heading={headings.faq} faqs={content.faqs} />
        </main>

        <LandingFooter contacts={content.contactPoints} legal={content.legalLinks} />
        {config.showStickyBar ? <StickyOrderBar /> : null}
      </div>
    </OrderStateProvider>
  );
}
