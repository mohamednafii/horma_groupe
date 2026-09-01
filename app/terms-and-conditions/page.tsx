import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/LegalPage";
import { contact } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Conditions générales | Horma Group",
  description: "Conditions générales d'utilisation du site Horma Group.",
};

const sections = [
  {
    title: "Objet du site",
    body: "Ce site présente les activités, services et offres de Horma Group. Les informations diffusées sont fournies à titre indicatif et peuvent être mises à jour sans préavis.",
  },
  {
    title: "Demandes de devis",
    body: "Toute demande effectuée via le site ne constitue pas un engagement contractuel. Un devis, une confirmation de commande ou un contrat distinct précise les conditions applicables à chaque opération.",
  },
  {
    title: "Responsabilité",
    body: "Horma Group s'efforce de maintenir des informations exactes et accessibles. Toutefois, nous ne pouvons garantir l'absence totale d'erreurs, d'interruptions ou de modifications liées aux informations publiées sur le site.",
  },
  {
    title: "Propriété intellectuelle",
    body: "Les contenus, textes, visuels, logos et éléments graphiques du site sont protégés. Toute reproduction, représentation ou utilisation sans autorisation écrite préalable est interdite, sauf dans les cas prévus par la loi.",
  },
  {
    title: "Droit applicable",
    body: "Les présentes conditions sont régies par le droit marocain. En cas de différend, les parties chercheront une solution amiable avant toute action devant les juridictions compétentes.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Conditions générales"
      lead="Les règles d'utilisation du site Horma Group et le cadre des demandes qui y sont adressées."
      updated="Dernière mise à jour : [à compléter]"
      intro="En consultant ce site, vous acceptez les conditions ci-dessous. Elles encadrent l'usage du site et les demandes qui nous sont adressées, sans se substituer aux contrats commerciaux conclus séparément."
      sections={sections}
      footer={{
        title: "Une question ?",
        body: (
          <>
            Contactez Horma Group à <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </>
        ),
      }}
    />
  );
}
