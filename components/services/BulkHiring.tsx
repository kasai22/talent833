import type { ReactNode } from "react";
import Link from "next/link";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { CupIcon, ShopBagIcon, StorefrontIcon } from "@/components/services/serviceIcons";
import { GoldCta, PageBackdrop, darkPanel, goldPanel, iconTile } from "@/components/services/trainingUi";
import { GOLD, GOLD_LIGHT, Person, SILVER, SceneDefs, SectionHead, Sparkle } from "@/components/services/hiringArt";
import { Breadcrumbs, cn, Container, Eyebrow, pillClass } from "@/components/ui";
import { bulkHiring as bh } from "@/lib/content/bulkHiring";
import { HIRING_SLUG } from "@/lib/content/hiring";
import { serviceHref } from "@/lib/content/services";
import { routes } from "@/lib/site";

/** Secondary hero action: the shared outline pill. */
const outlinePill = cn(pillClass({ variant: "outline", size: "lg" }), "w-fit");

/**
 * Bulk Hiring page body: storefront-street hero, the staffing problems we solve, the roles we fill
 * (entry and mid level), the process, why us, and the standard closing CTA.
 * All imagery is drawn SVG in the site's gold-on-ink style.
 */
export function BulkHiring() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <PageBackdrop id="bh" />

        {/* ---------- Hero ---------- */}
        <section aria-labelledby="bh-title">
          <Container className="grid items-center gap-10 pt-[120px] pb-14 md:pt-[150px] md:pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
            <header className="flex animate-rise flex-col gap-6">
              <Breadcrumbs crumbs={[{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Hiring", href: serviceHref(HIRING_SLUG) }, { label: "Bulk Hiring" }]} />
              <Eyebrow>{bh.eyebrow}</Eyebrow>
              <h1
                id="bh-title"
                className="font-display text-[38px] leading-[1.06] font-semibold tracking-[-0.025em] md:text-[54px] xl:text-[60px]"
              >
                {bh.title.map((line, i) => (
                  <span key={line} className={cn("block", i === 1 && "text-gold")}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="max-w-[520px] text-base leading-relaxed text-mist md:text-lg">{bh.lede}</p>

              <ul aria-label="Businesses we staff" className="flex max-w-[560px] flex-wrap gap-2">
                {bh.sectors.map(({ title, icon: Icon }) => (
                  <li
                    key={title}
                    className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] py-1.5 pr-3.5 pl-2.5 text-[13px] text-cream md:text-sm"
                  >
                    <Icon size={16} className="text-gold" />
                    {title}
                  </li>
                ))}
              </ul>

              <div className="mt-1 flex flex-wrap gap-3">
                <GoldCta href={routes.contact}>
                  {bh.cta}
                  <ArrowRightIcon size={16} />
                </GoldCta>
                <a href="#bh-process" className={outlinePill}>
                  {bh.secondaryCta}
                </a>
              </div>
            </header>

            <HeroArt className="mx-auto w-full max-w-[600px]" />
          </Container>
        </section>

        {/* ---------- Challenges ---------- */}
        <section aria-labelledby="bh-challenges" className="pt-6 md:pt-10">
          <Container className="flex flex-col gap-10">
            <SectionHead id="bh-challenges" eyebrow={bh.challenges.eyebrow} title={bh.challenges.title} />
            <ul className="grid gap-5 md:grid-cols-3 lg:gap-6">
              {bh.challenges.items.map(({ art, title, body }) => {
                const Art = challengeArt[art];
                return (
                  <li
                    key={title}
                    className={cn(darkPanel, "flex flex-col overflow-hidden rounded-[24px] transition-colors duration-300 hover:border-gold/45")}
                  >
                    <div className="border-b border-white/10 bg-gradient-to-b from-gold/[0.07] to-transparent px-4 pt-4">
                      <Art className="h-[150px] w-full" />
                    </div>
                    <div className="flex flex-col gap-2 p-6">
                      <h3 className="font-display text-xl leading-snug font-semibold text-cream md:text-[22px]">{title}</h3>
                      <p className="text-[15px] leading-relaxed text-mist">{body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        {/* ---------- Roles we fill ---------- */}
        <section aria-labelledby="bh-roles" className="pt-16 md:pt-24">
          <Container className="flex flex-col gap-10">
            <SectionHead id="bh-roles" eyebrow={bh.roles.eyebrow} title={bh.roles.title} />
            <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
              {bh.roles.tiers.map((tier, t) => (
                <article
                  key={tier.label}
                  aria-labelledby={`bh-tier-${t}`}
                  className={cn(t === 0 ? darkPanel : goldPanel, "flex flex-col gap-6 rounded-[28px] p-6 md:p-8")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="w-fit rounded-full border border-gold/40 px-3 py-1 text-xs font-bold tracking-[0.16em] text-gold uppercase">
                        {tier.label}
                      </span>
                      <h3 id={`bh-tier-${t}`} className="font-display text-[26px] leading-tight font-semibold md:text-[30px]">
                        {tier.title}
                      </h3>
                    </div>
                    <TierArt level={t === 0 ? "entry" : "mid"} className="hidden h-[64px] w-[120px] shrink-0 sm:block" />
                  </div>
                  <p className="text-[15px] leading-relaxed text-mist md:text-base">{tier.body}</p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {tier.items.map(({ title, icon: Icon }) => (
                      <li key={title} className="flex items-center gap-3 rounded-2xl bg-white/[0.04] px-3.5 py-3 text-[15px] text-cream">
                        <span aria-hidden="true" className={cn(iconTile, "size-10 rounded-xl")}>
                          <Icon size={20} />
                        </span>
                        {title}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* ---------- Process ---------- */}
        <section aria-labelledby="bh-process-title" id="bh-process" className="scroll-mt-28 pt-16 md:pt-24">
          <Container className="flex flex-col gap-12">
            <SectionHead id="bh-process-title" eyebrow={bh.process.eyebrow} title={bh.process.title} />
            <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {/* Connecting rail behind the step badges (desktop). */}
              <span
                aria-hidden="true"
                className="absolute top-8 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-gold/10 via-gold/60 to-gold/10 lg:block"
              />
              {bh.process.steps.map(({ title, body, icon: Icon }, i) => (
                <li key={title} className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center">
                  <span className="relative grid size-16 shrink-0 place-items-center rounded-full border border-gold/70 bg-ink text-gold shadow-[0_0_24px_rgba(230,171,63,0.18)]">
                    <span className="absolute inset-1 rounded-full bg-gold/[0.07]" />
                    <Icon size={26} />
                    <span className="absolute -top-1 -right-1 grid size-6 place-items-center rounded-full bg-gold text-[11px] font-bold text-ink">
                      {i + 1}
                    </span>
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="font-display text-lg font-semibold text-cream md:text-xl">{title}</span>
                    <span className="text-[15px] leading-relaxed text-mist lg:max-w-[200px]">{body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* ---------- Why us: scale ---------- */}
        <section aria-labelledby="bh-scale" className="pt-16 md:pt-24">
          <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className={cn(darkPanel, "order-last overflow-hidden rounded-[28px] bg-gradient-to-b from-gold/[0.06] to-transparent p-4 md:p-6 lg:order-first")}>
              <GrowthArt className="h-auto w-full" />
            </div>
            <div className="flex flex-col gap-6">
              <p className="flex items-center gap-4 text-xs font-bold tracking-[0.24em] text-gold uppercase md:text-sm">
                <span aria-hidden="true" className="h-px w-10 bg-gold" />
                {bh.scale.eyebrow}
              </p>
              <h2
                id="bh-scale"
                className="font-display text-[28px] leading-tight font-semibold tracking-[-0.015em] text-balance text-cream md:text-[38px]"
              >
                {bh.scale.title}
              </h2>
              <p className="text-base leading-relaxed text-mist md:text-lg">{bh.scale.body}</p>
              <ul className="grid gap-5 sm:grid-cols-2">
                {bh.scale.points.map(({ title, body, icon: Icon }) => (
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
              <Link
                href={routes.contact}
                className="inline-flex w-fit items-center gap-2 pt-1 text-[15px] font-semibold text-gold transition-colors hover:text-gold-light"
              >
                {bh.cta} <ArrowRightIcon size={16} />
              </Link>
            </div>
          </Container>
        </section>
      </div>

      <CtaBanner />
    </>
  );
}

/* ====================================================================== */
/* Drawn imagery                                                           */
/* ====================================================================== */

/** Geometry of a storefront standing on `base`, so callers can place things in its window. */
function shopGeo(x: number, base: number, w: number, h: number) {
  const top = base - h;
  const ay = top + 8; // awning top
  const ah = Math.max(12, h * 0.14); // awning depth
  const winY = ay + ah + h * 0.1;
  const win = { x: x + w * 0.09, y: winY, w: w * 0.52, h: (base - winY) * 0.58 };
  const doorW = w * 0.22;
  const door = { x: x + w * 0.91 - doorW, y: winY, w: doorW, h: base - winY };
  return { top, ay, ah, win, door };
}

/** A small shop: cornice, striped scalloped awning, lit window and a door. */
function Shop({ id, x, base, w, h, children }: { id: string; x: number; base: number; w: number; h: number; children?: ReactNode }) {
  const { top, ay, ah, win, door } = shopGeo(x, base, w, h);
  const n = Math.max(3, Math.round(w / 32));
  const seg = (w + 8) / n;
  const scallops = Array.from({ length: n }, () => `a${seg / 2} ${seg * 0.32} 0 0 1 ${-seg} 0`).join(" ");
  return (
    <g>
      <rect x={x} y={top} width={w} height={h} fill="#12100c" stroke={GOLD} strokeOpacity="0.5" strokeWidth="1.2" />
      <rect x={x - 5} y={top - 5} width={w + 10} height="6" rx="1.5" fill={`url(#${id}-gold)`} />
      <path
        d={`M${x} ${ay} H${x + w} L${x + w + 4} ${ay + ah} ${scallops} Z`}
        fill={`url(#${id}-awn)`}
        stroke={GOLD}
        strokeOpacity="0.6"
        strokeWidth="0.8"
      />
      <rect x={win.x} y={win.y} width={win.w} height={win.h} rx="2" fill={`url(#${id}-glow)`} stroke={GOLD} strokeOpacity="0.6" />
      {children}
      <rect x={door.x} y={door.y} width={door.w} height={door.h} rx="2" fill="#0b0a08" stroke={GOLD} strokeOpacity="0.6" />
      <rect x={door.x + 3} y={door.y + 4} width={door.w - 6} height={door.h * 0.35} rx="1" fill={`url(#${id}-glow)`} opacity="0.6" />
      <circle cx={door.x + door.w - 5} cy={door.y + door.h * 0.58} r="1.6" fill={GOLD_LIGHT} />
    </g>
  );
}

/** A role filled (gold) or still open (dashed outline). */
function Staff({ id, cx, y, s, open }: { id: string; cx: number; y: number; s: number; open?: boolean }) {
  return open ? (
    <Person cx={cx} y={y} s={s} fill="none" stroke={SILVER} strokeOpacity="0.55" strokeWidth="1.3" strokeDasharray="3 3" />
  ) : (
    <Person cx={cx} y={y} s={s} fill={`url(#${id}-gold)`} />
  );
}

/* ---------- Hero: a street of businesses, their teams almost complete ---------- */

function HeroArt({ className }: { className?: string }) {
  const { roster, shortlist } = bh.heroCards;
  return (
    <div aria-hidden="true" className={cn("relative", className)}>
      <StreetScene className="h-auto w-full" />

      {/* Roster card: the outlet's team filling up. */}
      <div className="absolute top-0 right-0 hidden w-[228px] flex-col gap-2.5 rounded-2xl border border-white/15 bg-ink/80 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-md sm:flex">
        <span className="flex items-center justify-between gap-2">
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-cream">{roster.title}</span>
            <span className="text-xs text-muted">{roster.note}</span>
          </span>
          <StorefrontIcon size={18} className="shrink-0 text-gold" />
        </span>
        <span className="h-px bg-white/10" />
        {roster.roles.map((r) => (
          <span key={r.title} className="flex items-center justify-between gap-2 text-[13px]">
            <span className={r.done ? "text-cream" : "text-mist"}>{r.title}</span>
            {r.done ? (
              <span className="grid size-[18px] place-items-center rounded-full bg-gold text-ink">
                <CheckIcon size={11} strokeWidth={3} />
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-[11px] text-gold">
                <span className="size-1.5 animate-pulse-soft rounded-full bg-gold" />
                {roster.pending}
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Shortlist chip. */}
      <div className="absolute top-[3%] left-0 hidden animate-float items-center gap-3 rounded-2xl border border-white/15 bg-ink/80 p-3 pr-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-md sm:flex">
        <span className="flex">
          {["#8E8E8E", "#E6AB3F", "#C9C9C6"].map((c, i) => (
            <span key={c} className={cn("grid size-8 place-items-center rounded-full border-2 border-ink", i > 0 && "-ml-2.5")} style={{ background: c }}>
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-4 text-ink/70">
                <circle cx="10" cy="7" r="3.6" />
                <path d="M3.5 18a6.5 6.5 0 0 1 13 0z" />
              </svg>
            </span>
          ))}
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-cream">{shortlist.label}</span>
          <span className="text-xs text-muted">{shortlist.note}</span>
        </span>
      </div>
    </div>
  );
}

function StreetScene({ className }: { className?: string }) {
  const id = "bh-st";
  const base = 372;
  const cafe = shopGeo(168, base, 184, 222);
  const shop = shopGeo(372, base, 112, 150);
  const officeTop = 182;
  return (
    <svg viewBox="0 0 520 440" aria-hidden="true" focusable="false" className={className}>
      <SceneDefs id={id} />
      <circle cx="270" cy="250" r="240" fill={`url(#${id}-halo)`} />

      {/* Office block (SMEs) */}
      <rect x="34" y={officeTop} width="112" height={base - officeTop} fill="#12100c" stroke={GOLD} strokeOpacity="0.45" strokeWidth="1.2" />
      <rect x="29" y={officeTop - 5} width="122" height="6" rx="1.5" fill={`url(#${id}-gold)`} opacity="0.8" />
      {Array.from({ length: 5 }, (_, r) =>
        Array.from({ length: 3 }, (_, c) => (
          <rect
            key={`${r}-${c}`}
            x={48 + c * 32}
            y={officeTop + 18 + r * 30}
            width="20"
            height="16"
            rx="1.5"
            fill={(r * 3 + c) % 3 === 1 ? "#ffffff" : GOLD}
            fillOpacity={(r * 3 + c) % 3 === 1 ? 0.05 : 0.32}
          />
        )),
      )}
      <rect x="77" y="340" width="26" height={base - 340} rx="1.5" fill="#0b0a08" stroke={GOLD} strokeOpacity="0.55" />

      {/* Café, centre stage */}
      <rect x="212" y="112" width="96" height="28" rx="14" fill="#12100c" stroke={GOLD} strokeOpacity="0.8" />
      <line x1="230" y1="140" x2="230" y2={cafe.top - 5} stroke={GOLD} strokeOpacity="0.6" />
      <line x1="290" y1="140" x2="290" y2={cafe.top - 5} stroke={GOLD} strokeOpacity="0.6" />
      <CupIcon x={249} y={114} size={22} className="text-gold" />
      <Shop id={id} x={168} base={base} w={184} h={222}>
        {/* Pendant lights and a barista behind the counter */}
        {[0.25, 0.5, 0.75].map((f) => {
          const lx = cafe.win.x + cafe.win.w * f;
          return (
            <g key={f}>
              <line x1={lx} y1={cafe.win.y} x2={lx} y2={cafe.win.y + 16} stroke={GOLD} strokeOpacity="0.7" />
              <path d={`M${lx - 6} ${cafe.win.y + 22}a6 6 0 0 1 12 0z`} fill={GOLD_LIGHT} />
            </g>
          );
        })}
        <Person cx={cafe.win.x + cafe.win.w * 0.5} y={cafe.win.y + cafe.win.h - 14} s={0.62} fill={`url(#${id}-gold)`} />
        <rect x={cafe.win.x} y={cafe.win.y + cafe.win.h - 16} width={cafe.win.w} height="16" fill="#1b1611" stroke={GOLD} strokeOpacity="0.5" />
      </Shop>

      {/* Retail shop */}
      <Shop id={id} x={372} base={base} w={112} h={150}>
        <ShopBagIcon x={shop.win.x + shop.win.w / 2 - 13} y={shop.win.y + shop.win.h / 2 - 13} size={26} className="text-gold" strokeWidth={1.4} />
      </Shop>

      {/* Street */}
      <rect x="10" y={base} width="500" height="44" fill="#ffffff" fillOpacity="0.025" />
      <line x1="10" y1={base} x2="510" y2={base} stroke={GOLD} strokeOpacity="0.45" />

      {/* The teams: most roles filled, two still open */}
      <Staff id={id} cx={72} y={420} s={0.95} />
      <Staff id={id} cx={110} y={420} s={0.95} />
      <Staff id={id} cx={196} y={420} s={1} />
      <Staff id={id} cx={234} y={420} s={1} />
      <Staff id={id} cx={272} y={420} s={1} />
      <Staff id={id} cx={312} y={420} s={1} open />
      <Staff id={id} cx={408} y={420} s={0.95} />
      <Staff id={id} cx={448} y={420} s={0.95} open />
      <circle cx={312} cy={402} r="26" fill="none" stroke={GOLD} strokeOpacity="0.5" className="animate-ping-soft svg-origin-center" />

      <Sparkle x={340} y={98} r={7} className="animate-pulse-soft svg-origin-center" />
      <Sparkle x={160} y={124} r={4} />
      <circle cx="372" cy="176" r="2.5" fill={GOLD_LIGHT} opacity="0.7" />
    </svg>
  );
}

/* ---------- Challenge vignettes ---------- */

/** A new outlet, ready to open — but every role is still an outline. */
function OutletArt({ className }: { className?: string }) {
  const id = "bh-c1";
  const g = shopGeo(70, 120, 100, 94);
  return (
    <svg viewBox="0 0 240 140" aria-hidden="true" focusable="false" className={className}>
      <SceneDefs id={id} />
      <circle cx="120" cy="80" r="80" fill={`url(#${id}-halo)`} />
      <Shop id={id} x={70} base={120} w={100} h={94}>
        {/* "Opening soon" tag hanging in the window */}
        <path d={`M${g.win.x + g.win.w / 2 - 10} ${g.win.y}l10 9 10-9`} fill="none" stroke={GOLD} strokeOpacity="0.8" />
        <rect x={g.win.x + g.win.w / 2 - 16} y={g.win.y + 9} width="32" height="14" rx="2" fill="#12100c" stroke={GOLD} />
        <path d={`M${g.win.x + g.win.w / 2 - 9} ${g.win.y + 16}h18`} stroke={GOLD_LIGHT} strokeWidth="1.5" strokeDasharray="3 2" />
      </Shop>
      <line x1="10" y1="120" x2="230" y2="120" stroke={GOLD} strokeOpacity="0.45" />
      {[26, 50, 190, 214].map((cx) => (
        <Staff key={cx} id={id} cx={cx} y={134} s={0.6} open />
      ))}
      <Sparkle x={186} y={30} r={5} className="animate-pulse-soft svg-origin-center" />
    </svg>
  );
}

/** A week's roster with gaps where the weekend shifts should be. */
function RosterArt({ className }: { className?: string }) {
  const id = "bh-c2";
  const open = new Set(["0-5", "1-6", "2-5", "2-6", "1-3"]);
  return (
    <svg viewBox="0 0 240 140" aria-hidden="true" focusable="false" className={className}>
      <SceneDefs id={id} />
      <circle cx="120" cy="76" r="80" fill={`url(#${id}-halo)`} />
      <rect x="40" y="20" width="160" height="112" rx="10" fill="#12100c" stroke={GOLD} strokeOpacity="0.5" />
      <path d="M40 30a10 10 0 0 1 10-10h140a10 10 0 0 1 10 10v12H40z" fill={GOLD} fillOpacity="0.18" />
      {[72, 168].map((x) => (
        <rect key={x} x={x - 3} y="13" width="6" height="14" rx="3" fill={`url(#${id}-gold)`} />
      ))}
      {Array.from({ length: 3 }, (_, r) =>
        Array.from({ length: 7 }, (_, c) => {
          const x = 47 + c * 21;
          const y = 50 + r * 26;
          return open.has(`${r}-${c}`) ? (
            <rect key={`${r}-${c}`} x={x} y={y} width="17" height="20" rx="3" fill="none" stroke={SILVER} strokeOpacity="0.55" strokeDasharray="3 2.5" />
          ) : (
            <g key={`${r}-${c}`}>
              <rect x={x} y={y} width="17" height="20" rx="3" fill={GOLD} fillOpacity="0.16" />
              <Person cx={x + 8.5} y={y + 18} s={0.36} fill={`url(#${id}-gold)`} />
            </g>
          );
        }),
      )}
      <circle cx="200" cy="22" r="10" fill={GOLD} className="animate-pulse-soft svg-origin-center" />
      <path d="M200 16.5v6.5M200 26.5v.5" stroke="#060606" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

/** An owner at the desk, a tower of CVs beside them, the clock running. */
function OverloadArt({ className }: { className?: string }) {
  const id = "bh-c3";
  return (
    <svg viewBox="0 0 240 140" aria-hidden="true" focusable="false" className={className}>
      <SceneDefs id={id} />
      <circle cx="120" cy="80" r="80" fill={`url(#${id}-halo)`} />
      {/* Clock */}
      <circle cx="58" cy="34" r="16" fill="#12100c" stroke={GOLD} strokeOpacity="0.8" />
      <path d="M58 24v10l7 4" fill="none" stroke={GOLD_LIGHT} strokeWidth="1.6" strokeLinecap="round" />
      {/* Owner behind the desk */}
      <Person cx={92} y={104} s={0.85} fill={`url(#${id}-gold)`} />
      {/* Laptop */}
      <path d="M100 104l6-20h30l-6 20z" fill="#1b1611" stroke={GOLD} strokeOpacity="0.7" />
      {/* CV tower */}
      {Array.from({ length: 8 }, (_, i) => (
        <rect
          key={i}
          x={150 + (i % 2 ? 3 : -2) + (i > 5 ? i - 5 : 0)}
          y={96 - i * 8}
          width="38"
          height="8"
          rx="1"
          fill="#1b1611"
          stroke={GOLD}
          strokeOpacity="0.6"
          transform={i > 5 ? `rotate(${(i - 5) * 5} 169 ${100 - i * 8})` : undefined}
        />
      ))}
      {/* Loose sheets */}
      <g transform="rotate(-14 206 32)">
        <rect x="194" y="22" width="24" height="30" rx="2" fill="#12100c" stroke={GOLD} strokeOpacity="0.6" />
        <path d="M199 30h14M199 36h14M199 42h9" stroke={GOLD} strokeOpacity="0.5" />
      </g>
      {/* Desk */}
      <rect x="40" y="104" width="160" height="6" rx="2" fill={`url(#${id}-gold)`} />
      <path d="M52 110v20M188 110v20" stroke={GOLD} strokeOpacity="0.6" strokeWidth="2" />
    </svg>
  );
}

const challengeArt = { outlet: OutletArt, roster: RosterArt, overload: OverloadArt } as const;

/* ---------- Role tiers ---------- */

/** Entry level: a full line of crew. Mid level: a lead on a step, with the team behind. */
function TierArt({ level, className }: { level: "entry" | "mid"; className?: string }) {
  const id = `bh-tier-${level}`;
  return (
    <svg viewBox="0 0 120 64" aria-hidden="true" focusable="false" className={className}>
      <SceneDefs id={id} />
      <ellipse cx="60" cy="58" rx="56" ry="8" fill={`url(#${id}-halo)`} />
      {level === "entry" ? (
        [18, 42, 66, 90].map((cx, i) => <Staff key={cx} id={id} cx={cx + 6} y={58} s={0.68} open={i === 3} />)
      ) : (
        <>
          <Staff id={id} cx={26} y={58} s={0.58} />
          <Staff id={id} cx={94} y={58} s={0.58} />
          <rect x="44" y="46" width="32" height="12" rx="2" fill="#1a1713" stroke={`url(#${id}-gold)`} />
          <Staff id={id} cx={60} y={46} s={0.78} />
          <Sparkle x={86} y={14} r={5} className="animate-pulse-soft svg-origin-center" />
        </>
      )}
    </svg>
  );
}

/* ---------- Scale: one shop, then two, then three — each fully staffed ---------- */

function GrowthArt({ className }: { className?: string }) {
  const id = "bh-gr";
  const base = 250;
  const groups = [
    [{ x: 28, w: 70, h: 70 }],
    [
      { x: 128, w: 62, h: 92 },
      { x: 200, w: 62, h: 92 },
    ],
    [
      { x: 290, w: 54, h: 116 },
      { x: 350, w: 54, h: 116 },
      { x: 410, w: 54, h: 116 },
    ],
  ];
  // Rising path above the shops, with a waypoint over each stage.
  const p0 = [44, 150];
  const c1 = [170, 150];
  const c2 = [300, 100];
  const p3 = [452, 38];
  const at = (t: number) =>
    [0, 1].map(
      (k) => (1 - t) ** 3 * p0[k] + 3 * (1 - t) ** 2 * t * c1[k] + 3 * (1 - t) * t ** 2 * c2[k] + t ** 3 * p3[k],
    );
  return (
    <svg viewBox="0 0 480 290" aria-hidden="true" focusable="false" className={className}>
      <SceneDefs id={id} />
      <circle cx="300" cy="160" r="190" fill={`url(#${id}-halo)`} />
      <path
        d={`M${p0} C${c1} ${c2} ${p3}`}
        fill="none"
        stroke={GOLD}
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        markerEnd={`url(#${id}-arrow)`}
      />
      {[0.04, 0.42, 0.78].map((t) => {
        const [x, y] = at(t);
        return (
          <g key={t}>
            <circle cx={x} cy={y} r="9" fill={GOLD} fillOpacity="0.18" />
            <circle cx={x} cy={y} r="4" fill={GOLD_LIGHT} />
          </g>
        );
      })}
      {groups.flat().map((s) => (
        <Shop key={s.x} id={id} {...s} base={base} />
      ))}
      <line x1="10" y1={base} x2="470" y2={base} stroke={GOLD} strokeOpacity="0.45" />
      {groups.flat().map((s) => (
        <g key={s.x}>
          <Staff id={id} cx={s.x + s.w * 0.3} y={282} s={0.55} />
          <Staff id={id} cx={s.x + s.w * 0.72} y={282} s={0.55} />
        </g>
      ))}
    </svg>
  );
}
