import React, { FormEvent } from 'react';
import { CircleCheckBig } from 'lucide-react';
import { Offer } from '@/data/al-hurra/types';
import { FormErrors, OrderForm, SubmittedOrder } from './OrderForm';
import { SectionHeading } from './SectionHeading';

interface PacksSectionProps {
  offers: Offer[];
  selectedQuantity: number;
  onSelectQuantity: (quantity: number) => void;
  selectedOffer: Offer;
  formErrors: FormErrors;
  submittedOrder: SubmittedOrder | null;
  onClearError: (field: keyof FormErrors) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function PacksSection({
  offers,
  selectedQuantity,
  onSelectQuantity,
  selectedOffer,
  formErrors,
  submittedOrder,
  onClearError,
  onSubmit,
}: PacksSectionProps) {
  return (
    <section id="commande" className="scroll-mt-5 px-4 pb-7 lg:px-6">
      <div
        className="order-grid mx-auto grid max-w-[1180px] gap-4 lg:grid-cols-[.86fr_1.3fr]"
        dir="ltr"
      >
        <section
          className="offers-column rounded-xl border border-[#ecd9c2] bg-white p-4 sm:p-5 lg:col-start-2 lg:row-start-1"
          dir="rtl"
        >
          <SectionHeading>اختيار عدد العبوات</SectionHeading>
          <p className="-mt-3 mb-5 text-center text-xs text-[#74665c]">
            اختاري العرض المناسب لك واستفيدي من التخفيض
          </p>

          <div
            className="grid gap-3 sm:grid-cols-3"
            role="radiogroup"
            aria-label="اختيار عدد العبوات"
          >
            {offers.map((offer) => (
              <label
                key={offer.quantity}
                className="relative block min-h-[340px] cursor-pointer"
              >
                <input
                  type="radio"
                  name="offer-selection"
                  value={offer.quantity}
                  checked={selectedQuantity === offer.quantity}
                  onChange={() => onSelectQuantity(offer.quantity)}
                  aria-label={`${offer.name} بسعر ${offer.price} درهم`}
                  className="peer absolute inset-0 z-20 h-full w-full cursor-pointer rounded-xl opacity-0"
                />
                <div className="relative flex h-full flex-col items-center rounded-xl border border-[#e8d6bf] bg-[#fffefa] p-4 text-center transition duration-200 peer-checked:-translate-y-1 peer-checked:border-[#c67809] peer-checked:bg-white peer-checked:shadow-[0_14px_30px_rgba(167,99,8,.12)] peer-focus-visible:ring-3 peer-focus-visible:ring-[#c67809]/25">
                  {offer.popular && (
                    <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-b from-[#d99b32] to-[#b86a03] px-5 py-1 text-[11px] font-black text-white shadow-sm">
                      الأكثر طلباً
                    </span>
                  )}

                  <h3 className="mt-1 text-base font-black text-[#35251d]">
                    {offer.name}
                  </h3>
                  <p className="text-[11px] text-[#6f6158]" dir="ltr">
                    {offer.detail}
                  </p>
                  <img
                    src={offer.image}
                    alt={offer.imageAlt || offer.name}
                    className="my-2 h-[150px] w-full object-contain"
                    width="1536"
                    height="1024"
                    loading="lazy"
                  />
                  <strong
                    className="mt-auto text-[2.1rem] font-black leading-none text-[#2d1e17]"
                    dir="ltr"
                  >
                    {offer.price}{' '}
                    <small className="text-[11px] font-extrabold">DH</small>
                  </strong>
                  <p className="mt-2 text-[10px] text-[#6f5c50]">
                    بدلاً من{' '}
                    <span
                      className="font-bold line-through decoration-[#963a2f]"
                      dir="ltr"
                    >
                      {offer.oldPrice} DH
                    </span>
                  </p>
                  {offer.quantity > 1 && (
                    <span className="mt-3 rounded-md bg-gradient-to-b from-[#d99b32] to-[#b86a03] px-4 py-2 text-[11px] font-black text-white">
                      وفر {offer.saving} DH
                    </span>
                  )}
                  {selectedQuantity === offer.quantity && (
                    <span className="mt-2 flex items-center gap-1 text-[10px] font-black text-[#a76106]">
                      <CircleCheckBig className="size-4" /> تم الاختيار
                    </span>
                  )}
                </div>
              </label>
            ))}
          </div>
        </section>

        <OrderForm
          selectedOffer={selectedOffer}
          formErrors={formErrors}
          submittedOrder={submittedOrder}
          onClearError={onClearError}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  );
}
