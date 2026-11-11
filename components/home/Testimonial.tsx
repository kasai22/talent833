import { Container } from "@/components/ui";
import { clientLogoCount, testimonial } from "@/lib/content/home";

export function Testimonial() {
  return (
    <section aria-label="What clients say" className="py-14 md:py-20 xl:pt-[90px]">
      <Container className="flex flex-col gap-10 xl:gap-12">
        <figure className="grid gap-4 rounded-[22px] border border-white/12 bg-surface p-6 md:grid-cols-[80px_1fr] md:gap-8 md:rounded-[28px] md:p-12 xl:grid-cols-[120px_1fr] xl:px-16 xl:py-14">
          <span
            aria-hidden="true"
            className="h-12 font-display text-[96px] leading-[0.8] text-gold md:h-auto md:text-[120px] xl:text-[160px]"
          >
            “
          </span>
          <div className="flex flex-col gap-7">
            <blockquote className="font-display text-[22px] leading-[1.3] tracking-[-0.015em] md:text-[28px] xl:text-[34px]">
              <p>{testimonial.quote}</p>
            </blockquote>
            <figcaption className="flex items-center gap-3.5">
              <span
                aria-hidden="true"
                className="size-[52px] shrink-0 rounded-full bg-[linear-gradient(135deg,#2E2E2E,#8A8A8A)]"
              />
              <span className="flex flex-col">
                <span className="font-bold">{testimonial.name}</span>
                <span className="text-sm text-muted">{testimonial.role}</span>
              </span>
            </figcaption>
          </div>
        </figure>

        <div className="flex flex-col gap-[18px]">
          <h2 className="text-xs font-bold tracking-[0.2em] text-muted uppercase">Trusted by teams at</h2>
          <ul className="grid grid-cols-3 gap-2 md:gap-3.5 lg:grid-cols-6">
            {Array.from({ length: clientLogoCount }, (_, i) => (
              <li
                key={i}
                className="flex h-12 items-center justify-center rounded-xl border border-dashed border-white/18 text-[11px] text-muted md:h-16 md:rounded-[14px] md:text-[13px]"
              >
                [Client logo]
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
