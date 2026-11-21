import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

const FULL_NAME = `${USER.firstName} ${USER.lastName}`;

export const SITE_INFO = {
  name: FULL_NAME,
  shortName: USER.displayName,
  /** Default <title>: full name + handle + role, what people search for. */
  title: `${FULL_NAME} (${USER.username}) – Full Stack & Web3 Developer`,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://shrysxs.vercel.app",
  ogImage: USER.ogImage,
  description: `${FULL_NAME} (${USER.username}) is a full stack and Web3 developer in Pune, India, building products across AI, Web3 and modern web technologies with TypeScript, React and Next.js.`,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Hackathons",
    href: "/#hackathons",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
];

export const SOURCE_CODE_GITHUB_REPO = "shrysxs/shreyas";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/shrysxs/shreyas";

export const UTM_PARAMS = {
  utm_source: "shrysxs.vercel.app",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
