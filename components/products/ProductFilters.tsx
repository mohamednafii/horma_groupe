"use client";

import { Checkbox, HorizonRule, Input } from "@/components/hg";
import { formatMad, priceBounds, productCategories, productOrigins, type Product, type StockState } from "@/lib/products";

import type { Filters } from "./useProductQuery";

/* The filter panel. One component serves both placements — the desktop
   sidebar and the mobile drawer — so the two can never drift apart. */
export function ProductFilters({
  filters,
  onChange,
  facets,
  idPrefix,
}: {
  filters: Filters;
  onChange: (next: Partial<Filters>) => void;
  /** Counts for the current result set, so a reader can see what a box is worth. */
  facets: { categories: Record<string, number>; origins: Record<string, number>; stock: Record<StockState, number> };
  /** Both placements render the same inputs; the prefix keeps ids unique. */
  idPrefix: string;
}) {
  const toggle = (list: string[], value: string) =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

  return (
    <div className="hg-filters">
      <fieldset className="hg-filters__group">
        <legend className="hg-filters__legend">Catégories</legend>
        <div className="hg-filters__list">
          {productCategories.map((category) => (
            <Checkbox
              key={category}
              id={`${idPrefix}-cat-${category}`}
              name="category"
              value={category}
              checked={filters.categories.includes(category)}
              onChange={() => onChange({ categories: toggle(filters.categories, category) })}
              label={category}
              hint={facets.categories[category] ?? 0}
            />
          ))}
        </div>
      </fieldset>

      <HorizonRule variant="solid" />

      <fieldset className="hg-filters__group">
        <legend className="hg-filters__legend">Prix indicatif (MAD)</legend>
        <div className="hg-filters__range">
          <label className="hg-filters__rangeField">
            <span>Min</span>
            <Input
              id={`${idPrefix}-min`}
              type="number"
              inputMode="numeric"
              min={0}
              step={10}
              placeholder={String(priceBounds.min)}
              value={filters.min ?? ""}
              onChange={(event) =>
                onChange({ min: event.target.value === "" ? null : Number(event.target.value) })
              }
            />
          </label>
          <span className="hg-filters__rangeDash" aria-hidden="true">
            —
          </span>
          <label className="hg-filters__rangeField">
            <span>Max</span>
            <Input
              id={`${idPrefix}-max`}
              type="number"
              inputMode="numeric"
              min={0}
              step={10}
              placeholder={String(priceBounds.max)}
              value={filters.max ?? ""}
              onChange={(event) =>
                onChange({ max: event.target.value === "" ? null : Number(event.target.value) })
              }
            />
          </label>
        </div>
        <p className="hg-filters__note">
          {`De ${formatMad(priceBounds.min)} à ${formatMad(priceBounds.max)} au catalogue.`}
        </p>
      </fieldset>

      <HorizonRule variant="solid" />

      <fieldset className="hg-filters__group">
        <legend className="hg-filters__legend">Disponibilité</legend>
        <div className="hg-filters__list">
          {([
            { value: "in", label: "En stock" },
            { value: "out", label: "Rupture de stock" },
          ] as const).map((option) => (
            <Checkbox
              key={option.value}
              id={`${idPrefix}-stock-${option.value}`}
              name="stock"
              value={option.value}
              checked={filters.stock.includes(option.value)}
              onChange={() =>
                onChange({ stock: toggle(filters.stock, option.value) as StockState[] })
              }
              label={option.label}
              hint={facets.stock[option.value] ?? 0}
            />
          ))}
        </div>
      </fieldset>

      <HorizonRule variant="solid" />

      <fieldset className="hg-filters__group">
        <legend className="hg-filters__legend">Origine</legend>
        <div className="hg-filters__list">
          {productOrigins.map((origin) => (
            <Checkbox
              key={origin}
              id={`${idPrefix}-origin-${origin}`}
              name="origin"
              value={origin}
              checked={filters.origins.includes(origin)}
              onChange={() => onChange({ origins: toggle(filters.origins, origin) })}
              label={origin}
              hint={facets.origins[origin] ?? 0}
            />
          ))}
        </div>
      </fieldset>
    </div>
  );
}

/* Counts every facet against the products that pass the *other* filters, which
   is what makes a count useful: it says what ticking this box would return. */
export function countFacets(
  all: readonly Product[],
  matching: (product: Product) => boolean
): { categories: Record<string, number>; origins: Record<string, number>; stock: Record<StockState, number> } {
  const categories: Record<string, number> = {};
  const origins: Record<string, number> = {};
  const stock: Record<StockState, number> = { in: 0, out: 0 };
  for (const product of all) {
    if (!matching(product)) continue;
    categories[product.category] = (categories[product.category] ?? 0) + 1;
    origins[product.origin] = (origins[product.origin] ?? 0) + 1;
    stock[product.stock] += 1;
  }
  return { categories, origins, stock };
}
