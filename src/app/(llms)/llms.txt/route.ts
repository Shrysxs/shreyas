import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/features/blog/data/posts";
import { PROFILE_SUMMARY } from "@/features/profile/data/summary";

const allPosts = getAllPosts();

const content = `# shrysxs.vercel.app

> Portfolio of Shreyas Borade (shrysxs), a full-stack and Web3 developer based in Pune, India.

${PROFILE_SUMMARY}

- [About](${SITE_INFO.url}/about.md): Bio, tech stack and contact links.
- [Experience](${SITE_INFO.url}/experience.md): Roles, including co-founder of Nox Market.
- [Hackathons](${SITE_INFO.url}/hackathons.md): Hackathon builds, including the Monad Blitz Pune win.
- [Projects](${SITE_INFO.url}/projects.md): Shipped projects with live links and tech details.
- [Full profile](${SITE_INFO.url}/llms-full.txt): Everything above in one file.

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.mdx): ${item.metadata.description}`).join("\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
