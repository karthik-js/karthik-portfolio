"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { paletteForSunAltitude, projectAltAz } from "./skyColors";
import { useCelestialState } from "./useCelestialState";
import { useViewerLocation } from "./useViewerLocation";

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform vec2  uResolution;
  uniform vec3  uSkyTop;
  uniform vec3  uSkyBottom;
  uniform vec2  uSunPos;       // x in [-1,1], y in [0,1]
  uniform vec2  uMoonPos;
  uniform float uSunVisible;   // 0..1
  uniform float uMoonVisible;  // 0..1
  uniform float uMoonPhase;    // 0..1 (0=new, 0.5=full)
  uniform float uMoonFraction; // 0..1 illuminated fraction
  uniform float uStarsAlpha;   // 0..1
  uniform float uTime;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // Layered star field with twinkle.
  float starLayer(vec2 uv, float density, float seed) {
    vec2 g = floor(uv);
    vec2 f = fract(uv) - 0.5;
    float h = hash21(g + seed);
    float thresh = 1.0 - density;
    if (h < thresh) return 0.0;
    float size = mix(0.06, 0.16, hash21(g + seed + 7.3));
    float d = length(f);
    float core = smoothstep(size, 0.0, d);
    float twinkle = 0.6 + 0.4 * sin(uTime * (1.0 + h * 3.0) + h * 31.4);
    return core * twinkle;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    // Aspect-corrected coords with EQUAL pixel scale on both axes
    // (1 unit on x == 1 unit on y == canvas-height pixels).
    // p.x in [-aspect/2, +aspect/2], p.y in [0, 1].
    vec2 p = vec2((uv.x - 0.5) * aspect, uv.y);

    // --- Sky gradient ---
    vec3 col = mix(uSkyBottom, uSkyTop, smoothstep(0.0, 1.0, uv.y));

    // --- Stars (only when uStarsAlpha is meaningful) ---
    if (uStarsAlpha > 0.01) {
      vec2 starUv = vec2(uv.x * aspect, uv.y);
      float s = starLayer(starUv * 60.0, 0.012, 1.0)
              + starLayer(starUv * 100.0, 0.008, 13.0) * 0.7;
      // Stars fade toward the horizon for atmosphere.
      float horizonFade = smoothstep(0.05, 0.35, uv.y);
      col += vec3(s) * uStarsAlpha * horizonFade;
    }

    // --- Sun ---
    if (uSunVisible > 0.001) {
      // uSunPos.x is normalized [-1, 1] across canvas width; map into p.x scale.
      vec2 sp = vec2(uSunPos.x * aspect * 0.5, uSunPos.y);
      float d = length(p - sp);
      float core = smoothstep(0.045, 0.0, d);
      float halo = smoothstep(0.45, 0.0, d);
      vec3 sunCol = vec3(1.0, 0.88, 0.6);
      col += (sunCol * core + sunCol * halo * halo * 0.55) * uSunVisible;
    }

    // --- Moon ---
    if (uMoonVisible > 0.001) {
      vec2 mp = vec2(uMoonPos.x * aspect * 0.5, uMoonPos.y);
      vec2 d2 = p - mp;
      float r = 0.055;
      float d = length(d2);
      // Soft disk edge.
      float disk = smoothstep(r, r - 0.004, d);

      // Disk-local coords in [-1,1].
      float nx = d2.x / r;
      float ny = d2.y / r;

      // Phase-mask terminator: lit half determined by phase (0=new, 0.5=full, 1=new).
      // Approximate the terminator as a half-ellipse whose x-extent
      // = -cos(phaseAngle), so phase=0 → fully unlit, phase=0.5 → fully lit.
      float phaseAngle = uMoonPhase * 6.2831853;
      float ellX = -cos(phaseAngle) * sqrt(max(0.0, 1.0 - ny * ny));
      // Sign side flips at full moon — for waxing (phase<0.5) lit on +x, for waning lit on -x.
      float litMask;
      if (uMoonPhase < 0.5) {
        litMask = smoothstep(ellX - 0.04, ellX + 0.04, nx);
      } else {
        litMask = 1.0 - smoothstep(-ellX - 0.04, -ellX + 0.04, nx);
      }

      float halo = smoothstep(0.28, 0.0, d);
      vec3 moonLit = vec3(0.94, 0.95, 1.0) * (0.55 + 0.45 * uMoonFraction);
      vec3 moonDark = vec3(0.10, 0.11, 0.16);
      vec3 moonSurface = mix(moonDark, moonLit, litMask);
      col += (moonSurface * disk + vec3(0.85, 0.88, 1.0) * halo * halo * 0.32 * uMoonFraction)
             * uMoonVisible;
    }

    gl_FragColor = vec4(col, 1.0);
  }
