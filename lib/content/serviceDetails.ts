/**
 * Content for the service detail pages (/services/[slug]).
 * Condensed from the documents in /content for scannability: icons carry what labels can,
 * and body copy is kept to one short line.
 *   executive-search       ← Executive_Hiring_Text_Conversion.docx
 * Corporate Training, Fractional L&D and Capability Building have bespoke pages —
 * see ./corporateTraining.ts, ./fractionalLd.ts and ./capabilityBuilding.ts.
 */
import { BankIcon, BriefcaseIcon, CodeIcon, GlobeIcon, RocketIcon } from "@/components/services/serviceIcons";
import type { DetailItem } from "@/lib/content/partnerships";

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
};

