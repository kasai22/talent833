import Link from "next/link";
import { ArrowRightIcon, BuildingIcon, SparkIcon } from "@/components/icons";
import { Container, Eyebrow, PillLink, SectionTitle, cn } from "@/components/ui";
import { practices, type Practice } from "@/lib/content/home";

export function WhatWeDo() {
  return (
    <section aria-labelledby="what-title" className="py-14 md:py-20 xl:pt-[60px]">
      <Container className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>What we do</Eyebrow>
          <SectionTitle id="what-title">Two practices. One partner for your people.</SectionTitle>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          {practices.map((p) => (
            <PracticeCard key={p.title} practice={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PracticeCard({ practice: p }: { practice: Practice }) {
  const gold = p.tone === "gold";
  const BadgeIcon = gold ? BuildingIcon : SparkIcon;

  return (
    <article
      className={cn(
        "relative flex flex-col gap-[22px] overflow-hidden rounded-[22px] border border-white/12 bg-white/5 p-6 md:rounded-[28px] md:p-11",
        "transition duration-300 hover:-translate-y-1 hover:border-gold/45",
      )}
    >
      {/* Decorative orbit rings */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute -top-20 -right-20 size-[260px] rounded-full border opacity-25",
          gold ? "border-gold" : "border-silver",
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "absolute -top-[30px] -right-[30px] size-40 rounded-full border border-dashed opacity-35",
          gold ? "border-gold" : "border-silver",
        )}
      />

      <span className="flex items-center gap-3">
        <span
          className={cn(
            "flex size-10 items-center justify-center rounded-xl text-ink md:size-[52px] md:rounded-2xl",
            gold ? "bg-gold" : "bg-silver",
          )}
        >
          <BadgeIcon size={26} className="size-5 md:size-[26px]" />
        </span>
        <span className={cn("text-xs font-bold tracking-[0.2em] uppercase", gold ? "text-gold" : "text-silver")}>
          {p.audience}
        </span>
      </span>

      <h3 className="font-display text-[30px] leading-[1.05] font-medium tracking-[-0.025em] md:text-[40px]">
        {p.title}
      </h3>
      <p className="max-w-[480px] text-[15px] leading-relaxed text-mist md:text-base">{p.body}</p>

      <ul className="flex flex-col border-b border-white/12">
        {p.items.map((item) => (
          <li key={item.title}>
            <Link
              href={p.cta.href}
              className="group flex items-center gap-4 border-t border-white/12 px-2 py-[18px] transition-colors hover:bg-white/4"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/6">
                <item.icon size={22} className={gold ? "text-gold" : "text-silver"} />
              </span>
              <span className="flex grow flex-col gap-0.5">
                <span className="font-display text-lg font-medium transition-colors group-hover:text-gold md:text-xl">
                  {item.title}
                </span>
                <span className="text-sm text-muted">{item.sub}</span>
              </span>
              <ArrowRightIcon size={16} className="shrink-0 text-muted" />
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <PillLink href={p.cta.href}>
          {p.cta.label} <ArrowRightIcon size={16} />
        </PillLink>
      </div>
    </article>
  );
}
