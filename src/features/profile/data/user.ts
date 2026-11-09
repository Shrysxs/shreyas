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
  about: `I'm Shreyas, a software engineer in Pune building products across AI, Web3 and the modern web. I work mostly in TypeScript, React and Next.js, and I like problems that sit where engineering, product design and user experience meet.

Right now I work as a freelance full-stack developer and I'm co-founding Nox Market, a trading-skill verification platform on Solana. A lot of what I ship starts at hackathons: I won Monad Blitz Pune with the prototype that became Argus, built the API and accounting layer for Nony.money at ETHGlobal Mumbai, and have built on Ethereum, Solana, Algorand and Monad.

Outside of code, I'm interested in distributed systems, physics, history and emerging technologies.`,
  avatar: "/avatar.jpg",
  ogImage: "/og/simple?title=Shreyas",
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
