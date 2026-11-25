"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRightIcon, ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { cn } from "@/components/ui";
import { heroServices } from "@/lib/content/home";
import { serviceHref, serviceSubItems } from "@/lib/content/services";
import { logos, primaryNav, routes } from "@/lib/site";
import { WhatsAppLink } from "./WhatsAppLink";

/** All five services (same order as the hero cards). */
const navServices = heroServices;

export function Header() {
  const [open, setOpen] = useState(false);
  /** Mobile: which service's sub-list is expanded. */
  const [openSub, setOpenSub] = useState<string | null>(null);
  const menuId = useId();
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === routes.home ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  // Close on Escape and lock page scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    // z-50 keeps the open mobile menu above the floating WhatsApp button (z-40).
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:h-[88px] xl:px-14">
        <Link href={routes.home} aria-label="Talent833 HR Services home" className="flex items-center gap-2 lg:gap-3">
          <Image
            src={logos.mark.src}
            width={logos.mark.width}
            height={logos.mark.height}
            alt=""
            className="h-[34px] w-auto lg:h-[46px]"
            preload
          />
          {/* Text wordmark echoing the lockup: silver TALENT, gold 833, spaced HR SERVICES */}
          <span aria-hidden="true" className="flex flex-col items-center leading-none">
            <span className="font-display text-[19px] font-semibold tracking-[0.06em] lg:text-[25px]">
              <span className="bg-linear-to-b from-white to-silver bg-clip-text text-transparent">TALENT</span>
              <span className="bg-linear-to-b from-gold-light to-gold bg-clip-text text-transparent">833</span>
            </span>
            <span className="mt-0.5 text-[7px] font-semibold tracking-[0.42em] text-silver lg:text-[9px]">
              HR SERVICES
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden gap-1.5 rounded-[28px] border border-white/10 bg-white/5 p-1.5 lg:flex"
        >
          {primaryNav.map((item) =>
            item.href === routes.services ? (
              <ServicesDropdown key={item.href} active={isActive(item.href)} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-[22px] px-[18px] py-2.5 text-sm font-medium transition-colors",
                  isActive(item.href) ? "bg-white/10 text-cream" : "hover:text-gold",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppLink variant="light" className="text-sm" />
        </div>

        <button
          type="button"
          onClick={() => {
            // Opening: show the current service's programmes straight away.
            if (!open) setOpenSub(navServices.find((s) => isActive(serviceHref(s.slug)))?.slug ?? null);
            setOpen((v) => !v);
          }}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center rounded-full border border-white/18 bg-white/5 transition hover:border-gold/60 lg:hidden"
        >
          {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id={menuId}
        hidden={!open}
        className="fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-ink/95 backdrop-blur-md lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 pt-4 pb-10">
          {primaryNav.map((item) => (
            <div key={item.href} className="border-b border-white/12">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between py-5",
                  "font-display text-[28px] font-medium tracking-[-0.02em] transition-colors hover:text-gold",
                  isActive(item.href) && "text-gold",
                )}
              >
                {item.label}
                <ArrowUpRightIcon size={18} className="text-gold" />
              </Link>
              {item.href === routes.services && (
                <ul className="-mt-1 flex flex-col gap-1 pb-5 pl-4">
                  {navServices.map((s) => {
                    const subItems = serviceSubItems[s.slug];
                    const expanded = openSub === s.slug;
                    return (
                      <li key={s.slug}>
                        <div className="flex items-center">
                          <Link
                            href={serviceHref(s.slug)}
                            onClick={() => setOpen(false)}
                            aria-current={pathname === serviceHref(s.slug) ? "page" : undefined}
                            className={cn(
                              "flex min-h-11 grow items-center gap-3 py-2 text-base transition-colors hover:text-gold",
                              isActive(serviceHref(s.slug)) ? "text-gold" : "text-mist",
                            )}
                          >
                            <s.icon size={18} className="shrink-0 text-gold" />
                            {s.title}
                          </Link>
                          {subItems && (
                            <button
                              type="button"
                              onClick={() => setOpenSub(expanded ? null : s.slug)}
                              aria-expanded={expanded}
                              aria-label={`${expanded ? "Hide" : "Show"} ${s.title} programmes`}
                              className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/14 text-gold transition-colors hover:border-gold/60 aria-expanded:bg-gold/12"
                            >
                              <ChevronDownIcon
                                size={16}
                                className={cn("transition-transform duration-200", expanded && "rotate-180")}
                              />
                            </button>
                          )}
                        </div>
                        {subItems && expanded && (
                          <ul className="mt-1 mb-2 ml-[9px] flex flex-col border-l border-gold/30 pl-5">
                            {subItems.map((sub) => (
                              <li key={sub.href}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setOpen(false)}
                                  aria-current={pathname === sub.href ? "page" : undefined}
                                  className="flex min-h-10 items-center py-2 text-sm text-mist transition-colors hover:text-gold aria-[current=page]:text-gold"
                                >
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
          <WhatsAppLink
            variant="gold"
            size="lg"
            onClick={() => setOpen(false)}
            className="mt-8 justify-center"
          />
        </nav>
      </div>
    </header>
  );
}

/** Desktop "Services" item: clicking goes to the services page; the panel opens on hover or keyboard focus
 * and closes on Escape, outside click or picking a link. */
function ServicesDropdown({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    // Escape closes the panel; if focus was inside it, hand focus back to the trigger so it isn't lost.
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (ref.current?.contains(document.activeElement)) triggerRef.current?.focus();
      setOpen(false);
    };
    const onClick = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
      onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
    >
      <Link
        ref={triggerRef}
        href={routes.services}
        aria-current={pathname === routes.services ? "page" : undefined}
        aria-expanded={open}
        aria-controls={panelId}
        className={cn(
          "flex cursor-pointer items-center gap-1.5 rounded-[22px] px-[18px] py-2.5 text-sm font-medium transition-colors",
          active ? "bg-white/10 text-cream" : "hover:text-gold",
          open && !active && "text-gold",
        )}
      >
        Services
        <ChevronDownIcon size={14} className={cn("transition-transform duration-200", open && "rotate-180")} />
      </Link>

      {/* pt-3 bridges the gap so the panel stays open while the pointer moves onto it */}
      <div id={panelId} hidden={!open} className="absolute top-full left-1/2 w-[340px] -translate-x-1/2 pt-3">
        <div className="rounded-[20px] border border-white/12 bg-ink/95 p-2 shadow-card backdrop-blur-md">
          <ul className="flex flex-col">
            {navServices.map((s) => {
              const href = serviceHref(s.slug);
              const subItems = serviceSubItems[s.slug];
              return (
                <li key={s.slug} className="group/sub relative">
                  <Link
                    href={href}
                    aria-current={pathname === href ? "page" : undefined}
                    className={cn(
                      "group flex items-center gap-3 rounded-[14px] p-2.5 transition-colors group-hover/sub:bg-white/6 hover:bg-white/6 aria-[current=page]:bg-white/8",
                      pathname.startsWith(`${href}/`) && "bg-white/8",
                    )}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-gold/12 text-gold">
                      <s.icon size={18} />
                    </span>
                    <span className="flex grow flex-col gap-0.5">
                      <span className="text-sm font-medium text-cream transition-colors group-hover/sub:text-gold">
                        {s.title}
                      </span>
                      <span className="text-xs text-muted">{s.tag}</span>
                    </span>
                    {subItems && (
                      <ChevronDownIcon size={14} className="shrink-0 -rotate-90 text-muted group-hover/sub:text-gold" />
                    )}
                  </Link>

                  {/* Second step: flyout to the right, shown while hovering / focusing this row. */}
                  {subItems && (
                    <div className="invisible absolute top-0 left-full w-[330px] pl-3 opacity-0 transition-opacity duration-150 group-focus-within/sub:visible group-focus-within/sub:opacity-100 group-hover/sub:visible group-hover/sub:opacity-100">
                      <div className="rounded-[20px] border border-white/12 bg-ink/95 p-2 shadow-card backdrop-blur-md">
                        <p className="px-2.5 pt-1.5 pb-2 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                          {s.title}
                        </p>
                        <ul className="flex flex-col">
                          {subItems.map((sub, n) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                aria-current={pathname === sub.href ? "page" : undefined}
                                className="flex items-center gap-3 rounded-[12px] px-2.5 py-2 text-sm text-mist transition-colors hover:bg-white/6 hover:text-gold aria-[current=page]:bg-white/8 aria-[current=page]:text-gold"
                              >
                                <span className="w-5 shrink-0 text-[11px] font-semibold tracking-[0.08em] text-gold">
                                  {String(n + 1).padStart(2, "0")}
                                </span>
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
