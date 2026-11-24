/**
 * Capability Building page (/services/learning-partnerships).
 * Copy follows the approved page design, which condenses
 * /content/Strategic, 12-month learning partnerships.docx and /content/STRATEGIC LEARNING PARTNERSHIPS.docx.
 * The six solution cards link to the existing offering pages (see ./partnerships.ts).
 */
import type { ComponentType } from "react";
import { HandshakeIcon, type IconProps } from "@/components/icons";
import { CapIcon, CartIcon, CrossIcon, GearIcon, PenIcon } from "@/components/services/serviceIcons";
import {
  ChartUpIcon,
  BedIcon,
  ClipboardCheckIcon,
  HeadsetIcon,
  PlayCircleIcon,
  RefreshIcon,
  SpeechIcon,
  TeamStarIcon,
} from "@/components/services/trainingIcons";
import { PARTNERSHIPS_SLUG } from "@/lib/content/partnerships";

type Icon = ComponentType<IconProps>;

export const CAPABILITY_BUILDING_SLUG = PARTNERSHIPS_SLUG;

export const capabilityBuilding = {
  title: "Strategic Learning & Development Partnerships",
  tags: ["Capability Building", "Organisational Development", "Workforce Transformation"],
  body: [
    "We partner with organisations to strengthen existing Learning & Development functions or build structured, long-term learning engagements where dedicated L&D capabilities are limited.",
    "Our approach combines business-aligned learning strategies, customised capability development and measurable learning outcomes to strengthen workforce performance.",
  ],
  primaryCta: "Explore Our Learning Solutions",
  secondaryCta: "Talk to Us",

  framework: {
    title: "Our Capability Building Framework",
    intro:
      "We focus on three core capability pillars to help organisations strengthen workforce effectiveness and business performance.",
    pillars: [
      {
        title: "Operational Excellence",
        body: "Building capabilities that improve process efficiency, productivity, execution and operational performance.",
        icon: GearIcon,
      },
      {
        title: "Customer Service Excellence",
        body: "Developing customer-centric behaviours, service capabilities and experiences that strengthen customer satisfaction and loyalty.",
        icon: HandshakeIcon,
      },
      {
        title: "Leadership Development",
        body: "Building effective leaders who can inspire teams, drive accountability, influence stakeholders and deliver business outcomes.",
        icon: TeamStarIcon,
      },
    ] satisfies { title: string; body: string; icon: Icon }[],
  },

  journey: {
    title: "The 12-Month Capability Journey",
    intro: "Our strategic partnerships follow a structured five-stage approach.",
    stages: [
      { title: "Diagnose", body: "Understand business priorities, capability gaps and learning needs.", icon: ClipboardCheckIcon },
      { title: "Design", body: "Develop customised learning journeys and competency frameworks.", icon: PenIcon },
      {
        title: "Deploy",
        body: "Roll out workshops, experiential learning, manager interventions and functional programmes.",
        icon: PlayCircleIcon,
      },
      {
        title: "Reinforce",
        body: "Conduct follow-ups, application assignments, coaching and manager-led reinforcement.",
        icon: RefreshIcon,
      },
      {
        title: "Measure",
        body: "Evaluate learning effectiveness, behavioural change and business impact.",
        icon: ChartUpIcon,
      },
    ] satisfies { title: string; body: string; icon: Icon }[],
  },

  solutions: {
    title: "Our Learning & Capability Development Solutions",
    intro:
      "We offer industry-specific learning solutions alongside specialised programmes that address cross-industry workforce development needs.",
    knowMore: "Know More",
    brochure: "Download Brochure",
    /** `track` is the offering page id in ./partnerships.ts. */
    items: [
      {
        track: "service",
        title: "Service Industry",
        subtitle: "Learning & Capability Development",
        body: "Customised learning solutions for service-driven organisations, focusing on operational effectiveness, customer experience, employee capabilities and leadership development.",
        icon: HeadsetIcon,
      },
      {
        track: "retail",
        title: "Retail",
        subtitle: "Learning & Capability Development",
        body: "Building retail workforce capabilities across customer experience, sales performance, service excellence, store operations and people leadership.",
        icon: CartIcon,
      },
      {
        track: "healthcare",
        title: "Healthcare",
        subtitle: "Learning & Capability Development",
        body: "Strengthening capabilities across patient experience, service delivery, communication, operational excellence and healthcare leadership.",
        icon: CrossIcon,
      },
      {
        track: "hospitality",
        title: "Hospitality",
        subtitle: "Learning & Capability Development",
        body: "Developing service professionals and leaders through guest experience, service standards, operational excellence and hospitality leadership programmes.",
        icon: BedIcon,
      },
      {
        track: "communication",
        title: "Communication & Behavioural",
        subtitle: "Learning Programmes",
        body: "Cross-industry programmes designed to strengthen business communication, interpersonal effectiveness, emotional intelligence, collaboration, presentation skills and workplace effectiveness.",
        icon: SpeechIcon,
      },
      {
        track: "campus-to-corporate",
        title: "Campus-to-Corporate",
        subtitle: "Programmes",
        body: "Structured corporate readiness programmes that bridge the gap between academic learning and workplace expectations, preparing graduates for successful transitions into professional environments.",
        icon: CapIcon,
      },
    ] satisfies { track: string; title: string; subtitle: string; body: string; icon: Icon }[],
  },

  closing: {
    title: "Looking for a Customised Learning Solution?",
    body: [
      "Every organisation has unique capability requirements, business priorities and workforce challenges.",
      "Whether you are looking for a specific training intervention, a customised learning journey or a long-term strategic L&D partnership, we work with you to design solutions that align with your organisational goals.",
    ],
    tagline: "Let’s create a learning solution that works for your organisation.",
    call: "Call Us",
    write: "Write to Us",
    consult: "Request a Consultation",
  },
};

/** Pre-filled WhatsApp message asking for an offering's brochure (no PDFs are hosted yet). */
export const brochureMessage = (offering: string) =>
  `Hi Talent833 Partners, please share the brochure for ${offering}.`;
