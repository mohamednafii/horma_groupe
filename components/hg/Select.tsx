import type { SelectHTMLAttributes } from "react";

import { Icon } from "./Icon";

/* Select: the native control in the system's Field skin. A native <select>
   is keyboard- and screen-reader-correct everywhere and opens as the platform
   picker on a phone, which no custom listbox matches — so the system does not
   ship a JS dropdown. Styling lives in `.hg-select*` in globals.css. */
export function Select({
  options,
  ...rest
}: {
  options: readonly { value: string; label: string }[];
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "children" | "className">) {
  return (
    <span className="hg-select">
      <select className="hg-select__control hg-input" {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="hg-select__caret" aria-hidden="true">
        <Icon name="chevronDown" size={16} />
      </span>
    </span>
  );
}
