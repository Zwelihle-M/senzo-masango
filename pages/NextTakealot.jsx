import Image from "next/legacy/image";
import React from "react";
import TakelotMockup from "../public/images/Mockups/takealotMockup.png";

import { FaGithub, FaReact, FaLink } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import Link from "next/link";
import MiniNavigationBar from "@/components/MiniNavigationBar";


const NextTakealot = () => {
  return (
  <div className="h-screen ">
      <MiniNavigationBar/>
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center">
      <div className="relative mx-auto overflow-hidden my-4 sm:my-8 h-56 sm:h-56 w-full sm:w-96">
        <Image
          src={TakelotMockup}
          alt="takealot clone"
          style={{ objectFit: "contain", width: "350px", height: "200px" }}
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {/* links */}
      <div className="flex justify-center gap-10 mb-10">
        <Link href={"https://github.com/Zwelihle-M/next-takealot-ecommerce"}>
          <button className="inline-flex gap-2 items-center justify-center px-4 py-2 text-base font-medium text-center text-indigo-100 border border-darkPurple rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-primaryPurple via-electricPurple to-darkPurple">
            <span className="ml-2 ">
              <FaGithub size={20} />
            </span>
            <p className="relative">source</p>
          </button>
        </Link>

        <Link href={"https://next-takealot-ecommerce.vercel.app/"}>
          <button className="inline-flex gap-2 items-center justify-center px-4 py-2 text-base font-medium text-center text-indigo-100 border border-darkPurple rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-primaryPurple via-electricPurple to-darkPurple">
            <span className="ml-2 ">
              <FaLink size={20} />
            </span>
            <p className="relative">website</p>
          </button>
        </Link>
      </div>
      {/* description */}

      <div>
        <p className="py-4  mx-auto text-left text-lg">
          I built this website using Next.js and the MERN stack. Next.js is a
          React-based framework that I used to enable server-side rendering and
          support static site generation, resulting in faster page loading times
          and better search engine optimization. The MERN stack includes four
          key technologies - MongoDB, Express.js, React.js, and Node.js, which I
          utilized to create a NoSQL database for data storage, a Node.js
          framework to build web applications, a JavaScript library to build
          user interfaces, and a runtime environment to run JavaScript on the
          server-side. Additionally, I designed this Takealot clone using Figma,
          a UI/UX design tool that allowed me to create mockups, prototypes, and
          user interfaces that are aesthetically pleasing, easy to navigate, and
          use and brought the design to life using Tailwindcss. Together, these
          technologies enabled me to create a robust and modern website that
          provides a seamless shopping experience to our users.
        </p>
      </div>

      {/* stack */}
      {/* tech stack */}
      <div className="my-4 sm:my-8">
        <h2 className="text-center mb-2 text-2xl">Technologies Used</h2>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <span>
              <FaReact size={40} className="animate-spin  animate-1000" />
            </span>
          </li>
          <li>
            <span>
              <SiTailwindcss size={40} />
            </span>
          </li>

          <li>
            <span>
              <SiNextdotjs size={40} />
            </span>
          </li>

          <li>
            <span>
              <SiJavascript size={40} />
            </span>
          </li>

          <li>
            <span>
              <SiNodedotjs size={40} />
            </span>
          </li>

          <li>
            <span>
              <SiMongodb size={40} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default NextTakealot;
