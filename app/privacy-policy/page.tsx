import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/LegalPage";
import { contact } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Horma Group",
  description: "Politique de confidentialité du site Horma Group.",
};

const sections = [
  {
    title: "Les données que nous collectons",
    body: "Lorsque vous nous contactez, nous pouvons collecter les informations que vous transmettez : nom, entreprise, adresse e-mail, numéro de téléphone et informations relatives à votre projet d'import ou d'export.",
  },
  {
    title: "Pourquoi nous les utilisons",
    body: "Ces données servent uniquement à répondre à votre demande, préparer un devis, organiser un échange commercial ou assurer le suivi de votre dossier. Elles ne sont pas vendues à des tiers.",
  },
  {
    title: "Conservation et sécurité",
    body: "Nous conservons les données pendant la durée nécessaire à la gestion de votre demande et de notre relation commerciale, puis selon les obligations légales applicables. Nous prenons des mesures raisonnables pour limiter les accès non autorisés.",
  },
  {
    title: "Vos droits",
    body: "Vous pouvez demander l'accès, la rectification ou la suppression des données vous concernant, dans les limites prévues par la loi. Pour exercer ces droits, écrivez-nous à l'adresse indiquée ci-dessous.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Politique de confidentialité"
      lead="La manière dont Horma Group recueille et utilise les informations personnelles transmises via ce site."
      updated="Dernière mise à jour : [à compléter]"
      intro="Horma Group traite les données personnelles avec attention et dans le respect de la réglementation applicable, notamment la loi marocaine n° 09-08 relative à la protection des données à caractère personnel."
      sections={sections}
      footer={{
        title: "Nous contacter",
        body: (
          <>
            Pour toute question sur vos données personnelles : <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </>
        ),
      }}
    />
  );
}
