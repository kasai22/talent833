import type { ReactNode } from "react";
import { StarField } from "@/components/home/StarField";
import { WireGlobe } from "@/components/site/WireGlobe";
import { Breadcrumbs, Container, Eyebrow, cn, type Crumb } from "@/components/ui";

export type { Crumb };

type Props = {
  crumbs: Crumb[];
  eyebrow: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  /** Extra content under the lede (CTAs, meta). */
  children?: ReactNode;
  /** Optional right-hand column from `lg` up (replaces the globe). */
  aside?: ReactNode;
  /** Vertical alignment of the two columns when `aside` is set. Defaults to "center". */
  asideAlign?: "center" | "start";
  /** Extra decoration layered behind the content, over the star field. */
  backdrop?: ReactNode;
  /** Smaller title and lede, for heroes carrying more copy. */
  compact?: boolean;
};

/** Inner-page hero: star field, gold glow, wire globe, breadcrumb and title. */
export function PageHero({ crumbs, eyebrow, title, lede, children, aside, asideAlign = "center", backdrop, compact = false }: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <StarField className="absolute inset-0 size-full" />
        <div className="absolute -top-[200px] left-[calc(50%-20px)] size-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(230,171,63,0.11),transparent)] md:size-[900px]" />
        {backdrop}
      </div>

      {!aside && (
        <WireGlobe logoClassName="hidden xl:inline" className="absolute top-[300px] -right-[150px] -z-10 size-[340px] opacity-40 md:top-[170px] md:-right-[120px] md:size-[480px] md:opacity-70 xl:top-[120px] xl:right-auto xl:left-[calc(50%+180px)] xl:size-[640px] xl:opacity-100" />
      )}

      <Container
        className={cn(
          "relative pt-[120px] pb-14 md:pt-[150px] md:pb-20 xl:pt-[170px]",
          aside ? "grid gap-10 lg:grid-cols-[1.1fr_1fr] xl:gap-[72px] xl:pb-24" : "xl:min-h-[560px] xl:pb-20",
          !!aside && (asideAlign === "start" ? "items-start" : "items-center"),
        )}
      >
        <div className={cn("flex max-w-[760px] animate-rise flex-col", compact ? "gap-4" : "gap-5")}>
          <Breadcrumbs crumbs={crumbs} />
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1
            className={cn(
              "font-display font-medium tracking-[-0.03em] text-balance",
              compact
                ? "text-[32px] leading-[1.08] md:text-[42px] xl:text-[46px]"
                : "text-[40px] leading-[1.02] md:text-[56px] xl:text-[64px]",
            )}
          >
            {title}
          </h1>
          {lede && (
            <div
              className={cn(
                "max-w-[620px] leading-relaxed text-mist",
                compact ? "text-[15px] md:text-base" : "text-base md:text-lg",
              )}
            >
              {lede}
            </div>
          )}
          {children}
        </div>
        {aside}
      </Container>
    </section>
  );
}
