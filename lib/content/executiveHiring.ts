/**
 * Executive Hiring page (/services/hiring/executive-hiring) — bespoke layout, see components/services/ExecutiveHiring.
 * From the source document: eyebrow, title, lede, cta, solution titles, process step titles and closing.
 * Draft copy (review before launch): every `body`, heroCards, levels, difference and sectors.
 */
import type { ComponentType } from "react";
import { CalendarIcon, HandshakeIcon, TargetIcon, UsersIcon, type IconProps } from "@/components/icons";
import {
  BankIcon,
  ClipboardIcon,
  CodeIcon,
  GlobeIcon,
  IdBadgeIcon,
  RocketIcon,
  SearchIcon,
  ShieldStarIcon,
} from "@/components/services/serviceIcons";

type Icon = ComponentType<IconProps>;

export const executiveHiring = {
  eyebrow: "Executive Hiring",
  /** One line each. */
  title: ["The Right Leadership", "Talent. Carefully Curated.", "Strategically Aligned."],
  lede: "Finding exceptional talent for leadership, managerial and specialist roles.",
  cta: "Discuss Your Hiring Need",
  secondaryCta: "Our process",

  /** Cards floating over the hero scene. */
  heroCards: {
    shortlist: { label: "Curated shortlist", note: "Assessed for fit & leadership alignment" },
    confidential: { label: "Confidential search", note: "Discreet at every stage" },
  },

  solutions: {
    title: "Our Hiring Solutions",
    items: [
      {
        title: "Executive Search",
        body: "A focused search for the leaders who will shape your next chapter.",
        art: "chess",
      },
      {
        title: "Leadership Hiring",
        body: "Leaders who can build, guide and grow high-performing teams.",
        art: "lead",
      },
      {
        title: "Mid & Senior-Level Hiring",
        body: "Experienced managers who bring depth and steady delivery.",
        art: "ladder",
      },
      {
        title: "Confidential & Specialist Hiring",
        body: "Discreet searches and hard-to-find expertise, handled with care.",
        art: "sealed",
      },
    ] satisfies { title: string; body: string; art: "chess" | "lead" | "ladder" | "sealed" }[],
  },

  levels: {
    eyebrow: "Roles we hire for",
    title: "Leadership talent at every level",
    /** Top of the pyramid first. */
    items: [
      { title: "CXO & board-level", body: "CEO, CFO, CHRO, CTO and country heads — the leaders who set direction." },
      { title: "VP, Director & function heads", body: "Senior leaders who turn strategy into results across a function." },
      { title: "Senior & mid managers", body: "Managers who lead teams and keep delivery on track." },
    ],
  },

  process: {
    title: "Our Hiring Process",
    intro: "A wide, targeted search — narrowed with care to the one leader who fits.",
    steps: [
      { title: "Understand", body: "Your business, culture and the role’s real mandate.", icon: SearchIcon },
      { title: "Source", body: "A targeted search across networks and markets.", icon: UsersIcon },
      { title: "Assess", body: "Structured evaluation of capability and leadership.", icon: ClipboardIcon },
      { title: "Shortlist", body: "A curated shortlist — not a stack of CVs.", icon: IdBadgeIcon },
      { title: "Interview", body: "Meetings arranged around your leadership team.", icon: CalendarIcon },
      { title: "Select", body: "Offer support and closure, handled with care.", icon: HandshakeIcon },
      { title: "Onboard", body: "Follow-through until your new leader settles in.", icon: RocketIcon },
    ] satisfies { title: string; body: string; icon: Icon }[],
  },

  difference: {
    eyebrow: "Why work with us",
    title: "A search built on discretion and depth",
    body: "Senior hires shape culture, strategy and results for years. We treat every search with the care that deserves.",
    points: [
      { title: "Confidential by design", body: "Discreet outreach that protects your plans and your candidates.", icon: ShieldStarIcon },
      { title: "Assessed, not just screened", body: "Every shortlisted leader is evaluated for capability and fit.", icon: ClipboardIcon },
      { title: "Aligned to your strategy", body: "We hire for where your business is going, not only the role today.", icon: TargetIcon },
      { title: "Built for the long term", body: "We stay involved after the offer, so the hire lasts.", icon: HandshakeIcon },
    ] satisfies { title: string; body: string; icon: Icon }[],
  },

  sectors: {
    title: "Sectors we hire for",
    items: [
      { title: "GCCs", icon: GlobeIcon },
      { title: "Technology & SaaS", icon: CodeIcon },
      { title: "BFSI & FinTech", icon: BankIcon },
      { title: "Product & Digital", icon: RocketIcon },
    ] satisfies { title: string; icon: Icon }[],
  },

  closing: {
    title: ["The right talent. The right fit.", "The right time."],
    cta: "Start a Conversation",
  },
};
