/* ==========================================================================
   Catalogue — the single product source for /products and the home band.

   SAMPLE DATA. The references, prices and MOQs below are placeholders shaped
   like the real thing so the page can be built and reviewed; replace this
   array with the real catalogue (or with a fetch to whatever backend ends up
   holding it) before publishing. Nothing else needs to change: every screen
   reads the `Product` shape, never the array directly.
   ========================================================================== */

export type StockState = "in" | "out";

export type Product = {
  id: string;
  /** Stable URL segment, ready for a future /products/[slug] page. */
  slug: string;
  /** Internal reference, rendered in mono like every machine-readable field. */
  ref: string;
  name: string;
  category: string;
  /** Sourcing region, used as a filter and shown under the name. */
  origin: string;
  /** Indicative unit price in MAD, excluding freight and duty. */
  price: number;
  /** Set only when the reference is discounted; drives the % badge. */
  oldPrice?: number;
  /** The unit the price is quoted in, e.g. "kg", "L", "pièce". */
  unit: string;
  /** Minimum order quantity, as written on the quote. */
  moq: string;
  stock: StockState;
  /** ISO date the reference entered the catalogue — sorts "Nouveautés". */
  addedOn: string;
  /** Relative demand, 0–100 — sorts "Plus populaires". */
  popularity: number;
  /** Path under /public. Falls back to the system's navy media slot. */
  image?: string;
  imageAlt?: string;
};

