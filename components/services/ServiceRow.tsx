import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Container, PillLink, cn } from "@/components/ui";
import { serviceHref, type Service } from "@/lib/content/services";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { enquiryMessage } from "@/lib/site";
import { ServiceVisual } from "./ServiceVisual";

/** Number + category badge, e.g. "01 [HIRING]". */
export function ServiceTag({ service }: { service: Service }) {
  const gold = service.tone === "gold";
  return (
    <div className="flex items-center gap-3">
      <span className={cn("font-display text-xl", gold ? "text-gold" : "text-silver")}>{service.num}</span>
      <span
        className={cn(
          "rounded-[14px] border px-3 py-1.5 text-xs font-bold tracking-[0.08em] uppercase",
          gold ? "border-gold text-gold" : "border-silver text-silver",
        )}
      >
        {service.category}
      </span>
    </div>
  );
}

/** Points as icon chips: scannable at a glance, no sentence to read. */
export function ServicePoints({ service, className }: { service: Service; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {service.points.map((p, i) => {
        const Icon = service.pointIcons[i];
        return (
          <li
            key={p}
            className="flex items-center gap-2 rounded-full border border-white/12 bg-white/5 py-1.5 pr-3.5 pl-2 text-sm text-cream"
          >
            <span className="flex size-6 items-center justify-center rounded-full bg-gold/12 text-gold">
              <Icon size={14} />
            </span>
            {p}
          </li>
        );
      })}
    </ul>
  );
}

/** One service on the overview page; visual alternates sides on desktop. */
export function ServiceRow({ service, flip }: { service: Service; flip: boolean }) {
  const href = serviceHref(service.slug);
  const titleId = `${service.slug}-title`;

  return (
    <section
      id={`svc${service.num}`}
      aria-labelledby={titleId}
      className="scroll-mt-6 border-t border-white/12 py-14 md:py-20 xl:py-10"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:min-h-[480px] xl:gap-[72px]">
        <div className="flex flex-col gap-5">
          <ServiceTag service={service} />
          <h2
            id={titleId}
            className="font-display text-[32px] leading-[1.05] font-medium tracking-[-0.025em] text-balance md:text-[44px]"
          >
            <Link href={href} className="transition-colors hover:text-gold">
              {service.title}
            </Link>
          </h2>
          <p className="text-lg text-mist">{service.desc}</p>
          <ServicePoints service={service} />
          <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <WhatsAppLink
                variant="gold"
                className="pr-6"
                label="Enquire on WhatsApp"
                message={enquiryMessage(service.title)}
              />
              <PillLink href={href} variant="outline" className="px-[18px]">
                Learn more <ArrowRightIcon size={16} />
                <span className="sr-only">about {service.title}</span>
              </PillLink>
            </div>
            <span className="text-sm text-muted">Best for: {service.bestFor}</span>
          </div>
        </div>
        <ServiceVisual service={service} className={cn(flip && "lg:order-first")} />
      </Container>
    </section>
  );
}
