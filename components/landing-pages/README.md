# Landing pages

Product landing pages served under `/lp/<slug>`. They are deliberately isolated
from the rest of the Horma Group site: different brand, different language,
different design system.

```
al-hurra/                  the template — every component, all the CSS
gommage-akar-fasi/         content.ts only  ->  /lp/gommage_akar_fasi
gommage-visage-nila/       content.ts only  ->  /lp/gommage_visage_nila
```

A product page is three lines:

```tsx
export default function Page() {
  return <AlHurraLanding content={gommageVisageNila} />;
}
```

`AlHurraLanding` owns the section order, spacing and styling. A product file
owns nothing but copy, prices and image paths — see `LandingContent` in
`al-hurra/types.ts` for the full contract.

## Adding another product

1. `components/landing-pages/<slug>/content.ts` exporting a `LandingContent`.
2. Assets under `public/assets/<slug>/`.
3. `app/lp/<route>/{layout,page}.tsx` — copy an existing pair and swap the
   import, the metadata and the OG image.

Nothing in `al-hurra/` should need editing. If a product genuinely needs a new
capability, add it as an **optional** field so the existing pages keep rendering
byte-for-byte as they do now (see "Optional fields" below).

## Why these are isolated

The template is built on the **Zayna Atlas** design system, which collides with
Horma's own tokens in `app/globals.css`:

| Token | Horma Group | Zayna Atlas |
| --- | --- | --- |
| `--ink-900` | `#0b0d0e` | `#1b1815` |
| `--border-hairline` | `#e4e2dc` | `#e6dccd` |
| `--text-inverse` | `#fff` | `#f8f3eb` |

`--surface-page`, `--surface-card`, `--surface-raised`, `--surface-accent`,
`--gutter`, `--section-y` and `--scrim-bottom` overlap too. Putting the Zayna
Atlas ramp on `:root` would repaint every other page, so it is declared on a
**scope class** (`styles/landing.module.css` → `.scope`) that wraps the page.

## The two rules that matter

**1. Tokens go on `.scope`, never on `:root`.**

**2. Scoped element resets use `:where()`.**

Horma's globals style bare `h1–h4`, `p`, `a`, `body` and `section[id]`, and
Tailwind preflight adds more. A landing page has to override those — but a
plain `.scope p` scores (0,1,1) and would then also beat the section modules'
own `.body { margin: 0 }` at (0,1,0), silently breaking them.

Writing `.scope :where(p)` keeps the score at one class, so it beats every
`(0,0,1)` global while still yielding to component rules. Where a component
rule must win against it, qualify the class with its parent — `.card .body`,
`.item .answer`, `.list .image`.

This pairing reproduces the cascade the original standalone HTML had, where
bare element selectors always lost to classes.

## RTL

Each route layout renders `<div lang="ar" dir="rtl">`. The root layout stays
`lang="fr"` with no direction, so the rest of the site is untouched. Never set
`dir` on `<html>` for a landing page.

Tajawal is loaded by `next/font` **in the route layout**, not the root one, so
it is not requested on any other route.

## Optional fields

These exist because one product needs them and another does not. Omitting them
reproduces the original Aker Fassi layout exactly:

| Field | Effect when set |
| --- | --- |
| `headings.benefits` | Gives the benefits row a section heading; without it the row renders bare under the hero |
| `Ingredient.description` | Adds a muted supporting line under the ingredient name |
| `Pack.freeDelivery` | Waives the delivery fee while that pack is selected, and the summary reads `مجاناً` instead of an amount |
| `config.groupThousands` | Groups prices as `1,347` rather than `1347` |
| `config.stickyThumb` | Overrides the sticky bar image, which otherwise uses the first pack's |

`Step.lines` is an array: pass one entry to let the caption wrap naturally, or
several to force the line breaks.

## Fidelity

The template was migrated from a standalone HTML implementation
(`../../../al-hurra-landing/`), which remains the visual reference for the Aker
Fassi page. Three details exist only to preserve it:

- `.scope :where(p)` restores the UA `1em` paragraph margin. The source page
  never reset it, and inside its flex columns those margins do not collapse, so
  they are load-bearing spacing.
- `.scope :where(ul)` and `.scope :where(figure)` restore the UA margins for
  the same reason. No list markers appear because every `<li>` is `display:flex`.
- The how-to step illustration is `display: inline`, so the baseline descender
  keeps the 6px gap under it that preflight's `display:block` would remove.

When changing anything under `al-hurra/`, verify the existing pages still render
identically — geometry per section at 320/360/375/390/414/768/1024/1280 plus a
full-page pixel diff. The extraction of this template from the Aker Fassi page
was verified that way at **0 differing pixels**.
