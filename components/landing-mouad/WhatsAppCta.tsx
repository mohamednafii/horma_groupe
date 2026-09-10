import React from 'react';
import { WhatsAppIcon, WhatsAppLink } from '@/components/whatsapp/WhatsAppLink';
import { cn } from '@/lib/mouad-utils';

/**
 * WhatsApp CTAs dressed in the AL HURRA landing-page style.
 *
 * Presentation only — the wa.me URL and the Meta Pixel `Contact` event live in
 * <WhatsAppLink>, so every button here reports identically. WhatsApp's own
 * green sits beside the page's amber without competing with the gold "اطلب
 * الآن" buttons, which stay the primary action.
 */

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-black outline-none transition ' +
  'focus-visible:ring-3 focus-visible:ring-[#1da851]/40';

const variants = {
  /** Matches the height and width of the gold hero CTA it sits under. */
  solid:
    'h-14 w-full max-w-[390px] bg-gradient-to-b from-[#3ecb6d] to-[#1da851] px-6 text-lg text-white ' +
    'shadow-[0_10px_24px_rgba(29,168,81,.2)] hover:brightness-105 sm:text-xl',
  /** Quieter alternative next to an existing primary action. */
  outline:
    'h-12 w-full border border-[#1da851]/40 bg-[#eefaf2] px-5 text-sm text-[#12693a] ' +
    'hover:bg-[#e3f6e9] sm:text-base',
} as const;

export function WhatsAppCta({
  label,
  message,
  variant = 'solid',
  className,
}: {
  label: string;
  /** Pre-filled chat text. Product copy only — never customer data. */
  message?: string;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <WhatsAppLink
      message={message}
      className={cn(base, variants[variant], className)}
    >
      <WhatsAppIcon className="text-[1.35em]" />
      {label}
    </WhatsAppLink>
  );
}

/**
 * Floating WhatsApp bubble.
 *
 * Sits clear of the fixed <StickyCta>: 88px up while that bar is on screen
 * (its 72px plus a 16px gap, and above the home-indicator inset), dropping to
 * the normal corner offset from `md` where the bar is hidden. `inset-inline-end`
 * puts it on the left of these RTL pages, opposite the reading edge, so it
 * never sits over the order form's inputs.
 */
export function WhatsAppFab({ message }: { message?: string }) {
  return (
    <WhatsAppLink
      message={message}
      ariaLabel="تواصل معنا عبر واتساب"
      className={cn(
        'fixed end-4 z-40 flex size-14 items-center justify-center rounded-full',
        'bg-gradient-to-b from-[#3ecb6d] to-[#1da851] text-2xl text-white',
        'shadow-[0_8px_22px_rgba(20,90,48,.32)] outline-none transition hover:brightness-105',
        'focus-visible:ring-4 focus-visible:ring-[#1da851]/40',
        'bottom-[calc(88px+env(safe-area-inset-bottom))] md:bottom-6',
      )}
    >
      <WhatsAppIcon />
    </WhatsAppLink>
  );
}

/**
 * Closing conversion band, after the FAQ: the last prompt before the footer for
 * anyone who read to the end without filling the form.
 */
export function WhatsAppBand({
  message,
  title = 'عندك سؤال قبل ما تطلب؟',
  note = 'راسلنا على واتساب وغادي نجاوبوك فحينها',
  label = 'اطلب عبر واتساب',
}: {
  message?: string;
  title?: string;
  note?: string;
  label?: string;
}) {
  return (
    <section className="px-4 pb-9 lg:px-6">
      <div className="mx-auto flex max-w-[650px] flex-col items-center gap-3 rounded-xl border border-[#bfe6cd] bg-[linear-gradient(135deg,#f4fbf6_0%,#eaf7ef_100%)] px-5 py-6 text-center">
        <h2 className="text-lg font-black text-[#14512f] sm:text-xl">{title}</h2>
        <p className="text-xs leading-6 text-[#4a6555] sm:text-sm">{note}</p>
        <WhatsAppCta label={label} message={message} className="mt-1" />
      </div>
    </section>
  );
}
