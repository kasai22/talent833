import { Container, Eyebrow, SectionTitle } from "@/components/ui";
import { steps } from "@/lib/content/home";

export function HowWeWork() {
  return (
    <section aria-labelledby="how-title" className="py-14 md:py-20 xl:pt-[90px]">
      <Container className="flex flex-col gap-10 xl:gap-14">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>How we work</Eyebrow>
          <SectionTitle id="how-title">A structured cycle, built around your business.</SectionTitle>
        </div>

        <div className="relative">
          {/* Connector: vertical dashed line on mobile, animated horizontal on desktop */}
          <span
            aria-hidden="true"
            className="absolute top-5 bottom-5 left-[21px] border-l-[1.5px] border-dashed border-gold/60 lg:hidden"
          />
          <svg
            aria-hidden="true"
            className="absolute inset-x-8 top-[38px] hidden h-px overflow-visible lg:block"
            width="100%"
            height="2"
            preserveAspectRatio="none"
          >
            <line
              className="animate-dash"
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#E6AB3F"
              strokeOpacity={0.6}
              strokeWidth={1.5}
              strokeDasharray="5 7"
            />
          </svg>

          <ol className="relative grid gap-6 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[44px_1fr] items-start gap-x-3.5 lg:flex lg:flex-col lg:gap-3.5 lg:pt-2">
                <span className="relative z-10 flex size-11 items-center justify-center rounded-full border border-white/20 bg-ink text-gold lg:size-16">
                  <s.icon size={26} className="size-5 lg:size-[26px]" />
                </span>
                <div className="flex flex-col gap-1.5 lg:contents">
                  <span className="text-xs font-bold tracking-[0.16em] text-muted lg:text-[13px]">
                    STEP {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-medium lg:text-[26px]">{s.title}</h3>
                  <p className="max-w-[260px] text-sm leading-relaxed text-mist lg:text-[15px]">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
