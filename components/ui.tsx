import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Section wrapper: consistent horizontal padding and max width. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-5 md:px-10 xl:px-14", className)} {...props} />;
}

/** Small uppercase label with a leading rule, e.g. "— WHO WE ARE". */
export function Eyebrow({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "silver" }) {
  const color = tone === "gold" ? "text-gold" : "text-silver";
  const bar = tone === "gold" ? "bg-gold" : "bg-silver";
  return (
    <span className={cn("flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase", color)}>
      <span className={cn("h-[1.5px] w-6", bar)} aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionTitle({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-display text-[34px] leading-[1.05] font-medium tracking-[-0.025em] text-balance md:text-[42px] xl:text-5xl",
        className,
      )}
      {...props}
    />
  );
}

/* ---------------------------------------------------------------
   Actions
   gold    — the one primary action in a view
   light   — primary action on busy/dark imagery (header WhatsApp)
   outline — secondary action beside a primary
   --------------------------------------------------------------- */

export type PillVariant = "light" | "gold" | "outline";
export type PillSize = "md" | "lg";

const pillVariants: Record<PillVariant, string> = {
  light: "bg-cream text-ink font-bold hover:bg-white",
  gold: "bg-gold text-ink font-bold shadow-gold hover:bg-gold-light",
  outline: "border border-white/25 text-cream font-semibold hover:border-gold/60 hover:bg-white/[0.04]",
};

/** Class list for every pill-shaped action (links and buttons share it). */
export function pillClass({ variant = "outline", size = "md" }: { variant?: PillVariant; size?: PillSize } = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap transition duration-200",
    "hover:-translate-y-px active:translate-y-0 active:scale-[0.98]",
    "disabled:pointer-events-none disabled:opacity-60 aria-disabled:pointer-events-none aria-disabled:opacity-60",
    size === "md" ? "h-[46px] px-[22px] text-[15px]" : "h-[52px] px-6 text-[15px]",
    pillVariants[variant],
  );
}

type PillLinkProps = ComponentProps<typeof Link> & { variant?: PillVariant; size?: PillSize };

/** Rounded CTA link, used for every button-style link on the site. */
export function PillLink({ variant = "outline", size = "md", className, ...props }: PillLinkProps) {
  return <Link className={cn(pillClass({ variant, size }), className)} {...props} />;
}

type PillButtonProps = ComponentProps<"button"> & { variant?: PillVariant; size?: PillSize };

/** Button twin of PillLink, for forms and in-page actions. */
export function PillButton({ variant = "gold", size = "lg", className, type = "button", ...props }: PillButtonProps) {
  return <button type={type} className={cn(pillClass({ variant, size }), "cursor-pointer", className)} {...props} />;
}

/** Inline gold text link with an arrow slot ("Learn more →"). Padded so it is a comfortable tap target. */
export const textLink =
  "inline-flex min-h-10 items-center gap-1.5 font-semibold text-gold transition-colors hover:text-gold-light";

/* ---------------------------------------------------------------
   Surfaces
   --------------------------------------------------------------- */

/** Frosted card surface used across sections. */
export const surface = "border border-white/12 bg-white/5";

/** Standard card: surface + radius + padding. Add `cardHover` when the card is interactive. */
export const card = "rounded-card border border-white/12 bg-white/[0.04] p-5 md:p-7";
export const cardHover = "transition duration-300 hover:-translate-y-0.5 hover:border-gold/45";

/* ---------------------------------------------------------------
   Breadcrumbs (shared by PageHero and the bespoke service heroes)
   --------------------------------------------------------------- */

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ crumbs, className }: { crumbs: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 text-[13px] text-muted">
        {crumbs.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {c.href ? (
              <Link href={c.href} className="inline-flex min-h-7 items-center transition-colors hover:text-gold">
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
  );
}
