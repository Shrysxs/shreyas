import { EXPERIENCES } from "@/features/profile/data/experiences";
import { HACKATHONS } from "@/features/profile/data/hackathons";

/** Experience as markdown, headings starting at `level` (e.g. "##"). */
export function experienceMarkdown(level = "##") {
  return EXPERIENCES.flatMap((item) =>
    item.positions.map((position) => {
      const period = `${position.employmentPeriod.start} – ${position.employmentPeriod.end || "Present"}`;
      const skills = position.skills?.length
        ? `\n\nSkills: ${position.skills.join(", ")}`
        : "";
      const description = position.description
        ? `\n\n${position.description.trim()}`
        : "";
      return `${level} ${position.title} | ${item.companyName}\n\nDuration: ${period}${skills}${description}`;
    })
  ).join("\n\n");
}

/** Hackathons as markdown, headings starting at `level` (e.g. "##"). */
export function hackathonsMarkdown(level = "##") {
  return HACKATHONS.map((item) => {
    const result = item.result ? ` | ${item.result}` : "";
    const links = [
      item.link && `Live: ${item.link}`,
      item.repo && `Repo: ${item.repo}`,
    ]
      .filter(Boolean)
      .join("\n");
    const skills = item.skills?.length
      ? `\n\nSkills: ${item.skills.join(", ")}`
      : "";
    return `${level} ${item.name}${result}\n\nDate: ${item.date}${skills}\n\n${item.description}${links ? `\n\n${links}` : ""}`;
  }).join("\n\n");
}
