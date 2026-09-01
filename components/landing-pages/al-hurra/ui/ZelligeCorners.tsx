import Image from "next/image";

import type { LandingImage } from "../types";
import styles from "../styles/landing.module.css";

/**
 * The two mirrored zellige corner motifs behind the top of the page.
 * Purely decorative, so they are hidden from assistive technology.
 */
export function ZelligeCorners({ image }: { image: LandingImage }) {
  return (
    <>
      <Image
        className={`${styles.zellige} ${styles.zelligeStart}`}
        src={image.src}
        width={image.width}
        height={image.height}
        alt=""
        aria-hidden="true"
        priority
        sizes="(max-width: 913px) 46vw, 420px"
      />
      <Image
        className={`${styles.zellige} ${styles.zelligeEnd}`}
        src={image.src}
        width={image.width}
        height={image.height}
        alt=""
        aria-hidden="true"
        priority
        sizes="(max-width: 913px) 46vw, 420px"
      />
    </>
  );
}
