/** Deterministic PRNG so the server and client render identical stars. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 1440;
const H = 900;

const STARS = (() => {
  const rand = mulberry32(833);
  return Array.from({ length: 150 }, () => ({
    cx: Math.round(rand() * W),
    cy: Math.round(rand() * H),
    r: +(0.4 + rand() * 0.7).toFixed(1),
    o: +(0.08 + rand() * 0.22).toFixed(2),
  }));
})();

export function StarField({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {STARS.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#F5F5F3" fillOpacity={s.o} />
      ))}
    </svg>
  );
}
