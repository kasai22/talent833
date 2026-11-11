import { CheckIcon } from "@/components/icons";
import { cn } from "@/components/ui";
import type { Service } from "@/lib/content/services";

/** Illustrated card shown beside each service (decorative). */
export function ServiceVisual({ service, className }: { service: Service; className?: string }) {
  const gold = service.tone === "gold";
  const Icon = service.icon;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex h-[300px] items-center justify-center overflow-hidden rounded-[22px] border border-white/12 bg-surface px-6 pt-20 pb-8 md:h-[400px] md:rounded-[28px] md:p-12",
        className,
      )}
    >
      <div
        className={cn(
          "absolute -top-[60px] -right-[60px] size-[220px] rounded-full border opacity-20",
          gold ? "border-gold" : "border-silver",
        )}
      />
      <span className="absolute top-5 left-5 flex size-12 items-center justify-center rounded-2xl bg-white/6 md:top-7 md:left-7 md:size-14">
        <Icon size={28} className={gold ? "text-gold" : "text-silver"} />
      </span>
      <Art kind={service.visual} />
    </div>
  );
}

function Art({ kind }: { kind: Service["visual"] }) {
  switch (kind) {
    case "people":
      return (
        <div className="flex items-center">
          {["#5A5A5A", "#C9C9C6", "#8E8E8E", "#E6AB3F", "#BDBDBD"].map((c, i) => (
            <span
              key={c}
              className={cn("size-12 rounded-full border-[3px] border-surface md:size-16", i > 0 && "-ml-3 md:-ml-4")}
              style={{ background: c }}
            />
          ))}
        </div>
      );

    case "checklist":
      return (
        <ul className="flex w-full flex-col gap-3">
          {["Training needs analysis", "Learning strategy", "Competency frameworks"].map((t) => (
            <li key={t} className="flex items-center gap-3 rounded-[14px] bg-white/5 px-4 py-3.5 text-sm md:text-[15px]">
              <span className="flex size-6 items-center justify-center rounded-lg bg-silver/15 text-silver">
                <CheckIcon size={14} />
              </span>
              {t}
              <span className="ml-auto text-xs text-silver">Done</span>
            </li>
          ))}
        </ul>
      );

    case "orgTree":
      return (
        <svg viewBox="0 0 300 180" className="w-[240px] md:w-[300px]">
          <path
            d="M150 30 V70 M50 70 H250 M50 70 V110 M150 70 V110 M250 70 V110"
            fill="none"
            stroke="#BDBDBD"
            strokeOpacity={0.6}
            strokeWidth={1.5}
          />
          <g fill="#1A1A1A" stroke="#FFFFFF" strokeWidth={1.5}>
            <circle cx="150" cy="24" r="18" />
            <circle cx="50" cy="126" r="16" />
            <circle cx="150" cy="126" r="16" />
            <circle cx="250" cy="126" r="16" />
          </g>
          <circle cx="150" cy="24" r="6" fill="#E6AB3F" />
        </svg>
      );

    case "bars":
      return (
        <div className="flex w-full flex-col gap-3.5">
          {[
            ["Workplace", 100],
            ["Leadership", 72],
            ["Sales", 38],
            ["Teams", 10],
          ].map(([label, pct]) => (
            <div key={label} className="flex items-center gap-3.5 text-sm text-muted">
              <span className="w-[84px]">{label}</span>
              <span className="relative h-2.5 grow overflow-hidden rounded-full bg-white/8">
                <span className="absolute inset-y-0 left-0 rounded-full bg-gold" style={{ width: `${pct}%` }} />
              </span>
              <span className="w-9 text-right">{pct}%</span>
            </div>
          ))}
        </div>
      );

    case "growth":
      return (
        <div className="flex h-[150px] items-end gap-3">
          {[
            [40, 0.25],
            [64, 0.35],
            [90, 0.5],
            [118, 0.7],
            [150, 1],
          ].map(([h, a]) => (
            <span
              key={h}
              className="w-9 rounded-t-[10px] rounded-b-[4px] md:w-11"
              style={{ height: h, background: `rgba(230,171,63,${a})` }}
            />
          ))}
        </div>
      );
  }
}
