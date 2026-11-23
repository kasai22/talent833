/**
 * Content for the service detail pages (/services/[slug]).
 * Condensed from the documents in /content for scannability: icons carry what labels can,
 * and body copy is kept to one short line.
 *   executive-search       ← Executive_Hiring_Text_Conversion.docx
 *   fractional-ld-partner  ← Fractional_LD_Partner.docx
 *   learning-partnerships  ← Strategic, 12-month learning partnerships.docx
 *                            (the six offerings have their own pages — see ./partnerships.ts)
 */
import { CalendarIcon, CompassIcon, MapIcon, UsersIcon } from "@/components/icons";
import {
  BankIcon,
  BriefcaseIcon,
  ClockIcon,
  CodeIcon,
  GaugeIcon,
  GearIcon,
  GlobeIcon,
  GridIcon,
  MicIcon,
  PenIcon,
  RocketIcon,
  SearchIcon,
  StarIcon,
} from "@/components/services/serviceIcons";
import { partnershipHref, partnershipTracks, type DetailItem } from "@/lib/content/partnerships";

export type { DetailItem };

export type DetailBlock =
  /** Short questions / checks with a tick. */
  | { kind: "checks"; eyebrow: string; title: string; items: { lead: string; rest?: string }[] }
  /** Card grid: icon (or number), title, one-line body. */
  | { kind: "cards"; eyebrow: string; title: string; intro?: string; items: DetailItem[]; note?: string }
  /** Compact icon + label tiles — for lists where the label says it all. */
  | { kind: "tiles"; eyebrow: string; title: string; items: Required<Pick<DetailItem, "title" | "icon">>[] }
  /** Linked cards to sub-pages (the partnership offerings). */
  | { kind: "index"; eyebrow: string; title: string; intro: string; items: { title: string; href: string; icon?: DetailItem["icon"] }[] };

export const serviceDetails: Record<string, { headline?: string; blocks: DetailBlock[] }> = {
  "executive-search": {
    blocks: [
      {
        kind: "checks",
        eyebrow: "Sound familiar?",
        title: "Hiring senior talent is hard",
        items: [
          { lead: "₹12L+ roles taking too long?" },
          { lead: "Struggling to find the right fit?" },
          { lead: "Need a partner who represents your brand?" },
        ],
      },
      {
        kind: "tiles",
        eyebrow: "Where we hire",
        title: "Our hiring focus",
        items: [
          { title: "GCCs", icon: GlobeIcon },
          { title: "Technology & SaaS", icon: CodeIcon },
          { title: "BFSI & FinTech", icon: BankIcon },
          { title: "Product & Digital", icon: RocketIcon },
          { title: "Leadership & Functional", icon: BriefcaseIcon },
        ],
      },
    ],
  },

  "fractional-ld-partner": {
    headline: "L&D leadership, without the full-time team.",
    blocks: [
      {
        kind: "checks",
        eyebrow: "Is it right for you?",
        title: "You need L&D, not more headcount",
        items: [
          { lead: "L&D leadership", rest: "without a full-time hire" },
          { lead: "Unsure", rest: "about building an in-house team" },
          { lead: "Stronger capability", rest: "with the same headcount" },
        ],
      },
      {
        kind: "tiles",
        eyebrow: "What’s included",
        title: "Our fractional L&D offerings",
        items: [
          { title: "Training Needs Analysis", icon: SearchIcon },
          { title: "Learning Strategy", icon: MapIcon },
          { title: "Competency Frameworks", icon: GridIcon },
          { title: "Leadership Capability", icon: BriefcaseIcon },
          { title: "Train-the-Trainer", icon: MicIcon },
          { title: "Content & Programme Design", icon: PenIcon },
          { title: "Learning KPIs", icon: GaugeIcon },
        ],
      },
      {
        kind: "cards",
        eyebrow: "How we engage",
        title: "Pick the model that fits",
        items: [
          { title: "Advisory", body: "Strategy and direction.", icon: CompassIcon },
          { title: "Project-based", body: "Specific initiatives.", icon: CalendarIcon },
          { title: "Embedded", body: "Ongoing, part-time leadership.", icon: ClockIcon },
        ],
        note: "Every model gives you a business-aligned roadmap and measurable capability gains.",
      },
    ],
  },

  "learning-partnerships": {
    blocks: [
      {
        kind: "cards",
        eyebrow: "Three pillars",
        title: "What every partnership builds",
        items: [
          { title: "Operational Excellence", body: "Processes, productivity, execution.", icon: GearIcon },
          { title: "Customer Service Excellence", body: "Experience, quality, engagement.", icon: StarIcon },
          { title: "Leadership Excellence", body: "Leaders, teams, performance culture.", icon: UsersIcon },
        ],
        note: "Scope, duration and approach flex to your priorities.",
      },
      {
        kind: "index",
        eyebrow: "Flagship offerings",
        title: "Six ways to partner",
        intro: "Ask us for the detailed brochure for any offering.",
        items: partnershipTracks.map((t) => ({ title: t.title, href: partnershipHref(t.id), icon: t.icon })),
      },
    ],
  },
};

