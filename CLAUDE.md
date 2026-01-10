# Claude Context — Collaborative Sparks Website Repo

## Purpose

This repo publishes the Collaborative Sparks living pattern library for healthy collaboration.

Primary goal: ship a clear, navigable, contributor-friendly library site with stable schemas, explicit provenance, and minimal drift.

## Non-goals

- Do not re-architect the site unless explicitly requested.
- Do not rename or redesign frontmatter keys, directory structure, or IA conventions without approval.
- Do not rewrite large bodies of content for "style" or "clarity" unless asked.
- Do not introduce governance decisions, canonical interpretations, or final judgments through edits.

## Scope of authority

Claude may:

- Edit content, components, schemas, and navigation when explicitly requested.
- Propose alternatives when meaningful tradeoffs exist.
- Add TODOs, notes, or open questions where context is missing.
- Suggest improvements that preserve intent, scope, and IA conventions.

Claude may not:

- Make governance or policy decisions.
- Declare patterns, forces, or stories "canonical," "final," or authoritative.
- Introduce new frontmatter keys, IA structures, or conceptual categories without explicit instruction.
- Resolve ambiguity by inventing certainty.

## Core values (operationalized)

- Prefer clarity and provenance over authority.
- Treat content as living: add notes or open questions rather than asserting certainty.
- Preserve contributor intent and voice; avoid normalization for uniformity.
- Optimize for learning, reuse, and contributor orientation.

## Tone to avoid

Avoid:

- Definitive or universal claims ("always," "best practice," "the right way") unless explicitly justified.
- False authority or instructional tone on pages meant to be descriptive or exploratory.
- Marketing or promotional language.
- Rewriting contributor voice solely to enforce stylistic consistency.

## Provenance rule

When modifying existing content:

- Preserve original intent, meaning, and uncertainty.
- Do not erase dissent, ambiguity, or provisional framing.
- Retain attribution and references where they exist.
- Prefer additive clarification over replacement.

## Repo map

- Content:
  - patterns: `src/content/patterns/`
  - stories: `src/content/stories/`
  - forces: `src/content/forces/`
  - guides: `src/content/guides/`
  - references: `src/content/references/`
- Schemas:
  - frontmatter schemas: `src/content.config.ts` (Zod schemas for all content types)
- Navigation / index:
  - `src/pages/` (file-based routing)
  - `src/pages/index.astro` (homepage)
  - `src/pages/patterns/` (pattern listing and detail pages)
  - `src/pages/forces/` (force listing and detail pages)
  - `src/pages/stories/` (story listing and detail pages)
- Components / layouts:
  - `src/components/` (UI components, cards)
  - `src/layouts/BaseLayout.astro` (main page layout)
- Scripts / utilities:
  - `scripts/sync-authoring.mjs` (syncs content from authoring folder)
  - `src/lib/` (relationship helpers, localStorage utilities)
- Tests:
  - `tests/` (Vitest test files)
  - `tests/schemas.test.ts` (schema validation tests)
- Authoring workspace:
  - `../../csparks-authoring/` (Obsidian vault for content drafting)

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Sync from authoring: `npm run sync:authoring`
- Dev with sync: `npm run dev:authoring`
- Lint: `npm run lint` (runs `astro check` + Prettier check)
- Lint fix: `npm run lint:fix` (auto-format with Prettier)
- Test: `npm run test` (runs Vitest once)
- Test watch: `npm run test:watch` (runs Vitest in watch mode)

## Output expectations for Claude

When making changes:

1. State intent in 1–2 lines.
2. List files you will change or create.
3. Prefer minimal diffs; avoid unrelated refactors.
4. Provide commands to run locally.
5. If uncertain, add TODOs and explain assumptions instead of inventing structure.

## Frontmatter rules

### pattern

Frontmatter is for indexing/IA; the MDX body contains the rich pattern form (Context, Problem, Forces at Play, Solution, Implementation, Examples, Failure Modes, Recognition).

Required keys:

- `type`: "pattern" (literal, has default)
- `id`: string (stable identifier, never changes once published)
- `title`: string
- `summary`: string (1-3 sentence description for cards/listings)
- `forces`: string[] (array of force IDs - the key bridge to Forces Registry)

Optional keys:

- `status`: "draft" | "tested" | "stable" (default: "draft")
- `tags`: string[] (light taxonomy for filtering)
- `related`: string[] (links to other pattern/story/guide IDs)
- `authors`: string[] (attribution + stewardship)
- `created`: date
- `updated`: date
- `recognition`: { authors?, citations?, license?, narrative? }

### story

Required keys:

- `title`: string
- `summary`: string
- `body`: string

Optional keys:

- `patterns`: string[] (references to pattern slugs)
- `forces`: string[] (references to force slugs)
- `author`: string
- `recognition`: { authors?, citations?, license?, narrative? }

### force

Required keys:

- `title`: string
- `description`: string

Optional keys:

- `categories`: string[]
- `relatedPatterns`: string[]
- `recognition`: { authors?, citations?, license?, narrative? }

### guide

Required keys:

- `title`: string
- `summary`: string

Optional keys:

