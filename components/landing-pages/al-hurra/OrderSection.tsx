import { OrderForm } from "./order/OrderForm";
import { PackChooser } from "./order/PackChooser";
import { ORDER_SECTION_ID } from "./scrollToOrder";
import type { LandingContent } from "./types";
import styles from "./styles/order.module.css";
import { SectionHead } from "./ui/SectionHead";

const TITLE_ID = "alh-order-title";

/**
 * The dark order block. The shell stays a Server Component; only the pack
 * chooser and the form ship JavaScript.
 */
export function OrderSection({
  heading,
  formTitle,
}: {
  heading: LandingContent["headings"]["order"];
  formTitle: string;
}) {
  return (
    <section className={styles.order} id={ORDER_SECTION_ID} aria-labelledby={TITLE_ID}>
      <div className={styles.inner}>
        <SectionHead
          eyebrow={heading.eyebrow}
          title={heading.title}
          titleId={TITLE_ID}
          inverse
          eyebrowClassName={styles.headEyebrow}
          titleClassName={styles.headTitle}
        />

        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.cardPacks}`}>
            <PackChooser />
          </div>

          <div className={`${styles.card} ${styles.cardForm}`}>
            <h3 className={styles.cardTitle}>{formTitle}</h3>
            <OrderForm />
          </div>
        </div>
      </div>
    </section>
  );
}
