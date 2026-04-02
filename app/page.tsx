import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Summary from "@/sections/Summary";
import TechStack from "@/sections/TechStack";
import FeaturedProjects from "@/sections/FeaturedProjects";
import Impact from "@/sections/Impact";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <TechStack />
        <FeaturedProjects />
        <Impact />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