`;

import type { CelestialState } from "./useCelestialState";
import type { ViewerLocation } from "./useViewerLocation";

// GLSL-style smoothstep on the JS side for shaping visibility curves.
function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export type SkyCanvasProps = {
  reducedMotion?: boolean;
  onPaletteChange?: (illumination: number, tintHsl: string) => void;
  onBodyChange?: (info: BodyInfo) => void;
};

export type BodyInfo = {
  body: "sun" | "moon";
  // Normalized canvas coordinates: x in [-1, 1] (left→right), y in [0, 1] (bottom→top).
  xNorm: number;
  yNorm: number;
  visible: number;
  celestial: CelestialState;
  location: ViewerLocation;
};

export function SkyCanvas({
  reducedMotion = false,
  onPaletteChange,
  onBodyChange,
}: SkyCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const location = useViewerLocation();
  const celestial = useCelestialState({ lat: location.lat, lon: location.lon });

  // Latest values for the RAF loop without re-creating the renderer.
  const celestialRef = useRef(celestial);
  const onPaletteChangeRef = useRef(onPaletteChange);
  const onBodyChangeRef = useRef(onBodyChange);
  useEffect(() => {
    celestialRef.current = celestial;
  }, [celestial]);
  useEffect(() => {
    onPaletteChangeRef.current = onPaletteChange;
  }, [onPaletteChange]);
  useEffect(() => {
    onBodyChangeRef.current = onBodyChange;
  }, [onBodyChange]);

  // Emit a body update when celestial state or location changes. We pick the
  // body by which is *clearly above the horizon* — sun preferred during day,
  // moon at night. Both can have non-zero rendered visibility during dawn/dusk
  // overlap; in that window, prefer whichever is higher in the sky.
  useEffect(() => {
    const sunProj = projectAltAz(celestial.sunAltitude, celestial.sunAzimuth);
    const moonProj = projectAltAz(celestial.moonAltitude, celestial.moonAzimuth);
    const sunAboveHorizon = celestial.sunAltitude > -0.1; // ~ -6°
    const moonAboveHorizon = celestial.moonAltitude > -0.1;
    let useSun: boolean;
    if (sunAboveHorizon && !moonAboveHorizon) useSun = true;
    else if (!sunAboveHorizon && moonAboveHorizon) useSun = false;
    else if (!sunAboveHorizon && !moonAboveHorizon) {
      // Both deep below — fall back to whichever is closer to the horizon.
      useSun = celestial.sunAltitude >= celestial.moonAltitude;
    } else {
      // Both up — pick the higher one (more visually prominent).
      useSun = celestial.sunAltitude >= celestial.moonAltitude;
    }
    const proj = useSun ? sunProj : moonProj;
    onBodyChangeRef.current?.({
      body: useSun ? "sun" : "moon",
      xNorm: proj.x,
      yNorm: proj.y,
      visible: proj.visible,
      celestial,
      location,
    });
  }, [celestial, location]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      // WebGL unavailable — silently bail.
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms: Record<string, THREE.IUniform> = {
      uResolution: { value: new THREE.Vector2(1, 1) },
      uSkyTop: { value: new THREE.Color(0.04, 0.06, 0.14) },
      uSkyBottom: { value: new THREE.Color(0.06, 0.09, 0.18) },
      uSunPos: { value: new THREE.Vector2(0, -1) },
      uMoonPos: { value: new THREE.Vector2(0, -1) },
      uSunVisible: { value: 0 },
      uMoonVisible: { value: 0 },
      uMoonPhase: { value: 0.5 },
      uMoonFraction: { value: 1 },
      uStarsAlpha: { value: 0 },
      uTime: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERT,
      fragmentShader: FRAG,
      depthTest: false,
      depthWrite: false,
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);

    const setSize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      (uniforms.uResolution.value as THREE.Vector2).set(w * dpr, h * dpr);
    };
    setSize();

    const ro = new ResizeObserver(setSize);
    ro.observe(container);

    let isVisible = true;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) isVisible = e.isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(container);

    let pageVisible = !document.hidden;
    const onVis = () => {
      pageVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);

    const updateUniformsFromState = () => {
      const c = celestialRef.current;
      const sunProj = projectAltAz(c.sunAltitude, c.sunAzimuth);
      const moonProj = projectAltAz(c.moonAltitude, c.moonAzimuth);
      const moonAbove = c.moonAltitude > 0;

      const palette = paletteForSunAltitude(c.sunAltitude, c.moonFraction, moonAbove);

      (uniforms.uSkyTop.value as THREE.Color).setRGB(...palette.top);
      (uniforms.uSkyBottom.value as THREE.Color).setRGB(...palette.bottom);
      (uniforms.uSunPos.value as THREE.Vector2).set(sunProj.x, sunProj.y);
      (uniforms.uMoonPos.value as THREE.Vector2).set(moonProj.x, moonProj.y);

      // Render BOTH bodies whenever they're above (or near) the horizon so
      // dawn/dusk transitions are continuous (e.g. moon setting while sun
      // rises near a full moon). Each body's own altitude-based visibility
      // already fades it out below the horizon.
      // The moon, however, is heavily attenuated in bright daylight so it
      // doesn't pop against a blue sky — real daytime moons look pale.
      const sunDeg = (c.sunAltitude * 180) / Math.PI;
      const moonDaylight = smoothstep(-3, 15, sunDeg); // 0 night → 1 bright day
      uniforms.uSunVisible.value = sunProj.visible;
      uniforms.uMoonVisible.value = moonProj.visible * (1 - 0.82 * moonDaylight);
      uniforms.uMoonPhase.value = c.moonPhase;
      uniforms.uMoonFraction.value = c.moonFraction;
      uniforms.uStarsAlpha.value = palette.starsAlpha;

      onPaletteChangeRef.current?.(palette.illumination, palette.tintHsl);
    };

    updateUniformsFromState();

    const start = performance.now();
    let raf = 0;
    const loop = () => {
      if (isVisible && pageVisible) {
        uniforms.uTime.value = (performance.now() - start) / 1000;
        updateUniformsFromState();
        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(loop);
    };

    if (reducedMotion) {
      // Render a single static frame at current celestial state; no twinkle, no RAF.
      uniforms.uTime.value = 0;
      updateUniformsFromState();
      renderer.render(scene, camera);
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      quad.geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
    // We intentionally do NOT depend on celestial here — we read the latest
    // value via the ref so the renderer is created exactly once per mount.
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      role="presentation"
      className="absolute inset-0"
    />
  );
}
