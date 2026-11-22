import { experienceMarkdown } from "@/features/profile/lib/llm-markdown";

const content = `# Experience

${experienceMarkdown("##")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
