import type { LandingContent } from "@/components/landing-pages/al-hurra";

/**
 * AL HURRA — Gommage Visage (قناع التقشير بالنيلة الزرقاء).
 *
 * Product copy and assets only. Layout, spacing and styling belong to the
 * shared template in `components/landing-pages/al-hurra`.
 */

const A = "/assets/gommage-visage-nila";

export const gommageVisageNila: LandingContent = {
  config: {
    defaultPack: 2,
    deliveryFee: 25,
    showStickyBar: true,
    orderEndpoint: "/api/order?page=gommage_visage_nila",
    minQuantity: 1,
    maxQuantity: 9,
    currency: "درهم",
    // Quantity goes up to 9, so a total can still reach four digits even
    // though no single pack price does anymore — keep the grouping.
    groupThousands: true,
    // The bare jar reads better at 46px than the multi-pot offer shots.
    stickyThumb: { src: `${A}/product/jar-main.webp`, width: 217, height: 240 },
  },

  brand: {
    logo: { src: `${A}/brand/logo.webp`, width: 500, height: 500 },
    logoAlt: "الحُرّة — مستحضرات تجميل مغربية طبيعية",
    zellige: { src: `${A}/decorations/zellige.webp`, width: 740, height: 660 },
    ogImage: `${A}/brand/og-image.jpg`,
  },

  hero: {
    kicker: "قناع التقشير بالنيلة الزرقاء",
    titleLines: ["سر الجمال المغربي", "لبشرة مشرقة"],
    accentLineIndex: 1,
    cta: "اطلبي الآن",
    assurance: "طبيعي 100٪ | ترطيب عميق | إشراقة صحية",
    image: { src: `${A}/product/hero.webp`, width: 1000, height: 658 },
    imageAlt: "قناع التقشير بالنيلة الزرقاء من الحُرّة مع النيلة والأعشاب المغربية",
  },

  benefits: [
    {
      id: "brightening",
      icon: "sparkle",
      title: "يفتح لون البشرة",
      note: "يوحد لون البشرة ويمنحها إشراقة طبيعية",
    },
    {
      id: "hydration",
      icon: "drop",
      title: "ترطيب عميق",
      note: "يغذي البشرة ويحميها من الجفاف",
    },
    {
      id: "spots",
      icon: "leaf",
      title: "يخفف البقع",
      note: "يساعد على تقليل البقع والتصبغات ويمنح البشرة مظهراً أكثر توحداً",
    },
  ],

  ingredients: [
    {
      id: "nila",
      name: "النيلة الزرقاء الطبيعية",
      description: "تساعد على تفتيح وتوحيد لون البشرة",
      image: { src: `${A}/ingredients/nila.webp`, width: 260, height: 215 },
    },
    {
      id: "argan",
      name: "زيت الأركان",
      description: "يرطب ويغذي البشرة بعمق",
      image: { src: `${A}/ingredients/argan.webp`, width: 260, height: 180 },
    },
    {
      id: "almond",
      name: "زيت اللوز الحلو",
      description: "ينعم البشرة ويساعد على ترطيبها وتجديدها",
      image: { src: `${A}/ingredients/almond.webp`, width: 260, height: 182 },
    },
    {
      id: "herbs",
      name: "أعشاب مغربية",
      description: "تنقي البشرة وتساعد على تهدئتها",
      image: { src: `${A}/ingredients/herbs.webp`, width: 260, height: 212 },
    },
  ],

  ingredientClaims: [
    { id: "moroccan", icon: "morocco", label: "منتج مغربي أصيل" },
    { id: "natural", icon: "leaf", label: "مكونات طبيعية 100٪" },
  ],

  steps: [
    {
      id: "cleanse",
      index: 1,
      lines: ["نظفي وجهك بلطف باستخدام غسول مناسب لنوع بشرتك"],
      image: { src: `${A}/steps/step1.webp`, width: 247, height: 250 },
    },
    {
      id: "apply",
      index: 2,
      lines: ["ضعي القناع على الوجه بحركات دائرية، مع تجنب محيط العينين"],
      image: { src: `${A}/steps/step2.webp`, width: 248, height: 250 },
    },
    {
      id: "rinse",
      index: 3,
      lines: ["اتركيه حسب التعليمات، ثم اشطفيه بالماء الفاتر ورطبي بشرتك"],
      image: { src: `${A}/steps/step3.webp`, width: 240, height: 250 },
    },
  ],

  reviews: [
    {
      id: "salma",
      name: "سلمى",
      body: "قناع رائع! لاحظت فرقاً واضحاً في إشراقة بشرتي من أول استعمال.",
      avatar: { src: `${A}/reviews/salma.webp`, width: 127, height: 128 },
    },
    {
      id: "nadia",
      name: "نادية",
      body: "أحب مكوناته الطبيعية ورائحته الجميلة، أصبحت بشرتي أكثر نعومة وإشراقاً.",
      avatar: { src: `${A}/reviews/nadia.webp`, width: 126, height: 128 },
    },
    {
      id: "mariam",
      name: "مريم",
      body: "ساعدني على تحسين مظهر البقع والتصبغات، وسأطلبه مرة أخرى بالتأكيد.",
      avatar: { src: `${A}/reviews/mariam.webp`, width: 128, height: 128 },
    },
  ],

  packs: [
    {
      id: "single",
      name: "علبة واحدة",
      price: 125,
      image: { src: `${A}/product/pack1.webp`, width: 146, height: 190 },
    },
    {
      id: "double",
      name: "علبتان + التوصيل مجاناً",
      price: 249,
      badge: "الأكثر طلباً",
      // The offer name promises free delivery, so the fee is waived for it.
      freeDelivery: true,
      image: { src: `${A}/product/pack2.webp`, width: 190, height: 138 },
    },
    {
      id: "triple",
      name: "3 علب + أكبر تخفيض",
      price: 375,
      image: { src: `${A}/product/pack3.webp`, width: 190, height: 138 },
    },
  ],

  trustPoints: [
    { id: "natural", icon: "morocco", title: "منتج طبيعي 100٪", note: "بمكونات مغربية أصيلة" },
    { id: "support", icon: "support", title: "خدمة عملاء سريعة", note: "نجيب على استفساراتك" },
    { id: "cod", icon: "cash", title: "الدفع عند الاستلام", note: "ادفعي بعد استلام طلبك" },
    { id: "delivery", icon: "truck", title: "توصيل سريع", note: "2–4 أيام لجميع المدن" },
  ],

  faqs: [
    {
      id: "frequency",
      question: "كم مرة يمكنني استخدام القناع؟",
      answer: "يمكن استخدامه مرة إلى مرتين في الأسبوع حسب نوع البشرة واحتياجاتها.",
    },
    {
      id: "skin-types",
      question: "هل يناسب القناع جميع أنواع البشرة؟",
      answer:
        "يناسب معظم أنواع البشرة، ويُفضل اختبار كمية صغيرة على منطقة محدودة قبل الاستخدام الكامل.",
    },
    {
      id: "results",
      question: "متى تظهر النتائج؟",
      answer:
        "تختلف النتائج من شخص لآخر، لكن الاستخدام المنتظم يساعد على تحسين مظهر البشرة ومنحها إشراقة طبيعية.",
    },
    {
      id: "sensitive",
      question: "هل يمكن استخدامه للبشرة الحساسة؟",
      answer:
        "إذا كانت بشرتك حساسة، اختبري المنتج أولاً على منطقة صغيرة وتوقفي عن استخدامه عند ظهور أي تهيج.",
    },
  ],

  contactPoints: [
    {
      id: "instagram",
      icon: "instagram",
      label: "متابعتنا على إنستغرام",
      value: "@alhurra.maroc",
      href: "https://instagram.com/alhurra.maroc",
    },
    { id: "email", icon: "mail", label: "راسلنا عبر", value: "info@alhurra.ma", href: "mailto:info@alhurra.ma" },
    {
      id: "whatsapp",
      icon: "whatsapp",
      label: "تواصل عبر واتساب",
      value: "06 12 34 56 78",
      href: "https://wa.me/212612345678",
    },
  ],

  legalLinks: [
    { id: "shipping", label: "سياسة الشحن", href: "#" },
    { id: "returns", label: "الإرجاع والاستبدال", href: "#" },
    { id: "privacy", label: "سياسة الخصوصية", href: "#" },
  ],

  headings: {
    benefits: { eyebrow: "الفوائد", title: "فوائد قناع التقشير بالنيلة الزرقاء" },
    ingredients: { eyebrow: "المكونات", title: "مكونات قناعنا النقي" },
    howTo: { eyebrow: "الطريقة", title: "طريقة الاستخدام لبشرة مثالية" },
    reviews: { eyebrow: "آراء الزبونات", title: "ماذا تقول زبوناتنا؟" },
    order: { eyebrow: "اطلبي الآن", title: "اختاري باقتك وأكّدي طلبك" },
    faq: { eyebrow: "أسئلتكم", title: "الأسئلة الشائعة" },
  },

  orderCopy: {
    packsTitle: "اختاري باقتك",
    formTitle: "تأكيد طلبك",
    submit: "أكدي طلبك الآن",
    sending: "جارٍ إرسال طلبك…",
    confirmation: "توصلنا بطلبك. سنتصل بك قريباً لتأكيد التوصيل.",
    error: "تعذّر إرسال طلبك. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.",
    productPrice: "سعر المنتج",
    deliveryPrice: "مصاريف التوصيل",
    freeDelivery: "مجاناً",
    total: "المجموع",
    decrease: "إنقاص الكمية",
    increase: "زيادة الكمية",
    fields: {
      phone: "رقم الهاتف",
      name: "الاسم الكامل",
      city: "المدينة",
      address: "العنوان",
      addressAria: "العنوان",
    },
  },

  stickyCopy: {
    cta: "اطلبي الآن",
    terms: "الدفع عند الاستلام",
  },

  sectionLabels: {
    benefits: "فوائد المنتج",
    trust: "ضمانات الشراء",
  },

  starsLabel: "خمس نجوم من خمسة",
};
