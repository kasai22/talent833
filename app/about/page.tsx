import type { Metadata } from "next";
import { Portrait } from "@/components/about/Portrait";
import { CtaBanner } from "@/components/home/CtaBanner";
import { CheckIcon } from "@/components/icons";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { Container, Eyebrow, PillLink, SectionTitle, cn, surface } from "@/components/ui";
import { ceo, team, values } from "@/lib/content/about";
import { stats } from "@/lib/content/home";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Talent833 Partners: the leadership and team helping organisations build learning capability and hire high-impact talent.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "About" }]}
          eyebrow="About us"
          title={
            <>
              Beyond training. <span className="text-gold">Building capability that lasts.</span>
            </>
          }
          lede="Talent833 Partners works with organisations to build learning capability and hire high-impact talent — through L&D leadership on demand, year-long learning partnerships, focused programmes and executive search."
        />

        {/* CEO */}
        <section aria-labelledby="ceo-title" className="py-14 md:py-20 xl:py-[110px]">
          <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24">
            <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(closest-side,rgba(230,171,63,0.16),transparent)]"
              />
              <Portrait person={ceo} sizes="(min-width: 1024px) 40vw, 460px" preload />
              <div className="absolute inset-x-5 bottom-5 flex flex-col gap-0.5">
                <span className="font-display text-2xl font-medium tracking-[-0.02em]">{ceo.name}</span>
                <span className="text-sm text-gold">{ceo.role}</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Eyebrow>From our founder</Eyebrow>
              <SectionTitle id="ceo-title">
                “Organisations grow when their <span className="text-gold">people</span> do.”
              </SectionTitle>
              <div className="flex flex-col gap-4 text-[15px] leading-[1.7] text-mist md:text-[17px]">
                {ceo.message.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <ul className="flex flex-col gap-2.5 border-t border-white/12 pt-6">
                {ceo.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-[15px] text-cream">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <CheckIcon size={14} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col">
                <span className="font-display text-xl font-medium">{ceo.name}</span>
                <span className="text-sm text-muted">{ceo.role}</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section aria-label="At a glance">
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
        </section>

        {/* Team */}
        <section aria-labelledby="team-title" className="py-14 md:py-20 xl:py-[110px]">
          <Container className="flex flex-col gap-10 xl:gap-14">
            <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
              <div className="flex flex-col gap-[18px]">
                <Eyebrow>Our team</Eyebrow>
                <SectionTitle id="team-title">The people behind every partnership.</SectionTitle>
              </div>
              <p className="text-[15px] leading-[1.65] text-mist md:text-[17px]">
                Learning designers, facilitators and search specialists who have built capability and hired leaders
                from the inside.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:gap-6">
              {team.map((m, i) => (
                <li key={`${m.role}-${i}`} className="group flex flex-col gap-3.5">
                  <Portrait
                    person={m}
                    sizes="(min-width: 768px) 30vw, 45vw"
                    className="transition duration-300 group-hover:-translate-y-1 group-hover:border-gold/40"
                  />
                  <div className="flex flex-col gap-0.5 px-1">
                    <span className="font-display text-lg font-medium md:text-xl">{m.name}</span>
                    <span className="text-[13px] text-muted md:text-sm">{m.role}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Values */}
        <section aria-labelledby="values-title" className="pb-6 md:pb-10">
          <Container className="flex flex-col gap-10 xl:gap-14">
            <div className="flex flex-col gap-[18px]">
              <Eyebrow>What we stand for</Eyebrow>
              <SectionTitle id="values-title">How we work with every client.</SectionTitle>
            </div>
            <ul className="grid gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
              {values.map((v) => (
                <li key={v.title} className={cn(surface, "flex flex-col gap-4 rounded-[20px] p-6 md:p-7")}>
                  <span className="flex size-11 items-center justify-center rounded-[12px] bg-gold/12 text-gold">
                    <v.icon size={22} />
                  </span>
                  <h3 className="font-display text-xl font-medium">{v.title}</h3>
                  <p className="text-[15px] leading-relaxed text-mist">{v.body}</p>
                </li>
              ))}
            </ul>
            <PillLink href={routes.services} variant="outline" className="w-fit">
              Explore our services
            </PillLink>
          </Container>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
