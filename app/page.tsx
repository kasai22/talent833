import { CtaBanner } from "@/components/home/CtaBanner";
import { Hero } from "@/components/home/Hero";
import { WhoWeAre } from "@/components/home/WhoWeAre";
// The home page is kept to three sections. Not shown (their content lives on /services and /training):
// <HowWeWork />, <Programmes />, <WhatWeDo /> (repeats the hero service cards) and
// <Testimonial /> (placeholder quote/logos only — add real ones in lib/content/home.ts first).
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

/** Home, in three sections: services at a glance → who we are → talk to us. */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
