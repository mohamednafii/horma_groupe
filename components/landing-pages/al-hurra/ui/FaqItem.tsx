import type { Faq } from "../types";
import styles from "../styles/faq.module.css";

type Props = Faq & {
  open: boolean;
  onToggle: () => void;
};

/** One accordion row. Open/closed state is owned by the section. */
export function FaqItem({ id, question, answer, open, onToggle }: Props) {
  const answerId = `faq-answer-${id}`;

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.question}
        aria-expanded={open}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span className={styles.questionText}>{question}</span>
        <span className={styles.sign} aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <p className={styles.answer} id={answerId} hidden={!open}>
        {answer}
      </p>
    </div>
  );
}
