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
    id: "ethglobal-mumbai",
    name: "ETHGlobal Mumbai",
    date: "November 2026",
    description:
      "Built Cloakroom (now Nony.money) in a team of four: a privacy-preserving intent execution system where a TEE holds custody keys and a private ledger. Owned the API and accounting layer — EIP-712 authenticated endpoints, shared protocol contracts, the journal and ledger, balance reservations, and the intent lifecycle.",
    skills: ["EIP-712", "Fastify", "TEE", "Uniswap", "Ethereum"],
    repo: "https://github.com/Apurvborhade/nony-money",
  },
  {
    id: "monad-blitz-pune-v3",
    name: "Monad Blitz Pune V3",
    date: "November 2026",
    description:
      "Built Penguin Trace (cryptographic software integrity and provenance platform on Monad Testnet).",
    skills: ["Monad Testnet", "Solidity", "Foundry", "SHA-256", "Ed25519"],
    repo: "https://github.com/Shrysxs/monad-v3",
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
