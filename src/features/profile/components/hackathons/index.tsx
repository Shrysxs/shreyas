import { LinkIcon, TrophyIcon } from "lucide-react";
import React from "react";

import { Icons } from "@/components/icons";
import { Tag } from "@/components/ui/tag";
import { urlToName } from "@/utils/url";

import { HACKATHONS } from "../../data/hackathons";
import { Panel, PanelHeader, PanelTitle } from "../panel";

export function Hackathons() {
  return (
    <Panel id="hackathons">
      <PanelHeader>
        <PanelTitle>Hackathons</PanelTitle>
      </PanelHeader>

      <div className="relative space-y-6 py-4 pr-2 pl-4 before:absolute before:top-4 before:bottom-4 before:left-7 before:w-px before:bg-border">
        {HACKATHONS.map((hackathon) => (
          <div key={hackathon.id} className="group/hackathon relative pl-9">
            {/* Timeline dot/icon */}
            <div className="absolute top-1 left-4 z-1 flex size-6 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors group-hover/hackathon:border-foreground group-hover/hackathon:text-foreground">
              {hackathon.result === "Winner" ? (
                <TrophyIcon className="size-3.5 text-foreground" />
              ) : (
                <span className="size-1.5 rounded-full bg-muted-foreground transition-colors group-hover/hackathon:bg-foreground" />
              )}
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <div className="flex items-center gap-2">
                  <h3 className="leading-snug font-medium">{hackathon.name}</h3>
                  {hackathon.result && (
                    <span className="inline-flex items-center rounded-md border px-1.5 py-0.5 font-mono text-xs font-medium text-foreground">
                      {hackathon.result}
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {hackathon.date}
                </span>
              </div>

              <p className="text-sm leading-normal text-muted-foreground">
                {hackathon.description}
              </p>

              {(hackathon.link || hackathon.repo) && (
                <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                  {hackathon.link && (
                    <a
                      href={hackathon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs link text-muted-foreground hover:text-foreground"
                    >
                      <LinkIcon className="size-3" />
                      live: {urlToName(hackathon.link)}
                    </a>
                  )}

                  {hackathon.repo && (
                    <a
                      href={hackathon.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs link text-muted-foreground hover:text-foreground"
                    >
                      <Icons.github className="size-3" />
                      repo: {hackathon.repo.replace("https://github.com/", "")}
                    </a>
                  )}
                </div>
              )}

              {hackathon.skills && hackathon.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {hackathon.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
