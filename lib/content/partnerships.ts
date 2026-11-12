/**
 * The six Strategic Learning Partnership offerings — each has its own page at
 * /services/learning-partnerships/[track].
 * Source of truth: /content/Strategic, 12-month learning partnerships.docx — keep copy verbatim.
 */
import { routes } from "@/lib/site";

export const PARTNERSHIPS_SLUG = "learning-partnerships";

export type DetailItem = { title: string; body?: string; bullets?: string[] };

type TrackBase = {
  id: string;
  num: string;
  /** Short label for breadcrumbs and nav. */
  short: string;
  title: string;
};

/** Offering 01 — the service-industry "case" flow. */
export type FlowTrack = TrackBase & {
  kind: "flow";
  kicker: string;
  reality: { label: string; items: { title: string; body: string }[] };
  need: { label: string; title: string; points: string[] };
  partnership: { label: string; title: string; body: string };
  academies: { label: string; items: DetailItem[] };
  outcome: { label: string; title: string; points: string[] };
};

/** Offerings 02–06 — headline, intro, focus areas and outcome. */
export type FocusTrack = TrackBase & {
  kind: "track";
  headline: string;
  kicker?: string;
  intro: string[];
  focusTitle: string;
  focus: DetailItem[];
  outcome?: string;
  closing?: string;
};

export type PartnershipTrack = FlowTrack | FocusTrack;

export const partnershipHref = (id: string) => `${routes.services}/${PARTNERSHIPS_SLUG}/${id}`;

