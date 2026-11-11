"use client";

import { useId, useState, type FormEvent } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { cn, surface } from "@/components/ui";
import { services } from "@/lib/content/services";
import { whatsappHref } from "@/lib/site";

const field =
  "w-full rounded-[14px] border border-white/14 bg-white/4 px-4 py-3 text-[15px] text-cream placeholder:text-muted outline-none transition focus:border-gold/70 focus:bg-white/6";
const label = "text-[13px] font-semibold tracking-[0.04em] text-mist";

/**
 * Enquiry form. There's no backend, so submitting opens WhatsApp
 * with the details pre-filled as a message.
 */
export function ContactForm() {
  const id = useId();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const details = [
      `Name: ${get("name")}`,
      get("company") && `Company: ${get("company")}`,
      get("email") && `Email: ${get("email")}`,
      get("interest") && `Interested in: ${get("interest")}`,
    ].filter(Boolean);
    const text = ["Hi Talent833 Partners,", "", ...details, "", get("message")].join("\n");
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className={cn(surface, "flex flex-col gap-5 rounded-[22px] p-6 md:p-8")}>
      <div className="flex flex-col gap-1.5">
        <h2 className="font-display text-2xl font-medium tracking-[-0.02em] md:text-[28px]">Send us an enquiry</h2>
        <p className="text-sm text-muted">We’ll pick it up on WhatsApp and get back to you within one working day.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-name`} className={label}>
            Name *
          </label>
          <input id={`${id}-name`} name="name" required autoComplete="name" className={field} placeholder="Your name" />
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
            autoComplete="email"
            className={field}
            placeholder="you@company.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-interest`} className={label}>
            Interested in
          </label>
          <select id={`${id}-interest`} name="interest" defaultValue="" className={cn(field, "appearance-none")}>
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
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex h-[52px] cursor-pointer items-center gap-2 rounded-full bg-gold pr-6 pl-1.5 text-[15px] font-bold text-ink transition duration-200 hover:-translate-y-px"
        >
          <span className="flex size-[38px] items-center justify-center rounded-full bg-[#25D366] text-white">
            <WhatsAppIcon size={20} />
          </span>
          Send via WhatsApp
        </button>
        <p role="status" className="text-sm text-mist">
          {sent && "WhatsApp opened in a new tab. Just hit send there."}
        </p>
      </div>
    </form>
  );
}
