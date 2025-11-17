import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export async function getPatternsForForce(forceSlug: string) {
  const patterns = await getCollection('patterns');
  return patterns.filter((p) => p.data.forces.includes(forceSlug));
}

export async function getForcesForPattern(pattern: CollectionEntry<'patterns'>) {
  const allForces = await getCollection('forces');
  return allForces.filter((f) => pattern.data.forces.includes(f.data.slug));
}

export async function getStoriesForPatternSlug(patternSlug: string) {
  const stories = await getCollection('stories');
  return stories.filter((s) => (s.data.patterns || []).includes(patternSlug));
}
