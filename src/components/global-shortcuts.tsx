"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import {
  isTypingTarget,
  OPEN_COMMAND_MENU_EVENT,
  OPEN_TERMINAL_EVENT,
} from "@/lib/shortcuts";

// Both are only downloaded the first time someone opens them
const CommandMenu = dynamic(
  () => import("./command-menu").then((mod) => mod.CommandMenu),
  { ssr: false }
);
const Terminal = dynamic(
  () => import("./terminal").then((mod) => mod.Terminal),
  { ssr: false }
);

type Panel = "command-menu" | "terminal" | null;

export function GlobalShortcuts() {
  const [panel, setPanel] = useState<Panel>(null);
  const [loaded, setLoaded] = useState<Set<Exclude<Panel, null>>>(new Set());
  const panelRef = useRef<Panel>(null);

  useEffect(() => {
    panelRef.current = panel;
  }, [panel]);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const open = (next: Exclude<Panel, null>) => {
      setLoaded((prev) => (prev.has(next) ? prev : new Set(prev).add(next)));
      setPanel(next);
    };

    document.addEventListener(
      "keydown",
      (e: KeyboardEvent) => {
        if (isTypingTarget(e.target)) return;

        if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
          e.preventDefault();
          if (panelRef.current === "command-menu") {
            setPanel(null);
          } else {
            open("command-menu");
          }
        } else if (e.key === "`" || e.key === "~") {
          e.preventDefault();
          open("terminal");
        }
      },
      { signal }
    );

    window.addEventListener(
      OPEN_COMMAND_MENU_EVENT,
      () => open("command-menu"),
      { signal }
    );
    window.addEventListener(OPEN_TERMINAL_EVENT, () => open("terminal"), {
      signal,
    });

    return () => abortController.abort();
  }, []);

  return (
    <>
      {loaded.has("command-menu") && (
        <CommandMenu
          open={panel === "command-menu"}
          onOpenChange={(open) => setPanel(open ? "command-menu" : null)}
          onOpenTerminal={() => {
            setLoaded((prev) => new Set(prev).add("terminal"));
            setPanel("terminal");
          }}
        />
      )}

      {loaded.has("terminal") && panel === "terminal" && (
        <Terminal onClose={() => setPanel(null)} />
      )}
    </>
  );
}
