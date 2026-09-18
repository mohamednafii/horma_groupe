"use client";

import { Icon } from "@/components/hg";
import { formatMad } from "@/lib/products";

import type { Filters } from "./useProductQuery";

type Chip = { key: string; label: string; clear: Partial<Filters> };

/* Turns the query into the chips above the grid. Each chip carries the patch
   that removes it, so the row stays declarative and nothing here knows how
   the state is stored. */
function toChips(filters: Filters): Chip[] {
  const chips: Chip[] = [];

  if (filters.q.trim()) {
    chips.push({ key: "q", label: `« ${filters.q.trim()} »`, clear: { q: "" } });
  }
  for (const category of filters.categories) {
    chips.push({
      key: `cat-${category}`,
      label: category,
      clear: { categories: filters.categories.filter((c) => c !== category) },
    });
  }
  for (const origin of filters.origins) {
    chips.push({
      key: `org-${origin}`,
      label: origin,
      clear: { origins: filters.origins.filter((o) => o !== origin) },
    });
  }
  for (const state of filters.stock) {
    chips.push({
      key: `stk-${state}`,
      label: state === "in" ? "En stock" : "Rupture de stock",
      clear: { stock: filters.stock.filter((s) => s !== state) },
    });
  }
  if (filters.min !== null || filters.max !== null) {
    const label =
      filters.min !== null && filters.max !== null
        ? `${formatMad(filters.min)} – ${formatMad(filters.max)}`
        : filters.min !== null
          ? `À partir de ${formatMad(filters.min)}`
          : `Jusqu'à ${formatMad(filters.max as number)}`;
    chips.push({ key: "price", label, clear: { min: null, max: null } });
  }

  return chips;
}

export function ActiveFilters({
  filters,
  onChange,
  onReset,
}: {
  filters: Filters;
  onChange: (next: Partial<Filters>) => void;
  onReset: () => void;
}) {
  const chips = toChips(filters);
  if (!chips.length) return null;

  return (
    <div className="hg-chips">
      <span className="hg-chips__label">Filtres actifs</span>
      <ul className="hg-chips__list">
        {chips.map((chip) => (
          <li key={chip.key}>
            <button type="button" className="hg-chip" onClick={() => onChange(chip.clear)}>
              {chip.label}
              <span className="hg-chip__x" aria-hidden="true">
                <Icon name="close" size={12} />
              </span>
              <span className="hg-visually-hidden">— retirer ce filtre</span>
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="hg-chips__clear" onClick={onReset}>
        Effacer les filtres
      </button>
    </div>
  );
}
