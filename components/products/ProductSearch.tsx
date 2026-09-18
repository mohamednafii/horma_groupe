"use client";

import { Icon, Input } from "@/components/hg";

/* Search box: the system's Input with the search glyph inset, wrapped in a
   search landmark. Submitting does nothing on purpose — the grid has already
   filtered on the keystroke — but the form keeps the Enter key harmless and
   gives the field its role. */
export function ProductSearch({
  value,
  onChange,
  resultCount,
}: {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
}) {
  return (
    <form className="hg-product-search" role="search" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="product-search" className="hg-visually-hidden">
        Rechercher un produit
      </label>
      <span className="hg-product-search__icon" aria-hidden="true">
        <Icon name="search" size={17} />
      </span>
      <Input
        id="product-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Rechercher un produit…"
        autoComplete="off"
        style={{ paddingInlineStart: 44, paddingInlineEnd: value ? 44 : undefined }}
      />
      {value ? (
        <button
          type="button"
          className="hg-product-search__clear"
          onClick={() => onChange("")}
          aria-label="Effacer la recherche"
        >
          <Icon name="close" size={15} />
        </button>
      ) : null}
      {/* The count is the search's result, so it is announced, not just shown. */}
      <span aria-live="polite" role="status" className="hg-visually-hidden">
        {`${resultCount} produit${resultCount > 1 ? "s" : ""} correspondent à votre recherche.`}
      </span>
    </form>
  );
}
