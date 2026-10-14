# NitNac Design System

NitNac is a private app where a small group of friends track their sewing, crochet, knitting and mending projects together. It is internal only: no shop, no prices, no strangers. It should feel like a shared craft table — cream paper, crimson ink, soft colour blocks and hand-drawn illustrations. Not corporate, not a dashboard.

**One product surface:** the NitNac mobile app (home feed, projects, project detail with steps, friends + session planning, profile, post-an-update sheet).

## Sources
Everything here was built from the brief and files uploaded to this project (`uploads/`). No codebase or Figma was provided.
- `IMG_2364.jpeg` — the six-colour palette with names and hex values (Winksy specimen).
- `IMG_2363.jpeg` — product cards on scalloped colour backdrops (@blinde_eloise). Source of the scallop, coloured titles, round icon buttons, pill steppers. Prices/cart ignored.
- `IMG_2362.jpeg` — mobile screens: big headlines, tilted stickers, round icon buttons, list rows in a coloured panel, round day buttons, dark tab bar with raised centre button.
- `IMG_2355.jpeg`, `IMG_2356.jpeg` — pill tags in mixed fills, outlined pills, four-point sparkles.
- `IMG_2361.jpeg` — flat sewing illustrations (sewing machine, scissors, spool, iron, pins, pin cushion, bow). Cut out to `assets/illustrations/`.
- `IMG_2360.jpeg` (yarn + crochet hook), `IMG_2359.jpeg` (yarn basket, Bella Land) — cut out to `assets/illustrations/`.
- `IMG_2357.jpeg` (crochet motifs), `IMG_2358.jpeg` (knit swatch) — sample project photos in `assets/photos/`.
- `Winksy-FreeDemo-BF6a574e0eeed98.otf` — title font, copied to `fonts/Winksy.otf`.

**No logo was supplied.** Wherever a mark would go, "NitNac" is set in Winksy. Do not draw a logo.

---

## Content fundamentals
Voice: friends cheering each other on at the craft table. Casual, warm, encouraging.
- **Sentence case** everywhere: buttons, titles, tags ("In progress", "Post an update").
- **"You" and "we".** "You stitched four hours this week." "When are we crafting?" The app speaks as part of the group, never as a system.
- **Short sentences.** One idea each. Captions are fragments: "Mia · 2h ago", "3 of 8 steps".
- **Celebrate progress:** "Halfway there!", "Finished!", "All done!", "You picked it back up. Love that."
- **Never shame slow projects.** Paused is a normal status, not a warning. No "overdue", no red badges, no streak-loss guilt. Empty states invite: "Nothing yet. Want to start something?"
- **No emoji.** Celebration comes from stickers, colour and illustration instead.
- Exclamation marks are fine for celebrations; keep everything else calm.
- Craft words are welcome (cast on, gauge, hem, sashiko) — the audience knows them.

| Instead of | Write |
|---|---|
| Task completed | Step done. Nice. |
| Project overdue | Taking a little break? That's fine. |
| No data | Nothing planned yet. Want to start something? |
| Submit | Post to the table |

## Visual foundations
**Colour.** Cosmic Latte `#F6F3CF` is the page on every screen. Crimson Ink `#8B162B` replaces black: all text, outlines, the primary button, focus ring. Dusty Rose `#F9B6B8`, Neon Pear `#C6B63B` and Arctic Blue `#BAD2E8` are fills for backdrops, tags, stickers, panels and stat tiles; rotate them so neighbouring cards differ. Burnt Sienna `#F37521` is the loud accent — **one element per screen** (a "Finished!" sticker, a selected day, the active filter); text on it is Crimson Deep only. Supporting: Card `#FFFCEE` (raised cards, icon buttons, inputs), Crimson Deep `#5A1220` (tab bar, dark surfaces), Ink Muted `#7A4650` (captions on Latte/Card only). Text on Neon Pear must be 15px+. No pure white, no pure black. Each friend owns one of Rose / Pear / Blue / Sienna; their avatar and progress fills use it.

**Type.** Winksy for headlines, screen titles, project names, card titles, section labels — never body or small labels. Source Sans 3 for everything else. Scale: display 44, title 28, card title 22, section label 20 (Winksy); stat 26 semibold, intro 17, body 15, label 14 semibold, caption 12 (Source Sans). Titles may take their card's backdrop colour as in the reference cards — decorative, 22px+ only.

