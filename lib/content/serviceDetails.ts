/**
 * Long-form content for the service detail pages (/services/[slug]).
 * Source of truth: the documents in /content — keep copy verbatim.
 *   executive-search       ← Executive_Hiring_Text_Conversion.docx
 *   fractional-ld-partner  ← Fractional_LD_Partner.docx
 *   learning-partnerships  ← Strategic, 12-month learning partnerships.docx
 *                            (the six offerings have their own pages — see ./partnerships.ts)
 */
import { partnershipHref, partnershipTracks, type DetailItem } from "@/lib/content/partnerships";

export type { DetailItem };

export type DetailBlock =
  /** Questions / checks with a tick, e.g. "Is a fractional L&D partner right for you?" */
  | { kind: "checks"; eyebrow: string; title: string; items: { lead: string; rest?: string }[] }
  /** Numbered card grid. */
  | { kind: "cards"; eyebrow: string; title: string; intro?: string; items: DetailItem[]; note?: string }
  /** Linked cards to sub-pages (the partnership offerings). */
  | { kind: "index"; eyebrow: string; title: string; intro: string; items: { title: string; href: string }[] }
  /** Closing call to action. */
  | { kind: "closing"; title: string };

const bookCta = { kind: "closing" as const };

export const serviceDetails: Record<string, { headline?: string; blocks: DetailBlock[] }> = {
  "executive-search": {
    blocks: [
      {
        kind: "checks",
        eyebrow: "Executive hiring",
        title: "Are you able to hire the right talent?",
        items: [
          { lead: "Is hiring for ₹12 Lakh+ roles taking longer than expected?" },
          { lead: "Is it a challenge to find the right fit with the right capabilities?" },
          { lead: "Do you need a partner who can represent your brand well with senior talent?" },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Where we hire",
        title: "Our hiring focus",
        intro:
          "We help organisations attract, engage and hire high-impact talent for ₹12 Lakh+ roles across leadership and specialist positions.",
        items: [
          { title: "GCCs", body: "Global Capability Centres" },
          { title: "Technology & SaaS" },
          { title: "BFSI & FinTech" },
          { title: "Product & Digital" },
          { title: "Leadership & Functional Roles" },
        ],
      },
    ],
  },

  "fractional-ld-partner": {
    headline: "Building an L&D capability, but not ready for a full-time team?",
    blocks: [
      {
        kind: "checks",
        eyebrow: "Your extended L&D partner",
        title: "Is a fractional L&D partner right for you?",
        items: [
          { lead: "Need L&D leadership", rest: "but not a full-time hire?" },
          { lead: "In two minds", rest: "about building an internal L&D team?" },
          { lead: "Want to strengthen learning", rest: "and capability without increasing headcount?" },
        ],
      },
      {
        kind: "cards",
        eyebrow: "What’s included",
        title: "Our fractional L&D offerings",
        items: [
          { title: "Training Needs Analysis" },
          { title: "Learning Strategy & Standardisation" },
          { title: "Competency Frameworks" },
          { title: "Leadership & Managerial Capability" },
          { title: "Train-the-Trainer" },
          { title: "Content & Programme Design" },
          { title: "Learning Effectiveness & KPIs" },
        ],
      },
      {
        kind: "checks",
        eyebrow: "Outcomes",
        title: "The value you get",
        items: [
          { lead: "Experienced L&D leadership, when you need it." },
          { lead: "A structured, business-aligned learning roadmap." },
          { lead: "Scalable learning solutions aligned to your priorities." },
          { lead: "Improved capability, performance and learning effectiveness." },
        ],
      },
      {
        kind: "cards",
        eyebrow: "How we engage",
        title: "Flexible engagement models",
        items: [
          { title: "Advisory", body: "Strategic guidance and direction." },
          { title: "Project-based", body: "Specific L&D initiatives and programmes." },
          { title: "Part-time / Embedded", body: "Ongoing L&D leadership and execution." },
        ],
      },
      { ...bookCta, title: "Let’s build your organisation’s learning capability." },
    ],
  },

  "learning-partnerships": {
    blocks: [
      {
        kind: "cards",
        eyebrow: "Three pillars",
        title: "Our partnerships are built around three pillars",
        items: [
          {
            title: "Operational Excellence",
            body: "Strengthening processes, productivity and execution capabilities.",
          },
          {
            title: "Customer Service Excellence",
            body: "Enhancing customer experience, service quality and engagement.",
          },
          {
            title: "Leadership Excellence",
            body: "Building capable leaders, stronger teams and a performance-driven culture.",
          },
        ],
        note: "Engagements are customised to your organisation’s needs, with flexible durations, scope and learning approaches aligned with your business priorities and workforce requirements.",
      },
      {
        kind: "index",
        eyebrow: "Flagship offerings",
        title: "Our six flagship offerings",
        intro:
          "Explore our six flagship offerings to discover how we can partner with you. Contact us for detailed brochures and more programme information.",
        items: partnershipTracks.map((t) => ({ title: t.title, href: partnershipHref(t.id) })),
      },
    ],
  },
};
