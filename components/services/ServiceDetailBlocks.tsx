import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { Container, Eyebrow, PillLink, SectionTitle, cn, surface } from "@/components/ui";
import type { DetailItem, FlowTrack, FocusTrack } from "@/lib/content/partnerships";
import type { DetailBlock } from "@/lib/content/serviceDetails";
import { routes } from "@/lib/site";

const card = "rounded-[20px] border border-white/12 bg-white/5 p-5 md:rounded-3xl md:p-7";
const num = (i: number) => String(i + 1).padStart(2, "0");

export function BookConsultation({ variant = "gold" }: { variant?: "gold" | "outline" }) {
  return (
    <PillLink href={routes.contact} variant={variant} size="lg" className="w-fit">
      Book a consultation <ArrowRightIcon size={16} />
    </PillLink>
  );
}

function Section({ labelledBy, children, className }: { labelledBy?: string; children: ReactNode; className?: string }) {
  return (
    <section aria-labelledby={labelledBy} className={cn("py-14 md:py-20 xl:py-24", className)}>
      <Container className="flex flex-col gap-8 md:gap-10">{children}</Container>
    </section>
  );
}

function Heading({ eyebrow, title, id, intro }: { eyebrow: string; title: string; id: string; intro?: string }) {
  return (
    <div className="flex max-w-[860px] flex-col gap-[18px]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionTitle id={id}>{title}</SectionTitle>
      {intro && <p className="text-[15px] leading-[1.7] text-mist md:text-[17px]">{intro}</p>}
    </div>
  );
}

