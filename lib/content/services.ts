import type { ComponentType } from "react";
import {
  BookIcon,
  CompassIcon,
  MapIcon,
  ShieldCheckIcon,
  TargetIcon,
  TrendIcon,
  UsersIcon,
  type IconProps,
} from "@/components/icons";
import {
  BankIcon,
  BriefcaseIcon,
  ChatIcon,
  CodeIcon,
  GearIcon,
  GlobeIcon,
  GridIcon,
  HeartIcon,
  SearchIcon,
  StarIcon,
} from "@/components/services/serviceIcons";
import { PARTNERSHIPS_SLUG, partnershipHref, partnershipTracks } from "@/lib/content/partnerships";
import { routes } from "@/lib/site";

/** Which illustration the service card shows (see components/services/ServiceVisual). */
export type ServiceVisualKind = "people" | "checklist" | "orgTree" | "bars" | "growth";

export type Service = {
  slug: string;
  num: string;
  /** Short label for the "Jump to" chips and nav lists. */
  short: string;
  category: "Hiring" | "Learning";
  /** Gold for the core services, silver for programme-led ones (matches the design). */
  tone: "gold" | "silver";
  title: string;
  tagline: string;
  desc: string;
  /** Short chip labels (2–4 words). */
  points: [string, string, string, string];
  /** One icon per point, shown on the detail page instead of extra copy. */
  pointIcons: [Icon, Icon, Icon, Icon];
  bestFor: string;
  icon: ComponentType<IconProps>;
  visual: ServiceVisualKind;
};

type Icon = ComponentType<IconProps>;

export const services: Service[] = [
  {
    slug: "executive-search",
    num: "01",
    short: "Executive Search",
    category: "Hiring",
    tone: "gold",
    title: "Executive & Specialist Search",
    tagline: "Leadership & critical talent acquisition.",
    desc: "High-impact leadership and specialist hires for ₹12 Lakh+ roles.",
    points: ["GCCs", "Technology & SaaS", "BFSI & FinTech", "Product, Digital & Leadership"],
    pointIcons: [GlobeIcon, CodeIcon, BankIcon, BriefcaseIcon],
    bestFor: "₹12 Lakh+ leadership and specialist roles",
    icon: UsersIcon,
    visual: "people",
  },
  {
    slug: "fractional-ld-partner",
    num: "02",
    short: "Fractional L&D",
    category: "Learning",
    tone: "gold",
    title: "Fractional L&D Partner",
    tagline: "Your extended L&D partner.",
    desc: "Senior L&D leadership on demand, without a full-time team.",
    points: ["Needs Analysis", "Learning Strategy", "Competency Frameworks", "Leadership Capability"],
    pointIcons: [SearchIcon, MapIcon, GridIcon, BriefcaseIcon],
    bestFor: "Teams not ready for full-time L&D",
    icon: ShieldCheckIcon,
    visual: "checklist",
  },
  {
    slug: "learning-partnerships",
    num: "03",
    short: "Learning Partnerships",
    category: "Learning",
    tone: "gold",
    title: "Strategic Learning Partnerships",
    tagline: "Strategic, 12-month learning partnerships.",
    desc: "Year-long programmes that strengthen, or stand in for, your L&D function.",
    points: ["Operations", "Customer Service", "Leadership", "6 flagship offerings"],
    pointIcons: [GearIcon, StarIcon, BriefcaseIcon, GridIcon],
    bestFor: "Capability that lasts beyond one-off workshops",
    icon: CompassIcon,
    visual: "orgTree",
  },
  {
    slug: "signature-programmes",
    num: "04",
    short: "Signature Programmes",
    category: "Learning",
    tone: "silver",
    title: "Signature Learning Experiences",
    tagline: "Focused, high-impact interventions.",
    desc: "Experiential, one-off programmes for a specific capability gap.",
    points: ["Communication", "Leadership", "Sales & Business Development", "Teams & Critical Thinking"],
    pointIcons: [ChatIcon, BriefcaseIcon, TargetIcon, UsersIcon],
    bestFor: "A specific gap or business priority",
    icon: BookIcon,
    visual: "bars",
  },
  {
    slug: "customised-solutions",
    num: "05",
    short: "Customised Solutions",
    category: "Learning",
    tone: "silver",
    title: "Customised Learning Solutions",
    tagline: "Bespoke programmes, built around you.",
    desc: "Bespoke programmes built around your people, context and goals.",
    points: ["Your capability gaps", "Your audience", "Your business context", "Your outcomes"],
    pointIcons: [SearchIcon, UsersIcon, HeartIcon, TargetIcon],
    bestFor: "Needs a standard programme can’t cover",
    icon: TrendIcon,
    visual: "growth",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceHref = (slug: string) => `${routes.services}/${slug}`;

export type ServiceSubItem = { title: string; href: string };

/** Second-level menu entries shown under a service in the nav (keyed by service slug). */
export const serviceSubItems: Record<string, ServiceSubItem[]> = {
  [PARTNERSHIPS_SLUG]: partnershipTracks.map((t) => ({ title: t.title, href: partnershipHref(t.id) })),
};
