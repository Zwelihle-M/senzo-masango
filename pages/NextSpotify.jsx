import Image from "next/legacy/image";
import React from "react";
import SpotifyMockup from "../public/images/Mockups/SpotifyMockup.png";

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

const NextSpotify = () => {
  return (
    <div className="h-screen ">
      <MiniNavigationBar />
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center">
        <div className="relative mx-auto overflow-hidden my-4 sm:my-8 h-56 sm:h-56 w-full sm:w-96">
          <Image
            src={SpotifyMockup}
            alt="takealot clone"
            style={{ objectFit: "contain", width: "350px", height: "200px" }}
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* links */}
        <div className="flex justify-center gap-10 mb-10">
          <Link href={"https://github.com/Zwelihle-M/next-spotify-clone"}>
            <button className="inline-flex gap-2 items-center justify-center px-4 py-2 text-base font-medium text-center text-indigo-100 border border-darkPurple rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-primaryPurple via-electricPurple to-darkPurple">
              <span className="ml-2 ">
                <FaGithub size={20} />
              </span>
              <p className="relative">source</p>
            </button>
          </Link>

          <Link href={"https://next-spotify-clone-rho.vercel.app/login"}>
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
            I have created a Spotify application using Next.js and Tailwind CSS.
            This application is built by utilizing the Spotify API, which allows
            users to access and interact with their Spotify accounts directly
            through the application. With Next.js, a powerful React framework,
            and the flexibility of Tailwind CSS, the application offers a
            seamless and visually appealing user interface. Through the Spotify
            API integration, users can authenticate and authorize the
            application to access their Spotify data, such as playlists, saved
            tracks, and user information. This allows for personalized
            experiences, as users can browse and search for their favorite
            music, create playlists, and listen to their favorite songs directly
            within the application.
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

       
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NextSpotify;
