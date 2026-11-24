/**
 * Corporate Training page (/services/signature-programmes).
 * Source of truth: /content/Talent_833_Signature_Learning_Experiences (1).docx — keep copy verbatim.
 */
import type { ComponentType } from "react";
import type { IconProps } from "@/components/icons";
import {
  BrainIcon,
  BulbIcon,
  BullseyeIcon,
  CrownIcon,
  FlagIcon,
  GrowthBarsIcon,
  LayersIcon,
  MagnifierIcon,
  PersonIcon,
  SpeechIcon,
  SproutIcon,
  TeamIcon,
} from "@/components/services/trainingIcons";

type Icon = ComponentType<IconProps>;

export const CORPORATE_TRAINING_SLUG = "signature-programmes";

export const corporateTraining = {
  eyebrow: "Corporate Training",
  /** Title in three parts; the middle one is set in gold. */
  title: ["Experiential Learning.", "Practical Skills.", "Lasting Impact."] as const,
  intro:
    "We design and deliver engaging, experiential learning interventions that address business needs, strengthen workplace capabilities and translate learning into everyday performance.",
  note: "These are standalone programmes, customised and delivered on a one-off basis in response to each organisation’s specific requirements, capability gaps and business priorities.",

  communication: {
    title: "Communication & Workplace Effectiveness",
    icon: SpeechIcon as Icon,
    items: [
      "Business Communication",
      "Interpersonal & Behavioural Skills",
      "Stakeholder Management & Influencing",
      "Difficult Conversations & Conflict Resolution",
      "Executive Presence & Professional Impact",
      "Presentation & Public Speaking Skills",
      "Assertive Communication",
      "Cross-Cultural Communication",
      "Feedback & Coaching Conversations",
      "Personal & Professional Effectiveness",
    ],
  },

  leadership: {
    title: "Leadership Signature Programmes",
    icon: CrownIcon as Icon,
    items: [
      { title: "Emotional Intelligence for Leaders", icon: BrainIcon },
      { title: "Executive Presence & Influencing Skills", icon: PersonIcon },
      { title: "Strategic Thinking & Decision Making", icon: BullseyeIcon },
      { title: "Appreciative Inquiry", icon: SproutIcon },
      { title: "Systems Thinking", icon: LayersIcon },
      { title: "Team Building & Collaboration", icon: TeamIcon },
      { title: "Leadership Transition for Managers", icon: FlagIcon },
      { title: "Interviewing Skills for Leaders", icon: MagnifierIcon },
    ] satisfies { title: string; icon: Icon }[],
  },

  other: {
    title: "Other Learning & Development Offerings",
    items: [
      { title: "Outbound Sales & Business Development Training", icon: GrowthBarsIcon },
      { title: "Team Building & Team Effectiveness", icon: TeamIcon },
      { title: "Sales Training & Performance Excellence", icon: BullseyeIcon },
      { title: "Critical Thinking & Problem-Solving", icon: BulbIcon },
    ] satisfies { title: string; icon: Icon }[],
  },

  customised: {
    title: "Customised Learning Solutions",
    body: "Bespoke learning programmes designed around organisational needs, capability gaps and specific business objectives. Each intervention is tailored to the audience, context and outcomes the organisation wants to achieve.",
    cta: "Discuss Your Requirements",
    /** Optional illustration on the left of the banner (e.g. "/mascot.png"). Falls back to the logo mark. */
    image: undefined as string | undefined,
  },
};
