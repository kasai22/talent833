import { CtaBanner } from "@/components/home/CtaBanner";
import { Hero } from "@/components/home/Hero";
// Hidden for now — uncomment these imports and the sections below to bring them back.
// import { HowWeWork } from "@/components/home/HowWeWork";
// import { Programmes } from "@/components/home/Programmes";
// import { Testimonial } from "@/components/home/Testimonial";
// import { WhatWeDo } from "@/components/home/WhatWeDo";
// import { WhoWeAre } from "@/components/home/WhoWeAre";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <WhoWeAre /> */}
        {/* <WhatWeDo /> */}
        {/* <HowWeWork /> */}
        {/* <Programmes /> */}
        {/* <Testimonial /> */}
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
