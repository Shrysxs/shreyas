import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "nox-market",
    companyName: "Nox Market",
    positions: [
      {
        id: "nox-market-cofounder",
        title: "Co-Founder",
        employmentPeriod: {
          start: "04.2026",
        },
        employmentType: "Full-time",
        icon: "idea",
        description: `- Historical-market trading-skill verification platform built on Solana.
- Originated at Colosseum Frontier hackathon; product has since pivoted.
- Handling both technical and non-technical founding responsibilities.`,
        skills: [
          "Solana",
          "TypeScript",
          "Rust",
          "Next.js",
          "Smart Contracts",
          "Leadership",
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
          start: "09.2025",
          end: "03.2026",
        },
        employmentType: "Contract",
        locationType: "Remote",
        icon: "code",
        description: `- Early-stage Web3 startup (Canadian) building privacy trading and dark pools on Solana.
- Tied to Colosseum Cypherpunk, Oct 2025.`,
        skills: ["Solana", "TypeScript", "Web3", "Privacy", "Dark Pools"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "freelance-fullstack",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "06.2025",
        },
        employmentType: "Self-employed",
        icon: "code",
        description: `- Independent freelance full stack developer.`,
        skills: [
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Web3",
          "AI/LLM APIs",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];
