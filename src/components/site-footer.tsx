import { SITE_INFO } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link"
            href="https://x.com/Shrysxs"
            target="_blank"
            rel="noopener"
          >
            Shreyas
          </a>
          .
        </p>

        <p className="mb-4 px-4 text-center font-mono text-xs text-balance text-muted-foreground">
          Design &amp; architecture inspired by{" "}
          <a
            className="link"
            href={"https://" + "chanh" + "dai.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"chanh" + "dai.com"}
          </a>{" "}
          {"by Ch\u00e1nh \u0110\u1ea1i."}
        </p>

        <div
          className={cn(
            "screen-line-before screen-line-after flex w-full before:z-1 after:z-1",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            <a
              className="flex h-11 items-center font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              href={`${SITE_INFO.url}/llms.txt`}
              target="_blank"
              rel="noopener noreferrer"
            >
              llms.txt
            </a>
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}
