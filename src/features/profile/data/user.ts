import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Shreyas",
  lastName: "Borade",
  displayName: "Shreyas",
  username: "Shrysxs",
  gender: "male",
  pronouns: "he/him",
  bio: "Build, Fail, Learn, Grow, Repeat",
  flipSentences: [
    "Fullstack Developer",
    "Web3",
    "Vibe Debugger",
    "Linux Enthusiast",
  ],
  address: "Pune, India",
  phoneNumber: "", // intentionally empty to hide phone number
  email: "c2hyZXlhc2hib3JhZGUyQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://shreyas-dev-beige.vercel.app/",
  jobTitle: "",
  jobs: [],
  about: `
I’m Shreyas Borade, a 20-year-old developer from Pune, India. I build ideas from scratch and push them until they work—and sometimes break—because that’s how real learning happens.

I’m equally at home with design and development, which means I care about how things look as much as how they function. Lately, I’ve been diving deep into Web3, exploring decentralized applications, smart contracts, and the ways blockchain can reshape how we interact with technology.

Beyond coding, I spend my time exploring new technologies, cycling through the city, watching films, and constantly challenging myself to get better. I’m driven by the belief that growth comes from effort, iteration, and refusing to settle for ordinary.
  `,
  avatar: "/avatar.jpg",
  ogImage: "",
  namePronunciationUrl: "",
  keywords: ["shreyas", "shreyas borade", "shrysxs", "fullstack", "web3"],
  dateCreated: "2025-09-20", // YYYY-MM-DD
};
