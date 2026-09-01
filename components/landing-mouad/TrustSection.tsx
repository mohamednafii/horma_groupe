import React from 'react';
import { ReassuranceItem } from '@/data/al-hurra/types';

interface TrustSectionProps {
  reassurance: ReassuranceItem[];
}

export function TrustSection({ reassurance }: TrustSectionProps) {
  return (
    <section className="px-4 pb-7 lg:px-6">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 rounded-xl border border-[#ecd9c2] bg-white px-3 py-4 sm:grid-cols-4">
        {reassurance.map(({ title, text, icon: Icon }) => (
          <div
            key={title}
            className="flex items-center gap-3 border-[#ead9c2] px-2 py-3 sm:justify-center sm:not-last:border-l"
          >
            <Icon
              className="size-9 shrink-0 stroke-[1.35] text-[#c77909]"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-xs font-black text-[#3a2a22] sm:text-sm">
                {title}
              </h3>
              <p className="mt-0.5 text-[9px] text-[#776960] sm:text-[10px]">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
