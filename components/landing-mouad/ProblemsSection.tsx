import React from 'react';
import { ProblemCard } from '@/data/al-hurra/types';
import { SectionHeading } from './SectionHeading';

interface ProblemsSectionProps {
  cards: ProblemCard[];
}

export function ProblemsSection({ cards }: ProblemsSectionProps) {
  return (
    <section className="problems-panel rounded-xl border border-[#eedcc6] bg-white p-3 sm:p-4">
      <SectionHeading>هل تعانين من هذه المشاكل ؟</SectionHeading>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {cards.map((problem) => (
          <article
            key={problem.title}
            className="overflow-hidden rounded-lg border border-[#ead8c0] bg-[#fffefa]"
          >
            <img
              src={problem.image}
              alt={problem.title}
              className="aspect-[1.28/1] w-full object-cover"
              width="1440"
              height="960"
              loading="lazy"
            />
            <div className="p-3 text-center">
              <h3 className="text-[13px] font-black text-[#3c2b22] sm:text-sm">
                {problem.title}
              </h3>
              <p className="mt-1 text-[10px] leading-5 text-[#67584e] sm:text-[11px]">
                {problem.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
