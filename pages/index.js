import About from "@/components/About";
import BlobAnimations from "@/components/BlobAnimations";
import EducationTimeline from "@/components/EducationTimeline";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Hero from "@/components/Hero";
import NavigationBar from "@/components/NavigationBar";
import Preloader from "@/components/Preloader";
import Services from "@/components/Services";
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
            <BlobAnimations />
          </div>

          <main>
            <Hero />
            <About />
            <EducationTimeline />
            <ExperienceTimeline />
            <Services />
          </main>

          <footer></footer>
        </div>
      )}
    </>
  );
}
