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

/** About page hero only. `about` above still feeds the home page "Who we are" block. */
export const aboutHero = {
  eyebrow: "About Talent833 Partners",
  /** The title is set in two lines; `titleAccent` is the gold italic second line. */
  titleLead: "Capability is built by people.",
  titleAccent: "We start there.",
  intro:
    "Talent833 Partners helps organisations build the capability they need and hire the talent that will carry it forward.",
  /** Pull quote runs: `{ strong }` is set bright and bold, `{ gold }` in gold. */
  quote: [
    "We bring ",
    { strong: "learning" },
    " and ",
    { strong: "hiring" },
    " together because the strongest organisations ",
    { gold: "grow both" },
    " at once: ",
    { gold: "people" },
    " who keep developing, and leaders who are chosen with care.",
  ] satisfies Array<string | { strong: string } | { gold: string }>,
  philosophiesTitle: "Our Philosophies",
  philosophies: [
    {
      number: "01",
      area: "Learning",
      icon: "book",
      tagline: "Break the Routine. Rethink the Experience.",
      belief: "We believe people learn by doing, not by sitting through slides.",
      detail:
        "So we replace lecture-led sessions with immersive, experiential learning rooted in real work and built to change what people do on Monday morning.",
    },
    {
      number: "02",
      area: "Capability Building",
      icon: "users",
      tagline: "An Eagle's Eye. A Human-Centred Lens.",
      belief: "We believe capability grows where strategy meets people.",
      detail:
        "We start with the view from above: where the organisation is and where it needs to go. Then we come down to the people who will get it there, building on their strengths, not just filling gaps.",
    },
    {
      number: "03",
      area: "Talent Acquisition",
      icon: "handshake",
      tagline: "Beyond the Resume. Into What Makes a Person.",
      belief: "We believe a resume tells you where someone has been, not who they are.",
      detail:
        "We look at how people think, what drives them and what they could bring to a role, so every hire is a match of person to purpose, not just profile to job description.",
    },
  ] satisfies Array<{ icon: "book" | "users" | "handshake" } & Record<string, string>>,
};

/** Each `body` paragraph is a list of runs; `{ strong }` runs are set in bold. */
export const founder: Person & {
  eyebrow: string;
  alsoKnownAs: string;
  title: string;
  body: Array<Array<string | { strong: string }>>;
  closing: string;
  cta: { title: string; body: string };
} = {
  eyebrow: "Meet the founder",
  name: "Sanjona Jonnavithula",
  alsoKnownAs: "Also addressed as Sanjana.",
  role: "Founder & Chief Talent Strategist, Talent 833 Partners",
  photo: "/sanjonaImage.jpeg",
  linkedin: "https://www.linkedin.com/in/sanjona-jonnavithula",
  title: "People learn differently. They grow differently. There is no one-size-fits-all way forward.",
  body: [
    [
      "For me, learning is more than transferring knowledge. It should challenge assumptions, open up new perspectives and influence how we think and act.",
    ],
    [
      "Over 13 years in Learning & Development, I've worked across leadership development, behavioural learning and organisational capability, designing experiences that help people and businesses grow.",
    ],
    [
      "I've always believed that people shouldn't be shaped to fit predefined moulds. ",
      {
        strong:
          "The best work happens when we recognise individuality, question convention and make room for different ways of thinking and growing.",
      },
    ],
    ["Because transformation is a journey, not a one-time intervention."],
    [
      "That belief is at the heart of Talent 833 Partners — bringing a more thoughtful, human-centred approach to talent and development.",
    ],
  ],
  closing: "Less convention. More curiosity. More possibility.",
  cta: {
    title: "Let's start a conversation.",
    body: "Have a people challenge or an idea that deserves a different approach? I'd love to hear from you.",
  },
};

export const initials = (name: string) =>
  name
    .replace(/[[\]]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
