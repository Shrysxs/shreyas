"use client";

import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      {/* 28 items → 4 cols (7 rows) on mobile, 7 cols (4 rows) from sm: every row is full. */}
      <ul className="grid grid-cols-4 gap-px bg-edge select-none sm:grid-cols-7">
        {TECH_STACK.map((tech) => {
          return (
            <li key={tech.key} className="flex bg-background">
              <SimpleTooltip content={tech.title}>
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tech.title}
                  className="group/tech flex w-full flex-col items-center justify-center gap-2 px-1 py-4 transition-colors hover:bg-zinc-950/[0.03] focus-visible:bg-zinc-950/[0.03] dark:hover:bg-white/[0.04] dark:focus-visible:bg-white/[0.04]"
                >
                  <Image
                    src={tech.icon ?? `/tech-stack-icons/${tech.key}.svg`}
                    alt=""
                    width={32}
                    height={32}
                    className={cn(
                      "size-8 object-contain transition-transform duration-300 ease-out group-hover/tech:-translate-y-0.5 group-hover/tech:scale-110 motion-reduce:transition-none motion-reduce:group-hover/tech:transform-none",
                      tech.theme && "dark:invert"
                    )}
                    unoptimized
                  />
                  <span className="w-full truncate text-center font-mono text-[11px] leading-none text-muted-foreground transition-colors group-hover/tech:text-foreground">
                    {tech.title}
                  </span>
                </a>
              </SimpleTooltip>
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
