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

export const primaryNav = [
  { label: "About", href: routes.about },
  { label: "Services", href: routes.services },
  { label: "Training", href: routes.training },
  { label: "Clients", href: routes.clients },
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
  phone: "[Phone number]",
  email: "[Email address]",
  location: "[City, State]",
  linkedin: "#linkedin",
} as const;
