import { PageBackdrop, RuleHeading, darkPanel, goldPanel, iconTile } from "@/components/services/trainingUi";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { Breadcrumbs, Container, Eyebrow, cn } from "@/components/ui";
import { corporateTraining as ct } from "@/lib/content/corporateTraining";
import { enquiryMessage, routes } from "@/lib/site";

/** Corporate Training page body: intro, the two programme panels and other offerings. */
export function CorporateTraining() {
  const Comm = ct.communication.icon;
  const Lead = ct.leadership.icon;

  return (
    <section aria-labelledby="ct-title" className="relative isolate overflow-hidden">
      <PageBackdrop id="ct" />

      <Container className="flex flex-col gap-10 pt-[120px] pb-16 md:gap-12 md:pt-[150px] md:pb-20 xl:pb-24">
        {/* Intro */}
        <header className="flex max-w-[1240px] animate-rise flex-col gap-5">
          <Breadcrumbs crumbs={[{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Corporate Training" }]} />
          <Eyebrow>{ct.eyebrow}</Eyebrow>
          <h1
            id="ct-title"
            className="font-display text-[34px] leading-[1.08] font-semibold tracking-[-0.025em] md:text-5xl xl:text-[52px]"
          >
            {ct.title[0]} <span className="text-gold">{ct.title[1]}</span> {ct.title[2]}
          </h1>
          <p className="max-w-[980px] text-base leading-relaxed text-mist md:text-lg">{ct.intro}</p>
          <p className="max-w-[920px] border-l-2 border-gold pl-5 text-[15px] leading-relaxed text-cream/85 italic md:text-base">
            {ct.note}
          </p>
          <WhatsAppLink
            variant="gold"
            size="lg"
            label="Enquire on WhatsApp"
            message={enquiryMessage("Corporate Training")}
            className="mt-1 w-fit"
          />
        </header>

        {/* Programme panels */}
        <div className="grid gap-5 xl:grid-cols-[1.12fr_1fr] xl:gap-6">
          <article
            aria-labelledby="ct-comm"
            className={cn(darkPanel, "rounded-[26px] p-5 md:p-8")}
          >
            <PanelHeading id="ct-comm" icon={<Comm size={28} />} tile>
              {ct.communication.title}
            </PanelHeading>
            <ol className="relative mt-6 grid gap-x-8 gap-y-3.5 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-5 sm:before:absolute sm:before:inset-y-0 sm:before:left-1/2 sm:before:w-px sm:before:bg-white/10 md:mt-8 md:gap-y-4">
              {ct.communication.items.map((item, i) => (
                <li key={item} className="flex items-center gap-4 text-[15px] leading-snug text-cream/90">
                  <span className="grid h-8 min-w-10 place-items-center rounded-lg bg-gold/10 text-sm font-bold text-gold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </article>

          <article
            aria-labelledby="ct-lead"
            className={cn(goldPanel, "flex flex-col rounded-[26px] p-5 md:p-8")}
          >
            <PanelHeading id="ct-lead" icon={<Lead size={36} />}>
              {ct.leadership.title}
            </PanelHeading>
            <ul className="mt-5 grid grow grid-cols-2 sm:grid-cols-4 md:mt-6">
              {ct.leadership.items.map(({ title, icon: Icon }, i) => (
                <li
                  key={title}
                  className={cn(
                    "flex flex-col items-center justify-center gap-2.5 border-gold/20 px-2 py-4 text-center text-sm leading-snug text-cream/90 md:py-5",
                    i % 2 === 1 && "max-sm:border-l",
                    i < 6 && "max-sm:border-b",
                    i % 4 !== 0 && "sm:border-l",
                    i < 4 && "sm:border-b",
                  )}
                >
                  <Icon size={30} strokeWidth={1.5} className="text-gold" />
                  {title}
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Other offerings */}
        <div aria-labelledby="ct-other" className="flex flex-col gap-6">
          <RuleHeading id="ct-other">{ct.other.title}</RuleHeading>
          <ul className="grid gap-3 sm:grid-cols-2 lg:gap-4 xl:grid-cols-4">
            {ct.other.items.map(({ title, icon: Icon }) => (
              <li
                key={title}
                className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-gold/40 md:gap-5 md:p-5"
              >
                <Icon size={38} strokeWidth={1.5} className="shrink-0 text-gold" />
                <span className="text-[15px] leading-snug font-medium text-cream">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function PanelHeading({
  id,
  icon,
  tile,
  children,
}: {
  id: string;
  icon: React.ReactNode;
  tile?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 md:gap-5">
      <span aria-hidden="true" className={cn(tile ? cn(iconTile, "size-14") : "grid shrink-0 place-items-center text-gold")}>
        {icon}
      </span>
      <span aria-hidden="true" className="h-10 w-px bg-white/25" />
      <h2 id={id} className="font-display text-xl leading-tight font-semibold tracking-[-0.015em] md:text-2xl">
        {children}
      </h2>
    </div>
  );
}
