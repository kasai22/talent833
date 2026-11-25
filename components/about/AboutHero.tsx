import { GoldWaves } from "@/components/about/GoldWaves";
import { BookIcon, ChevronDownIcon, HandshakeIcon, UsersIcon } from "@/components/icons";
import { PageHero } from "@/components/site/PageHero";
import { aboutHero, type QuoteRuns } from "@/lib/content/about";
import { routes } from "@/lib/site";

const philosophyIcons = { book: BookIcon, users: UsersIcon, handshake: HandshakeIcon };

/** About page hero: two-line title with a gold accent, pull quote, and the philosophies accordion. */
export function AboutHero() {
  return (
    <PageHero
      crumbs={[{ label: "Home", href: routes.home }, { label: "About" }]}
      compact
      eyebrow={aboutHero.eyebrow}
      backdrop={<GoldWaves className="absolute inset-0 size-full opacity-80" />}
      title={
        <>
          {aboutHero.titleLead}
          <em className="block w-fit bg-gradient-to-r from-gold-light via-gold to-gold bg-clip-text pr-2 font-semibold text-transparent">
            {aboutHero.titleAccent}
          </em>
          <Swoosh />
        </>
      }
      lede={
        <div className="flex flex-col gap-4 md:gap-5">
          <p>{aboutHero.intro}</p>
          <PullQuote runs={aboutHero.quote} />
          <p>{aboutHero.detail}</p>
          <PullQuote runs={aboutHero.closingQuote} />
        </div>
      }
      asideAlign="start"
      aside={
        <div className="flex animate-rise flex-col gap-6 lg:gap-7 lg:pt-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-[28px] font-medium tracking-[-0.02em] md:text-[34px]">
              {aboutHero.philosophiesTitle}
            </h2>
            <span aria-hidden="true" className="h-1 w-20 rounded-full bg-gradient-to-r from-gold to-gold-light" />
          </div>
          {/* Native exclusive accordion: details sharing a `name` close each other. */}
          <ol className="flex flex-col gap-4 md:gap-5">
            {aboutHero.philosophies.map((p) => {
              const Icon = philosophyIcons[p.icon];
              return (
                <li key={p.number}>
                  <details
                    name="philosophies"
                    className="philosophy group relative rounded-[22px] border border-gold/30 bg-ink/70 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-[2px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors duration-300 after:pointer-events-none after:absolute after:inset-x-[12%] after:-bottom-px after:h-px after:bg-gradient-to-r after:from-transparent after:via-gold after:to-transparent after:shadow-[0_0_8px_rgba(230,171,63,0.7)] hover:border-gold/50 open:border-gold/55 open:bg-gold/[0.05]"
                  >
                    <summary className="grid cursor-pointer list-none grid-cols-[auto_auto_1fr_auto] items-center gap-x-4 rounded-[22px] p-4 md:gap-x-5 md:p-5 [&::-webkit-details-marker]:hidden">
                      <span
                        aria-hidden="true"
                        className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-black/40 text-gold shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_0_18px_rgba(230,171,63,0.12)] md:size-[72px] md:rounded-[18px]"
                      >
                        <Icon size={30} strokeWidth={1.5} className="md:size-9" />
                      </span>
                      <span aria-hidden="true" className="h-10 w-0.5 rounded-full bg-gold/80" />
                      <span className="flex flex-col gap-1.5">
                        <span className="text-[11px] font-bold tracking-[0.24em] text-gold uppercase md:text-xs">
                          {p.area}
                        </span>
                        <span className="font-display text-base leading-snug font-medium text-cream md:text-xl">
                          {p.tagline}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="grid size-9 place-items-center rounded-full border border-white/25 text-cream transition duration-300 group-open:rotate-180 group-open:border-gold/50 group-open:bg-gold group-open:text-ink md:size-10"
                      >
                        <ChevronDownIcon size={16} />
                      </span>
                    </summary>
                    {/* Indented to line up with the tagline (icon + gap + divider + gap). */}
                    <div className="flex flex-col gap-2 px-4 pb-5 md:pr-6 md:pb-6 md:pl-[135px]">
                      <p className="text-[15px] leading-relaxed font-semibold text-cream/90">{p.belief}</p>
                      <p className="text-[15px] leading-relaxed text-mist">{p.detail}</p>
                    </div>
                  </details>
                </li>
              );
            })}
          </ol>
        </div>
      }
    />
  );
}

/** Highlighted pull quote: gold rule, gold quote marks, emphasised runs. */
function PullQuote({ runs }: { runs: QuoteRuns }) {
  return (
    <blockquote className="border-l-2 border-gold/80 py-0.5 pl-4 md:pl-5">
      <p className="relative pl-7 font-display text-[15px] leading-[1.55] text-cream/90 italic md:pl-8 md:text-base">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 font-display text-[32px] leading-[0.8] font-bold text-gold not-italic md:text-4xl"
        >
          &ldquo;
        </span>
        {runs.map((r, i) =>
          typeof r === "string" ? (
            r
          ) : "strong" in r ? (
            <strong key={i} className="font-semibold text-cream">
              {r.strong}
            </strong>
          ) : (
            <span key={i} className="font-semibold text-gold">
              {r.gold}
            </span>
          ),
        )}
        <span
          aria-hidden="true"
          className="ml-1 inline-block translate-y-3 font-display text-[32px] leading-[0] font-bold text-gold not-italic md:text-4xl"
        >
          &rdquo;
        </span>
      </p>
    </blockquote>
  );
}

/** Brush-stroke underline beneath the title. */
function Swoosh() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      className="mt-2 block h-2.5 w-[70%] max-w-[340px] md:h-3"
    >
      <defs>
        <linearGradient id="about-swoosh" x1="0" x2="1">
          <stop offset="0" stopColor="#ffe3a1" />
          <stop offset="0.6" stopColor="#e6ab3f" />
          <stop offset="1" stopColor="#e6ab3f" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M4 20 C 120 6, 260 2, 396 4 C 260 8, 130 14, 10 22 Z" fill="url(#about-swoosh)" />
    </svg>
  );
}
