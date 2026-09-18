/**
 * Editorial content for the Horma Group marketing page.
 *
 * Bracketed values ("[à compléter]", "[—]") are placeholders carried over from
 * the source design — they mark figures the business still has to supply.
 *
 * The brand is written "Horma Group", in two words, throughout.
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
  { label: "Produits", href: "/products" },
  /* "Blog" lived here but /blog has no route: it 404-ed from every page
     in the header and the mobile drawer. Restore the entry the day the
     blog ships. */
  { label: "Contact", href: "/contact" },
] as const;
export const navfooter = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Confidentialité", href: "/privacy-policy" },
  { label: "Conditions générales", href: "/terms-and-conditions" },
  { label: "Contact", href: "/contact" },
] as const;

/* The four capabilities, laid out two per row in the hero. `text` is the label
   the grid aligns on; `note` sits under it, so the block keeps its full wording
   without going back to four stacked full-width lines. */
export const heroPoints = [
  {
    icon: "search",
    text: "Sourcing international",
    note: "Recherche de fournisseurs adaptés à vos besoins.",
  },
  {
    icon: "fileText",
    text: "Formalités douanières",
    note: "Procédures à l’import comme à l’export.",
  },
  {
    icon: "ship",
    text: "Transport & logistique",
    note: "Expéditions par voie maritime, aérienne ou routière.",
  },
  {
    icon: "route",
    text: "Suivi des opérations",
    note: "Coordination des intervenants jusqu’à la livraison.",
  },
] as const;

/** Closes the services band, in the system's overline habit. */
export const servicesTagline = "Sourcing • Transport international • Douane • Distribution";

/** The services band head — badge, h2 and lead. */
export const servicesHead = {
  eyebrow: "Ce que nous faisons",
  title: "Des solutions complètes pour vos opérations import-export",
  lead: "De la recherche de fournisseurs à la livraison, nous vous accompagnons à chaque étape pour des opérations plus simples, sûres et performantes.",
} as const;

/** The four capabilities, expanded into the services band. Each carries the
    photograph shown behind its tile; `imageAlt` describes the scene, not the
    service, since the title already names the service to a screen reader. */
export const services = [
  {
    icon: "search",
    index: "01",
    title: "Sourcing & contrôle qualité",
    body: "Nous sélectionnons les fournisseurs adaptés à votre besoin, comparons les offres et contrôlons la marchandise avant expédition.",
    tags: "Fournisseurs • Offres • Négociation • Contrôle qualité",
    image: "/services/sourcing-controle-qualite.webp",
    imageAlt: "Contrôle qualité de marchandises avant expédition",
  },
  {
    icon: "fileText",
    index: "02",
    title: "Douane & conformité import-export",
    body: "Nous préparons et suivons vos formalités douanières : vérification documentaire, classement tarifaire et coordination du dédouanement.",
    tags: "Documents • Classement tarifaire • Dédouanement • Conformité",
    image: "/services/douane-conformite.webp",
    imageAlt: "Contrôle douanier et conformité import-export",
  },
  {
    icon: "ship",
    index: "03",
    title: "Transport & logistique internationale",
    body: "Nous organisons l’acheminement selon votre volume et vos délais : maritime, aérien ou routier, en FCL, LCL ou groupage.",
    tags: "Maritime • Aérien • Routier • FCL / LCL",
    image: "/services/transport-logistique.webp",
    imageAlt: "Transport maritime, aérien et routier international",
  },
  {
    icon: "package",
    index: "04",
    title: "Catalogue & solutions produits",
    body: "Une sélection de références sourcées au Maroc et à l’international, avec origine, MOQ et prix indicatif. Sourcing personnalisé sur demande.",
    tags: "Origine • MOQ • Prix indicatif • Sourcing sur demande",
    image: "/services/catalogue-produits.webp",
    imageAlt: "Catalogue et sourcing de produits",
  },
] as const;

