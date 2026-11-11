"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { PillLink, cn } from "@/components/ui";
import { logos, primaryNav, routes } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

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
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:h-[88px] xl:px-14">
        <Link href={routes.home} aria-label="Talent833 Partners home" className="flex items-center gap-2 lg:gap-3">
          <Image
            src={logos.mark.src}
            width={logos.mark.width}
            height={logos.mark.height}
            alt=""
            className="h-[34px] w-auto lg:h-[46px]"
            preload
          />
          {/* Text wordmark echoing the lockup: silver TALENT, gold 833, spaced PARTNERS */}
          <span aria-hidden="true" className="flex flex-col items-center leading-none">
            <span className="font-display text-[19px] font-semibold tracking-[0.06em] lg:text-[25px]">
              <span className="bg-linear-to-b from-white to-silver bg-clip-text text-transparent">TALENT</span>
              <span className="bg-linear-to-b from-gold-light to-gold bg-clip-text text-transparent">833</span>
            </span>
            <span className="mt-0.5 text-[7px] font-semibold tracking-[0.42em] text-silver lg:text-[9px]">
              PARTNERS
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden gap-1.5 rounded-[28px] border border-white/10 bg-white/5 p-1.5 lg:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[22px] px-[18px] py-2.5 text-sm font-medium transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PillLink href={routes.contact} variant="light" className="text-sm">
            Book a consultation <ArrowUpRightIcon size={14} />
          </PillLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
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
          {[{ label: "Home", href: routes.home }, ...primaryNav].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between border-b border-white/12 py-5",
                "font-display text-[28px] font-medium tracking-[-0.02em] transition-colors hover:text-gold",
              )}
            >
              {item.label}
              <ArrowUpRightIcon size={18} className="text-gold" />
            </Link>
          ))}
          <PillLink
            href={routes.contact}
            variant="gold"
            size="lg"
            onClick={() => setOpen(false)}
            className="mt-8 justify-center"
          >
            Book a consultation <ArrowUpRightIcon size={14} />
          </PillLink>
        </nav>
      </div>
    </header>
  );
}
