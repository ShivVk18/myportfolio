"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const parts = (d: Date) =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: profile.timezone })
    .format(d)
    .split(":");

// Live IST clock; the colon blinks once a second.
export function Clock() {
  const [t, setT] = useState<string[] | null>(null);
  useEffect(() => {
    const tick = () => setT(parts(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="mono-label tabular-nums text-muted">
      <span className="sr-only">Local time </span>
      {t?.[0] ?? "--"}
      <span className="blink" aria-hidden="true">:</span>
      {t?.[1] ?? "--"} {profile.timezoneLabel}
    </span>
  );
}
