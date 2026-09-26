# Handoff: Freedive Rote — marketing website

## Overview
A multi-page marketing site for **Freedive Rote — Ocean Performance**, a small freediving, breath-hold and ocean-excursion school on Nemberala Beach, Rote Island, Indonesia. The site presents the school's offers (freediving courses at four levels, one-to-one coaching, a surf survival workshop for surfers, guided ocean excursions), the place, and the people, and funnels visitors to **WhatsApp** or **email** to book. There is no online booking, payment or account system.

## About the design files
Everything in `design/` is a **design reference built in HTML**: a working prototype showing the intended look, content and behaviour. It is **not production code to copy**. The prototype is one file, `Freedive Rote Website.dc.html`, with inline styles, a small runtime (`support.js`) and hash-based routing so it can run offline.

The task is to **recreate this design as a real website**. No codebase exists yet. Recommended stack: **Astro** (static, fast, image optimisation built in, one `.astro` component per section, content in Markdown/JSON so the owner can edit copy). Next.js with static export is an acceptable alternative. Use real URLs (`/courses/level-1`), not `#/` hashes.

Open the prototype by serving the `design/` folder (e.g. `npx serve design`) and visiting `Freedive Rote Website.dc.html`. Pages are reached with `#/home`, `#/all-courses`, `#/try-freediving`, `#/level-1`, `#/level-2`, `#/level-3`, `#/coaching`, `#/surf-survival`, `#/trips`, `#/location`, `#/about`. **All final copy lives in that file.** Copy it verbatim; do not rewrite it.

## Fidelity
**High fidelity.** Colours, type, spacing, photo crops, copy and interactions are final and approved by the client after many rounds of review. Recreate them faithfully. Photo `object-position` values in particular were tuned one by one and should be kept exactly.

---

## Sitemap and URLs

| Prototype hash | Production URL | H1 (banner title) | Banner eyebrow |
|---|---|---|---|
| `#/home` | `/` | Freediving in Rote | — |
| `#/all-courses` | `/courses` | Freediving Courses | Nemberala, Rote Ndao |
| `#/try-freediving` | `/courses/try-freediving` | Try Freediving | One-day introduction |
| `#/level-1` | `/courses/level-1` | Level 1 — Beginner | Beginner course |
| `#/level-2` | `/courses/level-2` | Level 2 — Advanced | Advanced course |
| `#/level-3` | `/courses/level-3` | Level 3 — Deep | Deep specialist program |
| `#/coaching` | `/courses/coaching` | Coaching Session | One to one |
| `#/surf-survival` | `/surf-survival` | Surf Survival | Breath-hold training for surfers |
| `#/trips` | `/trips` | Guided Ocean Excursions | Explore Rote |
| `#/location` | `/location` | Welcome to our beach front home | Location |
| `#/about` | `/about` | About Freedive Rote | Nemberala, Rote Island |

"Contact Us" is **not a page**. It scrolls to the home page's contact band (`/#contact`). Add redirects: `/contact` → `/#contact` and `/courses/all` → `/courses`.

---

## Global layout

### Header (every page)
- Sticky, `z-index: 40`. Height = logo 92px + 16px padding top and bottom = **124px**. Max width 1320px, side gutter `clamp(20px,5vw,64px)`.
- **Logo:** `assets/logo-freedive-rote-white.png` (white PNG, transparent), height 92px, width auto. **Never stretch it.** Links to `/`.
- **Transparent over the home hero** at the top of the page. Once the page scrolls more than 24px, or on any non-home page, a background fades in over 380ms: `rgba(11,51,72,.9)` with `backdrop-filter: saturate(120%) blur(14px)` and a 1px bottom border `rgba(255,255,255,.28)`.
- **Desktop nav (wider than 900px):** Freediving Courses ▾ · Surf Survival · Trips · Location · About · Contact Us. Jost 17px, weight 400, letter-spacing .04em, white, `text-shadow: 0 1px 8px rgba(15,36,48,.55)` so it stays readable over the bright hero. Hover shows a 1px underline in currentColor. Gap between items `clamp(14px,2.1vw,32px)`.
- **"Freediving Courses" is a `<button>`, not a link.** It has no page. It only opens the dropdown:
  - Opens on hover and stays open while the cursor moves into the panel.
  - Click or tap toggles it. A click within 500ms of the hover opening it must not close it again (this fixes a touch-tablet bug).
  - Enter or Space toggles it; Escape closes it. Set `aria-expanded`.
  - The chevron is a 6px CSS square, 1px right and bottom border, rotated 45°. It rotates 225° when open.
  - No link-style underline on hover.
  - **Dropdown panel:** background shell `#FDFBF7`, 1px hairline border, 16px radius, `--shadow-lift`, min-width 238px, 12px padding. Items: Try Freediving, Level 1, Level 2, Level 3, Coaching, All Courses. 15px text in Deep Rote, 12px 16px padding, 10px radius, cream hover background.
