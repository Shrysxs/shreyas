"use client";

import { XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";

import { EXPERIENCES } from "@/features/profile/data/experiences";
import { HACKATHONS } from "@/features/profile/data/hackathons";
import { PROJECTS } from "@/features/profile/data/projects";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { decodeEmail } from "@/utils/string";

type Line = { id: number; kind: "input" | "output" | "error"; text: string };

type CommandContext = {
  args: string[];
  print: (text: string, kind?: Line["kind"]) => void;
  clear: () => void;
  close: () => void;
  toggleTheme: (theme?: string) => void;
  history: string[];
};

const BOOKING_URL = "https://cal.com/shrysxs";

// Prompt and paths use the name, not the handle, to match ~/shreyas in the hero
const NAME = USER.firstName.toLowerCase();

const MARK = String.raw`
 ____  ____
/ ___|| __ )
\___ \|  _ \
 ___) | |_) |
|____/|____/`;

const pad = (text: string, width: number) => text.padEnd(width, " ");

const projectId = (id: string) => id.replace(/-money$/, "");

// Projects and socials share one namespace for `open`
const OPEN_TARGETS: Record<string, string> = {
  ...Object.fromEntries(PROJECTS.map((p) => [projectId(p.id), p.link])),
  ...Object.fromEntries(
    SOCIAL_LINKS.map((s) => [s.title.toLowerCase().split(" ")[0], s.href])
  ),
  cal: BOOKING_URL,
};

function openUrl(url: string) {
  window.open(url, "_blank", "noopener");
}

const COMMANDS: Record<
  string,
  { description: string; run: (ctx: CommandContext) => void }
> = {
  help: {
    description: "list available commands",
    run: ({ print }) =>
      print(
        Object.entries(COMMANDS)
          .filter(([name]) => !HIDDEN_COMMANDS.has(name))
          .map(([name, { description }]) => `  ${pad(name, 12)}${description}`)
          .join("\n")
      ),
  },
  whoami: {
    description: "who is this",
    run: ({ print }) =>
      print(
        `${USER.firstName} ${USER.lastName} (${USER.username})\nfull-stack & web3 engineer · ${USER.address}`
      ),
  },
  about: {
    description: "the longer version (same as `cat about.md`)",
    run: ({ print }) => print(USER.about.trim()),
  },
  ls: {
    description: "list things: ls [projects|hackathons|experience]",
    run: ({ args, print }) => {
      const target = (args[0] ?? "").replace(/\/$/, "");

      if (target === "projects") {
        print(
          PROJECTS.map(
            (p) =>
              `  ${pad(projectId(p.id), 14)}${pad(p.period.start, 10)}${p.tagline}`
          ).join("\n") + "\n\nopen one with `open <name>`"
        );
      } else if (target === "hackathons") {
        print(
          HACKATHONS.map(
            (h) =>
              `  ${pad(h.date, 10)}${h.name}${h.result ? `  [${h.result.toLowerCase()}]` : ""}`
          ).join("\n")
        );
      } else if (target === "experience") {
        print(
          EXPERIENCES.flatMap((e) =>
            e.positions.map(
              (p) =>
                `  ${pad(`${p.employmentPeriod.start}–${p.employmentPeriod.end ?? "now"}`, 18)}${p.title} @ ${e.companyName}`
            )
          ).join("\n")
        );
      } else if (!target) {
        print("about.md  contact.txt  experience/  hackathons/  projects/");
      } else {
        print(
          `ls: cannot access '${target}': No such file or directory`,
          "error"
        );
      }
    },
  },
  cat: {
    description: "read a file: cat [about.md|contact.txt]",
    run: (ctx) => {
      const file = ctx.args[0];
      if (file === "about.md") return COMMANDS.about.run(ctx);
      if (file === "contact.txt") return COMMANDS.contact.run(ctx);
      if (!file) return ctx.print("cat: missing file operand", "error");
      ctx.print(`cat: ${file}: No such file or directory`, "error");
    },
  },
  contact: {
    description: "how to reach me",
    run: ({ print }) =>
      print(
        [
          `  ${pad("email", 12)}${decodeEmail(USER.email)}`,
          ...SOCIAL_LINKS.map(
            (s) => `  ${pad(s.title.toLowerCase().split(" ")[0], 12)}${s.href}`
          ),
        ].join("\n")
      ),
  },
  open: {
    description: "open a project or social: open <name>",
    run: ({ args, print }) => {
      const name = args[0]?.toLowerCase();
      if (!name) {
        return print(
          `usage: open <name>\n  ${Object.keys(OPEN_TARGETS).join("  ")}`
        );
      }

      const url = OPEN_TARGETS[name];
      if (!url) return print(`open: no such target: ${name}`, "error");

      print(`opening ${url.replace(/^https?:\/\//, "")}…`);
      openUrl(url);
    },
  },
  neofetch: {
    description: "system information",
    run: ({ print }) =>
      print(
        `${MARK}\n\n  user      ${NAME}@pune\n  role      full-stack & web3 engineer\n  langs     TypeScript, Solidity, Python\n  chains    Ethereum, Solana, Algorand, Monad\n  projects  ${PROJECTS.length}\n  status    open to work`
      ),
  },
  date: {
    description: "current time in Pune",
    run: ({ print }) =>
      print(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
          dateStyle: "full",
          timeStyle: "short",
        }) + " IST"
      ),
  },
  theme: {
    description: "switch theme: theme [light|dark]",
    run: ({ args, toggleTheme, print }) => {
      if (args[0] && !["light", "dark"].includes(args[0])) {
        return print("usage: theme [light|dark]", "error");
      }
      toggleTheme(args[0]);
    },
  },
  history: {
    description: "commands you've run",
    run: ({ history, print }) =>
      print(history.map((h, i) => `  ${i + 1}  ${h}`).join("\n") || ""),
  },
  clear: {
    description: "clear the screen",
    run: ({ clear }) => clear(),
  },
  exit: {
    description: "close the terminal (or press esc)",
    run: ({ close }) => close(),
  },

  // Not listed in `help`, for people who poke around
  sudo: {
    description: "",
    run: ({ args, print }) => {
      if (args.join(" ").toLowerCase() === "hire shreyas") {
        print(
          "[sudo] password for recruiter: ********\npermission granted. opening cal.com/shrysxs…"
        );
        setTimeout(() => openUrl(BOOKING_URL), 900);
        return;
      }
      print(
        `${NAME} is not in the sudoers file. This incident will be reported.`,
        "error"
      );
    },
  },
  rm: {
    description: "",
    run: ({ print }) => print("nice try.", "error"),
  },
  cd: {
    description: "",
    run: ({ print }) => print("there's only ~ here. it's a small house."),
  },
  pwd: {
    description: "",
    run: ({ print }) => print(`/home/${NAME}`),
  },
  echo: {
    description: "",
    run: ({ args, print }) => print(args.join(" ")),
  },
  vim: {
    description: "",
    run: ({ print }) => print("you'd never get out. try `exit` instead."),
  },
};

