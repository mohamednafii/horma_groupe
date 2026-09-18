import { Skeleton } from "@/components/hg";
import type { Product } from "@/lib/products";

import { ProductCard } from "./ProductCard";

/* The grid is a list: a screen reader then announces how many references it
   holds before the reader walks them. */
export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul className="hg-product-grid">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

/* Cut to the real card: media block, two meta lines, name, price row, footer
   and the action — so swapping skeletons for products shifts nothing. */
export function ProductGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <ul className="hg-product-grid" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <li key={i}>
          <div className="hg-product-card hg-product-card--ghost">
            <div className="hg-product-card__media">
              <Skeleton width="100%" height="100%" radius="0" />
            </div>
            <div className="hg-product-card__body">
              <Skeleton width="45%" height={12} />
              <Skeleton width="80%" height={20} style={{ marginTop: 12 }} />
              <Skeleton width="55%" height={14} style={{ marginTop: 10 }} />
              <Skeleton width="60%" height={18} style={{ marginTop: 16 }} />
              <Skeleton width="100%" height={36} radius="var(--radius-button)" style={{ marginTop: 18 }} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
