export type HackathonLink = {
  label: string;
  href: string;
};

export type Hackathon = {
  id: string;
  name: string;
  project?: string;
  date: string;
  location?: string;
  category?: string;
  result?: string;
  description: string;
  skills?: string[];
  repo?: string;
  demo?: string;
  contract?: string;
  links?: HackathonLink[];
  logo?: string;
};

export const HACKATHONS: Hackathon[] = [
  {
    id: "monad-blitz-pune-v3",
    name: "Monad Blitz Pune V3",
    project: "Penguin Trace",
    category: "Web3 / Blockchain / Security",
    date: "November 2026",
    location: "Pune, India",
    logo: "/images/hackathons/penguin-trace.svg",
    description: `Penguin Trace is a software integrity and provenance platform designed for peer-to-peer file distribution. It combines SHA-256 file hashing, Ed25519-signed release manifests, piece-level integrity verification, release history, and a Solidity-based publisher registry deployed on Monad Testnet.

It helps users verify whether a downloaded file matches its expected software release and inspect the evidence behind its publisher authenticity and provenance.`,
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
    demo: "https://monad-v3-six.vercel.app",
    repo: "https://github.com/Shrysxs/monad-v3",
    contract:
      "https://testnet.monadscan.com/address/0xeB3Ef45368cf0A28679FC6F037295fC2607deF01",
  },
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
