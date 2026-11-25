/**
 * Bulk Hiring page (/services/hiring/bulk-hiring) — bespoke layout, see components/services/BulkHiring.
 * Entry-level and mid-level staffing for cafés, restaurants, retail and SMEs.
 * Draft copy (no source document yet) — review before launch. Deliberately makes no numeric claims.
 */
import type { ComponentType } from "react";
import { BuildingIcon, CalendarIcon, HandshakeIcon, TrendIcon, UsersIcon, type IconProps } from "@/components/icons";
import {
  BroomIcon,
  CalculatorIcon,
  ChefHatIcon,
  ClipboardIcon,
  ClocheIcon,
  CupIcon,
  IdBadgeIcon,
  KeyIcon,
  RegisterIcon,
  SearchIcon,
  ShopBagIcon,
  StorefrontIcon,
} from "@/components/services/serviceIcons";

type Icon = ComponentType<IconProps>;

export const bulkHiring = {
  eyebrow: "Bulk Hiring",
  /** One line each; the second is set in gold. */
  title: ["Fully staffed.", "Ready to open."],
  lede: "Entry-level and mid-level staffing for cafés, restaurants, retail stores and growing SMEs — sourced at scale, screened with care and ready when you need them.",
  cta: "Discuss Your Staffing Need",
  secondaryCta: "How it works",

  /** Who we hire for, shown as chips in the hero. */
  sectors: [
    { title: "Cafés & coffee chains", icon: CupIcon },
    { title: "Restaurants & QSR", icon: ClocheIcon },
    { title: "Bakeries & cloud kitchens", icon: ChefHatIcon },
    { title: "Retail stores", icon: ShopBagIcon },
    { title: "SMEs & offices", icon: BuildingIcon },
  ] satisfies { title: string; icon: Icon }[],

  /** Cards floating over the hero illustration. */
  heroCards: {
    roster: {
      title: "Outlet team",
      note: "Ready for opening week",
      roles: [
        { title: "Baristas", done: true },
        { title: "Servers", done: true },
        { title: "Kitchen crew", done: true },
        { title: "Shift supervisor", done: false },
      ],
      pending: "Interviewing",
    },
    shortlist: { label: "Shortlist ready", note: "Screened & interview-ready" },
  },

  challenges: {
    eyebrow: "Sound familiar?",
    title: "Staffing a growing business is hard work",
    items: [
      {
        art: "outlet",
        title: "A new outlet opens soon",
        body: "The fit-out is on schedule, but the team to run it isn’t hired yet.",
      },
      {
        art: "roster",
        title: "Gaps in the roster",
        body: "Staff move on, and shifts run short just when the rush comes in.",
      },
      {
        art: "overload",
        title: "Hiring on top of running the business",
        body: "Owners and managers end up screening CVs between service hours.",
      },
    ] satisfies { art: "outlet" | "roster" | "overload"; title: string; body: string }[],
  },

  roles: {
    eyebrow: "Who we staff",
    title: "From the front counter to the floor manager",
    tiers: [
      {
        label: "Entry level",
        title: "Front-line crew",
        body: "The people your customers meet every day — reliable, presentable and trained to your standard.",
        items: [
          { title: "Baristas & café crew", icon: CupIcon },
          { title: "Servers & front-of-house", icon: ClocheIcon },
          { title: "Cooks & kitchen helpers", icon: ChefHatIcon },
          { title: "Cashiers & billing staff", icon: RegisterIcon },
          { title: "Housekeeping & support", icon: BroomIcon },
          { title: "Retail & sales associates", icon: ShopBagIcon },
        ],
      },
      {
        label: "Mid level",
        title: "Supervisors & specialists",
        body: "The people who keep shifts, outlets and back offices running smoothly.",
        items: [
          { title: "Shift & outlet supervisors", icon: ClipboardIcon },
          { title: "Store & restaurant managers", icon: KeyIcon },
          { title: "Head cooks & kitchen leads", icon: ChefHatIcon },
          { title: "Accounts & operations executives", icon: CalculatorIcon },
          { title: "Sales executives", icon: TrendIcon },
          { title: "Admin & HR coordinators", icon: IdBadgeIcon },
        ],
      },
    ] satisfies { label: string; title: string; body: string; items: { title: string; icon: Icon }[] }[],
  },

  process: {
    eyebrow: "How it works",
    title: "A simple process, built for volume",
    steps: [
      { title: "Understand", body: "Your outlets, shifts, roles and pay bands.", icon: SearchIcon },
      { title: "Source", body: "Local, wide-reach sourcing to build a ready pool.", icon: UsersIcon },
      { title: "Screen", body: "One consistent standard for every candidate.", icon: ClipboardIcon },
      { title: "Interview", body: "Interviews and trial shifts, lined up around you.", icon: CalendarIcon },
      { title: "Join", body: "Offers, joining dates and first-week check-ins.", icon: HandshakeIcon },
    ] satisfies { title: string; body: string; icon: Icon }[],
  },

  scale: {
    eyebrow: "Why work with us",
    title: "One outlet or many — the same standard",
    body: "Whether you are opening your first café or rolling out across a city, we build teams that feel like they belong to your brand.",
    points: [
      { title: "Hiring at any scale", body: "Staff a single outlet or every location in a rollout.", icon: StorefrontIcon },
      { title: "Consistent quality", body: "The same screening bar for every hire, at every site.", icon: IdBadgeIcon },
      { title: "One point of contact", body: "A dedicated recruiter who learns how your business runs.", icon: UsersIcon },
      { title: "Support after joining", body: "We stay in touch through the first weeks so new staff settle in.", icon: HandshakeIcon },
    ] satisfies { title: string; body: string; icon: Icon }[],
  },
};
