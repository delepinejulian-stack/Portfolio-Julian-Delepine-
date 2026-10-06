import Header from "@/components/site/header";
import Hero from "@/components/site/hero";
import Marquee from "@/components/site/marquee";
import Projects from "@/components/site/projects";
import Expertises from "@/components/site/expertises";
import PhotoStrip from "@/components/site/photo-strip";
import Stats from "@/components/site/stats";
import TimelineDemo from "@/components/timeline-demo";
import Contact from "@/components/site/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Expertises />
        <PhotoStrip />
        <Stats />
        <TimelineDemo />
      </main>
      <Contact />
    </>
  );
}
