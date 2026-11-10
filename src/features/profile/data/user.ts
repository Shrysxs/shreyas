import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Shreyas",
  lastName: "Borade",
  displayName: "Shreyas",
  username: "shrysxs",
  gender: "male",
  pronouns: "he/him",
  bio: "Software engineer building products across AI, Web3, and modern web technologies.",
  flipSentences: [
    "Full Stack Developer",
    "Web3 Developer",
    "Smart Contract Developer",
    "Linux Enthusiast",
    "From terminals to UIs",
    "Builder, Breaker, Learner, Grower",
  ],
  address: "Pune, Maharashtra, India (open to relocation & remote)",
  phoneNumber: "", // intentionally empty to hide phone number
  email: "Y29udGFjdC5zaHJleWFzaGJvcmFkZUBnbWFpbC5jb20=", // base64 encoded (contact.shreyashborade@gmail.com)
  website: "https://shrysxs.vercel.app",
  jobTitle: "Full Stack Developer · Web3 Developer · Smart Contract Developer",
  jobs: [],
  about: `I'm Shreyas, a full-stack and Web3 engineer based in Pune. I work mostly in TypeScript: Next.js and React on the frontend, Node and Python services behind them, and smart contracts in Solidity and AlgoPy, with some Rust on Solana. I also build LLM features into products where they actually help.

The problems I keep coming back to are about trust: proving a downloaded file is what it claims to be, keeping a ledger correct as money moves through it, making an AI's decision auditable, or keeping a trade private. I like owning a system end to end, from the data model and API to the contract and the interface people use.

I'm open to full-time roles, freelance work and early-stage teams, remote or with relocation, especially in Web3, AI or developer tools.

Outside of code, I spend most of my time in a Linux terminal and read about distributed systems, physics and history.`,
  avatar: "/avatar.jpg",
  ogImage: "/og/simple",
  namePronunciationUrl: "",
  keywords: [
    "shreyas",
    "shreyas borade",
    "shrysxs",
    "fullstack",
    "web3",
    "smart contracts",
  ],
  dateCreated: "2025-09-20", // YYYY-MM-DD
};
