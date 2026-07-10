import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title");

  const robotoCondensedMedium = await readFile(
    join(process.cwd(), "src/assets/fonts/RobotoCondensed-Medium.ttf")
  );

  return new ImageResponse(
    (
      <div tw="w-full h-full flex items-center justify-center text-white bg-black p-16">
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 left-16" />
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 right-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 top-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 bottom-16" />

        <div tw="absolute flex flex-col items-end bottom-16 right-16">
          <svg
            width={64}
            height={32}
            viewBox="0 0 512 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "white", marginBottom: 8 }}
          >
            <rect
              x="8"
              y="8"
              width="496"
              height="240"
              rx="24"
              ry="24"
              fill="currentColor"
              opacity="0.08"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="RobotoCondensed"
              fontWeight={700}
              fontSize={160}
              fill="currentColor"
            >
              S
            </text>
          </svg>
          <span
            style={{
              fontFamily: "RobotoCondensed",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "white",
            }}
          >
            SHREYAS
          </span>
        </div>

        <h1
          tw="text-center font-medium"
          style={{
            fontFamily: "RobotoCondensed",
            fontSize: 64,
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "RobotoCondensed",
          data: robotoCondensedMedium,
          weight: 500,
        },
      ],
    }
  );
}
