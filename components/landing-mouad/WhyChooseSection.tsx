import React from 'react';
import { Check } from 'lucide-react';
import { ProductData } from '@/data/al-hurra/types';
import { SectionHeading } from './SectionHeading';

interface WhyChooseSectionProps {
  whyHeading: ProductData['whyHeading'];
  whyBenefits: ProductData['whyBenefits'];
  whyImage: ProductData['whyImage'];
  sideBenefits: ProductData['sideBenefits'];
}

export function WhyChooseSection({
  whyHeading,
  whyBenefits,
  whyImage,
  sideBenefits,
}: WhyChooseSectionProps) {
  return (
    <section className="why-panel overflow-hidden rounded-xl border border-[#eedcc6] bg-white">
      <div className="grid h-full sm:grid-cols-[1fr_130px]">
        <div className="flex min-h-0 flex-col p-4 sm:p-5">
          <SectionHeading>
            {whyHeading.prefix}
            <span className="text-[#bd7007]" dir="ltr">
              {whyHeading.brandName}
            </span>
            {whyHeading.suffix}
          </SectionHeading>
          <ul className="space-y-2.5">
            {whyBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2.5 text-[12px] font-semibold leading-5 text-[#3d3028] sm:text-[13px]"
              >
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#c77a09] text-white">
                  <Check className="size-2.5 stroke-[3]" aria-hidden="true" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <img
            src={whyImage.src}
            alt={whyImage.alt}
            className="mt-auto max-h-[260px] w-full object-contain pt-4"
            width={whyImage.width}
            height={whyImage.height}
            loading="lazy"
          />
        </div>

        <aside className="grid grid-cols-2 border-t border-[#eedcc6] bg-[#fffdf9] p-3 sm:grid-cols-1 sm:border-t-0 sm:border-r">
          {sideBenefits.map(({ label, icon: Icon, imageIcon }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 border-[#ead9c2] px-2 py-3 sm:flex-col sm:justify-center sm:not-last:border-b sm:text-center"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#d79029] text-[#c67809]">
                {imageIcon ? (
                  <img
                    src={imageIcon}
                    alt={label}
                    className="size-6 object-contain"
                  />
                ) : (
                  <Icon className="size-6 stroke-[1.35]" aria-hidden="true" />
                )}
              </span>
              <span className="text-[10px] font-bold leading-4 text-[#49372d] sm:text-[11px]">
                {label}
              </span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
