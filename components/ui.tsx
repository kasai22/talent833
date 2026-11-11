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

type PillVariant = "light" | "gold" | "outline";

const pillVariants: Record<PillVariant, string> = {
  light: "bg-cream text-ink font-bold hover:text-ink",
  gold: "bg-gold text-ink font-bold hover:text-ink",
  outline: "border border-white/20 text-cream font-semibold hover:border-gold/60 hover:text-cream",
};

type PillLinkProps = ComponentProps<typeof Link> & { variant?: PillVariant; size?: "md" | "lg" };

/** Rounded CTA link, used for every button-style link on the page. */
export function PillLink({ variant = "outline", size = "md", className, ...props }: PillLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2 rounded-full whitespace-nowrap transition duration-200 hover:-translate-y-px",
        size === "md" ? "h-[46px] px-[22px] text-[15px]" : "h-[52px] px-6 text-[15px]",
        pillVariants[variant],
        className,
      )}
      {...props}
    />
  );
}

/** Frosted card surface used across sections. */
export const surface = "border border-white/12 bg-white/5";