- **Mobile (900px and narrower):** a hamburger button (48×48, three 28px × 1px white lines) opens a full-screen Ocean Night `#0B3348` overlay:
  - The logo (52px) and a close button (X) sit at the top.
  - Links are Petrona 24px, weight 300, with hairline dividers between them. "Freediving Courses" expands its six sub-links in place (accordion).
  - A full-width solid white "Book a session" button sits at the bottom.
  - Tapping any link closes the overlay.

### Footer (every page)
- Background Ocean Night `#0B3348`, padding `clamp(40px,4.5vw,64px)` top and 32px bottom.
- Three columns, `auto-fit minmax(250px,1fr)`:
  1. **Logo column:**
     - Logo 78px tall, keeping its proportions.
     - Text: "Join us for freediving courses, training, surf survival workshops and guided ocean excursions."
     - Two 44px circular icon buttons with a 1px `rgba(255,255,255,.28)` border: WhatsApp (Lucide `phone`) and Instagram (Lucide `instagram`).
  2. **Quick Links:** Freediving Courses → `/courses`, Surf Survival, Coaching, Trips, Location, About.
  3. **Contact info:**
     - Address: *Desa Oenggaut, Nemberala, Kec. Rote Bar., Kabupaten Rote Ndao, Nusa Tenggara Tim. 85982, Indonesia*
     - WhatsApp +62 857-7321-6666
     - Email info@freediverote.com
- Bottom bar: 1px top rule; "© Freedive Rote · Nemberala, Rote Ndao, Indonesia" on the left, "Breath · Depth · Presence" on the right. 13px, `rgba(255,255,255,.76)`.

### Inner-page banner (every page except home)
- Full-bleed photo. It starts **at the top of the viewport, behind the sticky header**: use a negative top margin equal to the header height, and give the content top padding of header height + 48px.
- Height `min(58vh,560px)`.
- Scrim: a bottom gradient `rgba(15,36,48,.66) → .46 at 40% → 0` covering 72% of the height, plus a top fade 240px tall, `rgba(15,36,48,.5) → 0`, so the nav stays readable. The Location banner uses the neutral scrim `rgba(8,14,18,…)` instead of blue.
- Text is bottom-left: an eyebrow (12px uppercase, .2em tracking) above the H1 (Petrona 200, `--text-display-2`, white).
- Photo and `object-position` per page:

| Page | Image | object-position |
|---|---|---|
| Surf Survival | surf-banner-2-w.jpg | 45% 34% |
| Trips | trips-banner-boat-w.jpg | 60% 55% |
| Coaching | coaching-banner-2-w.jpg | 50% 30% |
| Level 3 | level-3-banner-2-w.jpg | 50% 61% |
| Level 2 | level-2-advanced.jpg | 50% 40% |
| Level 1 | level-1-beginner.jpg | 50% 50% |
| Try Freediving | try-banner-3-w.jpg | 50% 24% |
| Courses | courses-banner-2-w.jpg | 50% 14% |
| About | about-banner-2-w.jpg | 55% 8% |
| Location | loc-banner-3-w.jpg | 50% 36% |

---

## Pages (section order, top to bottom)

