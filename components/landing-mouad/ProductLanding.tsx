'use client';

import React, { FormEvent, useMemo, useState } from 'react';
import { ProductData } from '@/data/al-hurra/types';
import { FAQSection } from './FAQSection';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';
import { OfferSection } from './OfferSection';
import { FormErrors, SubmittedOrder } from './OrderForm';
import { PacksSection } from './PacksSection';
import { ProblemsSection } from './ProblemsSection';
import { ReviewsSection } from './ReviewsSection';
import { StickyCta } from './StickyCta';
import { TrustSection } from './TrustSection';
import { WhyChooseSection } from './WhyChooseSection';

interface ProductLandingProps {
  product: ProductData;
}

export function ProductLanding({ product }: ProductLandingProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState<SubmittedOrder | null>(
    null,
  );

  const selectedOffer = useMemo(
    () =>
      product.offers.find((offer) => offer.quantity === selectedQuantity) ||
      product.offers[0],
    [product.offers, selectedQuantity],
  );

  const scrollToOrder = () => {
    document.getElementById('commande')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const clearError = (field: keyof FormErrors) => {
    setFormErrors((current) => ({ ...current, [field]: undefined }));
    setSubmittedOrder(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get('fullName') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const city = String(data.get('city') ?? '').trim();
    const address = String(data.get('address') ?? '').trim();
    const normalizedPhone = phone.replace(/[\s()-]/g, '');
    const errors: FormErrors = {};

    if (fullName.length < 2) {
      errors.fullName = 'يرجى إدخال الاسم الكامل.';
    }
    if (!/^(?:\+212|212|0)[67]\d{8}$/.test(normalizedPhone)) {
      errors.phone = 'أدخلي رقم هاتف مغربي صحيحاً مثل 06XXXXXXXX.';
    }
    if (city.length < 2) {
      errors.city = 'يرجى إدخال المدينة.';
    }
    if (address.length < 6) {
      errors.address = 'يرجى كتابة عنوان واضح لتسهيل التوصيل.';
    }

    setFormErrors(errors);
    const firstInvalidField = Object.keys(errors)[0];
    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    const totalPayable = selectedOffer.price + (selectedOffer.deliveryFee ?? 0);
    const reference = `AH-${Date.now().toString().slice(-6)}`;

    // Send the order before confirming anything: the customer must never be
    // told the order went through if it did not reach the sheet.
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: product.slug,
          product: product.name,
          offer: selectedOffer.name,
          quantity: selectedOffer.quantity,
          reference,
          name: fullName,
          phone: normalizedPhone,
          city,
          address,
          total: totalPayable,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? `Server error (${res.status})`);
      }
    } catch (err) {
      console.error('Order submission failed:', err);
      setFormErrors({
        submit: 'تعذّر إرسال طلبك. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.',
      });
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setSubmittedOrder({
      reference,
      customer: fullName,
      quantity: selectedOffer.quantity,
      price: totalPayable,
    });

    requestAnimationFrame(() => {
      document.getElementById('order-confirmation')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  };

  const totalPayable = selectedOffer.price + (selectedOffer.deliveryFee ?? 0);

  return (
    <main className="overflow-x-clip pb-20 md:pb-0" data-product={product.id}>
      <HeroSection product={product} onOrderClick={scrollToOrder} />

      <section className="px-4 py-7 lg:px-6">
        <div className="conversion-grid mx-auto max-w-[1180px]">
          <ProblemsSection cards={product.problemCards} />
          <WhyChooseSection
            whyHeading={product.whyHeading}
            whyBenefits={product.whyBenefits}
            whyImage={product.whyImage}
            sideBenefits={product.sideBenefits}
          />
          <OfferSection offer={product.offers[0]} />
        </div>
      </section>

      <PacksSection
        offers={product.offers}
        selectedQuantity={selectedQuantity}
        onSelectQuantity={(q) => {
          setSelectedQuantity(q);
          setSubmittedOrder(null);
        }}
        selectedOffer={selectedOffer}
        formErrors={formErrors}
        submittedOrder={submittedOrder}
        isSubmitting={isSubmitting}
        onClearError={clearError}
        onSubmit={handleSubmit}
      />

      <TrustSection reassurance={product.reassurance} />
      <ReviewsSection testimonials={product.testimonials} />
      <FAQSection faqs={product.faqs} />
      <Footer />
      <StickyCta price={totalPayable} onOrderClick={scrollToOrder} />
    </main>
  );
}
