"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

/* The one scroll animation in the system: a 14px rise over 520ms on
   --ease-cargo, fired once when the block enters the viewport.

   The design system rules out parallax, bounce, spring and anything that loops
   for decoration, so this is deliberately the only scroll-linked motion on the
   site. `delay` staggers siblings; keep it under ~120ms so a row still reads as
   one gesture. IntersectionObserver is cheap and needs no animation library. */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={["hg-reveal", className].filter(Boolean).join(" ")}
      data-shown={shown ? "true" : "false"}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Tag>
  );
}
