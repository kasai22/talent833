import type { ReactNode } from "react";
import type { IconProps } from "@/components/icons";

/** Outline icons used only on the services pages (same 24px / 1.6 stroke grid as components/icons). */
function Icon({ size = 24, strokeWidth = 1.6, children, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const GlobeIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z" />
  </Icon>
);

export const CodeIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M9.5 10 7 12.5 9.5 15M14.5 10 17 12.5 14.5 15" />
  </Icon>
);

export const BankIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 9.5 12 4l9 5.5M4.5 10v8M9.5 10v8M14.5 10v8M19.5 10v8M3 20.5h18" />
  </Icon>
);

export const RocketIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M14 4c3-1 5.5-1 6-.5.5.5.5 3-.5 6L13 16l-5-5z" />
    <path d="M8 11H4.5l3-3.5H11M13 16v3.5l3.5-3V13" />
    <path d="M7 17c-1.5 0-3 1.5-3 3 1.5 0 3-1.5 3-3z" />
    <circle cx="15.5" cy="8.5" r="1.3" />
  </Icon>
);

export const BriefcaseIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18" />
  </Icon>
);

export const SearchIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.5 15.5 5 5" />
  </Icon>
);

export const GridIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
  </Icon>
);

export const MicIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7" />
  </Icon>
);

export const PenIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 20l1-4.5L16 4.5a2.1 2.1 0 0 1 3 3L8 18.5z" />
    <path d="M14 6.5l3 3M4 20h7" />
  </Icon>
);

export const GaugeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.5 17a8.5 8.5 0 1 1 17 0" />
    <path d="M12 17l4-5.5" />
    <circle cx="12" cy="17" r="1.3" />
  </Icon>
);

export const ChatIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5z" />
    <path d="M8 8.5h8M8 12h5" />
  </Icon>
);

export const HeartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 20s-8-4.6-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.4 12 20 12 20z" />
  </Icon>
);

export const GearIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" />
  </Icon>
);

export const StarIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" />
  </Icon>
);

export const CartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 4h2.5l2.2 10.5h10.6L20.5 7H6.5" />
    <circle cx="9" cy="19" r="1.5" />
    <circle cx="17" cy="19" r="1.5" />
  </Icon>
);

export const BellIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 17.5h16M5.5 17.5a6.5 6.5 0 0 1 13 0M12 8.5V6.5M10.5 6.5h3M3 20.5h18" />
  </Icon>
);

export const CrossIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 3.5h6v5.5h5.5v6H15v5.5H9V15H3.5V9H9z" />
  </Icon>
);

export const CapIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2.5 9 12 4.5 21.5 9 12 13.5z" />
    <path d="M6.5 11v4.5c1.5 1.5 3.4 2.2 5.5 2.2s4-.7 5.5-2.2V11M21.5 9v5" />
  </Icon>
);

export const ClockIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </Icon>
);

/* ---- Executive Hiring page ---- */

export const ChessKingIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 2.5v3.5M10.3 4.2h3.4" />
    <path d="M9.5 9.5c-.8-1.8.6-3.5 2.5-3.5s3.3 1.7 2.5 3.5" />
    <path d="M9 9.5h6l-1 6.5h-4z" />
    <path d="M8.5 16h7l1 3h-9zM6.5 21.5h11" />
  </Icon>
);

export const LayersIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 21 8l-9 5-9-5z" />
    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
  </Icon>
);

export const ShieldStarIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 19.5 6v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6z" />
    <path d="m12 8.6 1.1 2.2 2.4.35-1.75 1.7.42 2.4L12 14.1l-2.17 1.15.42-2.4-1.75-1.7 2.4-.35z" />
  </Icon>
);

export const ClipboardIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="4.5" width="14" height="17" rx="2" />
    <path d="M9 4.5V3.5h6v1M8.5 10l1.2 1.2 2-2M8.5 15.5l1.2 1.2 2-2M14 10.5h2M14 16h2" />
  </Icon>
);

export const IdBadgeIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="3" width="14" height="18" rx="2.5" />
    <circle cx="12" cy="10" r="2.5" />
    <path d="M8.5 17c.6-2 2-3 3.5-3s2.9 1 3.5 3" />
  </Icon>
);

/* ---- Bulk Hiring page (cafés & SMEs) ---- */

export const CupIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 9.5h11v4.5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z" />
    <path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16M3.5 21.5h15" />
    <path d="M8.5 3c-.8 1 .8 2 0 3.5M12.5 3c-.8 1 .8 2 0 3.5" />
  </Icon>
);

export const ClocheIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 17a7 7 0 0 1 14 0z" />
    <path d="M12 10V8M10.5 8h3M3 20h18" />
  </Icon>
);

export const ChefHatIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 14.5a4 4 0 0 1-.6-7.95A4.6 4.6 0 0 1 12 3.5a4.6 4.6 0 0 1 5.6 3.05A4 4 0 0 1 17 14.5" />
    <path d="M7 12.5V20.5h10v-8M7 17.5h10" />
  </Icon>
);

export const RegisterIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="7" y="3" width="10" height="6" rx="1" />
    <path d="M12 9v2.5M5 11.5h14l1.5 6H3.5z" />
    <path d="M3.5 17.5h17v3h-17zM8 14.5h1M11.5 14.5h1M15 14.5h1" />
  </Icon>
);

export const BroomIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20 3.5 13 10.5" />
    <path d="M10.5 9.5 14.5 13.5 12 20c-2.6.6-6.4-.4-8.5-2.5 2-.6 3.8-2.6 4.5-5.2z" />
    <path d="M7.5 16.5 9.5 18.5M10 14.5l1.5 1.5" />
  </Icon>
);

export const ShopBagIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 8h14l-1 13H6z" />
    <path d="M9 11V6.5a3 3 0 0 1 6 0V11" />
  </Icon>
);

export const StorefrontIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 9.5 4.8 4h14.4L21 9.5" />
    <path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
    <path d="M5 12v9h14v-9M10 21v-5h4v5" />
  </Icon>
);

export const CalculatorIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M8 6.5h8v3H8zM8.5 13h.01M12 13h.01M15.5 13h.01M8.5 17h.01M12 17h.01M15.5 17h.01" />
  </Icon>
);

export const KeyIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="8" cy="15" r="4.5" />
    <path d="m11.2 11.8 8.3-8.3M16.5 6.5l2.5 2.5M14.5 8.5l2 2" />
  </Icon>
);
