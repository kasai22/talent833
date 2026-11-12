import type { ComponentType } from "react";
import {
  BarsIcon,
  BookIcon,
  CalendarIcon,
  CompassIcon,
  MapIcon,
  ShieldCheckIcon,
  TargetIcon,
  TrendIcon,
  UsersIcon,
  type IconProps,
} from "@/components/icons";
import { serviceHref } from "@/lib/content/services";
import { routes } from "@/lib/site";

type Icon = ComponentType<IconProps>;

/* ---------------------------------------------------------------
   Hero — five floating service cards + their detail dialogs
   --------------------------------------------------------------- */

export type HeroService = {
  num: string;
  title: string;
  tag: string;
  desc: string;
  points: [string, string, string, string];
  icon: Icon;
  /** Detail page under /services. */
  slug: string;
};

export const heroServices: HeroService[] = [
  {
    num: "01",
    title: "Fractional L&D Partner",
    tag: "Your extended L&D partner",
    desc: "Get experienced L&D leadership, on demand — to build learning strategy, strengthen people capabilities and drive performance, without the overhead of a full-time L&D function.",
    points: [
      "Training Needs Analysis",
      "Learning Strategy & Standardisation",
      "Competency Frameworks",
      "Leadership & Managerial Capability",
    ],
    icon: ShieldCheckIcon,
    slug: "fractional-ld-partner",
  },
  {
    num: "02",
    title: "Signature Learning Experiences",
    tag: "Focused, high-impact interventions",
    desc: "Engaging, experiential programmes — standalone, customised and delivered on a one-off basis for your specific capability gaps and business priorities.",
    points: [
      "Communication & Workplace Effectiveness",
      "Leadership Signature Programmes",
      "Sales, team and problem-solving programmes",
      "Customised Learning Solutions",
    ],
    icon: BookIcon,
    slug: "signature-programmes",
  },
  {
    num: "03",
    title: "Strategic Learning Partnerships",
    tag: "Strategic, 12-month learning partnerships",
    desc: "We partner with organisations to strengthen existing L&D functions or build structured, long-term learning engagements where dedicated L&D capabilities are limited.",
    points: [
      "Operational Excellence",
      "Customer Service Excellence",
      "Leadership Excellence",
      "Six flagship offerings",
    ],
    icon: TrendIcon,
    slug: "learning-partnerships",
  },
  {
    num: "04",
    title: "Executive & Specialist Search",
    tag: "Leadership & critical talent acquisition",
    desc: "We help organisations attract, engage and hire high-impact talent for ₹12 Lakh+ roles across leadership and specialist positions.",
    points: ["GCCs", "Technology & SaaS", "BFSI & FinTech", "Product & Digital, Leadership & Functional Roles"],
    icon: UsersIcon,
    slug: "executive-search",
  },
  {
    num: "05",
    title: "Customised Learning Solutions",
    tag: "Bespoke programmes, built around you",
    desc: "Bespoke learning programmes designed around organisational needs, capability gaps and specific business objectives — tailored to the audience, context and outcomes you want to achieve.",
    points: [
      "Built around your capability gaps",
      "Tailored to the audience",
      "Shaped by your business context",
      "Designed for your outcomes",
    ],
    icon: CompassIcon,
    slug: "customised-solutions",
  },
];

/* ---------------------------------------------------------------
   Who we are
   --------------------------------------------------------------- */

export const stats = [
  { value: "12-month", label: "learning partnerships" },
  { value: "18", label: "signature programmes" },
  { value: "₹12L+", label: "leadership & specialist roles" },
  { value: "3", label: "capability pillars" },
];

/* ---------------------------------------------------------------
   What we do — two practices
   --------------------------------------------------------------- */

export type Practice = {
  audience: string;
  title: string;
  body: string;
  tone: "gold" | "silver";
  cta: { label: string; href: string };
  items: { title: string; sub: string; icon: Icon; href?: string }[];
};

export const practices: Practice[] = [
  {
    audience: "For organisations",
    title: "Services",
    body: "L&D leadership, year-long learning partnerships and executive search for your organisation.",
    tone: "gold",
    cta: { label: "Explore services", href: routes.services },
    items: [
      { title: "Fractional L&D Partner", sub: "Your extended L&D partner", icon: UsersIcon, href: serviceHref("fractional-ld-partner") },
      { title: "Strategic Learning Partnerships", sub: "Year-long learning journeys", icon: ShieldCheckIcon, href: serviceHref("learning-partnerships") },
      { title: "Executive & Specialist Search", sub: "₹12 Lakh+ leadership and specialist roles", icon: CompassIcon, href: serviceHref("executive-search") },
    ],
  },
  {
    audience: "For teams",
    title: "Training",
    body: "Experiential programmes that build practical skills and lasting impact.",
    tone: "silver",
    cta: { label: "Explore training", href: routes.training },
    items: [
      { title: "Communication & Workplace Effectiveness", sub: "10 signature programmes", icon: BookIcon },
      { title: "Leadership Signature Programmes", sub: "8 programmes for leaders and managers", icon: TrendIcon },
      { title: "Customised Learning Solutions", sub: "Bespoke programmes, built around you", icon: CalendarIcon },
    ],
  },
];

/* ---------------------------------------------------------------
   How we work
   --------------------------------------------------------------- */

export const steps: { title: string; body: string; icon: Icon }[] = [
  {
    title: "Discover & Diagnose",
    body: "Business priorities and capability gaps, through Training Needs Analysis.",
    icon: TargetIcon,
  },
  { title: "Design & Plan", body: "A customised annual roadmap, calendar and learning pathways.", icon: MapIcon },
  {
    title: "Deliver & Develop",
    body: "Programmes, workshops and leadership journeys that build skills.",
    icon: UsersIcon,
  },
  { title: "Reinforce & Measure", body: "Reinforcement, follow-ups and periodic impact reviews.", icon: BarsIcon },
];

/* ---------------------------------------------------------------
   Signature programmes
   --------------------------------------------------------------- */

export const programmes = [
  {
    badge: "10 programmes",
    kind: "Standalone",
    title: "Communication programmes",
    body: "Business communication, stakeholder management, executive presence and more.",
    footer: "Standalone · Customised",
  },
  {
    badge: "8 programmes",
    kind: "Standalone",
    title: "Leadership programmes",
    body: "Emotional intelligence, strategic thinking, systems thinking and more.",
    footer: "Standalone · Customised",
  },
  {
    badge: "Bespoke",
    kind: "Customised",
    title: "Customised solutions",
    body: "Programmes designed around your audience, context and outcomes.",
    footer: "Built around you",
  },
];

/* ---------------------------------------------------------------
   Social proof (placeholders from the design)
   --------------------------------------------------------------- */

export const testimonial = {
  quote:
    "[Client testimonial: one or two lines about the difference working with the team made to their hiring or training.]",
  name: "[Client name]",
  role: "[Role, Company]",
};

export const clientLogoCount = 6;
