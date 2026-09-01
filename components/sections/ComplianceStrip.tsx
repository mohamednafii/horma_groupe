import { Icon } from "@/components/hg";
import { complianceTags } from "@/lib/site-content";

/* Compliance strip — the site's equivalent of the system's "live lanes" band:
   a thin white rule under the hero carrying machine-readable references in
   mono, which is exactly what the system reserves mono for. */
export function ComplianceStrip() {
  return (
    <div style={{ background: "var(--white)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div
        className="hg-container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(16px, 3vw, 40px)",
          flexWrap: "wrap",
          paddingBlock: 18,
        }}
      >
        <span className="hg-overline" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Icon name="shieldCheck" size={14} color="var(--action-secondary)" />
          Cadre réglementaire
        </span>
        {complianceTags.map((tag) => (
          <span key={tag} className="hg-mono" style={{ color: "var(--text-body)", whiteSpace: "nowrap" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
