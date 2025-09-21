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
    "Fullstack Devleloper",
    "Web3 Explorer",
    "Linux Enthusiast",
    "From terminals to UI's",
    "Builder,Breaker,Learner,Grower",
  ],
  address: "Pune, India",
  phoneNumber: "", // intentionally empty to hide phone number
  email: "c2hyZXlhc2hib3JhZGUyQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://shreyas-dev-beige.vercel.app/",
  jobTitle: "",
  jobs: [],
  about: `
I’m Shreyas Borade, a 20-year-old developer from Pune, India. Most things I build start half-broken—I push until they either work or collapse, and both outcomes teach me. Design came along the way, so now I try to care about how things look as much as how they work.

I’ve lived close to the machine: distro-hopping through Ubuntu, Fedora, Artix, Void, and finally Arch (yes, I use Arch btw). I’ve gone from Neovim and Emacs to Cursor and v0, moving between raw terminals and vibe coding. That spectrum is where I feel most at home.

Now I’m stepping into Web3, outgrowing the old internet and chasing what decentralized apps and smart contracts can unlock. It feels like the natural next step in breaking things open.

Off-screen, I ride my bike through nature to reset. Movies hit me differently too—like Whiplash, when Fletcher says, “If you want a fu**ing part, then earn it.” That’s not just a line to me, it’s the rule I live by.
  `,
  avatar: "/avatar.jpg",
  ogImage: "",
  namePronunciationUrl: "",
  keywords: ["shreyas", "shreyas borade", "shrysxs", "fullstack", "web3"],
  dateCreated: "2025-09-20", // YYYY-MM-DD
};
