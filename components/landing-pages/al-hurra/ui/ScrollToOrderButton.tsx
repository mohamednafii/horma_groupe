"use client";

import type { ReactNode } from "react";

import { scrollToOrder } from "../scrollToOrder";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Wraps the only bit of interactivity the hero needs, so the hero itself can
 * stay a Server Component.
 */
export function ScrollToOrderButton({ children, className }: Props) {
  return (
    <button type="button" className={className} onClick={scrollToOrder}>
      {children}
    </button>
  );
}
