import Link from "next/link";
import React from "react";
import Upcoming from "../public/images/Mockups/UpcomingMockup.png";
import Image from "next/image";
import { FaGithub, FaReact, FaPlay } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJavascript } from "react-icons/si";

const UpcomingProjects = () => {
  return (
    <div className="h-screen overflow-x-hidden scrollbar-hide">
    <div className="h-fit w-full text-center">
    <div className="max-w-screen-xl mx-auto w-full h-full p-8 flex flex-col scrollbar scrollbar-hide">
      <div className="flex">
          <Link href={"/"}>
            <div className="flex items-center justify-center my-4 sm:my-8 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
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



        <div className="relative mx-auto overflow-hidden my-4 mb-10 ">
          <Image
            src={Upcoming}
            alt="takealot clone"
            style={{ objectFit: "contain", width: "350px", height: "200px" }} // Use style prop instead of objectFit
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>

        <div className="mb-10">
          <h1 className="text-center my-4 text-3xl">Stay tuned!</h1>

        </div>


 
      </div>
    </div>
  </div>
  );
};

export default UpcomingProjects;
