import { Button, Card, Icon } from "@/components/hg";

/* Shown when the filters return nothing. It says what happened, why, and the
   one action that undoes it — no illustration, per the system's habit. */
export function ProductsEmptyState({ onReset }: { onReset: () => void }) {
  return (
    <Card variant="sunken" padding="lg" style={{ textAlign: "center" }}>
      <div className="hg-empty">
        <span className="hg-empty__icon" aria-hidden="true">
          <Icon name="search" size={24} />
        </span>
        <h3 className="hg-empty__title">Aucun produit trouvé</h3>
        <p className="hg-empty__body">
          Essayez de modifier ou de supprimer certains filtres, ou de rechercher un autre terme.
        </p>
        <Button variant="secondary" size="md" icon="refresh" onClick={onReset}>
          Réinitialiser les filtres
        </Button>
      </div>
    </Card>
  );
}