Exact copy, list items and image `object-position` for every block are in the prototype. Search it for the page's `isXxx` block, e.g. `<sc-if value="{{ isLevel1 }}">`. Section backgrounds alternate shell / cream; never more than two non-shell grounds in a row.

### Home `/`
1. **Hero.** Full viewport height, capped at `min(100vh,940px)`.
   - Photo `hero-beach-v3-w.jpg` at object-position 50% 96%.
   - Scrims use the neutral dark `rgba(8,14,18,…)`, **not blue**. The client rejected blue and green tints. Top: `linear-gradient(to bottom, rgba(8,14,18,.44), transparent 65%)`. Bottom: `linear-gradient(to top, .60 0%, .40 30%, .16 58%, 0 80%)`.
   - H1 "Freediving in Rote" (Petrona 200, `--text-display-1`) and a lede, both with a soft text-shadow.
   - Buttons: primary "See the courses →" (smooth-scrolls to What we offer) and solid white "Book a session" (WhatsApp).
2. **Key points strip.** Aqua-wash band. Seven items in one row, separated by thin vertical rules:
   - Items: +15 Years of Teaching · Safety First · Beachfront Location · Small Groups · New Equipment · All Levels Welcome · Certified Molchanovs.
   - Each has a custom line icon (inline SVG in the prototype) above its label. "+15" is typeset as a number instead of an icon.
   - It wraps to a grid on narrow screens and the rules disappear.
3. **Why train with us.** Two columns:
   - Left: an eyebrow with a 40px sand rule, four paragraphs, and a primary "Explore our location" button.
   - Right: a 4:5 photo `why-train-with-us.jpg` with a 20px radius and no gradient. The caption "Nemberala, Rote Island" sits **bottom-centre in dark ink** over the bright sand.
4. **What we offer** (`id="offer"`). Cream band.
   - Centred H2 "What we offer" with a 48px sand rule below it.
   - A 2×2 grid of white cards (32px radius, hairline border). Card order: **Surf Survival, Freediving Courses, Coaching, Guided Ocean Excursions**.
   - Each card: a 3:2 photo edge to edge at the top, then Petrona title, description, a hairline rule, and a centred sand "Learn more" button.
   - Hover (desktop): the image scales to 1.04 over 600ms, only the image moves, and a neutral veil deepens from `rgba(15,36,48,.18)` to `.30`.
   - Touch: the same effect shows while pressed.
   - Cards fade in and rise on scroll with an 80ms stagger.
5. **Contact band** (`id="contact"`). Deep Rote `#0E4A6B`.
   - H2 "Drop us a message, and we'll help create your ideal ocean experience in Rote."
   - Two outlined contact tiles: WhatsApp us (+62 857-7321-6666) and Email us.
6. **Reviews.**
   - Eyebrow "Reviews", H2 "Kind words from our amazing students", a "5.0 ★★★★★ Google rating" block, and ‹ › buttons.
   - A horizontal scroll-snap row of white review cards, each `min(84vw,380px)` wide.
   - Eight Google reviews, in this order: Vera Costa, Paul McMahon, Emma Perrier, Adrian Bailey, Mick Lavery, Adi Khodja, Marcelo Wesseler, A. Ivanova.
   - ‹ › scroll the row by `min(90% of its width, 412px)`, smoothly.
7. **Meet us band.**
   - Full-bleed photo `about-banner-2-w.jpg` at 55% 40%. Height `clamp(280px,32vw,420px)`.
   - Neutral scrim: `to top, rgba(8,14,18,.64) 0%, .5 40%, .24 75%, .1 100%`.
   - Content bottom-centred: H2 "Discover the story behind this place" and a solid white "About Freedive Rote" button linking to About.

### Freediving Courses `/courses`
1. Banner.
2. H2 "Choose your course" with a sand rule. A 2×2 grid of white course cards:
   - Order: Try freediving, Level 1, Level 2, Level 3.
   - Each card: photo edge to edge at the top, title, description, a hairline rule, and a centred sand "Learn more" button.
   - Same hover and press behaviour as the home offer cards.
3. Cream band:
   - Line: "Not sure which course is right for you? Tell us about your experience in the water, and we'll work it out together."
   - A Deep Rote "Contact us" button (WhatsApp).