export const products: Product[] = [
  {
    id: "p-01", slug: "huile-olive-extra-vierge", ref: "HG-AGR-001", name: "Huile d'olive extra vierge",
    category: "Agroalimentaire", origin: "Fès-Meknès", price: 68, oldPrice: 82, unit: "L", moq: "500 L",
    stock: "in", addedOn: "2025-02-11", popularity: 94,
  },
  {
    id: "p-02", slug: "huile-argan-alimentaire", ref: "HG-AGR-002", name: "Huile d'argan alimentaire",
    category: "Agroalimentaire", origin: "Souss-Massa", price: 340, unit: "L", moq: "100 L",
    stock: "in", addedOn: "2025-01-24", popularity: 88,
  },
  {
    id: "p-03", slug: "dattes-majhoul", ref: "HG-AGR-003", name: "Dattes Majhoul calibre 1",
    category: "Agroalimentaire", origin: "Drâa-Tafilalet", price: 95, unit: "kg", moq: "300 kg",
    stock: "in", addedOn: "2025-03-02", popularity: 91,
  },
  {
    id: "p-04", slug: "safran-taliouine", ref: "HG-AGR-004", name: "Safran de Taliouine",
    category: "Agroalimentaire", origin: "Souss-Massa", price: 28000, unit: "kg", moq: "2 kg",
    stock: "out", addedOn: "2024-11-18", popularity: 72,
  },
  {
    id: "p-05", slug: "olives-vertes-picholine", ref: "HG-AGR-005", name: "Olives vertes Picholine",
    category: "Agroalimentaire", origin: "Marrakech-Safi", price: 22, unit: "kg", moq: "1 000 kg",
    stock: "in", addedOn: "2024-12-06", popularity: 63,
  },
  {
    id: "p-06", slug: "amandes-decortiquees", ref: "HG-AGR-006", name: "Amandes décortiquées",
    category: "Agroalimentaire", origin: "Souss-Massa", price: 118, oldPrice: 132, unit: "kg", moq: "250 kg",
    stock: "in", addedOn: "2025-02-27", popularity: 70,
  },
  {
    id: "p-07", slug: "miel-euphorbe", ref: "HG-AGR-007", name: "Miel d'euphorbe",
    category: "Agroalimentaire", origin: "Souss-Massa", price: 240, unit: "kg", moq: "80 kg",
    stock: "in", addedOn: "2025-03-19", popularity: 58,
  },
  {
    id: "p-08", slug: "capres-fines", ref: "HG-AGR-008", name: "Câpres fines en saumure",
    category: "Agroalimentaire", origin: "Fès-Meknès", price: 46, unit: "kg", moq: "500 kg",
    stock: "out", addedOn: "2024-10-09", popularity: 41,
  },
  {
    id: "p-09", slug: "huile-argan-cosmetique", ref: "HG-COS-001", name: "Huile d'argan cosmétique",
    category: "Cosmétique", origin: "Souss-Massa", price: 380, oldPrice: 430, unit: "L", moq: "50 L",
    stock: "in", addedOn: "2025-03-25", popularity: 96,
  },
  {
    id: "p-10", slug: "savon-noir-beldi", ref: "HG-COS-002", name: "Savon noir beldi à l'eucalyptus",
    category: "Cosmétique", origin: "Marrakech-Safi", price: 34, unit: "kg", moq: "200 kg",
    stock: "in", addedOn: "2025-01-08", popularity: 84,
  },
  {
    id: "p-11", slug: "ghassoul-naturel", ref: "HG-COS-003", name: "Ghassoul naturel en paillettes",
    category: "Cosmétique", origin: "Drâa-Tafilalet", price: 26, unit: "kg", moq: "300 kg",
    stock: "in", addedOn: "2024-12-20", popularity: 77,
  },
  {
    id: "p-12", slug: "eau-de-rose-distillee", ref: "HG-COS-004", name: "Eau de rose distillée",
    category: "Cosmétique", origin: "Drâa-Tafilalet", price: 58, unit: "L", moq: "200 L",
    stock: "in", addedOn: "2025-02-03", popularity: 66,
  },
  {
    id: "p-13", slug: "huile-figue-barbarie", ref: "HG-COS-005", name: "Huile de figue de Barbarie",
    category: "Cosmétique", origin: "Souss-Massa", price: 1450, unit: "L", moq: "20 L",
    stock: "out", addedOn: "2024-11-29", popularity: 69,
  },
  {
    id: "p-14", slug: "gommage-corps-nila", ref: "HG-COS-006", name: "Gommage corps au nila",
    category: "Cosmétique", origin: "Casablanca-Settat", price: 42, oldPrice: 52, unit: "pièce", moq: "500 pièces",
    stock: "in", addedOn: "2025-04-02", popularity: 81,
  },
  {
    id: "p-15", slug: "zellige-emaille", ref: "HG-ART-001", name: "Zellige émaillé 10 × 10",
    category: "Artisanat", origin: "Fès-Meknès", price: 320, unit: "m²", moq: "40 m²",
    stock: "in", addedOn: "2025-01-16", popularity: 87,
  },
  {
    id: "p-16", slug: "tapis-berbere-beni-ouarain", ref: "HG-ART-002", name: "Tapis berbère Beni Ouarain",
    category: "Artisanat", origin: "Fès-Meknès", price: 2400, oldPrice: 2900, unit: "pièce", moq: "10 pièces",
    stock: "in", addedOn: "2025-03-11", popularity: 79,
  },
  {
    id: "p-17", slug: "poterie-tamegroute", ref: "HG-ART-003", name: "Poterie émaillée de Tamegroute",
    category: "Artisanat", origin: "Drâa-Tafilalet", price: 145, unit: "pièce", moq: "100 pièces",
    stock: "in", addedOn: "2024-12-13", popularity: 54,
  },
  {
    id: "p-18", slug: "luminaire-laiton-cisele", ref: "HG-ART-004", name: "Luminaire en laiton ciselé",
    category: "Artisanat", origin: "Marrakech-Safi", price: 690, unit: "pièce", moq: "30 pièces",
    stock: "out", addedOn: "2024-10-24", popularity: 47,
  },
  {
    id: "p-19", slug: "plateau-cuivre-martele", ref: "HG-ART-005", name: "Plateau en cuivre martelé",
    category: "Artisanat", origin: "Fès-Meknès", price: 260, unit: "pièce", moq: "50 pièces",
    stock: "in", addedOn: "2025-02-19", popularity: 51,
  },
  {
    id: "p-20", slug: "babouches-cuir-cousu", ref: "HG-TEX-001", name: "Babouches cuir cousu main",
    category: "Textile & cuir", origin: "Marrakech-Safi", price: 110, unit: "paire", moq: "200 paires",
    stock: "in", addedOn: "2025-01-30", popularity: 74,
  },
  {
    id: "p-21", slug: "linge-maison-coton", ref: "HG-TEX-002", name: "Linge de maison coton tissé",
    category: "Textile & cuir", origin: "Casablanca-Settat", price: 85, oldPrice: 99, unit: "pièce", moq: "300 pièces",
    stock: "in", addedOn: "2025-03-28", popularity: 62,
  },
  {
    id: "p-22", slug: "sac-cuir-tannage-vegetal", ref: "HG-TEX-003", name: "Sac en cuir tannage végétal",
    category: "Textile & cuir", origin: "Fès-Meknès", price: 540, unit: "pièce", moq: "60 pièces",
    stock: "in", addedOn: "2025-04-09", popularity: 68,
  },
  {
    id: "p-23", slug: "flacon-verre-ambre", ref: "HG-EMB-001", name: "Flacon verre ambré 100 ml",
    category: "Emballage", origin: "Casablanca-Settat", price: 6, unit: "pièce", moq: "5 000 pièces",
    stock: "in", addedOn: "2024-12-27", popularity: 44,
  },
  {
    id: "p-24", slug: "carton-export-double-cannelure", ref: "HG-EMB-002", name: "Carton export double cannelure",
    category: "Emballage", origin: "Tanger-Tétouan", price: 14, oldPrice: 17, unit: "pièce", moq: "2 000 pièces",
    stock: "in", addedOn: "2025-02-07", popularity: 38,
  },
];

