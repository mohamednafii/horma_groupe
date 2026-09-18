"use client";

import { useEffect } from "react";

import { Button, Card, Icon } from "@/components/hg";

/* Route-level error state. Next renders this in place of the page when the
   catalogue fails to render or, once the data is fetched, fails to load. */
export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Catalogue introuvable :", error);
  }, [error]);

  return (
    <div className="hg-site">
      <main>
        <div className="hg-container" style={{ paddingBlock: "clamp(64px, 10vw, 120px)" }}>
          <Card variant="sunken" padding="lg" style={{ maxWidth: 560, marginInline: "auto", textAlign: "center" }}>
            <div className="hg-empty">
              <span className="hg-empty__icon" data-tone="error" aria-hidden="true">
                <Icon name="alert" size={24} />
              </span>
              <h1 className="hg-empty__title">Impossible de charger les produits.</h1>
              <p className="hg-empty__body">
                Une erreur est survenue pendant le chargement du catalogue. Vous pouvez réessayer&nbsp;; si le problème
                persiste, contactez-nous et nous vous enverrons les références directement.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                <Button variant="primary" size="md" icon="refresh" onClick={reset}>
                  Réessayer
                </Button>
                <Button href="/contact" variant="tertiary" size="md" iconAfter="arrowRight">
                  Nous contacter
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
