import { CollapsibleList } from "@/components/collapsible-list";

import { PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

function parseDate(dateStr: string): Date {
  const [month, year] = dateStr.split(".").map(Number);
  return new Date(year, month - 1);
}

const sortedProjects = [...PROJECTS].sort((a, b) => {
  const dateA = parseDate(a.period.start);
  const dateB = parseDate(b.period.start);
  return dateB.getTime() - dateA.getTime();
});

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({sortedProjects.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={sortedProjects}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
