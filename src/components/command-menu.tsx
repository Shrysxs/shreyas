"use client";

import { useCommandState } from "cmdk";
import type { LucideProps } from "lucide-react";
import {
  BriefcaseBusinessIcon,
  CalendarIcon,
  CopyIcon,
  CornerDownLeftIcon,
  LayersIcon,
  LetterTextIcon,
  MoonStarIcon,
  SquareTerminalIcon,
  SunIcon,
  TrophyIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import React, { useCallback } from "react";
import { toast } from "sonner";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { PROJECTS } from "@/features/profile/data/projects";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { copyText } from "@/utils/copy";
import { decodeEmail } from "@/utils/string";

import { Icons } from "./icons";
import { Separator } from "./ui/separator";

type CommandLinkItem = {
  title: string;
  href: string;

  icon?: React.ComponentType<LucideProps>;
  iconImage?: string;
  iconInvert?: boolean;
  keywords?: string[];
  openInNewTab?: boolean;
};

const SECTION_LINKS: CommandLinkItem[] = [
  {
    title: "About",
    href: "/#about",
    icon: LetterTextIcon,
  },
  {
    title: "Experience",
    href: "/#experience",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Hackathons",
    href: "/#hackathons",
    icon: TrophyIcon,
  },
  {
    title: "Stack",
    href: "/#stack",
    icon: LayersIcon,
  },
  {
    title: "Projects",
    href: "/#projects",
    icon: Icons.project,
  },
];

const PROJECT_LINKS: CommandLinkItem[] = PROJECTS.map((project) => ({
  title: project.title,
  href: project.link,
  keywords: [project.tagline, ...project.skills],
  openInNewTab: true,
}));

const SOCIAL_LINK_ITEMS: CommandLinkItem[] = SOCIAL_LINKS.map((item) => ({
  title: item.title,
  href: item.href,
  iconImage: item.icon,
  iconInvert: item.theme,
  openInNewTab: true,
}));

export function CommandMenu({
  open,
  onOpenChange,
  onOpenTerminal,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenTerminal: () => void;
}) {
  const router = useRouter();

  const { setTheme } = useTheme();

  const handleOpenLink = useCallback(
    (href: string, openInNewTab = false) => {
      onOpenChange(false);

      if (openInNewTab) {
        window.open(href, "_blank", "noopener");
      } else {
        router.push(href);
      }
    },
    [router, onOpenChange]
  );

  const handleThemeChange = useCallback(
    (theme: "light" | "dark" | "system") => {
      onOpenChange(false);
      setTheme(theme);
    },
    [setTheme, onOpenChange]
  );

  const handleCopyEmail = useCallback(async () => {
    onOpenChange(false);
    await copyText(decodeEmail(USER.email));
    toast.success("Email copied");
  }, [onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />

      <CommandList className="min-h-80">
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Actions">
          <CommandItem onSelect={handleCopyEmail}>
            <CopyIcon />
            Copy Email
          </CommandItem>
          <CommandItem
            keywords={["cli", "shell", "console"]}
            onSelect={() => onOpenTerminal()}
          >
            <SquareTerminalIcon />
            Open Terminal
          </CommandItem>
          <CommandItem
            keywords={["call", "meeting", "hire", "contact"]}
            onSelect={() => handleOpenLink("https://cal.com/shrysxs", true)}
          >
            <CalendarIcon />
            Book a Call
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandLinkGroup
          heading="Portfolio"
          links={SECTION_LINKS}
          onLinkSelect={handleOpenLink}
        />

        <CommandSeparator />

        <CommandLinkGroup
          heading="Projects"
          links={PROJECT_LINKS}
          fallbackIcon={Icons.project}
          onLinkSelect={handleOpenLink}
        />

        <CommandSeparator />

        <CommandLinkGroup
          heading="Social Links"
          links={SOCIAL_LINK_ITEMS}
          onLinkSelect={handleOpenLink}
        />

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem
            keywords={["theme"]}
            onSelect={() => handleThemeChange("light")}
          >
            <SunIcon />
            Light
          </CommandItem>
          <CommandItem
            keywords={["theme"]}
            onSelect={() => handleThemeChange("dark")}
          >
            <MoonStarIcon />
            Dark
          </CommandItem>
          <CommandItem
            keywords={["theme"]}
            onSelect={() => handleThemeChange("system")}
          >
            <Icons.contrast />
            Auto
          </CommandItem>
        </CommandGroup>
      </CommandList>

      <CommandMenuFooter />
    </CommandDialog>
  );
}

function CommandLinkGroup({
  heading,
  links,
  fallbackIcon,
  onLinkSelect,
}: {
  heading: string;
  links: CommandLinkItem[];
  fallbackIcon?: React.ComponentType<LucideProps>;
  onLinkSelect: (href: string, openInNewTab?: boolean) => void;
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const Icon = link?.icon ?? fallbackIcon ?? React.Fragment;

        return (
          <CommandItem
            key={link.href}
            keywords={link.keywords}
            onSelect={() => onLinkSelect(link.href, link.openInNewTab)}
          >
            {link?.iconImage ? (
              <Image
                className={cn("rounded-sm", link.iconInvert && "dark:invert")}
                src={link.iconImage}
                alt={link.title}
                width={16}
                height={16}
                unoptimized
              />
            ) : (
              <Icon />
            )}
            {link.title}
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}

type CommandKind = "command" | "page" | "link";

type CommandMetaMap = Map<
  string,
  {
    commandKind: CommandKind;
  }
>;

function buildCommandMetaMap() {
  const commandMetaMap: CommandMetaMap = new Map();

  commandMetaMap.set("Copy Email", { commandKind: "command" });
  commandMetaMap.set("Open Terminal", { commandKind: "command" });
  commandMetaMap.set("Book a Call", { commandKind: "link" });

  commandMetaMap.set("Light", { commandKind: "command" });
  commandMetaMap.set("Dark", { commandKind: "command" });
  commandMetaMap.set("Auto", { commandKind: "command" });

  [...PROJECT_LINKS, ...SOCIAL_LINK_ITEMS].forEach((item) => {
    commandMetaMap.set(item.title, {
      commandKind: "link",
    });
  });

  return commandMetaMap;
}

const COMMAND_META_MAP = buildCommandMetaMap();

const ENTER_ACTION_LABELS: Record<CommandKind, string> = {
  command: "Run Command",
  page: "Go to Page",
  link: "Open Link",
};

function CommandMenuFooter() {
  const selectedCommandKind = useCommandState(
    (state) => COMMAND_META_MAP.get(state.value)?.commandKind ?? "page"
  );

  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 border-t bg-zinc-100/30 px-4 text-xs font-medium dark:bg-zinc-800/30">
        <span className="font-mono text-xs text-muted-foreground">SB</span>

        <div className="flex shrink-0 items-center gap-2">
          <span>{ENTER_ACTION_LABELS[selectedCommandKind]}</span>
          <CommandMenuKbd>
            <CornerDownLeftIcon />
          </CommandMenuKbd>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4"
          />
          <span className="text-muted-foreground">Exit</span>
          <CommandMenuKbd>Esc</CommandMenuKbd>
        </div>
      </div>
    </>
  );
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "pointer-events-none flex h-5 min-w-6 items-center justify-center gap-1 rounded-sm bg-black/5 px-1 font-sans text-[13px] font-normal text-muted-foreground shadow-[inset_0_-1px_2px] shadow-black/10 select-none dark:bg-white/10 dark:shadow-white/10 dark:text-shadow-xs [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  );
}
