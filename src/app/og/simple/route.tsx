import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { SITE_INFO } from "@/config/site";
import { PROJECTS } from "@/features/profile/data/projects";
import { USER } from "@/features/profile/data/user";

// amber-400, the site's dark-mode accent
const BRAND = "#fbbf24";

const DOMAIN = new URL(SITE_INFO.url).host;

/**
 * Terminal-styled cover image.
 * - `/og/simple` → home card: `whoami` + recent projects.
 * - `/og/simple?title=…&path=/blog/slug` → page card: `cat` + page title.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title");
  const path = searchParams.get("path")?.replace(/^\//, "");
  const isPage = Boolean(title) && title !== USER.displayName;

  const fontSans = await readFile(
    join(process.cwd(), "src/assets/fonts/IBMPlexSans-Medium.ttf")
  );

  const fontMono = await readFile(
    join(process.cwd(), "src/assets/fonts/IBMPlexMono-Medium.ttf")
  );

  const avatarData = await readFile(join(process.cwd(), "public/avatar.jpg"));

  const ships = PROJECTS.slice(0, 5).map((p) =>
    p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  );

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full flex-col bg-[#09090b] text-white p-16"
        style={{ fontFamily: "IBMPlexMono" }}
      >
        {/* Frame lines */}
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 left-16" />
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 right-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 top-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 bottom-16" />

        {/* Window bar */}
        <div tw="flex items-center justify-between px-10 py-6 border-b border-zinc-800">
          <div tw="flex items-center">
            <div tw="flex w-4 h-4 rounded-full bg-zinc-700 mr-3" />
            <div tw="flex w-4 h-4 rounded-full bg-zinc-700 mr-3" />
            <div
              tw="flex w-4 h-4 rounded-full mr-6"
              style={{ background: BRAND }}
            />
            <div tw="flex text-2xl text-zinc-500">~/shreyas</div>
          </div>
          <div tw="flex items-center text-2xl text-zinc-500">
            <img
              src={`data:image/jpeg;base64,${avatarData.toString("base64")}`}
              tw="w-10 h-10 rounded-full mr-4 border border-zinc-700"
            />
            {DOMAIN}
          </div>
        </div>

        {/* Session */}
        <div tw="flex flex-col flex-1 justify-center px-10 py-6">
          {isPage ? (
            <div tw="flex flex-col">
              <Prompt command={`cat ${path || "README.md"}`} />
              <div
                tw="flex text-7xl tracking-tight mt-8 leading-tight max-w-[960px]"
                style={{ fontFamily: "IBMPlexSans" }}
              >
                {title}
              </div>
              <div tw="flex text-3xl text-zinc-400 mt-8">
                {`— ${USER.firstName} ${USER.lastName}`}
              </div>
            </div>
          ) : (
            <div tw="flex flex-col">
              <Prompt command="whoami" />
              <div
                tw="flex text-7xl tracking-tight mt-4 mb-2"
                style={{ fontFamily: "IBMPlexSans" }}
              >
                {`${USER.firstName} ${USER.lastName}`}
              </div>
              <div tw="flex text-3xl text-zinc-400 mb-10">
                Full Stack · Web3 · Smart Contracts
              </div>
              <Prompt command="ls ships/" />
              <div tw="flex flex-wrap text-3xl text-zinc-300 mt-4">
                {ships.map((s) => (
                  <div key={s} tw="flex mr-8">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div tw="flex items-center mt-10">
            <Prompt />
            <div tw="flex w-5 h-10 ml-1" style={{ background: BRAND }} />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "IBMPlexSans",
          data: fontSans,
          weight: 500,
        },
        {
          name: "IBMPlexMono",
          data: fontMono,
          weight: 500,
        },
      ],
    }
  );
}

function Prompt({ command }: { command?: string }) {
  return (
    <div tw="flex items-center text-3xl">
      <div tw="flex" style={{ color: BRAND }}>
        $
      </div>
      {command ? <div tw="flex ml-4 text-zinc-200">{command}</div> : null}
    </div>
  );
}
