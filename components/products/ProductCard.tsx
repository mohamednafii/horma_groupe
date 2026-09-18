import Image from "next/image";

import { Badge, Button, Card, Icon } from "@/components/hg";
import { discountPercent, formatMad, type Product } from "@/lib/products";

/* Catalogue tile. Provenance, price and MOQ are stated before persuasion, and
   every machine-readable field is set in mono — the same contract the home
   catalogue band has always used, here with the filters' vocabulary added.

   No component state: the card stays a server component, and only the grid
   around it runs on the client. */
export function ProductCard({ product }: { product: Product }) {
  const off = discountPercent(product);
  const outOfStock = product.stock === "out";

  return (
    <Card
      padding="none"
      className="hg-product-card"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <div className="hg-product-card__media">
        {product.image ? (
          <Image
            className="hg-product-card__photo"
            src={product.image}
            alt={product.imageAlt ?? ""}
            fill
            sizes="(min-width: 1100px) 280px, (min-width: 640px) 44vw, 90vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          /* No product photography exists yet, so the media slot keeps the
             system's navy fallback rather than off-brand stock. */
          <span className="hg-product-card__placeholder">
            <Icon name="package" size={36} color="rgba(255,255,255,.34)" />
            <span aria-hidden="true">Visuel à fournir</span>
          </span>
        )}

        {off !== null || outOfStock ? (
          <span className="hg-product-card__flags">
            {off !== null ? <Badge tone="solid" size="sm">{`-${off} %`}</Badge> : null}
            {outOfStock ? (
              <Badge tone="neutral" size="sm">
                Rupture
              </Badge>
            ) : null}
          </span>
        ) : null}
      </div>

      <div className="hg-product-card__body">
        <div className="hg-product-card__meta">
          <span className="hg-mono">{product.ref}</span>
          <Badge tone="trust" size="sm">
            {product.category}
          </Badge>
        </div>

        <h3 className="hg-product-card__name">{product.name}</h3>

        <p className="hg-product-card__origin">
          <Icon name="mapPin" size={14} />
          {product.origin}
        </p>

        <div className="hg-product-card__price">
          <span className="hg-mono hg-product-card__amount">{formatMad(product.price)}</span>
          {product.oldPrice ? (
            <span className="hg-mono hg-product-card__was">
              <s>{formatMad(product.oldPrice)}</s>
              <span className="hg-visually-hidden"> ancien prix</span>
            </span>
          ) : null}
          <span className="hg-product-card__unit">/ {product.unit}</span>
        </div>

        <div className="hg-product-card__foot">
          <span className="hg-product-card__stock" data-out={outOfStock ? "true" : undefined}>
            <Icon name={outOfStock ? "close" : "check"} size={13} />
            {outOfStock ? "Rupture de stock" : "En stock"}
          </span>
          <span className="hg-product-card__moq">MOQ {product.moq}</span>
        </div>

        {/* The site has no cart and no product page yet: every catalogue
            conversation starts with a quote, so that is the card's action. */}
        <Button
          href={`/contact?produit=${product.slug}`}
          variant="tertiary"
          size="sm"
          iconAfter="arrowRight"
          block
          style={{ marginTop: 14 }}
        >
          <span aria-hidden="true">Demander un devis</span>
          <span className="hg-visually-hidden">{`Demander un devis pour ${product.name}`}</span>
        </Button>
      </div>
    </Card>
  );
}
