// Convert a sun altitude (radians) into:
//  - top/bottom sky gradient colors (rgb 0..1)
//  - overall illumination scalar 0..1
//  - star opacity 0..1 (visible only at astronomical dusk and darker)
//  - tint hsl string for page CSS modulation

export type SkyPalette = {
  top: [number, number, number];
  bottom: [number, number, number];
  illumination: number;
  starsAlpha: number;
  tintHsl: string;
};

const NIGHT_TOP: [number, number, number] = [0.02, 0.03, 0.08];
const NIGHT_BOTTOM: [number, number, number] = [0.04, 0.06, 0.14];
const TWILIGHT_TOP: [number, number, number] = [0.06, 0.09, 0.22];
const TWILIGHT_BOTTOM: [number, number, number] = [0.45, 0.25, 0.35];
const GOLDEN_TOP: [number, number, number] = [0.35, 0.45, 0.7];
const GOLDEN_BOTTOM: [number, number, number] = [1.0, 0.6, 0.35];
const DAY_TOP: [number, number, number] = [0.32, 0.55, 0.88];
const DAY_BOTTOM: [number, number, number] = [0.7, 0.85, 0.98];

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
function lerp3(
  a: [number, number, number],
  b: [number, number, number],
  t: number,
): [number, number, number] {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}
function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export function paletteForSunAltitude(
  sunAltRad: number,
  moonFraction: number,
  moonAboveHorizon: boolean,
): SkyPalette {
  const altDeg = (sunAltRad * 180) / Math.PI;

  let top: [number, number, number];
  let bottom: [number, number, number];

  if (altDeg < -12) {
    top = NIGHT_TOP;
    bottom = NIGHT_BOTTOM;
  } else if (altDeg < -6) {
    const t = smoothstep(-12, -6, altDeg);
    top = lerp3(NIGHT_TOP, TWILIGHT_TOP, t);
    bottom = lerp3(NIGHT_BOTTOM, TWILIGHT_BOTTOM, t);
  } else if (altDeg < 0) {
    const t = smoothstep(-6, 0, altDeg);
    top = lerp3(TWILIGHT_TOP, GOLDEN_TOP, t);
    bottom = lerp3(TWILIGHT_BOTTOM, GOLDEN_BOTTOM, t);
  } else if (altDeg < 8) {
    const t = smoothstep(0, 8, altDeg);
    top = lerp3(GOLDEN_TOP, DAY_TOP, t);
    bottom = lerp3(GOLDEN_BOTTOM, DAY_BOTTOM, t);
  } else {
    top = DAY_TOP;
    bottom = DAY_BOTTOM;
  }

  const sunIllum = Math.max(0, Math.min(1, (altDeg + 6) / 56));
  const moonContribution = moonAboveHorizon ? moonFraction * 0.18 : 0;
  const illumination = Math.max(sunIllum, moonContribution);

  const starsAlpha = 1 - smoothstep(-12, -3, altDeg);

  let hue = 220;
  let sat = 30;
  let light = 8;
  if (altDeg >= 8) {
    hue = 210;
    sat = 25;
    light = 70;
  } else if (altDeg >= 0) {
    const t = smoothstep(0, 8, altDeg);
    hue = lerp(28, 210, t);
    sat = lerp(70, 25, t);
    light = lerp(55, 70, t);
  } else if (altDeg >= -6) {
    const t = smoothstep(-6, 0, altDeg);
    hue = lerp(260, 28, t);
    sat = lerp(40, 70, t);
    light = lerp(25, 55, t);
  } else {
    hue = 230;
    sat = 30;
    light = 10;
  }
  const tintHsl = `hsl(${hue.toFixed(0)} ${sat.toFixed(0)}% ${light.toFixed(0)}%)`;

  return { top, bottom, illumination, starsAlpha, tintHsl };
}

// Project an altitude/azimuth (radians) onto the hero canvas using a
// viewer-centric dome: the viewer sits at the bottom-center and looks up.
// Azimuth → horizontal position (east on the left, west on the right).
// Altitude → vertical position lifted from a generous horizon line up to zenith.
// A body just below the horizon "rests" on the horizon line so it remains
// visibly in the sky for the viewer, rather than vanishing off the bottom.
//   x in [-0.9, 0.9]
//   y in [HORIZON_Y, ZENITH_Y]   (no clipping to corners)
//   visible: 1.0 unless the body is deep below the horizon (then it fades)
const HORIZON_Y = 0.32;
const ZENITH_Y = 0.88;

export function projectAltAz(
  altitudeRad: number,
  azimuthRad: number,
): { x: number; y: number; visible: number } {
  // Below ~ -25° we fade out — the body is genuinely on the far side of the world.
  const visible = smoothstep(-0.45, -0.15, altitudeRad);
  // For positioning, treat anything below the horizon as "at the horizon".
  const altForPos = Math.max(0, Math.min(Math.PI / 2, altitudeRad));
  // Azimuth is from south, increasing toward west (SunCalc convention).
  // Map it directly to horizontal: east → left, west → right.
  const x = Math.sin(azimuthRad) * 0.9;
  const y = HORIZON_Y + Math.sin(altForPos) * (ZENITH_Y - HORIZON_Y);
  return {
    x: Math.max(-0.9, Math.min(0.9, x)),
    y,
    visible,
  };
}
