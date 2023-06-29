import About from "@/components/About";
import BlobAnimations from "@/components/BlobAnimations";
import Contact from "@/components/Contact";
import EducationTimeline from "@/components/EducationTimeline";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavigationBar from "@/components/NavigationBar";
import Preloader from "@/components/Preloader";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import ToolTip from "@/components/ToolTip";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="h-screen overflow-x-hidden scrollbar-hide">
          <header>
            <NavigationBar />
          </header>
          <div>
          <ToolTip/>
            <BlobAnimations />
          </div>

          <main>
            <Hero />
            <About />
            <EducationTimeline />
            <ExperienceTimeline />
            <TechStack/>
            <Services />
            <Projects/>
            <Contact/>
          </main>

          <footer>
            <Footer/>
          </footer>
        </div>
      )}
    </>
  );
}