const HIDDEN_COMMANDS = new Set(["sudo", "rm", "cd", "pwd", "echo", "vim"]);

const WELCOME = `welcome to ~/${NAME}. type \`help\` to see what you can do.`;

export function Terminal({ onClose }: { onClose: () => void }) {
  const { resolvedTheme, setTheme } = useTheme();

  const [lines, setLines] = useState<Line[]>([
    { id: 0, kind: "output", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const nextId = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const print = (text: string, kind: Line["kind"] = "output") => {
    setLines((prev) => [...prev, { id: nextId.current++, kind, text }]);
  };

  const run = (raw: string) => {
    const command = raw.trim();
    print(command, "input");
    if (!command) return;

    const nextHistory = [...history, command];
    setHistory(nextHistory);
    setHistoryIndex(null);

    const [name, ...args] = command.split(/\s+/);
    const entry = COMMANDS[name.toLowerCase()];

    if (!entry) {
      print(`command not found: ${name}. try \`help\``, "error");
      return;
    }

    entry.run({
      args,
      print,
      clear: () => setLines([]),
      close: onClose,
      toggleTheme: (theme) =>
        setTheme(theme ?? (resolvedTheme === "dark" ? "light" : "dark")),
      history: nextHistory,
    });
  };

  const complete = () => {
    const [name, ...rest] = input.split(" ");
    const pool =
      rest.length === 0
        ? Object.keys(COMMANDS).filter((c) => !HIDDEN_COMMANDS.has(c))
        : name === "open"
          ? Object.keys(OPEN_TARGETS)
          : name === "ls"
            ? ["projects", "hackathons", "experience"]
            : name === "cat"
              ? ["about.md", "contact.txt"]
              : [];
    const partial = rest.length === 0 ? name : rest.join(" ");
    const matches = pool.filter((c) => c.startsWith(partial));

    if (matches.length === 1) {
      setInput(rest.length === 0 ? `${matches[0]} ` : `${name} ${matches[0]}`);
    } else if (matches.length > 1) {
      print(matches.join("  "));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "Escape") {
      onClose();
    } else if (e.key === "Tab") {
      e.preventDefault();
      complete();
    } else if (e.key === "ArrowUp" && history.length > 0) {
      e.preventDefault();
      const index =
        historyIndex === null
          ? history.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(index);
      setInput(history[index]);
    } else if (e.key === "ArrowDown" && historyIndex !== null) {
      e.preventDefault();
      const index = historyIndex + 1;
      if (index >= history.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(index);
        setInput(history[index]);
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-2 motion-safe:animate-in motion-safe:duration-200 motion-safe:fade-in motion-safe:slide-in-from-bottom-4">
      <div
        role="dialog"
        aria-label="Terminal"
        className="mx-auto border-x border-t border-edge bg-background font-mono text-xs shadow-[0_-8px_32px_0_black]/8 sm:text-sm md:max-w-3xl dark:shadow-[0_-8px_32px_0_black]/80"
      >
        <div className="flex h-9 items-center justify-between border-b border-edge pr-1 pl-3 text-muted-foreground select-none">
          <span>
            ~/{NAME} <span className="text-edge">—</span> terminal
          </span>

          <div className="flex items-center gap-2">
            <kbd className="hidden text-xs sm:inline">esc</kbd>
            <button
              className="flex size-7 items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-foreground"
              onClick={onClose}
              aria-label="Close terminal"
            >
              <XIcon className="size-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="h-[min(50vh,22rem)] overflow-y-auto p-3 leading-relaxed"
          onClick={() => {
            if (!window.getSelection()?.toString()) inputRef.current?.focus();
          }}
        >
          {lines.map((line) => (
            <div
              key={line.id}
              className={cn(
                "break-words whitespace-pre-wrap",
                line.kind === "error" && "text-muted-foreground",
                line.kind === "input" && "mt-2 first:mt-0"
              )}
            >
              {line.kind === "input" ? (
                <>
                  <Prompt />
                  {line.text}
                </>
              ) : (
                line.text
              )}
            </div>
          ))}

          <label className="mt-2 flex items-center">
            <Prompt />
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent caret-brand outline-none"
              aria-label="Terminal input"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

function Prompt() {
  return (
    <span className="mr-2 select-none">
      <span className="text-brand">{NAME}</span>
      <span className="text-muted-foreground">:~$</span>
    </span>
  );
}
