🌞 Collaborative Sparks
A Solarpunk Pattern Language for Living Collaboration

CSparks is a living, open, solarpunk-inspired pattern library for healthy collaboration.
It collects patterns, forces, and stories emerging from real practice in regenerative communities, DAOs, cooperatives, and impact networks.

Built with Astro 5, TailwindCSS v4, and MDX, this repository is the canonical home for the CSparks pattern language and future community knowledge infrastructure.

🌱 Purpose

The CSparks pattern library exists to help communities:

Sense the underlying forces that shape collaborative behavior

Name reusable patterns that help people organize, relate, and create together

Share stories that reveal the human texture behind these patterns

Invite stewardship, literacy, and narrative meaning across a decentralized network

Grow a solarpunk future in the cracks of the old world by cultivating practices that nourish life, agency, and shared power

This repository is the first implementation of the CSparks website and content architecture — a home for the emerging pattern language of living collaboration.

🌐 Project Vision

The CSparks pattern library is part of the broader ODIN ecosystem, and contributes to:

🟢 Healthy collaboration infrastructures

🔥 Open pattern languages

🌿 Living governance systems (Sociocracy + Source principles + network science)

💠 Commons stewardship models (future Hestia integration)

🎮 Solarpunk RPG-like pathways for contributor engagement

🔗 Open standard schemas that may eventually anchor on-chain

Long-term, this repository will expand into:

A pattern forge (interactive creation/gamification)

A stewardship webring

Contributor profiles & quests

Community-defined pattern families

Open metadata standards for cross-network use

This is just the beginning.

✨ Features (Current)
📘 Patterns, Forces, Stories — fully structured

MDX content collections via Astro

Zod-validated schemas for consistent metadata

Relationship mapping (pattern ↔ force ↔ story)

Recognition metadata for authors, influences, licenses

🎨 Solarpunk UI Theme

TailwindCSS v4 with custom CSparks palette

Soft-card UI components

Clean layouts + typography

Space for future solarpunk-RPG UI layers

⚡ Astro 5 Engine

Static site

Blazing-fast dev experience

Hot reload

Easy deploy on Netlify/Vercel

📁 Clear Architecture
src/
  content/
    patterns/
    forces/
    stories/
  components/
  layouts/
  lib/
  pages/
  styles/

🧩 Extensible & Future-Proof

Optional Obsidian integration planned

Designed for on-chain metadata evolution

Room for pattern families, quests, contributor pathways

💻 Development Setup

Clone the repo:

git clone https://github.com/<your-username>/csparks-astro.git
cd csparks-astro


Install dependencies:

npm install


Start the dev server:

npm run dev


Then open:

http://localhost:4321/


You should see the solarpunk CSparks homepage with navigation to:

/patterns

/forces

/stories

🧩 Content Structure

Content lives in src/content/* using MDX files.

🌬 Forces

Atomic tensions, attractors, and landscape features.

Example frontmatter:

---
title: Presence Before Performance
description: >
  Attend to the group’s quality of presence before focusing on output.
categories:
  - grounding
  - collaboration
relatedPatterns:
  - pulse-of-the-circle
recognition:
  authors:
    - "Collaborative Sparks community"
---

🔥 Patterns

Practical solutions to recurring problems in collaborative life.

---
title: Pulse of the Circle
context: >
  Circles meet regularly to synchronize.
problem: >
  Meetings drift into abstraction and lose the human pulse.
forces:
  - presence-before-performance
solution: >
  Add a recurring “pulse” ritual to anchor presence.
implementation: >
  Begin each meeting with bounded check-ins.
examples:
  - "10-minute check-in round at start of meetings"
patternFamily: "Collaborative Awareness"
status: "draft"
recognition:
  authors:
    - "Collaborative Sparks community"
---

📖 Stories

Narrative expressions that show forces + patterns in real life.

---
title: A Small Circle Finds Its Pulse
summary: >
  A working group rediscovers energy through a simple pulse ritual.
patterns:
  - pulse-of-the-circle
forces:
  - presence-before-performance
author: "CSparks Storyteller Node"
recognition:
  narrative: >
    A composite of many circles experimenting with pulse practices.
---

🤝 Contributing

CSparks is a living library. Contributions of all kinds are welcome:

🟢 Pattern contributions

Help encode collective wisdom into patterns.

🌬 Force discovery

Identify underlying dynamics and tensions.

📖 Stories

Share lived experiences that anchor the pattern language.

🎨 UI / design contributions

Help shape the solarpunk aesthetic and information architecture.

🧠 Governance / stewardship patterns

Add insights from S3, Source work, network science, and regenerative economics.

A full contributor guide (including Pattern Templates, Force Templates, Story Templates) will be added soon.

🌍 Roadmap
v0.2 — Contributor Templates

Pattern, Force, Story template MDX files

/contribute page with instructions

Improved content validation

v0.3 — Pattern Families & Browsing

Tags, categories, filtering

Better discovery UX

v0.4 — Obsidian Integration (optional)

Wikilink support

Live sync for MDX

v0.5 — Solarpunk Quest Layer

Pattern forging quests

Contributor XP

Small “creator economy” loops

Healthy reward systems

v1.0 — Open Standard Stewardship

Hestia integration

On-chain metadata anchors

Pattern registry

Federated webring

🧡 Recognition

The CSparks pattern library is inspired by:

Christopher Alexander’s Pattern Language

Sociocracy 3.0

Source principles (Peter Koenig, Tom Nixon)

Facilitators, stewards, and communities of practice across the ODIN ecosystem

And especially:

Everyone who keeps showing up for the work of healthy collaboration.
This library is a gift grown from your stories, tensions, and experiments.

📜 License

Content (patterns, forces, stories) is shared under:
Creative Commons Attribution–ShareAlike (CC BY-SA 4.0)

Code is MIT licensed unless otherwise noted.

🌞 Closing

CSparks is a collaborative garden in a solarpunk world —
a living library tended not by experts,
but by anyone brave enough to show up,
pay attention, and share what they’re learning.

Thanks for being part of this.
Let’s grow this together. 🌿✨