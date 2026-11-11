import Link from "next/link";
import { ArrowUpRightIcon, PhoneIcon } from "@/components/icons";
import { Container, Eyebrow, PillLink } from "@/components/ui";
import { contact, routes } from "@/lib/site";

const meridianDelays = [0, -4, -8, -12, -16, -20];
const parallels = [
  { cy: 55, rx: 130, ry: 21 },
  { cy: 150, rx: 225, ry: 36 },
  { cy: 280, rx: 260, ry: 42 },
  { cy: 410, rx: 225, ry: 36 },
  { cy: 505, rx: 130, ry: 21 },
];

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="py-14 md:py-20 xl:py-[60px]">
      <Container>
        <div className="relative isolate flex min-h-[300px] items-center overflow-hidden rounded-[22px] border border-white/12 bg-surface px-6 py-12 md:rounded-[28px] md:px-16 xl:h-[300px] xl:py-0">
          <WireGlobe />
          <div className="relative flex max-w-[640px] flex-col gap-[22px]">
            <Eyebrow>Let’s talk</Eyebrow>
            <h2
              id="cta-title"
              className="font-display text-[32px] leading-[1.05] font-medium tracking-[-0.025em] text-balance md:text-[46px]"
            >
              Let’s build capabilities that move your business forward.
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <PillLink href={routes.contact} variant="gold" size="lg">
                Book a consultation <ArrowUpRightIcon size={14} />
              </PillLink>
              <Link
                href={routes.contact}
                className="flex h-[52px] items-center gap-2 px-3 font-semibold text-mist transition-colors hover:text-gold"
              >
                <PhoneIcon size={18} /> {contact.phone}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Wireframe globe with spinning meridians, tucked into the banner's right edge. */
function WireGlobe() {
  return (
    <svg
      viewBox="0 0 560 560"
      aria-hidden="true"
      focusable="false"
      className="absolute -right-[260px] -bottom-[260px] -z-10 size-[460px] opacity-60 md:-right-[180px] md:-bottom-[200px] md:opacity-80 xl:top-[-60px] xl:right-auto xl:bottom-auto xl:left-[calc(100%-428px)] xl:size-[560px] xl:opacity-90"
    >
      <defs>
        <radialGradient id="cta-globe-fill" cx="36%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#3A3A3A" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#161616" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#060606" stopOpacity="0.2" />
        </radialGradient>
        <clipPath id="cta-globe-clip">
          <circle cx="280" cy="280" r="260" />
        </clipPath>
      </defs>
      <circle cx="280" cy="280" r="274" fill="none" stroke="#C9C9C6" strokeOpacity={0.12} strokeWidth={10} />
      <circle cx="280" cy="280" r="260" fill="url(#cta-globe-fill)" />
      <g clipPath="url(#cta-globe-clip)" fill="none" stroke="#FFFFFF" strokeOpacity={0.22}>
        {parallels.map((p) => (
          <ellipse key={p.cy} cx="280" cy={p.cy} rx={p.rx} ry={p.ry} />
        ))}
        {meridianDelays.map((d) => (
          <ellipse
            key={d}
            className="animate-meridian svg-origin-center"
            style={{ animationDelay: `${d}s` }}
            cx="280"
            cy="280"
            rx="260"
            ry="260"
          />
        ))}
      </g>
      <circle cx="280" cy="280" r="260" fill="none" stroke="#FFFFFF" strokeOpacity={0.35} />
      <path
        className="animate-dash"
        d="M 124 306 Q 280 46 423 228"
        fill="none"
        stroke="#E6AB3F"
        strokeWidth={1.6}
        strokeDasharray="5 6"
      />
      <circle cx="124" cy="306" r="4" fill="#FFFFFF" />
      <circle cx="423" cy="228" r="4" fill="#FFFFFF" />
    </svg>
  );
}
