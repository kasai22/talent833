import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/components/ui";
import { serviceHref, type Service } from "@/lib/content/services";
import { routes } from "@/lib/site";

/** Gold rule, two-tone heading and tracked strapline shared by both card styles. */
function CardText({ service, size = "lg" }: { service: Service; size?: "lg" | "md" }) {
  const [plain, accent] = service.headline;
  return (
    <div className="flex flex-col gap-5">
      <span className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-gold/80">
        <span aria-hidden="true" className="h-[2px] w-9 rounded-full bg-gold transition-[width] duration-500 group-hover:w-14" />
        {service.num}
      </span>
      <h2
        className={cn(
          "font-display leading-[0.98] font-medium tracking-[-0.03em] text-cream",
          size === "lg" ? "text-[40px] md:text-[44px] lg:text-[52px] xl:text-[60px]" : "text-[34px] md:text-[42px]",
        )}
      >
        {plain && <span className="block">{plain}</span>}
        <span className="block text-balance text-gold">{accent}</span>
      </h2>
      <p className="max-w-[300px] text-[13px] leading-[1.7] font-semibold tracking-[0.2em] text-mist uppercase">
        {service.strap}
      </p>
    </div>
  );
}

function LearnMore() {
  return (
    <span className="inline-flex h-11 items-center gap-2 self-start rounded-full border border-white/25 bg-ink/40 px-5 text-sm font-semibold text-cream backdrop-blur-sm transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
      Learn more
      <ArrowRightIcon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  );
}

/** Photo-backed tile for the services grid. The whole card is one link. */
export function ServiceCard({ service, preload }: { service: Service; preload?: boolean }) {
  return (
    <Link
      href={serviceHref(service.slug)}
      className="group relative isolate flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[22px] border border-white/12 bg-[#0a0d12] p-7 transition-[border-color,box-shadow] duration-500 hover:border-gold/50 hover:shadow-[0_24px_60px_-20px_rgba(230,171,63,0.28)] md:min-h-[480px] md:rounded-[28px] md:p-10 xl:min-h-[520px] xl:p-12"
    >
      {service.image && (
        <div aria-hidden="true" className="absolute inset-0 -z-10 md:left-auto md:w-[62%]">
          <Image
            src={service.image}
            alt=""
            fill
            preload={preload}
            placeholder="blur"
            sizes="(min-width: 768px) 31vw, 100vw"
            className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
          />
        </div>
      )}

      {/* Darken the text side: from the bottom on mobile, from the left on wider screens. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,#0a0d12_20%,rgba(10,13,18,0.75)_55%,rgba(10,13,18,0.25))] md:bg-[linear-gradient(to_right,#0a0d12_38%,rgba(10,13,18,0.7)_55%,rgba(10,13,18,0)_80%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 -z-10 size-72 rounded-full bg-[radial-gradient(closest-side,rgba(230,171,63,0.12),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <CardText service={service} />
      <div className="pt-10">
        <LearnMore />
      </div>
    </Link>
  );
}

/**
 * Full-width band for a service outside the main grid. With a photo and a pitch it becomes the
 * "Customised Solutions" banner: text and a "Let's talk" CTA (to the contact page) on the left.
 */
export function ServiceBand({ service }: { service: Service }) {
  const { pitch, image } = service;
  return (
    <Link
      id={service.slug}
      href={pitch ? routes.contact : serviceHref(service.slug)}
      className={cn(
        "group relative isolate flex flex-col gap-8 overflow-hidden rounded-[22px] border border-white/12 p-7 transition-[border-color,box-shadow] duration-500 hover:border-gold/50 md:rounded-[28px] md:p-10 xl:px-12",
        image
          ? "justify-end bg-[#0a0d12] pt-[280px] md:min-h-[560px] md:pt-10 hover:shadow-[0_24px_60px_-20px_rgba(230,171,63,0.28)] md:justify-center xl:min-h-[600px] xl:p-14"
          : "bg-surface md:flex-row md:items-end md:justify-between",
      )}
    >
      {image ? (
        <>
          <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[340px] md:inset-y-0 md:left-auto md:h-auto md:w-[58%]">
            <Image
              src={image}
              alt=""
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-[center_60%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(10,13,18,0.1),rgba(10,13,18,0.35)_180px,#0a0d12_340px)] md:bg-[linear-gradient(to_right,#0a0d12_42%,rgba(10,13,18,0.75)_52%,rgba(10,13,18,0)_75%)]"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute -right-40 -bottom-56 -z-10 size-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(230,171,63,0.14),transparent)]"
        />
      )}

      <CardText service={service} size={image ? "lg" : "md"} />

      {pitch ? (
        <div className="flex max-w-[520px] flex-col gap-4">
          <span aria-hidden="true" className="h-[3px] w-20 rounded-full bg-gold" />
          <p className="font-display text-[22px] leading-[1.25] font-semibold text-cream md:text-[26px]">{pitch.title}</p>
          <p className="text-[15px] leading-relaxed text-cream/90 md:text-base">
            {pitch.body} <span className="font-semibold text-gold">{pitch.highlight}</span>
          </p>
          <span className="mt-3 inline-flex h-[52px] items-center gap-2 self-start rounded-full bg-gold px-7 text-base font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(230,171,63,0.6)] transition-transform duration-300 group-hover:-translate-y-px">
            {pitch.cta}
            <ArrowRightIcon size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      ) : (
        <LearnMore />
      )}
    </Link>
  );
}