### Course detail pages (Try Freediving, Level 1, 2, 3, Coaching)
All five share one template. Build it as a single component fed by content data.
1. Banner.
2. **Intro.** Two columns: text with a lede on one side, a photo on the other.
3. **"What the course includes" / "What is included" / "What a session includes".** Cream band:
   - A heading row across the top.
   - Below it, two columns: a square photo in its frame on one side, and on the other a hairline-ruled list. Each item has a 20px sand dash before it; there are no bullets or numbers.
   - The list is vertically centred against the photo.
4. **Duration and prerequisite.** A plain text line, e.g. "Course Duration: 2.5 days". Level 2 requires Level 1.
5. **CTA row.** "Book a session" (WhatsApp) and a secondary "All courses" button.
6. **Review quote block.** Centred Petrona quote with a 48px sand rule above it.
   - Level 1 and Level 2: Emma Perrier. Level 2's quote is set smaller, `clamp(22px,2.4vw,30px)`, because it is longer.
   - Coaching: Adrian Bailey, excerpt only.

### Surf Survival `/surf-survival`
1. Banner.
2. **Intro text.** "A wipeout, a hold-down…" plus two paragraphs.
3. **"You will learn practical tools for."** Cream band:
   - Square photo `breath-hold-training-v5-w.jpg` on the left.
   - Two-column list of the six tools on the right.
4. **Duration line** and a centred **sand "Book a session" button**. Sand `#EADCC4` fill, ink text, contrast 13.4:1. Hover goes to wet sand `#C9AF8B`.
5. **Review block.** Paul McMahon, one sentence only, with the `pool-rest-w.jpg` photo.

### Trips `/trips`
1. Banner.
2. **Intro.**
   - A faint Rote Island map silhouette behind the text: `rote-map-v2.png`, opacity about .32, positioned absolutely.
   - Photo collage: a tall left photo spanning two rows, plus two stacked photos.
3. **"What is included".** Cream band, eyebrow "Ocean excursion". Hairline list of six activities: Reef exploration, Freediving & snorkelling, Offshore island trips, Sailing, Quiet beaches and coastal exploration, Line training for freedivers.
4. **"Perfect for…" paragraph** plus the safety line.
5. **CTA band.** Cream background. H2 "Snorkel, freedive, explore — we'll take care of the rest." with a button in the reference ocean blue `#1A5A8A`.
6. **Review.** A. Ivanova.

### Location `/location`
1. Banner.
2. **"Rote Island & Nemberala."** Heading and lede on the left, a pull-quote on the right with a 1px sand left rule. Map silhouette behind.
3. **"Our school."** Full-width cream band. Two shala photos edge to edge on the left with a 4px gap, text on the right.
4. **"Discover Rote."** Text beside a 3:4 photo. It ends with the line "Oh, and the sunsets over the ocean are spectacular!" in blue italic Petrona.
5. **Full-bleed photo.** `loc-meditation-w.jpg`, no text.
6. **"Freedive Rote."** Centred closing paragraphs over the map silhouette.
7. **"Find us."** Deep Rote band:
   - Left: address and a single sand button "Open in Google Maps" linking to `https://maps.app.goo.gl/kozkb5j8g4gNRhdc6`.
   - Right: a Google Maps embed iframe, 4:3, 24px radius.

### About `/about`
1. Banner.
2. **"Who we are"** intro.
3. **"Our journey."** Cream band, portrait photo.
   - Text: "…co-founding Apneista Freediving & Yoga in Amed, Bali, along with Above Below, an expedition company…"
   - Below the text, two partner logos, centred, inked `#0F2430` with a CSS mask, opacity .82 rising to 1 on hover:
     - Apneista (62×68) → https://www.apneista.com/
     - Above Below (168×38) → https://www.abovebelow.life/
