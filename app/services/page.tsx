import type { Metadata } from "next";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ServiceBand, ServiceCard } from "@/components/services/ServiceCard";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/ui";
import { services } from "@/lib/content/services";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "How Talent833 Partners helps organisations build learning capability and hire the right talent: corporate training, fractional learning & development, capability building, hiring and customised learning solutions.",
};

/** The four photo cards; any further service sits below as a full-width band. */
const featured = services.slice(0, 4);
const more = services.slice(4);

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "Services" }]}
          eyebrow="Our services"
          title="Executive hiring and learning solutions, under one roof."
          lede="Use one service, or combine them into a single partnership."
        />

        <section aria-label="Our services" className="py-14 md:py-20">
          <Container className="flex flex-col gap-4 md:gap-5">
            <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
              {featured.map((s, i) => (
                <li key={s.slug} className="flex animate-rise flex-col [animation-fill-mode:backwards] [&>a]:grow" style={{ animationDelay: `${i * 80}ms` }}>
                  <ServiceCard service={s} preload={i < 2} />
                </li>
              ))}
            </ul>
            {more.map((s) => (
              <ServiceBand key={s.slug} service={s} />
            ))}
          </Container>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
