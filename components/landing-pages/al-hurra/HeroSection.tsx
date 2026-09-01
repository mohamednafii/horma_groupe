import Image from "next/image";

import type { LandingContent } from "./types";
import styles from "./styles/hero.module.css";
import shared from "./styles/shared.module.css";
import { Icon } from "./ui/icons";
import { ScrollToOrderButton } from "./ui/ScrollToOrderButton";

/** Product cutout, headline stack, primary CTA and the reassurance line. */
export function HeroSection({ hero }: { hero: LandingContent["hero"] }) {
  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <Image
          className={styles.image}
          src={hero.image.src}
          width={hero.image.width}
          height={hero.image.height}
          alt={hero.imageAlt}
          priority
          sizes="(max-width: 800px) 100vw, 520px"
        />
      </div>

      <div className={styles.copy}>
        <p className={styles.kicker}>
          <span>{hero.kicker}</span>
        </p>

        <h1 className={styles.title}>
          {hero.titleLines.map((line, index) => (
            <span
              key={line}
              className={index === hero.accentLineIndex ? styles.titleAccent : undefined}
            >
              {line}
            </span>
          ))}
        </h1>

        <ScrollToOrderButton className={shared.btnCta}>
          <span className={shared.btnCtaLabel}>{hero.cta}</span>
          <span className={shared.btnCtaChevron} aria-hidden="true">
            &lsaquo;
          </span>
        </ScrollToOrderButton>

        <p className={styles.assurance}>
          <Icon name="shield" size={19} stroke="var(--atlas-900)" strokeWidth={1.6} />
          <span>{hero.assurance}</span>
        </p>
      </div>
    </section>
  );
}
