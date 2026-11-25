/**
 * Content for the service detail pages (/services/[slug]).
 * Condensed from the documents in /content for scannability: icons carry what labels can,
 * and body copy is kept to one short line.
 * Corporate Training, Fractional L&D, Capability Building and Hiring have bespoke pages —
 * see ./corporateTraining.ts, ./fractionalLd.ts, ./capabilityBuilding.ts and ./hiringPage.ts.
 */
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

export const serviceDetails: Record<string, { headline?: string; blocks: DetailBlock[] }> = {};

