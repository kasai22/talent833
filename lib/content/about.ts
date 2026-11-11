import { CompassIcon, ShieldCheckIcon, TargetIcon, UsersIcon } from "@/components/icons";
import type { IconProps } from "@/components/icons";

type Icon = (p: IconProps) => React.JSX.Element;

/**
 * About page content.
 * Photos: drop files into /public/team/ and set `photo` to e.g. "/team/ceo.jpg".
 * Until a photo is set, a gold monogram of the person's initials is shown instead.
 * Portrait (4:5) images around 800×1000px work best.
 */
export type Person = {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
  linkedin?: string;
};

export const ceo: Person & { message: string[]; highlights: string[] } = {
  name: "[CEO Name]",
  role: "Founder & Chief Executive Officer",
  photo: undefined, // e.g. "/team/ceo.jpg"
  linkedin: undefined,
  message: [
    "We started Talent833 Partners with a simple belief: organisations grow when their people do. Too often, learning is treated as an event and hiring as a transaction. We set out to change both.",
    "Every partnership we take on is built around the business, not a catalogue. We sit with leaders, understand what success looks like, and design the capability — or find the leader — that gets them there.",
  ],
  highlights: ["[XX]+ years in L&D and talent", "[XX]+ leadership roles placed", "Partnered with [XX]+ organisations"],
};

export const team: Person[] = [
  { name: "[Team Member]", role: "Head of Learning Solutions", photo: undefined },
  { name: "[Team Member]", role: "Executive Search Lead", photo: undefined },
  { name: "[Team Member]", role: "Programme Director", photo: undefined },
  { name: "[Team Member]", role: "Client Partnerships", photo: undefined },
  { name: "[Team Member]", role: "Instructional Design Lead", photo: undefined },
  { name: "[Team Member]", role: "Talent Research Associate", photo: undefined },
];

export const values: { title: string; body: string; icon: Icon }[] = [
  {
    title: "Business first",
    body: "Every programme and every search starts with the outcome your business needs.",
    icon: TargetIcon,
  },
  {
    title: "Partners, not vendors",
    body: "We stay with you beyond delivery and measure what changes on the ground.",
    icon: UsersIcon,
  },
  {
    title: "Practical expertise",
    body: "Practitioners who have led L&D and hiring from the inside, not just advised on it.",
    icon: CompassIcon,
  },
  {
    title: "Trust and discretion",
    body: "Confidential searches and candid advice, handled with care at every step.",
    icon: ShieldCheckIcon,
  },
];

export const initials = (name: string) =>
  name
    .replace(/[[\]]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
