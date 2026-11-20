"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";
import { flushSync } from "react-dom";

/**
 * Like `useTheme().setTheme`, but crossfades the page between themes using
 * the View Transitions API. Falls back to an instant switch when the API is
 * unsupported or the user prefers reduced motion. Timing lives in globals.css.
 */
export function useThemeTransition() {
  const { setTheme, ...rest } = useTheme();

  const setThemeWithTransition = useCallback(
    (theme: string) => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!document.startViewTransition || reduceMotion) {
        setTheme(theme);
        return;
      }

      // flushSync so next-themes applies the <html> class inside the
      // transition callback, before the new snapshot is captured.
      document.startViewTransition(() => {
        flushSync(() => setTheme(theme));
      });
    },
    [setTheme]
  );

  return { ...rest, setTheme: setThemeWithTransition };
}
