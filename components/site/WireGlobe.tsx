import { useId } from "react";
import { cn } from "@/components/ui";

const meridianDelays = [0, -4, -8, -12, -16, -20];
const parallels = [
  { cy: 55, rx: 130, ry: 21 },
  { cy: 150, rx: 225, ry: 36 },
  { cy: 280, rx: 260, ry: 42 },
  { cy: 410, rx: 225, ry: 36 },
  { cy: 505, rx: 130, ry: 21 },
];

/**
 * Wireframe globe with spinning meridians and a dashed gold arc.
 * Purely decorative; size and position it with `className`.
 */
export function WireGlobe({ className }: { className?: string }) {
  const id = useId();
  const fill = `${id}-fill`;
  const clip = `${id}-clip`;

  return (
    <svg viewBox="0 0 560 560" aria-hidden="true" focusable="false" className={cn("pointer-events-none", className)}>
      <defs>
        <radialGradient id={fill} cx="36%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#3A3A3A" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#161616" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#060606" stopOpacity="0.2" />
        </radialGradient>
        <clipPath id={clip}>
          <circle cx="280" cy="280" r="260" />
        </clipPath>
      </defs>
      <circle cx="280" cy="280" r="274" fill="none" stroke="#C9C9C6" strokeOpacity={0.12} strokeWidth={10} />
      <circle cx="280" cy="280" r="260" fill={`url(#${fill})`} />
      <g clipPath={`url(#${clip})`} fill="none" stroke="#FFFFFF" strokeOpacity={0.22}>
        {parallels.map((p) => (
          <ellipse key={p.cy} cx="280" cy={p.cy} rx={p.rx} ry={p.ry} />
        ))}
        {meridianDelays.map((d) => (
          <ellipse
            key={d}
            className="animate-meridian svg-origin-center"
            style={{ animationDelay: `${d}s` }}
            cx="280"
            cy="280"
            rx="260"
            ry="260"
          />
        ))}
      </g>
      <circle cx="280" cy="280" r="260" fill="none" stroke="#FFFFFF" strokeOpacity={0.35} />
      <path
        className="animate-dash"
        d="M 124 306 Q 280 46 423 228"
        fill="none"
        stroke="#E6AB3F"
        strokeWidth={1.6}
        strokeDasharray="5 6"
      />
      <circle cx="124" cy="306" r="4" fill="#FFFFFF" />
      <circle cx="423" cy="228" r="4" fill="#FFFFFF" />
    </svg>
  );
}
