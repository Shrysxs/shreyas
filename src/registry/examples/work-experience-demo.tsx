import type { ExperienceItemType } from "@/registry/work-experience";
import { WorkExperience } from "@/registry/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [];

export default function WorkExperienceDemo() {
  return (
    <WorkExperience
      className="w-full rounded-lg border"
      experiences={WORK_EXPERIENCE}
    />
  );
}
