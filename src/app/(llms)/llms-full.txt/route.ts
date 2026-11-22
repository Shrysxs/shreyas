import dayjs from "dayjs";

import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/features/blog/data/posts";
import { getLLMText } from "@/features/blog/lib/get-llm-text";
import { PROJECTS } from "@/features/profile/data/projects";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { PROFILE_SUMMARY } from "@/features/profile/data/summary";
import { TECH_STACK } from "@/features/profile/data/tech-stack";
import { USER } from "@/features/profile/data/user";
import {
  experienceMarkdown,
  hackathonsMarkdown,
} from "@/features/profile/lib/llm-markdown";

const allPosts = getAllPosts();

const aboutText = `## About (in his own words)

${USER.about.trim()}

### Personal Information

- First Name: ${USER.firstName}
- Last Name: ${USER.lastName}
- Display Name: ${USER.displayName}
- Location: ${USER.address}
- Website: ${USER.website}

### Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}

### Tech Stack

${TECH_STACK.map((item) => `- [${item.title}](${item.href})`).join("\n")}\n`;

const experienceText = `## Experience

${experienceMarkdown("###")}
`;

const hackathonsText = `## Hackathons

${hackathonsMarkdown("###")}
`;

const projectsText = `## Projects

${PROJECTS.map((item) => {
  const skills = `\n\nSkills: ${item.skills.join(", ")}`;
  const description = item.description ? `\n\n${item.description.trim()}` : "";
  return `### ${item.title}\n\nProject URL: ${item.link}${skills}${description}`;
}).join("\n\n")}
`;

async function getBlogContent() {
  const text = await Promise.all(
    allPosts.map(
      async (item) =>
        `---\ntitle: "${item.metadata.title}"\ndescription: "${item.metadata.description}"\nlast_updated: "${dayjs(item.metadata.updatedAt).format("MMMM D, YYYY")}"\nsource: "${SITE_INFO.url}/blog/${item.slug}"\n---\n\n${await getLLMText(item)}`
    )
  );
  return text.join("\n\n");
}

async function getContent() {
  return `<SYSTEM>This document is the professional profile of Shreyas Borade (shrysxs), a full-stack and Web3 developer based in Pune, India. It covers his background, work experience, hackathons, projects and published blog posts, formatted for Large Language Models so they can describe him accurately.</SYSTEM>

# shrysxs.vercel.app

> Portfolio of Shreyas Borade (shrysxs), a full-stack and Web3 developer based in Pune, India.

## Summary

${PROFILE_SUMMARY}

${aboutText}
${experienceText}
${hackathonsText}
${projectsText}

## Blog

${await getBlogContent()}`;
}

export const dynamic = "force-static";

export async function GET() {
  return new Response(await getContent(), {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
