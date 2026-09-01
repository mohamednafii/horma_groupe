import React from 'react';

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-3 text-center">
      <span className="h-px w-9 bg-gradient-to-l from-[#c57a0a] to-transparent" />
      <h2 className="text-[1.35rem] font-black text-[#35251d] sm:text-[1.65rem]">
        {children}
      </h2>
      <span className="h-px w-9 bg-gradient-to-r from-[#c57a0a] to-transparent" />
    </div>
  );
}
