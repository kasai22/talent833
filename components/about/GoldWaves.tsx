/**
 * Decorative gold light trails for the About hero: a fan of curves sweeping
 * along the bottom edge, a dotted ribbon riding them, and a single arc
 * glancing in from the top right.
 */
export function GoldWaves({ className }: { className?: string }) {
  const lines = Array.from({ length: 6 }, (_, i) => i);
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMax slice"
      className={className}
    >
      <defs>
        <linearGradient id="gw-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#e6ab3f" stopOpacity="0" />
          <stop offset="0.35" stopColor="#e6ab3f" stopOpacity="0.55" />
          <stop offset="0.7" stopColor="#ffe3a1" stopOpacity="0.9" />
          <stop offset="1" stopColor="#e6ab3f" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="gw-arc" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0" stopColor="#e6ab3f" stopOpacity="0" />
          <stop offset="0.6" stopColor="#e6ab3f" stopOpacity="0.7" />
          <stop offset="1" stopColor="#ffe3a1" stopOpacity="0.2" />
        </linearGradient>
        <filter id="gw-glow" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Bottom sweep */}
      <g fill="none" stroke="url(#gw-fade)" filter="url(#gw-glow)">
        {lines.map((i) => (
          <path
            key={i}
            d={`M-40 ${780 - i * 5} C 380 ${730 - i * 10}, 720 ${805 - i * 3}, 1040 ${760 - i * 7} S 1480 ${690 - i * 9}, 1660 ${700 - i * 12}`}
            strokeWidth={i === 2 ? 1.6 : 0.8}
            strokeOpacity={1 - i * 0.12}
          />
        ))}
      </g>
      <path
        d="M560 800 C 820 780, 1000 750, 1200 740 S 1500 700, 1660 670"
        fill="none"
        stroke="#e6ab3f"
        strokeOpacity="0.45"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="0.1 9"
      />

      {/* Top-right arc */}
      <path
        d="M1250 300 C 1380 230, 1500 180, 1660 150"
        fill="none"
        stroke="url(#gw-arc)"
        strokeWidth="1.4"
        filter="url(#gw-glow)"
      />
    </svg>
  );
}
