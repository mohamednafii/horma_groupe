import type { Metadata } from "next";

import { CremeHydratanteLanding } from "@/components/landing-mouad/products/CremeHydratanteLanding";

export const metadata: Metadata = {
  title: "الكريم المرطب بزيت الأركان | AL HURRA",
  description:
    "كريم AL HURRA المرطب بزيت الأركان لترطيب عميق ودائم يحمي البشرة من الجفاف. الدفع عند الاستلام.",
};

export default function CremeHydratantePage() {
  return <CremeHydratanteLanding />;
}
