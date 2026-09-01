import type { Metadata } from "next";

import { GommageNillaLanding } from "@/components/landing-mouad/products/GommageNillaLanding";

export const metadata: Metadata = {
  title: "مقشر النيلة المغربي للجسم 250غ | AL HURRA",
  description:
    "مقشر النيلة المغربية مع زيت الأركان للجسم، سر الجمال المغربي التقليدي لبشرة ناعمة ومشرقة. الدفع عند الاستلام.",
};

export default function GommageNillaPage() {
  return <GommageNillaLanding />;
}