function ItemCard({ item, index }: { item: DetailItem; index: number }) {
  return (
    <li className={cn(card, "flex flex-col gap-4 transition duration-300 hover:-translate-y-1 hover:border-gold/45")}>
      <span className="font-display text-xl text-gold">{num(index)}</span>
      <span className="font-display text-xl leading-[1.2] font-medium md:text-[22px]">{item.title}</span>
      {item.body && <p className="text-[15px] leading-relaxed text-mist">{item.body}</p>}
      {item.bullets && (
        <ul className="flex flex-col gap-2">
          {item.bullets.map((b) => (
            <li key={b} className="flex gap-2.5 text-[15px] leading-snug text-mist">
              <CheckIcon size={14} className="mt-1 shrink-0 text-gold" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function ItemGrid({ items }: { items: DetailItem[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {items.map((it, i) => (
        <ItemCard key={it.title} item={it} index={i} />
      ))}
    </ol>
  );
}

function Dots({ points }: { points: string[] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-2">
      {points.map((p) => (
        <li key={p} className="rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-cream">
          {p}
        </li>
      ))}
    </ul>
  );
}

function FlowArrow() {
  return <span aria-hidden="true" className="mx-auto block h-8 w-px bg-linear-to-b from-gold/60 to-transparent" />;
}

/** Offering page body for the service-industry "case" flow. */
export function FlowBody({ t }: { t: FlowTrack }) {
  return (
    <Section labelledBy={`${t.id}-flow`}>
      <h2 id={`${t.id}-flow`} className="sr-only">
        {t.kicker}
      </h2>
      <div className="flex flex-col">
        <div className={cn(card, "flex flex-col gap-5")}>
          <Eyebrow tone="silver">{t.reality.label}</Eyebrow>
          <ul className="grid gap-3 md:grid-cols-3">
            {t.reality.items.map((r) => (
              <li key={r.title} className="flex flex-col gap-1 rounded-2xl bg-white/5 p-4">
                <span className="font-display text-lg font-medium">{r.title}</span>
                <span className="text-sm text-muted">{r.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <FlowArrow />
        <div className={cn(card, "flex flex-col items-center gap-4 text-center")}>
          <Eyebrow tone="silver">{t.need.label}</Eyebrow>
          <p className="font-display text-2xl font-medium">{t.need.title}</p>
          <Dots points={t.need.points} />
        </div>
        <FlowArrow />
        <div className="flex flex-col items-center gap-3 rounded-[20px] border border-gold/40 bg-gold/10 p-6 text-center md:rounded-3xl md:p-8">
          <Eyebrow>{t.partnership.label}</Eyebrow>
          <p className="font-display text-2xl font-medium text-gold md:text-[28px]">{t.partnership.title}</p>
          <p className="max-w-[620px] text-[15px] leading-relaxed text-mist">{t.partnership.body}</p>
        </div>
        <FlowArrow />
        <div className="flex flex-col gap-5">
          <Eyebrow tone="silver">{t.academies.label}</Eyebrow>
          <ItemGrid items={t.academies.items} />
        </div>
        <FlowArrow />
        <div className={cn(card, "flex flex-col items-center gap-4 text-center")}>
          <Eyebrow>{t.outcome.label}</Eyebrow>
          <p className="font-display text-2xl font-medium md:text-[28px]">{t.outcome.title}</p>
          <Dots points={t.outcome.points} />
        </div>
      </div>
      {/* <BookConsultation /> */}
    </Section>
  );
}

/** Offering page body: focus areas, outcome and CTA. */
export function TrackBody({ t }: { t: FocusTrack }) {
  const titleId = `${t.id}-focus`;
  return (
    <Section labelledBy={titleId}>
      <div className="flex flex-col gap-[18px]">
        <Eyebrow>{t.short}</Eyebrow>
        <SectionTitle id={titleId}>{t.focusTitle}</SectionTitle>
      </div>
      <ItemGrid items={t.focus} />
      {(t.outcome || t.closing) && (
        <div className={cn(surface, "flex flex-col gap-3 rounded-[20px] p-6 md:rounded-3xl md:p-8")}>
          {t.outcome && (
            <>
              <Eyebrow>The partnership outcome</Eyebrow>
              <p className="font-display text-xl leading-snug font-medium md:text-2xl">{t.outcome}</p>
            </>
          )}
          {t.closing && <p className="font-semibold text-gold">{t.closing}</p>}
        </div>
      )}
      {/* <BookConsultation /> */}
    </Section>
  );
}

/** Linked cards, e.g. the six partnership offerings. */
export function LinkCards({
  items,
  current,
}: {
  items: { title: string; href: string; num?: string }[];
  current?: string;
}) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {items.map((it, n) => (
        <li key={it.href}>
          <Link
            href={it.href}
            aria-current={it.href === current ? "page" : undefined}
            className={cn(
              card,
              "group flex h-full flex-col gap-4 transition duration-300 hover:-translate-y-1 hover:border-gold/45 aria-[current=page]:border-gold/45",
            )}
          >
            <span className="font-display text-xl text-gold">{it.num ?? num(n)}</span>
            <span className="grow font-display text-xl leading-[1.2] font-medium transition-colors group-hover:text-gold">
              {it.title}
            </span>
            <span className="flex items-center gap-1.5 text-sm font-bold text-gold">
              Explore <ArrowRightIcon size={14} />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function ServiceDetailBlocks({ blocks }: { blocks: DetailBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        const id = `detail-${i}`;
        switch (b.kind) {
          case "checks":
            return (
              <Section key={id} labelledBy={id}>
                <Heading eyebrow={b.eyebrow} title={b.title} id={id} />
                <ul className={cn("grid gap-3 md:gap-4", b.items.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3")}>
                  {b.items.map((it) => (
                    <li key={it.lead} className={cn(card, "flex gap-4")}>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-gold/15 text-gold">
                        <CheckIcon size={16} />
                      </span>
                      <span className="flex flex-col gap-1">
                        <span className={cn("leading-snug", it.rest ? "font-display text-xl font-medium" : "text-[17px] text-cream")}>
                          {it.lead}
                        </span>
                        {it.rest && <span className="text-[15px] text-mist">{it.rest}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </Section>
            );
          case "cards":
            return (
              <Section key={id} labelledBy={id}>
                <Heading eyebrow={b.eyebrow} title={b.title} id={id} intro={b.intro} />
                <ItemGrid items={b.items} />
                {b.note && <p className="max-w-[860px] text-[15px] leading-[1.7] text-mist md:text-[17px]">{b.note}</p>}
              </Section>
            );
          case "index":
            return (
              <Section key={id} labelledBy={id} className="border-t border-white/12">
                <Heading eyebrow={b.eyebrow} title={b.title} id={id} intro={b.intro} />
                <LinkCards items={b.items} />
                {/* <BookConsultation variant="outline" /> */}
              </Section>
            );
          case "closing":
            return (
              <Section key={id} labelledBy={id} className="border-t border-white/12">
                <div className="flex flex-col items-start gap-6">
                  <SectionTitle id={id}>{b.title}</SectionTitle>
                  {/* <BookConsultation /> */}
                </div>
              </Section>
            );
        }
      })}
    </>
  );
}
