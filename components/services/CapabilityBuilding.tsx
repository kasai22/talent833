import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { BrochureButton } from "@/components/services/BrochureButton";
import { DownloadIcon } from "@/components/services/trainingIcons";
import { GoldCta, PageBackdrop, RuleHeading, darkPanel, iconTile } from "@/components/services/trainingUi";
import { Breadcrumbs, Container, cn, pillClass } from "@/components/ui";
import { getBrochure } from "@/lib/content/brochures";
import { brochureMessage, capabilityBuilding as cb } from "@/lib/content/capabilityBuilding";
import { partnershipHref, partnershipTracks } from "@/lib/content/partnerships";
import { routes, whatsappHref } from "@/lib/site";

/** Secondary hero action: the shared outline pill. */
const outlinePill = cn(pillClass({ variant: "outline", size: "lg" }), "w-fit");

/** Capability Building page body: hero, framework pillars, 12-month journey, and solutions grid. */
export function CapabilityBuilding() {
  return (
    <section aria-labelledby="cb-title" className="relative isolate overflow-hidden">
      <PageBackdrop id="cb" />

      <Container className="flex flex-col gap-14 pt-[120px] pb-16 md:gap-20 md:pt-[150px] md:pb-20 xl:pb-24">
        {/* Hero */}
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <header className="flex animate-rise flex-col gap-5">
            <Breadcrumbs crumbs={[{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Capability Building" }]} />
            <h1
              id="cb-title"
              className="font-display text-[34px] leading-[1.06] font-semibold tracking-[-0.025em] text-balance md:text-5xl xl:text-[54px]"
            >
              {cb.title}
            </h1>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-lg leading-snug font-semibold text-gold md:text-[22px]">
              {cb.tags.map((t, i) => (
                // The bar sticks to the tag before it, so a wrapped line ends with "|" rather than starting with one.
                <span key={t} className="flex items-center gap-3 whitespace-nowrap">
                  {t}
                  {i < cb.tags.length - 1 && (
                    <span aria-hidden="true" className="text-gold/60">
                      |
                    </span>
                  )}
                </span>
              ))}
            </p>
            <div className="flex max-w-[640px] flex-col gap-4 text-base leading-relaxed text-mist md:text-[17px]">
              {cb.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              <GoldCta href="#solutions">
                {cb.primaryCta}
                <ArrowRightIcon size={16} />
              </GoldCta>
              <Link href={routes.contact} className={outlinePill}>
                {cb.secondaryCta}
              </Link>
            </div>
          </header>
          <CapabilityBlocks className="mx-auto w-full max-w-[420px] lg:max-w-[480px]" />
        </div>

        {/* Framework */}
        <div className="flex flex-col gap-8">
          <SectionIntro id="cb-framework" title={cb.framework.title} intro={cb.framework.intro} />
          <ol aria-labelledby="cb-framework" className="grid gap-4 md:grid-cols-3 md:gap-5">
            {cb.framework.pillars.map(({ title, body, icon: Icon }, i) => (
              <li
                key={title}
                className={cn(darkPanel, "flex flex-col gap-4 rounded-[24px] p-6 transition-colors duration-300 hover:border-gold/40 md:p-7")}
              >
                <span aria-hidden="true" className={cn(iconTile, "size-[68px] rounded-full")}>
                  <Icon size={34} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-xl leading-tight font-semibold md:text-[22px]">
                  <span className="text-gold">{String(i + 1).padStart(2, "0")}.</span> {title}
                </h3>
                <p className="text-[15px] leading-relaxed text-mist">{body}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Journey */}
        <div className="flex flex-col gap-8">
          <SectionIntro id="cb-journey" title={cb.journey.title} intro={cb.journey.intro} />
          <ol aria-labelledby="cb-journey" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5 xl:gap-0">
            {cb.journey.stages.map(({ title, body, icon: Icon }, i) => (
              <li
                key={title}
                className={cn(
                  "relative flex gap-4 rounded-2xl bg-gradient-to-br from-gold/[0.16] to-gold/[0.04] p-5 sm:flex-col sm:gap-3 xl:rounded-none xl:py-6 xl:pr-10 xl:pl-9",
                  // Chevron arrows from xl: each stage points into the next.
                  i === 0
                    ? "xl:rounded-l-2xl xl:[clip-path:polygon(0_0,calc(100%-22px)_0,100%_50%,calc(100%-22px)_100%,0_100%)] xl:pl-6"
                    : "xl:-ml-3 xl:[clip-path:polygon(0_0,calc(100%-22px)_0,100%_50%,calc(100%-22px)_100%,0_100%,22px_50%)]",
                  i % 2 === 1 && "xl:from-gold/[0.22] xl:to-gold/[0.07]",
                  // Five stages in two columns: the last one spans the row.
                  i === 4 && "max-xl:sm:col-span-2",
                )}
              >
                <span aria-hidden="true" className="flex items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold text-ink shadow-[0_0_18px_rgba(230,171,63,0.35)]">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-lg font-semibold text-cream md:text-xl">
                    <span className="sr-only">Stage {i + 1}: </span>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-mist">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Solutions */}
        <div id="solutions" className="flex scroll-mt-28 flex-col gap-8">
          <SectionIntro id="cb-solutions" title={cb.solutions.title} intro={cb.solutions.intro} />
          <ul aria-labelledby="cb-solutions" className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
            {cb.solutions.items.map(({ track, title, subtitle, body, icon: Icon }) => {
              const fullTitle = partnershipTracks.find((t) => t.id === track)?.title ?? `${title} ${subtitle}`;
              return (
                <li
                  key={track}
                  className={cn(
                    darkPanel,
                    "flex flex-col gap-4 rounded-[22px] p-6 transition-colors duration-300 hover:border-gold/40",
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span aria-hidden="true" className={cn(iconTile, "size-14 rounded-full")}>
                      <Icon size={26} />
                    </span>
                    <h3 className="font-display text-lg leading-tight font-semibold">
                      {title}
                      <span className="block text-[15px] font-medium text-gold">{subtitle}</span>
                    </h3>
                  </div>
                  <p className="grow text-[15px] leading-relaxed text-mist">{body}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-sm font-semibold">
                    <Link
                      href={partnershipHref(track)}
                      className="inline-flex min-h-10 items-center gap-1.5 text-cream transition-colors hover:text-gold"
                    >
                      {cb.solutions.knowMore}
                      <span className="sr-only"> about {fullTitle}</span>
                      <ArrowRightIcon size={14} />
                    </Link>
                    <span aria-hidden="true" className="h-4 w-px bg-white/20" />
                    {getBrochure(track) ? (
                      <BrochureButton
                        offering={track}
                        title={fullTitle}
                        className="inline-flex min-h-10 items-center gap-1.5 text-gold transition-colors hover:text-gold-light"
                      >
                        <DownloadIcon size={15} />
                        {cb.solutions.brochure}
                        <span className="sr-only"> for {fullTitle}</span>
                      </BrochureButton>
                    ) : (
                      // No brochure file yet: ask for it on WhatsApp instead.
                      <a
                      href={whatsappHref(brochureMessage(fullTitle))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-1.5 text-gold transition-colors hover:text-gold-light"
                    >
                      <DownloadIcon size={15} />
                      {cb.solutions.brochure}
                      <span className="sr-only"> for {fullTitle} (requests it on WhatsApp)</span>
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function SectionIntro({ id, title, intro }: { id: string; title: string; intro: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <RuleHeading id={id} tone="title">
        {title}
      </RuleHeading>
      <p className="max-w-[760px] text-[15px] leading-relaxed text-mist md:text-base">{intro}</p>
    </div>
  );
}

/** Hero illustration: three stacked blocks carrying a target, a team and a growth chart. */
function CapabilityBlocks({ className }: { className?: string }) {
  const blocks = [
    { x: 40, y: 170, icon: "team" },
    { x: 220, y: 170, icon: "chart" },
    { x: 130, y: 20, icon: "target" },
  ] as const;
  return (
    <svg viewBox="0 0 420 340" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <linearGradient id="cb-face" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#2c2823" />
          <stop offset="1" stopColor="#100f0d" />
        </linearGradient>
        <linearGradient id="cb-edge" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffe3a1" />
          <stop offset="0.5" stopColor="#e6ab3f" />
          <stop offset="1" stopColor="#9c7426" />
        </linearGradient>
        <radialGradient id="cb-glow" cx="0.5" cy="0.55" r="0.5">
          <stop offset="0" stopColor="#e6ab3f" stopOpacity="0.32" />
          <stop offset="1" stopColor="#e6ab3f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="210" cy="180" rx="210" ry="160" fill="url(#cb-glow)" />
      <ellipse cx="210" cy="326" rx="190" ry="12" fill="#000" opacity="0.6" />
      {blocks.map((b) => (
        <g key={b.icon} transform={`translate(${b.x} ${b.y})`}>
          {/* top + side faces for depth */}
          <path d="M0 0 18 -14H178L160 0z" fill="#3a342b" stroke="#e6ab3f" strokeOpacity="0.4" />
          <path d="M160 0 178 -14V136L160 150z" fill="#16130f" stroke="#e6ab3f" strokeOpacity="0.4" />
          <rect width="160" height="150" rx="6" fill="url(#cb-face)" stroke="url(#cb-edge)" strokeWidth="1.5" />
          <g transform="translate(80 75)" fill="none" stroke="url(#cb-edge)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
            {b.icon === "target" && (
              <>
                <circle r="38" />
                <circle r="22" />
                <circle r="6" fill="#e6ab3f" stroke="none" />
                <path d="M2 -2 34 -34M26 -40l9 6 6 9" />
              </>
            )}
            {b.icon === "team" && (
              <>
                <circle cx="0" cy="-16" r="13" />
                <path d="M-26 32c3-18 13-26 26-26s23 8 26 26" />
                <circle cx="-34" cy="-6" r="9" />
                <circle cx="34" cy="-6" r="9" />
                <path d="M-52 28c2-10 8-16 16-17M52 28c-2-10-8-16-16-17" />
              </>
            )}
            {b.icon === "chart" && (
              <>
                <path d="M-36 36v-14M-14 36V8M8 36V-4M30 36v-26" />
                <path d="M-40 4 -10 -18 6 -8 36 -36M22 -38h15v15" />
              </>
            )}
          </g>
        </g>
      ))}
    </svg>
  );
}
