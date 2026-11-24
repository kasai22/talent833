/**
 * Brochures for the Strategic Learning Partnership offerings, keyed by offering id (see ./partnerships.ts).
 * Files live in /public/brochures. Visitors enter their email to receive one (app/api/brochure/route.ts);
 * an offering with no entry here falls back to requesting the brochure on WhatsApp.
 */
export type Brochure = {
  /** Shown in the form and the emails. */
  title: string;
  /** Path under /public. */
  file: string;
};

export const brochures: Record<string, Brochure> = {
  service: {
    title: "Service Learning & Capability Development",
    file: "/brochures/service-learning-capability-development.jpg",
  },
  retail: {
    title: "Retail Learning & Capability Development",
    file: "/brochures/retail-learning-capability-development.png",
  },
  healthcare: {
    title: "Healthcare Learning & Capability Development",
    file: "/brochures/healthcare-learning-capability-development.png",
  },
  hospitality: {
    title: "Hospitality Learning & Capability Development",
    file: "/brochures/hospitality-learning-capability-development.png",
  },
  communication: {
    title: "Communication Learning & Capability Development",
    file: "/brochures/communication-learning-capability-development.png",
  },
};

export const getBrochure = (id: string): Brochure | undefined => brochures[id];

/** Loose but practical check; the mail provider does the real validation. */
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) && v.length <= 254;