**Shape.** Everything pressable is a pill: buttons (48 / 36 tall), tags (36 / 28), round 44px icon buttons, day buttons. Radii: 12 inputs, 20 cards and list rows, 28 sheets, panels and tab bar. Outlines are 1.5px Crimson Ink.

**Signature shapes.** A 3×3 bubble **scallop** behind every project image. **Stickers** — wavy flower, burst, circle, rounded square — tilted −12° to +12°, overlapping each other and headlines. Four-point **sparkle** on craft tags and Finished.

**Surfaces & depth.** Flat. No drop shadows, no gradients, no blur. Separate things with colour: Card on Latte, Card rows inside a Rose/Pear/Blue panel, Crimson Deep for the tab bar. The only transparency is the Crimson Deep scrim behind a sheet.

**Backgrounds.** Plain Cosmic Latte. No textures or full-bleed photos; illustrations and stickers decorate around headlines and empty states.

**Imagery.** Warm, bright, handmade: real craft photos (yarn, crochet, swatches) cropped into circles on the scallop; flat or pencil-textured illustrations. Never recolour or stretch illustrations.

**Layout.** 16px screen gutter and card padding. Spacing scale 4 / 8 / 12 / 16 / 24 / 32 / 48. Mobile-first, 390px. Fixed: dark rounded tab bar floating 20px above the bottom, 16px side insets, raised 60px centre "+" with a Latte notch ring. Big headline top-left, stickers top-right.

**States.** Hover darkens primary to Crimson Deep (icon buttons hover Rose). Press scales to 97%. Focus is a solid 2px Crimson Ink ring, 2px offset. Selected = Burnt Sienna fill with Crimson Deep text. Disabled = 45% opacity. Finished projects get a celebratory burst sticker.

**Motion.** Small and soft: 120ms press, 200ms fills (`--ease-soft`). Progress bars ease to width. No page-level animation beyond simple cuts.

## Iconography
- **Craft types** use the supplied illustrations on tinted circles (`IllustratedIcon`): sewing → sewing machine (Rose), crochet → yarn + hook (Blue), knitting → yarn basket (Pear), mending → spool (Rose). Other illustrations (scissors, iron, pins, pin cushion, bow) decorate headlines, stat tiles and empty states. PNG with transparency, in `assets/illustrations/`.
- **Controls** (back, close, search, heart, bell, tab icons, check, calendar, camera…) are simple rounded line icons stroked 2px in Crimson Ink. No icon set was supplied, so `Icon` inlines geometry from **Lucide** (ISC licence) — a substitution; swap if you have a preferred set.
- The **four-point sparkle** is the only filled glyph.
- No emoji. No unicode symbols as icons (except "·" as a caption separator).

---

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `fonts/Winksy.otf` — title font. Source Sans 3 loads from Google Fonts.
- `assets/illustrations/` — sewing-machine, scissors, spool, iron, pins, pin-cushion, bow, yarn-hook, yarn-basket
- `assets/photos/` — crochet-strawberry, crochet-flower, crochet-cherries, crochet-bow, crochet-sun, crochet-motifs, knit-swatch
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see below), each with `.d.ts`, `.prompt.md` and a directory card
- `ui_kits/app/` — NitNac mobile app click-through (`index.html`)
- `SKILL.md` — agent skill entry

## Components
- **core/** — Button, IconButton, Tag, Input, Icon
- **shapes/** — Sticker (+ StickerShape), Scallop, IllustratedIcon
- **progress/** — ProgressBar, StepChecklist, StatTile
- **people/** — Avatar, AvatarGroup
- **cards/** — ProjectCard, UpdateCard
- **lists/** — ListPanel, ListRow, DayPicker
- **navigation/** — TabBar

### Intentional additions
- **Icon** — wrapper for the rounded line icons so every control uses the same stroke.
- **Scallop** — the signature backdrop as a reusable shape (used by ProjectCard).
- **Input** — the brief specifies input radius and fill; the post composer needs it.
- **StickerShape** — the bare sticker silhouette for custom compositions.

Illustration paths resolve from `window.NITNAC_ASSETS` (default `assets/`); set it to the relative path of `assets/` from your page.
