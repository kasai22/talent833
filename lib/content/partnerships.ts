/**
 * The six Strategic Learning Partnership offerings — each has its own page at
 * /services/learning-partnerships/[track].
 * Condensed from /content/Strategic, 12-month learning partnerships.docx: one-line intros,
 * chip-length focus points, icons in place of extra copy.
 */
import type { ComponentType } from "react";
import { UsersIcon, type IconProps } from "@/components/icons";
import {
  BellIcon,
  BriefcaseIcon,
  CapIcon,
  CartIcon,
  ChatIcon,
  CrossIcon,
  GearIcon,
  HeartIcon,
  MicIcon,
  PenIcon,
  SearchIcon,
  StarIcon,
} from "@/components/services/serviceIcons";
import { routes } from "@/lib/site";

export const PARTNERSHIPS_SLUG = "learning-partnerships";

export type DetailItem = {
  title: string;
  body?: string;
  /** Short chip labels. */
  bullets?: string[];
  /** Shown in place of the card number. */
  icon?: ComponentType<IconProps>;
};

type TrackBase = {
  id: string;
  num: string;
  /** Short label for breadcrumbs and nav. */
  short: string;
  title: string;
  icon: ComponentType<IconProps>;
};

/** Offering 01 — the service-industry "case" flow. */
export type FlowTrack = TrackBase & {
  kind: "flow";
  kicker: string;
  reality: { label: string; items: { title: string; body: string }[] };
  need: { label: string; title: string; points: string[] };
  partnership: { label: string; title: string; body: string };
  academies: { label: string; items: DetailItem[] };
  outcome: { label: string; title: string; points: string[] };
};

/** Offerings 02–06 — headline, one-line intro, focus areas and outcome. */
export type FocusTrack = TrackBase & {
  kind: "track";
  headline: string;
  kicker?: string;
  /** One sentence. */
  intro: string;
  focusTitle: string;
  /** What the focus items are called in the hub count; defaults to "focus areas". */
  focusUnit?: string;
  focus: DetailItem[];
  outcome?: string;
  /** Short labels for the outcome bar chart, rising left to right. */
  outcomePoints?: string[];
  closing?: string;
  /** Before → after comparison drawn as a bridge (campus-to-corporate only). */
  bridge?: { title: string; from: { label: string; points: string[] }; to: { label: string; points: string[] } };
};

export type PartnershipTrack = FlowTrack | FocusTrack;

export const partnershipHref = (id: string) => `${routes.services}/${PARTNERSHIPS_SLUG}/${id}`;

