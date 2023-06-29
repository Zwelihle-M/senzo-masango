import Image from "next/legacy/image";
import React from "react";
import TakelotMockup from "../public/images/Mockups/takealotMockup.png";

import { FaGithub, FaReact, FaPlay } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import Link from "next/link";
import TakealotBlob from "@/components/TakealotBlob";

const NextTakealot = () => {
  return (
    <div className="h-screen overflow-x-hidden scrollbar-hide">
       
      <div className="h-fit w-full text-center">
        <div className="max-w-screen-xl mx-auto w-full h-full p-8 flex flex-col">
        <TakealotBlob/>
          <div className="flex">
            <Link href={"/"}>
              <div className="flex items-center justify-center my-4 sm:my-8 gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>{" "}
                <span>Back</span>
              </div>
            </Link>
          </div>
          <div className="relative mx-auto overflow-hidden my-4 sm:my-8 h-56 sm:h-56 w-full sm:w-96">
            <Image
              src={TakelotMockup}
              alt="takealot clone"
              style={{ objectFit: "contain", width: "350px", height: "200px" }}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />

            
          </div>
          <h2 className="text-center my-4 text-4xl">Next Takelot</h2>
          <div>
            <p className="py-4 max-w-2xl mx-auto text-left text-md">
              I built this website using Next.js and the MERN stack. Next.js is
              a React-based framework that I used to enable server-side
              rendering and support static site generation, resulting in faster
              page loading times and better search engine optimization. The MERN
              stack includes four key technologies - MongoDB, Express.js,
              React.js, and Node.js, which I utilized to create a NoSQL database
              for data storage, a Node.js framework to build web applications, a
              JavaScript library to build user interfaces, and a runtime
              environment to run JavaScript on the server-side. Additionally, I
              designed this Takealot clone using Figma, a UI/UX design tool that
              allowed me to create mockups, prototypes, and user interfaces that
              are aesthetically pleasing, easy to navigate, and use and brought
              the design to life using Tailwindcss. Together, these technologies
              enabled me to create a robust and modern website that provides a
              seamless shopping experience to our users.
            </p>
          </div>
          {/* tech stack */}
          <div className="my-4 sm:my-8">
            <h2 className="text-center mb-2 text-2xl">Technologies Used</h2>
            <ul className="flex justify-center items-center gap-4">
              <li>
                <span>
                  <FaReact size={30} className="animate-spin  animate-1000" />
                </span>
              </li>
              <li>
                <span>
                  <SiTailwindcss size={30} />
                </span>
              </li>

              <li>
                <span>
                  <SiNextdotjs size={30} />
                </span>
              </li>

              <li>
                <span>
                  <SiJavascript size={30} />
                </span>
              </li>

              <li>
                <span>
                  <SiNodedotjs size={30} />
                </span>
              </li>

              <li>
                <span>
                  <SiMongodb size={30} />
                </span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Link
              href={"https://github.com/Zwelihle-M/next-takealot-ecommerce"}
            >
              <button className="flex items-center rounded-lg bg-gradient-to-r from-Mainpink to-violet-600 py-2 px-2 mt-4 mr-4 text-white hover:scale-110 duration-200">
              SourceCode
                <span className="ml-2 ">
                  <FaGithub />
                </span>
              </button>
            </Link>

            <Link href={"https://next-takealot-ecommerce.vercel.app/"}>
              <button className="flex items-center rounded-lg bg-gradient-to-r from-Mainpink to-violet-600 py-2 px-2 mt-4 mr-4 text-white hover:scale-110 duration-200">
                Link
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextTakealot;
