import { describe, it, expect } from 'vitest';
import { z } from 'astro/zod';

/**
 * These schemas mirror the ones in src/content.config.ts
 * for testing frontmatter validation independently.
 */

const RecognitionSchema = z.object({
  authors: z.array(z.string()).optional(),
  citations: z.array(z.string()).optional(),
  license: z.string().optional(),
  narrative: z.string().optional(),
});

const ForceSchema = z.object({
  title: z.string(),
  description: z.string(),
  categories: z.array(z.string()).optional(),
  relatedPatterns: z.array(z.string()).optional(),
  recognition: RecognitionSchema.optional(),
});

const PatternSchema = z.object({
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
  recognition: RecognitionSchema.optional(),
});

const StorySchema = z.object({
  title: z.string(),
  summary: z.string(),
  body: z.string(),
  patterns: z.array(z.string()).optional(),
  forces: z.array(z.string()).optional(),
  author: z.string().optional(),
  recognition: RecognitionSchema.optional(),
});

describe('Force Schema', () => {
  it('validates a minimal force', () => {
    const result = ForceSchema.safeParse({
      title: 'Test Force',
      description: 'A test description',
    });
    expect(result.success).toBe(true);
  });

  it('validates a force with all fields', () => {
    const result = ForceSchema.safeParse({
      title: 'Test Force',
      description: 'A test description',
      categories: ['category1', 'category2'],
      relatedPatterns: ['pattern-1', 'pattern-2'],
      recognition: {
        authors: ['Author Name'],
        license: 'CC-BY-SA-4.0',
      },
    });
    expect(result.success).toBe(true);
  });

  it('rejects a force without title', () => {
    const result = ForceSchema.safeParse({
      description: 'A test description',
    });
    expect(result.success).toBe(false);
  });
});

describe('Pattern Schema', () => {
  it('validates a minimal pattern', () => {
    const result = PatternSchema.safeParse({
      title: 'Test Pattern',
      context: 'Test context',
      problem: 'Test problem',
      forces: ['force-1'],
      solution: 'Test solution',
      implementation: 'Test implementation',
    });
    expect(result.success).toBe(true);
  });

  it('applies default values', () => {
    const result = PatternSchema.parse({
      title: 'Test Pattern',
      context: 'Test context',
      problem: 'Test problem',
      forces: ['force-1'],
      solution: 'Test solution',
      implementation: 'Test implementation',
    });
    expect(result.version).toBe('1.0.0');
    expect(result.status).toBe('draft');
    expect(result.schemaVersion).toBe('1.0');
  });

  it('rejects invalid status', () => {
    const result = PatternSchema.safeParse({
      title: 'Test Pattern',
      context: 'Test context',
      problem: 'Test problem',
      forces: ['force-1'],
      solution: 'Test solution',
      implementation: 'Test implementation',
      status: 'invalid',
    });
    expect(result.success).toBe(false);
  });

  it('rejects pattern without forces array', () => {
    const result = PatternSchema.safeParse({
      title: 'Test Pattern',
      context: 'Test context',
      problem: 'Test problem',
      solution: 'Test solution',
      implementation: 'Test implementation',
    });
    expect(result.success).toBe(false);
  });
});

describe('Story Schema', () => {
  it('validates a minimal story', () => {
    const result = StorySchema.safeParse({
      title: 'Test Story',
      summary: 'Test summary',
      body: 'Test body content',
    });
    expect(result.success).toBe(true);
  });

  it('validates a story with references', () => {
    const result = StorySchema.safeParse({
      title: 'Test Story',
      summary: 'Test summary',
      body: 'Test body content',
      patterns: ['pattern-1', 'pattern-2'],
      forces: ['force-1'],
      author: 'Test Author',
    });
    expect(result.success).toBe(true);
  });
});
