"use client";

import { useEffect, useId, useRef } from "react";
import type { ReactNode } from "react";

import { Icon } from "./Icon";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/* Side sheet for secondary controls on small screens: the header drawer's
   scroll lock and full-height panel, plus what a dialog additionally owes the
   keyboard — Escape, a focus trap, and focus handed back on close.

   Rendered inline rather than in a portal: the component is always mounted at
   the top of its page section, and a fixed overlay needs no portal to escape
   its parent as long as no ancestor creates a containing block. */
export function Drawer({
  open,
  onClose,
  title,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  /** Sticky action row, e.g. reset + apply. */
  footer?: ReactNode;
}) {
  const panel = useRef<HTMLDivElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    restoreTo.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the panel so the next Tab stays inside it.
    panel.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel.current) return;
      const stops = [...panel.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null
      );
      if (!stops.length) return;
      const first = stops[0];
      const last = stops[stops.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = previousOverflow;
      restoreTo.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="hg-drawer" role="presentation">
      <div className="hg-drawer__scrim" onClick={onClose} aria-hidden="true" />
      <div
        className="hg-drawer__panel"
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="hg-drawer__head">
          <h2 id={titleId} className="hg-drawer__title">
            {title}
          </h2>
          <button type="button" className="hg-drawer__close" onClick={onClose} aria-label="Fermer">
            <Icon name="close" size={20} />
          </button>
        </div>
        <div className="hg-drawer__body">{children}</div>
        {footer ? <div className="hg-drawer__foot">{footer}</div> : null}
      </div>
    </div>
  );
}
