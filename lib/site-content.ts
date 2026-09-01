/**
 * Editorial content for the Horma Group marketing page.
 *
 * Bracketed values ("[à compléter]", "[—]") are placeholders carried over from
 * the source design — they mark figures the business still has to supply.
 */

export const contact = {
  email: "contact@hormagroup.com",
  phone: "+212 674 36 79 01",
  address: "Zone portuaire, Casablanca",
  hours: "LUN–SAM 08:00–19:00 GMT+1",
} as const;

/* Labels are sentence case and French throughout, per the design system's
   casing rule. Routes are unchanged. */
export const nav = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Confidentialité", href: "/privacy-policy" },
  { label: "Conditions générales", href: "/terms-and-conditions" },
  { label: "Contact", href: "/contact" },
] as const;

export const heroPoints = [
  { icon: "search", text: "Sourcing et contrôle qualité chez le producteur, avant expédition." },
  { icon: "fileText", text: "Dédouanement import et export traité par nos propres déclarants." },
  { icon: "ship", text: "Maritime, aérien et routier — FCL, LCL et petits volumes groupés." },
] as const;

/** The same three capabilities, expanded into the services band. */
export const services = [
  {
    icon: "search",
    index: "01",
    title: "Sourcing et contrôle qualité",
    body: "Nous sélectionnons le producteur, vérifions la marchandise sur site et photographions le contrôle avant chargement.",
  },
  {
    icon: "fileText",
    index: "02",
    title: "Dédouanement import / export",
    body: "Dossier documentaire et déclaration préparés par nos propres déclarants, dans les deux sens.",
  },
  {
    icon: "ship",
    index: "03",
    title: "Transport et groupage",
    body: "Maritime, aérien et routier — FCL, LCL et petits volumes groupés, jusqu'à l'adresse finale.",
  },
  {
    icon: "package",
    index: "04",
    title: "Catalogue produits",
    body: "Références sourcées au Maroc, avec origine, prix indicatif et quantité minimum de commande.",
  },
] as const;

export const heroStats = [
  { value: "7", label: "Producteurs partenaires", sublabel: "Producteurs référencés et actifs" },
  { value: "82", label: "Pays desservis, import et export", sublabel: "Pays couverts par notre réseau commercial" },
  { value: "32", label: "Catégories de produits au catalogue", sublabel: "Catégories actuellement disponibles" },
] as const;

export const complianceTags = [
  "Incoterms 2020",
  "Codes SH / HS",
  "ONSSA (agroalimentaire)",
  "Certificat d'origine EUR.1",
  "Agrément en douane [à compléter]",
] as const;

export const painPoints = [
  "Délais annoncés puis repoussés, sans explication à donner à votre client.",
  "Marchandise bloquée en douane pour un document manquant ou un code SH erroné.",
  "Casse ou perte de qualité découverte à la réception, trop tard pour réclamer.",
  "Produit non conforme au cahier des charges alors que l'échantillon était bon.",
  "Coût final supérieur au devis, une fois les frais portuaires ajoutés.",
] as const;

export const remedies = [
  "Un planning daté par étape, et un point d'avancement à chaque changement de statut.",
  "Dossier documentaire vérifié et code SH validé avant le départ, pas à l'arrivée.",
  "Emballage adapté au mode de transport et photos avant chargement.",
  "Contrôle qualité sur site, sur la base de votre cahier des charges signé.",
  "Devis détaillé ligne par ligne, frais portuaires et droits inclus.",
] as const;

export const processSteps = [
  {
    step: "Étape 01",
    title: "Cahier des charges et devis",
    body: "Vous décrivez le produit, la quantité et la destination ; nous renvoyons un devis chiffré et daté.",
  },
  {
    step: "Étape 02",
    title: "Sourcing et contrôle",
    body: "Nous sélectionnons le producteur ou le fournisseur, puis contrôlons la marchandise avant chargement.",
  },
  {
    step: "Étape 03",
    title: "Documents et douane",
    body: "Facture, B/L ou AWB, certificat d'origine et déclaration : nous constituons et déposons le dossier.",
  },
  {
    step: "Étape 04",
    title: "Transport et livraison",
    body: "Acheminement jusqu'à l'adresse finale, avec une référence unique de suivi du départ à la réception.",
  },
] as const;

export const proofStats = [
  { value: "36", label: "Producteurs référencés", sublabel: "Donnée à confirmer" },
  { value: "82", label: "Pays d'expédition", sublabel: "Donnée à confirmer" },
  { value: "32", label: "Catégories de produits", sublabel: "Donnée à confirmer" },
  { value: "12", label: "Dossiers traités sur 12 mois", sublabel: "Donnée à confirmer" },
] as const;

export const products = [
  { ref: "RÉF. [à compléter]", name: "[Nom du produit]", origin: "[région, Maroc]", price: "[00,00 MAD / kg]", moq: "[000 kg]" },
  { ref: "RÉF. [à compléter]", name: "[Nom du produit]", origin: "[région, Maroc]", price: "[00,00 MAD / kg]", moq: "[000 kg]" },
  { ref: "RÉF. [à compléter]", name: "[Nom du produit]", origin: "[région, Maroc]", price: "[00,00 MAD / kg]", moq: "[000 kg]" },
] as const;

export const faqs = [
  {
    q: "Quels sont les délais entre la commande et la livraison ?",
    a: "Ils dépendent du mode et de la destination. En maritime, comptez la production, le pré-acheminement et la traversée ; le devis indique une fourchette datée par étape, et nous vous prévenons dès qu'une date bouge.",
  },
  {
    q: "Qui s'occupe de la douane, à l'import comme à l'export ?",
    a: "Nous. Le dossier documentaire et la déclaration sont préparés par nos déclarants, dans les deux sens. Vous n'avez rien à déposer vous-même.",
  },
  {
    q: "Y a-t-il une quantité minimum de commande (MOQ) ?",
    a: "Oui, et elle est affichée sur chaque référence du catalogue. Elle varie selon le produit et l'emballage du producteur.",
  },
  {
    q: "Que se passe-t-il en cas de casse ou de non-conformité ?",
    a: "Le contrôle avant chargement est photographié et daté, ce qui rend la réclamation opposable. Nous ouvrons le dossier auprès du transporteur ou de l'assurance et vous suivons jusqu'au règlement.",
  },
  {
    q: "Acceptez-vous les petits volumes et les premières commandes ?",
    a: "Oui. Les petits volumes partent en groupage (LCL), à partir du MOQ du produit. Un premier dossier de test est souvent le meilleur moyen de valider la chaîne.",
  },
] as const;

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Sourcing et contrôle qualité", href: "#services" },
      { label: "Dédouanement import / export", href: "#services" },
      { label: "Transport et groupage", href: "#processus" },
      { label: "Catalogue produits", href: "#catalogue" },
    ],
  },
  {
    title: "Société",
    links: [
      { label: "À propos de Horma Group", href: "#services" },
      { label: "FAQ", href: "#faq" },
      { label: "Mentions légales", href: "#" },
    ],
  },
] as const;

export const testimonial = {
  quote:
    "Grâce à Horma Group, nous avons pu structurer notre première opération d'export et assurer la livraison de nos produits dans les délais prévus. Leur accompagnement sur les démarches et la logistique nous a permis d'avancer sereinement.",
  name: "Youssef El Amrani",
  role: "Directeur Commercial — Atlas Agro",
  note: "Gabarit de témoignage — à compléter",
} as const;
