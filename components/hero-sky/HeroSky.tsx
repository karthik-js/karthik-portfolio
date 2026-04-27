"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useSyncExternalStore } from "react";
import {
  azimuthToCompass,
  compassPoint,
  formatLocalTime,
  moonPhaseName,
  radToDeg,
} from "./metrics";
import type { BodyInfo } from "./SkyCanvas";

const SkyCanvas = dynamic(
  () => import("./SkyCanvas").then((m) => m.SkyCanvas),
  { ssr: false },
);

function hasWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const VIEWPORT_QUERY = "(min-width: 768px) and (orientation: landscape)";

function subscribeReducedMotion(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}
function getReducedMotionServer() {
  return false;
}

function subscribeViewport(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia(VIEWPORT_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getViewportEligible() {
  return window.matchMedia(VIEWPORT_QUERY).matches;
}
function getViewportEligibleServer() {
  return false;
}

function subscribeNoop() {
  return () => {};
}
function getEnabled() {
  return hasWebGL();
}
function getEnabledServer() {
  return false;
}

function BodyTooltip({ info }: { info: BodyInfo }) {
  const isMoon = info.body === "moon";
  const altRad = isMoon ? info.celestial.moonAltitude : info.celestial.sunAltitude;
  const azRad = isMoon ? info.celestial.moonAzimuth : info.celestial.sunAzimuth;
  const altDeg = radToDeg(altRad);
  const compassDeg = azimuthToCompass(azRad);
  const compass = compassPoint(compassDeg);
  const localTime = formatLocalTime(info.location.timeZone);
  const phaseName = moonPhaseName(info.celestial.moonPhase);
  const illumPct = Math.round(info.celestial.moonFraction * 100);
  const horizonNote =
    altDeg < 0 ? `${Math.abs(altDeg).toFixed(1)}° below horizon` : null;

  return (
    <div className="rounded-lg border border-border bg-background/85 backdrop-blur-md px-3 py-2 text-xs text-foreground shadow-lg min-w-[220px]">
      <div className="flex items-baseline gap-2 mb-1.5">
        <span className="text-sm font-semibold capitalize">{info.body}</span>
        {isMoon ? (
          <span className="text-muted text-[11px]">{phaseName}</span>
        ) : null}
      </div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[11px] tabular-nums">
        <dt className="text-muted">Altitude</dt>
        <dd>
          {altDeg.toFixed(1)}°
          {horizonNote ? (
            <span className="text-muted ml-1">({horizonNote})</span>
          ) : null}
        </dd>
        <dt className="text-muted">Azimuth</dt>
        <dd>
          {compassDeg.toFixed(0)}° {compass}
        </dd>
        {isMoon ? (
          <>
            <dt className="text-muted">Illumination</dt>
            <dd>{illumPct}%</dd>
          </>
        ) : null}
        <dt className="text-muted">Local time</dt>
        <dd>{localTime}</dd>
        <dt className="text-muted">From</dt>
        <dd>
          {info.location.lat.toFixed(2)}°, {info.location.lon.toFixed(2)}°
          <span className="text-muted ml-1">({info.location.source})</span>
        </dd>
      </dl>
    </div>
  );
}

function BodyMarker({ info }: { info: BodyInfo }) {
  if (info.visible < 0.1) return null;
  const left = `${((info.xNorm + 1) * 50).toFixed(2)}%`;
  const top = `${((1 - info.yNorm) * 100).toFixed(2)}%`;
  // Flip the tooltip side based on which half of the canvas the body is in
  // so it never overflows toward the off-screen edge.
  const onLeftHalf = info.xNorm < 0;

  return (
    <div
      className="absolute pointer-events-auto group"
      style={{ left, top, transform: "translate(-50%, -50%)" }}
    >
      <button
        type="button"
        aria-label={`${info.body} details`}
        className="block w-20 h-20 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-help bg-transparent"
      />
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          onLeftHalf ? "left-full ml-3" : "right-full mr-3"
        } opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150 pointer-events-none`}
      >
        <BodyTooltip info={info} />
      </div>
    </div>
  );
}

export function HeroSky() {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionServer,
  );
  const webglAvailable = useSyncExternalStore(
    subscribeNoop,
    getEnabled,
    getEnabledServer,
  );
  const viewportEligible = useSyncExternalStore(
    subscribeViewport,
    getViewportEligible,
    getViewportEligibleServer,
  );
  const enabled = webglAvailable && viewportEligible;

  const hostRef = useRef<HTMLDivElement | null>(null);
  const [bodyInfo, setBodyInfo] = useState<BodyInfo | null>(null);

  const handlePaletteChange = (illumination: number, tintHsl: string) => {
    const host = hostRef.current;
    if (!host) return;
    host.style.setProperty("--sky-light", illumination.toFixed(3));
    host.style.setProperty("--sky-tint", tintHsl);
  };

  return (
    <>
      {/* Visual backdrop layer — sits behind everything (-z-20). */}
      <div
        ref={hostRef}
        className="absolute inset-0 -z-20 overflow-hidden pointer-events-none"
        style={
          {
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, color-mix(in oklch, var(--sky-tint, transparent) 45%, transparent), transparent 70%)",
            opacity: "calc(0.35 + 0.45 * var(--sky-light, 0))",
          } as React.CSSProperties
        }
      >
        {enabled ? (
          <div className="absolute inset-0 opacity-80 dark:opacity-95">
            <SkyCanvas
              reducedMotion={reducedMotion}
              onPaletteChange={handlePaletteChange}
              onBodyChange={setBodyInfo}
            />
          </div>
        ) : null}
      </div>
      {/* Interactive marker layer — sits above the grid so the body is
          hoverable. The wrapper itself is pointer-events-none so it doesn't
          block selection of nearby hero text; only the small hit area on the
          body receives pointer events. */}
      {enabled && bodyInfo ? (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <BodyMarker info={bodyInfo} />
        </div>
      ) : null}
    </>
  );
}
