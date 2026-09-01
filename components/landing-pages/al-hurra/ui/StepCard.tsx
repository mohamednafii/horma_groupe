import { Fragment } from "react";
import Image from "next/image";

import type { Step } from "../types";
import styles from "../styles/howto.module.css";

/** One usage step: illustration, numbered disc, and its caption lines. */
export function StepCard({ index, lines, image }: Step) {
  return (
    <div className={styles.step}>
      <div className={styles.media}>
        <Image
          className={styles.image}
          src={image.src}
          width={image.width}
          height={image.height}
          alt=""
          sizes="118px"
        />
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
      </div>
      <p className={styles.text}>
        {lines.map((line, i) => (
          <Fragment key={line}>
            {i > 0 ? <br /> : null}
            {line}
          </Fragment>
        ))}
      </p>
    </div>
  );
}
