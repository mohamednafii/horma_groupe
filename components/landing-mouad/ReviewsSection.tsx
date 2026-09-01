import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '@/data/al-hurra/types';
import { SectionHeading } from './SectionHeading';

interface ReviewsSectionProps {
  testimonials: Testimonial[];
}

export function ReviewsSection({ testimonials }: ReviewsSectionProps) {
  return (
    <section className="px-4 pb-7 lg:px-6">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading>ماذا تقول زبوناتنا</SectionHeading>
        <div className="mx-auto -mt-2 mb-4 w-fit rounded-full border border-[#e0b76f] bg-[#fff7e8] px-3 py-1 text-[9px] font-bold text-[#875312]">
          نماذج توضيحية — تُستبدل بآراء حقيقية موثقة قبل النشر التجاري
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-xl border border-[#ecd9c2] bg-white p-5 shadow-[0_7px_24px_rgba(88,52,13,.04)]"
            >
              <span className="absolute left-3 top-3 rounded-full bg-[#fbf0dc] px-2 py-0.5 text-[8px] font-bold text-[#8e590f]">
                نموذج
              </span>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt="صورة توضيحية لزبونة"
                  className="size-[72px] rounded-full border-2 border-[#e6c792] object-cover object-top"
                  width="160"
                  height="160"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-black text-[#382820]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[10px] text-[#75675d]">
                    {testimonial.city}
                  </p>
                  <div
                    className="mt-1 flex gap-0.5 text-[#c97a08]"
                    aria-label="خمس نجوم"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[12px] leading-6 text-[#51433a]">
                {testimonial.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
