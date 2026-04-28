export type LatLon = { lat: number; lon: number };

const TZ_COORDS: Record<string, LatLon> = {
  // Americas
  "America/New_York": { lat: 40.71, lon: -74.01 },
  "America/Chicago": { lat: 41.88, lon: -87.63 },
  "America/Denver": { lat: 39.74, lon: -104.99 },
  "America/Los_Angeles": { lat: 34.05, lon: -118.24 },
  "America/Phoenix": { lat: 33.45, lon: -112.07 },
  "America/Anchorage": { lat: 61.22, lon: -149.9 },
  "America/Toronto": { lat: 43.65, lon: -79.38 },
  "America/Vancouver": { lat: 49.28, lon: -123.12 },
  "America/Mexico_City": { lat: 19.43, lon: -99.13 },
  "America/Sao_Paulo": { lat: -23.55, lon: -46.63 },
  "America/Buenos_Aires": { lat: -34.61, lon: -58.38 },
  "America/Argentina/Buenos_Aires": { lat: -34.61, lon: -58.38 },
  "America/Bogota": { lat: 4.71, lon: -74.07 },
  "America/Lima": { lat: -12.05, lon: -77.04 },
  "America/Santiago": { lat: -33.45, lon: -70.67 },
  "America/Caracas": { lat: 10.49, lon: -66.88 },
  "America/Halifax": { lat: 44.65, lon: -63.58 },
  "America/St_Johns": { lat: 47.56, lon: -52.71 },
  "America/Honolulu": { lat: 21.31, lon: -157.86 },

  // Europe
  "Europe/London": { lat: 51.51, lon: -0.13 },
  "Europe/Dublin": { lat: 53.35, lon: -6.26 },
  "Europe/Paris": { lat: 48.86, lon: 2.35 },
  "Europe/Berlin": { lat: 52.52, lon: 13.41 },
  "Europe/Madrid": { lat: 40.42, lon: -3.7 },
  "Europe/Rome": { lat: 41.9, lon: 12.5 },
  "Europe/Amsterdam": { lat: 52.37, lon: 4.9 },
  "Europe/Brussels": { lat: 50.85, lon: 4.35 },
  "Europe/Vienna": { lat: 48.21, lon: 16.37 },
  "Europe/Zurich": { lat: 47.38, lon: 8.54 },
  "Europe/Stockholm": { lat: 59.33, lon: 18.07 },
  "Europe/Oslo": { lat: 59.91, lon: 10.75 },
  "Europe/Copenhagen": { lat: 55.68, lon: 12.57 },
  "Europe/Helsinki": { lat: 60.17, lon: 24.94 },
  "Europe/Warsaw": { lat: 52.23, lon: 21.01 },
  "Europe/Prague": { lat: 50.08, lon: 14.43 },
  "Europe/Budapest": { lat: 47.5, lon: 19.04 },
  "Europe/Athens": { lat: 37.98, lon: 23.73 },
  "Europe/Istanbul": { lat: 41.01, lon: 28.98 },
  "Europe/Moscow": { lat: 55.76, lon: 37.62 },
  "Europe/Kyiv": { lat: 50.45, lon: 30.52 },
  "Europe/Lisbon": { lat: 38.72, lon: -9.13 },
  "Europe/Bucharest": { lat: 44.43, lon: 26.1 },

  // Asia
  "Asia/Tokyo": { lat: 35.68, lon: 139.69 },
  "Asia/Seoul": { lat: 37.57, lon: 126.98 },
  "Asia/Shanghai": { lat: 31.23, lon: 121.47 },
  "Asia/Hong_Kong": { lat: 22.32, lon: 114.17 },
  "Asia/Taipei": { lat: 25.03, lon: 121.57 },
  "Asia/Singapore": { lat: 1.35, lon: 103.82 },
  "Asia/Bangkok": { lat: 13.76, lon: 100.5 },
  "Asia/Jakarta": { lat: -6.21, lon: 106.85 },
  "Asia/Manila": { lat: 14.6, lon: 120.98 },
  "Asia/Kuala_Lumpur": { lat: 3.14, lon: 101.69 },
  "Asia/Ho_Chi_Minh": { lat: 10.82, lon: 106.63 },
  "Asia/Kolkata": { lat: 22.57, lon: 88.36 },
  "Asia/Calcutta": { lat: 22.57, lon: 88.36 },
  "Asia/Karachi": { lat: 24.86, lon: 67.01 },
  "Asia/Dhaka": { lat: 23.81, lon: 90.41 },
  "Asia/Colombo": { lat: 6.93, lon: 79.86 },
  "Asia/Kathmandu": { lat: 27.72, lon: 85.32 },
  "Asia/Dubai": { lat: 25.2, lon: 55.27 },
  "Asia/Riyadh": { lat: 24.71, lon: 46.68 },
  "Asia/Tehran": { lat: 35.69, lon: 51.39 },
  "Asia/Jerusalem": { lat: 31.78, lon: 35.22 },
  "Asia/Baghdad": { lat: 33.31, lon: 44.36 },
  "Asia/Tashkent": { lat: 41.3, lon: 69.24 },
  "Asia/Almaty": { lat: 43.24, lon: 76.92 },
  "Asia/Yekaterinburg": { lat: 56.84, lon: 60.61 },
  "Asia/Vladivostok": { lat: 43.12, lon: 131.89 },

  // Africa
  "Africa/Cairo": { lat: 30.04, lon: 31.24 },
  "Africa/Lagos": { lat: 6.52, lon: 3.38 },
  "Africa/Nairobi": { lat: -1.29, lon: 36.82 },
  "Africa/Johannesburg": { lat: -26.2, lon: 28.04 },
  "Africa/Casablanca": { lat: 33.57, lon: -7.59 },
  "Africa/Algiers": { lat: 36.75, lon: 3.06 },
  "Africa/Tunis": { lat: 36.81, lon: 10.18 },
  "Africa/Addis_Ababa": { lat: 9.03, lon: 38.74 },
  "Africa/Accra": { lat: 5.6, lon: -0.19 },

  // Oceania
  "Australia/Sydney": { lat: -33.87, lon: 151.21 },
  "Australia/Melbourne": { lat: -37.81, lon: 144.96 },
  "Australia/Brisbane": { lat: -27.47, lon: 153.03 },
  "Australia/Perth": { lat: -31.95, lon: 115.86 },
  "Australia/Adelaide": { lat: -34.93, lon: 138.6 },
  "Pacific/Auckland": { lat: -36.85, lon: 174.76 },
  "Pacific/Fiji": { lat: -18.12, lon: 178.42 },
  "Pacific/Honolulu": { lat: 21.31, lon: -157.86 },

  // UTC / generic
  UTC: { lat: 0, lon: 0 },
  "Etc/UTC": { lat: 0, lon: 0 },
  "Etc/GMT": { lat: 0, lon: 0 },
};

