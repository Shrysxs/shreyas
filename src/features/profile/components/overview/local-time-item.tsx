"use client";

import { ClockIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { IntroItem } from "./intro-item";

const TIME_ZONE = "Asia/Kolkata";

const timeFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const hourFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  hour: "numeric",
  hourCycle: "h23",
});

function getStatus(hour: number) {
  if (hour < 6) return "probably asleep";
  if (hour < 10) return "starting the day";
  if (hour < 19) return "heads-down building";
  return "probably coding";
}

export function LocalTimeItem() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();

    const interval = setInterval(tick, 10_000);
    return () => clearInterval(interval);
  }, []);

  if (!now) {
    // Same width as the real value, so nothing shifts once it renders
    return <IntroItem icon={ClockIcon} content="--:-- -- IST" />;
  }

  const parts = timeFormat.formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value;

  return (
    <IntroItem
      icon={ClockIcon}
      content={
        <>
          <time dateTime={now.toISOString()}>
            {part("hour")}
            <span className="motion-safe:animate-blink">:</span>
            {part("minute")} {part("dayPeriod")} IST
          </time>
          <span className="text-muted-foreground">
            {" · "}
            {getStatus(Number(hourFormat.format(now)))}
          </span>
        </>
      }
    />
  );
}
