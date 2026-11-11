import { LAND_POINTS } from "./land";

type Vec3 = readonly [number, number, number];
type LatLng = readonly [number, number];

export type GlobePin = { x: number; y: number; r: number };

export type GlobeFrame = {
  /** Land dots, split into three depth bands (back → front). */
  far: string;
  mid: string;
  near: string;
  graticule: string;
  arcs: string;
  pins: GlobePin[];
};

/** Geometry of the SVG the globe is drawn into (viewBox is SIZE × SIZE). */
export const GLOBE = {
  SIZE: 780,
  CENTER: 390,
  RADIUS: 300,
  DOT: 2.1,
  TILT_DEG: 18,
  ROTATION_OFFSET_DEG: -82,
} as const;

/** Visakhapatnam — the hub every connection arc starts from. */
const HUB: LatLng = [17.7, 83.3];

const CITIES: readonly LatLng[] = [
  [19.08, 72.88], // Mumbai
  [25.2, 55.27], // Dubai
  [1.35, 103.82], // Singapore
  [51.5, -0.12], // London
  [-33.87, 151.2], // Sydney
  [35.68, 139.7], // Tokyo
  [40.71, -74.0], // New York
  [-1.29, 36.82], // Nairobi
];

const DEG = Math.PI / 180;

function toVec(lat: number, lng: number): Vec3 {
  return [
    Math.cos(lat * DEG) * Math.sin(lng * DEG),
    Math.sin(lat * DEG),
    Math.cos(lat * DEG) * Math.cos(lng * DEG),
  ];
}

/** Unit vectors for every land point, computed once at module load. */
const LAND: Float64Array = (() => {
  const n = LAND_POINTS.length / 2;
  const out = new Float64Array(n * 3);
  for (let i = 0; i < n; i++) {
    const [x, y, z] = toVec(LAND_POINTS[2 * i] / 10, LAND_POINTS[2 * i + 1] / 10);
    out[3 * i] = x;
    out[3 * i + 1] = y;
    out[3 * i + 2] = z;
  }
  return out;
})();

const GRATICULE_LINES: Vec3[][] = (() => {
  const lines: Vec3[][] = [];
  for (let lng = -180; lng < 180; lng += 30) {
    const pts: Vec3[] = [];
    for (let lat = -90; lat <= 90; lat += 5) pts.push(toVec(lat, lng));
    lines.push(pts);
  }
  for (let lat = -60; lat <= 60; lat += 30) {
    const pts: Vec3[] = [];
    for (let lng = -180; lng <= 180; lng += 5) pts.push(toVec(lat, lng));
    lines.push(pts);
  }
  return lines;
})();

const f = (v: number) => v.toFixed(1);

/**
 * Projects the globe for a given spin angle (degrees) and returns
 * SVG path strings ready to drop into `d` attributes.
 */
export function projectGlobe(spinDeg: number): GlobeFrame {
  const { CENTER: C, RADIUS: R, DOT: D } = GLOBE;
  const r = (spinDeg + GLOBE.ROTATION_OFFSET_DEG) * DEG;
  const t = GLOBE.TILT_DEG * DEG;
  const cr = Math.cos(r);
  const sr = Math.sin(r);
  const ct = Math.cos(t);
  const st = Math.sin(t);

  const rotate = (x: number, y: number, z: number): Vec3 => {
    const x1 = x * cr + z * sr;
    const z1 = -x * sr + z * cr;
    return [x1, y * ct - z1 * st, y * st + z1 * ct];
  };
  const sx = (q: Vec3) => f(C + R * q[0]);
  const sy = (q: Vec3) => f(C - R * q[1]);

  // Land dots, drawn as two-arc circles so a whole band is a single path.
  let far = "";
  let mid = "";
  let near = "";
  for (let i = 0; i < LAND.length; i += 3) {
    const q = rotate(LAND[i], LAND[i + 1], LAND[i + 2]);
    const z = q[2];
    if (z <= 0.03) continue;
    const rr = D * (0.45 + 0.55 * z);
    const X = C + R * q[0];
    const Y = C - R * q[1];
    const d = `M${f(X - rr)} ${f(Y)}a${f(rr)} ${f(rr)} 0 1 0 ${f(2 * rr)} 0a${f(rr)} ${f(rr)} 0 1 0 ${f(-2 * rr)} 0`;
    if (z < 0.35) far += d;
    else if (z < 0.7) mid += d;
    else near += d;
  }

  // Graticule: only the segments on the visible hemisphere.
  let graticule = "";
  for (const pts of GRATICULE_LINES) {
    let on = false;
    for (const p of pts) {
      const q = rotate(p[0], p[1], p[2]);
      if (q[2] > 0) {
        graticule += `${on ? "L" : "M"}${sx(q)} ${sy(q)}`;
        on = true;
      } else on = false;
    }
  }

  // Pins for the hub and each city that faces the viewer.
  const pins: GlobePin[] = [];
  [HUB, ...CITIES].forEach(([lat, lng], j) => {
    const q = rotate(...toVec(lat, lng));
    if (q[2] > 0.08) pins.push({ x: C + R * q[0], y: C - R * q[1], r: j === 0 ? 5 : 3.5 });
  });

  // Great-circle arcs from the hub, lifted off the surface mid-flight.
  const A = toVec(HUB[0], HUB[1]);
  const visible = (q: Vec3) => q[2] > 0 || q[0] * q[0] + q[1] * q[1] > 1;
  let arcs = "";
  for (const [lat, lng] of CITIES) {
    const B = toVec(lat, lng);
    const w = Math.acos(Math.min(1, A[0] * B[0] + A[1] * B[1] + A[2] * B[2]));
    const sw = Math.sin(w);
    let on = false;
    for (let s = 0; s <= 40; s++) {
      const u = s / 40;
      const a = Math.sin((1 - u) * w) / sw;
      const b = Math.sin(u * w) / sw;
      const h = 1 + 0.09 * w * Math.sin(Math.PI * u);
      const q = rotate((a * A[0] + b * B[0]) * h, (a * A[1] + b * B[1]) * h, (a * A[2] + b * B[2]) * h);
      if (visible(q)) {
        arcs += `${on ? "L" : "M"}${sx(q)} ${sy(q)}`;
        on = true;
      } else on = false;
    }
  }

  return { far, mid, near, graticule, arcs, pins };
}
