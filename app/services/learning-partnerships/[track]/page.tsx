import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { BrochureButton } from "@/components/services/BrochureButton";
import { CampusBridge, FocusHub, JourneyTimeline, OutcomeChart, TrackHeroArt } from "@/components/services/PartnershipTrack";
import { FlowBody } from "@/components/services/ServiceDetailBlocks";
import { DownloadIcon } from "@/components/services/trainingIcons";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { pillClass } from "@/components/ui";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { getBrochure } from "@/lib/content/brochures";
import { PARTNERSHIPS_SLUG, getPartnershipTrack, partnershipTracks } from "@/lib/content/partnerships";
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
  const lead = t.kind === "flow" ? t.kicker : `${t.headline} ${t.intro}`;
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
  const chips = (t.kind === "flow" ? t.academies.items : t.focus).slice(0, 2).map((f) => f.title);

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
        aside={<TrackHeroArt track={t.id} chips={chips} />}
        lede={
          t.kind === "flow" ? (
            <p className="text-cream">{t.kicker}</p>
          ) : (
            <div className="flex flex-col gap-3">
              <p className="font-display text-xl text-cream md:text-2xl">{t.headline}</p>
              {t.kicker && <p className="font-semibold text-gold">{t.kicker}</p>}
              <p className="md:text-base">{t.intro}</p>
            </div>
          )
        }
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* <PillLink href={routes.contact} variant="gold" size="lg">
            Book a consultation
          </PillLink> */}
          <WhatsAppLink variant="gold" size="lg" message={enquiryMessage(t.title)} />
          {getBrochure(t.id) && (
            <BrochureButton
              offering={t.id}
              title={t.title}
              className={pillClass({ variant: "outline", size: "lg" })}
            >
              <DownloadIcon size={16} className="text-gold" />
              Download Brochure
            </BrochureButton>
          )}
        </div>
      </PageHero>

      {t.kind === "flow" ? (
        <>
          <FlowBody t={t} />
          <JourneyTimeline id={`${t.id}-journey`} />
        </>
      ) : (
        <>
          <FocusHub
            id={`${t.id}-focus`}
            eyebrow={t.kicker ?? t.short}
            title={t.focusTitle}
            hubLabel={t.short}
            unit={t.focusUnit}
            icon={t.icon}
            items={t.focus}
          />
          {t.bridge ? <CampusBridge id={`${t.id}-bridge`} bridge={t.bridge} /> : <JourneyTimeline id={`${t.id}-journey`} />}
          {t.outcome && t.outcomePoints && (
            <OutcomeChart id={`${t.id}-outcome`} statement={t.outcome} points={t.outcomePoints} closing={t.closing} />
          )}
        </>
      )}
    </>
  );
}
