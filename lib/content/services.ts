import type { StaticImageData } from "next/image";
import type { ComponentType } from "react";
import capabilityImg from "@/public/services/capability-building.jpg";
import fractionalImg from "@/public/services/fractional-ld.jpg";
import signatureImg from "@/public/services/signature-programmes.jpg";
import talentImg from "@/public/services/talent-acquisition.jpg";
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
  BriefcaseIcon,
  ChatIcon,
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
  /** Card heading in two parts: plain, then gold (e.g. "Capability" / "Building"). Leave the first empty for a gold-only title. */
  headline: [string, string];
  /** One-line strapline under the card heading. */
  strap: string;
  /** Card background photo (subject on the right; the left is darkened for text). */
  image?: StaticImageData;
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
    slug: "signature-programmes",
    num: "01",
    short: "Corporate Training",
    category: "Learning",
    tone: "gold",
    title: "Corporate Training",
    headline: ["Corporate", "Training"],
    strap: "Purpose-designed learning experiences that create impact.",
    image: signatureImg,
    tagline: "Focused, high-impact interventions.",
    desc: "Engaging, experiential programmes — standalone, customised and delivered on a one-off basis for your specific capability gaps and business priorities.",
    points: ["Communication & Workplace Effectiveness", "Leadership Signature Programmes", "Sales, Teams & Problem-solving", "Customised Learning Solutions"],
    pointIcons: [ChatIcon, BriefcaseIcon, TargetIcon, UsersIcon],
    bestFor: "A specific gap or business priority",
    icon: BookIcon,
    visual: "bars",
  },
  {
    slug: "fractional-ld-partner",
    num: "02",
    short: "Fractional L&D",
    category: "Learning",
    tone: "gold",
    title: "Fractional Learning & Development",
    headline: ["Fractional", "Learning & Development"],
    strap: "Strategic L&D expertise, on your terms.",
    image: fractionalImg,
    tagline: "Your extended L&D partner.",
    desc: "Get experienced L&D leadership, on demand — to build learning strategy, strengthen people capabilities and drive performance, without the overhead of a full-time L&D function.",
    points: ["Training Needs Analysis", "Learning Strategy & Standardisation", "Competency Frameworks", "Leadership & Managerial Capability"],
    pointIcons: [SearchIcon, MapIcon, GridIcon, BriefcaseIcon],
    bestFor: "Teams not ready for full-time L&D",
    icon: ShieldCheckIcon,
    visual: "checklist",
  },
  {
    slug: "learning-partnerships",
    num: "03",
    short: "Capability Building",
    category: "Learning",
    tone: "gold",
    title: "Capability Building",
    headline: ["Capability", "Building"],
    strap: "Build skills. Strengthen performance.",
    image: capabilityImg,
    tagline: "Strategic, 12-month learning partnerships.",
    desc: "We partner with organisations to strengthen existing L&D functions or build structured, long-term learning engagements where dedicated L&D capabilities are limited.",
    points: ["Operational Excellence", "Customer Service Excellence", "Leadership Excellence", "Six flagship offerings"],
    pointIcons: [GearIcon, StarIcon, BriefcaseIcon, GridIcon],
    bestFor: "Capability that lasts beyond one-off workshops",
    icon: CompassIcon,
    visual: "orgTree",
  },
  {
    slug: "executive-search",
    num: "04",
    short: "Hiring",
    category: "Hiring",
    tone: "gold",
    title: "Hiring",
    headline: ["", "Hiring"],
    strap: "From executive search to bulk hiring.",
    image: talentImg,
    tagline: "The right talent, at every level.",
    desc: "We help organisations attract, engage and hire the right people — from leadership and specialist roles to high-volume hiring — across GCCs, Technology & SaaS, BFSI & FinTech, and Product & Digital.",
    points: ["Executive & Leadership Hiring", "Specialist & Critical Roles", "Bulk & Volume Hiring", "GCCs, Tech, BFSI & Digital"],
    pointIcons: [BriefcaseIcon, StarIcon, UsersIcon, GlobeIcon],
    bestFor: "Leadership, specialist and volume roles",
    icon: UsersIcon,
    visual: "people",
  },
  {
    slug: "customised-solutions",
    num: "05",
    short: "Customised Solutions",
    category: "Learning",
    tone: "silver",
    title: "Customised Learning Solutions",
    headline: ["Customised", "Learning Solutions"],
    strap: "Bespoke programmes, built around you.",
    tagline: "Bespoke programmes, built around you.",
    desc: "Bespoke learning programmes designed around organisational needs, capability gaps and specific business objectives — tailored to the audience, context and outcomes you want to achieve.",
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
