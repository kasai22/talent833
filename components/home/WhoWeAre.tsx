import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Container, Eyebrow, cn, surface } from "@/components/ui";
import { whoWeAre } from "@/lib/content/home";
import { routes } from "@/lib/site";

export function WhoWeAre() {
  return (
    <section aria-labelledby="who-title" className="py-14 md:py-20 xl:pt-[110px] xl:pb-16">
      <Container className="flex flex-col gap-10 xl:gap-14">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
          <div className="flex flex-col gap-5 lg:gap-[22px]">
            <Eyebrow>Who we are</Eyebrow>
            <h2
              id="who-title"
              className="font-display text-[34px] leading-[1.05] font-medium tracking-[-0.025em] text-balance md:text-[44px] xl:text-[52px]"
            >
              {whoWeAre.title}
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[15px] leading-[1.65] text-mist md:text-[17px] md:leading-[1.7]">{whoWeAre.body}</p>
            <Link
              href={routes.about}
              className="flex w-fit items-center gap-2 font-bold text-gold transition-colors hover:text-cream"
            >
              More about us <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>

        <ul className="grid gap-2.5 md:grid-cols-3 md:gap-4">
          {whoWeAre.pillars.map((p) => (
            <li key={p.title} className={cn(surface, "flex flex-col gap-2 rounded-2xl p-5 md:rounded-[20px] md:p-7")}>
              <h3 className="font-display text-xl font-medium md:text-2xl">{p.title}</h3>
              <p className="text-sm leading-relaxed text-mist md:text-[15px]">{p.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
