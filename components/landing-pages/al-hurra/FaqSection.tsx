"use client";

import { useState } from "react";

import type { Faq, SectionHeading } from "./types";
import styles from "./styles/faq.module.css";
import shared from "./styles/shared.module.css";
import { FaqItem } from "./ui/FaqItem";
import { SectionHead } from "./ui/SectionHead";

const TITLE_ID = "alh-faq-title";

/** Single-open accordion: opening one row closes whichever was open. */
export function FaqSection({ heading, faqs }: { heading: SectionHeading; faqs: Faq[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className={`${shared.section} ${styles.section}`} aria-labelledby={TITLE_ID}>
      <SectionHead
        eyebrow={heading.eyebrow}
        title={heading.title}
        titleId={TITLE_ID}
        className={styles.head}
      />

      <div className={styles.list}>
        {faqs.map((faq) => (
          <FaqItem
            key={faq.id}
            {...faq}
            open={openId === faq.id}
            onToggle={() => setOpenId((current) => (current === faq.id ? null : faq.id))}
          />
        ))}
      </div>
    </section>
  );
}
