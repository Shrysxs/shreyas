import {
  ExternalLinkIcon,
  FileCodeIcon,
  LinkIcon,
  MapPinIcon,
  TrophyIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

import { Icons } from "@/components/icons";
import { Tag } from "@/components/ui/tag";

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
            <div className="absolute top-1 left-4 z-1 flex size-6 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border border-border bg-background text-muted-foreground transition-colors group-hover/hackathon:border-foreground group-hover/hackathon:text-foreground">
              {hackathon.result === "Winner" ? (
                <TrophyIcon className="size-3.5 fill-yellow-500/10 text-yellow-500" />
              ) : hackathon.logo ? (
                <Image
                  src={hackathon.logo}
                  alt={hackathon.project || hackathon.name}
                  width={24}
                  height={24}
                  className="size-full object-cover"
                  unoptimized
                />
              ) : (
                <span className="size-1.5 rounded-full bg-muted-foreground transition-colors group-hover/hackathon:bg-foreground" />
              )}
            </div>

            <div className="space-y-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="text-base leading-snug font-semibold text-foreground">
                    {hackathon.name}
                  </h3>

                  {hackathon.project && (
                    <div className="inline-flex items-center gap-1.5">
                      <span className="text-muted-foreground/50 select-none">
                        /
                      </span>
                      <span className="text-base leading-snug font-semibold text-foreground">
                        {hackathon.project}
                      </span>
                    </div>
                  )}

                  {hackathon.result && (
                    <span className="inline-flex items-center gap-1 rounded bg-yellow-500/10 px-1.5 py-0.5 font-mono text-xs font-medium text-yellow-600 dark:text-yellow-400">
                      🏆 {hackathon.result}
                    </span>
                  )}

                  {hackathon.category && (
                    <span className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground dark:bg-zinc-800/80">
                      {hackathon.category}
                    </span>
                  )}
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-x-2 font-mono text-xs text-muted-foreground">
                  {hackathon.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPinIcon className="size-3 text-muted-foreground" />
                      {hackathon.location}
                    </span>
                  )}
                  {hackathon.location && <span>·</span>}
                  <span>{hackathon.date}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                {hackathon.description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {(hackathon.demo ||
                hackathon.repo ||
                hackathon.contract ||
                (hackathon.links && hackathon.links.length > 0)) && (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs">
                  {hackathon.demo && (
                    <a
                      href={hackathon.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono link text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLinkIcon className="size-3.5" />
                      Live Demo
                    </a>
                  )}

                  {hackathon.repo && (
                    <a
                      href={hackathon.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono link text-muted-foreground hover:text-foreground"
                    >
                      <Icons.github className="size-3.5" />
                      GitHub
                    </a>
                  )}

                  {hackathon.contract && (
                    <a
                      href={hackathon.contract}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono link text-muted-foreground hover:text-foreground"
                    >
                      <FileCodeIcon className="size-3.5" />
                      Contract Explorer
                    </a>
                  )}

                  {hackathon.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono link text-muted-foreground hover:text-foreground"
                    >
                      <LinkIcon className="size-3.5" />
                      {link.label}
                    </a>
                  ))}
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
