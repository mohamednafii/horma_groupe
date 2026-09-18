import type { InputHTMLAttributes, ReactNode } from "react";

/* Checkbox row: a real <input type="checkbox"> under a painted box, so the
   control keeps native semantics, native keyboard behaviour and the system's
   focus ring. The box itself is drawn in `.hg-check*` in globals.css. */
export function Checkbox({
  label,
  hint,
  ...rest
}: {
  label: ReactNode;
  /** Trailing note, e.g. a facet count. */
  hint?: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "className">) {
  return (
    <label className="hg-check">
      <input type="checkbox" className="hg-check__input" {...rest} />
      <span className="hg-check__box" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" focusable="false">
          <path d="M4 12.5 9 17.5 20 6.5" stroke="currentColor" strokeWidth="2.75" strokeLinecap="square" />
        </svg>
      </span>
      <span className="hg-check__label">{label}</span>
      {hint ? <span className="hg-check__hint hg-mono">{hint}</span> : null}
    </label>
  );
}
