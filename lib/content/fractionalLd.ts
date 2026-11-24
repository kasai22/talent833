/**
 * Fractional Learning & Development page (/services/fractional-ld-partner).
 * Source of truth: /content/Fractional_LD_Partner.docx — keep copy verbatim.
 */
import type { ComponentType } from "react";
import type { IconProps } from "@/components/icons";
import {
  BullseyeIcon,
  CalendarGridIcon,
  ChartUpIcon,
  ClipboardCheckIcon,
  GrowthBarsIcon,
  LayersIcon,
  PawnIcon,
  ScalesIcon,
  ScreenPlayIcon,
  TeamIcon,
  TrainerIcon,
} from "@/components/services/trainingIcons";

type Icon = ComponentType<IconProps>;

export const FRACTIONAL_LD_SLUG = "fractional-ld-partner";

export const fractionalLd = {
  eyebrow: "Your Extended L&D Partner",
  /** Two-line title; the end of the second line is set in gold. */
  title: { line1: "Building an L&D capability,", line2: "but not ready for a ", accent: "full-time team?" },
  intro:
    "Get experienced L&D leadership, on demand — to build learning strategy, strengthen people capabilities and drive performance, without the overhead of a full-time L&D function.",
  cta: "Book a Consultation",

  fit: {
    title: "Is a Fractional L&D Partner right for you?",
    items: [
      { lead: "Need L&D leadership", rest: "but not a full-time hire?", icon: TeamIcon },
      { lead: "In two minds", rest: "about building an internal L&D team?", icon: ScalesIcon },
      { lead: "Want to strengthen learning", rest: "and capability without increasing headcount?", icon: GrowthBarsIcon },
    ] satisfies { lead: string; rest: string; icon: Icon }[],
  },

  offerings: {
    title: "Our Fractional L&D Offerings",
    items: [
      { title: "Training Needs Analysis", icon: ClipboardCheckIcon },
      { title: "Learning Strategy & Standardisation", icon: BullseyeIcon },
      { title: "Competency Frameworks", icon: LayersIcon },
      { title: "Leadership & Managerial Capability", icon: TeamIcon },
      { title: "Train-the-Trainer", icon: TrainerIcon },
      { title: "Content & Programme Design", icon: ScreenPlayIcon },
      { title: "Learning Effectiveness & KPIs", icon: ChartUpIcon },
    ] satisfies { title: string; icon: Icon }[],
  },

  value: {
    title: "The Value You Get",
    items: [
      "Experienced L&D leadership, when you need it.",
      "A structured, business-aligned learning roadmap.",
      "Scalable learning solutions aligned to your priorities.",
      "Improved capability, performance and learning effectiveness.",
    ],
  },

  models: {
    title: "Flexible Engagement Models",
    items: [
      { name: "Advisory", body: "Strategic guidance and direction.", icon: PawnIcon },
      { name: "Project-based", body: "Specific L&D initiatives and programmes.", icon: LayersIcon },
      { name: "Part-time / Embedded", body: "Ongoing L&D leadership and execution.", icon: CalendarGridIcon },
    ] satisfies { name: string; body: string; icon: Icon }[],
  },

  closing: {
    /** Set in two lines; the second is gold. */
    line1: "Let’s build your organisation’s",
    line2: "learning capability.",
    cta: "Book a Consultation",
    /** Optional illustration on the right of the banner (e.g. "/mascot.png"). Falls back to the logo mark. */
    image: undefined as string | undefined,
  },
};
