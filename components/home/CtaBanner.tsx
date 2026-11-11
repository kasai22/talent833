import { PhoneIcon } from "@/components/icons";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { WireGlobe } from "@/components/site/WireGlobe";
import { Container, Eyebrow } from "@/components/ui";
import { contact } from "@/lib/site";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="py-14 md:py-20 xl:py-[60px]">
      <Container>
        <div className="relative isolate flex min-h-[300px] items-center overflow-hidden rounded-[22px] border border-white/12 bg-surface px-6 py-12 md:rounded-[28px] md:px-16 xl:h-[300px] xl:py-0">
          <WireGlobe className="absolute -right-[260px] -bottom-[260px] -z-10 size-[460px] opacity-60 md:-right-[180px] md:-bottom-[200px] md:opacity-80 xl:top-[-60px] xl:right-auto xl:bottom-auto xl:left-[calc(100%-428px)] xl:size-[560px] xl:opacity-90" />
          <div className="relative flex max-w-[640px] flex-col gap-[22px]">
            <Eyebrow>Let’s talk</Eyebrow>
            <h2
              id="cta-title"
              className="font-display text-[32px] leading-[1.05] font-medium tracking-[-0.025em] text-balance md:text-[46px]"
            >
              Let’s build capabilities that move your business forward.
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <WhatsAppLink variant="gold" size="lg" />
              <a
                href={contact.phoneHref}
                className="flex h-[52px] items-center gap-2 px-3 font-semibold text-mist transition-colors hover:text-gold"
              >
                <PhoneIcon size={18} /> {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
