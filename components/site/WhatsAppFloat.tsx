import { WhatsAppIcon } from "@/components/icons";
import { whatsappHref } from "@/lib/site";

/**
 * Floating WhatsApp chat button, fixed to the bottom-right corner on every page.
 * Static by design: it stays available without moving beside the content. The label
 * appears on hover and on keyboard focus.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp (opens WhatsApp)"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full md:right-8 md:bottom-8 print:hidden"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full border border-white/12 bg-ink/90 px-4 py-2 text-sm font-semibold whitespace-nowrap text-cream opacity-0 shadow-card backdrop-blur-md transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
        Chat with us
      </span>
      <span className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,0.35)] ring-1 ring-black/20 transition duration-200 group-hover:scale-105 group-active:scale-95 md:size-16">
        <WhatsAppIcon size={30} className="md:size-[34px]" />
      </span>
    </a>
  );
}