export const heroStats = [
  { value: "7", label: "Producteurs partenaires", sublabel: "Producteurs référencés et actifs" },
  { value: "82", label: "Pays desservis, import et export", sublabel: "Couverts par notre réseau" },
  { value: "32", label: "Catégories de produits au catalogue", sublabel: "Catégories actuellement disponibles" },
] as const;

export const complianceTags = [
  "Incoterms 2020",
  "Codes SH / HS",
  "ONSSA (agroalimentaire)",
  "Certificat d'origine EUR.1",
  "Agrément en douane [à compléter]",
] as const;

/** The challenges band head. `titleAccent` closes the h2 in orange. */
export const challengesHead = {
  eyebrow: "Ce que nous servons",
  title: "Les défis de l'import-export, maîtrisés",
  titleAccent: "simplement",
  lead: "Une expertise à vos côtés pour des opérations plus fluides et plus sûres.",
} as const;

/** The three words the band leads on, under the lead sentence. */
export const challengePillars = [
  { label: "Délais", icon: "/challenges/icons/clock.webp" },
  { label: "Conformité", icon: "/challenges/icons/shield.webp" },
  { label: "Coûts", icon: "/challenges/icons/chart.webp" },
] as const;

/* The risk/answer pair, shown as the two slides of the band's carousel. Both
   carry a title, a body and one of the supplied icon assets, so the slides
   stay symmetrical row for row. */
export const painPoints = [
  {
    title: "Maîtrise des délais",
    body: "Suivi des étapes pour mieux maîtriser les délais.",
    icon: "/challenges/icons/clock.webp",
  },
  {
    title: "Conformité douanière",
    body: "Vérification des documents avant le dédouanement.",
    icon: "/challenges/icons/document.webp",
  },
  {
    title: "Protection de la marchandise",
    body: "Préparation adaptée pour protéger vos produits.",
    icon: "/challenges/icons/box.webp",
  },
  {
    title: "Conformité des produits",
    body: "Contrôle des produits avant expédition.",
    icon: "/challenges/icons/shield.webp",
  },
  {
    title: "Maîtrise des coûts",
    body: "Identification des coûts avant chaque opération.",
    icon: "/challenges/icons/coins.webp",
  },
] as const;

export const remedies = [
  {
    title: "Planification & suivi",
    body: "Suivi de chaque étape jusqu’à la livraison.",
    icon: "/challenges/icons/clipboard.webp",
  },
  {
    title: "Vérification documentaire",
    body: "Contrôle des documents et informations douanières.",
    icon: "/challenges/icons/document.webp",
  },
  {
    title: "Préparation de l’expédition",
    body: "Choix du conditionnement et du transport adapté.",
    icon: "/challenges/icons/box.webp",
  },
  {
    title: "Contrôle & conformité",
    body: "Vérification des produits et quantités convenues.",
    icon: "/challenges/icons/shield.webp",
  },
  {
    title: "Visibilité sur les coûts",
    body: "Identification des principaux coûts en amont.",
    icon: "/challenges/icons/chart.webp",
  },
] as const;
/** The head note that balances the process band's title row. */
export const processNote = "Un seul partenaire, à vos côtés à chaque étape.";

/* The four steps, walked along the band's timeline. `icon` names a glyph from
   components/hg/Icon — the step reads as a picture before it is read as text. */
export const processSteps = [
  {
    step: "Étape 01",
    title: "Analyse de votre besoin",
    icon: "search",
    body: "Nous définissons le produit, les quantités, l’origine ou la destination et vos délais.",
  },
  {
    step: "Étape 02",
    title: "Recherche et sécurisation de l’opération",
    icon: "shieldCheck",
    body: "Nous identifions les fournisseurs adaptés, comparons les offres et vérifions les conditions avant engagement.",
  },
  {
    step: "Étape 03",
    title: "Formalités et coordination",
    icon: "fileText",
    body: "Nous préparons les documents et coordonnons les formalités douanières, à l’import comme à l’export.",
  },
  {
    step: "Étape 04",
    title: "Expédition et suivi jusqu’à destination",
    icon: "package",
    body: "Nous organisons le transport et vous tenons informé jusqu’à la réception à l’adresse convenue.",
  },
] as const;

