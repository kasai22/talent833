import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon, CalendarIcon } from "@/components/icons";
import { Container, Eyebrow, PillLink, SectionTitle } from "@/components/ui";
import { programmes } from "@/lib/content/home";
import { routes } from "@/lib/site";

export function Programmes() {
  return (
    <section aria-labelledby="programmes-title" className="py-14 md:py-20 xl:pt-[90px]">
      <Container className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-[18px]">
            <Eyebrow tone="silver">Signature programmes</Eyebrow>
            <SectionTitle id="programmes-title">Experiential learning, lasting impact</SectionTitle>
          </div>
          <div className="hidden md:block">
            <PillLink href={routes.training}>
              View all programmes <ArrowRightIcon size={16} />
            </PillLink>
          </div>
        </div>

        {/* Horizontal snap carousel on mobile, 3-up grid from lg */}
        <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] md:-mx-10 md:scroll-px-10 md:px-10 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
          {programmes.map((p) => (
            <li key={p.title} className="w-[280px] shrink-0 snap-start md:w-[340px] lg:w-auto">
              <Link
                href={routes.training}
                className="flex h-full flex-col gap-4 rounded-[20px] border border-white/12 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/45 md:gap-[18px] md:rounded-3xl md:p-7"
              >
                <span className="flex items-center justify-between">
                  <span className="flex items-center gap-2 rounded-[10px] bg-silver/12 px-3 py-2 text-[13px] font-bold text-silver">
                    <CalendarIcon size={16} />
                    {p.badge}
                  </span>
                  <span className="text-[13px] text-muted">{p.kind}</span>
                </span>
                <h3 className="font-display text-[22px] leading-[1.15] font-medium md:text-[26px]">{p.title}</h3>
                <p className="grow text-sm leading-relaxed text-mist md:text-[15px]">{p.body}</p>
                <span className="flex items-center justify-between border-t border-white/12 pt-4">
                  <span className="text-sm text-muted">{p.footer}</span>
                  <span className="flex items-center gap-1.5 text-sm font-bold text-gold">
                    Enquire <ArrowUpRightIcon size={14} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <PillLink href={routes.training}>
            View all programmes <ArrowRightIcon size={16} />
          </PillLink>
        </div>
      </Container>
    </section>
  );
}
