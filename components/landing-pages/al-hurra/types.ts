/**
 * Content contract for the AL HURRA landing-page template.
 *
 * The template renders no product copy of its own: every string, price and
 * image comes from a `LandingContent` object supplied per product. Fields
 * marked optional exist because one product needs them and another does not —
 * omitting them reproduces the original Aker Fassi layout exactly.
 */

export type IconName =
  | "leaf"
  | "sparkle"
  | "drop"
  | "shield"
  | "morocco"
  | "no-chemicals"
  | "cash"
  | "truck"
  | "support"
  | "lock"
  | "instagram"
  | "mail"
  | "whatsapp";

/** A local image plus the intrinsic size `next/image` needs. */
export type LandingImage = {
  src: string;
  width: number;
  height: number;
};

export type Benefit = {
  id: string;
  icon: IconName;
  title: string;
  note: string;
};

export type Ingredient = {
  id: string;
  name: string;
  image: LandingImage;
  /** Optional supporting line under the name. */
  description?: string;
};

export type Claim = {
  id: string;
  icon: IconName;
  label: string;
};

export type Step = {
  id: string;
  /** Rendered inside the terracotta disc. */
  index: number;
  /** One entry per rendered line, broken exactly as the design breaks it. */
  lines: string[];
  image: LandingImage;
};

export type Review = {
  id: string;
  name: string;
  body: string;
  avatar: LandingImage;
};

export type Pack = {
  id: string;
  name: string;
  price: number;
  badge?: string;
  image: LandingImage;
  /** Waives the delivery fee while this pack is selected. */
  freeDelivery?: boolean;
};

export type TrustPoint = {
  id: string;
  icon: IconName;
  title: string;
  note: string;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export type ContactPoint = {
  id: string;
  icon: IconName;
  label: string;
  /** Kept LTR inside an RTL page. */
  value: string;
  href: string;
};

export type LegalLink = {
  id: string;
  label: string;
  href: string;
};

export type SectionHeading = {
  eyebrow: string;
  title: string;
};

export type LandingConfig = {
  /** Pack preselected on load, 1-based. */
  defaultPack: number;
  /** Flat delivery fee, waived for packs marked `freeDelivery`. */
  deliveryFee: number;
  showStickyBar: boolean;
  /** Where confirmed orders are POSTed. `null` keeps the front-end-only flow. */
  orderEndpoint: string | null;
  minQuantity: number;
  maxQuantity: number;
  /** Currency word appended to every amount. */
  currency: string;
  /** Group thousands with a separator, e.g. 1,347. */
  groupThousands?: boolean;
  /** Image in the sticky bar. Defaults to the first pack's image. */
  stickyThumb?: LandingImage;
};

export type LandingContent = {
  config: LandingConfig;
  brand: {
    logo: LandingImage;
    logoAlt: string;
    zellige: LandingImage;
    ogImage: string;
  };
  hero: {
    kicker: string;
    titleLines: string[];
    /** Index of the line painted in the terracotta accent. */
    accentLineIndex: number;
    cta: string;
    assurance: string;
    image: LandingImage;
    imageAlt: string;
  };
  benefits: Benefit[];
  ingredients: Ingredient[];
  ingredientClaims: Claim[];
  steps: Step[];
  reviews: Review[];
  packs: Pack[];
  trustPoints: TrustPoint[];
  faqs: Faq[];
  contactPoints: ContactPoint[];
  legalLinks: LegalLink[];
  headings: {
    /** Optional: without it the benefits row renders bare, as on Aker Fassi. */
    benefits?: SectionHeading;
    ingredients: SectionHeading;
    howTo: SectionHeading;
    reviews: SectionHeading;
    order: SectionHeading;
    faq: SectionHeading;
  };
  orderCopy: {
    packsTitle: string;
    formTitle: string;
    submit: string;
    confirmation: string;
    productPrice: string;
    deliveryPrice: string;
    /** Shown in place of the fee when the selected pack ships free. */
    freeDelivery: string;
    total: string;
    decrease: string;
    increase: string;
    fields: {
      phone: string;
      name: string;
      city: string;
      address: string;
      addressAria: string;
    };
  };
  stickyCopy: {
    cta: string;
    terms: string;
  };
  sectionLabels: {
    benefits: string;
    trust: string;
  };
  starsLabel: string;
};

/** The order payload handed to `orderEndpoint`. */
export type OrderPayload = {
  phone: string;
  name: string;
  city: string;
  address: string;
  pack: number;
  packLabel: string;
  quantity: number;
  productPrice: number;
  deliveryFee: number;
  total: number;
  currency: "MAD";
  payment: "cash_on_delivery";
};
