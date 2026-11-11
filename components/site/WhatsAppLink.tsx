import type { ComponentProps } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { PillLink, cn } from "@/components/ui";
import { whatsappHref } from "@/lib/site";

type Props = Omit<ComponentProps<typeof PillLink>, "href" | "children"> & {
  /** Pre-filled chat message. */
  message?: string;
  label?: string;
};

/**
 * "Connect on WhatsApp" CTA: WhatsApp-green badge with the glyph and a live "online" dot,
 * so it reads as a chat, not a form. Opens WhatsApp (app or web) in a new tab.
 */
export function WhatsAppLink({ message, label = "Connect on WhatsApp", variant = "light", className, ...props }: Props) {
  return (
    <PillLink
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens WhatsApp)`}
      variant={variant}
      className={cn("pl-1.5", className)}
      {...props}
    >
      <span className="relative flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
        <WhatsAppIcon size={19} />
        <span
          aria-hidden="true"
          className={cn(
            "absolute -top-0.5 -right-0.5 size-2.5 animate-pulse-soft rounded-full border-2 bg-[#25D366]",
            variant === "gold" ? "border-gold" : variant === "light" ? "border-cream" : "border-ink",
          )}
        />
      </span>
      {label}
    </PillLink>
  );
}
