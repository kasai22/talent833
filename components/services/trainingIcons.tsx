import type { ReactNode } from "react";
import type { IconProps } from "@/components/icons";

/** Outline icons for the Corporate Training page (same 24px / 1.6 stroke grid as components/icons). */
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

export const SpeechIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
    <path d="M8 10h8M8 14h5" />
  </Icon>
);

export const CrownIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 7.5 7.5 12 12 5l4.5 7L21 7.5 19 18H5z" />
    <path d="M5 21h14" />
    <circle cx="3" cy="7" r="0.6" />
    <circle cx="12" cy="4.5" r="0.6" />
    <circle cx="21" cy="7" r="0.6" />
  </Icon>
);

export const BrainIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path d="M12 5v13" />
  </Icon>
);

export const PersonIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="7.5" r="4" />
    <path d="M4 21c.9-4.2 4-6.5 8-6.5s7.1 2.3 8 6.5" />
  </Icon>
);

export const SproutIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21v-9" />
    <path d="M12 12C12 7.5 9 4.5 4 4.5c0 5 3 7.5 8 7.5Z" />
    <path d="M12 12c0-4.5 3-7.5 8-7.5 0 5-3 7.5-8 7.5Z" />
  </Icon>
);

export const LayersIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 2.5 8 12 13l9.5-5z" />
    <path d="m2.5 12 9.5 5 9.5-5" />
    <path d="m2.5 16 9.5 5 9.5-5" />
  </Icon>
);

export const TeamIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="7" r="3" />
    <circle cx="5" cy="9" r="2.2" />
    <circle cx="19" cy="9" r="2.2" />
    <path d="M6.5 20c.6-3.6 2.8-5.6 5.5-5.6s4.9 2 5.5 5.6" />
    <path d="M1.5 18.5c.4-2.4 1.7-3.8 3.5-3.8 1 0 1.8.4 2.4 1.1" />
    <path d="M22.5 18.5c-.4-2.4-1.7-3.8-3.5-3.8-1 0-1.8.4-2.4 1.1" />
  </Icon>
);

export const FlagIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 22V3" />
    <path d="M5 4h12l-3 4.5 3 4.5H5" />
  </Icon>
);

export const MagnifierIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.5 15.5 5.5 5.5" />
  </Icon>
);

export const GrowthBarsIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 21v-3M9 21v-6M14 21v-8M19 21V10" />
    <path d="M4 12 10 7l3 2 7-6" />
    <path d="M16 3h4v4" />
  </Icon>
);

export const BullseyeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20.6 9.5A9 9 0 1 1 14.5 3.4" />
    <path d="M16.8 11a5 5 0 1 1-3.8-3.9" />
    <circle cx="12" cy="12" r="1" />
    <path d="m12 12 6-6M15.5 4.5 18 6l1.5 2.5M18 6l1.2-3.2M18 6l3.2-1.2" />
  </Icon>
);

export const BulbIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 18h6M10 21.5h4" />
    <path d="M12 2.5a6.5 6.5 0 0 0-4 11.6c.7.6 1 1.4 1 2.3V18h6v-1.6c0-.9.3-1.7 1-2.3a6.5 6.5 0 0 0-4-11.6Z" />
  </Icon>
);

export const ArrowRight = (p: IconProps) => (
  <Icon strokeWidth={2} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const ScalesIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3v18M7 21h10M5 6.5h14" />
    <path d="M12 4.5c-1.5 1.2-4 2-7 2M12 4.5c1.5 1.2 4 2 7 2" />
    <path d="m5 6.5-3 7a3.5 3.5 0 0 0 6 0z" />
    <path d="m19 6.5-3 7a3.5 3.5 0 0 0 6 0z" />
  </Icon>
);

export const ClipboardCheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="4" width="14" height="17.5" rx="2" />
    <path d="M9 2.5h6v3H9z" />
    <path d="m8.5 10 1.2 1.2 2.3-2.3M14 10h2M8.5 15.5l1.2 1.2 2.3-2.3M14 15.5h2" />
  </Icon>
);

export const TrainerIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="6.5" cy="7" r="2.5" />
    <path d="M2.5 21v-4.5a4 4 0 0 1 6.6-3l2.9-2.5" />
    <path d="M10 4h11.5v10H13" />
    <path d="M15 17.5h2.5M16.2 14v3.5" />
  </Icon>
);

