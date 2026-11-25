import type { ComponentType, CSSProperties, ReactNode } from "react";
import { ArrowRightIcon, CheckIcon, type IconProps } from "@/components/icons";
import { GOLD, GOLD_LIGHT, Person, SILVER, SceneDefs, Sparkle } from "@/components/services/hiringArt";
import { darkPanel, goldPanel, iconTile } from "@/components/services/trainingUi";
import { Container, Eyebrow, SectionTitle, cn } from "@/components/ui";
import { capabilityBuilding } from "@/lib/content/capabilityBuilding";
import type { DetailItem, FocusTrack } from "@/lib/content/partnerships";

/**
 * Infographics for the six Capability Building offering pages (/services/learning-partnerships/[track]):
 * a drawn hero scene per industry, the focus-area hub, the 12-month journey, the outcome chart and
 * the campus-to-corporate bridge. Gold-on-ink, like the hiring pages.
 */

function Section({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section aria-labelledby={id} className={cn("py-14 md:py-20", className)}>
      <Container className="flex flex-col gap-10 md:gap-12">{children}</Container>
    </section>
  );
}

function Head({ id, eyebrow, title, intro, center }: { id: string; eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={cn("flex max-w-[820px] flex-col gap-[18px]", center && "mx-auto items-center text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionTitle id={id}>{title}</SectionTitle>
      {intro && <p className="text-[15px] leading-[1.7] text-mist md:text-[17px]">{intro}</p>}
    </div>
  );
}

/* ====================================================================== */
/* Focus hub: the track at the centre, its focus areas around it          */
/* ====================================================================== */

const HUB_W = 1080;
const HUB_H = 640;

/** Where focus area i of n sits on the orbit (pixels in the HUB_W × HUB_H box). */
function orbit(i: number, n: number) {
  const a = ((-90 + (i * 360) / n) * Math.PI) / 180;
  return { x: HUB_W / 2 + Math.cos(a) * 390, y: HUB_H / 2 + Math.sin(a) * 222 };
}

export function FocusHub({
  id,
  eyebrow,
  title,
  hubLabel,
  unit = "focus areas",
  icon: Icon,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  hubLabel: string;
  /** What the items are called in the hub count, e.g. "programmes". */
  unit?: string;
  icon: ComponentType<IconProps>;
  items: DetailItem[];
}) {
  const hub = (
    <div className="relative grid size-[200px] place-items-center rounded-full border border-gold/50 bg-radial from-gold/20 via-ink to-ink shadow-[0_0_60px_rgba(230,171,63,0.22)] md:size-[220px]">
      <span aria-hidden="true" className="absolute inset-3 rounded-full border border-dashed border-gold/30" />
      <span className="flex flex-col items-center gap-3 px-6 text-center">
        <span aria-hidden="true" className={cn(iconTile, "size-16 rounded-full")}>
          <Icon size={30} />
        </span>
        <span className="font-display text-lg leading-tight font-semibold text-cream">{hubLabel}</span>
        <span className="text-[11px] font-bold tracking-[0.18em] text-gold uppercase">{items.length} {unit}</span>
      </span>
    </div>
  );

  return (
    <Section id={id}>
      <Head id={id} eyebrow={eyebrow} title={title} center />

      {/* Wide screens: focus areas orbit the hub. */}
      <div className="relative mx-auto hidden w-full max-w-[1080px] lg:block" style={{ aspectRatio: `${HUB_W} / ${HUB_H}` }}>
        <svg
          viewBox={`0 0 ${HUB_W} ${HUB_H}`}
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
          className="absolute inset-0 size-full"
        >
          <ellipse
            cx={HUB_W / 2}
            cy={HUB_H / 2}
            rx="390"
            ry="222"
            fill="none"
            stroke={GOLD}
            strokeOpacity="0.18"
            strokeDasharray="2 8"
            vectorEffect="non-scaling-stroke"
          />
          {items.map((_, i) => {
            const p = orbit(i, items.length);
            return (
              <line
                key={i}
                x1={HUB_W / 2}
                y1={HUB_H / 2}
                x2={p.x}
                y2={p.y}
                stroke={GOLD}
                strokeOpacity="0.45"
                strokeDasharray="5 5"
                vectorEffect="non-scaling-stroke"
                className="animate-dash"
              />
            );
          })}
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{hub}</div>
        <ul>
          {items.map((it, i) => {
            const p = orbit(i, items.length);
            const style: CSSProperties = { left: `${(p.x / HUB_W) * 100}%`, top: `${(p.y / HUB_H) * 100}%` };
            return (
              <li key={it.title} style={style} className="absolute w-[250px] -translate-x-1/2 -translate-y-1/2">
                <FocusCard item={it} />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Narrow screens: hub, then the focus areas as a list. */}
      <div className="flex flex-col items-center gap-8 lg:hidden">
        {hub}
        <ul className="grid w-full gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it.title}>
              <FocusCard item={it} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function FocusCard({ item }: { item: DetailItem }) {
  const Icon = item.icon;
  return (
    <div
      className={cn(
        darkPanel,
        "flex h-full flex-col gap-3 rounded-[20px] bg-ink/85 p-4 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-gold/45",
      )}
    >
      <span className="flex items-center gap-3">
        {Icon && (
          <span aria-hidden="true" className={cn(iconTile, "size-10 rounded-xl")}>
            <Icon size={20} />
          </span>
        )}
        <span className="font-display text-[17px] leading-tight font-semibold text-cream">{item.title}</span>
      </span>
      {item.body && <p className="text-sm leading-relaxed text-mist">{item.body}</p>}
      {item.bullets && (
        <ul className="flex flex-wrap gap-1.5">
          {item.bullets.map((b) => (
            <li key={b} className="rounded-full bg-white/6 px-2.5 py-1 text-xs text-mist">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ====================================================================== */
/* The 12-month journey                                                   */
/* ====================================================================== */

export function JourneyTimeline({ id }: { id: string }) {
  const { title, intro, stages } = capabilityBuilding.journey;
  const pos = (i: number) => `${((i + 0.5) / stages.length) * 100}%`;
  return (
    <Section id={id}>
      <Head id={id} eyebrow="How the partnership runs" title={title} intro={intro} center />

      {/* Wide screens: stage cards over a 12-month rail. */}
      <div className="hidden flex-col lg:flex">
        <ol className="grid grid-cols-5 gap-4">
          {stages.map(({ title: t, body, icon: Icon }, i) => (
            <li key={t} className="flex flex-col items-center">
              <div className={cn(i === 2 ? goldPanel : darkPanel, "flex h-full w-full flex-col gap-3 rounded-[20px] p-5")}>
                <span className="flex items-center justify-between">
                  <span aria-hidden="true" className={cn(iconTile, "size-11 rounded-xl")}>
                    <Icon size={22} />
                  </span>
                  <span className="font-display text-2xl font-semibold text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <span className="font-display text-xl font-semibold text-cream">{t}</span>
                <span className="text-sm leading-relaxed text-mist">{body}</span>
              </div>
              <span aria-hidden="true" className="h-8 w-px bg-linear-to-b from-gold/70 to-gold/20" />
            </li>
          ))}
        </ol>

        {/* Rail */}
        <div aria-hidden="true" className="relative h-3 rounded-full bg-white/8">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-gold-deep/50 via-gold to-gold-light" />
          {stages.map((s, i) => (
            <span
              key={s.title}
              style={{ left: pos(i) }}
              className="absolute top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-gold-light shadow-[0_0_14px_rgba(255,227,161,0.7)]"
            />
          ))}
        </div>
        <div aria-hidden="true" className="relative mt-3 h-5">
          {Array.from({ length: 12 }, (_, m) => (
            <span
              key={m}
              style={{ left: `${((m + 0.5) / 12) * 100}%` }}
              className={cn(
                "absolute -translate-x-1/2 text-[11px] font-semibold tracking-wide",
                m === 0 || m === 5 || m === 11 ? "text-gold" : "text-muted/60",
              )}
            >
              M{m + 1}
            </span>
          ))}
        </div>
        <RepeatLoop className="mt-2 h-16 w-full" />
      </div>

      {/* Narrow screens: vertical timeline. */}
      <ol className="relative flex flex-col gap-6 pl-9 lg:hidden">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[15px] w-[3px] rounded-full bg-linear-to-b from-gold-deep via-gold to-gold-light" />
        {stages.map(({ title: t, body, icon: Icon }) => (
          <li key={t} className="relative flex gap-4">
            <span aria-hidden="true" className="absolute top-3 -left-[29px] size-4 rounded-full border-2 border-ink bg-gold-light" />
            <span aria-hidden="true" className={cn(iconTile, "size-11 rounded-xl")}>
              <Icon size={22} />
            </span>
            <span className="flex flex-col gap-1">
              <span className="font-display text-lg font-semibold text-cream">{t}</span>
              <span className="text-[15px] leading-relaxed text-mist">{body}</span>
            </span>
          </li>
        ))}
        <li className="text-sm font-semibold text-gold">Build · Reinforce · Repeat — across 12 months</li>
      </ol>
    </Section>
  );
}

/** Curved return arrow under the rail: the cycle repeats through the year. */
function RepeatLoop({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <svg viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true" focusable="false" className="absolute inset-0 size-full">
        <defs>
          <marker id="jr-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 10 5 0 10z" fill={GOLD} />
          </marker>
        </defs>
        <path
          d="M900 4 C 900 52, 700 52, 500 52 S 300 40, 300 8"
          fill="none"
          stroke={GOLD}
          strokeOpacity="0.6"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          vectorEffect="non-scaling-stroke"
          markerEnd="url(#jr-arrow)"
        />
      </svg>
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full border border-gold/30 bg-ink px-3 py-1 text-xs font-bold tracking-[0.14em] text-gold uppercase">
        Build · Reinforce · Repeat
      </span>
    </div>
  );
}

/* ====================================================================== */
/* Outcome chart                                                          */
/* ====================================================================== */

export function OutcomeChart({ id, statement, points, closing }: { id: string; statement: string; points: string[]; closing?: string }) {
  const heights = points.map((_, i) => 38 + (i * 62) / Math.max(1, points.length - 1));
  const centre = (i: number) => ((i + 0.5) / points.length) * 100;
  return (
    <Section id={id}>
      <div className={cn(darkPanel, "grid items-center gap-10 rounded-[28px] bg-linear-to-br from-gold/[0.08] to-transparent p-6 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14")}>
        <div className="flex flex-col gap-5">
          <Eyebrow>The partnership outcome</Eyebrow>
          <h2 id={id} className="font-display text-[26px] leading-tight font-semibold tracking-[-0.015em] text-balance text-cream md:text-[34px]">
            {statement}
          </h2>
          {closing && <p className="font-display text-lg font-semibold text-gold md:text-xl">{closing}</p>}
        </div>

        <figure className="flex flex-col gap-3" aria-label={`Outcomes: ${points.join(", ")}`}>
          <div className="relative h-[220px] md:h-[260px]">
            {/* Baseline grid */}
            <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3].map((g) => (
                <span key={g} className="h-px bg-white/[0.06]" />
              ))}
            </div>
            <div aria-hidden="true" className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${points.length}, minmax(0, 1fr))` }}>
              {heights.map((h, i) => (
                <div key={i} className="flex items-end justify-center px-3 md:px-5">
                  <div
                    style={{ height: `${h}%` }}
                    className="relative w-full max-w-[84px] rounded-t-2xl bg-linear-to-t from-gold-deep/40 via-gold/80 to-gold-light shadow-[0_0_30px_rgba(230,171,63,0.18)]"
                  >
                    <span className="absolute inset-x-2 top-2 h-px bg-white/40" />
                  </div>
                </div>
              ))}
            </div>
            {/* Trend line over the bar tops */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false" className="absolute inset-0 size-full overflow-visible">
              <polyline
                points={heights.map((h, i) => `${centre(i)},${100 - h - 6}`).join(" ")}
                fill="none"
                stroke={GOLD_LIGHT}
                strokeWidth="2"
                strokeDasharray="6 4"
                vectorEffect="non-scaling-stroke"
                className="animate-dash"
              />
            </svg>
            {heights.map((h, i) => (
              <span
                key={i}
                aria-hidden="true"
                style={{ left: `${centre(i)}%`, bottom: `calc(${h}% + 6%)` }}
                className="absolute grid size-6 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-gold-light text-ink shadow-[0_0_14px_rgba(255,227,161,0.7)]"
              >
                <CheckIcon size={12} strokeWidth={3} />
              </span>
            ))}
          </div>
          <figcaption className="grid gap-2" style={{ gridTemplateColumns: `repeat(${points.length}, minmax(0, 1fr))` }}>
            {points.map((p) => (
              <span key={p} className="text-center text-[13px] leading-snug font-semibold text-cream md:text-sm">
                {p}
              </span>
            ))}
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}

/* ====================================================================== */
/* Campus → corporate bridge                                              */
/* ====================================================================== */

export function CampusBridge({ id, bridge }: { id: string; bridge: NonNullable<FocusTrack["bridge"]> }) {
  return (
    <Section id={id}>
      <Head id={id} eyebrow="The transition" title={bridge.title} center />
      <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className={cn(darkPanel, "flex flex-col gap-4 rounded-[24px] p-6")}>
          <span className="text-xs font-bold tracking-[0.18em] text-muted uppercase">{bridge.from.label}</span>
          <ul className="flex flex-col gap-3">
            {bridge.from.points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] text-mist">
                <span aria-hidden="true" className="size-2 rounded-full border border-silver/60" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <BridgeArt className="mx-auto h-auto w-full max-w-[460px]" />

        <div className={cn(goldPanel, "flex flex-col gap-4 rounded-[24px] p-6")}>
          <span className="text-xs font-bold tracking-[0.18em] text-gold uppercase">{bridge.to.label}</span>
          <ul className="flex flex-col gap-3">
            {bridge.to.points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] text-cream">
                <span aria-hidden="true" className="grid size-5 place-items-center rounded-full bg-gold text-ink">
                  <CheckIcon size={11} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/** An arched bridge: a graduate in cap on one bank, a professional with a briefcase on the other. */
function BridgeArt({ className }: { className?: string }) {
  const id = "cb-bridge";
  const deck = (x: number) => 150 - 70 * Math.sin((Math.PI * (x - 40)) / 380); // arch from x=40 to x=420
  return (
    <svg viewBox="0 0 460 220" aria-hidden="true" focusable="false" className={className}>
      <SceneDefs id={id} />
      <ellipse cx="230" cy="150" rx="220" ry="70" fill={`url(#${id}-halo)`} />
      {/* Banks */}
      <rect x="0" y="150" width="60" height="70" fill="#12100c" stroke={SILVER} strokeOpacity="0.3" />
      <rect x="400" y="150" width="60" height="70" fill="#12100c" stroke={GOLD} strokeOpacity="0.6" />
      {/* Arch and hangers */}
      <path d="M40 150 Q230 -90 420 150" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="3" />
      {Array.from({ length: 11 }, (_, i) => {
        const x = 75 + i * 31;
        const u = (x - 40) / 380;
        const archY = 150 - 480 * u * (1 - u); // the quadratic arch above
        return <line key={x} x1={x} y1={archY} x2={x} y2={deck(x)} stroke={GOLD} strokeOpacity="0.35" />;
      })}
      <path
        d={`M40 150 ${Array.from({ length: 39 }, (_, i) => {
          const x = 40 + (i + 1) * 10;
          return `L${x} ${deck(x)}`;
        }).join(" ")}`}
        fill="none"
        stroke={GOLD}
        strokeOpacity="0.8"
        strokeWidth="2"
      />
      {/* Graduate, on the campus bank */}
      <Person cx={30} y={150} s={0.8} fill={SILVER} opacity={0.55} />
      <path d="M14 116 30 108 46 116 30 124z" fill={SILVER} opacity={0.75} />
      {/* Walking across */}
      <Person cx={230} y={deck(230) - 1} s={0.7} fill={GOLD} opacity={0.8} />
      <path
        d={`M70 ${deck(70) - 20} Q230 ${deck(230) - 70} 390 ${deck(390) - 20}`}
        fill="none"
        stroke={GOLD_LIGHT}
        strokeOpacity="0.6"
        strokeDasharray="5 5"
        className="animate-dash"
        markerEnd={`url(#${id}-arrow)`}
      />
      {/* Professional, on the corporate bank */}
      <Person cx={430} y={150} s={0.85} fill={`url(#${id}-gold)`} />
      <rect x="440" y="132" width="16" height="12" rx="2" fill={GOLD_LIGHT} />
      <path d="M445 132v-3h6v3" fill="none" stroke={GOLD_LIGHT} strokeWidth="1.4" />
      <Sparkle x={440} y={94} r={6} className="animate-pulse-soft svg-origin-center" />
    </svg>
  );
}

/* ====================================================================== */
/* Hero scenes, one per industry                                          */
/* ====================================================================== */

export function TrackHeroArt({ track, chips }: { track: string; chips: string[] }) {
  const Scene = scenes[track as keyof typeof scenes] ?? ServiceScene;
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[520px]">
      <svg viewBox="0 0 480 420" focusable="false" className="h-auto w-full">
        <SceneDefs id={`th-${track}`} />
        <circle cx="240" cy="210" r="200" fill={`url(#th-${track}-halo)`} />
        <circle cx="240" cy="210" r="186" fill="none" stroke={GOLD} strokeOpacity="0.14" />
        <circle cx="240" cy="210" r="150" fill="none" stroke={GOLD} strokeOpacity="0.1" strokeDasharray="2 6" />
        {[-140, -30, 60, 160].map((a) => {
          const r = (a * Math.PI) / 180;
          return <circle key={a} cx={240 + Math.cos(r) * 186} cy={210 + Math.sin(r) * 186} r="3.5" fill={GOLD_LIGHT} opacity="0.7" />;
        })}
        <Scene id={`th-${track}`} />
      </svg>
      {chips[0] && (
        <span className="absolute top-[10%] left-0 flex animate-float items-center gap-2 rounded-full border border-white/15 bg-ink/80 py-2 pr-4 pl-2 text-[13px] font-semibold text-cream shadow-[0_12px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <span className="grid size-6 place-items-center rounded-full bg-gold text-ink">
            <CheckIcon size={12} strokeWidth={3} />
          </span>
          {chips[0]}
        </span>
      )}
      {chips[1] && (
        <span className="absolute right-0 bottom-[12%] flex items-center gap-2 rounded-full border border-white/15 bg-ink/80 py-2 pr-4 pl-2 text-[13px] font-semibold text-cream shadow-[0_12px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <span className="grid size-6 place-items-center rounded-full bg-gold/20 text-gold">
            <ArrowRightIcon size={12} className="-rotate-45" />
          </span>
          {chips[1]}
        </span>
      )}
    </div>
  );
}

/** Five-point star centred on (cx, cy). */
function star(cx: number, cy: number, r: number) {
  return (
    Array.from({ length: 10 }, (_, i) => {
      const a = ((-90 + i * 36) * Math.PI) / 180;
      const rr = i % 2 ? r * 0.45 : r;
      return `${i ? "L" : "M"}${(cx + Math.cos(a) * rr).toFixed(1)} ${(cy + Math.sin(a) * rr).toFixed(1)}`;
    }).join(" ") + "Z"
  );
}

function Stars({ cx, cy, r, gap }: { cx: number; cy: number; r: number; gap: number }) {
  return (
    <g fill={GOLD_LIGHT}>
      {[-2, -1, 0, 1, 2].map((k) => (
        <path key={k} d={star(cx + k * gap, cy, r)} />
      ))}
    </g>
  );
}

/** Service: an agent with a headset at the desk, a five-star rating above. */
function ServiceScene({ id }: { id: string }) {
  return (
    <g>
      <rect x="292" y="96" width="132" height="46" rx="23" fill="#12100c" stroke={GOLD} strokeOpacity="0.7" />
      <path d="M318 141l-8 16 22-15" fill="#12100c" stroke={GOLD} strokeOpacity="0.7" strokeLinejoin="round" />
      <Stars cx={358} cy={119} r={8} gap={20} />
      <Person cx={240} y={262} s={1.9} fill={`url(#${id}-gold)`} />
      {/* Headset */}
      <path d="M220 199a20 20 0 0 1 40 0" fill="none" stroke={GOLD_LIGHT} strokeWidth="3.5" />
      <rect x="214" y="196" width="9" height="16" rx="3" fill={GOLD_LIGHT} />
      <rect x="257" y="196" width="9" height="16" rx="3" fill={GOLD_LIGHT} />
      <path d="M261 210q0 14-15 16" fill="none" stroke={GOLD_LIGHT} strokeWidth="2.5" strokeLinecap="round" />
      {/* Desk */}
      <rect x="110" y="258" width="260" height="12" rx="4" fill={`url(#${id}-gold)`} />
      <rect x="126" y="270" width="228" height="72" rx="6" fill="#12100c" stroke={GOLD} strokeOpacity="0.5" />
      <path d="M156 258a16 16 0 0 1 32 0z" fill={GOLD_LIGHT} />
      <circle cx="172" cy="238" r="3" fill={GOLD_LIGHT} />
      <rect x="290" y="214" width="56" height="40" rx="4" fill="#12100c" stroke={GOLD} strokeOpacity="0.7" />
      <path d="M302 240l10-8 8 5 14-12" fill="none" stroke={GOLD_LIGHT} strokeWidth="2" strokeLinecap="round" />
      <Sparkle x={130} y={140} r={7} className="animate-pulse-soft svg-origin-center" />
    </g>
  );
}

/** Retail: a storefront, a shopper and a full bag. */
function RetailScene({ id }: { id: string }) {
  return (
    <g>
      <rect x="130" y="128" width="220" height="196" fill="#12100c" stroke={GOLD} strokeOpacity="0.55" strokeWidth="1.2" />
      <rect x="122" y="120" width="236" height="9" rx="2" fill={`url(#${id}-gold)`} />
      <path
        d={`M130 136 H350 L356 168 ${Array.from({ length: 7 }, () => "a16.6 10 0 0 1 -33.2 0").join(" ")} Z`}
        fill={`url(#${id}-awn)`}
        stroke={GOLD}
        strokeOpacity="0.6"
      />
      <rect x="146" y="192" width="118" height="84" rx="3" fill={`url(#${id}-glow)`} stroke={GOLD} strokeOpacity="0.6" />
      <path d="M176 276v-26h20v26M210 276v-40h22v40" fill="none" stroke={GOLD} strokeOpacity="0.6" />
      <rect x="282" y="192" width="50" height="132" rx="3" fill="#0b0a08" stroke={GOLD} strokeOpacity="0.6" />
      <line x1="100" y1="324" x2="380" y2="324" stroke={GOLD} strokeOpacity="0.45" />
      {/* Shopper with a bag */}
      <Person cx={372} y={340} s={1.3} fill={`url(#${id}-gold)`} />
      <path d="M392 300h40l-4 44h-32z" fill={GOLD_LIGHT} />
      <path d="M402 300v-8a10 10 0 0 1 20 0v8" fill="none" stroke={GOLD_LIGHT} strokeWidth="2.5" />
      {/* Price tag */}
      <g transform="rotate(-18 110 240)">
        <path d="M82 222h44l14 18-14 18H82z" fill="#12100c" stroke={GOLD} />
        <circle cx="128" cy="240" r="3.5" fill="none" stroke={GOLD_LIGHT} />
        <path d="M92 236h22M92 246h14" stroke={GOLD_LIGHT} strokeWidth="2" strokeLinecap="round" />
      </g>
      <Sparkle x={360} y={92} r={7} className="animate-pulse-soft svg-origin-center" />
    </g>
  );
}

/** Healthcare: a heart with a pulse line, a care badge and a caregiver beside a patient. */
function HealthcareScene({ id }: { id: string }) {
  return (
    <g>
      <path
        d="M240 300 C 150 240, 110 190, 130 146 C 148 108, 206 106, 240 148 C 274 106, 332 108, 350 146 C 370 190, 330 240, 240 300Z"
        fill={GOLD}
        fillOpacity="0.1"
        stroke={`url(#${id}-gold)`}
        strokeWidth="3"
      />
      <path
        d="M80 196 H178 L194 160 L214 236 L232 176 L246 206 H400"
        fill="none"
        stroke={GOLD_LIGHT}
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeDasharray="8 2"
        className="animate-dash"
      />
      <circle cx="350" cy="104" r="28" fill={`url(#${id}-gold)`} />
      <path d="M350 90v28M336 104h28" stroke="#0b0a08" strokeWidth="7" strokeLinecap="round" />
      <Person cx={200} y={362} s={1.05} fill={`url(#${id}-gold)`} />
      <Person cx={282} y={362} s={0.95} fill={SILVER} opacity={0.45} />
      <path d="M218 330 Q240 316 262 330" fill="none" stroke={GOLD_LIGHT} strokeOpacity="0.8" strokeWidth="2" strokeDasharray="3 3" />
      <Sparkle x={120} y={110} r={6} className="animate-pulse-soft svg-origin-center" />
    </g>
  );
}

/** Hospitality: a service bell on the front desk, five stars above, a key card beside it. */
function HospitalityScene({ id }: { id: string }) {
  return (
    <g>
      {[0, 1, 2, 3, 4].map((k) => {
        const a = ((-150 + k * 30) * Math.PI) / 180;
        return <path key={k} d={star(240 + Math.cos(a) * 130, 230 + Math.sin(a) * 130, 11)} fill={GOLD_LIGHT} />;
      })}
      <path d="M150 282a90 90 0 0 1 180 0z" fill={`url(#${id}-gold)`} />
      <path d="M176 262a66 66 0 0 1 40-46" fill="none" stroke="#fffbe8" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
      <rect x="233" y="180" width="14" height="14" rx="2" fill={GOLD_LIGHT} />
      <circle cx="240" cy="176" r="9" fill={GOLD_LIGHT} />
      <rect x="130" y="282" width="220" height="16" rx="5" fill="#1a1611" stroke={GOLD} strokeOpacity="0.8" />
      <rect x="90" y="298" width="300" height="10" rx="3" fill={GOLD} fillOpacity="0.35" />
      <g transform="rotate(-14 360 330)">
        <rect x="330" y="312" width="66" height="42" rx="6" fill="#12100c" stroke={GOLD} />
        <rect x="340" y="322" width="18" height="12" rx="2" fill={GOLD_LIGHT} />
        <path d="M366 326h20M366 336h14" stroke={GOLD} strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
      </g>
      <Sparkle x={330} y={170} r={7} className="animate-pulse-soft svg-origin-center" />
    </g>
  );
}

/** Communication: two people in conversation, speech bubbles and a link between them. */
function CommunicationScene({ id }: { id: string }) {
  return (
    <g>
      <rect x="92" y="96" width="160" height="70" rx="20" fill="#12100c" stroke={GOLD} strokeOpacity="0.8" />
      <path d="M140 165l-6 22 26-22" fill="#12100c" stroke={GOLD} strokeOpacity="0.8" strokeLinejoin="round" />
      <path d="M116 120h112M116 140h76" stroke={GOLD_LIGHT} strokeWidth="5" strokeLinecap="round" />
      <rect x="236" y="186" width="150" height="62" rx="20" fill="#12100c" stroke={SILVER} strokeOpacity="0.5" />
      <path d="M340 247l10 20-30-19" fill="#12100c" stroke={SILVER} strokeOpacity="0.5" strokeLinejoin="round" />
      {[286, 311, 336].map((x) => (
        <circle key={x} cx={x} cy="217" r="6" fill={SILVER} opacity="0.6" />
      ))}
      <Person cx={150} y={352} s={1.55} fill={`url(#${id}-gold)`} />
      <Person cx={334} y={352} s={1.4} fill={SILVER} opacity={0.5} />
      <path d="M190 300 Q242 266 294 300" fill="none" stroke={GOLD_LIGHT} strokeOpacity="0.7" strokeWidth="2" strokeDasharray="6 4" className="animate-dash" />
      <circle cx="242" cy="283" r="5" fill={GOLD_LIGHT} />
      <Sparkle x={376} y={124} r={7} className="animate-pulse-soft svg-origin-center" />
    </g>
  );
}

/** Campus-to-corporate: a cap climbs the steps to a briefcase. */
function CampusScene({ id }: { id: string }) {
  return (
    <g>
      {Array.from({ length: 4 }, (_, i) => (
        <rect
          key={i}
          x={110 + i * 66}
          y={330 - (i + 1) * 40}
          width="66"
          height={(i + 1) * 40}
          fill={GOLD}
          fillOpacity={0.05 + i * 0.07}
          stroke={GOLD}
          strokeOpacity="0.55"
        />
      ))}
      <line x1="80" y1="330" x2="400" y2="330" stroke={GOLD} strokeOpacity="0.45" />
      {/* Cap, bottom step */}
      <path d="M108 236 143 220 178 236 143 252z" fill={SILVER} opacity="0.75" />
      <path d="M124 244v12q19 10 38 0v-12" fill="none" stroke={SILVER} strokeOpacity="0.75" strokeWidth="2" />
      <path d="M176 237v18" stroke={SILVER} strokeOpacity="0.75" strokeWidth="2" />
      {/* Graduate on the third step */}
      <Person cx={275} y={250} s={1.05} fill={`url(#${id}-gold)`} />
      {/* Briefcase at the top */}
      <rect x="318" y="124" width="72" height="54" rx="7" fill={`url(#${id}-gold)`} />
      <path d="M340 124v-8a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5v8" fill="none" stroke={GOLD_LIGHT} strokeWidth="3" />
      <path d="M318 146h72" stroke="#0b0a08" strokeOpacity="0.5" strokeWidth="2" />
      <path d="M150 200 C 190 120, 260 100, 306 140" fill="none" stroke={GOLD_LIGHT} strokeOpacity="0.7" strokeWidth="2" strokeDasharray="6 4" className="animate-dash" markerEnd={`url(#${id}-arrow)`} />
      <Sparkle x={406} y={108} r={7} className="animate-pulse-soft svg-origin-center" />
    </g>
  );
}

const scenes = {
  service: ServiceScene,
  retail: RetailScene,
  healthcare: HealthcareScene,
  hospitality: HospitalityScene,
  communication: CommunicationScene,
  "campus-to-corporate": CampusScene,
} as const;
