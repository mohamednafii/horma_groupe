import Image from "next/image";

import type { LandingContent } from "./types";
import styles from "./styles/masthead.module.css";
import shared from "./styles/shared.module.css";
import { DividerMark, FriezeBand, FriezeCap } from "./ui/icons";

/** Brand header: the logo flanked by two mirrored zellige friezes. */
export function Masthead({ brand }: { brand: LandingContent["brand"] }) {
  return (
    <header className={styles.masthead}>
      <div className={`${shared.shell} ${styles.row}`}>
        <div className={styles.frieze}>
          <FriezeBand id="alhFriezeA" className={styles.friezeBand} />
          <FriezeCap className={styles.friezeCap} />
        </div>

        <Image
          className={styles.logo}
          src={brand.logo.src}
          width={brand.logo.width}
          height={brand.logo.height}
          alt={brand.logoAlt}
          priority
          sizes="(max-width: 437px) 48vw, 210px"
        />

        <div className={`${styles.frieze} ${styles.friezeEnd}`}>
          <FriezeBand id="alhFriezeB" className={styles.friezeBand} />
          <FriezeCap className={styles.friezeCap} />
        </div>
      </div>

      <div className={`${shared.shell} ${styles.divider}`} aria-hidden="true">
        <DividerMark className={styles.dividerMark} />
      </div>
    </header>
  );
}
