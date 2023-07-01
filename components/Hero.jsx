import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroEmoji from "../public/images/HeroEmoji.svg";
import Image from "next/image";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome",
      "Senzo Masango",
      "Software Developer",
      "UI/UX Web Designer",
    ],
    loop: true,
    delaySpeed: 3000,
    typeSpeed: 50,
    deleteSpeed: 60,
  });
  return (
    <div
      id="home"
      className="h-screen w-full flex flex-col space-y-8 items-center justify-center text-center"
    >
      <div className="relative rounded-full h-32 w-32 mx-auto object-cover">
        <Image
          src={HeroEmoji}
          alt="hero emoji"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </div>

      <div>
        <h1 className="text-4xl md:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-mainFuchsia">
            {text}
          </span>
          <Cursor cursorColor="#d946ef" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;

