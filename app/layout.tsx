import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "Talent833 Partners — Executive Hiring & Learning Solutions",
    template: "%s — Talent833 Partners",
  },
  description:
    "Talent833 Partners helps organisations build learning capability and hire high-impact talent through L&D leadership on demand, year-long learning partnerships, signature programmes and executive search.",
};

export const viewport: Viewport = {
  themeColor: "#060606",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${bricolage.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
