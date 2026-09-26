# Freedive Rote — Design System

A design system for **Freedive Rote — Ocean Performance**, a small freediving and
breathwork school on the beachfront at Nemberala, Rote Ndao, Indonesia.

The school teaches freediving courses (three levels), breathwork and nervous-system
coaching with a specific focus on surfers, guided ocean excursions around the island, and
integrates sitting meditation into all of it. The founder's 15+ years of teaching across
surfing, freediving and meditation is the central credibility marker. The setting is the
other one: white sand, direct views of the waves, water you can wade into fifty steps from
the door. **The place is a reason people come, so the system is built around light, open
space, large photography and an unhurried rhythm — not around UI furniture.**

Audience: people looking for genuine learning and nervous-system wellness, not depth
records. Nothing here should feel corporate, gamified or over-polished.

## Sources given

- `uploads/Reference 1.png` — a third-party travel-app screenshot, supplied **for colour
  direction only** (warm sandy cream + blue). Its layout and content were deliberately
  ignored. Kept at `scraps/reference-palette.png`.
- `uploads/whit logo .png` — the brand lockup (white, transparent PNG): circular wave mark
  over the wordmark **FREEDIVE ROTE** and the tagline **OCEAN PERFORMANCE**. Copied to
  `assets/logo-freedive-rote-white.png`. **This is the only logo asset that exists** — no
  dark variant, no mark-only file, no vector. Tinted variants are produced from it with a
  CSS mask (`Logo` component).
- 21 photographs of the school, students, courses, island and surf. Optimised (max 1600–2000px,
  JPEG q82) into `assets/img/`; originals kept in `assets/photos/`. Three GoPro frames
  (`hero-beach`, `location-1`, `location-2`) were rotated upright.
- Written brief in chat (positioning, tone, palette direction, colour constraints).

No codebase, Figma file or existing website was provided, so the component inventory below
was authored from the brief rather than recreated from a source library.

## Palette decision you asked for

Three blues were prepared (see the **Blue — three options** card):

| Option | Value | Character |
| --- | --- | --- |
| **Deep Rote** (shipped primary) | `#0E4A6B` | Clear, oceanic, calm; 8.4:1 on white; holds against wet sand |
| Reference Ocean | `#1A5A8A` | The reference screenshot's blue — brighter, more digital |
| Ocean Night | `#0B3348` | Deepest; ships as the footer / night ground either way |

Secondary accent is **Aqua** `#57A9A6` (sun-washed turquoise from the reef flat). Swap the
primary by changing `--c-blue-deep` in `tokens/colors.css` — everything else is aliased.

---

# CONTENT FUNDAMENTALS

**Voice: a quiet instructor, not a brochure.** Plain, present tense, specific. The school
speaks as **we**, the reader as **you**. Short sentences, then a shorter one. Never
"unlock your potential", never a superlative, never a depth boast.

- **Casing.** Sentence case for headlines, body and labels-in-prose. UPPERCASE only for
  eyebrows, buttons and micro-labels (12–13px Jost at 0.2em / 0.09em tracking). Never
  Title Case A Headline Like This.
- **Punctuation.** No exclamation marks. No emoji, ever — not in copy, not in nav, not in
  lists. Em dashes are used sparingly; en dashes for ranges ("April – November").
- **Numbers are small and true.** "max 3", "90 minutes", "three unhurried days",
  "to 24 m", "fifteen years". Round marketing numbers ("1000+ divers trained") are off-brand.
- **Integration is the message.** Copy should keep collapsing the four offerings into one
  practice. Model sentence: *"Freediving, breathwork, surfing and meditation are not four
  things we teach. They are one practice — breath, attention, and a nervous system that
  stays calm when the water does not."*
- **Achievement is never the hook.** Write "as deep as your body agrees to that day",
  not "push past your limits".

### Examples