export const proofStats = [
  {
    value: "100 %",
    label: "Suivi personnalisé",
    sublabel: "De la demande initiale à la livraison.",
  },
  {
    value: "2",
    label: "Flux maîtrisés",
    sublabel: "Import et export, entièrement coordonnés.",
  },
  {
    value: "4",
    label: "Étapes clés",
    sublabel: "Besoin, sourcing, formalités, transport.",
  },
  {
    value: "1",
    label: "Interlocuteur dédié",
    sublabel: "Un point de contact pour tout le dossier.",
  },
] as const;

export const products = [
  { ref: "RÉF. [à compléter]", name: "[Nom du produit]", origin: "[région, Maroc]", price: "[00,00 MAD / kg]", moq: "[000 kg]" },
  { ref: "RÉF. [à compléter]", name: "[Nom du produit]", origin: "[région, Maroc]", price: "[00,00 MAD / kg]", moq: "[000 kg]" },
  { ref: "RÉF. [à compléter]", name: "[Nom du produit]", origin: "[région, Maroc]", price: "[00,00 MAD / kg]", moq: "[000 kg]" },
] as const;

export const faqs = [
  {
    q: "Quels sont les délais entre la commande et la livraison ?",
    a: "Ils dépendent du produit, du pays, du mode de transport et des formalités. Une estimation par étape vous est communiquée avant le lancement.",
  },
  {
    q: "Qui s'occupe de la douane, à l'import comme à l'export ?",
    a: "Nous préparons et vérifions les documents, puis coordonnons le dédouanement avec les intervenants concernés, dans les deux sens.",
  },
  {
    q: "Y a-t-il une quantité minimum de commande (MOQ) ?",
    a: "Elle dépend du produit et des conditions du fournisseur. Nous cherchons une solution adaptée à votre volume, commande test comprise.",
  },
  {
    q: "Que se passe-t-il en cas de casse ou de non-conformité ?",
    a: "Nous privilégions le contrôle avant le départ. En cas d’avarie ou de non-conformité, nous vous accompagnons dans les démarches auprès des parties concernées.",
  },
  {
    q: "Acceptez-vous les petits volumes et les premières commandes ?",
    a: "Oui, première opération comme flux réguliers. Pour les petits volumes, nous recherchons la solution la plus adaptée pour maîtriser les coûts.",
  },
] as const;

/* The footer renders on every page, so its links are absolute: a bare
   "#services" only resolves on the home page and did nothing anywhere else.
   "#catalogue" pointed at a band that is currently commented out, and
   "Mentions légales" pointed at "#". */
export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Sourcing et contrôle qualité", href: "/#services" },
      { label: "Dédouanement import / export", href: "/#services" },
      { label: "Transport et groupage", href: "/#processus" },
      { label: "Catalogue produits", href: "/products" },
    ],
  },
  {
    title: "Société",
    links: [
      { label: "À propos de Horma Group", href: "/about" },
      { label: "FAQ", href: "/#faq" },
      { label: "Mentions légales", href: "/terms-and-conditions" },
    ],
  },
] as const;

export const testimonial = {
  quote:
    "Horma Group nous a accompagnés avec efficacité tout au long de notre opération. De la préparation du dossier à la coordination du transport, nous avons bénéficié d’un suivi clair, réactif et professionnel jusqu’à la livraison de notre marchandise.",
  name: "Client Horma Group",
  /** The new attribution supplies no function — Proof hides the line when empty. */
  role: "",
  note: "Gabarit du témoignage",
} as const;
