"use client";

import { Select } from "@/components/hg";
import { SORT_OPTIONS, type SortValue } from "@/lib/products";

export function ProductSort({
  value,
  onChange,
  id = "product-sort",
}: {
  value: SortValue;
  onChange: (value: SortValue) => void;
  id?: string;
}) {
  return (
    <div className="hg-product-sort">
      <label htmlFor={id} className="hg-product-sort__label">
        Trier par
      </label>
      <Select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value as SortValue)}
        options={SORT_OPTIONS}
      />
    </div>
  );
}
