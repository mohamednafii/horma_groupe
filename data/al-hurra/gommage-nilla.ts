import {
  BadgeCheck,
  Droplets,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from 'lucide-react';
import { ProductData } from './types';

export const gommageNillaProduct: ProductData = {
  id: 'gommage-nilla',
  slug: 'gommage-nilla',
  name: 'AL HURRA — مقشر النيلة المغربي للجسم',
  subtitle: 'سر الجمال المغربي التقليدي',
  title: 'مقشر النيلة المغربية مع زيت الأركان',
  badgeLabel: 'مقشر الجسم بالنيلة الملكية',
  badgeSub: '250 G',
  heroImage: {
    src: '/media/gommage-nilla/hero_image_gommage_nilla.png',
    alt: 'مقشر النيلة المغربية AL HURRA',
    width: 1448,
    height: 1086,
  },
  whyHeading: {
    prefix: 'لماذا تختارين مقشر النيلة ',
    brandName: 'Al Hurra',
    suffix: ' ؟',
  },
  whyImage: {
    src: '/media/gommage-nilla/avantage_section_gommage_nilla.png',
    alt: 'عبوة مقشر النيلة AL HURRA',
    width: 1254,
    height: 1254,
  },
  heroBenefits: [
    { label: 'ترطيب وتغذية عميقة', icon: Droplets },
    { label: 'تفتيح وتوحيد لون البشرة', icon: Sparkles },
    { label: 'إزالة الجلد الميت والنقاط', icon: ShieldCheck },
    { label: 'مكونات طبيعية 100%', icon: Leaf },
  ],
  heroTrustItems: [
    { label: 'توصيل سريع لجميع المدن', icon: Truck },
    { label: 'الدفع عند الاستلام', icon: PackageCheck },
    { label: 'منتج أصلي مضمون 100%', icon: BadgeCheck },
  ],
  problemCards: [
    {
      image: '/media/gommage-nilla/problem_goose_skin.png',
      title: 'جلد الوزة',
      description: 'ملمس خشن ونقاط ظاهرة على البشرة',
    },
    {
      image: '/media/gommage-nilla/problem_pigmentation.png',
      title: 'التصبغات وتفاوت اللون',
      description: 'مناطق داكنة وعدم توحد مظهر البشرة',
    },
    {
      image: '/media/gommage-nilla/problem_dull_skin.png',
      title: 'البشرة الباهتة والداكنة',
      description: 'بشرة تحتاج إلى إشراقة ومظهر أكثر صفاءً',
    },
    {
      image: '/media/gommage-nilla/probleme_4.png',
      title: 'الجفاف وفقدان النعومة',
      description: 'بشرة مشدودة تفتقد للنعومة والترطيب',
    },
  ],
  whyBenefits: [
    'مكونات طبيعية 100% غنية بالنيلة الملكية والأرغان',
    'تفتيح وتوحيد لون البشرة والتخلص من البقع الداكنة',
    'إزالة خلايا الجلد الميتة وتنظيف المسام بفعالية',
    'تحفيز الدورة الدموية وإعادة الحيوية للبشرة الباهتة',
    'ترطيب عميق وتغذية مكثفة للجسم',
    'رائحة عطرية منعشة تدوم طويلاً',
  ],
  sideBenefits: [
    {
      label: '100% طبيعي',
      icon: Leaf,
      imageIcon: '/media/gommage-nilla/Icône feuille bleu marine minimaliste.png',
    },
    {
      label: 'آمن للبشرة',
      icon: ShieldCheck,
      imageIcon:
        '/media/gommage-nilla/Bouclier_bleu_avec_coche_de_sécurité-removebg-preview.png',
    },
    {
      label: 'صنع بالمغرب',
      icon: Star,
      imageIcon: '/media/gommage-nilla/Étoile bleue contourée minimaliste.png',
    },
    {
      label: 'نتائج ملموسة',
      icon: Sparkles,
      imageIcon: '/media/gommage-nilla/Trio d’étincelles bleues minimalistes.png',
    },
  ],
  offers: [
    {
      quantity: 1,
      name: 'عرض التجربة (1 علبة)',
      detail: '250g',
      price: 176,
      deliveryFee: 20,
      oldPrice: 299,
      saving: 123,
      image: '/media/gommage-nilla/product_single-removebg-preview.png',
    },
    {
      quantity: 2,
      name: 'عرض التوفير (2 علب)',
      detail: '250g لكل علبة + توصيل مجاني',
      price: 352,
      deliveryFee: 0,
      oldPrice: 499,
      saving: 147,
      image: '/media/gommage-nilla/product_two_pack-removebg-preview.png',
      popular: true,
    },
    {
      quantity: 3,
      name: 'العرض الذهبي (3 علب)',
      detail: '250g لكل علبة + توصيل مجاني + هدية',
      price: 528,
      deliveryFee: 0,
      oldPrice: 699,
      saving: 171,
      image: '/media/gommage-nilla/product_three_pack-removebg-preview.png',
    },
  ],
  reassurance: [
    {
      title: 'توصيل سريع',
      text: 'لكل المدن خلال 24–48 ساعة',
      icon: Truck,
    },
    {
      title: 'الدفع عند الاستلام',
      text: 'لن تدفعي حتى تعايني طلبك',
      icon: PackageCheck,
    },
    {
      title: 'منتج أصلي 100%',
      text: 'صنع في المغرب بشواهد الجودة',
      icon: BadgeCheck,
    },
    {
      title: 'ضمان الجودة والرضا',
      text: 'نتائج ملموسة من أول الاستعمالات',
      icon: ShieldCheck,
    },
  ],
  testimonials: [
    {
      image: '/media/gommage-nilla/review_amina.png',
      name: 'أمينة م.',
      city: 'الدار البيضاء',
      text: 'من أول استعمال لاحظت فرقاً في النعومة وأصبح ملمس البشرة أجمل.',
    },
    {
      image: '/media/gommage-nilla/review_saad.png',
      name: 'سعاد ك.',
      city: 'مراكش',
      text: 'القوام ممتاز والرائحة جميلة، وأعجبني الإحساس بالنظافة بعد الاستعمال.',
    },
    {
      image: '/media/gommage-nilla/review_iman.png',
      name: 'إيمان ر.',
      city: 'الرباط',
      text: 'تركيبة لطيفة وسهلة الاستعمال وأصبحت جزءاً من روتيني الأسبوعي.',
    },
  ],
  faqs: [
    {
      id: 'usage-freq',
      question: 'كم مرة يجب استخدام مقشر الجسم بالنيلة؟',
      answer:
        'ينصح باستخدامه مرة إلى مرتين أسبوعياً على بشرة جسم رطبة، مع التدليك بلطف ثم الشطف جيداً.',
    },
    {
      id: 'skin-types',
      question: 'هل يناسب جميع أنواع البشرة؟',
      answer:
        'نعم، تركيبته مناسبة لمختلف أنواع بشرة الجسم. للبشرة شديدة الحساسية، اختبري كمية صغيرة أولاً وتجنبي الفرك القوي.',
    },
    {
      id: 'face-use',
      question: 'هل يمكن استخدامه على الوجه؟',
      answer:
        'لا. هذا المقشر مصمم خصيصاً لبشرة الجسم وليس للوجه، ويجب تجنب ملامسة العينين والمناطق الحساسة.',
    },
    {
      id: 'results',
      question: 'متى تظهر النتائج؟',
      answer:
        'يمكن ملاحظة نعومة وانتعاش من أول استخدام، بينما تتحسن إشراقة وتجانس مظهر البشرة تدريجياً مع الاستعمال المنتظم.',
    },
  ],
};
