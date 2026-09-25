# Prompt to paste into Claude Code

Put the unzipped `design_handoff_freedive_rote_website` folder inside an empty project folder. Open Claude Code in that project folder and paste everything below the line.

---

Build the production website for **Freedive Rote**, a freediving school on Rote Island, Indonesia, from the design handoff in `./design_handoff_freedive_rote_website/`.

**Read these first, fully, before writing any code:**
1. `design_handoff_freedive_rote_website/README.md` — the spec: sitemap, every section, interactions, tokens and assets.
2. `design_handoff_freedive_rote_website/screenshots/*.png` — full-page captures of all 11 approved pages. Use them as the visual target and compare your build against them.
2. `design_handoff_freedive_rote_website/design/Freedive Rote Website.dc.html` — the approved high-fidelity prototype. **It is the source of truth for all copy, section order, image choices, image `object-position` crops and spacing values.** It is a design reference: recreate it, don't copy its runtime.
3. `design_handoff_freedive_rote_website/design/_ds/*/tokens/*.css` — the design tokens.

To see the prototype, run `npx serve design_handoff_freedive_rote_website/design` and open `Freedive Rote Website.dc.html#/home`, then each `#/…` route in the README's sitemap table.

**Stack**
- Astro (latest) with TypeScript, static output. Plain CSS using the token files copied unchanged into `src/styles/tokens/`; no Tailwind.
- Astro `<Image>` for all photos: responsive AVIF/WebP, lazy-loaded below the fold, each photo's `object-position` kept exactly.
- Fonts self-hosted with `@fontsource`: Petrona 200/300 (headings) and Jost 300/400 (body and UI).
- Lucide icons via `lucide-astro` or inline SVG. Extract the seven key-point icons from the prototype as they are.
- As little client-side JS as possible. Only the header scroll state, courses dropdown, mobile menu, review scroller and scroll-reveal need it, as small vanilla scripts or Astro islands.

**Structure**
- Real URLs from the README sitemap (`/`, `/courses`, `/courses/level-1`, …). "Contact Us" links to `/#contact`. Add redirects for `/contact` and `/courses/all`.
- `BaseLayout.astro` holds the sticky header, footer, fonts and SEO head. Components: `Header`, `MobileMenu`, `Footer`, `PageBanner`, `Button` (variants primary / secondary / sand / onPhoto / onPhotoSolid, matching the design system's Button), `Eyebrow`, `OfferCard`, `ReviewCard`, `ReviewQuote`, `IncludesBand`, `KeyPointsStrip`, `MapWatermark`.
- The five course pages (Try Freediving, Level 1, Level 2, Level 3, Coaching) share one `CoursePage` template, with content in `src/content/courses/*.md` so the owner can edit copy without touching code. Reviews go in `src/data/reviews.json`.
- Copy all text **verbatim** from the prototype: curly apostrophes, hyphenated "breath-hold", dashes exactly as written. Don't rewrite, shorten or "improve" any copy.

**Must get right (the client approved these one by one)**
- **Header:** 124px tall (92px logo, never stretched). Transparent over the home hero at the top of the page; the blurred `rgba(11,51,72,.9)` background fades in after 24px of scroll and is always on for inner pages. Inner-page banners and the home hero extend up behind the header.
- **"Freediving Courses" in the nav is a `<button>` that only opens the dropdown.** It opens on hover and stays open while the cursor moves into the panel. Click, tap, Enter or Space toggles it; Escape closes it. A click within 500ms of the hover opening it must not close it. Set `aria-expanded`. On mobile it expands its six links in place inside the full-screen menu.
- **Photo scrims are neutral dark `rgba(8,14,18,…)` or ocean-night `rgba(15,36,48,…)`, and only where the prototype uses them.** The client explicitly rejected blue or green colour casts on the hero, the Why-train photo and the offer cards. Use the exact gradient stops from the prototype.
- **Offer and course cards:** on hover only the image zooms, to 1.04 over 600ms, and the veil deepens from .18 to .30. The same effect shows while a card is pressed on touch. The cards themselves never move.
- **Scroll reveal:** fade in and rise 18px over 700ms, easing `cubic-bezier(.22,.68,.24,1)`, with an 80ms stagger in grids. Use IntersectionObserver. Content must be visible without JS. `prefers-reduced-motion` turns off all motion and the zoom.
- **`/#offer` and `/#contact`** scroll smoothly so the section lands directly under the sticky header, including when arriving from another page (use `scroll-margin-top`).
- **Booking:** every "Book a session" and "Contact us" button opens `https://wa.me/6285773216666` in a new tab. The Location page has one "Open in Google Maps" button (`https://maps.app.goo.gl/kozkb5j8g4gNRhdc6`) and a Google Maps embed.
- **900px breakpoint:** hamburger menu, and every two-column split collapses to one column. Check 390px, 768px, 1024px and 1440px widths: no horizontal scroll, no clipped text, tap targets at least 44px.
- **Accessibility:** a 2px aqua focus ring (`rgba(87,169,166,.55)`, 3px offset) on everything interactive. Alt text on every image, taken from the prototype. One `<h1>` per page. Semantic landmarks.

**SEO and launch**
- For every page: a `<title>`, meta description (write these in the brand's plain, calm voice, with no superlatives), an Open Graph image (the page's banner), a canonical URL, `sitemap.xml` and `robots.txt`.
- LocalBusiness / SportsActivityLocation JSON-LD with the address, phone and email from the footer.
- A favicon generated from the logo.
- Target Lighthouse scores of 90+ for performance and 100 for accessibility, best practices and SEO.

**Working method**
1. Scaffold the project and port the tokens. Build the layout, header, footer and home page first, then show me. Compare each section side by side with the prototype at desktop and mobile widths.
2. Build the course template and its five pages, then Surf Survival, Trips, Location and About.
3. Finish with a QA pass: every link, the menu on hover, touch and keyboard, scroll targets, reduced motion, the four widths above, and Lighthouse. Fix what you find and list it for me.

Ask me before changing any copy, photo, crop, colour or layout decision from the prototype. If something in the prototype looks like a bug, flag it; don't silently "fix" it.
