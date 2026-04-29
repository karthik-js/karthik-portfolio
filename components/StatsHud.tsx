"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type StaticStats = {
  resolution: string;
  dpr: number;
  tz: string;
  cores: number;
  ram: number | null;
  gpu: string;
};

type ConnectionStats = {
  netType: string | null;
  downlink: number | null;
  rtt: number | null;
};

function readGpu(): string {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    if (!gl) return "Unknown";
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    if (!ext) return "Unknown";
    return (
      (gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) as string) || "Unknown"
    );
  } catch {
    return "Unknown";
  }
}

let cachedStaticStats: StaticStats | null = null;
function readStaticStats(): StaticStats {
  cachedStaticStats ??= {
    resolution: `${window.screen.width}×${window.screen.height}`,
    dpr: window.devicePixelRatio,
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
    cores: navigator.hardwareConcurrency ?? 0,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ram: (navigator as any).deviceMemory ?? null,
    gpu: readGpu(),
  };
  return cachedStaticStats;
}

let cachedConnection: ConnectionStats = {
  netType: null,
  downlink: null,
  rtt: null,
};
function readConnection(): ConnectionStats {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const conn = (navigator as any).connection ?? null;
  const next: ConnectionStats = {
    netType: conn?.effectiveType ?? null,
    downlink: conn?.downlink ?? null,
    rtt: conn?.rtt ?? null,
  };
  if (
    next.netType === cachedConnection.netType &&
    next.downlink === cachedConnection.downlink &&
    next.rtt === cachedConnection.rtt
  ) {
    return cachedConnection;
  }
  cachedConnection = next;
  return cachedConnection;
}

// ── useSyncExternalStore helpers ─────────────────────────────────────────────

function subscribeNoop() {
  return () => {};
}

function subscribeConnection(cb: () => void) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const conn = (navigator as any).connection ?? null;
  conn?.addEventListener("change", cb);
  return () => conn?.removeEventListener("change", cb);
}

const serverConnectionStats: ConnectionStats = {
  netType: null,
  downlink: null,
  rtt: null,
};

// ── Isolated child — only this re-renders on every fps tick ──────────────────
function FpsDisplay() {
  const [fps, setFps] = useState(0);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    lastTimeRef.current = performance.now();
    const tick = () => {
      frameCountRef.current++;
      const now = performance.now();
      if (now - lastTimeRef.current >= 1000) {
        setFps(frameCountRef.current);
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return <span className="tabular-nums">{fps}</span>;
}

export function StatsHud() {
  const staticStats = useSyncExternalStore(
    subscribeNoop,
    readStaticStats,
    () => null,
  );
  const conn = useSyncExternalStore(
    subscribeConnection,
    readConnection,
    () => serverConnectionStats,
  );

  if (!staticStats) return null;

  const netParts: string[] = [];
  if (conn.netType) netParts.push(conn.netType);
  if (conn.downlink !== null) netParts.push(`${conn.downlink} Mbps`);
  if (conn.rtt !== null) netParts.push(`${conn.rtt} ms`);

  return (
    <details className="fixed bottom-4 left-4 z-50 font-mono text-[10px] leading-relaxed text-foreground/50 select-none">
      <summary className="cursor-pointer hover:text-foreground/80 transition-colors list-none flex items-center gap-1">
        <span className="[details:not([open])_&]:inline hidden">▶</span>
        <span className="[details[open]_&]:inline hidden">▼</span>
        <FpsDisplay /> FPS
      </summary>
      <div className="mt-1 pointer-events-none">
        {staticStats.resolution} · DPR {staticStats.dpr} · {staticStats.tz}
        <br />
        {staticStats.cores}C
        {staticStats.ram === null ? "" : ` · ${staticStats.ram} GB`}
        {netParts.length > 0 ? ` · ${netParts.join(" · ")}` : ""}
        <br />
        {staticStats.gpu}
      </div>
    </details>
  );
}