export const ScreenPlayIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="12.5" rx="1.5" />
    <path d="M1.5 20h21" />
    <path d="m10.5 8 4 2.25-4 2.25z" />
  </Icon>
);

export const ChartUpIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 21v-4M9 21v-7M14 21v-5M19 21V11" />
    <circle cx="4" cy="12" r="1.3" />
    <circle cx="9" cy="8" r="1.3" />
    <circle cx="14" cy="10.5" r="1.3" />
    <path d="M5 11.2 8 8.8M10.1 8.7l2.8 1.2M15 9.7l5-5.2M16.5 4.5H20V8" />
  </Icon>
);

export const PawnIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="5.5" r="2.5" />
    <path d="M9.5 10.5h5M10.3 10.5 9 18h6l-1.3-7.5" />
    <path d="M6.5 21h11l-1-3h-9z" />
  </Icon>
);

export const CalendarGridIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
    <path d="M7.5 14h2M11 14h2M14.5 14h2M7.5 17.5h2M11 17.5h2" />
  </Icon>
);

export const CheckMark = (p: IconProps) => (
  <Icon strokeWidth={3} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Icon>
);

export const ArrowUpRight = (p: IconProps) => (
  <Icon strokeWidth={2.2} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
);

export const TeamStarIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m12 2 1.1 2.2 2.4.3-1.75 1.7.4 2.4L12 7.5l-2.15 1.1.4-2.4L8.5 4.5l2.4-.3z" />
    <circle cx="12" cy="12.5" r="2" />
    <circle cx="5.5" cy="13.5" r="1.8" />
    <circle cx="18.5" cy="13.5" r="1.8" />
    <path d="M8.5 21c.4-2.6 1.8-4 3.5-4s3.1 1.4 3.5 4M2 20.5c.3-2 1.5-3.2 3.5-3.2M22 20.5c-.3-2-1.5-3.2-3.5-3.2" />
  </Icon>
);

export const PlayCircleIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m10 8.5 5.5 3.5-5.5 3.5z" />
  </Icon>
);

export const RefreshIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20 11a8 8 0 0 0-14.3-4.5L4 8.5" />
    <path d="M4 3.5v5h5" />
    <path d="M4 13a8 8 0 0 0 14.3 4.5l1.7-2" />
    <path d="M20 20.5v-5h-5" />
  </Icon>
);

export const HeadsetIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="8.5" r="4" />
    <path d="M6.5 9a5.5 5.5 0 0 1 11 0" />
    <path d="M5.5 8.5v2.5h1.5M18.5 8.5v2.5H17" />
    <path d="M4.5 21c.8-3.6 3.8-5.5 7.5-5.5s6.7 1.9 7.5 5.5" />
  </Icon>
);

export const BedIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2.5 5v15M2.5 16h19v4M21.5 16v-3a3 3 0 0 0-3-3H10v6" />
    <circle cx="6.5" cy="12" r="2" />
  </Icon>
);

export const DownloadIcon = (p: IconProps) => (
  <Icon strokeWidth={2} {...p}>
    <path d="M12 3.5v11M7.5 10l4.5 4.5 4.5-4.5M4 19.5h16" />
  </Icon>
);

export const BulbTeamIcon = (p: IconProps) => (
  <Icon strokeWidth={1.3} {...p}>
    <path d="M10.2 11.5h3.6M10.6 13.2h2.8" />
    <path d="M12 2.5A4 4 0 0 0 9.6 9.7c.4.3.6.8.6 1.3v.5h3.6V11c0-.5.2-1 .6-1.3A4 4 0 0 0 12 2.5Z" />
    <path d="M12 .8v.6M6.8 3l.5.4M17.2 3l-.5.4M5 7h.7M18.3 7h.7" />
    <circle cx="5" cy="15.5" r="1.8" />
    <circle cx="12" cy="16" r="1.8" />
    <circle cx="19" cy="15.5" r="1.8" />
    <path d="M1.8 22c.3-2 1.5-3.3 3.2-3.3S7.9 20 8.2 22M8.8 22.5c.3-2 1.5-3.3 3.2-3.3s2.9 1.3 3.2 3.3M15.8 22c.3-2 1.5-3.3 3.2-3.3s2.9 1.3 3.2 3.3" />
  </Icon>
);
