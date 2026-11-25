/**
 * Hiring overview page (/services/hiring) — bespoke layout, see components/services/Hiring.
 * Presents the two hiring models side by side; each links to its own page (see ./hiring.ts).
 * Executive Hiring copy follows ./executiveHiring.ts; Bulk Hiring copy is still draft — review before launch.
 */
import type { ComponentType } from "react";
import { TargetIcon, UsersIcon, type IconProps } from "@/components/icons";
import {
  BankIcon,
  BriefcaseIcon,
  ChessKingIcon,
  ClockIcon,
  CodeIcon,
  GlobeIcon,
  LayersIcon,
  RocketIcon,
  SearchIcon,
  ShieldStarIcon,
} from "@/components/services/serviceIcons";

type Icon = ComponentType<IconProps>;

export const hiringPage = {
  eyebrow: "Hiring",
  /** One line each. */
  title: ["The right talent,", "at every level."],
  lede: "We help organisations attract, engage and hire the right people — from leadership and specialist roles to high-volume hiring.",
  primaryCta: "Find your hiring fit",
  secondaryCta: "Discuss your hiring need",
  /** Small cards floating over the hero photo. */
  heroBadges: {
    shortlist: { label: "Shortlist ready", note: "Curated & assessed" },
    pipeline: { label: "Hiring pipeline", note: "On track for ramp-up" },
  },

  models: {
    title: "Two ways we hire",
    intro: "One critical leader or a whole new team — choose the engagement that fits your need.",
    items: [
      {
        id: "executive-hiring",
        label: "Precision",
        title: "Executive Hiring",
        tag: "Leadership & specialist roles, ₹12 Lakh+",
        body: "A carefully curated search for leadership, managerial and specialist roles — strategically aligned with where your business is going.",
        art: "spotlight",
        points: [
          { title: "Executive Search", icon: ChessKingIcon },
          { title: "Leadership Hiring", icon: UsersIcon },
          { title: "Mid & Senior-Level Hiring", icon: LayersIcon },
          { title: "Confidential & Specialist Hiring", icon: ShieldStarIcon },
        ],
      },
      {
        id: "bulk-hiring",
        label: "Scale",
        title: "Bulk Hiring",
        tag: "Entry & mid-level staff for cafés and SMEs",
        body: "Front-line crew, supervisors and back-office staff for cafés, restaurants, retail stores and growing SMEs — hired at scale, to one consistent standard.",
        art: "crowd",
        points: [
          { title: "Sourcing at scale", icon: SearchIcon },
          { title: "Structured screening", icon: TargetIcon },
          { title: "Fast turnaround", icon: ClockIcon },
          { title: "Consistent quality", icon: ShieldStarIcon },
        ],
      },
    ] satisfies {
      id: string;
      label: string;
      title: string;
      tag: string;
      body: string;
      art: "spotlight" | "crowd";
      points: { title: string; icon: Icon }[];
    }[],
    cta: "Explore",
  },

  compare: {
    title: "Which one fits your need?",
    /** Row label, then Executive Hiring, then Bulk Hiring. */
    rows: [
      ["Best for", "Leadership, managerial and specialist roles", "Entry and mid-level roles in cafés, restaurants, retail and SMEs"],
      ["Your need", "One to a few critical hires", "A full team for a new outlet, or steady hiring as you grow"],
      ["Our focus", "Fit, leadership alignment and confidentiality", "Speed and consistent quality at scale"],
      ["You get", "A curated, assessed shortlist", "Screened, interview-ready candidates in time for opening day"],
    ] as [string, string, string][],
  },

  sectors: {
    title: "Where we hire",
    intro: "The sectors and functions we hire for, at every level.",
    items: [
      { title: "GCCs", icon: GlobeIcon },
      { title: "Technology & SaaS", icon: CodeIcon },
      { title: "BFSI & FinTech", icon: BankIcon },
      { title: "Product & Digital", icon: RocketIcon },
      { title: "Leadership & Functional", icon: BriefcaseIcon },
    ] satisfies { title: string; icon: Icon }[],
  },
};
