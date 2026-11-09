import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "nony-money",
    title: "Nony.money",
    tagline: "Private swaps and withdrawals on Ethereum, run from a TEE.",
    period: {
      start: "11.2026",
    },
    link: "https://nony.money",
    repo: "https://github.com/Apurvborhade/nony-money",
    skills: [
      "TypeScript",
      "Fastify",
      "EIP-712",
      "viem",
      "Zod",
      "AWS Nitro (TEE)",
      "Uniswap Trading API",
      "Ethereum Sepolia",
    ],
    shortDescription:
      "Deposit ETH, swap on price conditions through Uniswap, and withdraw to a fresh wallet, paid from pooled custody addresses so nothing on-chain links the two.",
    description: `Sending ETH to a new wallet links the two addresses, and privacy-pool contracts are themselves visible on-chain. With Nony.money, users deposit to a custody address and their balance becomes a private entry in a ledger held inside a trusted execution environment. Swaps and withdrawals leave from a different address in the pool, so on-chain they look like ordinary transfers and Uniswap swaps.

Built as Cloakroom by a team of four at ETHGlobal Mumbai. I owned the API and accounting layer: API routes and shared protocol types, EIP-712 signed requests and session auth, the encrypted hash-chained journal, ledger balance reservations, and the intent lifecycle. Teammates owned TEE custody, on-chain execution and the frontend. Running on Sepolia; trust rests on the TEE and a single operator rather than zero-knowledge proofs.`,
    isExpanded: true,
  },
  {
    id: "penguin-trace",
    title: "Penguin Trace",
    tagline: "Verify that a downloaded file matches its publisher's release.",
    period: {
      start: "10.2026",
    },
    link: "https://monad-v3-six.vercel.app",
    repo: "https://github.com/Shrysxs/monad-v3",
    contract:
      "https://testnet.monadscan.com/address/0xeB3Ef45368cf0A28679FC6F037295fC2607deF01",
    skills: [
      "Next.js",
      "TypeScript",
      "Solidity",
      "Foundry",
      "Monad Testnet",
      "viem / wagmi",
      "SHA-256",
      "Ed25519",
    ],
    shortDescription:
      "In-browser file hashing, Ed25519-signed release manifests, and a publisher registry on Monad Testnet that tracks keys, versions and revocations.",
    description: `When you download an installer, there is rarely a direct way to prove it matches what the publisher built, that the signing key was authorized, or that the release hasn't been revoked. Penguin Trace checks all three and returns one of seven explicit verdicts instead of a vague pass or fail.

Files are hashed locally with the Web Crypto API and never uploaded, and piece-level hashes pinpoint which byte ranges were altered. Release manifests are canonicalized (RFC 8785) and checked against detached Ed25519 signatures, and a Solidity registry on Monad Testnet records publisher keys, version lineage and revocations. Built at Monad Blitz Pune V3.`,
    isExpanded: true,
  },
  {
    id: "argus",
    title: "Argus",
    tagline: "AI investment committee with an on-chain audit trail.",
    period: {
      start: "07.2026",
    },
    link: "https://argus-web-beta.vercel.app",
    repo: "https://github.com/Shrysxs/Argus",
    skills: [
      "Next.js",
      "TypeScript",
      "Turborepo",
      "Prisma",
      "Supabase/PostgreSQL",
      "Solidity",
      "Monad Testnet",
      "LLMs",
    ],
    shortDescription:
      "Five analytical frameworks evaluate an asset in parallel; a deterministic engine weighs their votes and seals the decision on Monad Testnet.",
    description: `Asking a single AI model whether to buy gives an opaque answer. Argus runs five independent frameworks (value, momentum, macro, on-chain and risk) on the same market snapshot, then a deterministic, confidence-weighted consensus returns BUY, SELL or HOLD with the reasoning behind each vote.

Market snapshots, prompt versions and outputs are SHA-256 hashed, and each decision is recorded to a registry contract on Monad Testnet. Signals are priced from the Shannon entropy of the vote, and credits are billed through PostgreSQL row locks to prevent overdrafts. Argus grew out of Penguin Protocol, my winning project at Monad Blitz Pune.`,
    isExpanded: true,
  },
  {
    id: "ghostgas",
    title: "GhostGas",
    tagline: "Zero-fee transactions on Algorand, powered by ads.",
    period: {
      start: "04.2026",
    },
    link: "https://algorand-protocol.vercel.app",
    repo: "https://github.com/Shrysxs/algorand-protocol",
    skills: [
      "Algorand",
      "AlgoPy (ARC4)",
      "Next.js 16",
      "FastAPI",
      "Supabase/PostgreSQL",
      "Pera Wallet",
      "TypeScript",
      "x402 Protocol",
    ],
    shortDescription:
      "Users with 0 ALGO watch a 5-second ad and transact for free, while a sponsor covers the fee through Algorand's native fee pooling.",
    description: `New users can't do anything on-chain without tokens for fees. With GhostGas, a user with 0 ALGO connects Pera Wallet, watches a 5-second ad and sends their transaction: an agent records the ad impression on-chain and a sponsor pays the fee. The advertiser pays, the publisher earns 80% and the protocol takes 20%.

Four ARC4 contracts (Attestation, Campaign, Settlement, Paymaster) run a 7-step atomic settlement, backed by a FastAPI service on Supabase/PostgreSQL. It ships as an SDK (\`@ghostgas/sdk\`) so any Algorand dApp can offer zero-fee transactions in a few lines. Built for the Algorand Hack Series; live on TestNet.`,
    isExpanded: true,
  },
  {
    id: "voiceads",
    title: "VoiceAds",
    tagline: "Turn customer reviews into ad copy.",
    period: {
      start: "01.2026",
    },
    link: "https://voiceads.vercel.app",
    repo: "https://github.com/Shrysxs/aiboomi-last-minute",
    skills: [
      "Next.js 16",
      "TypeScript",
      "Groq API",
      "LLMs",
      "Prompt Engineering",
      "Martech",
    ],
    shortDescription:
      "Paste a business's reviews and get text ads, marketing copy or JSON built from the phrases customers actually use.",
    description: `Most businesses collect large volumes of customer reviews, but that feedback rarely reaches their advertising, so ads end up generic and built on assumptions. VoiceAds turns authentic customer language into ad-ready content.

It extracts recurring phrases, benefits and trust signals from pasted reviews, then generates short-form ads, campaign copy or structured JSON for a chosen tone and goal. A single-prompt design on Groq keeps generation fast and less prone to hallucination. Built at AI Bhoomi Startup Weekend.`,
    isExpanded: true,
  },
  {
    id: "rex",
    title: "ReX",
    tagline: "Terminal-styled regex playground with AI-powered explanations.",
    period: {
      start: "08.2025",
    },
    link: "https://rex-gilt.vercel.app",
    repo: "https://github.com/Shrysxs/ReX",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Groq API",
      "LLMs",
      "Regex",
    ],
    shortDescription:
      "Live match highlighting and capture-group breakdowns, plus plain-English explanations from Llama 3.3 70B.",
    description: `Regex is easy to write and hard to read back. ReX is a terminal-styled playground: type a pattern and a test string to see matches highlighted instantly, capture groups broken down, and flags previewed.

An AI panel backed by Groq's Llama 3.3 70B explains patterns in plain English and answers follow-up questions in a chat. Built with Next.js and TypeScript, fully responsive, and open source.`,
    isExpanded: true,
  },
  {
    id: "replyify",
    title: "Replyify",
    tagline: "Turn rough ideas into polished, context-aware text.",
    period: {
      start: "07.2025",
    },
    link: "https://replyify-five.vercel.app",
    repo: "https://github.com/Shrysxs/replyify",
    skills: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Groq API",
      "LLMs",
      "Prompt Engineering",
    ],
    shortDescription:
      "Pick a persona, tone and goal, and get an email, reply or post that fits, generated with Groq's Llama models.",
    description: `Rewriting the same idea for an investor, a friend or a hiring manager takes time. Replyify takes a rough draft and rewrites it for a chosen persona, tone and goal, for emails, replies or any other text.

It runs on Groq's Llama models with temperature control, a humanize pass, one-click copy and keyboard shortcuts. An LRU cache speeds up repeat requests, and a standalone \`/api/generate\` endpoint lets other apps use it.`,
    isExpanded: true,
  },
  {
    id: "peakfolk",
    title: "Peakfolk",
    tagline: "Social app for planning trips with friends.",
    period: {
      start: "06.2025",
    },
    link: "https://peakfolksocial.vercel.app",
    repo: "https://github.com/Shrysxs/peakfolksocial",
    skills: [
      "Next.js 15",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Radix UI",
      "PWA",
      "TanStack React Query",
    ],
    shortDescription:
      "Plan trips, share posts and chat with friends, with offline support as an installable PWA.",
    description: `Peakfolk is a social platform built around trips: plan with friends, share posts and chat in one place, and keep using it offline as an installable PWA.

Built on the Next.js 15 App Router with strict TypeScript. Firebase handles auth, Firestore, storage and admin API routes; TanStack React Query manages data fetching; forms use React Hook Form with Zod; and the UI is built with Tailwind CSS and Radix UI.`,
    isExpanded: true,
  },
];
