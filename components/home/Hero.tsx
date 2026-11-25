import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { PillLink, cn } from "@/components/ui";
import { logos, routes } from "@/lib/site";
import { Globe } from "./Globe";
import { HeroServices } from "./HeroServices";
import { StarField } from "./StarField";

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
              alt="Talent833 HR Services"
              className="h-auto w-[170px] md:w-[230px] xl:w-[300px]"
              loading="eager"
              fetchPriority="high"
            />
            {/* Brand tagline (kept out of the logo file): one line inside the globe from md up */}
            <Tagline className="hidden md:flex md:whitespace-nowrap" />
            {/* The primary next step, centred in the globe at every size. */}
            <PillLink href={routes.services} variant="gold" className="mt-2 md:mt-3">
              Explore our services <ArrowRightIcon size={16} />
            </PillLink>
          </div>
        </div>

        {/* Phones: the tagline sits under the globe and wraps at a readable size. */}
        <Tagline className="mx-auto -mt-2 flex max-w-[360px] flex-wrap justify-center gap-y-1.5 px-5 text-center md:hidden" />

        {/* ---- Service cards (floating on desktop, grid on mobile) -------- */}
        <HeroServices />

      </div>
    </section>
  );
}

const taglineItems = ["Corporate Training", "Capability Development", "Executive & Bulk Hiring"];

function Tagline({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "items-center gap-x-2.5 text-[13px] font-semibold text-white [text-shadow:0_0_10px_#000,0_0_18px_#000] xl:gap-x-3 xl:text-[15px]",
        className,
      )}
    >
      {taglineItems.map((item, i) => (
        // The divider sticks to the item before it, so a wrapped line never starts with one.
        <span key={item} className="flex items-center gap-x-2.5 whitespace-nowrap xl:gap-x-3">
          {item}
          {i < taglineItems.length - 1 && <span aria-hidden="true" className="h-[1.1em] w-0.5 bg-gold" />}
        </span>
      ))}
    </p>
  );
}
