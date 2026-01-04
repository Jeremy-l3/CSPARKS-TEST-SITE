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

Required keys:

- `title`: string
- `context`: string
- `problem`: string
- `forces`: string[] (references to force slugs)
- `solution`: string
- `implementation`: string

Optional keys:

- `examples`: string[]
- `patternFamily`: string
- `version`: string (default: "1.0.0")
- `status`: "draft" | "active" | "retired" (default: "draft")
- `schemaVersion`: string (default: "1.0")
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

Rules:

- Frontmatter must validate against schema in `src/content.config.ts`.
- Never add new keys without updating schema and migrating affected content.
- Optional fields should be omitted rather than left empty unless schema requires otherwise.

## "Golden tasks" (how you should proceed)

### Add a new Pattern page

- Create file in `src/content/patterns/<slug>.mdx`
- Use the pattern frontmatter template (all required keys)
- Ensure forces referenced in `forces` array exist
- Run `npm run build` to verify

### Add a new Force page

- Create file in `src/content/forces/<slug>.mdx`
- Use the force frontmatter template
- Run `npm run build` to verify

### Add a new Story page

- Create file in `src/content/stories/<slug>.mdx`
- Use the story frontmatter template
- Ensure patterns/forces referenced exist
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
