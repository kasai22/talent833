import type { ComponentType } from "react";
import {
  BookIcon,
  CompassIcon,
  ShieldCheckIcon,
  TrendIcon,
  UsersIcon,
  type IconProps,
} from "@/components/icons";
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
  points: [string, string, string, string];
  bestFor: string;
  icon: ComponentType<IconProps>;
  visual: ServiceVisualKind;
};

export const services: Service[] = [
  {
    slug: "executive-search",
    num: "01",
    short: "Executive Search",
    category: "Hiring",
    tone: "gold",
    title: "Executive & Specialist Search",
    tagline: "Leadership & critical talent acquisition.",
    desc: "We help organisations attract, engage and hire high-impact talent for ₹12 Lakh+ roles across leadership and specialist positions.",
    points: ["GCCs", "Technology & SaaS", "BFSI & FinTech", "Product & Digital, Leadership & Functional Roles"],
    bestFor: "Hiring for ₹12 Lakh+ leadership and specialist roles",
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
    tagline: "Your outsourced L&D leadership.",
    desc: "Experienced L&D leadership, on demand — to build learning strategy, strengthen people capabilities and drive performance, without the overhead of a full-time L&D function.",
    points: [
      "Training Needs Analysis",
      "Learning Strategy & Standardisation",
      "Competency Frameworks",
      "Train-the-Trainer, Content Design & KPIs",
    ],
    bestFor: "Organisations not ready for a full-time L&D team",
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
    tagline: "Your extended L&D capability.",
    desc: "Structured, year-long learning journeys that strengthen workforce capabilities, develop leaders and improve organisational performance.",
    points: [
      "A 12-month learning roadmap",
      "Operational, Customer & Leadership Excellence",
      "Retail, Healthcare & Hospitality journeys",
      "Quarterly progress and impact reviews",
    ],
    bestFor: "Building capability that lasts, beyond one-off workshops",
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
    desc: "Engaging, experiential programmes — standalone, customised and delivered on a one-off basis for your specific capability gaps and business priorities.",
    points: [
      "Communication & Workplace Effectiveness",
      "Leadership Signature Programmes",
      "Sales & Business Development",
      "Team Effectiveness & Critical Thinking",
    ],
    bestFor: "Specific capability gaps and business priorities",
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
    desc: "Bespoke learning programmes designed around organisational needs, capability gaps and specific business objectives — tailored to the audience, context and outcomes you want.",
    points: [
      "Built around your capability gaps",
      "Tailored to the audience",
      "Shaped by your business context",
      "Designed for your outcomes",
    ],
    bestFor: "Needs that a standard programme can’t cover",
    icon: TrendIcon,
    visual: "growth",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceHref = (slug: string) => `${routes.services}/${slug}`;
