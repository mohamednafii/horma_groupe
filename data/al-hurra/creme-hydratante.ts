import {
  BadgeCheck,
  CircleCheckBig,
  Droplets,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react';
import { ProductData } from './types';

export const cremeHydratanteProduct: ProductData = {
  id: 'creme-hydratante',
  slug: 'creme-hydratante',
  name: 'AL HURRA — Crème Hydratante',
  subtitle: 'عناية يومية لبشرتك',
  title: 'لبشرة رطبة وناعمة',
  badgeLabel: 'كريم AL HURRA المرطب',
  badgeSub: '50 G',
  heroImage: {
    src: '/media/creme-hydratante/hero-open.png',
    alt: 'عبوة كريم AL HURRA المرطب 50 غرام مع قطرات الماء وأوراق خضراء',
    width: 1536,
    height: 1024,
  },
  whyHeading: {
    prefix: 'لماذا تختارين الكريم المرطب ',
    brandName: 'AL HURRA',
    suffix: ' ؟',
  },
  whyImage: {
    src: '/media/creme-hydratante/product-open.png',
    alt: 'عبوة كريم AL HURRA المرطب مفتوحة بجانب غطائها',
    width: 1536,
    height: 1024,
  },
  heroBenefits: [
    { label: 'يساعد على ترطيب البشرة', icon: Droplets },
    { label: 'يساعد على الحد من الجفاف', icon: ShieldCheck },
    { label: 'يساعد على الحفاظ على نعومتها', icon: Sparkles },
    { label: 'مناسب للاستعمال اليومي', icon: CircleCheckBig },
  ],
  heroTrustItems: [
    { label: 'توصيل سريع لجميع المدن', icon: Truck },
    { label: 'الدفع عند الاستلام', icon: PackageCheck },
    { label: 'منتج أصلي مضمون', icon: BadgeCheck },
  ],
  problemCards: [
    {
      image: '/media/creme-hydratante/problem-dryness.png',
      title: 'جفاف البشرة',
      description: 'تبدو البشرة جافة وتفتقد إلى الترطيب والراحة اليومية',
    },
    {
      image: '/media/creme-hydratante/problem-dehydration.png',
      title: 'نقص الترطيب',
      description: 'تحتاج البشرة إلى عناية تساعدها على استعادة ترطيبها',
    },
    {
      image: '/media/creme-hydratante/problem-tightness.png',
      title: 'الإحساس بالشد',
      description: 'تشعرين بالشد وعدم الراحة بسبب جفاف البشرة',
    },
    {
      image: '/media/creme-hydratante/problem-softness.png',
      title: 'نقص النعومة والليونة',
      description: 'تفتقد البشرة إلى الملمس الناعم والليونة المريحة',
    },
  ],
  whyBenefits: [
    'يساعد على ترطيب البشرة يومياً',
    'يساعد على الحد من الإحساس بالجفاف',
    'يمنح البشرة راحة أكبر',
    'يساعد على الحفاظ على نعومة البشرة',
    'يساعد على الحفاظ على ليونة البشرة',
    'مناسب للاستعمال اليومي',
  ],
  sideBenefits: [
    { label: 'يساعد على الترطيب', icon: Droplets },
    { label: 'يحد من إحساس الجفاف', icon: ShieldCheck },
    { label: 'يحافظ على النعومة', icon: Sparkles },
    { label: 'استعمال يومي', icon: CircleCheckBig },
  ],
  offers: [
    {
      quantity: 1,
      name: 'عبوة واحدة',
      detail: '50 g',
      price: 100,
      deliveryFee: 20,
      oldPrice: 299,
      saving: 199,
      image: '/media/creme-hydratante/offer-1.png',
    },
    {
      quantity: 2,
      name: 'عبوتين',
      detail: '50 g لكل عبوة',
      price: 200,
      deliveryFee: 0,
      oldPrice: 598,
      saving: 398,
      image: '/media/creme-hydratante/offer-2.png',
      imageAlt: 'عبوتين من كريم AL HURRA المرطب 50 غرام',
      popular: true,
    },
    {
      quantity: 3,
      name: 'ثلاث عبوات',
      detail: '50 g لكل عبوة',
      price: 300,
      deliveryFee: 0,
      oldPrice: 897,
      saving: 597,
      image: '/media/creme-hydratante/offer-3.png',
    },
  ],
  reassurance: [
    {
      title: 'توصيل سريع',
      text: 'إلى جميع المدن المغربية',
      icon: Truck,
    },
    {
      title: 'الدفع عند الاستلام',
      text: 'ادفعي بعد استلام المنتج',
      icon: PackageCheck,
    },
    {
      title: 'منتج أصلي 100%',
      text: 'جودة مضمونة',
      icon: BadgeCheck,
    },
    {
      title: 'ضمان الرضا',
      text: 'إذا لم تكوني راضية',
      icon: ShieldCheck,
    },
  ],
  testimonials: [
    {
      image: '/media/creme-hydratante/reviews/reviewer-1.webp',
      name: 'فاطمة م.',
      city: 'الرباط',
      text: 'مع الاستعمال اليومي، شعرت براحة أكبر وأصبحت بشرتي أكثر نعومة.',
    },
    {
      image: '/media/creme-hydratante/reviews/reviewer-2.webp',
      name: 'نوال ع.',
      city: 'مراكش',
      text: 'ساعدني الكريم على تقليل إحساس الجفاف، وأصبح ملمس بشرتي ألطف.',
    },
    {
      image: '/media/creme-hydratante/reviews/reviewer-3.webp',
      name: 'سارة ب.',
      city: 'فاس',
      text: 'سهل الإضافة إلى الروتين اليومي، وترك بشرتي رطبة وأكثر ليونة.',
    },
  ],
  faqs: [
    {
      id: 'skin-types',
      question: 'هل الكريم مناسب للاستعمال اليومي؟',
      answer:
        'نعم، يناسب الكريم الاستعمال اليومي للمساعدة على ترطيب البشرة والحفاظ على نعومتها وليونتها.',
    },
    {
      id: 'results',
      question: 'ما الفوائد التي يقدمها الكريم؟',
      answer:
        'يساعد على ترطيب البشرة والحد من إحساس الجفاف، كما يمنحها راحة أكبر ويحافظ على نعومتها وليونتها.',
    },
    {
      id: 'routine',
      question: 'لمن صُمم كريم الترطيب؟',
      answer:
        'صُمم للعناية اليومية بالبشرة الجافة أو التي تعاني من نقص الترطيب والإحساس بالشد وعدم الراحة.',
    },
    {
      id: 'ingredients',
      question: 'ما هي مكونات الكريم؟',
      answer:
        'لائحة المكونات الدقيقة غير متوفرة في المعلومات المقدمة. يُرجى الرجوع إلى الملصق الموجود على العبوة قبل الاستعمال.',
    },
  ],
};
