import {
  BadgeCheck,
  Ban,
  Droplets,
  FlaskConical,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from 'lucide-react';
import { ProductData } from './types';

export const antiAgeProduct: ProductData = {
  id: 'anti-age',
  slug: 'creme-anti-age',
  name: 'AL HURRA — Crème Hydratante Anti-Âge',
  subtitle: 'سر الجمال الطبيعي',
  title: 'لبشرة مشرقة وشابة',
  badgeLabel: 'كريم الأركان وفيتامين E',
  badgeSub: 'ANTI-AGE',
  heroImage: {
    src: '/media/anti-age/product-open.webp',
    alt: 'كريم AL HURRA بالأركان وفيتامين E مع الغطاء الذهبي وزهور بيضاء',
    width: 1536,
    height: 1024,
  },
  whyHeading: {
    prefix: 'لماذا تختارين كريم ',
    brandName: 'AL HURRA',
    suffix: ' ؟',
  },
  whyImage: {
    src: '/media/anti-age/product-open.webp',
    alt: 'عبوة كريم AL HURRA المفتوحة',
    width: 1536,
    height: 1024,
  },
  heroBenefits: [
    { label: 'ترطيب عميق', icon: Droplets },
    { label: 'يحسن مرونة البشرة', icon: Sparkles },
    { label: 'يقلل التجاعيد والخطوط الدقيقة', icon: ShieldCheck },
    { label: 'مكونات طبيعية 100%', icon: Leaf },
  ],
  heroTrustItems: [
    { label: 'توصيل سريع لجميع المدن', icon: Truck },
    { label: 'الدفع عند الاستلام', icon: PackageCheck },
    { label: 'منتج أصلي مضمون', icon: BadgeCheck },
  ],
  problemCards: [
    {
      image: '/media/anti-age/problem-dryness.webp',
      title: 'جفاف البشرة',
      description: 'تعانين من جفاف البشرة وشعورها بالشد بعد الغسل',
    },
    {
      image: '/media/anti-age/problem-wrinkles.webp',
      title: 'التجاعيد والخطوط الدقيقة',
      description: 'تظهر الخطوط حول العينين والجبين والفم',
    },
    {
      image: '/media/anti-age/problem-elasticity.webp',
      title: 'فقدان مرونة البشرة',
      description: 'تبدأ البشرة بالترهل وتفقد مظهرها المشدود',
    },
    {
      image: '/media/anti-age/problem-tone.webp',
      title: 'البقع وعدم توحد اللون',
      description: 'تظهر البقع الداكنة ويصبح اللون باهتاً وغير متجانس',
    },
  ],
  whyBenefits: [
    'ترطيب عميق يدوم 24 ساعة',
    'يقلل ظهور التجاعيد والخطوط الدقيقة',
    'يحسن مرونة البشرة ويشدها',
    'يغذي البشرة بفيتامين E المضاد للأكسدة',
    'يجعل البشرة ناعمة، مشرقة وموحدة اللون',
    'مناسب لجميع أنواع البشرة',
  ],
  sideBenefits: [
    { label: 'مختبر ومختبر جلدياً', icon: FlaskConical },
    { label: 'مكونات طبيعية 100%', icon: Leaf },
    { label: 'خالي من البارابين والملونات', icon: Ban },
    { label: 'صنع في المغرب', icon: Star },
  ],
  offers: [
    {
      quantity: 1,
      name: 'عبوة واحدة',
      detail: '50ml',
      price: 100,
      deliveryFee: 20,
      oldPrice: 299,
      saving: 199,
      image: '/media/anti-age/offer-1.webp',
    },
    {
      quantity: 2,
      name: 'عبوتين',
      detail: '50ml لكل عبوة',
      price: 200,
      deliveryFee: 0,
      oldPrice: 598,
      saving: 398,
      image: '/media/anti-age/offer-2.webp',
      popular: true,
    },
    {
      quantity: 3,
      name: 'ثلاث عبوات',
      detail: '50ml لكل عبوة',
      price: 300,
      deliveryFee: 0,
      oldPrice: 897,
      saving: 597,
      image: '/media/anti-age/offer-3.webp',
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
      image: '/media/shared/testimonial-1.webp',
      name: 'فاطمة م.',
      city: 'الرباط',
      text: 'من أول استعمال لاحظت بشرتي مرتبة ورطبة، والقوام لطيف.',
    },
    {
      image: '/media/shared/testimonial-2.webp',
      name: 'نوال ع.',
      city: 'مراكش',
      text: 'البشرة أصبحت أكثر إشراقاً ونضارة، والروتين اليومي صار أبسط.',
    },
    {
      image: '/media/shared/testimonial-3.webp',
      name: 'سارة ب.',
      city: 'فاس',
      text: 'رائحة جميلة ونتيجة مريحة، البشرة صارت أنعم مع الاستعمال.',
    },
  ],
  faqs: [
    {
      id: 'skin-types',
      question: 'هل المنتج مناسب لجميع أنواع البشرة؟',
      answer:
        'نعم، صُممت التركيبة لتناسب مختلف أنواع البشرة. للبشرة شديدة الحساسية، يُفضّل اختبار كمية صغيرة أولاً.',
    },
    {
      id: 'results',
      question: 'متى تظهر النتائج؟',
      answer:
        'يختلف ذلك حسب طبيعة البشرة وانتظام الاستعمال. يظهر الإحساس بالترطيب سريعاً، بينما تحتاج العناية بالمظهر العام إلى استعمال منتظم.',
    },
    {
      id: 'routine',
      question: 'هل يمكن استعماله مع مستحضرات أخرى؟',
      answer:
        'يمكن إدخاله ضمن روتين العناية المعتاد بعد تنظيف البشرة، مع ترك كل منتج يمتص قبل وضع المنتج التالي.',
    },
    {
      id: 'ingredients',
      question: 'هل يحتوي على مواد كيميائية ضارة؟',
      answer:
        'المنتج خالٍ من البارابين والملونات وفق معلومات المنتج المقدمة. راجعي دائماً لائحة المكونات على العبوة إذا كانت لديك حساسية معروفة.',
    },
  ],
};
