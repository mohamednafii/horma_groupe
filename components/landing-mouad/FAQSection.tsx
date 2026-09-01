import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/landing-mouad/ui/accordion';
import { FAQItem } from '@/data/al-hurra/types';
import { SectionHeading } from './SectionHeading';

interface FAQSectionProps {
  faqs: FAQItem[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="px-4 pb-9 lg:px-6">
      <div className="mx-auto max-w-[650px]">
        <SectionHeading>الأسئلة الشائعة</SectionHeading>
        <Accordion
          defaultValue={['skin-types']}
          className="gap-2"
          aria-label="الأسئلة الشائعة"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="overflow-hidden rounded-lg border border-[#ead9c2] bg-white px-4"
            >
              <AccordionTrigger className="min-h-11 w-full py-2.5 text-right text-xs font-bold hover:no-underline sm:text-sm">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-right text-[11px] leading-6 text-[#66584f] sm:text-xs">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
