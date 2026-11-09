export type Hackathon = {
  id: string;
  name: string;
  /** "MM.YYYY", matching project and experience dates. */
  date: string;
  result?: string;
  description: string;
  skills?: string[];
  /** Live demo of what was built. */
  link?: string;
  repo?: string;
};

export const HACKATHONS: Hackathon[] = [
  {
    id: "ethglobal-mumbai",
    name: "ETHGlobal Mumbai",
    date: "11.2026",
    description:
      "Built Cloakroom (now Nony.money) with a team of four: private swaps and withdrawals on Ethereum, with custody keys and the ledger held inside a TEE. I owned the API and accounting layer — EIP-712 signed requests, the journal and ledger, balance reservations, and the intent lifecycle.",
    skills: ["EIP-712", "Fastify", "TEE", "Uniswap", "Ethereum"],
    link: "https://nony.money",
    repo: "https://github.com/Apurvborhade/nony-money",
  },
  {
    id: "monad-blitz-pune-v3",
    name: "Monad Blitz Pune V3",
    date: "10.2026",
    description:
      "Built Penguin Trace, a tool for verifying that a downloaded file matches its publisher's release. Files are hashed in the browser, manifests are Ed25519-signed, and publisher keys and releases are committed to a registry contract on Monad Testnet.",
    skills: ["Monad Testnet", "Solidity", "Foundry", "SHA-256", "Ed25519"],
    link: "https://monad-v3-six.vercel.app",
    repo: "https://github.com/Shrysxs/monad-v3",
  },
  {
    id: "monad-blitz-pune",
    name: "Monad Blitz Pune",
    date: "07.2026",
    result: "Winner",
    description:
      "Built Penguin Protocol solo: an AI investment syndicate where five agents with different analytical frameworks vote on a trade, and the consensus is sealed on Monad. It won the hackathon and became the foundation for Argus.",
    skills: ["AI Agents", "Consensus Engine", "Solidity", "Foundry", "Monad"],
    link: "https://monad-blitz-pune-pi.vercel.app",
    repo: "https://github.com/Shrysxs/monad-blitz-pune",
  },
  {
    id: "colosseum-frontier",
    name: "Colosseum Frontier",
    date: "05.2026",
    description:
      "Co-founded Nox Market, a platform that verifies trading skill against historical market data, built on Solana. I continued as co-founder after the hackathon, handling both technical and non-technical work; the product has since pivoted.",
    skills: ["Solana", "Rust", "TypeScript", "Next.js", "Smart Contracts"],
  },
  {
    id: "algorand-hack-series",
    name: "Algorand Hack Series",
    date: "04.2026",
    description:
      "Built GhostGas, which lets users with 0 ALGO transact for free by watching a 5-second ad. An agent settles the ad impression on-chain and a sponsor covers the fee through Algorand's fee pooling; it ships as an SDK for other dApps.",
    skills: ["Algorand", "AlgoPy (ARC4)", "Fee Pooling", "FastAPI", "SDK"],
    link: "https://algorand-protocol.vercel.app",
    repo: "https://github.com/Shrysxs/algorand-protocol",
  },
  {
    id: "ai-bhoomi-startup-weekend",
    name: "AI Bhoomi Startup Weekend",
    date: "01.2026",
    description:
      "Built VoiceAds, which turns a business's customer reviews into ad copy grounded in what customers actually said. It extracts recurring phrases, benefits and trust signals, then generates text ads, marketing copy or JSON.",
    skills: ["LLMs", "Groq API", "Prompt Engineering", "Next.js", "Martech"],
    link: "https://voiceads.vercel.app",
    repo: "https://github.com/Shrysxs/aiboomi-last-minute",
  },
  {
    id: "colosseum-cypherpunk",
    name: "Colosseum Cypherpunk",
    date: "10.2025",
    description:
      "Worked with Ceminted, an early-stage Canadian startup building privacy-preserving trading and dark pools on Solana, as part of their tech team. The collaboration continued as a contract role through 03.2026.",
    skills: ["Solana", "TypeScript", "Privacy", "Dark Pools", "Web3"],
  },
];
