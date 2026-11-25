"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { CheckIcon, MailIcon, WhatsAppIcon } from "@/components/icons";
import { PillButton, cn, surface } from "@/components/ui";
import { services } from "@/lib/content/services";
import { contact, whatsappHref } from "@/lib/site";

const field =
  "w-full rounded-[14px] border border-white/14 bg-white/4 px-4 py-3 text-[15px] text-cream placeholder:text-muted outline-none transition hover:border-white/25 focus:border-gold/70 focus:bg-white/6 aria-invalid:border-[#f08a7e] aria-invalid:bg-[#f08a7e]/[0.06]";
const label = "text-[13px] font-semibold tracking-[0.04em] text-mist";
const errorText = "text-[13px] font-medium text-[#f5a196]";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
/** After submit: the message we handed to WhatsApp (kept so the fallbacks can reuse it). */
type Handoff = { text: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Enquiry form. There's no backend: submitting opens WhatsApp with the details pre-filled,
 * and the visitor sends it from there. The confirmation says exactly that, and offers
 * a link to reopen WhatsApp and an email fallback with the same message.
 */
export function ContactForm() {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [handoff, setHandoff] = useState<Handoff | null>(null);

  function validate(d: FormData): Errors {
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const e: Errors = {};
    if (!get("name")) e.name = "Please tell us your name.";
    if (get("email") && !EMAIL.test(get("email"))) e.email = "That email address doesn't look right.";
    if (!get("message")) e.message = "Please add a short note about what you need.";
    return e;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const found = validate(d);
    setErrors(found);
    const first = (Object.keys(found) as (keyof Errors)[])[0];
    if (first) {
      setHandoff(null);
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    const get = (k: string) => String(d.get(k) ?? "").trim();
    const details = [
      `Name: ${get("name")}`,
      get("company") && `Company: ${get("company")}`,
      get("email") && `Email: ${get("email")}`,
      get("interest") && `Interested in: ${get("interest")}`,
    ].filter(Boolean);
    const text = ["Hi Talent833 Partners,", "", ...details, "", get("message")].join("\n");
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
    setHandoff({ text });
    // Move focus to the confirmation so keyboard and screen-reader users land on the next step.
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  /** Clear a field's error as soon as it's corrected. */
  function onInput(name: keyof Errors) {
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  const describedBy = (name: keyof Errors, hint?: string) =>
    [hint, errors[name] && `${id}-${name}-error`].filter(Boolean).join(" ") || undefined;

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <form
      ref={formRef}
      id="enquiry"
      noValidate
      onSubmit={onSubmit}
      aria-labelledby={`${id}-title`}
      className={cn(surface, "flex scroll-mt-8 flex-col gap-5 rounded-panel p-5 sm:p-6 md:p-8")}
    >
      <div className="flex flex-col gap-1.5">
        <h2 id={`${id}-title`} className="font-display text-2xl font-medium tracking-[-0.02em] md:text-[28px]">
          Send us an enquiry
        </h2>
        <p className="text-sm leading-relaxed text-muted">
          Fill this in and we’ll open WhatsApp with your message ready — press send there and we’ll reply within
          one working day. Fields marked * are required.
        </p>
      </div>

      {/* Summary announced when a submit attempt fails. */}
      <p role="alert" className={cn(errorText, !errorCount && "sr-only")}>
        {errorCount > 0 && `Please fix ${errorCount === 1 ? "1 field" : `${errorCount} fields`} below.`}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-name`} className={label}>
            Name *
          </label>
          <input
            id={`${id}-name`}
            name="name"
            required
            autoComplete="name"
            className={field}
            placeholder="Your name"
            aria-invalid={!!errors.name || undefined}
            aria-describedby={describedBy("name")}
            onInput={() => onInput("name")}
          />
          {errors.name && (
            <p id={`${id}-name-error`} className={errorText}>
              {errors.name}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-company`} className={label}>
            Company
          </label>
          <input
            id={`${id}-company`}
            name="company"
            autoComplete="organization"
            className={field}
            placeholder="Organisation"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-email`} className={label}>
            Work email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className={field}
            placeholder="you@company.com"
            aria-invalid={!!errors.email || undefined}
            aria-describedby={describedBy("email")}
            onInput={() => onInput("email")}
          />
          {errors.email && (
            <p id={`${id}-email-error`} className={errorText}>
              {errors.email}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-interest`} className={label}>
            Interested in
          </label>
          <div className="relative">
            <select id={`${id}-interest`} name="interest" defaultValue="" className={cn(field, "appearance-none pr-10")}>
              <option value="" className="bg-ink">
                Select a service
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.short} className="bg-ink">
                  {s.short}
                </option>
              ))}
              <option value="Something else" className="bg-ink">
                Something else
              </option>
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m4 6 4 4 4-4" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${id}-message`} className={label}>
          How can we help? *
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={5}
          className={cn(field, "resize-y")}
          placeholder="Tell us a little about your goals or the role you're hiring for."
          aria-invalid={!!errors.message || undefined}
          aria-describedby={describedBy("message")}
          onInput={() => onInput("message")}
        />
        {errors.message && (
          <p id={`${id}-message-error`} className={errorText}>
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <PillButton type="submit" variant="gold" size="lg" className="self-start pr-6 pl-1.5">
          <span className="flex size-[38px] items-center justify-center rounded-full bg-[#25D366] text-white">
            <WhatsAppIcon size={20} />
          </span>
          {handoff ? "Open WhatsApp again" : "Continue in WhatsApp"}
        </PillButton>

        {/* Handoff confirmation: honest about what happened (WhatsApp opened, not "sent"). */}
        <div role="status" aria-live="polite">
          {handoff && (
            <div
              ref={statusRef}
              tabIndex={-1}
              className="flex flex-col gap-3 rounded-card border border-gold/30 bg-gold/[0.06] p-4 outline-none md:p-5"
            >
              <p className="flex items-start gap-3 text-[15px] leading-relaxed text-cream">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <CheckIcon size={14} />
                </span>
                <span>
                  <strong className="font-semibold">Your message is ready in WhatsApp.</strong> It isn’t sent until you
                  press send there.
                </span>
              </p>
              <p className="pl-9 text-sm leading-relaxed text-mist">
                Didn’t see a new tab? Your browser may have blocked it.{" "}
                <a
                  href={whatsappHref(handoff.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gold underline-offset-4 hover:underline"
                >
                  Open WhatsApp with your message
                </a>{" "}
                or{" "}
                <a
                  href={`${contact.emailHref}?subject=${encodeURIComponent("Enquiry for Talent833 Partners")}&body=${encodeURIComponent(handoff.text)}`}
                  className="inline-flex items-center gap-1 font-semibold text-gold underline-offset-4 hover:underline"
                >
                  <MailIcon size={14} /> email it to {contact.email}
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
