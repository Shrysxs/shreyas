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
  website: "https://TODO-domain-placeholder.com",
  jobTitle: "Full Stack Developer · Web3 Developer · Smart Contract Developer",
  jobs: [],
  about: `Software engineer building products across AI, Web3, and modern web technologies.

I work primarily with TypeScript, React, Next.js, and cloud-native tooling, and enjoy solving problems that sit at the intersection of engineering, product design, and user experience. Outside of coding, I'm interested in distributed systems, physics, history, and emerging technologies.`,
  avatar: "/avatar.jpg",
  ogImage: "",
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
