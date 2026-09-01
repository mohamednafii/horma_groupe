import React from 'react';
import { PackageCheck, Truck } from 'lucide-react';
import { Offer } from '@/data/al-hurra/types';

interface OfferSectionProps {
  offer?: Offer;
}

export function OfferSection({ offer }: OfferSectionProps) {
  const displayPrice = offer?.price ?? 100;
  const displayOldPrice = offer?.oldPrice ?? 299;

  return (
    <section className="offer-panel rounded-xl border border-[#ecd7bc] bg-[linear-gradient(135deg,#fffdf8_0%,#fff8ec_100%)] p-5 shadow-[0_8px_26px_rgba(100,61,15,.04)]">
      <div className="grid items-center gap-5 sm:grid-cols-[.8fr_1.3fr]">
        <div className="grid grid-cols-2 gap-4 border-[#ead7be] sm:border-l sm:pl-5">
          <div className="flex items-center gap-2">
            <Truck className="size-8 stroke-[1.35] text-[#ca7b0a]" />
            <span className="text-[11px] font-bold leading-5">
              توصيل سريع
              <small className="block font-normal text-[#75675e]">
                لجميع المدن
              </small>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <PackageCheck className="size-8 stroke-[1.35] text-[#ca7b0a]" />
            <span className="text-[11px] font-bold leading-5">
              الدفع عند الاستلام
              <small className="block font-normal text-[#75675e]">
                بدون دفع مسبق
              </small>
            </span>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-black text-[#bd7007] sm:text-2xl">
            عرض خاص لفترة محدودة
          </h2>
          <div className="mt-3 flex items-end justify-center gap-8">
            <div>
              <span className="block text-xs font-bold">الآن فقط</span>
              <strong
                className="text-4xl font-black leading-none text-[#2d1e17]"
                dir="ltr"
              >
                {displayPrice} <small className="text-sm">DH</small>
              </strong>
            </div>
            <div>
              <span className="block text-xs">بدلاً من</span>
              <b
                className="text-2xl font-black line-through decoration-2 decoration-[#87382c]"
                dir="ltr"
              >
                {displayOldPrice} <small className="text-xs">DH</small>
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
