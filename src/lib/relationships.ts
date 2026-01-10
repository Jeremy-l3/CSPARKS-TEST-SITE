import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export async function getPatternsForForce(forceSlug: string) {
  const patterns = await getCollection('patterns');
  return patterns.filter((p) => p.data.forces.includes(forceSlug));
}

export async function getForcesForPattern(pattern: CollectionEntry<'patterns'>) {
  const allForces = await getCollection('forces');
  return allForces.filter((f) => pattern.data.forces.includes(f.slug));
}

export async function getStoriesForPatternSlug(patternSlug: string) {
  const stories = await getCollection('stories');
  return stories.filter((s) => (s.data.patterns || []).includes(patternSlug));
}

// Guides relationships
export async function getGuidesForPattern(patternSlug: string) {
  const guides = await getCollection('guides');
  return guides.filter((g) => (g.data.relatedPatterns || []).includes(patternSlug));
}

export async function getGuidesForForce(forceSlug: string) {
  const guides = await getCollection('guides');
  return guides.filter((g) => (g.data.relatedForces || []).includes(forceSlug));
}

// References relationships
export async function getReferencesForPattern(patternSlug: string) {
  const references = await getCollection('references');
  return references.filter((r) => (r.data.relatedPatterns || []).includes(patternSlug));
}

export async function getReferencesForForce(forceSlug: string) {
  const references = await getCollection('references');
  return references.filter((r) => (r.data.relatedForces || []).includes(forceSlug));
}

export async function getPatternsForReference(referenceSlug: string) {
  const reference = (await getCollection('references')).find((r) => r.slug === referenceSlug);
  if (!reference) return [];
  const patterns = await getCollection('patterns');
  return patterns.filter((p) => (reference.data.relatedPatterns || []).includes(p.slug));
}
