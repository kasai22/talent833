import Image from "next/image";
import Link from "next/link";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { Container } from "@/components/ui";
import { contact, logos, routes } from "@/lib/site";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: routes.about },
      { label: "Clients", href: routes.clients },
      { label: "Contact", href: routes.contact },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Fractional L&D Partner", href: routes.services },
      { label: "Learning Partnerships", href: routes.services },
      { label: "Executive Search", href: routes.services },
    ],
  },
  {
    heading: "Training",
    links: [
      { label: "Signature programmes", href: routes.training },
      { label: "Leadership programmes", href: routes.training },
      { label: "Customised solutions", href: routes.training },
    ],
  },
];

const headingClass = "text-xs font-bold tracking-[0.18em] text-muted uppercase";
const linkClass = "text-[15px] text-mist transition-colors hover:text-gold";

export function Footer() {
  return (
    <footer className="border-t border-white/12 bg-black">
      <Container className="flex flex-col gap-12 pt-14 pb-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 xl:grid-cols-[2fr_1fr_1fr_1fr_1.3fr] xl:gap-10">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-3 xl:col-span-1">
            <Image
              src={logos.full.src}
              width={logos.full.width}
              height={logos.full.height}
              alt="Talent833 Partners, Executive Hiring & Learning Solutions"
              className="h-auto w-40"
            />
            <p className="max-w-[320px] text-[15px] leading-relaxed text-muted">
              Executive hiring and learning solutions for organisations that want to build capability and hire
              high-impact talent.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="flex flex-col gap-3">
              <span className={headingClass}>{col.heading}</span>
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              ))}
            </nav>
          ))}

          <address className="col-span-2 flex flex-col gap-3 text-[15px] text-mist not-italic md:col-span-1">
            <span className={headingClass}>Reach us</span>
            <span className="flex items-center gap-2.5">
              <PhoneIcon size={18} className="shrink-0 text-muted" />
              {contact.phone}
            </span>
            <span className="flex items-center gap-2.5">
              <MailIcon size={18} className="shrink-0 text-muted" />
              {contact.email}
            </span>
            <span className="flex items-center gap-2.5">
              <PinIcon size={18} className="shrink-0 text-muted" />
              {contact.location}
            </span>
          </address>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/12 pt-6 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
          <span>© [Year] Talent833 Partners. All rights reserved.</span>
          <span className="flex gap-6">
            <a href="#privacy" className="transition-colors hover:text-gold">
              Privacy policy
            </a>
            <a href="#terms" className="transition-colors hover:text-gold">
              Terms
            </a>
            <a href={contact.linkedin} className="transition-colors hover:text-gold">
              LinkedIn
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