| Slot | Write | Don't |
| --- | --- | --- |
| Hero headline | "Learn to breathe, then learn to go down" | "Unleash your inner freediver!" |
| Eyebrow | "What we offer" · "Rote Ndao, Indonesia" | "OUR AMAZING SERVICES" |
| Button | "Book a session" · "Course details" · "Ask about dates" | "GET STARTED NOW" |
| Reassurance | "Everything is in water you can stand up in until you decide otherwise." | "100% safe, guaranteed results" |
| Place | "Fifty steps from the door to waist-deep water." | "Paradise awaits 🌊" |
| Form hint | "We reply within a day or two." | "Response within 24 hours guaranteed!" |

Errors are written as help, in deep blue rather than red ("We need something to call
you."). The palette has no alarm colour on purpose.

---

# VISUAL FOUNDATIONS

**Colour.** Sun-washed, never saturated. Shell `#FDFBF7` is the page; cream `#F7EFE0` and
sand `#EADCC4` are the warm bands; Deep Rote `#0E4A6B` is the primary; Ocean Night
`#0B3348` closes every page as the footer; Aqua `#57A9A6` is an accent only (focus rings,
selection, one underline). Text is ocean-night ink `#0F2430`, never black. **Maximum two
non-shell grounds per page.** Body copy `#2E434E` on shell is 7.6:1; muted labels
`#6B7F88` are 4.6:1 and never smaller than 12px.

**Type.** Two families. **Newsreader** (serif, weights 200–300) for headlines, values and
pull quotes — light, editorial, calm. **Jost** (geometric sans, 300–400) for everything
structural: nav, buttons, eyebrows, body copy, labels; it matches the logo wordmark's
geometry. Nothing is ever set above 500 weight. Headline tracking is slightly negative
(-0.02em); eyebrows are the only letterspaced type (0.2em). Body: 17px / 1.7; ledes 19px /
1.85; measures capped at 62ch (46ch for ledes).

**Spacing and layout.** Sections breathe: `--space-section` 80→152px of vertical padding,
`--gutter` 20→64px at the sides, 1320px max page width, 760px for narrow text passages.
Grids are `auto-fit minmax()` so three-up offering grids reflow to two and one. The
header is the only fixed element (sticky, 78px); nothing else pins, no scroll-jacking, no
parallax.

**Backgrounds.** Photography and flat colour only. **No gradients as decoration** — the
only gradients in the system are the three photo scrims. No repeating patterns, no
textures, no noise, no hand-drawn illustration, no drawn SVG imagery. Organic detail is
limited to hairlines: a 48px sand rule above a quote, a 1px divider between fact rows.

**Imagery.** The school's own photographs, full-bleed or in 20px-radius frames. Two
families: cool deep-blue underwater frames (divers on the line, silhouettes, light shafts)
and warm shallow/white-sand frames (palms, reef flat, boats, surf). Mid-day light, no
filters, no grain, no colour grading. People are small in the frame; the water is the
subject. Portrait 4:5 for people, 3:2 for horizons, 3:4 for overlay tiles.

**Type over photos.** Always through a scrim token: `--scrim-bottom` (default, headline
low-left), `--scrim-full` (busy frames), `--scrim-side` (left-weighted captions). White
type at full opacity — never alpha-muted type over imagery.

**Corners.** Soft: 10px on inputs, 16px on small containers, **20px on all photography**,
24–32px on large cards and panels. Pill radius (`999px`) is reserved for buttons and
badges. Nothing is square, nothing is sharply rounded.

**Cards.** White on cream, 1px `rgba(15,36,48,.12)` hairline, 24px radius, and
`--shadow-hairline` at rest. On hover they take `--shadow-soft` and rise 3px; the photo
inside scales to 1.035 over 700ms. Photo-led cards (`PhotoCard`) have no border or shadow
at all — the image is the card.

**Shadows.** Four tokens, all barely there: hairline (rest), soft (hover), lift (sticky
bars, modals), photo (floating imagery, 60px blur at 38% ocean-night). Light and whitespace
do the separating, not elevation. No inner shadows anywhere except the sand inset ring on
fields (`--shadow-inset-sand`).

**Transparency and blur.** One use each: the scrolled header (`--glass-light` 72% shell +
14px blur) and `Badge tone="onPhoto"` (34% ocean-night + blur). Never blur behind body copy,
never frosted cards.

**Motion.** One easing — `--ease-tide` `cubic-bezier(.22,.68,.24,1)`. Entrances fade and
rise 18px over 700ms. Hovers are colour/opacity only at 180ms; presses nudge 1px down
(no scale, no shadow pop). Photos zoom to 1.035 over 700ms. Disclosure rows animate
`grid-template-rows` at 340ms. Nothing bounces, springs, spins or auto-plays.
`prefers-reduced-motion` zeroes every duration and the zoom.

**States.** Primary button hover = `--c-blue-mid` `#2C6E92`; secondary hover darkens its
hairline to ink; ghost links underline in `currentColor`; on-photo buttons fill to 14%
white. Focus is a 2px aqua ring at 3px offset. Disabled is 42% opacity, never grey mud.
Links in prose carry a hairline underline by default and shift to `--c-blue-mid` on hover.

---

# ICONOGRAPHY

No icon set, icon font or SVG sprite was supplied, and none was drawn: **Lucide 0.544 via
CDN is a flagged substitution**, chosen for its thin, even stroke.

- Load `https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js`, then use the `Icon`
  component (`<Icon name="map-pin" size={18} />`).
- 18–20px at `stroke-width: 1.25`, `currentColor`, usually Deep Rote or ink.
- **Logistics only** — place, duration, group size, links out, disclosure markers. Icons
  are never decorative, never in coloured circles, never paired with every list item.
- Approved names: `waves`, `wind`, `map-pin`, `clock`, `users`, `sunrise`, `arrow-right`,
  `arrow-up-right`, `plane`, `phone`, `mail`, `instagram`, `chevron-down`, `plus`, `minus`.
- **No emoji, ever.** Unicode is used as typography only: `·` between metadata, `–` in
  ranges, `°C`, `²`.
- The `Accordion` marker is not an icon but a 1px CSS plus/minus, so it matches hairline
  weight exactly.
- The only brand graphic is the logo lockup (`assets/logo-freedive-rote-white.png`).

If the school has a real icon set or a vector logo, send them — both are substitutions
today.

---

# INDEX

**Root**
- `styles.css` — the single entry point consumers link (`@import` list only)
- `readme.md` — this file
- `SKILL.md` — Agent-Skills wrapper
- `thumbnail.html` — homepage tile

**Tokens** (`tokens/`) — `fonts.css` (Google Fonts: Jost, Newsreader), `colors.css`,
`typography.css`, `spacing.css`, `radius-shadow.css`, `motion.css`, `base.css`
(element defaults + `.fr-*` helpers).

**Components** (`components/`) — 20 primitives, grouped:

- `core/` — **Button**, **Icon**, **Logo**, **Eyebrow**, **SectionHeading**, **Badge**
- `content/` — **PhotoCard**, **CourseCard**, **Quote**, **Accordion**, **InfoList**
- `layout/` — **Section**, **SplitFeature**, **Hero**, **SiteHeader**, **SiteFooter**
- `forms/` — **Input** (also exports `Field`), **Textarea**, **Select**, **Checkbox**

Each has a `.d.ts` props contract and a `.prompt.md` usage note; each directory has one
`@dsCard` HTML showing its states.

**Intentional additions** — no source library defined an inventory, so this set was
authored from the brief. `Icon` is a wrapper around the substituted Lucide set;
`CourseCard` and `InfoList` exist because course levels and logistics are the site's
two most repeated content shapes.

**Foundations** (`guidelines/`) — 22 specimen cards: colour (blue options, sand, shallows,
ink, grounds, scrims), type (display, headings, body, eyebrow, quote, pairing), spacing
(scale, rhythm, radii, shadows) and brand (motion, logo, logo tones, photography,
iconography, voice).

**UI kit** (`ui_kits/website/`) — click-through recreation of the marketing site: home,
courses, coaching, Rote, visit. See its `README.md` for screens, interactions and the list
of placeholder numbers.

**Assets** (`assets/`) — `logo-freedive-rote-white.png`, `img/` (21 web-optimised
photographs), `photos/` (originals).
