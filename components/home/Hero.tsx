import Image from "next/image";
import { logos } from "@/lib/site";
import { Globe } from "./Globe";
import { HeroServices } from "./HeroServices";
import { StarField } from "./StarField";

/** Tiny angled words floating around the globe (desktop only). */
const orbitLabels = [
  { text: "Structured", className: "left-[calc(50%-325px)] top-[250px] -rotate-[38deg]" },
  { text: "Outcome-focused", className: "left-[calc(50%+210px)] top-[742px] -rotate-[28deg]" },
  { text: "Flexible", className: "left-[calc(50%-110px)] top-[790px] rotate-[8deg]" },
];

export function Hero() {
  return (
    <section aria-label="Introduction" className="relative isolate overflow-hidden">
      {/* ---- Atmosphere -------------------------------------------------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <StarField className="absolute inset-0 size-full" />
        {/* Desktop glows */}
        <div className="absolute top-[520px] left-[calc(50%-920px)] hidden h-[600px] w-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.055),transparent)] xl:block" />
        <div className="absolute -top-[200px] left-[calc(50%+280px)] hidden h-[600px] w-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(201,201,198,0.14),transparent)] xl:block" />
        <div className="absolute top-10 left-1/2 hidden h-[860px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(230,171,63,0.14),rgba(201,201,198,0.06)_60%,transparent)] xl:block" />
        {/* Mobile / tablet glow */}
        <div className="absolute top-[60px] left-1/2 h-[480px] w-[510px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(230,171,63,0.15),transparent)] md:top-[80px] md:h-[640px] md:w-[680px] xl:hidden" />
      </div>

      <div className="relative mx-auto max-w-[1440px] pt-[110px] pb-14 md:pt-[120px] xl:h-[900px] xl:p-0">
        {/* ---- Globe + centred brand lockup ------------------------------ */}
        <div className="relative mx-auto aspect-square w-[min(380px,96vw)] md:w-[520px] xl:absolute xl:top-[470px] xl:left-1/2 xl:w-[min(780px,56vw)] xl:-translate-x-1/2 xl:-translate-y-1/2">
          <Globe className="absolute inset-0 size-full" />

          {/* Dark disc so the logo reads against the globe */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 aspect-square w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.92)_50%,rgba(0,0,0,0.6)_75%,transparent)]"
          />

          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2.5 text-center xl:gap-3.5">
            <h1 className="sr-only">Talent833 Partners — Executive Hiring &amp; Learning Solutions</h1>
            <Image
              src={logos.full.src}
              width={logos.full.width}
              height={logos.full.height}
              alt="Talent833 Partners"
              className="h-auto w-[170px] md:w-[230px] xl:w-[300px]"
              preload
            />
            <span
              aria-hidden="true"
              className="text-[9px] font-semibold tracking-[0.22em] text-mist uppercase [text-shadow:0_0_10px_#000,0_0_18px_#000] md:text-[11px] xl:text-xs xl:tracking-[0.32em]"
            >
              Executive Hiring &amp; Learning Solutions
            </span>
            <span className="hidden animate-pulse-soft items-center gap-2 text-[13px] text-muted xl:flex">
              <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
              Tap a card to explore what we do
            </span>
          </div>
        </div>

        {orbitLabels.map((l) => (
          <span
            key={l.text}
            aria-hidden="true"
            className={`absolute hidden text-[13px] tracking-[0.08em] text-muted xl:block ${l.className}`}
          >
            {l.text}
          </span>
        ))}

        {/* ---- Service cards (floating on desktop, grid on mobile) -------- */}
        <HeroServices />

        {/* ---- Scroll cue ------------------------------------------------- */}
        <div
          aria-hidden="true"
          className="absolute bottom-9 left-14 hidden items-center gap-3 text-xs tracking-[0.14em] text-muted uppercase xl:flex"
        >
          <span className="flex h-10 w-[26px] justify-center rounded-[13px] border border-cream/30 pt-2">
            <span className="h-2 w-[3px] animate-pulse-soft rounded-sm bg-cream" />
          </span>
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
