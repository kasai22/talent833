import type { SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, UsersIcon } from "@/components/icons";
import { BriefcaseIcon } from "@/components/services/serviceIcons";
import { GoldCta, PageBackdrop, RuleHeading, darkPanel, iconTile } from "@/components/services/trainingUi";
import { Breadcrumbs, Container, Eyebrow, cn, pillClass } from "@/components/ui";
import { hiringHref } from "@/lib/content/hiring";
import { hiringPage as hp } from "@/lib/content/hiringPage";
import { routes } from "@/lib/site";
import talentImg from "@/public/services/talent-acquisition.jpg";

/** Secondary hero action: the shared outline pill. */
const outlinePill = cn(pillClass({ variant: "outline", size: "lg" }), "w-fit");

const modelIcons = { "executive-hiring": BriefcaseIcon, "bulk-hiring": UsersIcon } as const;

/** Hiring overview page body: photo hero, the two hiring models, a comparison and the sectors we hire for. */
export function Hiring() {
  const [exec, bulk] = hp.models.items;
  return (
    <section aria-labelledby="hr-title" className="relative isolate overflow-hidden">
      <PageBackdrop id="hr" />

      <Container className="flex flex-col gap-16 pt-[120px] pb-16 md:gap-24 md:pt-[150px] md:pb-20 xl:pb-24">
        {/* ---------- Hero ---------- */}
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
          <header className="flex animate-rise flex-col gap-6">
            <Breadcrumbs crumbs={[{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Hiring" }]} />
            <Eyebrow>{hp.eyebrow}</Eyebrow>
            <h1
              id="hr-title"
              className="font-display text-[38px] leading-[1.06] font-semibold tracking-[-0.025em] md:text-[54px] xl:text-[60px]"
            >
              {hp.title.map((line, i) => (
                <span key={line} className={cn("block", i === 1 && "text-gold")}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-[540px] text-base leading-relaxed text-mist md:text-lg">{hp.lede}</p>

            {/* The two models at a glance; each jumps to its card below. */}
            <ul className="flex flex-wrap gap-3">
              {hp.models.items.map((m) => {
                const Icon = modelIcons[m.id as keyof typeof modelIcons];
                return (
                  <li key={m.id}>
                    <a
                      href={`#${m.id}`}
                      className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.04] py-2.5 pr-4 pl-2.5 transition-colors hover:border-gold/50"
                    >
                      <span aria-hidden="true" className={cn(iconTile, "size-10 rounded-xl")}>
                        <Icon size={20} />
                      </span>
                      <span className="flex flex-col leading-tight">
                        <span className="text-[15px] font-semibold text-cream">{m.title}</span>
                        <span className="text-xs text-muted">{m.tag}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-1 flex flex-wrap gap-3">
              <GoldCta href="#models">
                {hp.primaryCta}
                <ArrowRightIcon size={16} />
              </GoldCta>
              <Link href={routes.contact} className={outlinePill}>
                {hp.secondaryCta}
              </Link>
            </div>
          </header>

          <HeroPhoto className="mx-auto w-full max-w-[460px]" />
        </div>

        {/* ---------- Two hiring models ---------- */}
        <div id="models" className="flex scroll-mt-28 flex-col gap-10">
          <SectionIntro id="hr-models" title={hp.models.title} intro={hp.models.intro} />
          <ul aria-labelledby="hr-models" className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {hp.models.items.map((m, i) => (
              <li
                key={m.id}
                id={m.id}
                className={cn(
                  darkPanel,
                  "group flex scroll-mt-28 flex-col overflow-hidden rounded-[28px] transition-colors duration-300 hover:border-gold/45",
                )}
              >
                <div className="relative border-b border-white/10 bg-gradient-to-b from-gold/[0.07] to-transparent">
                  {m.art === "spotlight" ? <SpotlightArt className="h-[220px] w-full md:h-[260px]" /> : <CrowdArt className="h-[220px] w-full md:h-[260px]" />}
                  <span className="absolute top-5 left-5 rounded-full border border-gold/40 bg-ink/70 px-3 py-1 text-xs font-bold tracking-[0.16em] text-gold uppercase backdrop-blur">
                    {String(i + 1).padStart(2, "0")} · {m.label}
                  </span>
                </div>

                <div className="flex grow flex-col gap-5 p-6 md:p-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-[26px] leading-tight font-semibold md:text-[30px]">{m.title}</h3>
                    <p className="text-sm font-semibold text-gold md:text-[15px]">{m.tag}</p>
                  </div>
                  <p className="text-[15px] leading-relaxed text-mist md:text-base">{m.body}</p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {m.points.map(({ title, icon: Icon }) => (
                      <li key={title} className="flex items-center gap-3 rounded-2xl bg-white/[0.04] px-3.5 py-3 text-[15px] text-cream">
                        <span aria-hidden="true" className={cn(iconTile, "size-9 rounded-xl")}>
                          <Icon size={18} />
                        </span>
                        {title}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={hiringHref(m.id)}
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-2 text-[15px] font-semibold text-gold transition-colors hover:text-gold-light"
                  >
                    {hp.models.cta} {m.title}
                    <ArrowRightIcon size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Comparison ---------- */}
        <div className="flex flex-col gap-10">
          <SectionIntro id="hr-compare" title={hp.compare.title} />
          <div className={cn(darkPanel, "overflow-x-auto rounded-[24px]")}>
            <table aria-labelledby="hr-compare" className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <td className="w-[22%] p-5 md:p-6" />
                  {[exec, bulk].map((m) => {
                    const Icon = modelIcons[m.id as keyof typeof modelIcons];
                    return (
                      <th key={m.id} scope="col" className="p-5 md:p-6">
                        <span className="flex items-center gap-3 font-display text-lg font-semibold text-cream md:text-xl">
                          <span aria-hidden="true" className={cn(iconTile, "size-10 rounded-xl")}>
                            <Icon size={20} />
                          </span>
                          {m.title}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {hp.compare.rows.map(([label, a, b]) => (
                  <tr key={label} className="border-b border-white/[0.07] last:border-0">
                    <th scope="row" className="p-5 align-top text-xs font-bold tracking-[0.14em] text-gold uppercase md:px-6">
                      {label}
                    </th>
                    {[a, b].map((v) => (
                      <td key={v} className="p-5 align-top text-[15px] leading-relaxed text-mist md:px-6 md:text-base">
                        <span className="flex gap-2.5">
                          <CheckIcon size={16} className="mt-1 shrink-0 text-gold" />
                          {v}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ---------- Sectors ---------- */}
        <div className="flex flex-col gap-10">
          <SectionIntro id="hr-sectors" title={hp.sectors.title} intro={hp.sectors.intro} />
          <ul aria-labelledby="hr-sectors" className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {hp.sectors.items.map(({ title, icon: Icon }, i) => (
              <li
                key={title}
                className={cn(
                  darkPanel,
                  "flex flex-col items-center gap-4 rounded-[22px] px-4 pt-7 pb-6 text-center transition duration-300 hover:-translate-y-1 hover:border-gold/45",
                  // Five tiles in two columns: the last one spans the row.
                  i === 4 && "col-span-2 md:col-span-1",
                )}
              >
                <span aria-hidden="true" className={cn(iconTile, "size-16 rounded-full")}>
                  <Icon size={30} strokeWidth={1.4} />
                </span>
                <span className="font-display text-base leading-snug font-medium text-balance text-cream md:text-lg">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function SectionIntro({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <RuleHeading id={id} tone="title">
        {title}
      </RuleHeading>
      {intro && <p className="max-w-[680px] text-[15px] leading-relaxed text-mist md:text-base">{intro}</p>}
    </div>
  );
}

/** Hero photo (geese flying in formation — a team moving together) with two floating hiring cards. */
function HeroPhoto({ className }: { className?: string }) {
  const { shortlist, pipeline } = hp.heroBadges;
  return (
    <div aria-hidden="true" className={cn("relative px-4 py-8 sm:px-8", className)}>
      <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(230,171,63,0.22),transparent)]" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-gold/30 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        <Image
          src={talentImg}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 400px, 90vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      </div>

      {/* Shortlist card: three candidates, one picked. */}
      <div className="absolute top-2 -left-2 flex animate-float items-center gap-3 rounded-2xl border border-white/15 bg-ink/80 p-3 pr-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-md sm:-left-6">
        <span className="flex">
          {["#8E8E8E", "#E6AB3F", "#C9C9C6"].map((c, i) => (
            <span
              key={c}
              className={cn("grid size-9 place-items-center rounded-full border-2 border-ink", i > 0 && "-ml-2.5")}
              style={{ background: c }}
            >
              <PersonGlyph className="size-5 text-ink/70" />
            </span>
          ))}
        </span>
        <span className="flex flex-col leading-tight">
          <span className="flex items-center gap-1.5 text-sm font-semibold text-cream">
            <span className="grid size-4 place-items-center rounded-full bg-gold text-ink">
              <CheckIcon size={10} strokeWidth={3} />
            </span>
            {shortlist.label}
          </span>
          <span className="text-xs text-muted">{shortlist.note}</span>
        </span>
      </div>

      {/* Pipeline card: many roles filling up. */}
      <div className="absolute -right-2 bottom-2 flex w-[220px] flex-col gap-2.5 rounded-2xl border border-white/15 bg-ink/80 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-md sm:-right-6">
        <span className="flex items-center justify-between text-sm font-semibold text-cream">
          {pipeline.label}
          <UsersIcon size={16} className="text-gold" />
        </span>
        <span className="grid grid-cols-10 gap-1">
          {Array.from({ length: 20 }, (_, i) => (
            <span key={i} className={cn("h-2.5 rounded-sm", i < 14 ? "bg-gold" : "bg-white/12")} />
          ))}
        </span>
        <span className="text-xs text-muted">{pipeline.note}</span>
      </div>
    </div>
  );
}

function PersonGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <circle cx="10" cy="7" r="3.6" />
      <path d="M3.5 18a6.5 6.5 0 0 1 13 0z" />
    </svg>
  );
}

/** Person pictogram standing on (cx, y): head + rounded shoulders. */
function Person({ cx, y, s = 1, ...rest }: { cx: number; y: number; s?: number } & SVGProps<SVGGElement>) {
  return (
    <g {...rest}>
      <circle cx={cx} cy={y - 33 * s} r={8.5 * s} />
      <path d={`M${cx - 15 * s} ${y} v${-5 * s} a${15 * s} ${15 * s} 0 0 1 ${30 * s} 0 v${5 * s}z`} />
    </g>
  );
}

/** Executive Hiring: a spotlight picks out one leader from the field. */
function SpotlightArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <linearGradient id="hr-beam" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffe3a1" stopOpacity="0.55" />
          <stop offset="1" stopColor="#e6ab3f" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="hr-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffe3a1" />
          <stop offset="0.55" stopColor="#e6ab3f" />
          <stop offset="1" stopColor="#9c7426" />
        </linearGradient>
        <radialGradient id="hr-pool" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e6ab3f" stopOpacity="0.45" />
          <stop offset="1" stopColor="#e6ab3f" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Lamp + beam */}
      <path d="M186 6h28l50 178H136z" fill="url(#hr-beam)" />
      <rect x="182" y="0" width="36" height="10" rx="3" fill="#2a2620" stroke="#e6ab3f" strokeOpacity="0.5" />
      <ellipse cx="200" cy="186" rx="88" ry="14" fill="url(#hr-pool)" />

      {/* The field, in shadow */}
      <g fill="#c9c9c6" opacity="0.16">
        <Person cx={46} y={186} s={0.9} />
        <Person cx={92} y={186} s={1} />
        <Person cx={308} y={186} s={1} />
        <Person cx={354} y={186} s={0.9} />
      </g>

      {/* The leader, on a podium */}
      <rect x="166" y="170" width="68" height="20" rx="4" fill="#1a1713" stroke="url(#hr-gold)" strokeWidth="1.5" />
      <Person cx={200} y={168} s={1.5} fill="url(#hr-gold)" />
      {/* Sparkle */}
      <path d="M244 92l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#ffe3a1" className="animate-pulse-soft svg-origin-center" />
      <circle cx="152" cy="108" r="2.5" fill="#ffe3a1" opacity="0.7" />
    </svg>
  );
}

/** Bulk Hiring: rows of people, most already filled in, and a progress bar ramping up. */
function CrowdArt({ className }: { className?: string }) {
  const cols = 9;
  const rows = 3;
  const filled = 6; // columns hired so far
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <linearGradient id="hr-gold2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffe3a1" />
          <stop offset="0.55" stopColor="#e6ab3f" />
          <stop offset="1" stopColor="#9c7426" />
        </linearGradient>
        <linearGradient id="hr-bar" x1="0" x2="1">
          <stop offset="0" stopColor="#9c7426" />
          <stop offset="1" stopColor="#ffe3a1" />
        </linearGradient>
      </defs>

      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => {
          const hired = c < filled;
          return (
            <Person
              key={`${r}-${c}`}
              cx={64 + c * 34}
              y={84 + r * 44}
              s={0.82}
              fill={hired ? "url(#hr-gold2)" : "none"}
              stroke={hired ? "none" : "#c9c9c6"}
              strokeOpacity={0.35}
              strokeWidth={1.4}
            />
          );
        }),
      )}

      {/* Ramp-up bar */}
      <rect x="30" y="196" width="340" height="8" rx="4" fill="#ffffff" fillOpacity="0.08" />
      <rect x="30" y="196" width={(340 * filled) / cols} height="8" rx="4" fill="url(#hr-bar)" />
      <circle cx={30 + (340 * filled) / cols} cy="200" r="7" fill="#ffe3a1" className="animate-pulse-soft svg-origin-center" />
    </svg>
  );
}