const CONTINENT_DEFAULT_LAT: Record<string, number> = {
  Africa: 0,
  America: 20,
  Antarctica: -75,
  Asia: 30,
  Atlantic: 30,
  Australia: -25,
  Europe: 50,
  Indian: -10,
  Pacific: -10,
};

function offsetMinutesFromTimeZone(tz: string, when: Date): number {
  // Use shortOffset to get e.g. "GMT+5:30" or "GMT-8".
  try {
    const dtf = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      timeZoneName: "shortOffset",
      hour: "numeric",
    });
    const parts = dtf.formatToParts(when);
    const offsetPart = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT";
    const m = /GMT([+-])(\d{1,2})(?::(\d{2}))?/.exec(offsetPart);
    if (!m) return 0;
    const sign = m[1] === "+" ? 1 : -1;
    const hours = Number.parseInt(m[2], 10);
    const mins = m[3] ? Number.parseInt(m[3], 10) : 0;
    return sign * (hours * 60 + mins);
  } catch {
    return 0;
  }
}

export function coordsForTimeZone(tz: string): LatLon {
  if (TZ_COORDS[tz]) return TZ_COORDS[tz];
  const continent = tz.split("/")[0];
  const lat = CONTINENT_DEFAULT_LAT[continent] ?? 0;
  const offsetMin = offsetMinutesFromTimeZone(tz, new Date());
  // 15° of longitude per hour (mean solar time approximation).
  const lon = (offsetMin / 60) * 15;
  return { lat, lon };
}

export function detectTimeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}