4. **"For surfers — More than teaching freediving."** Photo plus text, with a sand "Surf survival" button.
5. **"Breath, awareness, presence"** text block.
6. **Full-bleed statement photo** `about-still-2.jpg` on a Deep Rote band.
7. **CTA.** Primary "See the courses" (goes to the home page's What we offer section) and secondary "Contact us" (WhatsApp).

---

## Interactions and behaviour
- **Booking.** Every "Book a session" and "Contact us" button opens `https://wa.me/6285773216666` in a new tab with `rel="noopener"`. Email links are `mailto:info@freediverote.com`.
- **In-page scroll targets.** "See the courses" goes to `/#offer`; "Contact Us" goes to `/#contact`. Both scroll smoothly so the section top lands **exactly below the sticky header**. Compute the offset from the header's real height, or use `scroll-margin-top: 124px`. This must work when arriving from another page.
- **Scroll reveal.** Elements fade from opacity 0 and move up 18px to their place over 700ms, easing `cubic-bezier(.22,.68,.24,1)`, when they enter 90% of the viewport. Use the per-element delays in `data-reveal-delay` (80ms stagger on card grids). Use IntersectionObserver in production. Content must never stay hidden if JavaScript fails.
- **`prefers-reduced-motion: reduce`** disables every transition, the reveal and the image zoom.
- **Hover states.**
  - Primary button → `#2C6E92`.
  - Sand button → `#C9AF8B`.
  - Secondary button: the hairline darkens to ink.
  - On-photo outline button: fills to 14% white.
  - Footer links: 76% white → white.
- **Presses** nudge the button down 1px. No scale effect.
- **Focus:** a 2px aqua ring `rgba(87,169,166,.55)` at 3px offset on every interactive element.
- **Tap targets** are at least 44px.
- **Breakpoint.** 900px switches the nav to the hamburger and collapses every two-column split to one column. All grids use `auto-fit minmax()` and reflow on their own.

## State
All state is client-side UI only:
- `scrolled` (header background)
- `coursesOpen` (desktop dropdown) and `mobileMenuOpen` / `mobileCoursesOpen` (mobile menu)
- `hoverOffer` / `pressOffer` (card zoom)
- the reviews scroller position

There is no data fetching, forms or back end. Nice to have: build the review list from a JSON file so the owner can add reviews.

## Design tokens
Everything is in `design/_ds/…/tokens/*.css`. **Copy these files into the project unchanged** and use the CSS variables.

**Colour**
- Shell `#FDFBF7` (page) · White `#FFFFFF` (cards)
- Cream `#F7EFE0` · Sand `#EADCC4` · Wet sand `#C9AF8B` · Sand line `#DFCFB4`
- Deep Rote `#0E4A6B` (primary) · Ocean Night `#0B3348` (footer) · Blue mid `#2C6E92` (hover) · Reference ocean `#1A5A8A` (Trips CTA) · Blue wash `#E4EDF2`
- Aqua `#57A9A6` · Aqua light `#9FCBC6` · Aqua wash `#DCEAE7` (key-points band)
- Ink `#0F2430` · Ink soft `#2E434E` (body) · Ink muted `#6B7F88`
- Hairline `rgba(15,36,48,.12)` · on-dark border `rgba(255,255,255,.28)` · on-dark muted text `rgba(255,255,255,.76)`

**Type**
- **Headings: Petrona** (Google Fonts, weights 200–300, variable 300..700). It overrides the design system's Newsreader through `--font-heading-alt: 'Petrona', var(--font-display)`. This was the client's explicit choice. Use Petrona for every heading, pull quote, review name and mobile-menu link.
- **Body and UI: Jost** (weights 300–400).
- Nothing is ever heavier than 500.
- Sizes:
  - Display-1 `clamp(42px,6.2vw,86px)`
  - Display-2 `clamp(34px,4.4vw,58px)`
  - Heading-1 `clamp(28px,3vw,40px)`
  - Heading-2 `clamp(23px,2.1vw,28px)`
  - Body-lg 19px · Body 17px · Body-sm 15px · Caption 13px · Eyebrow 12px
- Leading: display 1.06, heading 1.2, quote 1.35, body 1.7, loose 1.85.
- Tracking: display −0.02em, heading −0.01em, eyebrow 0.2em uppercase, button 0.09em uppercase.
- Measures: text 62ch, lede 46ch.

**Spacing**
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px.
- Gutter `clamp(20px,5vw,64px)`.
- Grid gap `clamp(16px,2.2vw,32px)`.
- Max widths: page 1320px, content 1100px, narrow 760px.
- **Section padding in this build is tighter than the design system's default** (the client asked for less air): mostly `clamp(48px,6vw,88px)` to `clamp(56px,6vw,96px)`. Use the values in the prototype, not `--space-section`.

**Radius:** inputs 10px · small containers 16px · **photos 20px** · large cards 24–32px · pills 999px (buttons and badges only).

**Shadows**
- hairline `0 1px 2px rgba(15,36,48,.05)`
- soft `0 2px 4px rgba(15,36,48,.04), 0 18px 36px -24px rgba(15,36,48,.18)`
- lift `0 4px 10px rgba(15,36,48,.06), 0 28px 56px -28px rgba(15,36,48,.24)`
- photo `0 30px 60px -36px rgba(11,51,72,.38)`

**Buttons** (the `Button` component in `_ds_bundle.js`)
- Pill shape. Jost 13px, weight 400, uppercase, 0.09em tracking. Height 48px (md) or 56px (lg).
- Variants:
  - `primary`: Deep Rote fill, white text
  - `secondary`: transparent, hairline border, ink text
  - `sand`: Sand fill, ink text
  - `onPhoto`: transparent, white text, white hairline
  - `onPhotoSolid`: white fill, ink text

## Content rules (from the brand)
- Sentence case everywhere. UPPERCASE only for eyebrows, buttons and micro-labels.
- No emoji. No exclamation marks, except the one sunset line the client kept.
- Curly apostrophes (’). "Breath-hold" is hyphenated.
- Course headings use an em dash, e.g. "Level 1 — Beginner". Try Freediving's section heading uses an en dash: "Try freediving – a one-day introduction".

## Assets
All in `design/assets/`. They are the school's own photographs, already web-compressed to a maximum of about 2000px, JPEG quality around 84.
- In production, generate responsive AVIF/WebP sizes (Astro `<Image>` or similar), lazy-load everything below the fold, and keep each image's `object-position`.
- **Logo:** `logo-freedive-rote-white.png` is the only logo that exists (white on transparent). For a dark version, use it as a CSS mask.
- **Partner logos:** `logo-apneista.png`, `logo-above-below.png`, used as CSS masks and tinted ink.
- **Map silhouette:** `rote-map-v2.png`. It was traced from a real Google Maps screenshot of west Rote and the offshore islands; do not replace it with a hand-drawn shape.
- **Icons:** Lucide 0.544 (`phone`, `mail`, `instagram`, `map-pin`) at 18–20px, stroke 1.25. The seven key-point icons are custom inline SVGs in the prototype; extract them as they are.
- The alt text for every image is in the prototype. Reuse it.

## Files
- `screenshots/01-home.png` … `11-about.png` — full-length desktop captures (1162px wide) of every page as approved. Fade-ins are shown in their finished state. The inline Google Map on Location may appear blank here; it's a live embed.
- `design/Freedive Rote Website.dc.html` — the full prototype: all pages, all copy, all styles inline. The logic class at the bottom of the file holds routing, menu, reveal and scroll behaviour.
- `design/support.js` — the prototype runtime. Only needed to view the prototype; do not port it.
- `design/_ds/freedive-rote-design-system-…/` — design tokens (`tokens/*.css`), base styles, and `_ds_bundle.js` (the Button, Badge, Eyebrow and Icon components the prototype uses).
- `design/assets/` — every image used on the site.
- `CLAUDE_CODE_PROMPT.md` — a prompt to paste into Claude Code to start the build.

## Before launch
- Confirm the WhatsApp number, email and Instagram handle (`instagram.com/freediverote`).
- Add SEO for every page: a `<title>`, meta description, Open Graph image (use each page's banner) and LocalBusiness JSON-LD with the address above.
- Add a favicon, generated from the logo mark.
- Run Lighthouse: target 90 or more for performance and 100 for accessibility.
