import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Portrait } from "@/components/about/Portrait";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ChevronDownIcon, LinkedInIcon } from "@/components/icons";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Container, Eyebrow, PillLink, cn, surface } from "@/components/ui";
import { aboutHero, founder } from "@/lib/content/about";
import { stats } from "@/lib/content/home";

export const metadata: Metadata = {
  title: "About",
  description: `${aboutHero.titleLead} ${aboutHero.titleAccent} ${aboutHero.intro}`,
};

/** Founder bio paragraphs shown before "Read more". */
const FOUNDER_PREVIEW = 2;

/** One bio paragraph; `{ strong }` runs are set bright and bold. */
function BioParagraph({ runs }: { runs: (typeof founder.body)[number] }) {
  return (
    <p>
      {runs.map((r, j) =>
        typeof r === "string" ? (
          r
        ) : (
          <strong key={j} className="font-semibold text-cream">
            {r.strong}
          </strong>
        ),
      )}
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />

        {/* Founder */}
        {/* overflow-x-clip: the portrait glow bleeds past the container edge on phones. */}
        <section aria-labelledby="founder-title" className="overflow-x-clip py-14 md:py-20 xl:py-[110px]">
          {/* From lg the portrait stays in view while the biography scrolls beside it. */}
          <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 xl:gap-16">
            <div className="relative mx-auto w-full max-w-[460px] lg:sticky lg:top-10 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(closest-side,rgba(230,171,63,0.16),transparent)]"
              />
              <Portrait person={founder} sizes="(min-width: 1024px) 40vw, 460px" preload />
              <div className="absolute inset-x-5 bottom-5 flex flex-col gap-0.5">
                <span className="font-display text-2xl font-medium tracking-[-0.02em]">{founder.name}</span>
                <span className="text-sm text-gold">Founder</span>
              </div>
            </div>

            <div className="flex max-w-[680px] flex-col gap-5 lg:pt-2">
              <Eyebrow>{founder.eyebrow}</Eyebrow>
              <div className="flex flex-col gap-1">
                <p className="font-display text-2xl font-medium">{founder.name}</p>
                <p className="text-sm text-gold italic">{founder.role}</p>
                <p className="text-sm text-muted italic">{founder.alsoKnownAs}</p>
              </div>
              <h2
                id="founder-title"
                className="font-display text-[26px] leading-[1.18] font-medium tracking-[-0.02em] text-balance md:text-[30px] xl:text-[32px]"
              >
                {founder.title}
              </h2>
              <div className="flex flex-col gap-4 text-[15px] leading-[1.7] text-mist md:text-base">
                {founder.body.slice(0, FOUNDER_PREVIEW).map((runs, i) => (
                  <BioParagraph key={i} runs={runs} />
                ))}
              </div>
              {/* The rest of the bio stays folded until the reader asks for it. */}
              <details className="group flex flex-col">
                <summary className="flex w-fit cursor-pointer list-none items-center gap-2 font-bold text-gold transition-colors hover:text-cream [&::-webkit-details-marker]:hidden">
                  <span className="group-open:hidden">Read more</span>
                  <span className="hidden group-open:inline">Read less</span>
                  <ChevronDownIcon size={16} className="transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.7] text-mist md:text-base">
                  {founder.body.slice(FOUNDER_PREVIEW).map((runs, i) => (
                    <BioParagraph key={i} runs={runs} />
                  ))}
                  <p className="font-display text-lg leading-snug font-medium text-gold md:text-xl">{founder.closing}</p>
                </div>
              </details>
              <div className="mt-2 flex flex-col items-start gap-4 border-t border-white/12 pt-6">
                <div className="flex flex-col gap-1">
                  <p className="font-display text-lg font-medium text-cream italic">{founder.cta.title}</p>
                  <p className="text-[15px] leading-[1.6] text-mist">{founder.cta.body}</p>
                </div>
                {founder.linkedin && (
                  <PillLink href={founder.linkedin} target="_blank" rel="noopener noreferrer" variant="outline">
                    <LinkedInIcon size={16} className="text-gold" />
                    Connect on LinkedIn
                    <span className="sr-only"> (opens in a new tab)</span>
                  </PillLink>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Stats */}
        {/* <section aria-label="At a glance" className="pb-6 md:pb-10">
          <Container>
            <dl className="grid grid-cols-2 gap-2.5 md:gap-4 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={cn(surface, "flex flex-col-reverse gap-1 rounded-2xl p-4 md:gap-2 md:rounded-[20px] md:p-7")}
                >
                  <dt className="text-[13px] text-muted md:text-[15px]">{s.label}</dt>
                  <dd className="font-display text-[30px] font-medium tracking-[-0.03em] md:text-5xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section> */}

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
