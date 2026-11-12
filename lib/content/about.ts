/**
 * About page content. Source of truth: /content/conrent.txt — keep copy verbatim.
 * Photos: drop a file into /public/ and set `photo` to its path, e.g. "/sanjonaImage.jpeg".
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

export const about = {
  eyebrow: "About Talent 833 Partners",
  title: "Learning That Translates Into Real Impact.",
  body: [
    "At Talent 833 Partners, we believe learning should go beyond the classroom. We believe in experiential learning that builds capabilities, shifts behaviours and creates meaningful change.",
    "Our programmes are designed around real workplace challenges, with a focus on practical application, measurable impact and business outcomes.",
    "Whether it's developing leaders, strengthening teams or building organisational capabilities, we aim to make every learning intervention count.",
  ],
  cta: "Let's understand your organisation and explore how we can make learning work for your business.",
};

export const founder: Person & {
  alsoKnownAs: string;
  title: string;
  message: string[];
  venture: { before: string; bold: string; after: string };
  focus: { lead: string; bold: string };
  nameNote: string;
  cta: string;
} = {
  name: "Sanjona Jonnavithula",
  alsoKnownAs: "Also addressed as Sanjana.",
  role: "Founder",
  photo: "/sanjonaImage.jpeg",
  linkedin: undefined,
  title: "13 Years in Learning & Development. Now Building What's Next.",
  message: [
    "I bring over 13 years of experience in Learning & Development, specialising in leadership development, organisational capability building and behavioural learning.",
    "Throughout my journey, I have designed and facilitated learning experiences for diverse audiences, helping individuals strengthen their capabilities, shift behaviours and translate learning into workplace performance.",
    "I believe learning should go beyond the classroom. It should be experiential, practical and purposeful, with measurable outcomes that create meaningful impact for both people and businesses.",
  ],
  venture: {
    before: "Today, I bring this experience and philosophy to ",
    bold: "Talent 833 Partners",
    after:
      ", a venture built on my belief that the right talent and the right learning experiences can transform organisational performance.",
  },
  focus: { lead: "My focus is simple: ", bold: "People. Learning. Performance." },
  nameNote:
    "And yes, it's Sanjona, though my name is addressed as Sanjana. The story behind the spelling is for another day!",
  cta: "Let's connect and explore how we can create meaningful impact for your organisation.",
};

export const initials = (name: string) =>
  name
    .replace(/[[\]]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
