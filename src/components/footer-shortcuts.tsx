"use client";

import { openCommandMenu, openTerminal } from "@/lib/shortcuts";

export function FooterShortcuts() {
  return (
    <>
      <button
        className="flex h-11 items-center gap-1.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        onClick={openCommandMenu}
      >
        <kbd className="hidden in-[.os-macos_&]:inline">⌘K</kbd>
        <kbd className="hidden not-[.os-macos_&]:inline">Ctrl K</kbd>
        <span className="sr-only">Open command menu</span>
      </button>

      <FooterSeparator />

      <button
        className="flex h-11 items-center font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        onClick={openTerminal}
      >
        <kbd>~ $_</kbd>
        <span className="sr-only">Open terminal</span>
      </button>
    </>
  );
}

export function FooterSeparator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
