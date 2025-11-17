import { z, defineCollection } from 'astro:content';

/**
 * Shared Recognition schema
 */
const RecognitionSchema = z.object({
  authors: z.array(z.string()).optional(),
  citations: z.array(z.string()).optional(),
  license: z.string().optional(),
  narrative: z.string().optional()
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
    recognition: RecognitionSchema.optional()
  })
});

/**
 * Patterns
 */
const patterns = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),

    context: z.string(),
    problem: z.string(),
    forces: z.array(z.string()),
    solution: z.string(),
    implementation: z.string(),
    examples: z.array(z.string()).optional(),

    patternFamily: z.string().optional(),
    version: z.string().default('1.0.0'),
    status: z.enum(['draft', 'active', 'retired']).default('draft'),

    schemaVersion: z.string().default('1.0'),
    recognition: RecognitionSchema.optional()
  })
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
    recognition: RecognitionSchema.optional()
  })
});

export const collections = {
  forces,
  patterns,
  stories
};
