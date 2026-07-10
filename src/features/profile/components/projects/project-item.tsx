import { ChevronsDownUpIcon, ChevronsUpDownIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

import type { Project } from "../../types/projects";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  const { start } = project.period;

  return (
    <Collapsible defaultOpen={project.isExpanded} asChild>
      <div className={className}>
        <div className="flex items-start hover:bg-accent2">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
              width={32}
              height={32}
              quality={100}
              className="mx-4 mt-4 flex size-6 shrink-0 select-none"
              unoptimized
              aria-hidden="true"
            />
          ) : (
            <div
              className="mx-4 mt-5 flex size-6 shrink-0 items-center justify-center text-muted-foreground select-none"
              aria-hidden="true"
            >
              <Icons.project className="size-5" />
            </div>
          )}

          <div className="flex-1 border-l border-dashed border-edge">
            <div className="flex items-start">
              <CollapsibleTrigger className="group/project flex w-full flex-1 items-start gap-4 p-4 pr-2 text-left select-none">
                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h3 className="leading-snug font-medium text-balance">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      — {start}
                    </span>
                  </div>

                  {project.tagline && (
                    <p className="text-sm leading-snug font-medium text-muted-foreground">
                      {project.tagline}
                    </p>
                  )}

                  {project.shortDescription && (
                    <p className="text-sm leading-normal text-muted-foreground/80">
                      {project.shortDescription}
                    </p>
                  )}
                </div>

                <div
                  className="mt-1 shrink-0 text-muted-foreground [&_svg]:size-4"
                  aria-hidden
                >
                  <ChevronsDownUpIcon className="hidden group-data-[state=open]/project:block" />
                  <ChevronsUpDownIcon className="hidden group-data-[state=closed]/project:block" />
                </div>
              </CollapsibleTrigger>
            </div>
          </div>
        </div>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="space-y-4 border-t border-dashed border-edge p-4 pl-14">
            {project.description && (
              <Prose>
                <Markdown>{project.description}</Markdown>
              </Prose>
            )}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <SimpleTooltip content="Open Live Application">
                <a
                  className="flex items-center gap-1.5 font-mono text-xs link text-muted-foreground hover:text-foreground"
                  href={addQueryParams(project.link, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="size-3.5" />
                  Live Link
                </a>
              </SimpleTooltip>

              {project.repo && (
                <SimpleTooltip content="Open Source Repository">
                  <a
                    className="flex items-center gap-1.5 font-mono text-xs link text-muted-foreground hover:text-foreground"
                    href={
                      project.repo.startsWith("http")
                        ? project.repo
                        : `https://${project.repo}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.github className="size-3.5" />
                    GitHub
                  </a>
                </SimpleTooltip>
              )}
            </div>

            {project.skills.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, index) => (
                  <li key={index} className="flex">
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
