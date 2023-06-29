import Image from "next/image";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import NextTakealot from "../public/images/Projects/Next-Takealot.png";
import NextSpotify from "../public/images/Projects/Next-Spotify.png";
import NextCapitec from "../public/images/Projects/Capitec-Bank.png";
import GamingZA from "../public/images/Projects/Gaming-ZA-Esport.png";
import VehicleFind from "../public/images/Projects/Vehicle-Find.png";
import Upcoming from "../public/images/Projects/UpcomingProjects.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Projects = () => {
  let [categories] = useState({
    React: [
      {
        id: 1,
        title: "Takealot clone",
        imgSrc: NextTakealot,
        url: "/NextTakealot",
      },
      {
        id: 2,
        title: "Spotify clone",
        imgSrc: NextSpotify,
        url: "/NextSpotify",
      },
    ],
    UIUX: [
      {
        id: 1,
        title: "Car Rental Shop",
        imgSrc: VehicleFind,
        url: "https://www.figma.com/file/sTgEcycBorm5T7uKuMoRJk/VehicleFind?type=design&node-id=0%3A1&t=AZkzOGH2AFW3u9ru-1",
      },
      {
        id: 2,
        title: "Gaza Esport ZA",
        imgSrc: GamingZA,
        url: "https://www.figma.com/file/a5EiZH4OxSu2XldG2r5DC1/GazaEsport?type=design&node-id=0%3A1&t=M0lJkLBWarNCH0S7-1",
      },
      {
        id: 3,
        title: "Capitec bank",
        imgSrc: NextCapitec,
        url: "https://www.figma.com/file/NHMRDuWQreldlzhsPR8erY/Next-Capitec-Bank?type=design&node-id=0%3A1&t=MG31nvlCPVYWc7hx-1",
      },
      {
        id: 4,
        title: "Spotify clone",
        imgSrc: NextSpotify,
        url: "https://www.figma.com/file/9qbYfwhF7yDOyLWdVjQQJq/Next-Spotfiy?type=design&node-id=0%3A1&t=TmXjMtmILUzVH6Bu-1",
      },
    ],
Native: [
      {
        id: 1,
        title: "Upcoming projects",
        imgSrc: Upcoming,
        url: "/UpcomingProjects",
      },
    ],
    Client: [
      {
        id: 1,
        title: "Upcoming projects",
        imgSrc: Upcoming,
        url: "/UpcomingProjects",
      },
    ],
  });
  return (
    <div
      id="projects"
      className="max-w-screen-xl mx-auto px-8 py-16 pt-24 text-center mt-28"
    >
      <h1 className="text-3xl md:text-6xl mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-mainFuchsia">
          Projects
        </span>
      </h1>
      <Tab.Group>
        <Tab.List className="flex justify-center">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light
      outline-none md:py-2 md:px-6 md:text-base ${
        selected
          ? "border-Gradient border bg-[#35383c] text-white"
          : "border-b-2 border-[#35383c] text-gray-700 "
      }`
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames("tabPanel ", "tabPanel")}
            >
              <div className="max-5xl mx-auto grid md:grid-cols-2 gap-8 ">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="relative cursor-pointer group shadow-xl overflow-hidden rounded-lg"
                  >
                    <Image
                      src={post.imgSrc}
                      alt={post.title}
                      className="duration-200 hover:scale-110 group-hover:opacity-20 rounded-lg"
                      height={700}
                      width={900}
                      quality={100}
                      priority
                    />

                    <div className="hidden group-hover:flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0">
                      <Link href={post.url}>
                        <button className="relative inline-flex items-center justify-center p-4 px-4 py-2 overflow-hidden font-medium  transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-darkPurple hover:scale-110">
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-darkPurple via-primaryPurple to-fuchsia-700"></span>
                          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                          <span className="relative text-white flex gap-2">
                            <p>View </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                              <path
                                fillRule="evenodd"
                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Projects;
