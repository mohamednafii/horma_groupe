import Image from "next/image";

import type { Ingredient } from "../types";
import styles from "../styles/ingredients.module.css";

/** A single ingredient cutout with its label, and an optional supporting line. */
export function IngredientCard({ name, image, description }: Ingredient) {
  return (
    <li className={styles.item}>
      <Image
        className={styles.image}
        src={image.src}
        width={image.width}
        height={image.height}
        alt={name}
        sizes="120px"
      />
      <span className={styles.name}>{name}</span>
      {description ? <span className={styles.description}>{description}</span> : null}
    </li>
  );
}
