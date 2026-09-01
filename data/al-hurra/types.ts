import { LucideIcon } from 'lucide-react';

export interface HeroBenefit {
  label: string;
  icon: LucideIcon;
}

export interface HeroTrustItem {
  label: string;
  icon: LucideIcon;
}

export interface ProblemCard {
  image: string;
  title: string;
  description: string;
}

export interface SideBenefit {
  label: string;
  icon: LucideIcon;
  imageIcon?: string;
}

export interface Offer {
  quantity: number;
  name: string;
  detail: string;
  price: number;
  deliveryFee?: number;
  oldPrice: number;
  saving: number;
  image: string;
  imageAlt?: string;
  popular?: boolean;
}

export interface ReassuranceItem {
  title: string;
  text: string;
  icon: LucideIcon;
}

export interface Testimonial {
  image: string;
  name: string;
  city: string;
  text: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProductData {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  title: string;
  badgeLabel: string;
  badgeSub: string;
  heroImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  whyHeading: {
    prefix: string;
    brandName: string;
    suffix: string;
  };
  whyImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  heroBenefits: HeroBenefit[];
  heroTrustItems: HeroTrustItem[];
  problemCards: ProblemCard[];
  whyBenefits: string[];
  sideBenefits: SideBenefit[];
  offers: Offer[];
  reassurance: ReassuranceItem[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
}
