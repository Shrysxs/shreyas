"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import React, { useCallback } from "react";

import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/use-meta-color";
import { useThemeTransition } from "@/hooks/use-theme-transition";
import soundManager from "@/lib/sound-manager";

import { Button } from "./ui/button";

export function ToggleTheme() {
  const { resolvedTheme, setTheme } = useThemeTransition();

  const { setMetaColor } = useMetaColor();

  const handleToggle = useCallback(() => {
    soundManager.playClick();
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setMetaColor(
      resolvedTheme === "dark"
        ? META_THEME_COLORS.light
        : META_THEME_COLORS.dark
    );
  }, [resolvedTheme, setTheme, setMetaColor]);

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={handleToggle}
    >
      <SunIcon className="scale-100 rotate-0 opacity-100 transition-[rotate,scale,opacity] duration-300 ease-out motion-reduce:transition-none [html.dark_&]:scale-50 [html.dark_&]:-rotate-90 [html.dark_&]:opacity-0" />
      <MoonStarIcon className="absolute scale-50 rotate-90 opacity-0 transition-[rotate,scale,opacity] duration-300 ease-out motion-reduce:transition-none [html.dark_&]:scale-100 [html.dark_&]:rotate-0 [html.dark_&]:opacity-100" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
