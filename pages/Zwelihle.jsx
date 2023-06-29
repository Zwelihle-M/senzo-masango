import CodingDesktop from "@/components/CodingDesktop";
import KrkClassicModel from "@/components/KrkClassicModel";
import MiniNavigationBar from "@/components/MiniNavigationBar";
import SpinnerLoader from "@/components/SpinnerLoader";
import React, { useEffect, useState } from "react";

const Zwelihle = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-screen overflow-x-hidden scrollbar-hide">
      <MiniNavigationBar />
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center">
        <div className="my-8 px-8">
          <p className="py-2 max-w-2xl mx-auto text-md text-left">
            My full name is Senzo Zwelihle Masango, and i am 23-year-old
            software developer . My passion for coding started when I was still
            in high school,I was in a music group and wanted to make our music
            accesible and tried to make an mobile application with little to
            none knowledge of any programming language and came across android
            studio, not knowing it would change everything; I used to think
            coding was just drag and drop i was stuck trying to figure it out
            for months from that moment on, I became obsessed with understanding
            coding, and after doing reasearch only then i discovered what i
            actually need to do and how to do it. fell in love with the
            programming language java and javascript and eventually decided to
            enroll for software development...throught my life i always thought
            i would be a musician or an artist but my love for coding previals,
            maybe someday i will be all
          </p>

          <div className="h-[400px]  rounded-lg pt-10">
            {isLoading ? <SpinnerLoader /> : <KrkClassicModel />}
          </div>

          {/* coding part */}
          <p className="py-2 max-w-2xl mx-auto text-md text-left">
            I continued to learn and hone my skills through research and
            practice, and eventually decided to enroll in a software development
            program. It was during this time that I realized my true passion for
            coding and discovered that it was more than just a hobby. Coding has
            become an integral part of my life, and I am constantly seeking new
            challenges and opportunities to grow as a developer. I am excited to
            explore new opportunities and challenges in the field of software
            development, and I believe that my skills , knowledge , and passion
            for coding make me an ideal candidate.
          </p>
          <div className="h-[400px]  rounded-lg pt-10">
            {isLoading ? <SpinnerLoader /> : <CodingDesktop />}
          </div>

          <p className="py-2 max-w-2xl mx-auto text-md  text-left">
            Thank you for taking the time to view my portfolio! As a passionate
            and dedicated developer, I am thrilled to have the opportunity to
            share my work with you. I hope that you found everything informative
            and engaging, and that you are just as excited about my projects as
            I am. If you have any questions or would like to discuss potential
            job oppoturnities or collaborations, please feel free to reach out
            to me.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Zwelihle;
