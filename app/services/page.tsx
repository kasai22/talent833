import type { Metadata } from "next";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ServiceRow } from "@/components/services/ServiceRow";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { Container, cn } from "@/components/ui";
import { services } from "@/lib/content/services";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Five ways Talent833 Partners helps organisations build learning capability and hire high-impact talent: executive search, fractional L&D, learning partnerships, signature programmes and customised solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "Services" }]}
          eyebrow="Our services"
          title="Executive hiring and learning solutions, under one roof."
          lede="Five ways we help organisations build learning capability and hire high-impact talent. Pick one, or combine them into a single partnership."
        />

        {/* Jump to: wraps on desktop, scrolls sideways on mobile */}
        <nav aria-label="Jump to a service">
          <Container className="flex items-center gap-2.5 py-8 max-lg:pr-0 xl:h-[120px] xl:py-0">
            <span className="mr-2 shrink-0 text-[13px] font-bold tracking-[0.16em] text-muted">JUMP TO</span>
            <ul className="flex gap-2.5 overflow-x-auto pr-5 [scrollbar-width:none] md:pr-10 lg:flex-wrap lg:overflow-visible lg:pr-0">
              {services.map((s) => (
                <li key={s.slug} className="shrink-0">
                  <a
                    href={`#svc${s.num}`}
                    className="flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-gold/45 hover:text-gold"
                  >
                    <span className={cn(s.tone === "gold" ? "text-gold" : "text-silver")}>{s.num}</span>
                    {s.short}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>

        {services.map((s, i) => (
          <ServiceRow key={s.slug} service={s} flip={i % 2 === 1} />
        ))}

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
