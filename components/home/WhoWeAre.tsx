import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Container, Eyebrow, cn, surface } from "@/components/ui";
import { about } from "@/lib/content/about";
import { stats } from "@/lib/content/home";
import { routes } from "@/lib/site";

export function WhoWeAre() {
  return (
    <section aria-labelledby="who-title" className="py-14 md:py-20 xl:pt-[110px] xl:pb-12">
      <Container className="flex flex-col gap-10 xl:gap-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
          <div className="flex flex-col gap-5 lg:gap-[22px]">
            <Eyebrow>Who we are</Eyebrow>
            <h2
              id="who-title"
              className="font-display text-[34px] leading-[1.05] font-medium tracking-[-0.025em] text-balance md:text-[44px] xl:text-[52px]"
            >
              {about.title}
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {about.body.slice(0, 2).map((p) => (
              <p key={p.slice(0, 24)} className="text-[15px] leading-[1.65] text-mist md:text-[17px] md:leading-[1.7]">
                {p}
              </p>
            ))}
            <Link
              href={routes.about}
              className="flex w-fit items-center gap-2 font-bold text-gold transition-colors hover:text-cream"
            >
              More about us <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-2.5 md:gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className={cn(surface, "flex flex-col-reverse gap-1 rounded-2xl p-4 md:gap-2 md:rounded-[20px] md:p-7")}>
              <dt className="text-[13px] text-muted md:text-[15px]">{s.label}</dt>
              <dd className="font-display text-[30px] font-medium tracking-[-0.03em] md:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
