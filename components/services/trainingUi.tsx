import Link from "next/link";
import type { ReactNode } from "react";
import { StarField } from "@/components/home/StarField";
import { cn } from "@/components/ui";

/** Shared building blocks for the bespoke service pages (Corporate Training, Fractional L&D). */

/** Gold-tinted square that holds an icon. */
export const iconTile =
  "grid shrink-0 place-items-center rounded-2xl border border-gold/25 bg-gradient-to-b from-gold/15 to-gold/[0.03] text-gold shadow-[inset_0_0_16px_rgba(230,171,63,0.12)]";

/** Dark card surface with a faint top highlight. */
export const darkPanel = "border border-white/12 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]";

/** Gold-bordered, glowing card surface for the featured panel. */
export const goldPanel =
  "border border-gold/60 bg-gradient-to-br from-gold/[0.16] via-gold/[0.05] to-white/[0.02] shadow-[0_0_48px_rgba(230,171,63,0.14),inset_0_1px_0_rgba(255,227,161,0.15)]";

/** Star field, gold glows and a light arc from the top-right corner. */
export function PageBackdrop({ id }: { id: string }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <StarField className="absolute inset-0 size-full" />
      <div className="absolute -top-[260px] -right-[200px] size-[760px] rounded-full bg-[radial-gradient(closest-side,rgba(230,171,63,0.14),transparent)]" />
      <div className="absolute top-[45%] -left-[260px] size-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(230,171,63,0.07),transparent)]" />
      <svg viewBox="0 0 600 400" className="absolute -top-10 right-0 h-[320px] w-[480px] md:h-[420px] md:w-[640px]" fill="none">
        <defs>
          <linearGradient id={`${id}-arc`} x1="0" x2="1" y1="1" y2="0">
            <stop offset="0" stopColor="#e6ab3f" stopOpacity="0" />
            <stop offset="0.7" stopColor="#e6ab3f" stopOpacity="0.8" />
            <stop offset="1" stopColor="#ffe3a1" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path d="M260 120 C 420 100, 540 40, 600 -10" stroke={`url(#${id}-arc)`} strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/** Centred uppercase gold heading flanked by short rules, e.g. "— OUR OFFERINGS —". */
export function RuleHeading({
  id,
  tone = "gold",
  children,
}: {
  id?: string;
  /** gold: small eyebrow label · cream: uppercase subheading · title: large sentence-case section title. */
  tone?: "gold" | "cream" | "title";
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "flex items-center justify-center gap-4 text-center md:gap-6",
        tone === "gold" && "text-xs font-bold uppercase tracking-[0.24em] text-gold md:text-sm",
        tone === "cream" && "font-display text-lg font-bold uppercase tracking-[0.12em] text-cream md:text-2xl",
        tone === "title" &&
          "font-display text-[26px] leading-tight font-semibold tracking-[-0.015em] text-balance text-cream md:text-[34px]",
      )}
    >
      <span aria-hidden="true" className="hidden h-px w-14 shrink-0 bg-gold sm:block md:w-20" />
      {children}
      <span aria-hidden="true" className="hidden h-px w-14 shrink-0 bg-gold sm:block md:w-20" />
    </h2>
  );
}

/** Solid gold pill CTA. */
export function GoldCta({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-[52px] w-fit items-center gap-2.5 rounded-full bg-gradient-to-b from-gold-light/90 to-gold px-6 text-[15px] font-bold whitespace-nowrap text-ink shadow-[0_8px_30px_rgba(230,171,63,0.3)] transition duration-200 hover:-translate-y-px",
        className,
      )}
    >
      {children}
    </Link>
  );
}
