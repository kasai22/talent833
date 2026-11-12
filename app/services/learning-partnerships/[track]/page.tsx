import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ArrowRightIcon } from "@/components/icons";
import { FlowBody, LinkCards, TrackBody } from "@/components/services/ServiceDetailBlocks";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { Container, Eyebrow, PillLink, SectionTitle } from "@/components/ui";
import {
  PARTNERSHIPS_SLUG,
  getPartnershipTrack,
  partnershipHref,
  partnershipTracks,
} from "@/lib/content/partnerships";
import { getService, serviceHref } from "@/lib/content/services";
import { enquiryMessage, routes } from "@/lib/site";

type Params = PageProps<"/services/learning-partnerships/[track]">["params"];

/** One page per Strategic Learning Partnerships offering. */
export function generateStaticParams() {
  return partnershipTracks.map((t) => ({ track: t.id }));
}

async function resolve(params: Params) {
  return getPartnershipTrack((await params).track);
}

export async function generateMetadata({ params }: PageProps<"/services/learning-partnerships/[track]">): Promise<Metadata> {
  const t = await resolve(params);
  if (!t) return {};
  const lead = t.kind === "flow" ? t.kicker : `${t.headline} ${t.intro[0]}`;
  return { title: t.title, description: lead };
}

export default function PartnershipTrackPage({ params }: PageProps<"/services/learning-partnerships/[track]">) {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div className="min-h-dvh" />}>
          <TrackDetail params={params} />
        </Suspense>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

async function TrackDetail({ params }: { params: Params }) {
  const t = await resolve(params);
  if (!t) notFound();
  const parent = getService(PARTNERSHIPS_SLUG)!;

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: parent.short, href: serviceHref(parent.slug) },
          { label: t.short },
        ]}
        eyebrow={`${parent.title} · Offering ${t.num}`}
        title={t.title}
        lede={
          t.kind === "flow" ? (
            <p className="text-cream">{t.kicker}</p>
          ) : (
            <div className="flex flex-col gap-3">
              <p className="font-display text-xl text-cream md:text-2xl">{t.headline}</p>
              {t.kicker && <p className="font-semibold text-gold">{t.kicker}</p>}
              {t.intro.map((p) => (
                <p key={p.slice(0, 24)} className="md:text-base">
                  {p}
                </p>
              ))}
            </div>
          )
        }
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* <PillLink href={routes.contact} variant="gold" size="lg">
            Book a consultation
          </PillLink> */}
          <WhatsAppLink variant="light" size="lg" message={enquiryMessage(t.title)} />
        </div>
      </PageHero>

      {t.kind === "flow" ? <FlowBody t={t} /> : <TrackBody t={t} />}

      <section aria-labelledby="more-offerings" className="border-t border-white/12 pt-14 md:pt-20 xl:pt-24">
        <Container className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-[18px]">
              <Eyebrow>{parent.title}</Eyebrow>
              <SectionTitle id="more-offerings">Explore our other flagship offerings</SectionTitle>
            </div>
            <div>
              <PillLink href={serviceHref(parent.slug)}>
                All partnership offerings <ArrowRightIcon size={16} />
              </PillLink>
            </div>
          </div>
          <LinkCards
            items={partnershipTracks
              .filter((o) => o.id !== t.id)
              .map((o) => ({ title: o.title, href: partnershipHref(o.id), num: o.num }))}
          />
        </Container>
      </section>
    </>
  );
}
