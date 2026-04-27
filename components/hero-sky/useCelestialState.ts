"use client";

import { useEffect, useMemo, useState } from "react";
import SunCalc from "suncalc";
import type { LatLon } from "@/lib/timezone-coords";

export type CelestialState = {
  sunAltitude: number;
  sunAzimuth: number;
  moonAltitude: number;
  moonAzimuth: number;
  moonPhase: number;
  moonFraction: number;
};

const TICK_MS = 60_000;

function compute(loc: LatLon, when: Date): CelestialState {
  const sun = SunCalc.getPosition(when, loc.lat, loc.lon);
  const moon = SunCalc.getMoonPosition(when, loc.lat, loc.lon);
  const moonIllum = SunCalc.getMoonIllumination(when);
  return {
    sunAltitude: sun.altitude,
    sunAzimuth: sun.azimuth,
    moonAltitude: moon.altitude,
    moonAzimuth: moon.azimuth,
    moonPhase: moonIllum.phase,
    moonFraction: moonIllum.fraction,
  };
}

export function useCelestialState(loc: LatLon): CelestialState {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  return useMemo(
    () => compute(loc, new Date()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tick, loc.lat, loc.lon],
  );
}
