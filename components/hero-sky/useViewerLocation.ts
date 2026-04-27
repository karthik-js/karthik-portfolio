"use client";

import {
  coordsForTimeZone,
  detectTimeZone,
  type LatLon,
} from "@/lib/timezone-coords";
import { useEffect, useState } from "react";

export type ViewerLocation = LatLon & {
  source: "ip" | "timezone" | "default";
  timeZone: string;
};

const CACHE_KEY = "hero-sky-loc-v1";
const IP_TIMEOUT_MS = 2000;

function readCache(): ViewerLocation | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      typeof parsed?.lat === "number" &&
      typeof parsed?.lon === "number" &&
      typeof parsed?.timeZone === "string" &&
      typeof parsed?.source === "string"
    ) {
      return parsed as ViewerLocation;
    }
  } catch {
    /* ignore */
  }
  return null;
}

function writeCache(loc: ViewerLocation) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(loc));
  } catch {
    /* ignore */
  }
}

function fallbackFromTimeZone(): ViewerLocation {
  const tz = detectTimeZone();
  const { lat, lon } = coordsForTimeZone(tz);
  return { lat, lon, source: "timezone", timeZone: tz };
}

async function fetchIpLocation(
  signal: AbortSignal,
): Promise<ViewerLocation | null> {
  try {
    const res = await fetch("https://ipapi.co/json/", {
      signal,
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    const lat = Number(data?.latitude);
    const lon = Number(data?.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
    const tz =
      typeof data?.timezone === "string" ? data.timezone : detectTimeZone();
    return { lat, lon, source: "ip", timeZone: tz };
  } catch {
    return null;
  }
}

export function useViewerLocation(): ViewerLocation {
  const [loc, setLoc] = useState<ViewerLocation>(() => {
    if (typeof window !== "undefined") {
      const cached = readCache();
      if (cached) return cached;
    }
    return fallbackFromTimeZone();
  });

  useEffect(() => {
    // If we already have a cached IP-sourced location, no need to refetch.
    if (loc.source === "ip") return;

    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), IP_TIMEOUT_MS);

    fetchIpLocation(ctrl.signal).then((ipLoc) => {
      clearTimeout(timeout);
      if (ipLoc) {
        writeCache(ipLoc);
        setLoc(ipLoc);
      }
    });

    return () => {
      clearTimeout(timeout);
      ctrl.abort();
    };
    // Run once on mount; we intentionally don't react to `loc` changes here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loc;
}
