/**
 * Hiring sub-services: one page each under /services/hiring/[role], each with a bespoke layout.
 *   executive-hiring  ← components/services/ExecutiveHiring, content in ./executiveHiring.ts
 *   bulk-hiring       ← components/services/BulkHiring, content in ./bulkHiring.ts (draft copy — review before launch)
 */
import type { ComponentType } from "react";
import { UsersIcon, type IconProps } from "@/components/icons";
import { BriefcaseIcon } from "@/components/services/serviceIcons";
import { routes } from "@/lib/site";

export const HIRING_SLUG = "hiring";

export type HiringRole = {
  id: string;
  num: string;
  title: string;
  /** Breadcrumb / short label. */
  short: string;
  /** One line under the title in nav and cards. */
  tag: string;
  /** headline + intro make the page's meta description. */
  headline: string;
  intro: string;
  icon: ComponentType<IconProps>;
};

export const hiringRoles: HiringRole[] = [
  {
    id: "executive-hiring",
    num: "01",
    title: "Executive Hiring",
    short: "Executive Hiring",
    tag: "Leadership & specialist roles, ₹12 Lakh+",
    headline: "The Right Leadership Talent. Carefully Curated. Strategically Aligned.",
    intro: "Finding exceptional talent for leadership, managerial and specialist roles.",
    icon: BriefcaseIcon,
  },
  {
    id: "bulk-hiring",
    num: "02",
    title: "Bulk Hiring",
    short: "Bulk Hiring",
    tag: "Entry & mid-level staff for cafés and SMEs",
    headline: "Fully staffed. Ready to open.",
    intro:
      "Entry-level and mid-level staffing for cafés, restaurants, retail stores and growing SMEs — sourced at scale, screened with care and ready when you need them.",
    icon: UsersIcon,
  },
];

export const hiringHref = (id: string) => `${routes.services}/${HIRING_SLUG}/${id}`;
export const getHiringRole = (id: string) => hiringRoles.find((r) => r.id === id);
