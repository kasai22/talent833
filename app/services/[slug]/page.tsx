import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { CapabilityBuilding } from "@/components/services/CapabilityBuilding";
import { CorporateTraining } from "@/components/services/CorporateTraining";
import { FractionalLd } from "@/components/services/FractionalLd";
import { Hiring } from "@/components/services/Hiring";
import { ServiceVisual } from "@/components/services/ServiceVisual";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { Container, Eyebrow, PillLink, SectionTitle } from "@/components/ui";
import { ServiceDetailBlocks, Tiles } from "@/components/services/ServiceDetailBlocks";
import { CAPABILITY_BUILDING_SLUG } from "@/lib/content/capabilityBuilding";
import { CORPORATE_TRAINING_SLUG } from "@/lib/content/corporateTraining";
import { FRACTIONAL_LD_SLUG } from "@/lib/content/fractionalLd";
import { HIRING_SLUG } from "@/lib/content/hiring";
import { serviceDetails } from "@/lib/content/serviceDetails";
import { getService, servicePages, type Service } from "@/lib/content/services";
import { enquiryMessage, routes } from "@/lib/site";

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
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

  // Bespoke layouts; the other services use the generic hero + detail blocks below.
  const Bespoke = {
    [CORPORATE_TRAINING_SLUG]: CorporateTraining,
    [FRACTIONAL_LD_SLUG]: FractionalLd,
    [CAPABILITY_BUILDING_SLUG]: CapabilityBuilding,
    [HIRING_SLUG]: Hiring,
  }[service.slug];
  if (Bespoke) return <Bespoke />;

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
        lede={<p className="text-cream">{detail?.headline ?? service.desc}</p>}
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
    </>
  );
}

function Included({ service }: { service: Service }) {
  const hiring = service.category === "Hiring";
  return (
    <section aria-labelledby="included-title" className="py-14 md:py-20 xl:py-24">
      <Container className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow tone={service.tone}>{hiring ? "Where we hire" : "What’s included"}</Eyebrow>
          <SectionTitle id="included-title">{hiring ? "Sectors and roles we cover" : "What the engagement covers"}</SectionTitle>
        </div>
        <Tiles items={service.points.map((title, i) => ({ title, icon: service.pointIcons[i] }))} />
      </Container>
    </section>
  );
}
