import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "argus",
    title: "Argus",
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
    description: `- Decentralized AI investment syndicate; originated as Penguin Protocol at Monad Blitz Pune (won the hackathon).
- Now being rebuilt chain-agnostic with five named AI agent personas and a consensus engine that debates and votes on investment decisions.
- Built solo; in active development.`,
    isExpanded: true,
  },
  {
    id: "ghostgas",
    title: "GhostGas",
    period: {
      start: "04.2026",
    },
    link: "https://algorand-protocol.vercel.app/",
    skills: [
      "Algorand",
      "AlgoPy (ARC4)",
      "Next.js 16",
      "FastAPI",
      "Supabase/PostgreSQL",
      "TypeScript",
      "SDK",
      "Smart Contracts",
    ],
    description: `- Zero-fee transactions on Algorand, powered by ads. Users watch a 5-second ad and transact without paying gas.
- Four ARC4 smart contracts orchestrate a 7-step atomic settlement pipeline.
- Ships as an installable SDK (\`@ghostgas/sdk\`) for any Algorand dApp.
- Built for the Algorand hackathon; live on TestNet with real on-chain transactions.`,
    isExpanded: true,
  },
  {
    id: "voiceads",
    title: "VoiceAds",
    period: {
      start: "01.2026",
    },
    link: "https://voiceads.vercel.app/",
    skills: ["AI", "LLMs", "Ads/Martech", "Next.js"],
    description: `- Transforms authentic customer language into high-trust, ad-ready marketing content.
- Built at AI Bhoomi Startup Weekend (January 2026).`,
    isExpanded: true,
  },
  {
    id: "rex",
    title: "ReX",
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
    description: `- Terminal-styled regex playground with instant highlighting, capture group breakdown, and flag previews.
- Integrated Groq's Llama 3.3-70B for plain-English regex explanations and an interactive chat assistant.
- Fully responsive, server-side deployed; open-source.`,
    isExpanded: true,
  },
  {
    id: "replyfy",
    title: "Replyfy",
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
    description: `- AI-powered text generation tool that transforms rough ideas into polished, context-aware content.
- Configurable persona, tone, and goal for emails, replies, or any text content.
- Features lightning-fast responses, one-click copy, humanize function, temperature control, and smart caching.`,
    isExpanded: true,
  },
  {
    id: "peakfok",
    title: "Peakfok",
    period: {
      start: "06.2025",
    },
    link: "https://github.com/Shrysxs/peakfolksocial",
    skills: [
      "Next.js 15",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Radix UI",
      "PWA",
      "TanStack React Query",
    ],
    description: `- Modern social platform to plan trips, share posts, chat, and stay connected offline (PWA).
- Built with Next.js 15 App Router and TypeScript for strict type safety and scalable architecture.
- Uses Firebase for Auth, Firestore, Storage, and Admin APIs.`,
    isExpanded: true,
  },
];