export const partnershipTracks: PartnershipTrack[] = [
  {
    kind: "flow",
    id: "service",
    num: "01",
    short: "Service",
    title: "Service Learning & Capability Development",
    icon: StarIcon,
    kicker: "Why service teams need a year-round learning partner.",
    reality: {
      label: "01 | The reality",
      items: [
        { title: "Constant onboarding", body: "New joiners every month" },
        { title: "High attrition", body: "Teams keep changing" },
        { title: "High expectations", body: "Service must stay consistent" },
      ],
    },
    need: {
      label: "02 | The need",
      title: "Continuous capability building",
      points: ["Readiness", "Process adherence", "SOP compliance", "Consistent service"],
    },
    partnership: {
      label: "Talent 833 Partners",
      title: "12-month learning partnership",
      body: "One structured roadmap: build, reinforce, repeat.",
    },
    academies: {
      label: "03 | Three capability academies",
      items: [
        { title: "Operational Excellence", icon: GearIcon, bullets: ["Process", "Quality", "Productivity", "Execution"] },
        {
          title: "Customer & Business Excellence",
          icon: StarIcon,
          bullets: ["Experience", "Sales", "Communication", "Relationships"],
        },
        {
          title: "Leadership Excellence",
          icon: BriefcaseIcon,
          bullets: ["People management", "EQ", "Team performance", "Leadership"],
        },
      ],
    },
    outcome: {
      label: "The outcome",
      title: "A consistent, capable, customer-focused workforce",
      points: ["Job-ready staff", "Process discipline", "Better CX", "Sustained performance"],
    },
  },
  {
    kind: "track",
    id: "retail",
    num: "02",
    short: "Retail",
    title: "Retail Learning & Capability Development",
    icon: CartIcon,
    headline: "Better retail experiences. Stronger store teams.",
    kicker: "A 12-month partnership for retail",
    intro: "Every customer interaction shapes loyalty and sales. We build teams that deliver both.",
    focusTitle: "Our retail learning focus",
    focus: [
      { title: "Customer Experience", icon: StarIcon, bullets: ["Service excellence", "Service recovery"] },
      { title: "Sales & Conversion", icon: CartIcon, bullets: ["Consultative selling", "Upsell & cross-sell"] },
      { title: "Product & Standards", icon: SearchIcon, bullets: ["Product advisory", "Brand standards"] },
      { title: "Store Leadership", icon: BriefcaseIcon, bullets: ["Team motivation", "Coaching"] },
      { title: "Train-the-Trainer", icon: MicIcon, bullets: ["Internal facilitators", "Reinforcement"] },
    ],
    outcome: "Confident teams, stronger sales, consistent stores, happier customers.",
    outcomePoints: ["Confident teams", "Stronger sales", "Consistent stores", "Happier customers"],
  },
  {
    kind: "track",
    id: "healthcare",
    num: "03",
    short: "Healthcare",
    title: "Healthcare Learning & Capability Development",
    icon: CrossIcon,
    headline: "Stronger people. Better patient experience.",
    kicker: "A 12-month partnership for healthcare",
    intro: "Every interaction shapes patient experience. We build the people skills behind it.",
    focusTitle: "Our healthcare learning focus",
    focus: [
      { title: "Patient Experience", icon: HeartIcon, bullets: ["Patient engagement", "Complaint handling"] },
      { title: "Communication & Empathy", icon: ChatIcon, bullets: ["Family communication", "Emotional intelligence"] },
      { title: "Leadership & Management", icon: BriefcaseIcon, bullets: ["First-time managers", "Coaching & feedback"] },
      { title: "Frontline & Admin", icon: UsersIcon, bullets: ["Front office", "Professional etiquette"] },
      { title: "Process & Teamwork", icon: GearIcon, bullets: ["SOP compliance", "Team coordination"] },
    ],
    outcome: "An empathetic workforce with consistent patient care, teamwork and leadership.",
    outcomePoints: ["Empathetic staff", "Stronger teamwork", "Capable leaders", "Consistent patient care"],
  },
  {
    kind: "track",
    id: "hospitality",
    num: "04",
    short: "Hospitality",
    title: "Hospitality Learning & Capability Development",
    icon: BellIcon,
    headline: "Memorable experiences. Service-driven teams.",
    kicker: "A 12-month partnership for hospitality",
    intro: "Great guest experiences come from consistent service and capable teams.",
    focusTitle: "Our hospitality learning focus",
    focus: [
      { title: "Guest Experience", icon: StarIcon, bullets: ["Guest relationships", "Service recovery"] },
      { title: "Service Culture", icon: BellIcon, bullets: ["Hospitality etiquette", "Service standards"] },
      { title: "Guest Communication", icon: ChatIcon, bullets: ["Interpersonal skills", "Conflict resolution"] },
      { title: "Supervisory Leadership", icon: BriefcaseIcon, bullets: ["People management", "Team motivation"] },
      { title: "Operational Excellence", icon: GearIcon, bullets: ["SOP compliance", "Quality standards"] },
    ],
    outcome: "Service-minded teams delivering consistent, memorable guest experiences.",
    outcomePoints: ["Service-minded teams", "Consistent standards", "Confident supervisors", "Memorable stays"],
  },
  {
    kind: "track",
    id: "communication",
    num: "05",
    short: "Communication",
    title: "Communication Learning & Capability Development",
    icon: ChatIcon,
    headline: "Communicate with clarity. Connect with confidence.",
    kicker: "A 12-month partnership, frontline to CXO",
    intro: "We run your communication development cycle: find the gaps, build skills, reinforce and measure.",
    focusTitle: "Our communication learning offerings",
    focusUnit: "offerings",
    focus: [
      { title: "Business Communication", icon: PenIcon, bullets: ["Writing", "Presentations"] },
      { title: "Interpersonal Skills", icon: HeartIcon, bullets: ["Active listening", "Workplace etiquette"] },
      { title: "Customer & Stakeholder", icon: UsersIcon, bullets: ["Client conversations", "Difficult conversations"] },
      { title: "Executive Presence", icon: MicIcon, bullets: ["Influence", "Public speaking"] },
      { title: "Team Collaboration", icon: ChatIcon, bullets: ["Cross-functional", "Feedback"] },
      { title: "Custom Programmes", icon: SearchIcon, bullets: ["Role-specific", "Gap-based"] },
    ],
    outcome: "Clear, confident communication at every level, inside and outside the organisation.",
    outcomePoints: ["Clear messages", "Better collaboration", "Confident presence", "Every level aligned"],
    closing: "One organisation. Every level. One year.",
  },
  {
    kind: "track",
    id: "campus-to-corporate",
    num: "06",
    short: "Campus-to-Corporate",
    title: "Campus-to-Corporate Programmes",
    icon: CapIcon,
    headline: "From campus to corporate, ready on day one.",
    intro: "Employability programmes that build confident, workplace-ready graduates.",
    focusTitle: "Our programmes",
    focusUnit: "programmes",
    focus: [
      { title: "90-Day Fast Track", icon: StarIcon, body: "Confidence, communication and professional skills." },
      { title: "One-Year Programme", icon: CapIcon, body: "A full academic year of workplace readiness." },
      { title: "Interview Readiness", icon: MicIcon, bullets: ["Find Your Voice", "Find Your Expression", "Find Your Edge"] },
      { title: "Custom Campus Programmes", icon: SearchIcon, body: "Built around your placement goals." },
    ],
    // Draft copy — review before launch.
    bridge: {
      title: "Bridging campus and corporate",
      from: { label: "On campus", points: ["Academic knowledge", "Little workplace exposure", "Interview nerves"] },
      to: { label: "Day one at work", points: ["Professional confidence", "Clear communication", "Workplace etiquette", "Interview-ready"] },
    },
  },
];

export const getPartnershipTrack = (id: string) => partnershipTracks.find((t) => t.id === id);
