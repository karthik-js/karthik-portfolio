// Helpers for human-readable metrics used by the hover annotation.

export type Body = "sun" | "moon";

export function radToDeg(r: number): number {
  return (r * 180) / Math.PI;
}

// Convert SunCalc azimuth (0 = south, increasing toward west) to compass
// bearing where 0 = north, 90 = east.
export function azimuthToCompass(azRad: number): number {
  const deg = (180 + radToDeg(azRad)) % 360;
  return deg < 0 ? deg + 360 : deg;
}

const COMPASS_POINTS = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
];

export function compassPoint(bearingDeg: number): string {
  const idx = Math.round(bearingDeg / 22.5) % 16;
  return COMPASS_POINTS[idx];
}

// 0 = new, 0.25 = first quarter, 0.5 = full, 0.75 = last quarter, →1 back to new.
export function moonPhaseName(phase: number): string {
  if (phase < 0.03 || phase > 0.97) return "New Moon";
  if (phase < 0.22) return "Waxing Crescent";
  if (phase < 0.28) return "First Quarter";
  if (phase < 0.47) return "Waxing Gibbous";
  if (phase < 0.53) return "Full Moon";
  if (phase < 0.72) return "Waning Gibbous";
  if (phase < 0.78) return "Last Quarter";
  return "Waning Crescent";
}

export function formatLocalTime(timeZone: string, when: Date = new Date()): string {
  try {
    return new Intl.DateTimeFormat(undefined, {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    }).format(when);
  } catch {
    return when.toISOString().slice(11, 16) + " UTC";
  }
}
