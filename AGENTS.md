# AGENTS.md — shreyas portfolio (built on chanhdai.com)

This file is the single source of truth for the coding agent (Cursor/Claude Code/etc.)
building this portfolio. Read fully before touching code.

## 0. Origin & Attribution

This project starts as a fork/clone of [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com)
(live at chanhdai.com), built by Chánh Đại. We are keeping the **tech stack, architecture,
and structural patterns as-is** — this is a deliberate choice, not laziness. What changes
is every piece of **content, personal data, copy, and component-level styling details**
(spacing, colors, micro-interactions) so the final product is clean, crisp, and reads as
an original site, not a reskin.

**Required:** keep a small, honest attribution somewhere unobtrusive (e.g. footer or
`/about`, small text): "Design & architecture inspired by chanhdai.com by Chánh Đại."
Do not remove this. Do not copy his personal content, bio, blog posts, or registry
components verbatim — everything in section 3+ below replaces his content.

## 1. Goal

This site exists to get Shreyas hired / land freelance & co-founder-caliber opportunities.
Every section should read as evidence of real shipped work — not a template. Prioritize:
- Fast load, crisp typography, no visual clutter
- Projects presented with enough technical depth to pass a recruiter AND an engineer's eye
- Clear proof of momentum (recent hackathons, live projects, freelance work)

## 2. Tech Stack (unchanged from source repo)

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- MDX / Contentlayer-style content system for blog
- Vercel deployment
- Same SEO/JSON-LD, OG image, PWA, and analytics patterns as the original repo

Do not downgrade to Next.js 15 — match the source repo's stack exactly per the above.

## 3. Identity / Global Content

| Field | Value |
|---|---|
| Name | Shreyas |
| Title | Full Stack Developer · Web3 Developer · Smart Contract Developer |
| Location | Pune, Maharashtra, India (open to relocation & remote) |
| Email | contact.shreyashborade@gmail.com |
| GitHub | github.com/shrysxs |
| X (Twitter) | x.com/shrysxs |
| LinkedIn | linkedin.com/in/shrysxs |
| Discord | shrysxs |
| Telegram | t.me/shrysxs |
| Cal.com (book a call) | cal.com/shrysxs |
| Domain | TBD — placeholder for now, update SEO/OG metadata once finalized |

**Bio (About section):**
> Software engineer building products across AI, Web3, and modern web technologies.
> I work primarily with TypeScript, React, Next.js, and cloud-native tooling, and enjoy
> solving problems that sit at the intersection of engineering, product design, and user
> experience. Outside of coding, I'm interested in distributed systems, physics, history,
> and emerging technologies.

Use this near-verbatim; light copyediting for flow is fine, don't change meaning.

## 4. Work / Experience Timeline

Order newest first. This is separate from the Hackathons section (4b) — this is
ongoing roles/positions.

1. **Full Stack Freelancer** — 2025–Present
   Independent freelance full stack developer.
2. **Technical Co-founder — Nox Market** — May 2026–Present (originated at Colosseum Frontier hackathon; product has since pivoted)
   Historical-market trading-skill verification platform built on Solana. Handling both
   technical and non-technical founding responsibilities.
3. **Tech Team Member — Ceminted** — 2025 (tied to Colosseum Cypherpunk, Oct 2025)
   Early-stage Web3 startup (Canadian) building privacy trading and dark pools on Solana.

## 4b. Hackathons (chronological, newest first — can be its own timeline/section or merged into Work)

1. **Monad Blitz Pune** — July 2026 — **Winner**
   Built Argus (evolved from the hackathon prototype, Penguin Protocol).
2. **Colosseum Frontier** — May 2026
   Co-founded Nox Market (trading skill verification on Solana). Product has since pivoted.
3. **Algorand Hack Series** — April 2026
   Built GhostGas (zero-fee Algorand transactions sponsored by ads) — repo: `algorand-protocol`.
4. **AI Bhoomi Startup Weekend** — January 2026
   Built VoiceAds — an AI x Ads concept.
5. **Colosseum Cypherpunk** — October 2025
   Worked with Ceminted on privacy trading / dark pools on Solana.

## 5. Projects Section

**Critical: order newest → oldest by date.** Replace 100% of ncdai's projects with these.
Each project card should include: name, one-line tagline, date, tech tags, live link,
and (where available) GitHub repo link. Use the longer descriptions below for the
project detail view/expanded card; use a trimmed 1-2 line version for the compact list.

---

### 1. Argus
- **Date:** 07.2026
- **Live:** https://monad-blitz-pune-pi.vercel.app/
- **Status:** In active development — evolved from hackathon prototype
- **Description:** A decentralized AI investment syndicate. Originated as Penguin Protocol,
  built solo at Monad Blitz Pune (won the hackathon). Now being rebuilt chain-agnostic with
  five named AI agent personas and a consensus engine that debates and votes on investment
  decisions.
- **Tags:** Next.js, TypeScript, Tailwind CSS, shadcn/ui, AI Agents, Web3, Chain-agnostic

---

