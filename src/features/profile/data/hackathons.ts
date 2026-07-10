export type Hackathon = {
  id: string;
  name: string;
  date: string;
  result?: string;
  description: string;
  skills?: string[];
  repo?: string;
};

export const HACKATHONS: Hackathon[] = [
  {
    id: "monad-blitz-pune",
    name: "Monad Blitz Pune",
    date: "July 2026",
    result: "Winner",
    description:
      "Built Argus (evolved from the hackathon prototype, Penguin Protocol).",
    skills: ["AI Agents", "Web3", "Consensus Voting Engine"],
  },
  {
    id: "colosseum-frontier",
    name: "Colosseum Frontier",
    date: "May 2026",
    description:
      "Co-founded Nox Market (trading skill verification on Solana). Product has since pivoted.",
    skills: ["Solana", "Rust", "Trading Skills Verification"],
  },
  {
    id: "algorand-hack-series",
    name: "Algorand Hack Series",
    date: "April 2026",
    description:
      "Built GhostGas (zero-fee Algorand transactions sponsored by ads).",
    skills: ["Algorand", "Smart Contracts", "ARC4", "Ad-supported Gas"],
    repo: "https://github.com/shrysxs/algorand-protocol",
  },
  {
    id: "ai-bhoomi-startup-weekend",
    name: "AI Bhoomi Startup Weekend",
    date: "January 2026",
    description: "Built VoiceAds — an AI x Ads concept.",
    skills: ["AI", "LLMs", "Marketing Tech"],
  },
  {
    id: "colosseum-cypherpunk",
    name: "Colosseum Cypherpunk",
    date: "October 2025",
    description:
      "Worked with Ceminted on privacy trading / dark pools on Solana.",
    skills: ["Solana", "Privacy Trading", "Dark Pools", "Web3"],
  },
];
