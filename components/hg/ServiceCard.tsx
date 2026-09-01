import { Card } from "./Card";
import { Icon, type IconName } from "./Icon";

/* The service tile: a 48px blue icon tile above the title. That pairing is the
   brand's service signature, so the tile colour is not parameterised. */
export function ServiceCard({
  icon,
  title,
  description,
  index,
}: {
  icon: IconName;
  title: string;
  description: string;
  /** Zero-padded counter, a manifest habit used across the system. */
  index?: string;
}) {
  return (
    <Card padding="lg" interactive style={{ display: "flex", flexDirection: "column", gap: 14, height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            borderRadius: "var(--radius-md)",
            background: "var(--blue-500)",
            flex: "none",
          }}
        >
          <Icon name={icon} size={24} color="var(--white)" />
        </span>
        {index ? <span className="hg-mono" style={{ color: "var(--text-subtle)" }}>/{index}</span> : null}
      </div>
      <h3 style={{ font: "var(--type-h4)", color: "var(--text-strong)" }}>{title}</h3>
      <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>{description}</p>
    </Card>
  );
}
