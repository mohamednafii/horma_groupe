"use client";

import { useMemo, useState } from "react";

import { Button, Drawer, Icon } from "@/components/hg";
import { products, selectProducts, type Product } from "@/lib/products";

import { ActiveFilters } from "./ActiveFilters";
import { ProductFilters, countFacets } from "./ProductFilters";
import { ProductGrid } from "./ProductGrid";
import { ProductPagination } from "./ProductPagination";
import { ProductSearch } from "./ProductSearch";
import { ProductSort } from "./ProductSort";
import { ProductsEmptyState } from "./ProductsEmptyState";
import { countActive, useProductQuery, type Filters } from "./useProductQuery";

const PER_PAGE = 12;

/* The catalogue browser: filter state, the derived result set, and the two
   places the filters can be operated from. Everything under it is presentation,
   so this is the only component on the page that has to run on the client. */
export function ProductsBrowser() {
  const { filters, update, reset } = useProductQuery();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const results = useMemo(() => selectProducts(products, filters), [filters]);

  /* Facet counts ignore the facet they belong to, so a count answers "what
     would ticking this return" rather than "what is showing now". */
  const facets = useMemo(() => {
    const matchesExcept = (skip: "categories" | "origins" | "stock") => (product: Product) => {
      const f = filters;
      if (skip !== "categories" && f.categories.length && !f.categories.includes(product.category)) return false;
      if (skip !== "origins" && f.origins.length && !f.origins.includes(product.origin)) return false;
      if (skip !== "stock" && f.stock.length && !f.stock.includes(product.stock)) return false;
      if (f.min !== null && product.price < f.min) return false;
      if (f.max !== null && product.price > f.max) return false;
      return true;
    };
    return {
      categories: countFacets(products, matchesExcept("categories")).categories,
      origins: countFacets(products, matchesExcept("origins")).origins,
      stock: countFacets(products, matchesExcept("stock")).stock,
    };
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(results.length / PER_PAGE));
  const page = Math.min(filters.page, totalPages);
  const shown = results.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const activeCount = countActive(filters);

  const onFilterChange = (next: Partial<Filters>) => update(next);

  const goToPage = (next: number) => {
    update({ page: next });
    document.getElementById("catalogue-resultats")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hg-products">
      {/* Desktop: a quarter of the grid, sticky under the header so the filters
          stay reachable while the list scrolls. */}
      <aside className="hg-products__side" aria-labelledby="filtres-titre">
        <h2 id="filtres-titre" className="hg-products__sideTitle">
          Filtres
        </h2>
        <ProductFilters filters={filters} onChange={onFilterChange} facets={facets} idPrefix="side" />
      </aside>

      <div className="hg-products__main">
        <ProductSearch
          value={filters.q}
          onChange={(q) => update({ q })}
          resultCount={results.length}
        />

        <div className="hg-products__toolbar" id="catalogue-resultats">
          <p className="hg-products__count">
            <strong>{results.length}</strong>
            {results.length > 1 ? " produits" : " produit"}
            {activeCount > 0 ? <span className="hg-products__countAll">{` sur ${products.length}`}</span> : null}
          </p>

          <div className="hg-products__tools">
            <Button
              variant="tertiary"
              size="md"
              icon="filter"
              className="hg-products__filterBtn"
              onClick={() => setDrawerOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={drawerOpen}
            >
              Filtres
              {activeCount > 0 ? <span className="hg-products__filterCount">{activeCount}</span> : null}
            </Button>
            <ProductSort value={filters.sort} onChange={(sort) => update({ sort })} />
          </div>
        </div>

        <ActiveFilters filters={filters} onChange={onFilterChange} onReset={reset} />

        {results.length === 0 ? (
          <ProductsEmptyState onReset={reset} />
        ) : (
          <>
            <ProductGrid products={shown} />
            <ProductPagination page={page} totalPages={totalPages} onChange={goToPage} />
          </>
        )}

        <p className="hg-products__note">
          <Icon name="info" size={14} />
          Prix indicatifs par unité, hors transport et droits de douane. Le prix ferme est confirmé au devis.
        </p>
      </div>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Filtres"
        footer={
          <>
            <Button variant="ghost" size="md" onClick={reset}>
              Réinitialiser
            </Button>
            <Button variant="primary" size="md" onClick={() => setDrawerOpen(false)} style={{ flex: 1 }}>
              {`Voir ${results.length} produit${results.length > 1 ? "s" : ""}`}
            </Button>
          </>
        }
      >
        <ProductFilters filters={filters} onChange={onFilterChange} facets={facets} idPrefix="drawer" />
      </Drawer>
    </div>
  );
}
