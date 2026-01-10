import { z, defineCollection } from 'astro:content';

/**
 * Shared Recognition schema
 */
const RecognitionSchema = z.object({
  authors: z.array(z.string()).optional(),
  citations: z.array(z.string()).optional(),
  license: z.string().optional(),
  narrative: z.string().optional(),
});

/**
 * Forces
 */
const forces = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categories: z.array(z.string()).optional(),
    relatedPatterns: z.array(z.string()).optional(),
    recognition: RecognitionSchema.optional(),
  }),
});

/**
 * Patterns
 * Frontmatter is for indexing/IA; body contains the rich pattern form
 */
const patterns = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.literal('pattern').default('pattern'),
    id: z.string(), // stable identifier, never changes once published
    title: z.string(),
    summary: z.string(), // 1-3 sentence description for cards/listings

    status: z.enum(['draft', 'tested', 'stable']).default('draft'),
    tags: z.array(z.string()).optional(), // light taxonomy for filtering
    forces: z.array(z.string()), // array of force IDs - the key bridge to Forces Registry

    related: z.array(z.string()).optional(), // links to other patterns/stories/guides
    authors: z.array(z.string()).optional(), // attribution + stewardship
    created: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),

    recognition: RecognitionSchema.optional(),
  }),
});

/**
 * Stories
 */
const stories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    body: z.string(),

    patterns: z.array(z.string()).optional(),
    forces: z.array(z.string()).optional(),

    author: z.string().optional(),
    recognition: RecognitionSchema.optional(),
  }),
});

/**
 * Guides
 * Orientation docs, how-to guides, learning paths
 */
const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z
      .enum(['orientation', 'how-to', 'learning-path'])
      .default('orientation'),
    order: z.number().optional(),

    relatedPatterns: z.array(z.string()).optional(),
    relatedForces: z.array(z.string()).optional(),
    relatedGuides: z.array(z.string()).optional(),

    status: z.enum(['draft', 'active', 'retired']).default('draft'),
    recognition: RecognitionSchema.optional(),
  }),
});

/**
 * References
 * Epistemic grounding, theory, citations, source materials
 */
const references = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z
      .enum(['theory', 'source', 'glossary', 'bibliography'])
      .default('source'),

    citation: z
      .object({
        authors: z.array(z.string()).optional(),
        year: z.string().optional(),
        publication: z.string().optional(),
        url: z.string().url().optional(),
        doi: z.string().optional(),
      })
      .optional(),

    relatedPatterns: z.array(z.string()).optional(),
    relatedForces: z.array(z.string()).optional(),

    status: z.enum(['draft', 'active', 'retired']).default('draft'),
    recognition: RecognitionSchema.optional(),
  }),
});

export const collections = {
  forces,
  patterns,
  stories,
  guides,
  references,
};
