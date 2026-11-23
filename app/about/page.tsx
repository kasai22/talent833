import type { Metadata } from "next";
import { FocusMark } from "@/components/about/FocusMark";
import { Portrait } from "@/components/about/Portrait";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ChevronDownIcon, LinkedInIcon } from "@/components/icons";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { Container, Eyebrow, PillLink, cn, surface } from "@/components/ui";
import { aboutHero, founder } from "@/lib/content/about";
import { stats } from "@/lib/content/home";
import { routes } from "@/lib/site";

const plainText = (runs: Array<string | { mark: string }>) =>
  runs.map((r) => (typeof r === "string" ? r : r.mark)).join("");

export const metadata: Metadata = {
  title: "About",
  description: `${aboutHero.title} ${plainText(aboutHero.body[0]!)}`,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "About" }]}
          eyebrow={aboutHero.eyebrow}
          title={aboutHero.title}
          lede={
            <div className="flex flex-col gap-4">
              {aboutHero.body.map((runs, i) => (
                <p key={i}>
                  {runs.map((r, j) =>
                    typeof r === "string" ? (
                      r
                    ) : (
                      // Second phrase comes into focus after the first.
                      <FocusMark key={j} delay={0.4 + i * 1.4}>
                        {r.mark}
                      </FocusMark>
                    ),
                  )}
                </p>
              ))}
              <p className="font-semibold text-cream">{aboutHero.beliefsLead}</p>
            </div>
          }
          asideAlign="start"
          aside={
            <div className="flex animate-rise flex-col gap-4 lg:gap-5">
              <h2 className="font-display text-2xl font-medium tracking-[-0.02em] md:text-[28px]">
                {aboutHero.philosophiesTitle}
              </h2>
              {/* Native exclusive accordion: details sharing a `name` close each other. */}
              <ol className="flex flex-col gap-3 md:gap-4">
                {aboutHero.philosophies.map((p, i) => (
                  <li key={p.number}>
                    <details
                      name="philosophies"
                      open={i === 0}
                      className={cn(
                        surface,
                        "philosophy group rounded-[20px] transition-colors duration-300 open:border-gold/40 open:bg-gold/[0.06] hover:border-white/25 open:hover:border-gold/50",
                      )}
                    >
                      <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-center gap-x-4 rounded-[20px] p-5 md:gap-x-5 md:p-6 [&::-webkit-details-marker]:hidden">
                        <span
                          aria-hidden="true"
                          className="font-display text-[28px] leading-none font-medium text-gold/60 transition-colors group-open:text-gold md:text-[32px]"
                        >
                          {p.number}
                        </span>
                        <span className="flex flex-col gap-1.5">
                          <span className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
                            <span className="sr-only">{p.number}. </span>
                            {p.area}
                          </span>
                          <span className="font-display text-lg leading-snug font-medium text-cream md:text-xl">
                            {p.tagline}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="grid size-9 place-items-center rounded-full border border-white/15 text-cream transition duration-300 group-open:rotate-180 group-open:border-gold/50 group-open:bg-gold group-open:text-ink"
                        >
                          <ChevronDownIcon size={16} />
                        </span>
                      </summary>
                      <div className="flex flex-col gap-2 px-5 pb-5 md:pr-6 md:pb-6 md:pl-[76px]">
                        <p className="text-[15px] leading-relaxed font-semibold text-cream/90">{p.belief}</p>
                        <p className="text-[15px] leading-relaxed text-mist">{p.detail}</p>
                      </div>
                    </details>
                  </li>
                ))}
              </ol>
            </div>
          }
        >
          {/* <div className="pt-2">
            <PillLink href={routes.contact} variant="gold" size="lg">
              Book a consultation
            </PillLink>
          </div> */}
        </PageHero>

        {/* Founder */}
        <section aria-labelledby="founder-title" className="py-14 md:py-20 xl:py-[110px]">
          {/* On lg+ the text is sized compactly so its column ends level with the portrait beside it. */}
          <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10 xl:gap-14">
            <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
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

            <div className="flex flex-col gap-5 lg:gap-2 xl:gap-3.5 min-[87.5rem]:gap-4">
              <Eyebrow>{founder.eyebrow}</Eyebrow>
              <div className="flex flex-col gap-0.5">
                <p className="font-display text-2xl font-medium lg:text-lg xl:text-2xl">{founder.name}</p>
                <p className="text-sm text-gold italic lg:text-[13px] xl:text-sm">{founder.role}</p>
                <p className="text-sm text-muted italic lg:text-[13px] xl:text-sm">{founder.alsoKnownAs}</p>
              </div>
              <h2
                id="founder-title"
                className="font-display text-[28px] leading-[1.15] font-medium tracking-[-0.02em] text-balance md:text-[32px] lg:text-lg xl:text-[24px] min-[87.5rem]:text-[28px]"
              >
                {founder.title}
              </h2>
              <div className="flex flex-col gap-3 text-[15px] leading-[1.65] text-mist lg:gap-1.5 lg:text-[13px] lg:leading-normal xl:gap-2 xl:text-sm xl:leading-[1.55] min-[87.5rem]:gap-2.5 min-[87.5rem]:text-[15px] min-[87.5rem]:leading-[1.65]">
                {founder.body.map((runs, i) => (
                  <p key={i}>
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
                ))}
              </div>
              <p className="font-display text-lg leading-snug font-medium text-gold lg:text-base xl:text-lg">
                {founder.closing}
              </p>
              <div className="flex flex-col gap-3 border-t border-white/12 pt-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:pt-2.5 xl:pt-3.5 min-[87.5rem]:pt-4">
                <div className="flex flex-col gap-1">
                  <p className="font-display text-lg font-medium text-cream italic lg:text-base xl:text-lg">
                    {founder.cta.title}
                  </p>
                  <p className="text-[15px] leading-[1.6] text-mist lg:text-[13px] xl:text-sm min-[87.5rem]:text-[15px]">
                    {founder.cta.body}
                  </p>
                </div>
                {founder.linkedin && (
                  <PillLink
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="w-fit shrink-0 lg:h-10 lg:px-4 lg:text-[13px] xl:h-[46px] xl:px-[22px] xl:text-[15px]"
                  >
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
