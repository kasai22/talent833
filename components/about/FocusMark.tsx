import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Seconds before the phrase comes into focus, so several marks can play one after another. */
  delay?: number;
};

/**
 * Viewfinder focus highlight: the phrase sharpens from a blur while gold
 * viewfinder brackets snap in around it. Styles live in globals.css (.focus-mark).
 */
export function FocusMark({ children, delay = 0 }: Props) {
  return (
    <mark className="focus-mark" style={{ "--focus-delay": `${delay}s` } as CSSProperties}>
      <span className="focus-mark__text">{children}</span>
    </mark>
  );
}
