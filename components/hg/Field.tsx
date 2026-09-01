import type { CSSProperties, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

/* Form control shell. 10px radius (--radius-control), hairline border, and a
   gold-free focus treatment: blue border plus the 3px --focus-ring halo. */
const CONTROL: CSSProperties = {
  width: "100%",
  minHeight: 46,
  padding: "var(--pad-control-y) var(--pad-control-x)",
  font: "var(--type-body-sm)",
  color: "var(--text-strong)",
  background: "var(--white)",
  border: "1px solid var(--border-default)",
  borderRadius: "var(--radius-control)",
  outline: "none",
  transition: "var(--transition-control)",
};

const INVERSE: CSSProperties = {
  background: "rgba(255,255,255,.08)",
  border: "1px solid var(--border-inverse)",
  color: "var(--white)",
};

export function Field({
  label,
  hint,
  htmlFor,
  children,
  style,
}: {
  label?: string;
  hint?: string;
  htmlFor?: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, ...style }}>
      {label ? (
        <label htmlFor={htmlFor} style={{ font: "var(--type-label)", color: "var(--text-body)" }}>
          {label}
        </label>
      ) : null}
      {children}
      {hint ? <span style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>{hint}</span> : null}
    </div>
  );
}

export function Input({
  inverse = false,
  style,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & { inverse?: boolean }) {
  return <input className="hg-input" style={{ ...CONTROL, ...(inverse ? INVERSE : null), ...style }} {...rest} />;
}

export function Textarea({
  inverse = false,
  style,
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { inverse?: boolean }) {
  return (
    <textarea
      className="hg-input"
      style={{ ...CONTROL, resize: "vertical", lineHeight: "var(--leading-body)", ...(inverse ? INVERSE : null), ...style }}
      {...rest}
    />
  );
}
