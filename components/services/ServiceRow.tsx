import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon } from "@/components/icons";
import { Container, PillLink, cn } from "@/components/ui";
import { serviceHref, type Service } from "@/lib/content/services";
import { routes } from "@/lib/site";
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

export function ServicePoints({ points, className }: { points: readonly string[]; className?: string }) {
  return (
    <ul className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2", className)}>
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2.5 text-[15px] text-mist">
          <CheckIcon size={14} className="mt-1 shrink-0 text-silver" />
          {p}
        </li>
      ))}
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
          <p className="text-lg">{service.tagline}</p>
          <p className="leading-[1.7] text-muted">{service.desc}</p>
          <ServicePoints points={service.points} />
          <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <PillLink href={routes.contact} variant="gold" className="px-6">
                Enquire about this <ArrowUpRightIcon size={14} />
              </PillLink>
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
