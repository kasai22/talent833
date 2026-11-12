import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { ServiceVisual } from "@/components/services/ServiceVisual";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { Container, Eyebrow, PillLink, SectionTitle, cn } from "@/components/ui";
import { ServiceDetailBlocks } from "@/components/services/ServiceDetailBlocks";
import { serviceDetails } from "@/lib/content/serviceDetails";
import { getService, serviceHref, services, type Service } from "@/lib/content/services";
import { enquiryMessage, routes } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return { title: service.title, description: `${service.tagline} ${service.desc}` };
}

export default function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  return (
    <>
      <Header />
      <main>
        {/* Params are read inside Suspense so unknown slugs still get the static shell. */}
        <Suspense fallback={<div className="min-h-dvh" />}>
          <ServiceDetail params={params} />
        </Suspense>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

async function ServiceDetail({ params }: Pick<PageProps<"/services/[slug]">, "params">) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const detail = serviceDetails[service.slug];

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: service.short },
        ]}
        eyebrow={`Service ${service.num} · ${service.category}`}
        title={service.title}
        lede={
          <>
            <p className="text-cream">{detail?.headline ?? service.tagline}</p>
            <p className="mt-3 text-muted md:text-base">{service.desc}</p>
          </>
        }
        aside={<ServiceVisual service={service} />}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <WhatsAppLink
            variant="gold"
            size="lg"
            label="Enquire on WhatsApp"
            message={enquiryMessage(service.title)}
          />
          <PillLink href={routes.services} variant="outline" size="lg">
            All services
          </PillLink>
        </div>
      </PageHero>

      {detail ? <ServiceDetailBlocks blocks={detail.blocks} /> : <Included service={service} />}
      <BestFor service={service} />
      <OtherServices current={service} />
    </>
  );
}

function Included({ service }: { service: Service }) {
  const gold = service.tone === "gold";
  return (
    <section aria-labelledby="included-title" className="py-14 md:py-20 xl:py-24">
      <Container className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow tone={service.tone}>
            {service.category === "Hiring" ? "Where we hire" : "What’s included"}
          </Eyebrow>
          <SectionTitle id="included-title">
            {service.category === "Hiring" ? "Sectors and roles we cover" : "What the engagement covers"}
          </SectionTitle>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {service.points.map((p, i) => (
            <li
              key={p}
              className="flex flex-col gap-6 rounded-[20px] border border-white/12 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/45 md:rounded-3xl md:p-7"
            >
              <span className="flex items-center justify-between">
                <span className={cn("font-display text-xl", gold ? "text-gold" : "text-silver")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex size-8 items-center justify-center rounded-[10px] bg-silver/12 text-silver">
                  <CheckIcon size={14} />
                </span>
              </span>
              <span className="font-display text-xl leading-[1.2] font-medium md:text-[22px]">{p}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function BestFor({ service }: { service: Service }) {
  return (
    <section aria-labelledby="bestfor-title" className="border-y border-white/12 bg-surface/60">
      <Container className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
        <div className="flex flex-col gap-3">
          <Eyebrow tone="silver">Best for</Eyebrow>
          <p
            id="bestfor-title"
            className="max-w-[760px] font-display text-[26px] leading-[1.15] font-medium tracking-[-0.02em] text-balance md:text-[34px]"
          >
            {service.bestFor}
          </p>
        </div>
        <div className="shrink-0">
          <WhatsAppLink variant="light" size="lg" message={enquiryMessage(service.title)} />
        </div>
      </Container>
    </section>
  );
}

function OtherServices({ current }: { current: Service }) {
  const others = services.filter((s) => s.slug !== current.slug);
  return (
    <section aria-labelledby="other-title" className="pt-14 md:pt-20 xl:pt-24">
      <Container className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-[18px]">
            <Eyebrow>Combine services</Eyebrow>
            <SectionTitle id="other-title">Explore our other services</SectionTitle>
          </div>
          <div>
            <PillLink href={routes.services}>
              View all services <ArrowRightIcon size={16} />
            </PillLink>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={serviceHref(s.slug)}
                className="group flex h-full flex-col gap-4 rounded-[20px] border border-white/12 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/45 md:rounded-3xl md:p-6"
              >
                <span className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/6">
                    <s.icon size={22} className={s.tone === "gold" ? "text-gold" : "text-silver"} />
                  </span>
                  <span className="text-[13px] text-muted">{s.num}</span>
                </span>
                <span className="font-display text-xl leading-[1.15] font-medium transition-colors group-hover:text-gold">
                  {s.title}
                </span>
                <span className="grow text-sm text-muted">{s.tagline}</span>
                <span className="flex items-center gap-1.5 text-sm font-bold text-gold">
                  Learn more <ArrowRightIcon size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