### 2. GhostGas (Penguin Protocol)
- **Date:** 04.2026
- **Live:** https://algorand-protocol.vercel.app/
- **Repo:** github.com/shrysxs/algorand-protocol (adjust if different)
- **Description:** Zero-fee transactions on Algorand, powered by ads. Users with 0 ALGO
  connect a wallet, watch a 5-second ad, and transact without paying gas — an autonomous
  settlement agent records the ad impression on-chain and a sponsor covers the fee via
  Algorand's native fee pooling. Four ARC4 smart contracts (Attestation, Campaign,
  Settlement, Paymaster) orchestrate a 7-step atomic settlement pipeline. Ships as an
  installable SDK (`@ghostgas/sdk`) so any Algorand dApp can integrate zero-fee UX in
  a few lines. Built for the Algorand hackathon; live on TestNet with real on-chain txns.
- **Tags:** Algorand, AlgoPy (ARC4), Next.js 16, FastAPI, Supabase/PostgreSQL, Pera Wallet,
  TypeScript, SDK, Smart Contracts, x402 Protocol

---

### 3. ReX
- **Date:** 08.2025
- **Live:** https://rex-gilt.vercel.app/
- **Description:** Terminal-styled regex playground with instant highlighting, capture
  group breakdown, and flag previews. Integrated Groq's Llama 3.3-70B for plain-English
  regex explanations and an interactive chat assistant. Fully responsive, server-side
  deployed. Open-source, built as a go-to tool for developers learning and debugging regex.
- **Tags:** Next.js, React, TypeScript, TailwindCSS, Groq API, LLMs, Regex, Open-Source, Vercel

---

### 4. Replyfy
- **Date:** 07.2025
- **Live:** https://replyify-five.vercel.app/
- **Description:** AI-powered text generation tool that transforms rough ideas into
  polished, context-aware content. Configurable persona, tone, and goal for emails,
  replies, or any text content. Features lightning-fast responses, one-click copy, a
  humanize function, temperature control, and smart caching. Clean, accessible,
  responsive UI with keyboard shortcuts and an API-ready `/api/generate` endpoint.
- **Tags:** Next.js, TypeScript, Tailwind CSS, AI, LLM API, Prompt Engineering

---

### 5. Peakfok
- **Date:** 06.2025
- **Description:** Modern social platform to plan trips, share posts, chat, and stay
  connected offline (PWA). Built with Next.js 15 App Router and TypeScript for strict
  type safety and scalable architecture. Uses Firebase for Auth, Firestore, Storage, and
  Admin APIs. Styled with Tailwind CSS and Radix UI; forms handled with React Hook Form
  + Zod. Efficient data fetching and state management via TanStack React Query.
- **Tags:** Next.js 15, TypeScript, Firebase, Tailwind CSS, Radix UI, PWA, TanStack React Query

---

### 6. VoiceAds
- **Date:** 01.2026 (AI Bhoomi Startup Weekend)
- **Live:** https://voiceads.vercel.app/
- **Description:** Most businesses collect large volumes of customer reviews, yet this
  feedback rarely makes it into their advertising — marketing ends up based on
  assumptions, producing generic ads that fail to build trust. VoiceAds transforms
  authentic customer language into high-trust, ad-ready marketing content.
- **Tags:** AI, LLMs, Ads/Martech, Next.js

*(Note: VoiceAds can live in Projects or purely under the Hackathons timeline — your call;
recommend including it in Projects too since it has a live deployed link.)*

## 6. Blog

Keep the MDX blog system fully scaffolded (content model, routing, RSS/OG image gen,
reading-time, etc.) exactly like the source repo, but ship with **zero of ncdai's posts.**
Leave it empty/ready for Shreyas to write into later — do not fake placeholder posts.

## 7. Registry / Component Showcase

Source repo uses this to showcase original shadcn-style components as an open-source
contribution. Keep the section and its infrastructure (registry.json, component preview
pages, install command copy-block, etc.) but repurpose the content as "components/tools
Shreyas has built and open-sourced." Ship empty/minimal until real components are added —
do not port over ncdai's actual components.

## 8. Visual Direction

Keep the original's minimal mono (black/white/gray) aesthetic, tight typography,
generous whitespace, and restrained motion. This is a deliberate "clean and crisp"
choice, not a placeholder — don't add a color accent unless Shreyas asks later.
Focus polish on: consistent spacing scale, sharp type hierarchy, and removing any
visual debt/inconsistency inherited from the clone.

## 9. Explicitly Out of Scope (for now)

- Resume/CV download button — skip entirely, do not add a placeholder
- Custom color theming — stick to mono per section 8
- Fabricated blog posts or registry components — leave both scaffolds empty

## 10. Build Order (recommended for the coding agent)

1. Clone repo structure, strip all of ncdai's personal content/data files
2. Wire in identity data (section 3) across metadata, hero, footer, OG image generator
3. Rebuild About + Work/Experience timeline (sections 3–4b)
4. Rebuild Projects section with data from section 5, confirm date-sort logic is newest-first
5. Verify blog + registry scaffolds compile empty/clean (no ncdai residue)
6. Add attribution line (section 0)
7. Full pass: broken links, placeholder images, favicon, OG image, metadata, sitemap
8. Lighthouse/perf pass — this site needs to load fast for recruiters clicking from a resume