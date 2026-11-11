"use client";

import { useState } from "react";
import { ArrowUpRightIcon, BarsIcon, CompassIcon, TargetIcon } from "@/components/icons";
import { cn } from "@/components/ui";
import { heroServices, type HeroService } from "@/lib/content/home";
import { ServiceDialog } from "./ServiceDialog";

/** Shared frosted-glass look of every hero card. */
const glass =
  "border border-white/14 bg-white/[0.055] text-left text-cream backdrop-blur-[14px] transition-[border-color,background-color,box-shadow] duration-300 hover:border-gold/55 hover:bg-white/9";

/** Placement, tilt and float timing of the four big desktop cards (1440 × 900 stage). */
const floating = [
  { pos: "left-24 top-[150px] w-[286px]", tilt: "-rotate-5", float: "animate-float" },
  { pos: "left-[120px] top-[540px] w-[296px]", tilt: "rotate-4", float: "animate-[floaty_8.5s_ease-in-out_-2s_infinite]" },
  { pos: "right-[98px] top-[140px] w-[280px]", tilt: "rotate-6", float: "animate-[floaty_6.5s_ease-in-out_-4s_infinite]" },
  { pos: "right-[104px] top-[520px] w-[296px]", tilt: "-rotate-4", float: "animate-[floaty_9s_ease-in-out_-1s_infinite]" },
];

