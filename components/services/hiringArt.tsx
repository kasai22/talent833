import type { SVGProps } from "react";

/** Shared pieces for the hiring pages' drawn imagery (gold-on-ink pictographs) and section headings. */

export function SectionHead({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <p className="flex items-center gap-4 text-xs font-bold tracking-[0.24em] text-gold uppercase md:text-sm">
        <span aria-hidden="true" className="hidden h-px w-14 bg-gold sm:block" />
        {eyebrow}
        <span aria-hidden="true" className="hidden h-px w-14 bg-gold sm:block" />
      </p>
      <h2
        id={id}
        className="max-w-[720px] font-display text-[26px] leading-tight font-semibold tracking-[-0.015em] text-balance text-cream md:text-[36px]"
      >
        {title}
      </h2>
    </div>
  );
}

export const GOLD = "#e6ab3f";
export const GOLD_LIGHT = "#ffe3a1";
export const SILVER = "#c9c9c6";

/** Shared gradients + the striped awning fill, namespaced per SVG. */
export function SceneDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-gold`} x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor={GOLD_LIGHT} />
        <stop offset="0.55" stopColor={GOLD} />
        <stop offset="1" stopColor="#9c7426" />
      </linearGradient>
      <linearGradient id={`${id}-glow`} x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor={GOLD_LIGHT} stopOpacity="0.5" />
        <stop offset="1" stopColor={GOLD} stopOpacity="0.1" />
      </linearGradient>
      <radialGradient id={`${id}-halo`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor={GOLD} stopOpacity="0.28" />
        <stop offset="1" stopColor={GOLD} stopOpacity="0" />
      </radialGradient>
      <pattern id={`${id}-awn`} width="14" height="10" patternUnits="userSpaceOnUse">
        <rect width="14" height="10" fill="#1f1a13" />
        <rect width="7" height="10" fill={GOLD} fillOpacity="0.85" />
      </pattern>
      <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 10 5 0 10z" fill={GOLD} />
      </marker>
    </defs>
  );
}

/** Person pictogram standing on (cx, y): head + rounded shoulders. */
export function Person({ cx, y, s = 1, ...rest }: { cx: number; y: number; s?: number } & SVGProps<SVGGElement>) {
  return (
    <g {...rest}>
      <circle cx={cx} cy={y - 33 * s} r={8.5 * s} />
      <path d={`M${cx - 15 * s} ${y} v${-5 * s} a${15 * s} ${15 * s} 0 0 1 ${30 * s} 0 v${5 * s}z`} />
    </g>
  );
}

export function Sparkle({ x, y, r = 6, className }: { x: number; y: number; r?: number; className?: string }) {
  const k = r * 0.3;
  return (
    <path
      d={`M${x} ${y - r}L${x + k} ${y - k}L${x + r} ${y}L${x + k} ${y + k}L${x} ${y + r}L${x - k} ${y + k}L${x - r} ${y}L${x - k} ${y - k}Z`}
      fill={GOLD_LIGHT}
      className={className}
    />
  );
}
