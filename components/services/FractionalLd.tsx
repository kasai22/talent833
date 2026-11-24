import Image from "next/image";
import { ArrowUpRight, CheckMark } from "@/components/services/trainingIcons";
import { GoldCta, PageBackdrop, RuleHeading, darkPanel, goldPanel, iconTile } from "@/components/services/trainingUi";
import { Container, Eyebrow, cn } from "@/components/ui";
import { fractionalLd as f } from "@/lib/content/fractionalLd";
import { logos, routes } from "@/lib/site";

/** Fractional L&D page body: hero, fit check, offerings, value + engagement models and the closing banner. */
export function FractionalLd() {
  return (
    <section aria-labelledby="fl-title" className="relative isolate overflow-hidden">
      <PageBackdrop id="fl" />

      <Container className="flex flex-col gap-12 pt-[120px] pb-16 md:gap-16 md:pt-[150px] md:pb-20 xl:pb-24">
        {/* Hero */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.6fr_1fr]">
          <header className="flex animate-rise flex-col gap-5">
            <Eyebrow>{f.eyebrow}</Eyebrow>
            <h1
              id="fl-title"
              className="font-display text-[34px] leading-[1.08] font-semibold tracking-[-0.025em] md:text-5xl xl:text-[50px]"
            >
              {f.title.line1}
              <br />
              {f.title.line2}
              <span className="whitespace-nowrap text-gold">{f.title.accent}</span>
            </h1>
            <p className="max-w-[620px] text-base leading-relaxed text-mist md:text-lg">{f.intro}</p>
            <GoldCta href={routes.contact} className="mt-2 tracking-[0.06em] uppercase">
              {f.cta}
              <ArrowUpRight size={16} />
            </GoldCta>
          </header>
          <CompassBooks className="mx-auto w-full max-w-[460px] lg:max-w-[520px]" />
        </div>

        {/* Is it right for you? */}
        <div className="flex flex-col gap-7">
          <RuleHeading id="fl-fit" tone="cream">
            {f.fit.title}
          </RuleHeading>
          <ul aria-labelledby="fl-fit" className="grid gap-4 md:grid-cols-3 md:gap-5">
            {f.fit.items.map(({ lead, rest, icon: Icon }) => (
              <li key={lead} className={cn(darkPanel, "flex items-center gap-4 rounded-[22px] p-5 md:gap-5 md:p-6")}>
                <span aria-hidden="true" className={cn(iconTile, "size-14")}>
                  <Icon size={28} />
                </span>
                <span aria-hidden="true" className="h-12 w-px shrink-0 bg-white/25" />
                <p className="flex flex-col gap-1">
                  <strong className="font-display text-lg leading-tight font-semibold tracking-[0.02em] text-cream uppercase md:text-[19px]">
                    {lead}
                  </strong>
                  <span className="text-[15px] leading-snug text-mist">{rest}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Offerings */}
        <div className="flex flex-col gap-7">
          <RuleHeading id="fl-offer" tone="cream">
            {f.offerings.title}
          </RuleHeading>
          <ul aria-labelledby="fl-offer" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-7">
            {f.offerings.items.map(({ title, icon: Icon }) => (
              <li
                key={title}
                className={cn(
                  darkPanel,
                  "flex flex-col items-center justify-center gap-3 rounded-[20px] px-3 py-6 text-center transition-colors duration-300 hover:border-gold/40",
                )}
              >
                <Icon size={40} strokeWidth={1.4} className="text-gold" />
                <span className="text-[15px] leading-snug font-medium text-cream">{title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Value + engagement models */}
        <div className="grid gap-5 lg:grid-cols-2 xl:gap-6">
          <article aria-labelledby="fl-value" className={cn(darkPanel, "flex flex-col rounded-[26px] p-6 md:p-8")}>
            <h2
              id="fl-value"
              className="font-display text-xl font-semibold tracking-[0.06em] text-gold uppercase md:text-[22px]"
            >
              {f.value.title}
            </h2>
            <ul className="mt-6 flex grow flex-col justify-evenly gap-4">
              {f.value.items.map((item) => (
                <li key={item} className="flex items-start gap-4 text-[15px] leading-snug text-cream/90 md:text-base">
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-gold/15 text-gold shadow-[inset_0_0_0_1px_rgba(230,171,63,0.35)]"
                  >
                    <CheckMark size={15} />
                  </span>
                  <span className="pt-1">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article aria-labelledby="fl-models" className={cn(goldPanel, "rounded-[26px] p-6 md:p-8")}>
            <h2
              id="fl-models"
              className="font-display text-xl font-semibold tracking-[0.06em] text-gold uppercase md:text-[22px]"
            >
              {f.models.title}
            </h2>
            <ul className="mt-4 flex flex-col divide-y divide-gold/20">
              {f.models.items.map(({ name, body, icon: Icon }) => (
                <li key={name} className="flex items-center gap-4 py-3.5 md:gap-5">
                  <span aria-hidden="true" className={cn(iconTile, "size-12 rounded-xl")}>
                    <Icon size={24} />
                  </span>
                  <span aria-hidden="true" className="h-9 w-px shrink-0 bg-gold/50" />
                  <p className="text-[15px] leading-snug text-mist md:text-base">
                    <strong className="font-semibold text-cream">{name}</strong>
                    <span aria-hidden="true" className="mx-2 text-gold/70">
                      |
                    </span>
                    <span className="sr-only"> — </span>
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Closing banner */}
        <aside
          aria-labelledby="fl-closing"
          className="relative isolate grid items-center gap-6 overflow-hidden rounded-[28px] border border-gold/35 bg-gradient-to-r from-gold/[0.12] via-white/[0.03] to-gold/[0.08] p-6 md:grid-cols-[1fr_auto] md:p-10"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -bottom-24 -z-10 size-80 rounded-full bg-[radial-gradient(closest-side,rgba(230,171,63,0.35),transparent)]"
          />
          <div className="flex flex-col gap-6">
            <h2
              id="fl-closing"
              className="font-display text-[26px] leading-[1.15] font-semibold tracking-[0.02em] uppercase md:text-[34px]"
            >
              {f.closing.line1}
              <br />
              <span className="text-gold">{f.closing.line2}</span>
            </h2>
            <GoldCta href={routes.contact} className="tracking-[0.06em] uppercase">
              {f.closing.cta}
              <ArrowUpRight size={16} />
            </GoldCta>
          </div>
          <div className="relative hidden size-40 place-items-center md:grid">
            <div aria-hidden="true" className="absolute inset-3 rounded-full border border-gold/30 bg-gold/10" />
            <Image
              src={f.closing.image ?? logos.mark.src}
              alt=""
              width={f.closing.image ? 160 : 88}
              height={f.closing.image ? 160 : Math.round((88 * logos.mark.height) / logos.mark.width)}
              className="relative drop-shadow-[0_0_18px_rgba(230,171,63,0.45)]"
            />
          </div>
        </aside>
      </Container>
    </section>
  );
}

/** Hero illustration: a gold compass resting against a stack of three books. */
function CompassBooks({ className }: { className?: string }) {
  const books = [
    { y: 214, x: 120, w: 300, icon: "bars" },
    { y: 150, x: 150, w: 280, icon: "none" },
    { y: 86, x: 130, w: 290, icon: "cap" },
  ] as const;
  return (
    <svg viewBox="0 0 480 340" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <linearGradient id="fl-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffe3a1" />
          <stop offset="0.5" stopColor="#e6ab3f" />
          <stop offset="1" stopColor="#9c7426" />
        </linearGradient>
        <linearGradient id="fl-cover" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2a2722" />
          <stop offset="1" stopColor="#0d0c0a" />
        </linearGradient>
        <linearGradient id="fl-pages" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#f3e3bd" />
          <stop offset="1" stopColor="#b89656" />
        </linearGradient>
        <radialGradient id="fl-face" cx="0.45" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#2b2620" />
          <stop offset="1" stopColor="#0b0a08" />
        </radialGradient>
        <radialGradient id="fl-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e6ab3f" stopOpacity="0.35" />
          <stop offset="1" stopColor="#e6ab3f" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="260" cy="200" rx="240" ry="150" fill="url(#fl-glow)" />
      <path d="M40 300 C 120 120, 300 20, 470 30" fill="none" stroke="url(#fl-gold)" strokeOpacity="0.55" strokeWidth="1.5" />
      <ellipse cx="270" cy="300" rx="210" ry="14" fill="#000" opacity="0.6" />

      {/* Books, bottom to top */}
      {books.map((b) => (
        <g key={b.y}>
          <rect x={b.x + b.w - 70} y={b.y + 8} width="70" height="48" rx="4" fill="url(#fl-pages)" />
          {[16, 24, 32, 40, 48].map((d) => (
            <path key={d} d={`M${b.x + b.w - 66} ${b.y + d} H${b.x + b.w - 2}`} stroke="#9c7426" strokeOpacity="0.35" strokeWidth="1" />
          ))}
          <rect x={b.x} y={b.y} width={b.w - 60} height="64" rx="8" fill="url(#fl-cover)" stroke="#e6ab3f" strokeOpacity="0.35" />
          <path d={`M${b.x + 8} ${b.y + 10} H${b.x + b.w - 70}`} stroke="url(#fl-gold)" strokeWidth="2" />
          <path d={`M${b.x + 8} ${b.y + 54} H${b.x + b.w - 70}`} stroke="url(#fl-gold)" strokeWidth="2" />
          {b.icon === "cap" && (
            <g transform={`translate(${b.x + b.w - 140} ${b.y + 20})`} fill="none" stroke="url(#fl-gold)" strokeWidth="2.5" strokeLinejoin="round">
              <path d="M0 10 20 0l20 10-20 10z" />
              <path d="M8 14v8c4 4 20 4 24 0v-8M40 10v10" />
            </g>
          )}
          {b.icon === "bars" && (
            <g transform={`translate(${b.x + b.w - 140} ${b.y + 18})`} stroke="url(#fl-gold)" strokeWidth="4" strokeLinecap="round">
              <path d="M4 28v-6M14 28V16M24 28V10M34 28V4" />
            </g>
          )}
        </g>
      ))}

      {/* Compass */}
      <g transform="translate(150 200)">
        <path d="M0 -100 v-22" stroke="#e6ab3f" strokeWidth="7" strokeLinecap="round" />
        <circle cx="0" cy="-131" r="9" fill="none" stroke="url(#fl-gold)" strokeWidth="4" />
        <circle r="104" fill="url(#fl-gold)" />
        <circle r="94" fill="url(#fl-face)" />
        <circle r="84" fill="none" stroke="#e6ab3f" strokeOpacity="0.45" strokeWidth="1" />
        {Array.from({ length: 36 }, (_, i) => {
          const a = (i * Math.PI) / 18;
          const r1 = i % 9 === 0 ? 70 : 77;
          return (
            <line
              key={i}
              x1={Math.sin(a) * r1}
              y1={-Math.cos(a) * r1}
              x2={Math.sin(a) * 84}
              y2={-Math.cos(a) * 84}
              stroke="#e6ab3f"
              strokeOpacity={i % 9 === 0 ? 0.9 : 0.4}
              strokeWidth={i % 9 === 0 ? 2 : 1}
            />
          );
        })}
        <g transform="rotate(32)">
          <path d="M0 -66 9 0 0 66 -9 0z" fill="#3a3229" />
          <path d="M0 -66 9 0H-9z" fill="url(#fl-gold)" />
          <path d="M-66 0 0 -7 66 0 0 7z" fill="#e6ab3f" opacity="0.35" />
        </g>
        <circle r="7" fill="url(#fl-gold)" />
      </g>
    </svg>
  );
}