export const partnershipTracks: PartnershipTrack[] = [
  {
    kind: "flow",
    id: "service",
    num: "01",
    short: "Service",
    title: "Service Learning & Capability Development",
    kicker: "The case for a year-round learning partnership",
    reality: {
      label: "01 | The service industry reality",
      items: [
        { title: "Continuous onboarding", body: "Employees constantly joining" },
        { title: "High attrition", body: "Frequent workforce changes" },
        { title: "Customer expectations", body: "Consistent service required" },
      ],
    },
    need: {
      label: "02 | The organisational need",
      title: "Continuous learning & capability development",
      points: ["Employee readiness", "Process adherence", "SOP compliance", "Consistent service delivery"],
    },
    partnership: {
      label: "Talent 833 Partners",
      title: "12-month strategic learning partnership",
      body: "A structured learning roadmap with continuous development, reinforcement and capability building.",
    },
    academies: {
      label: "03 | Built around three capability academies",
      items: [
        {
          title: "Operational Excellence",
          bullets: ["Process discipline", "Quality standards", "Productivity", "Execution"],
        },
        {
          title: "Customer & Business Excellence",
          bullets: ["Customer experience", "Sales effectiveness", "Communication", "Relationships"],
        },
        {
          title: "Leadership Excellence",
          bullets: ["People management", "Emotional intelligence", "Team performance", "Leadership development"],
        },
      ],
    },
    outcome: {
      label: "The intended business outcome",
      title: "A consistent, capable & customer-focused workforce",
      points: [
        "Better employee readiness",
        "Stronger process adherence",
        "Improved customer experience",
        "Sustainable performance",
      ],
    },
  },
  {
    kind: "track",
    id: "retail",
    num: "02",
    short: "Retail",
    title: "Retail Learning & Capability Development",
    headline: "Creating Better Retail Experiences. Building Stronger Store Teams.",
    kicker: "A 12-Month Learning Partnership for Retail Organisations",
    intro: [
      "Every customer interaction influences brand perception, customer loyalty and sales performance. We develop retail teams to deliver consistent experiences and stronger business results.",
    ],
    focusTitle: "Our retail learning focus",
    focus: [
      {
        title: "Customer Experience Excellence",
        bullets: ["Customer engagement and service excellence", "Complaint handling and service recovery"],
      },
      {
        title: "Sales Performance & Conversion",
        bullets: ["Consultative selling and sales conversion", "Upselling, cross-selling and objection handling"],
      },
      {
        title: "Product Knowledge & Service Standards",
        bullets: ["Product knowledge and customer advisory", "Brand standards and retail communication"],
      },
      {
        title: "Store Leadership & Team Management",
        bullets: ["Store leadership and team motivation", "Performance management and coaching"],
      },
      {
        title: "Train-the-Trainer & Internal Capability Building",
        bullets: ["Internal facilitator development", "Training delivery and learning reinforcement"],
      },
    ],
    outcome:
      "More confident retail teams, stronger sales effectiveness, consistent store standards and better customer experiences.",
  },
  {
    kind: "track",
    id: "healthcare",
    num: "03",
    short: "Healthcare",
    title: "Healthcare Learning & Capability Development",
    headline: "Strengthening People. Elevating Patient Experience.",
    kicker: "A 12-Month Learning Partnership for Healthcare Organisations",
    intro: [
      "Patient experience is shaped by every interaction across a healthcare organisation. We develop the people, communication and service capabilities that support better patient experiences and effective operations.",
    ],
    focusTitle: "Our healthcare learning focus",
    focus: [
      {
        title: "Patient Experience & Service Excellence",
        bullets: ["Patient and attendant engagement", "Empathy, service excellence and complaint handling"],
      },
      {
        title: "Communication, Empathy & Workplace Behaviour",
        bullets: ["Patient and family communication", "Interpersonal skills and emotional intelligence"],
      },
      {
        title: "Leadership & Managerial Development",
        bullets: ["First-time manager development", "People management, coaching and feedback"],
      },
      {
        title: "Frontline & Administrative Capability",
        bullets: ["Front-office and patient coordination", "Professional conduct and telephone etiquette"],
      },
      {
        title: "Process Excellence & Team Effectiveness",
        bullets: ["Process adherence and SOP compliance", "Quality standards and team coordination"],
      },
    ],
    outcome:
      "A more empathetic, service-oriented healthcare workforce with consistent patient experience standards, stronger teamwork and effective leadership.",
  },
  {
    kind: "track",
    id: "hospitality",
    num: "04",
    short: "Hospitality",
    title: "Hospitality Learning & Capability Development",
    headline: "Creating Memorable Experiences. Developing Service-Driven Teams.",
    kicker: "A 12-Month Learning Partnership for Hospitality Organisations",
    intro: [
      "Exceptional guest experiences are built through consistent service, attention to detail and capable teams. We strengthen the people and operational capabilities that define hospitality excellence.",
    ],
    focusTitle: "Our hospitality learning focus",
    focus: [
      {
        title: "Guest Experience Excellence",
        bullets: ["Guest engagement and relationship management", "Complaint handling and service recovery"],
      },
      {
        title: "Service Culture & Hospitality Etiquette",
        bullets: ["Professional conduct and hospitality etiquette", "Service standards and customer-centric behaviours"],
      },
      {
        title: "Communication & Guest Engagement",
        bullets: ["Guest communication and interaction", "Interpersonal skills and conflict resolution"],
      },
      {
        title: "Leadership & Supervisory Development",
        bullets: ["Supervisory and people management skills", "Team motivation and performance management"],
      },
      {
        title: "Operational Excellence",
        bullets: ["Process adherence and SOP compliance", "Quality standards and operational effectiveness"],
      },
    ],
    outcome:
      "Confident, service-oriented teams delivering consistent guest experiences, stronger operational performance and memorable hospitality.",
  },
  {
    kind: "track",
    id: "communication",
    num: "05",
    short: "Communication",
    title: "Communication Learning & Capability Development",
    headline: "Communicate with Clarity. Connect with Confidence.",
    kicker: "A 12-Month Communication Development Partnership for Organisations",
    intro: [
      "Communication is one of the most critical yet consistently challenging organisational capabilities. From everyday workplace interactions and customer conversations to leadership communication and brand representation, how people communicate shapes organisational effectiveness.",
      "Talent 833 Partners partners with organisations to strengthen communication across all levels—from frontline employees to CXOs—through a structured, year-long learning journey.",
      "Let us manage your organisation's communication development cycle, from identifying gaps to building skills, reinforcing application and measuring progress.",
    ],
    focusTitle: "Our communication learning offerings",
    focus: [
      {
        title: "Business Communication",
        bullets: ["Verbal and written communication", "Business writing and presentation skills"],
      },
      {
        title: "Interpersonal & Behavioural Communication",
        bullets: ["Active listening and interpersonal effectiveness", "Emotional intelligence and workplace etiquette"],
      },
      {
        title: "Customer & Stakeholder Communication",
        bullets: ["Customer-facing communication", "Stakeholder management and difficult conversations"],
      },
      {
        title: "Executive & Professional Communication",
        bullets: ["Executive presence and influencing", "Public speaking and professional confidence"],
      },
      {
        title: "Team Communication & Collaboration",
        bullets: ["Cross-functional communication", "Feedback, constructive conversations and team alignment"],
      },
      {
        title: "Customised Communication Development Programmes",
        body: "Bespoke communication learning journeys designed around organisational needs, role-specific requirements and identified capability gaps.",
      },
    ],
    outcome:
      "A workforce that communicates with clarity, confidence and consistency—strengthening internal collaboration, customer relationships, leadership effectiveness and the way your organisation represents its brand.",
    closing: "One Organisation. Every Level. One Year of Continuous Communication Development.",
  },
  {
    kind: "track",
    id: "campus-to-corporate",
    num: "06",
    short: "Campus-to-Corporate",
    title: "Campus-to-Corporate Programmes",
    headline: "Bridging the Gap Between Campus and Corporate.",
    intro: [
      "Building confident, competent and workplace-ready graduates through structured employability and career-readiness programmes.",
    ],
    focusTitle: "Our programmes",
    focus: [
      {
        title: "90-Day Campus-to-Corporate Fast Track",
        body: "An intensive foundation programme developing self-awareness, confidence, communication and professional skills.",
      },
      {
        title: "One-Year Campus-to-Corporate Programme",
        body: "A structured academic-year learning journey covering interpersonal skills, communication, corporate grooming and workplace readiness.",
      },
      {
        title: "Interview Readiness Pathway",
        body: "A three-level preparation programme tailored to students' readiness:",
        bullets: ["Find Your Voice – Foundation", "Find Your Expression – Intermediate", "Find Your Edge – Advanced"],
      },
      {
        title: "Customised Campus Development Programmes",
        body: "Bespoke learning solutions designed around institutional requirements, student capabilities and placement-readiness goals.",
      },
    ],
  },
];

export const getPartnershipTrack = (id: string) => partnershipTracks.find((t) => t.id === id);