- `category`: "orientation" | "how-to" | "learning-path" (default: "orientation")
- `order`: number
- `relatedPatterns`: string[]
- `relatedForces`: string[]
- `relatedGuides`: string[]
- `status`: "draft" | "active" | "retired" (default: "draft")
- `recognition`: { authors?, citations?, license?, narrative? }

### reference

Required keys:

- `title`: string
- `summary`: string

Optional keys:

- `category`: "theory" | "source" | "glossary" | "bibliography" (default: "source")
- `citation`: { authors?, year?, publication?, url?, doi? }
- `relatedPatterns`: string[]
- `relatedForces`: string[]
- `status`: "draft" | "active" | "retired" (default: "draft")
- `recognition`: { authors?, citations?, license?, narrative? }

Rules:

- Frontmatter must validate against schema in `src/content.config.ts`.
- Never add new keys without updating schema and migrating affected content.
- Optional fields should be omitted rather than left empty unless schema requires otherwise.

## "Golden tasks" (how you should proceed)

### Add a new Pattern page

1. Create file in `src/content/patterns/<slug>.mdx`
2. Add frontmatter with required keys (id, title, summary, forces)
3. Write MDX body with pattern sections
4. Create force entries for any new forces referenced
5. Run `npm run build` to verify

**Example pattern file** (`src/content/patterns/blurry.mdx`):

```mdx
---
type: pattern
id: blurry
title: Blurry
summary: >
  Adopt a blurry stance: engage with networks through double vision that allows
  you to act within a chosen frame while remaining open to shifting realities.
status: draft
tags:
  - learners-stance
  - complexity
forces:
  - complexity-resists-simplification
  - frameworks-become-brittle
  - acting-changes-the-network
related:
  - collaborative-reflection
  - itchy
authors:
  - Collaborative Sparks community
created: 2025-06-13
---

## Context

[Describe the situation where this pattern applies...]

## Problem / Tension

[Describe what goes wrong without this pattern...]

## Forces at Play

- **Force Name**: Description of how this force operates
- **Another Force**: Description...

## Solution

**[Core solution statement in bold.]**

This includes:
- Specific practice or behavior
- Another practice...

## Implementation

- Concrete step to apply this pattern
- Another step...

## Examples

- A specific example of this pattern in action
- Another example...

## Failure Modes

- **Failure mode name**: How this pattern can go wrong
- **Another failure**: Description...

## Recognition

You'll know it's working when:
- Observable sign of success
- Another sign...

## Related Patterns

- [[Related Pattern Name]]
- [[Another Related Pattern]]
```

### Add a new Force page

Forces are typically derived from patterns—extracted from the "Forces at Play" section. When adding patterns, create force entries for any new force slugs referenced.

1. Create file in `src/content/forces/<slug>.mdx`
2. Add frontmatter (title, description, categories, relatedPatterns)
3. Write MDX body with additional prose (renders below description)
4. Run `npm run build` to verify

**Example force file** (`src/content/forces/complexity-resists-simplification.mdx`):

```mdx
---
title: Complexity Resists Simplification
description: >
  Complexity resists simplification but demands action—we cannot wait for
  full understanding, yet our simplified models inevitably miss crucial dynamics.
categories:
  - complexity
  - tension
relatedPatterns:
  - blurry
  - clumsy
---

The most important systems are too complex to fully model, yet we must still
act within them. This tension between the need for actionable understanding
and the irreducible complexity of living systems is fundamental to all
network practice.
```

**Workflow note**: When importing a batch of patterns:
1. Create all pattern files first
2. Extract force slugs from all patterns' `forces` arrays
3. Create force entries for each unique slug
4. Run build to verify all references resolve

### Add a new Story page

- Create file in `src/content/stories/<slug>.mdx`
- Use the story frontmatter template
- Ensure patterns/forces referenced exist
- Run `npm run build` to verify

### Add a new Guide page

- Create file in `src/content/guides/<slug>.mdx`
- Use the guide frontmatter template
- Set appropriate category (orientation, how-to, learning-path)
- Run `npm run build` to verify

### Add a new Reference page

- Create file in `src/content/references/<slug>.mdx`
- Use the reference frontmatter template
- Set appropriate category (theory, source, glossary, bibliography)
- Include citation object if applicable
- Run `npm run build` to verify

### Update schema + migrate content

- Update schema in `src/content.config.ts`
- Update all impacted MDX frontmatter
- Update any pages that depend on changed keys
- Note backward compatibility concerns explicitly
- Run `npm run build` to verify

### Navigation or IA updates

- Preserve existing IA concepts and naming
- Avoid renaming or collapsing categories without instruction
- Update all affected links and indexes
- Verify no broken internal paths

## When in doubt

1. Prefer the smallest change that improves clarity.
2. Prefer adding notes or TODOs over inventing structure.
3. Prefer proposing 2–3 options over choosing one.
4. Inspect the repo before asking for missing context.
5. Escalate uncertainty explicitly rather than silently resolving it.

## Definition of done (checklist)

- [ ] Lint passes (`npm run lint`)
- [ ] Tests pass (`npm run test`)
- [ ] Build passes (`npm run build`)
- [ ] No broken internal links
- [ ] Frontmatter validates against schema
- [ ] Changes are minimal, scoped, and explained
- [ ] Provenance and intent are preserved
