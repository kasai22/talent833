import type { ReactNode } from "react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { GOLD, GOLD_LIGHT, Person, SILVER, SceneDefs, SectionHead, Sparkle } from "@/components/services/hiringArt";
import { ShieldStarIcon } from "@/components/services/serviceIcons";
import { GoldCta, PageBackdrop, darkPanel, goldPanel, iconTile } from "@/components/services/trainingUi";
import { Breadcrumbs, cn, Container, Eyebrow, pillClass } from "@/components/ui";
import { executiveHiring as eh } from "@/lib/content/executiveHiring";
import { HIRING_SLUG } from "@/lib/content/hiring";
import { serviceHref } from "@/lib/content/services";
import { routes } from "@/lib/site";

/** Secondary hero action: the shared outline pill. */
const outlinePill = cn(pillClass({ variant: "outline", size: "lg" }), "w-fit");

/**
 * Executive Hiring page body: a leader on the summit at sunrise, the four hiring solutions, the levels we
 * hire for, the search funnel and process, why us, sectors, a closing line and the standard CTA banner.
 * All imagery is drawn SVG in the site's gold-on-ink style.
 */
export function ExecutiveHiring() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section aria-labelledby="eh-title" className="relative isolate overflow-hidden border-b border-white/12">
        <SummitScene id="eh-hero" className="absolute inset-0 -z-20 size-full" />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 -z-10 w-full bg-linear-to-r from-ink via-ink/85 to-ink/30 md:w-[65%] md:via-ink/75 md:to-transparent"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-ink to-transparent" />

        <Container className="relative flex flex-col gap-6 pt-[120px] pb-16 md:pt-[150px] md:pb-24 xl:min-h-[620px] xl:pt-[160px]">
          <div className="flex animate-rise flex-col gap-6">
            <Breadcrumbs crumbs={[{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Hiring", href: serviceHref(HIRING_SLUG) }, { label: "Executive Hiring" }]} />
              <Eyebrow>{eh.eyebrow}</Eyebrow>
            <h1
              id="eh-title"
              className="font-display text-[36px] leading-[1.08] font-semibold tracking-[-0.025em] md:text-[52px] xl:text-[58px]"
            >
              {eh.title.map((line, i) => (
                <span key={line} className={cn("block", i === eh.title.length - 1 && "text-gold")}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-[440px] text-base leading-relaxed text-mist md:text-lg">{eh.lede}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <GoldCta href={routes.contact}>
                {eh.cta} <ArrowRightIcon size={18} />
              </GoldCta>
              <a href="#eh-process" className={outlinePill}>
                {eh.secondaryCta}
              </a>
            </div>
          </div>

          <HeroCards />
        </Container>
      </section>

      <div className="relative isolate overflow-hidden">
        <PageBackdrop id="eh" />

        {/* ---------- Hiring solutions ---------- */}
        <section aria-labelledby="eh-solutions" className="pt-16 md:pt-24">
          <Container className="flex flex-col gap-10">
            <SectionHead id="eh-solutions" eyebrow="What we do" title={eh.solutions.title} />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {eh.solutions.items.map(({ title, body, art }) => {
                const Art = solutionArt[art];
                return (
                  <li
                    key={title}
                    className={cn(
                      darkPanel,
                      "group flex flex-col overflow-hidden rounded-[24px] transition duration-300 hover:-translate-y-1 hover:border-gold/45",
                    )}
                  >
                    <div className="border-b border-white/10 bg-gradient-to-b from-gold/[0.08] to-transparent px-5 pt-5">
                      <Art className="h-[130px] w-full" />
                    </div>
                    <div className="flex grow flex-col gap-2 p-6">
                      <h3 className="font-display text-xl leading-snug font-semibold text-balance text-cream">{title}</h3>
                      <p className="text-[15px] leading-relaxed text-mist">{body}</p>
                      <span
                        aria-hidden="true"
                        className="mt-auto h-[3px] w-12 rounded-full bg-gold transition-all duration-300 group-hover:w-20"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        {/* ---------- Levels ---------- */}
        <section aria-labelledby="eh-levels" className="pt-16 md:pt-24">
          <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <PyramidArt className="mx-auto h-auto w-full max-w-[440px]" />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <Eyebrow>{eh.levels.eyebrow}</Eyebrow>
                <h2
                  id="eh-levels"
                  className="font-display text-[28px] leading-tight font-semibold tracking-[-0.015em] text-balance text-cream md:text-[38px]"
                >
                  {eh.levels.title}
                </h2>
              </div>
              <ol className="flex flex-col gap-4">
                {eh.levels.items.map(({ title, body }, i) => (
                  <li key={title} className={cn(i === 0 ? goldPanel : darkPanel, "flex gap-5 rounded-[22px] p-5 md:p-6")}>
                    <span className="font-display text-[28px] leading-none font-semibold text-gold/80 md:text-[32px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex flex-col gap-1.5">
                      <span className="font-display text-lg font-semibold text-cream md:text-xl">{title}</span>
                      <span className="text-[15px] leading-relaxed text-mist">{body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        {/* ---------- Process ---------- */}
        <section aria-labelledby="eh-process-title" id="eh-process" className="scroll-mt-28 pt-16 md:pt-24">
          <Container className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-3 text-center">
              <SectionHead id="eh-process-title" eyebrow="How we search" title={eh.process.title} />
              <p className="max-w-[620px] text-[15px] leading-relaxed text-mist md:text-base">{eh.process.intro}</p>
            </div>
            <div className={cn(darkPanel, "rounded-[24px] bg-gradient-to-b from-gold/[0.05] to-transparent px-4 py-6 md:px-8")}>
              <FunnelArt className="h-auto w-full" />
            </div>
            <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
              <span
                aria-hidden="true"
                className="absolute top-8 right-[7%] left-[7%] hidden h-px bg-gradient-to-r from-gold/10 via-gold/60 to-gold/10 lg:block"
              />
              {eh.process.steps.map(({ title, body, icon: Icon }, i) => (
                <li key={title} className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center">
                  <span className="relative grid size-16 shrink-0 place-items-center rounded-full border border-gold/70 bg-ink text-gold shadow-[0_0_24px_rgba(230,171,63,0.18)]">
                    <span className="absolute inset-1 rounded-full bg-gold/[0.07]" />
                    <Icon size={26} />
                    <span className="absolute -top-1 -right-1 grid size-6 place-items-center rounded-full bg-gold text-[11px] font-bold text-ink">
                      {i + 1}
                    </span>
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="font-display text-lg font-semibold text-cream">{title}</span>
                    <span className="text-[14px] leading-relaxed text-mist">{body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* ---------- Why us ---------- */}
        <section aria-labelledby="eh-difference" className="pt-16 md:pt-24">
          <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex flex-col gap-6">
              <Eyebrow>{eh.difference.eyebrow}</Eyebrow>
              <h2
                id="eh-difference"
                className="font-display text-[28px] leading-tight font-semibold tracking-[-0.015em] text-balance text-cream md:text-[38px]"
              >
                {eh.difference.title}
              </h2>
              <p className="text-base leading-relaxed text-mist md:text-lg">{eh.difference.body}</p>
              <ul className="grid gap-5 sm:grid-cols-2">
                {eh.difference.points.map(({ title, body, icon: Icon }) => (
                  <li key={title} className="flex gap-3.5">
                    <span aria-hidden="true" className={cn(iconTile, "size-11 rounded-xl")}>
                      <Icon size={22} />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="font-semibold text-cream">{title}</span>
                      <span className="text-[15px] leading-relaxed text-mist">{body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn(darkPanel, "overflow-hidden rounded-[28px] bg-gradient-to-b from-gold/[0.06] to-transparent p-4 md:p-6")}>
              <BoardroomArt className="h-auto w-full" />
            </div>
          </Container>
        </section>

        {/* ---------- Sectors ---------- */}
        <section aria-labelledby="eh-sectors" className="pt-16 md:pt-24">
          <Container className="flex flex-col gap-10">
            <SectionHead id="eh-sectors" eyebrow="Where we hire" title={eh.sectors.title} />
            <ul className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
              {eh.sectors.items.map(({ title, icon: Icon }) => (
                <li
                  key={title}
                  className={cn(
                    darkPanel,
                    "flex flex-col items-center gap-4 rounded-[22px] px-4 pt-7 pb-6 text-center transition duration-300 hover:-translate-y-1 hover:border-gold/45",
                  )}
                >
                  <span aria-hidden="true" className={cn(iconTile, "size-16 rounded-full")}>
                    <Icon size={30} strokeWidth={1.4} />
                  </span>
                  <span className="font-display text-base leading-snug font-medium text-balance text-cream md:text-lg">{title}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ---------- Closing line ---------- */}
        <section aria-labelledby="eh-closing" className="pt-20 md:pt-28">
          <Container className="flex flex-col items-center gap-7 text-center">
            <Sparkles />
            <h2
              id="eh-closing"
              className="font-display text-[30px] leading-[1.12] font-semibold tracking-[-0.02em] text-balance md:text-[46px]"
            >
              {eh.closing.title.map((line, i) => (
                <span key={line} className={cn("block", i === eh.closing.title.length - 1 && "text-gold")}>
                  {line}
                </span>
              ))}
            </h2>
            <GoldCta href={routes.contact}>
              {eh.closing.cta} <ArrowRightIcon size={18} />
            </GoldCta>
          </Container>
        </section>
      </div>

      <CtaBanner />
    </>
  );
}

/** Three small gold sparkles above the closing line. */
function Sparkles() {
  return (
    <svg viewBox="0 0 80 24" aria-hidden="true" focusable="false" className="h-6 w-20">
      <Sparkle x={14} y={14} r={4} />
      <Sparkle x={40} y={12} r={8} className="animate-pulse-soft svg-origin-center" />
      <Sparkle x={66} y={14} r={4} />
    </svg>
  );
}

/* ---------- Hero ---------- */

/** Floating cards beside the leader on the summit (wide screens only). */
function HeroCards() {
  const { shortlist, confidential } = eh.heroCards;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-14 hidden w-[260px] xl:block">
      <div className="absolute top-[150px] right-0 flex animate-float items-center gap-3 rounded-2xl border border-white/15 bg-ink/75 p-3 pr-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <span className={cn(iconTile, "size-10 rounded-xl")}>
          <ShieldStarIcon size={20} />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-cream">{confidential.label}</span>
          <span className="text-xs text-muted">{confidential.note}</span>
        </span>
      </div>

      <div className="absolute right-0 bottom-16 flex w-[250px] flex-col gap-3 rounded-2xl border border-white/15 bg-ink/80 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-cream">{shortlist.label}</span>
          <span className="text-xs text-muted">{shortlist.note}</span>
        </span>
        <span className="h-px bg-white/10" />
        {[0.92, 0.84, 0.76].map((w, i) => (
          <span key={w} className="flex items-center gap-3">
            <span className={cn("grid size-8 shrink-0 place-items-center rounded-full", i === 0 ? "bg-gold" : "bg-white/12")}>
              <svg viewBox="0 0 20 20" fill="currentColor" className={cn("size-4", i === 0 ? "text-ink/75" : "text-silver/70")}>
                <circle cx="10" cy="7" r="3.6" />
                <path d="M3.5 18a6.5 6.5 0 0 1 13 0z" />
              </svg>
            </span>
            <span className="flex grow flex-col gap-1.5">
              <span className="h-1.5 rounded-full bg-white/10">
                <span
                  className="block h-full rounded-full bg-gradient-to-r from-gold-deep to-gold-light"
                  style={{ width: `${w * 100}%` }}
                />
              </span>
              <span className="h-1 w-1/2 rounded-full bg-white/8" />
            </span>
            {i === 0 && (
              <span className="grid size-[18px] shrink-0 place-items-center rounded-full bg-gold text-ink">
                <CheckIcon size={11} strokeWidth={3} />
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

/** The near ridge of the hero scene, which the search path follows up to the summit. */
const ridge: [number, number][] = [
  [470, 520],
  [560, 470],
  [640, 430],
  [700, 395],
  [760, 370],
  [820, 345],
  [860, 330],
];

/** Ridge height at x (linear between the points above). */
function ridgeY(x: number) {
  for (let i = 1; i < ridge.length; i++) {
    const [x0, y0] = ridge[i - 1];
    const [x1, y1] = ridge[i];
    if (x <= x1) return y0 + ((x - x0) / (x1 - x0)) * (y1 - y0);
  }
  return ridge[ridge.length - 1][1];
}

/** Sunrise over layered ridges, with a dotted search path climbing to one leader on the summit, backlit by the sun. */
function SummitScene({ id, className }: { id: string; className?: string }) {
  const sunX = 860;
  const sunY = 283; // behind the leader's head, so the sun reads as a halo
  const path = ridge.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y - 9}`).join(" ");
  // Candidates along the climb: many low down, fewer higher up.
  const field = [
    { x: 585, s: 0.5, o: 0.22 },
    { x: 604, s: 0.5, o: 0.22 },
    { x: 623, s: 0.5, o: 0.22 },
    { x: 722, s: 0.6, o: 0.38 },
    { x: 744, s: 0.6, o: 0.38 },
  ];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMaxYMid slice"
      className={cn("pointer-events-none", className)}
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#0b1018" />
          <stop offset="0.3" stopColor="#3a2c1a" />
          <stop offset="0.5" stopColor="#a8661f" />
          <stop offset="0.62" stopColor="#f0a53a" />
        </linearGradient>
        <radialGradient id={`${id}-sun`} cx={sunX} cy={sunY} r="420" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fffbe8" />
          <stop offset="0.04" stopColor={GOLD_LIGHT} />
          <stop offset="0.16" stopColor="#f6c25a" stopOpacity="0.95" />
          <stop offset="0.5" stopColor={GOLD} stopOpacity="0.4" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-far`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#8a6338" />
          <stop offset="1" stopColor="#3a2b1c" />
        </linearGradient>
        <linearGradient id={`${id}-mid`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3b2e22" />
          <stop offset="1" stopColor="#14110e" />
        </linearGradient>
        <linearGradient id={`${id}-near`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#5a3e1c" />
          <stop offset="0.25" stopColor="#1c1712" />
          <stop offset="1" stopColor="#090807" />
        </linearGradient>
      </defs>

      <rect width="1200" height="600" fill={`url(#${id}-sky)`} />
      <rect width="1200" height="600" fill={`url(#${id}-sun)`} />
      {/* Rays */}
      <g stroke={GOLD_LIGHT} strokeOpacity="0.22" strokeWidth="1.2">
        {[-160, -130, -100, -70, -40, -15, 15, 40, 70, 100, 130, 160, 190, 220].map((a) => {
          const r = (a * Math.PI) / 180;
          return (
            <line
              key={a}
              x1={sunX + Math.cos(r) * 30}
              y1={sunY + Math.sin(r) * 30}
              x2={sunX + Math.cos(r) * 260}
              y2={sunY + Math.sin(r) * 260}
            />
          );
        })}
      </g>
      <circle cx={sunX} cy={sunY} r="16" fill="#fffdf2" />

      {/* Ridges, far to near */}
      <path
        d="M0 360 L120 330 L230 350 L340 310 L470 345 L600 300 L720 330 L800 315 L1000 340 L1120 320 L1200 335 V600 H0Z"
        fill={`url(#${id}-far)`}
        opacity="0.75"
      />
      <path
        d="M0 410 L150 380 L280 400 L420 360 L560 395 L660 370 L760 335 L830 300 L900 320 L980 350 L1080 365 L1200 380 V600 H0Z"
        fill={`url(#${id}-mid)`}
      />
      <path
        d={`M380 600 ${ridge.map(([x, y]) => `L${x} ${y}`).join(" ")} L900 345 L960 380 L1030 420 L1100 450 L1200 470 V600Z`}
        fill={`url(#${id}-near)`}
      />
      {/* Sunlit rim on the near ridge */}
      <path
        d="M560 470 L640 430 L700 395 L760 370 L820 345 L860 330 L900 345 L960 380"
        fill="none"
        stroke="#f2b84c"
        strokeOpacity="0.55"
        strokeWidth="2"
      />

      {/* The search: a dotted path up the ridge, the field thinning as it climbs */}
      <path
        d={path}
        fill="none"
        stroke={GOLD_LIGHT}
        strokeOpacity="0.75"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        className="animate-dash"
      />
      {field.map(({ x, s, o }) => (
        <Person key={x} cx={x} y={ridgeY(x) - 1} s={s} fill={SILVER} opacity={o} />
      ))}
      {[640, 760].map((x) => (
        <g key={x}>
          <circle cx={x} cy={ridgeY(x) - 9} r="7" fill={GOLD} fillOpacity="0.25" />
          <circle cx={x} cy={ridgeY(x) - 9} r="3" fill={GOLD_LIGHT} />
        </g>
      ))}

      {/* The leader on the summit, backlit by the sun */}
      <Person cx={860} y={331} s={1.45} fill="#0d0b08" stroke={GOLD_LIGHT} strokeWidth="1.6" strokeOpacity="0.9" />
    </svg>
  );
}

/* ---------- Solution pictographs (viewBox 200×110) ---------- */

function ArtFrame({ id, className, children }: { id: string; className?: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 200 110" aria-hidden="true" focusable="false" className={className}>
      <SceneDefs id={id} />
      <ellipse cx="100" cy="96" rx="96" ry="22" fill={`url(#${id}-halo)`} />
      {children}
    </svg>
  );
}

/** Executive Search: the gold king among silver pawns — the strategic move. */
function ChessArt({ className }: { className?: string }) {
  const id = "eh-s1";
  const pawn = (cx: number, k: number) => (
    <g key={cx} fill={SILVER} opacity={0.32}>
      <circle cx={cx} cy={102 - 30 * k} r={6 * k} />
      <path d={`M${cx - 5 * k} ${102 - 24 * k} h${10 * k} l${4 * k} ${18 * k} h${-18 * k}z`} />
      <rect x={cx - 11 * k} y={102 - 6 * k} width={22 * k} height={5 * k} rx={1.5 * k} />
    </g>
  );
  return (
    <ArtFrame id={id} className={className}>
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x={20 + i * 20} y="101" width="20" height="6" fill={GOLD} fillOpacity={i % 2 ? 0.08 : 0.22} />
      ))}
      {[pawn(34, 0.8), pawn(62, 1), pawn(138, 1), pawn(166, 0.8)]}
      <path d="M100 8v14M93 14h14" stroke={GOLD_LIGHT} strokeWidth="2.4" strokeLinecap="round" />
      <g fill={`url(#${id}-gold)`}>
        <circle cx="100" cy="33" r="9" />
        <rect x="88" y="43" width="24" height="6" rx="2" />
        <path d="M91 49h18l6 43H85z" />
        <rect x="80" y="92" width="40" height="9" rx="2.5" />
      </g>
      <Sparkle x={130} y={22} r={5} className="animate-pulse-soft svg-origin-center" />
    </ArtFrame>
  );
}

/** Leadership Hiring: a leader at the front, the team following in formation. */
function LeadArt({ className }: { className?: string }) {
  const id = "eh-s2";
  return (
    <ArtFrame id={id} className={className}>
      <path d="M40 54 L100 26 L160 54" fill="none" stroke={GOLD} strokeOpacity="0.4" strokeDasharray="3 3" />
      {[
        { cx: 40, y: 80, s: 0.5 },
        { cx: 160, y: 80, s: 0.5 },
        { cx: 66, y: 92, s: 0.62 },
        { cx: 134, y: 92, s: 0.62 },
      ].map((p) => (
        <Person key={p.cx} {...p} fill={SILVER} opacity={0.3} />
      ))}
      <Person cx={100} y={104} s={0.95} fill={`url(#${id}-gold)`} />
      <path d="M100 26V8M100 8l6 6M100 8l-6 6" fill="none" stroke={GOLD_LIGHT} strokeWidth="1.8" strokeLinecap="round" />
    </ArtFrame>
  );
}

/** Mid & Senior-Level Hiring: a manager stepping up. */
function LadderArt({ className }: { className?: string }) {
  const id = "eh-s3";
  return (
    <ArtFrame id={id} className={className}>
      {Array.from({ length: 4 }, (_, i) => (
        <rect
          key={i}
          x={28 + i * 36}
          y={88 - i * 18}
          width="36"
          height={18 + i * 18}
          fill={GOLD}
          fillOpacity={0.06 + i * 0.06}
          stroke={GOLD}
          strokeOpacity="0.55"
        />
      ))}
      <Person cx={46} y={88} s={0.55} fill="none" stroke={SILVER} strokeOpacity="0.5" strokeDasharray="3 2.5" />
      <Person cx={118} y={52} s={0.72} fill={`url(#${id}-gold)`} />
      <path d="M150 30 L164 14 M164 14h-9 M164 14v9" fill="none" stroke={GOLD_LIGHT} strokeWidth="1.8" strokeLinecap="round" />
    </ArtFrame>
  );
}

/** Confidential & Specialist Hiring: a profile, sealed. */
function SealedArt({ className }: { className?: string }) {
  const id = "eh-s4";
  return (
    <ArtFrame id={id} className={className}>
      {/* Profile card, half out of the envelope */}
      <rect x="62" y="10" width="76" height="56" rx="4" fill="#15120e" stroke={SILVER} strokeOpacity="0.4" />
      <Person cx={82} y={44} s={0.5} fill={SILVER} opacity={0.4} />
      <path d="M100 24h28M100 32h22M100 40h26" stroke={SILVER} strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
      {/* Envelope */}
      <path d="M50 46h100v58H50z" fill="#12100c" stroke={GOLD} strokeOpacity="0.7" />
      <path d="M50 46 100 80 150 46" fill="none" stroke={GOLD} strokeOpacity="0.7" />
      {/* Wax seal with a keyhole */}
      <circle cx="100" cy="80" r="16.5" fill="none" stroke={GOLD} strokeOpacity="0.4" />
      <circle cx="100" cy="80" r="13" fill={`url(#${id}-gold)`} />
      <path d="M100 74a3.2 3.2 0 0 1 1.6 6l1.2 5.5h-5.6l1.2-5.5a3.2 3.2 0 0 1 1.6-6z" fill="#0b0a08" />
    </ArtFrame>
  );
}

const solutionArt = { chess: ChessArt, lead: LeadArt, ladder: LadderArt, sealed: SealedArt } as const;

/* ---------- Levels pyramid ---------- */

/** Three tiers: one leader at the top, function heads below, managers at the base. */
function PyramidArt({ className }: { className?: string }) {
  const id = "eh-pyr";
  const apexY = 18;
  const baseY = 290;
  const half = 165; // half-width at the base
  const xAt = (y: number) => (half * (y - apexY)) / (baseY - apexY);
  const bands = [
    { y0: 18, y1: 112, fill: 0.3, people: [180], s: 0.95, color: `url(#${id}-gold)`, o: 1 },
    { y0: 122, y1: 202, fill: 0.14, people: [132, 180, 228], s: 0.72, color: GOLD, o: 0.85 },
    { y0: 212, y1: 290, fill: 0.06, people: [72, 126, 180, 234, 288], s: 0.62, color: SILVER, o: 0.55 },
  ];
  return (
    <svg viewBox="0 0 360 300" aria-hidden="true" focusable="false" className={className}>
      <SceneDefs id={id} />
      <circle cx="180" cy="90" r="150" fill={`url(#${id}-halo)`} />
      {bands.map(({ y0, y1, fill, people, s, color, o }, i) => {
        const a = xAt(y0);
        const b = xAt(y1);
        return (
          <g key={y0}>
            <path
              d={`M${180 - a} ${y0} H${180 + a} L${180 + b} ${y1} H${180 - b}Z`}
              fill={GOLD}
              fillOpacity={fill}
              stroke={GOLD}
              strokeOpacity={0.7 - i * 0.15}
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {people.map((cx) => (
              <Person key={cx} cx={cx} y={y1 - 8} s={s} fill={color} opacity={o} />
            ))}
          </g>
        );
      })}
      <Sparkle x={216} y={36} r={6} className="animate-pulse-soft svg-origin-center" />
    </svg>
  );
}

/* ---------- Search funnel ---------- */

/** A wide field of candidates, narrowed through the funnel to one leader on a podium. */
function FunnelArt({ className }: { className?: string }) {
  const id = "eh-fun";
  // Deterministic scatter for the wide field.
  const dots = Array.from({ length: 46 }, (_, i) => ({
    x: 24 + ((i * 53) % 270),
    y: 18 + ((i * 37) % 104),
    r: 2 + (i % 3) * 0.8,
  }));
  const inside = [
    { x: 360, y: 52 },
    { x: 380, y: 86 },
    { x: 420, y: 62 },
    { x: 450, y: 82 },
    { x: 500, y: 66 },
    { x: 540, y: 76 },
    { x: 590, y: 70 },
  ];
  return (
    <svg viewBox="0 0 1000 140" aria-hidden="true" focusable="false" className={className}>
      <SceneDefs id={id} />
      <ellipse cx="880" cy="80" rx="140" ry="70" fill={`url(#${id}-halo)`} />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={SILVER} fillOpacity={0.25 + (d.x / 300) * 0.25} />
      ))}
      {/* Funnel */}
      <path
        d="M320 12 C 520 16, 600 56, 700 62 L700 78 C 600 84, 520 124, 320 128"
        fill={GOLD}
        fillOpacity="0.06"
        stroke={GOLD}
        strokeOpacity="0.55"
      />
      {inside.map((d) => (
        <circle key={d.x} cx={d.x} cy={d.y} r="3.2" fill={GOLD} fillOpacity={0.35 + (d.x - 360) / 600} />
      ))}
      <path
        d="M706 70 H800"
        stroke={GOLD}
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        className="animate-dash"
        markerEnd={`url(#${id}-arrow)`}
      />
      {/* The one: on a podium */}
      <rect x="846" y="112" width="68" height="16" rx="3" fill="#1a1713" stroke={`url(#${id}-gold)`} strokeWidth="1.5" />
      <Person cx={880} y={112} s={1.6} fill={`url(#${id}-gold)`} />
      <Sparkle x={930} y={34} r={7} className="animate-pulse-soft svg-origin-center" />
    </svg>
  );
}

/* ---------- Boardroom ---------- */

/** Seen from above: a boardroom table, every seat considered, the head seat filled in gold. */
function BoardroomArt({ className }: { className?: string }) {
  const id = "eh-br";
  /** A seated person from above (chair, shoulders, head), rotated to face the table. */
  const seat = (x: number, y: number, rot: number, gold = false) => (
    <g key={`${x}-${y}`} transform={`rotate(${rot} ${x} ${y})`}>
      <rect
        x={x - 17}
        y={y - 4}
        width="34"
        height="20"
        rx="8"
        fill="#14110d"
        stroke={gold ? GOLD : SILVER}
        strokeOpacity={gold ? 0.9 : 0.3}
      />
      <ellipse cx={x} cy={y + 2} rx="14" ry="8" fill={gold ? `url(#${id}-gold)` : SILVER} fillOpacity={gold ? 1 : 0.28} />
      <circle cx={x} cy={y - 4} r="7" fill={gold ? GOLD_LIGHT : SILVER} fillOpacity={gold ? 1 : 0.4} />
    </g>
  );
  const sides = [150, 210, 270, 330];
  return (
    <svg viewBox="0 0 480 300" aria-hidden="true" focusable="false" className={className}>
      <SceneDefs id={id} />
      <circle cx="388" cy="150" r="130" fill={`url(#${id}-halo)`} />
      {sides.map((x) => seat(x, 64, 180))}
      {sides.map((x) => seat(x, 236, 0))}
      {seat(78, 150, 90)}
      {/* Table */}
      <rect x="104" y="92" width="270" height="116" rx="58" fill="#12100c" stroke={GOLD} strokeOpacity="0.6" strokeWidth="1.4" />
      <rect x="116" y="104" width="246" height="92" rx="46" fill="none" stroke={GOLD} strokeOpacity="0.15" />
      {/* Papers at each seat, a gold folder at the head */}
      {sides.flatMap((x) => [108, 179].map((y) => (
        <rect key={`${x}-${y}`} x={x - 9} y={y} width="18" height="13" rx="1.5" fill={SILVER} fillOpacity="0.12" />
      )))}
      <rect x="330" y="138" width="22" height="26" rx="2" fill={`url(#${id}-gold)`} opacity="0.85" />
      {/* The head of the table */}
      {seat(402, 150, -90, true)}
      <circle cx="402" cy="150" r="34" fill="none" stroke={GOLD} strokeOpacity="0.5" className="animate-ping-soft svg-origin-center" />
      <Sparkle x={440} y={96} r={6} className="animate-pulse-soft svg-origin-center" />
    </svg>
  );
}
