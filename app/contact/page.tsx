import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ArrowUpRightIcon, MailIcon, PhoneIcon, PinIcon, UsersIcon, WhatsAppIcon } from "@/components/icons";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { Container, Eyebrow, cn, surface } from "@/components/ui";
import { contact, routes, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Talent833 Partners about executive search, learning partnerships and leadership programmes. Reach us on WhatsApp, phone or email.",
};

type Channel = { label: string; value: string; href: string; icon: ReactNode; external?: boolean };

const channels: Channel[] = [
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: whatsappHref(),
    icon: <WhatsAppIcon size={20} />,
    external: true,
  },
  { label: "Call", value: contact.phone, href: contact.phoneHref, icon: <PhoneIcon size={20} /> },
  { label: "Email", value: contact.email, href: contact.emailHref, icon: <MailIcon size={20} /> },
  {
    label: "LinkedIn",
    value: "Talent 833 Partners",
    href: contact.linkedin,
    icon: <UsersIcon size={20} />,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "Contact" }]}
          eyebrow="Contact us"
          title={
            <>
              Let’s build capabilities that <span className="text-gold">move your business forward.</span>
            </>
          }
          lede="Whether you're hiring a leader, planning a year of learning or looking for a single programme, tell us what you need. We usually respond within one working day."
        >
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <WhatsAppLink variant="gold" size="lg" />
            <a
              href={contact.phoneHref}
              className="flex h-[52px] items-center gap-2 px-3 font-semibold text-mist transition-colors hover:text-gold"
            >
              <PhoneIcon size={18} /> {contact.phone}
            </a>
          </div>
        </PageHero>

        <section aria-label="Get in touch" className="py-14 md:py-20 xl:py-[100px]">
          <Container className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 xl:gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-[18px]">
                <Eyebrow>Reach us directly</Eyebrow>
                <p className="text-[15px] leading-[1.65] text-mist md:text-[17px]">
                  Pick whichever channel suits you. WhatsApp is the fastest way to get a reply.
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
                      className={cn(
                        surface,
                        "group flex items-center gap-4 rounded-[18px] p-4 transition hover:border-gold/45 md:p-5",
                      )}
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-gold/12 text-gold">
                        {c.icon}
                      </span>
                      <span className="flex min-w-0 grow flex-col">
                        <span className="text-xs font-bold tracking-[0.16em] text-muted uppercase">{c.label}</span>
                        <span className="truncate text-[15px] font-medium text-cream transition-colors group-hover:text-gold md:text-base">
                          {c.value}
                        </span>
                      </span>
                      <ArrowUpRightIcon size={16} className="shrink-0 text-muted group-hover:text-gold" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className={cn(surface, "flex flex-col gap-4 rounded-[18px] p-5 md:p-6")}>
                <span className="flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] text-muted uppercase">
                  <PinIcon size={16} className="text-gold" /> Where we work
                </span>
                <ul className="flex flex-wrap gap-2">
                  {contact.locations.map((city) => (
                    <li
                      key={city}
                      className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-sm text-mist"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ContactForm />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
