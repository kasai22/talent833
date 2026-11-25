/**
 * Site-wide config: routes, brand assets and contact placeholders.
 * Logo files live in /public — swap the paths here if your filenames differ.
 */

export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  /** Training programmes live on the Corporate Training service page (there is no separate /training page;
   *  /training redirects there — see next.config.ts). */
  training: "/services/signature-programmes",
  contact: "/contact",
} as const;

/** Nav items; Services opens a dropdown of the featured services (see Header). */
export const primaryNav = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Services", href: routes.services },
  { label: "Contact", href: routes.contact },
] as const;

/** width/height are the intrinsic size of each file (used for aspect ratio). */
export const logos = {
  /** Mountain mark only (paths copied from heroSectionLogo.svg) — header. Favicon app/icon.svg uses the same paths. */
  mark: { src: "/logoMark.svg", width: 527, height: 433 },
  /** Final logo: full lockup (mark + "TALENT833 HR SERVICES"; tagline is HTML in Hero.tsx) — hero and footer. */
  full: { src: "/heroSectionLogo.svg", width: 984, height: 687 },
} as const;

export const contact = {
  /** Display format. */
  phone: "+91 97011 13833",
  phoneHref: "tel:+919701113833",
  email: "info@talent833.com",
  emailHref: "mailto:info@talent833.com",
  /** Cities we operate in. */
  locations: ["Vizag", "Hyderabad", "Kolkata", "Chennai", "Bengaluru", "Mumbai", "Bhubaneswar"],
  linkedin: "https://www.linkedin.com/company/talent-833-partners/",
  /** WhatsApp number in international format, digits only (country code first, no + or spaces). */
  whatsapp: "919701113833",
} as const;

/** Pre-filled WhatsApp message for a service enquiry. */
export const enquiryMessage = (service: string) =>
  `Hi Talent833 Partners, I'd like to know more about ${service}.`;

/** Opens a WhatsApp chat with the message pre-filled. */
export const whatsappHref = (
  message = "Hi Talent833 Partners, I'd like to connect.",
) => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
