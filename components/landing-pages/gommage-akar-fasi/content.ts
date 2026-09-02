import type { LandingContent } from "@/components/landing-pages/al-hurra";

/**
 * AL HURRA — Gommage Akar Fassi.
 *
 * Product copy and assets only. Layout, spacing and styling belong to the
 * shared template in `components/landing-pages/al-hurra`.
 */

const A = "/assets/gommage-akar-fasi";

export const gommageAkarFasi: LandingContent = {
  config: {
    defaultPack: 2,
    deliveryFee: 25,
    showStickyBar: true,
    orderEndpoint: "/api/order?page=gommage_akar_fasi",
    minQuantity: 1,
    maxQuantity: 9,
    currency: "درهم",
  },

  brand: {
    logo: { src: `${A}/brand/logo.webp`, width: 500, height: 500 },
    logoAlt: "AL HURRA — Moroccan Bio-Cosmetics",
    zellige: { src: `${A}/decorations/zellige.webp`, width: 740, height: 660 },
    ogImage: `${A}/brand/og-image.jpg`,
  },

  hero: {
    kicker: "مقشر العكر الفاسي",
    titleLines: ["سر الجمال المغربي", "الحرية من الكيميائيات", "بأسرار طبيعية عريقة"],
    accentLineIndex: 1,
    cta: "اطلب الآن",
    assurance: "100% طبيعي / الدفع عند الاستلام",
    image: { src: `${A}/product/hero-image.png`, width: 563, height: 660 },
    imageAlt: "مقشر العكر الفاسي من الحرة",
  },

  benefits: [
    { id: "chemical-free", icon: "leaf", title: "خالٍ من الكيماويات", note: "يدعم بشرتك بأمان" },
    { id: "effective", icon: "sparkle", title: "نتائج فعّالة", note: "بأسرار العناية العريقة" },
    { id: "natural", icon: "drop", title: "مكونات طبيعية", note: "من الطبيعة المغربية" },
  ],

  ingredients: [
    { id: "akar", name: "العكر الفاسي", image: { src: `${A}/ingredients/ing-akar.webp`, width: 260, height: 181 } },
    { id: "argan", name: "زيت الأركان", image: { src: `${A}/ingredients/ing-argan.webp`, width: 260, height: 188 } },
    { id: "chia", name: "زبدة الشيا", image: { src: `${A}/ingredients/ing-chia.webp`, width: 260, height: 207 } },
    { id: "coconut", name: "جوز الهند", image: { src: `${A}/ingredients/ing-coconut.webp`, width: 260, height: 222 } },
    { id: "olive", name: "زيت الزيتون", image: { src: `${A}/ingredients/ing-olive.webp`, width: 260, height: 240 } },
  ],

  ingredientClaims: [
    { id: "moroccan", icon: "morocco", label: "منتج مغربي أصيل" },
    { id: "no-chemicals", icon: "no-chemicals", label: "خالٍ من المواد الكيميائية" },
  ],

  steps: [
    {
      id: "scoop",
      index: 1,
      lines: ["خذي كمية مناسبة", "من المقشر"],
      image: { src: `${A}/steps/step1.webp`, width: 250, height: 248 },
    },
    {
      id: "massage",
      index: 2,
      lines: ["دلكي بلطف بحركات دائرية", "على بشرة رطبة"],
      image: { src: `${A}/steps/step2.webp`, width: 249, height: 250 },
    },
    {
      id: "rinse",
      index: 3,
      lines: ["اشطفي جيداً بالماء", "واستمتعي ببشرة ناعمة"],
      image: { src: `${A}/steps/step3.webp`, width: 249, height: 250 },
    },
  ],

  reviews: [
    {
      id: "amina",
      name: "أمينة – طنجة",
      body: "منتج طبيعي 100% وخدمة ممتازة، التوصيل كان سريع ومعاه هدية زوينة.",
      avatar: { src: `${A}/reviews/av-amina.webp`, width: 127, height: 128 },
    },
    {
      id: "sara",
      name: "سارة – الدار البيضاء",
      body: "أفضل مقشر جربته، كيدوب مزيان والزيوت خفيفة، والنتيجة بانت من أول استعمال.",
      avatar: { src: `${A}/reviews/av-sara.webp`, width: 128, height: 128 },
    },
    {
      id: "khadija",
      name: "خديجة – مكناس",
      body: "استعملتو من أول مرة وبشرتي ولات ناعمة ونقية، وريحتو زوينة وطبيعية بزاف.",
      avatar: { src: `${A}/reviews/av-khadija.webp`, width: 127, height: 128 },
    },
  ],

  packs: [
    { id: "single", name: "علبة واحدة", price: 150, image: { src: `${A}/product/pack1.webp`, width: 137, height: 170 } },
    {
      id: "double",
      name: "علبتان",
      price: 275,
      badge: "الأكثر طلباً",
      image: { src: `${A}/product/pack2.webp`, width: 170, height: 110 },
    },
    {
      id: "triple",
      name: "3 علب",
      price: 400,
      badge: "الأفضل قيمة",
      image: { src: `${A}/product/pack3.webp`, width: 170, height: 118 },
    },
  ],

  trustPoints: [
    { id: "natural", icon: "morocco", title: "منتج طبيعي 100%", note: "آمن على بشرتك" },
    { id: "cod", icon: "cash", title: "الدفع عند الاستلام", note: "أدفع بعد استلام طلبك" },
    { id: "delivery", icon: "truck", title: "توصيل سريع", note: "2–4 أيام لجميع المدن" },
  ],

  faqs: [
    {
      id: "skin-types",
      question: "هل المنتج مناسب لجميع أنواع البشرة؟",
      answer: "نعم، الخلطة طبيعية 100% ومناسبة لجميع أنواع البشرة، بما فيها البشرة الحساسة.",
    },
    {
      id: "best-results",
      question: "كيف أستعمل المقشر للحصول على أفضل نتيجة؟",
      answer: "ضعي كمية مناسبة على بشرة رطبة، دلكي بحركات دائرية لمدة دقيقتين، ثم اشطفي بالماء الفاتر.",
    },
    {
      id: "face",
      question: "هل يمكن استعماله على الوجه؟",
      answer: "نعم، يمكن استعماله على الوجه بلطف مرة واحدة في الأسبوع مع تجنب محيط العين.",
    },
    {
      id: "frequency",
      question: "كم مرة يمكن استعماله في الأسبوع؟",
      answer: "مرتان في الأسبوع كافيتان للحصول على بشرة ناعمة ومشرقة.",
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
      value: "0668-615964",
      href: "https://wa.me/212 668-615964",
    },
  ],

  legalLinks: [
    { id: "shipping", label: "سياسة الشحن", href: "#" },
    { id: "returns", label: "الإرجاع والاستبدال", href: "#" },
    { id: "privacy", label: "سياسة الخصوصية", href: "#" },
  ],

  headings: {
    ingredients: { eyebrow: "المكونات", title: "ما يحتويه مقشر الحرة" },
    howTo: { eyebrow: "الطريقة", title: "طريقة الاستعمال" },
    reviews: { eyebrow: "آراء الزبونات", title: "ماذا تقول زبوناتنا" },
    order: { eyebrow: "اطلب الآن", title: "اختر باقتك وأكّد طلبك" },
    faq: { eyebrow: "أسئلتكم", title: "الأسئلة الشائعة" },
  },

  orderCopy: {
    packsTitle: "اختر باقتك",
    formTitle: "تأكيد طلبك",
    submit: "تأكيد الطلب",
    sending: "كنسيفطو طلبك…",
    confirmation: "توصلنا بطلبك. غادي نتصلو بيك قريباً لتأكيد التوصيل.",
    error: "ما وصلناش الطلب ديالك. عاود المحاولة أو تواصل معنا عبر واتساب.",
    productPrice: "ثمن المنتج",
    deliveryPrice: "تكاليف التوصيل",
    freeDelivery: "مجاناً",
    total: "المجموع",
    decrease: "نقصان الكمية",
    increase: "زيادة الكمية",
    fields: {
      phone: "رقم الهاتف",
      name: "الاسم الكامل",
      city: "المدينة",
      address: "العنوان / الحي (اختياري)",
      addressAria: "العنوان أو الحي، اختياري",
    },
  },

  stickyCopy: {
    cta: "اطلب الآن",
    terms: "الدفع عند الاستلام",
  },

  sectionLabels: {
    benefits: "مميزات المنتج",
    trust: "ضمانات الشراء",
  },

  starsLabel: "خمس نجوم من خمسة",
};