export function HeroServices() {
  const [active, setActive] = useState<number | null>(null);
  const open = (i: number) => () => setActive(i);
  const [featured, pill] = [heroServices.slice(0, 4), heroServices[4]];

  return (
    <>
      {/* ---------- Desktop: floating cards around the globe ---------- */}
      <ul className="hidden xl:contents">
        {featured.map((s, i) => (
          <li key={s.num} className={cn("absolute z-10", floating[i].pos, floating[i].float)}>
            <button
              type="button"
              onClick={open(i)}
              aria-haspopup="dialog"
              className={cn(
                glass,
                floating[i].tilt,
                "flex w-full cursor-pointer flex-col gap-3.5 rounded-[18px] px-[18px] pt-[18px] pb-4 shadow-card hover:shadow-card-hover",
              )}
            >
              <span className="flex w-full items-center justify-between">
                <IconTile service={s} />
                <span className="text-[11px] font-semibold tracking-[0.16em] text-muted">{s.num}</span>
              </span>
              <CardVisual slug={s.slug} />
              <span className="flex flex-col gap-1">
                <span className="font-display text-[22px] leading-[1.1] font-medium tracking-[-0.01em]">
                  {s.title}
                </span>
                <span className="text-[13px] leading-[1.4] text-muted">{s.tag}</span>
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.04em] text-gold">
                Learn more <ArrowUpRightIcon size={14} />
              </span>
            </button>
          </li>
        ))}
        <li className="absolute top-[800px] right-6 z-10 animate-[floaty_7.5s_ease-in-out_-3s_infinite]">
          <button
            type="button"
            onClick={open(4)}
            aria-haspopup="dialog"
            className={cn(
              glass,
              "flex h-[52px] -rotate-3 cursor-pointer items-center gap-3 rounded-full pr-5 pl-2 shadow-card hover:shadow-card-hover",
            )}
          >
            <span className="flex size-[38px] items-center justify-center rounded-full bg-gold/12 text-gold">
              <pill.icon size={20} />
            </span>
            <span className="text-[15px] font-semibold">{pill.num} · Customised Learning</span>
            <ArrowUpRightIcon size={14} className="text-gold" />
          </button>
        </li>
      </ul>

      {/* ---------- Mobile / tablet: tap grid under the globe ---------- */}
      <div className="relative z-10 mt-2.5 flex flex-col gap-3 px-5 md:mt-6 md:px-10 xl:hidden">
        <span className="flex animate-pulse-soft items-center gap-2 text-xs text-muted">
          <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
          Tap to explore
        </span>
        <ul className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-3">
          {heroServices.map((s, i) => {
            const last = i === heroServices.length - 1;
            return (
              <li key={s.num} className={cn(last && "col-span-2")}>
                <button
                  type="button"
                  onClick={open(i)}
                  aria-haspopup="dialog"
                  className={cn(
                    glass,
                    "flex h-full w-full cursor-pointer rounded-2xl p-3.5",
                    last ? "items-center gap-3" : "min-h-28 flex-col justify-between gap-3",
                  )}
                >
                  {last ? (
                    <>
                      <IconTile service={s} small />
                      <span className="grow font-display text-base leading-[1.15] font-medium">{s.title}</span>
                      <ArrowUpRightIcon size={14} className="text-gold" />
                    </>
                  ) : (
                    <>
                      <span className="flex w-full items-center justify-between">
                        <IconTile service={s} small />
                        <span className="text-[10px] font-semibold tracking-[0.16em] text-muted">{s.num}</span>
                      </span>
                      <span className="font-display text-base leading-[1.15] font-medium">{s.title}</span>
                    </>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <ServiceDialog service={active === null ? null : heroServices[active]} onClose={() => setActive(null)} />
    </>
  );
}

function IconTile({ service, small }: { service: HeroService; small?: boolean }) {
  const Icon = service.icon;
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center bg-gold/12 text-gold",
        small ? "size-9 rounded-[10px]" : "size-10 rounded-xl",
      )}
    >
      <Icon size={20} />
    </span>
  );
}

/** The small decorative "data" illustration unique to each desktop card. */
function CardVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "executive-search":
      return (
        <span className="flex items-center" aria-hidden="true">
          {["bg-[#5A5A5A]", "bg-silver", "bg-[#8E8E8E]", "bg-gold"].map((bg, i) => (
            <span key={bg} className={cn("size-[34px] rounded-full border-2 border-surface", bg, i > 0 && "-ml-2.5")} />
          ))}
          <span className="ml-2.5 text-xs text-mist">₹12 Lakh+ roles</span>
        </span>
      );
    case "signature-programmes":
      return (
        <span className="flex flex-col gap-2" aria-hidden="true">
          {[
            ["Workplace", "100%"],
            ["Leadership", "72%"],
            ["Sales", "38%"],
          ].map(([label, w]) => (
            <span key={label} className="flex items-center gap-2.5 text-[11px] text-muted">
              <span className="w-16">{label}</span>
              <span className="relative h-1.5 grow overflow-hidden rounded-full bg-white/8">
                <span className="absolute inset-y-0 left-0 rounded-full bg-gold" style={{ width: w }} />
              </span>
            </span>
          ))}
        </span>
      );
    case "learning-partnerships":
      return (
        <span className="flex h-14 items-end gap-2" aria-hidden="true">
          {[
            [18, 0.25],
            [28, 0.35],
            [36, 0.5],
            [46, 0.7],
            [56, 1],
          ].map(([h, o]) => (
            <span
              key={h}
              className="grow rounded-[6px_6px_2px_2px]"
              style={{ height: h, background: `rgba(230,171,63,${o})` }}
            />
          ))}
        </span>
      );
    default:
      // Fractional L&D: needs analysis (target) → strategy hub (compass) → capability (bars).
      return (
        <span className="flex h-14 items-center" aria-hidden="true">
          <span className="flex size-10 items-center justify-center rounded-full border border-white/14 bg-white/6 text-silver">
            <TargetIcon size={18} />
          </span>
          <span className="h-0 grow border-t border-dashed border-gold/45" />
          <span className="relative flex size-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_0_0_6px_rgba(230,171,63,0.12)]">
            <CompassIcon size={26} />
          </span>
          <span className="h-0 grow border-t border-dashed border-gold/45" />
          <span className="flex size-10 items-center justify-center rounded-full border border-white/14 bg-white/6 text-silver">
            <BarsIcon size={18} />
          </span>
        </span>
      );
  }
}
