import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/* Course pages. Each Markdown file in src/content/courses/ is one page at
   /courses/<file name>. The frontmatter holds the structured parts; the body
   holds the intro text (plain paragraphs separated by a blank line, and an
   optional "## Heading" line). See "Editing content" in the root README.md. */
const photo = (image: any) =>
  z.object({
    image: image(),
    alt: z.string(),
    position: z.string().optional(),
  });

const courses = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/courses' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      eyebrow: z.string(),
      seoTitle: z.string(),
      description: z.string(),
      banner: photo(image),
      intro: z.object({
        photo: photo(image).optional(),
        badges: z.array(z.object({ label: z.string(), tone: z.enum(['sand', 'aqua', 'outline']) })),
      }),
      includes: z.object({
        eyebrow: z.string(),
        heading: z.string(),
        photo: photo(image),
        items: z.array(z.string()),
        compact: z.boolean().default(false),
        align: z.enum(['spread', 'center']).default('spread'),
      }),
      details: z.discriminatedUnion('kind', [
        z.object({ kind: z.literal('row'), label: z.string(), value: z.string() }),
        z.object({ kind: z.literal('block'), label: z.string(), text: z.string() }),
        z.object({ kind: z.literal('note'), text: z.string() }),
      ]),
      ctaLabel: z.string().default('Book a session'),
      quote: z
        .object({
          text: z.string(),
          name: z.string(),
          size: z.enum(['heading', 'medium']).default('heading'),
          maxWidth: z.number().default(26),
          paddingTop: z.string().optional(),
          paddingBottom: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = { courses };
