"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Icon } from "@/components/hg";
import { painPoints, remedies } from "@/lib/site-content";

const ROTATION_MS = 3000;

const SLIDES = [
  { id: "enjeux", title: "Les enjeux", items: painPoints, tone: "light" as const },
  { id: "methode", title: "Notre méthode", items: remedies, tone: "navy" as const },
];

/* The band's two-slide carousel: the risks we anticipate, then the method that
   answers them. One slide is visible at a time; the pair rotates every 3s.

   Both slides are always in the DOM, stacked in a single grid cell, so the
   frame keeps the height of the taller slide and nothing reflows on change.
   Rotation pauses on hover and on focus, and stops entirely under reduced
   motion — an animation that cannot be stopped fails WCAG 2.2.2. */
export function ChallengeCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [still, setStill] = useState(false);
  /* Bumped on a dot press so the interval restarts and the chosen slide gets
     its full three seconds rather than the remainder of the current tick. */
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setStill(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || still) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % SLIDES.length), ROTATION_MS);
    return () => window.clearInterval(id);
  }, [paused, still, tick]);

  return (
    <div
      className="hg-challenge-carousel"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Les enjeux et notre méthode"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hg-challenge-frame">
        {SLIDES.map((slide, i) => {
          const shown = i === active;
          return (
            <section
              key={slide.id}
              className="hg-challenge-slide"
              data-tone={slide.tone}
              /* Position relative to the active slide, so the outgoing slide
                 leaves on the side it entered from. */
              data-pos={shown ? "current" : i < active ? "before" : "after"}
              /* Slides carry no focusable content, so hiding the inactive one
                 from assistive tech is enough to keep it out of the way. */
              aria-hidden={shown ? undefined : true}
              role="group"
              aria-roledescription="diapositive"
              aria-label={`${i + 1} sur ${SLIDES.length} : ${slide.title}`}
            >
              <header className="hg-challenge-slide__head">
                <span className="hg-challenge-slide__count hg-mono">
                  {String(i + 1).padStart(2, "0")} <span aria-hidden="true">/ {String(SLIDES.length).padStart(2, "0")}</span>
                </span>
                <h3 className="hg-challenge-slide__title">{slide.title}</h3>
                
              </header>

              <ul className="hg-challenge-slide__grid">
                {slide.items.map((item) => (
                  <li key={item.title} className="hg-challenge-item">
                    <Image
                      className="hg-challenge-item__icon"
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      width={192}
                      height={192}
                      sizes="64px"
                    />
                    <span className="hg-challenge-item__text">
                      <span className="hg-challenge-item__title">{item.title}</span>
                      <span className="hg-challenge-item__body">{item.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <div className="hg-challenge-dots">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            className="hg-challenge-dot"
            data-active={i === active ? "true" : "false"}
            aria-label={`Afficher la diapositive ${i + 1} sur ${SLIDES.length} : ${slide.title}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => {
              setActive(i);
              setTick((t) => t + 1);
            }}
          />
        ))}
      </div>
    </div>
  );
}
