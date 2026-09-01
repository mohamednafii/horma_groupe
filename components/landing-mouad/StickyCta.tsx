import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/landing-mouad/ui/button';

interface StickyCtaProps {
  price: number;
  onOrderClick: () => void;
}

export function StickyCta({ price, onOrderClick }: StickyCtaProps) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e2c18f] bg-white/95 p-3 shadow-[0_-8px_24px_rgba(81,47,10,.12)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: 'calc(.75rem + env(safe-area-inset-bottom))' }}
    >
      <Button
        type="button"
        onClick={onOrderClick}
        className="h-12 w-full rounded-lg bg-gradient-to-b from-[#d99b32] to-[#b86a03] text-base font-black text-white"
      >
        <ShoppingCart className="size-5" aria-hidden="true" />
        اطلب الآن — <span dir="ltr">{price} DH</span>
      </Button>
    </div>
  );
}