/** Filter facets, derived from the data so a new product cannot desync them. */
export const productCategories: string[] = [...new Set(products.map((p) => p.category))].sort((a, b) =>
  a.localeCompare(b, "fr")
);

export const productOrigins: string[] = [...new Set(products.map((p) => p.origin))].sort((a, b) =>
  a.localeCompare(b, "fr")
);

export const priceBounds = {
  min: Math.min(...products.map((p) => p.price)),
  max: Math.max(...products.map((p) => p.price)),
};

/** Prices are written the way the rest of the site writes them: grouped, then
    the currency word. `fr-FR` groups with a narrow space, which is correct in
    French and matches the mono column the catalogue sets them in. */
export function formatMad(value: number): string {
  return `${value.toLocaleString("fr-FR")} MAD`;
}

/** Whole-percent discount, or null when the reference is not discounted. */
export function discountPercent(product: Product): number | null {
  if (!product.oldPrice || product.oldPrice <= product.price) return null;
  return Math.round((1 - product.price / product.oldPrice) * 100);
}

export const SORT_OPTIONS = [
  { value: "pertinence", label: "Pertinence" },
  { value: "nouveautes", label: "Nouveautés" },
  { value: "prix-asc", label: "Prix : croissant" },
  { value: "prix-desc", label: "Prix : décroissant" },
  { value: "populaires", label: "Plus populaires" },
] as const;

export type SortValue = (typeof SORT_OPTIONS)[number]["value"];

export type ProductQuery = {
  q: string;
  categories: string[];
  origins: string[];
  stock: StockState[];
  min: number | null;
  max: number | null;
  sort: SortValue;
};

/** Accent- and case-insensitive match, so "cafe" finds "café". */
const fold = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

/* One pure pass over the catalogue: the browser calls this inside a useMemo,
   so filtering never runs on an unrelated render. */
export function selectProducts(all: readonly Product[], query: ProductQuery): Product[] {
  const needle = fold(query.q.trim());
  const found = all.filter((product) => {
    if (needle) {
      const haystack = fold(`${product.name} ${product.category} ${product.origin} ${product.ref}`);
      if (!haystack.includes(needle)) return false;
    }
    if (query.categories.length && !query.categories.includes(product.category)) return false;
    if (query.origins.length && !query.origins.includes(product.origin)) return false;
    if (query.stock.length && !query.stock.includes(product.stock)) return false;
    if (query.min !== null && product.price < query.min) return false;
    if (query.max !== null && product.price > query.max) return false;
    return true;
  });

  const sorted = [...found];
  switch (query.sort) {
    case "prix-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "prix-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "nouveautes":
      sorted.sort((a, b) => b.addedOn.localeCompare(a.addedOn));
      break;
    case "populaires":
      sorted.sort((a, b) => b.popularity - a.popularity);
      break;
    default:
      /* Pertinence: in stock first, then the most in demand — the order a
         sourcing conversation would actually start from. */
      sorted.sort((a, b) => {
        if (a.stock !== b.stock) return a.stock === "in" ? -1 : 1;
        return b.popularity - a.popularity;
      });
  }
  return sorted;
}
