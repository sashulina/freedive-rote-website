# Freedive Rote — website

Marketing site for Freedive Rote, a freediving school on Nemberala Beach, Rote Island.
Built with [Astro](https://astro.build) as a static site from the approved design handoff in
`design_handoff_freedive_rote_website/`.

## Commands

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Install dependencies (Node 22+)                |
| `npm run dev`     | Local dev server at http://localhost:4321      |
| `npm run build`   | Build the static site into `dist/`             |
| `npm run preview` | Serve the built `dist/` locally                |
| `npm run check`   | Type-check the project                         |

Deploy the contents of `dist/` to any static host. Pages are built as `about.html`,
`courses/level-1.html` and so on, and are linked without trailing slashes (`/about`),
which Netlify, Cloudflare Pages and Vercel (`cleanUrls`) serve directly.

Before launch, confirm the production domain in `astro.config.mjs` (`site`). It is used for
canonical URLs, Open Graph images, `sitemap.xml` and `robots.txt`.

## Editing content

**Course pages** (Try Freediving, Level 1–3, Coaching) are one Markdown file each in
`src/content/courses/`. The file name is the URL: `level-1.md` → `/courses/level-1`.

- The frontmatter (between the `---` lines) holds the banner, badges, the
  "what is included" list, the duration line, the button label and the review quote.
- The text below the frontmatter is the intro. Separate paragraphs with a blank line.
  A line starting with `## ` becomes the intro heading (used on Try Freediving).
- Photos are referenced by path, e.g. `../../assets/images/level-1-beginner.jpg`.
  `position` is the photo's crop (CSS `object-position`), e.g. `50% 40%`.

**Reviews** on the home page come from `src/data/reviews.json`, shown in file order.
Add a review by copying an entry and changing `name` and `text`.

**Contact details** (WhatsApp, email, address, Instagram, Google Maps link) live in
`src/data/site.ts` and are used everywhere, including the footer and structured data.

Other pages are in `src/pages/`. Copy there is written directly in the page file.

## Structure

```
src/
  assets/images/      Photos (optimised to AVIF/WebP at build time)
  assets/logos/       Freedive Rote logo and partner logos
  components/         Header, MobileMenu, Footer, PageBanner, Button, Eyebrow,
                      OfferCard, ReviewCard, ReviewQuote, IncludesBand,
                      KeyPointsStrip, MapWatermark, CoursePage, ...
  content/courses/    Course page content (Markdown)
  data/               reviews.json, site.ts (contact details, nav), pages.ts (sitemap)
  layouts/            BaseLayout: head/SEO, fonts, header, footer
  pages/              One file per URL
  scripts/reveal.ts   Scroll reveal (IntersectionObserver)
  styles/tokens/      Design-system tokens, copied unchanged
  styles/global.css   Site styles and the few client-approved token overrides
public/               Favicons, manifest, _redirects
```

## Notes

- Fonts are self-hosted with `@fontsource`: Petrona 300/400 (+300 italic) and Jost 300/400.
  Headings set to weight 200 render at 300, as in the approved prototype.
- `--c-ink-muted` is overridden to `#5D7078` (from `#6B7F88`) in `global.css` so small
  labels meet WCAG AA contrast. Approved by the client.
- Client-side JavaScript is limited to the header scroll state, the courses dropdown,
  closing the mobile menu on link tap, the review scroller, card press on touch and the
  scroll reveal. The mobile menu itself uses the native popover API, and all content is
  visible without JavaScript.
- `/contact` → `/#contact` and `/courses/all` → `/courses` are redirected both by
  meta-refresh pages (any host) and by `public/_redirects` (301 on Netlify/Cloudflare).
