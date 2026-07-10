import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "argus",
    title: "Argus",
    tagline: "Decentralized AI investment syndicate.",
    period: {
      start: "07.2026",
    },
    link: "https://monad-blitz-pune-pi.vercel.app/",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "AI Agents",
      "Web3",
      "Chain-agnostic",
    ],
    shortDescription:
      "A decentralized AI syndicate that debates and votes on investment decisions, built with five named AI agent personas.",
    description: `A decentralized AI investment syndicate. Originated as Penguin Protocol, built solo at Monad Blitz Pune (won the hackathon). Now being rebuilt chain-agnostic with five named AI agent personas and a consensus engine that debates and votes on investment decisions.`,
    isExpanded: true,
  },
  {
    id: "ghostgas",
    title: "GhostGas (Penguin Protocol)",
    tagline: "Zero-fee transactions on Algorand, powered by ads.",
    period: {
      start: "04.2026",
    },
    link: "https://algorand-protocol.vercel.app/",
    repo: "https://github.com/shrysxs/algorand-protocol",
    skills: [
      "Algorand",
      "AlgoPy (ARC4)",
      "Next.js 16",
      "FastAPI",
      "Supabase/PostgreSQL",
      "Pera Wallet",
      "TypeScript",
      "SDK",
      "Smart Contracts",
      "x402 Protocol",
    ],
    shortDescription:
      "Watch a 5-second ad to execute gas-free transactions on Algorand, powered by a 7-step atomic settlement pipeline.",
    description: `Zero-fee transactions on Algorand, powered by ads. Users with 0 ALGO connect a wallet, watch a 5-second ad, and transact without paying gas — an autonomous settlement agent records the ad impression on-chain and a sponsor covers the fee via Algorand's native fee pooling. Four ARC4 smart contracts (Attestation, Campaign, Settlement, Paymaster) orchestrate a 7-step atomic settlement pipeline. Ships as an installable SDK (\`@ghostgas/sdk\`) so any Algorand dApp can integrate zero-fee UX in a few lines. Built for the Algorand hackathon; live on TestNet with real on-chain txns.`,
    isExpanded: true,
  },
  {
    id: "voiceads",
    title: "VoiceAds",
    tagline:
      "AI tool turning customer reviews into high-trust advertising content.",
    period: {
      start: "01.2026",
    },
    link: "https://voiceads.vercel.app/",
    skills: ["AI", "LLMs", "Ads/Martech", "Next.js"],
    shortDescription:
      "Transforms authentic customer language and reviews into high-trust, ad-ready marketing copy.",
    description: `Most businesses collect large volumes of customer reviews, yet this feedback rarely makes it into their advertising — marketing ends up based on assumptions, producing generic ads that fail to build trust. VoiceAds transforms authentic customer language into high-trust, ad-ready marketing content.`,
    isExpanded: true,
  },
  {
    id: "rex",
    title: "ReX",
    tagline: "Terminal-styled regex playground with AI-powered explanations.",
    period: {
      start: "08.2025",
    },
    link: "https://rex-gilt.vercel.app/",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Groq API",
      "LLMs",
      "Regex",
      "Open-Source",
      "Vercel",
    ],
    shortDescription:
      "An interactive, terminal-themed regex playground that features AI-powered visual regex breakdowns and explanations.",
    description: `Terminal-styled regex playground with instant highlighting, capture group breakdown, and flag previews. Integrated Groq's Llama 3.3-70B for plain-English regex explanations and an interactive chat assistant. Fully responsive, server-side deployed. Open-source, built as a go-to tool for developers learning and debugging regex.`,
    isExpanded: true,
  },
  {
    id: "replyfy",
    title: "Replyfy",
    tagline:
      "AI-powered text generation tool that transforms rough ideas into polished content.",
    period: {
      start: "07.2025",
    },
    link: "https://replyify-five.vercel.app/",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AI",
      "LLM API",
      "Prompt Engineering",
    ],
    shortDescription:
      "Configurable text humanizer and generation tool featuring rapid response times, smart caching, and tone settings.",
    description: `AI-powered text generation tool that transforms rough ideas into polished, context-aware content. Configurable persona, tone, and goal for emails, replies, or any text content. Features lightning-fast responses, one-click copy, a humanize function, temperature control, and smart caching. Clean, accessible, responsive UI with keyboard shortcuts and an API-ready \`/api/generate\` endpoint.`,
    isExpanded: true,
  },
  {
    id: "peakfok",
    title: "Peakfok",
    tagline: "Modern social platform for trip planning and offline connection.",
    period: {
      start: "06.2025",
    },
    link: "https://rex-gilt.vercel.app/", // Live link placeholder if not given (we will omit it or use GitHub if no live link is specified)
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
      "A PWA social platform built for planning trips, sharing posts, and offline messaging, featuring Firebase integration.",
    description: `Modern social platform to plan trips, share posts, chat, and stay connected offline (PWA). Built with Next.js 15 App Router and TypeScript for strict type safety and scalable architecture. Uses Firebase for Auth, Firestore, Storage, and Admin APIs. Styled with Tailwind CSS and Radix UI; forms handled with React Hook Form + Zod. Efficient data fetching and state management via TanStack React Query.`,
    isExpanded: true,
  },
];
