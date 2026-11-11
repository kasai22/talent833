"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRightIcon, CloseIcon } from "@/components/icons";
import { PillLink } from "@/components/ui";
import type { HeroService } from "@/lib/content/home";
import { routes } from "@/lib/site";

type Props = {
  service: HeroService | null;
  onClose: () => void;
};

/**
 * Service detail modal. Uses the native <dialog> element for focus
 * trapping, Esc-to-close and the top layer. Renders as a bottom sheet
 * on small screens and a centred card from `md` up.
 */
export function ServiceDialog({ service, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = service !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="service-dialog-title"
      onClose={onClose}
      // Clicking the backdrop (the dialog element itself, outside the panel) closes it.
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className={[
        "m-0 max-h-[92dvh] w-full max-w-none overflow-y-auto bg-surface p-0 text-cream",
        "top-auto bottom-0 rounded-t-3xl border-t border-white/14 animate-sheet",
        "md:inset-0 md:m-auto md:h-fit md:w-[600px] md:max-w-[calc(100%-2rem)] md:rounded-3xl md:border md:shadow-dialog md:animate-rise",
        "backdrop:bg-black/72 backdrop:backdrop-blur-[6px]",
      ].join(" ")}
    >
      {service && (
        <div className="flex flex-col gap-[18px] px-6 pt-7 pb-8 md:gap-[22px] md:p-10">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Service {service.num}</p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/18 transition hover:-translate-y-px hover:border-gold/60"
            >
              <CloseIcon size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            <h2
              id="service-dialog-title"
              className="font-display text-[30px] leading-[1.05] font-medium tracking-[-0.02em] md:text-[40px]"
            >
              {service.title}
            </h2>
            <p className="text-base text-mist">{service.tag}</p>
          </div>

          <p className="rounded-xl border border-dashed border-white/18 p-4 text-[15px] leading-relaxed text-muted">
            {service.desc}
          </p>

          <ul className="grid grid-cols-1 gap-2.5 text-sm text-mist sm:grid-cols-2">
            {service.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <PillLink href={routes.contact} variant="gold" className="h-12" onClick={onClose}>
              Enquire now <ArrowUpRightIcon size={14} />
            </PillLink>
            <PillLink href={routes.services} variant="outline" className="h-12 px-[18px]" onClick={onClose}>
              View all services
            </PillLink>
          </div>
        </div>
      )}
    </dialog>
  );
}
