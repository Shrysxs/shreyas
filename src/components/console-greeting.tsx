"use client";

import { useEffect } from "react";

const MARK = String.raw`
 ____  ____
/ ___|| __ )
\___ \|  _ \
 ___) | |_) |
|____/|____/
`;

let greeted = false;

// A note for whoever opens DevTools
export function ConsoleGreeting() {
  useEffect(() => {
    if (greeted) return;
    greeted = true;

    const amber = "color:#d97706;font-weight:600";
    const muted = "color:#71717a";

    console.log(
      `%c${MARK}\n%cReading the source? Good, so am I.\n\n%cThis site is built with Next.js, Tailwind and too much attention to spacing.\nIf you're hiring or building something interesting: %chttps://cal.com/shrysxs\n\n%cPsst: press \` anywhere on the page.`,
      amber,
      "font-weight:600",
      muted,
      amber,
      muted
    );
  }, []);

  return null;
}
