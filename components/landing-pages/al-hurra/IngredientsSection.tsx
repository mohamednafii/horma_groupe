import type { Claim, Ingredient, SectionHeading } from "./types";
import styles from "./styles/ingredients.module.css";
import shared from "./styles/shared.module.css";
import { Icon } from "./ui/icons";
import { IngredientCard } from "./ui/IngredientCard";
import { SectionHead } from "./ui/SectionHead";

const TITLE_ID = "alh-ingredients-title";

/** What goes into the product, plus any provenance claims beneath it. */
export function IngredientsSection({
  heading,
  ingredients,
  claims,
}: {
  heading: SectionHeading;
  ingredients: Ingredient[];
  claims: Claim[];
}) {
  return (
    <section className={shared.section} aria-labelledby={TITLE_ID}>
      <SectionHead eyebrow={heading.eyebrow} title={heading.title} titleId={TITLE_ID} />

      <div className={`${shared.panel} ${styles.panel}`}>
        <ul className={styles.list}>
          {ingredients.map((ingredient) => (
            <IngredientCard key={ingredient.id} {...ingredient} />
          ))}
        </ul>

        {claims.length > 0 ? (
          <div className={styles.claims}>
            {claims.map((claim) => (
              <p key={claim.id} className={styles.claim}>
                <Icon name={claim.icon} size={18} stroke="var(--atlas-900)" strokeWidth={1.5} />
                <span>{claim.label}</span>
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
