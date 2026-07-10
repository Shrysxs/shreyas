import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

// Map tech keys to devicons names (https://devicons.github.io/devicon/)
const DEVICON_OVERRIDES: Record<string, string> = {
  nextjs2: "nextjs",
  js: "javascript",
  shadcn_ui: "tailwindcss",
  "shadcn-ui": "tailwindcss",
  radixui: "radixui",
  mobx_state_tree: "mobx",
  chatgpt: "openai",
  ps: "photoshop",
  nodejs: "nodejs",
  bun: "bun",
};

function getDeviconName(key: string): string {
  return DEVICON_OVERRIDES[key] ?? key.replace(/-/g, "");
}

function getDeviconUrl(key: string, colored = true): string {
  const name = getDeviconName(key);
  const variant = colored ? "original" : "plain";
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;
}

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                  >
                    <Image
                      src={getDeviconUrl(tech.key)}
                      alt={`${tech.title} icon`}
                      width={32}
                      height={32}
                      unoptimized
                      onError={(e) => {
                        // Fallback to plain variant if original fails
                        const img = e.currentTarget;
                        if (!img.src.includes("plain")) {
                          img.src = getDeviconUrl(tech.key, false);
                        }
                      }}
                    />
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
