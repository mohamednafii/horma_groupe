import Image from "next/image";

import { Icon, type IconName } from "./Icon";

/* The photographic service tile used by the services band: a full-bleed
   photograph under the navy scrim, with the copy set in the lower third.

   It keeps the brand's service signature from ServiceCard — a blue icon tile
   above the title — but inverts it onto the photo. Geometry, hover and scrim
   live in `.hg-service-tile*` in globals.css; only content is passed here. */
export function ServiceImageCard({
  icon,
  title,
  description,
  image,
  imageAlt,
  href,
  actionLabel,
}: {
  icon: IconName;
  title: string;
  description: string;
  /** Path under /public. */
  image: string;
  /** Describes the photograph, not the service — the title already names it. */
  imageAlt: string;
  href: string;
  /** Accessible name of the arrow link, which has no visible text. */
  actionLabel: string;
}) {
  return (
    <article className="hg-service-tile">
      <Image
        className="hg-service-tile__photo"
        src={image}
        alt={imageAlt}
        fill
        /* Four up above 1100px inside the 1280 container, two up on a tablet,
           one up on a phone. */
        sizes="(min-width: 1100px) 300px, (min-width: 640px) 46vw, 92vw"
        style={{ objectFit: "cover" }}
      />
      <span aria-hidden="true" className="hg-service-tile__scrim" />

      <div className="hg-service-tile__body">
        <span className="hg-service-tile__icon">
          <Icon name={icon} size={22} color="var(--white)" />
        </span>

        {/* Set on two lines by `text-wrap: balance` rather than a hard break:
            at a quarter of the container none of the four titles fits its
            second half on one line if it is cut at the ampersand. */}
        <h3 className="hg-service-tile__title">{title}</h3>

        <p className="hg-service-tile__text">{description}</p>

        {/* Stretched link: the ::after in globals.css makes the whole tile the
            hit area, so the arrow stays a 40px visual rather than the only
            target. */}
        <a className="hg-service-tile__link" href={href} aria-label={actionLabel}>
          <Icon name="arrowRight" size={17} color="var(--white)" className="hg-service-tile__arrow" />
        </a>
      </div>
    </article>
  );
}
