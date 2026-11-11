"use client";

import { useEffect, useId, useRef, useState } from "react";
import { GLOBE, projectGlobe, type GlobeFrame } from "@/lib/globe/project";

/** Degrees of spin per second (design: 0.2° every 50 ms). */
const SPIN_SPEED = 4;
/** Re-project at most this often — the design ran at 20 fps. */
const FRAME_MS = 50;

const INITIAL_FRAME = projectGlobe(0);

type GlobeProps = {
  className?: string;
  /** Set to false to render a still globe. */
  spin?: boolean;
};

export function Globe({ className, spin = true }: GlobeProps) {
  const [frame, setFrame] = useState<GlobeFrame>(INITIAL_FRAME);
  const svgRef = useRef<SVGSVGElement>(null);
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const id = (name: string) => `${uid}-${name}`;

  useEffect(() => {
    if (!spin) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let visible = true;
    let raf = 0;
    let angle = 0;
    let last = performance.now();
    let lastDraw = 0;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 100);
      last = now;
      if (visible) {
        angle += (SPIN_SPEED * dt) / 1000;
        if (now - lastDraw >= FRAME_MS) {
          lastDraw = now;
          setFrame(projectGlobe(angle));
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Stop doing work while the globe is scrolled out of view.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    if (svgRef.current) io.observe(svgRef.current);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [spin]);

  const { SIZE, CENTER: C, RADIUS: R } = GLOBE;

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={id("fill")} cx="38%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="55%" stopColor="#161616" />
          <stop offset="100%" stopColor="#050505" />
        </radialGradient>
        <radialGradient id={id("aura")} cx="50%" cy="50%" r="50%">
          <stop offset="72%" stopColor="#E6AB3F" stopOpacity="0.24" />
          <stop offset="84%" stopColor="#FFFFFF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id("shine")} cx="30%" cy="26%" r="45%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id("dark")} cx="50%" cy="50%" r="50%">
          <stop offset="78%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.65" />
        </radialGradient>
        <linearGradient id={id("ring")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9C9C6" stopOpacity="0" />
          <stop offset="50%" stopColor="#C9C9C6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E6AB3F" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <circle cx={C} cy={C} r={R + 60} fill={`url(#${id("aura")})`} />
      <circle cx={C} cy={C} r={R} fill={`url(#${id("fill")})`} />
      <path d={frame.graticule} fill="none" stroke="#FFFFFF" strokeOpacity={0.16} strokeWidth={0.8} />
      <path d={frame.far} fill="#9C7426" fillOpacity={0.6} />
      <path d={frame.mid} fill="#E6AB3F" fillOpacity={0.85} />
      <path d={frame.near} fill="#FFE3A1" fillOpacity={0.95} />
      <circle cx={C} cy={C} r={R} fill={`url(#${id("dark")})`} />
      <circle cx={C} cy={C} r={R} fill={`url(#${id("shine")})`} />
      <path
        className="animate-dash"
        d={frame.arcs}
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity={0.85}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeDasharray="5 6"
      />
      {frame.pins.map((p, i) => (
        <g key={i}>
          <circle className="animate-ping-soft svg-origin-center" cx={p.x} cy={p.y} r={10} fill="#E6AB3F" fillOpacity={0.3} />
          <circle cx={p.x} cy={p.y} r={p.r} fill="#FFFFFF" stroke="#E6AB3F" strokeWidth={1.5} />
        </g>
      ))}
      <circle cx={C} cy={C} r={R} fill="none" stroke="#FFFFFF" strokeOpacity={0.4} strokeWidth={1.2} />
      <g transform={`rotate(-16 ${C} ${C})`}>
        <ellipse cx={C} cy={C} rx={R + 72} ry={60} fill="none" stroke={`url(#${id("ring")})`} strokeWidth={1.4} />
        <circle cx={C + R + 72} cy={C} r={4} fill="#C9C9C6" />
      </g>
    </svg>
  );
}
