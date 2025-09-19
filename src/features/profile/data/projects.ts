import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "peakfolk",
    title: "Peakfolk",
    period: {
      start: "06.2025",
    },
    link: "https://github.com/Shrysxs/peakfolksocial.git",
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
- Uses Firebase for Auth, Firestore, Storage, and Admin APIs.
- Styled with Tailwind CSS and Radix UI; forms handled with React Hook Form + Zod.
- Efficient data fetching and state management via TanStack React Query.`,
    isExpanded: true,
  },
  {
    id: "rex",
    title: "ReX – Terminal-Style Regex Playground + AI Tutor",
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
    description: `Built a terminal-style regex playground with instant highlighting, capture groups, and flag previews.
Integrated Groq LLM (Llama 3.3-70B) for plain-English regex explanations and an interactive chat assistant.
Designed with Next.js + TailwindCSS, fully responsive and deployed server-side on Vercel.
Optimized for developer experience: copyable matches, error handling, and polished terminal vibes.
Open-source project, designed to be a go-to tool for developers learning and debugging regex.`,
    isExpanded: true,
  },
  {
    id: "replyify",
    title: "Replyify",
    period: {
      start: "07.2025",
    },
    link: "https://replyify-five.vercel.app",
    skills: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Groq AI API",
      "Vercel",
    ],
    description: `- AI-powered text generation tool: transforms rough ideas into polished, context-aware content.
- Configurable persona, tone, and goal for emails, replies, or any text content.
- Features lightning-fast responses, one-click copy, humanize function, temperature control, and smart caching.
- Clean, accessible, responsive UI with keyboard shortcuts and API-ready /api/generate endpoint.`,
    logo: "/logos/replyify.svg",
    isExpanded: true,
  },
];
