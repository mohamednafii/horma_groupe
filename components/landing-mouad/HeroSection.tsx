import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/landing-mouad/ui/button';
import { ProductData } from '@/data/al-hurra/types';

interface HeroSectionProps {
  product: ProductData;
  onOrderClick: () => void;
}

export function HeroSection({ product, onOrderClick }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#eedcc6] bg-[#fffefa] min-[769px]:bg-[#fffdf9]">
      <div className="absolute inset-x-0 top-0 -z-10 h-52 bg-[radial-gradient(circle_at_78%_20%,rgba(221,166,77,.15),transparent_56%)] min-[769px]:hidden" />

      <div className="mx-auto flex flex-col min-[769px]:grid min-[769px]:min-h-[625px] min-[769px]:max-w-[1180px] min-[769px]:items-center min-[769px]:gap-6 px-4 py-6 min-[769px]:grid-cols-[1.08fr_.92fr] min-[769px]:px-8 min-[769px]:py-10">
        <div className="relative order-6 flex min-h-[280px] items-center justify-center my-2 max-[768px]:order-6 min-[769px]:order-2 min-[769px]:min-h-[560px]">
          <div className="absolute inset-x-[8%] bottom-[4%] h-[27%] rounded-[50%] bg-[#d9b98b]/35 blur-2xl" />
          <img
            src={product.heroImage.src}
            alt={product.heroImage.alt}
            className="relative z-10 h-auto w-[92%] max-w-[540px] min-[769px]:max-w-[680px] object-contain drop-shadow-[0_24px_24px_rgba(80,44,8,.16)] min-[769px]:w-full"
            width={product.heroImage.width}
            height={product.heroImage.height}
            fetchPriority="high"
          />

          <div className="absolute bottom-[5%] right-[2%] z-20 flex size-[96px] rotate-[-7deg] flex-col items-center justify-center rounded-full border-[5px] border-[#e7a42c] bg-[#f6c65a] text-center shadow-[0_8px_24px_rgba(104,61,7,.22)] before:absolute before:inset-1 before:rounded-full before:border before:border-[#9b5b05] sm:right-[8%] sm:size-[116px]">
            <span className="relative text-[12px] font-bold text-[#5e3909] sm:text-sm">
              ضمان الرضا
            </span>
            <strong
              className="relative text-2xl font-black leading-none text-[#261508] sm:text-3xl"
              dir="ltr"
            >
              100%
            </strong>
          </div>
        </div>

        <div className="max-[768px]:contents text-center min-[769px]:block min-[769px]:order-1 min-[769px]:text-right">
          <img
            src="/media/shared/logo-alhurra.webp"
            alt="شعار AL HURRA"
            className="mx-auto mb-2 h-[100px] w-[168px] object-contain max-[768px]:order-1 min-[769px]:mx-auto min-[769px]:mb-4 min-[769px]:h-[110px] min-[769px]:w-[180px]"
            width="1536"
            height="1024"
          />

          <p className="text-xl font-bold text-[#33241c] sm:text-2xl max-[768px]:order-2">
            {product.subtitle}
          </p>
          <h1 className="mt-1 text-[2.2rem] font-black leading-[1.22] tracking-[-.035em] text-[#bd7007] sm:text-[3.25rem] min-[769px]:text-[3.55rem] max-[768px]:order-3">
            {product.title}
          </h1>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-lg font-semibold text-[#30221b] min-[769px]:justify-start max-[768px]:order-4">
            <span>{product.badgeLabel}</span>
            <span
              className="rounded-md bg-gradient-to-b from-[#da9429] to-[#b96d05] px-2.5 py-1 text-sm font-extrabold tracking-wide text-white"
              dir="ltr"
            >
              {product.badgeSub}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-4 max-[768px]:order-5">
            {product.heroBenefits.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex min-w-0 flex-col items-center gap-2 border-[#ead9c2] px-1 sm:not-last:border-l"
              >
                <Icon
                  aria-hidden="true"
                  className="size-8 stroke-[1.35] text-[#cb7b0a]"
                />
                <span className="max-w-[9rem] text-[12px] font-semibold leading-5 text-[#49372d] sm:text-[13px]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <Button
            type="button"
            onClick={onOrderClick}
            className="mt-6 h-14 w-full max-w-[390px] rounded-lg bg-gradient-to-b from-[#dfa03b] via-[#ca800f] to-[#b96b04] px-8 text-xl font-black text-white shadow-[0_10px_24px_rgba(176,100,4,.2)] transition hover:brightness-105 sm:text-2xl max-[768px]:order-7"
          >
            <ShoppingCart className="size-6" aria-hidden="true" />
            اطلب الآن
          </Button>

          <div className="mx-auto mt-4 flex max-w-[540px] flex-wrap justify-center gap-x-5 gap-y-3 min-[769px]:mx-0 min-[769px]:justify-start max-[768px]:order-8">
            {product.heroTrustItems.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-[11px] font-semibold text-[#4d4037] sm:text-xs"
              >
                <Icon
                  aria-hidden="true"
                  className="size-5 stroke-[1.5] text-[#cb7b0a]"
                />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
