import type { Metadata } from "next";

import { AntiAgeLanding } from "@/components/landing-mouad/products/AntiAgeLanding";

export const metadata: Metadata = {
  title: "كريم الأركان المضاد لعلامات التقدم في السن | AL HURRA",
  description:
    "كريم AL HURRA المضاد لعلامات التقدم في السن، بتركيبة الأركان وفيتامين E لبشرة أكثر نعومة وإشراقاً. الدفع عند الاستلام.",
};

export default function CremeAntiAgePage() {
  return <AntiAgeLanding />;
}
