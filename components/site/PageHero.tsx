import Link from "next/link";
import type { ReactNode } from "react";
import { StarField } from "@/components/home/StarField";
import { WireGlobe } from "@/components/site/WireGlobe";
import { Container, Eyebrow, cn } from "@/components/ui";

export type Crumb = { label: string; href?: string };

type Props = {
  crumbs: Crumb[];
  eyebrow: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  /** Extra content under the lede (CTAs, meta). */
  children?: ReactNode;
  /** Optional right-hand column from `lg` up (replaces the globe). */
  aside?: ReactNode;
};

/** Inner-page hero: star field, gold glow, wire globe, breadcrumb and title. */
export function PageHero({ crumbs, eyebrow, title, lede, children, aside }: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <StarField className="absolute inset-0 size-full" />
        <div className="absolute -top-[200px] left-[calc(50%-20px)] size-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(230,171,63,0.11),transparent)] md:size-[900px]" />
      </div>

      {!aside && (
        <WireGlobe className="absolute top-[300px] -right-[150px] -z-10 size-[340px] opacity-40 md:top-[170px] md:-right-[120px] md:size-[480px] md:opacity-70 xl:top-[120px] xl:right-auto xl:left-[calc(50%+180px)] xl:size-[640px] xl:opacity-100" />
      )}

      <Container
        className={cn(
          "relative pt-[120px] pb-14 md:pt-[150px] md:pb-20 xl:pt-[170px]",
          aside ? "grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] xl:gap-[72px] xl:pb-24" : "xl:min-h-[560px] xl:pb-20",
        )}
      >
        <div className="flex max-w-[760px] animate-rise flex-col gap-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[13px] text-muted">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-gold">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-cream">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-display text-[40px] leading-[1.02] font-medium tracking-[-0.03em] text-balance md:text-[56px] xl:text-[64px]">
            {title}
          </h1>
          {lede && <div className="max-w-[620px] text-base leading-relaxed text-mist md:text-lg">{lede}</div>}
          {children}
        </div>
        {aside}
      </Container>
    </section>
  );
}
