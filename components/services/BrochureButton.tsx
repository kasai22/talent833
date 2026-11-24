"use client";

import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { CloseIcon, WhatsAppIcon } from "@/components/icons";
import { CheckMark, DownloadIcon } from "@/components/services/trainingIcons";
import { cn } from "@/components/ui";
import { whatsappHref } from "@/lib/site";

type Props = {
  /** Offering id, as keyed in lib/content/brochures.ts. */
  offering: string;
  /** Brochure title shown in the dialog. */
  title: string;
  className?: string;
  /** Button content; defaults to an icon + "Download Brochure". */
  children?: ReactNode;
};

type State =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent"; email: string; download: string }
  | { kind: "error"; message: string; download?: string };

const field =
  "w-full rounded-[14px] border border-white/14 bg-white/4 px-4 py-3 text-[15px] text-cream placeholder:text-muted outline-none transition focus:border-gold/70 focus:bg-white/6";

const goldButton =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-light/90 to-gold px-6 text-[15px] font-bold whitespace-nowrap text-ink transition duration-200 hover:-translate-y-px disabled:cursor-wait disabled:opacity-70";

/**
 * "Download Brochure" trigger. Opens a dialog that asks for the visitor's email, emails them the
 * brochure (app/api/brochure/route.ts) and then offers the file for immediate download.
 */
export function BrochureButton({ offering, title, className, children }: Props) {
  const id = useId();
  const ref = useRef<HTMLDialogElement>(null);
  const [state, setState] = useState<State>({ kind: "idle" });

  const open = () => {
    setState({ kind: "idle" });
    ref.current?.showModal();
  };
  const close = () => ref.current?.close();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const email = String(d.get("email") ?? "").trim();
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, offering, website: d.get("website") ?? "" }),
      });
      const data = (await res.json().catch(() => ({}))) as { download?: string; error?: string };
      if (res.ok && data.download) setState({ kind: "sent", email, download: data.download });
      else
        setState({
          kind: "error",
          message: data.error ?? "Something went wrong.",
          download: data.download,
        });
    } catch {
      setState({ kind: "error", message: "We couldn't reach the server. Please check your connection." });
    }
  }

  return (
    <>
      <button type="button" onClick={open} className={cn("cursor-pointer", className)}>
        {children ?? (
          <>
            <DownloadIcon size={15} />
            Download Brochure
          </>
        )}
      </button>

      <dialog
        ref={ref}
        aria-labelledby={`${id}-title`}
        // Clicking the backdrop (the dialog element itself, outside the panel) closes it.
        onClick={(e) => e.target === e.currentTarget && close()}
        className={cn(
          "m-0 max-h-[92dvh] w-full max-w-none overflow-y-auto bg-surface p-0 text-cream",
          "top-auto bottom-0 animate-sheet rounded-t-3xl border-t border-white/14",
          "md:inset-0 md:m-auto md:h-fit md:w-[520px] md:max-w-[calc(100%-2rem)] md:animate-rise md:rounded-3xl md:border md:shadow-dialog",
          "backdrop:bg-black/72 backdrop:backdrop-blur-[6px]",
        )}
      >
        <div className="flex flex-col gap-5 px-6 pt-7 pb-8 md:p-9">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Free brochure</p>
              <h2 id={`${id}-title`} className="font-display text-2xl leading-tight font-semibold md:text-[26px]">
                {title}
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border border-white/18 transition hover:border-gold/60"
            >
              <CloseIcon size={18} />
            </button>
          </div>

          {state.kind === "sent" ? (
            <div role="status" className="flex flex-col gap-5">
              <p className="flex items-start gap-3 text-[15px] leading-relaxed text-mist">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <CheckMark size={15} />
                </span>
                <span>
                  We’ve emailed the brochure to <strong className="text-cream">{state.email}</strong>. It should arrive in
                  a minute or two. Check your spam folder if you don’t see it.
                </span>
              </p>
              <a href={state.download} download className={cn(goldButton, "w-full")}>
                <DownloadIcon size={16} />
                Download it now
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <p className="text-[15px] leading-relaxed text-mist">
                Enter your email and we’ll send you the brochure, plus a download link right here.
              </p>
              <label htmlFor={`${id}-email`} className="sr-only">
                Work email
              </label>
              <input
                id={`${id}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className={field}
              />
              {/* Honeypot: hidden from people, often filled in by bots. */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

              {state.kind === "error" && (
                <div role="alert" className="flex flex-col gap-3 rounded-xl border border-white/14 p-4 text-sm text-mist">
                  <p>
                    <strong className="text-cream">{state.message}</strong>{" "}
                    {state.download ? "You can still download it below." : "Please try again in a moment."}
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 font-semibold">
                    {state.download && (
                      <a href={state.download} download className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light">
                        <DownloadIcon size={14} /> Download brochure
                      </a>
                    )}
                    <a
                      href={whatsappHref(`Hi Talent833 Partners, please share the brochure for ${title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-cream hover:text-gold"
                    >
                      <WhatsAppIcon size={14} /> Ask on WhatsApp
                    </a>
                  </div>
                </div>
              )}

              <button type="submit" disabled={state.kind === "sending"} className={goldButton}>
                {state.kind === "sending" ? "Sending…" : "Email me the brochure"}
              </button>
              <p className="text-xs text-muted">We’ll only use your email to send this brochure and follow up about it.</p>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
