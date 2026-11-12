import type { Metadata } from "next";
import { Portrait } from "@/components/about/Portrait";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { Container, Eyebrow, SectionTitle, cn, surface } from "@/components/ui";
import { about, founder } from "@/lib/content/about";
import { stats } from "@/lib/content/home";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${about.title} ${about.body[0]}`,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "About" }]}
          eyebrow={about.eyebrow}
          title={about.title}
          lede={
            <div className="flex flex-col gap-4">
              {about.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <p className="font-semibold text-cream">{about.cta}</p>
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
          <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24">
            <div className="relative mx-auto w-full max-w-[460px] lg:sticky lg:top-28 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(closest-side,rgba(230,171,63,0.16),transparent)]"
              />
              <Portrait person={founder} sizes="(min-width: 1024px) 40vw, 460px" preload />
              <div className="absolute inset-x-5 bottom-5 flex flex-col gap-0.5">
                <span className="font-display text-2xl font-medium tracking-[-0.02em]">{founder.name}</span>
                <span className="text-sm text-gold">{founder.role}</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Eyebrow>Meet the founder</Eyebrow>
              <div className="flex flex-col gap-1">
                <p className="font-display text-2xl font-medium md:text-[28px]">{founder.name}</p>
                <p className="text-sm text-muted italic">{founder.alsoKnownAs}</p>
              </div>
              <SectionTitle id="founder-title">{founder.title}</SectionTitle>
              <div className="flex flex-col gap-4 text-[15px] leading-[1.7] text-mist md:text-[17px]">
                {founder.message.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
                <p>
                  {founder.venture.before}
                  <strong className="font-semibold text-cream">{founder.venture.bold}</strong>
                  {founder.venture.after}
                </p>
              </div>
              <p
                className={cn(
                  surface,
                  "rounded-[20px] px-6 py-5 font-display text-xl leading-snug font-medium md:text-2xl",
                )}
              >
                {founder.focus.lead}
                <span className="text-gold">{founder.focus.bold}</span>
              </p>
              <p className="text-[15px] leading-[1.7] text-mist md:text-[17px]">{founder.nameNote}</p>
              <div className="flex flex-col gap-4 border-t border-white/12 pt-6">
                <p className="text-[15px] font-semibold text-cream md:text-[17px]">{founder.cta}</p>
                {/* <PillLink href={routes.contact} variant="outline" className="w-fit">
                  Book a consultation
                </PillLink> */}
              </div>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section aria-label="At a glance" className="pb-6 md:pb-10">
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

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
