/**
 * Site-wide config: routes, brand assets and contact placeholders.
 * Logo files live in /public — swap the paths here if your filenames differ.
 */

export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  training: "/training",
  clients: "/clients",
  contact: "/contact",
} as const;

/** Nav items; Services opens a dropdown of the featured services (see Header). */
export const primaryNav = [
  { label: "About", href: routes.about },
  { label: "Services", href: routes.services },
  { label: "Contact", href: routes.contact },
] as const;

/** width/height are the intrinsic size of each file (used for aspect ratio). */
export const logos = {
  /** Triangle mark only — header. */
  mark: { src: "/navbarLogo.png", width: 118, height: 92 },
  /** Full lockup (mark + "TALENT 833 PARTNERS") — hero and footer. */
  full: { src: "/heroSectionLogo.png", width: 720, height: 526 },
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
