import { MailIcon, PhoneIcon } from "@/components/icons";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { WireGlobe } from "@/components/site/WireGlobe";
import { Container, Eyebrow } from "@/components/ui";
import { contact } from "@/lib/site";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="py-14 md:py-20 xl:py-[60px]">
      <Container>
        <div className="relative isolate flex min-h-[300px] items-center overflow-hidden rounded-[22px] border border-white/12 bg-surface px-6 py-12 md:rounded-[28px] md:px-16 xl:h-[300px] xl:py-0">
          <WireGlobe logoClassName="hidden xl:inline" className="absolute -right-[260px] -bottom-[260px] -z-10 size-[460px] opacity-60 md:-right-[180px] md:-bottom-[200px] md:opacity-80 xl:top-[-130px] xl:right-auto xl:bottom-auto xl:left-[calc(100%-428px)] xl:size-[560px] xl:opacity-90" />
          <div className="relative flex max-w-[860px] flex-col gap-[22px]">
            <Eyebrow>Let’s talk</Eyebrow>
            <h2
              id="cta-title"
              className="font-display text-[32px] leading-[1.05] font-medium tracking-[-0.025em] text-balance md:text-[46px]"
            >
              Turning <span className="text-gold">people potential</span> into{" "}
              <span className="text-gold">business performance.</span>
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <WhatsAppLink variant="gold" size="lg" />
              <span aria-hidden className="hidden h-8 w-px bg-white/20 sm:block" />
              <a
                href={contact.phoneHref}
                className="flex h-[52px] items-center gap-2 px-3 font-semibold text-mist transition-colors hover:text-gold"
              >
                <PhoneIcon size={18} /> {contact.phone}
              </a>
              <span aria-hidden className="hidden h-8 w-px bg-white/20 sm:block" />
              <a
                href={contact.emailHref}
                className="flex h-[52px] items-center gap-2 px-3 font-semibold text-mist transition-colors hover:text-gold"
              >
                <MailIcon size={18} className="text-gold" /> {contact.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
