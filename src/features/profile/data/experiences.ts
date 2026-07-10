import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "nox-market",
    companyName: "Nox Market",
    positions: [
      {
        id: "nox-market-cofounder",
        title: "Technical Co-founder",
        employmentPeriod: {
          start: "05.2026",
        },
        employmentType: "Full-time",
        icon: "idea",
        description: `- Historical-market trading-skill verification platform built on Solana.
- Originated at the Colosseum Frontier hackathon; product has since pivoted.
- Handling both technical and non-technical founding responsibilities.`,
        skills: [
          "Solana",
          "TypeScript",
          "Next.js",
          "Rust",
          "Smart Contracts",
          "Product",
          "Leadership",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "freelance-fullstack",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `- Independent freelance full stack developer.
- Building web apps, Web3 integrations, and AI-powered tools for clients.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "Node.js",
          "Web3",
          "AI/LLM APIs",
          "Vercel",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "ceminted",
    companyName: "Ceminted",
    positions: [
      {
        id: "ceminted-tech",
        title: "Tech Team Member",
        employmentPeriod: {
          start: "10.2025",
          end: "11.2025",
        },
        employmentType: "Contract",
        icon: "code",
        description: `- Early-stage Web3 startup (Canadian) building privacy trading and dark pools on Solana.
- Contributed as tech team during the Colosseum Cypherpunk hackathon.`,
        skills: [
          "Solana",
          "TypeScript",
          "Smart Contracts",
          "Web3",
          "Privacy",
        ],
      },
    ],
  },
];
