import React from "react";
import SEOGlobe from "../public/images/Services/SEOGlobeService.gif";
import UIUXDesign from "../public/images/Services/UIUXDesignerService.gif";
import WebDeveloper from "../public/images/Services/WebDevelopmentService.gif";
import Image from "next/image";

const Services = () => {
  const DeveloperServices = [
    {
      id: 1,
      title: "Web Development",

      description:
        "With expertise in web development, UI/UX design, and SEO, I deliver holistic solutions that combine aesthetics, functionality, and visibility to drive your online success",
      src: WebDeveloper,
    },
    {
      id: 2,
      title: "UI/UX Design",

      description:
        "In addition to web development, I specialize in creating captivating UI/UX designs that elevate user experiences and maximize engagement on your website.",
      src: UIUXDesign,
    },
    {
      id: 3,
      title: "SEO",
      description:
        "I offer comprehensive web development services with a focus on enhancing your online presence through effective SEO strategies.",
      src: SEOGlobe,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center mt-28">
      <h1 className="text-4xl md:text-6xl mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-mainFuchsia">
          Services
        </span>
      </h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {DeveloperServices.map(({ id, title, tags, src, description }) => (
            <div
              key={id}
              className="h-full w-full backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter bg-opacity-10 border border-electricPurple shadow-sm flex flex-col justify-center items-center text-center"
            >
              <Image src={src} alt={description} width={200} height={200} />
              <div>
                <p className=" text-2xl font-semibold mb-5 py-2">{title}</p>
              </div>
              <div className="flex flex-row">{tags}</div>
              <div>
                <p className="px-4 py-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

