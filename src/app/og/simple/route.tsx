import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") || "Shreyas";

  const fontSans = await readFile(
    join(process.cwd(), "src/assets/fonts/IBMPlexSans-Medium.ttf")
  );

  const fontMono = await readFile(
    join(process.cwd(), "src/assets/fonts/IBMPlexMono-Medium.ttf")
  );

  const avatarData = await readFile(join(process.cwd(), "public/avatar.jpg"));

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col justify-between bg-[#09090b] text-[#ffffff] p-16">
        {/* Background elements */}
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 left-16" />
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 right-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 top-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 bottom-16" />

        {/* Top Header */}
        <div
          tw="flex w-full items-center justify-between z-10"
          style={{ fontFamily: "IBMPlexMono" }}
        >
          <div tw="flex items-center text-2xl text-zinc-400">~/shreyas</div>
          <div tw="flex items-center text-2xl text-zinc-400">2026</div>
        </div>

        {/* Center Content */}
        <div tw="flex flex-col justify-center items-start z-10">
          <div tw="flex items-center mb-8">
            <img
              src={`data:image/jpeg;base64,${avatarData.toString("base64")}`}
              tw="w-24 h-24 rounded-full mr-6 border-2 border-zinc-800"
            />
            <h1
              tw="text-8xl tracking-tight m-0"
              style={{
                fontFamily: "IBMPlexSans",
                fontWeight: 500,
              }}
            >
              {title}
            </h1>
          </div>
          <p
            tw="text-3xl text-zinc-400 mt-6 max-w-[80%]"
            style={{ fontFamily: "IBMPlexSans" }}
          >
            Software engineer building products across AI, Web3, and modern web
            technologies.
          </p>
        </div>

        {/* Bottom Footer */}
        <div
          tw="flex w-full items-center justify-between z-10"
          style={{ fontFamily: "IBMPlexMono" }}
        >
          <div tw="flex text-2xl text-zinc-500">shreyas.dev</div>
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
