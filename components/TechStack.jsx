import React from "react";
import HtmlLogo from "../public/images/TechStack/html.svg";
import CssLogo from "../public/images/TechStack/css.svg";
import JavascriptLogo from "../public/images/TechStack/javascript.svg";
import TailwindLogo from "../public/images/TechStack/tailwind.svg";
import FigmaLogo from "../public/images/TechStack/figma.svg";
import NodeLogo from "../public/images/TechStack/node.svg";
import ReactLogo from "../public/images/TechStack/react.svg";
import NextjsLogo from "../public/images/TechStack/nextjs.svg";
import CsharpLogo from "../public/images/TechStack/csharp.svg";
import MssqlLogo from "../public/images/TechStack/mssql.svg";
import MongodbLogo from "../public/images/TechStack/mongodb.svg";
import VscodeLogo from "../public/images/TechStack/vscode.svg";
import GitLogo from "../public/images/TechStack/git.svg";
import Image from "next/image";

const TechStack = () => {
  const skills = [
    {
      id: 1,
      title: "HTML",
      description: "HTML 5",
      src: HtmlLogo,
    },
    {
      id: 2,
      title: "CSS",
      description: "CSS 3",
      src: CssLogo,
    },
    {
      id: 3,
      title: "Javascript",
      description: "Javascript ES6+",
      src: JavascriptLogo,
    },
    { id: 4, title: "Tailwind", description: "Tailwindcss", src: TailwindLogo },
    { id: 5, title: "Figma", description: "Figma", src: FigmaLogo },
    { id: 6, title: "Node", description: "Nodejs", src: NodeLogo },
    { id: 7, title: "React", description: "Reactjs", src: ReactLogo },
    { id: 8, title: "Nextjs", description: "Nextjs", src: NextjsLogo },
    { id: 9, title: "Csharp", description: "Csharp", src: CsharpLogo },
    { id: 10, title: "Mssql", description: "SQL", src: MssqlLogo },
    { id: 11, title: "Mongodb", description: "Mongodb", src: MongodbLogo },
    { id: 12, title: "Vscode", description: "Vscode", src: VscodeLogo },
    { id: 13, title: "Git", description: "Git", src: GitLogo },
  ];
  return (
    <div
      id="skills"
      className="max-w-screen-xl mx-auto px-8 py-16 text-center mt-28"
    >
      <h1 className="text-4xl md:text-6xl mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-mainFuchsia">
          Tech Skills
        </span>
      </h1>
      <div>
        <p className="mb-10 text-base">
          Hover over an icon to see a description{" "}
        </p>
      </div>
      {/* Skill icons */}

      <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10  xl:space-y-0 mx-auto items-center justify-center">
        <div className="grid grid-cols-4 gap-4 md:gap-5 px-8  ">
          {skills.map(({ id, title, src, description }) => (
            <div
              key={id}
              className="group relative flex flex-col lg:flex-row gap-10 lg:gap-0 items-center p-3 md:p-6 ease-in duration-500 rounded-full border border-gray-400 object-cover sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:scale-110"
            >
              <Image
                src={src}
                alt={title}
                className="filter group-hover:grayscale"
                quality={100}
              />

              <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out rounded-full z-0 group-hover:bg-gradient-to-r from-electricPurple to-fuchsia-800 h-14 w-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-center h-full text-center">
                  <p className="text-xs md:text-base opacity-100 text-white ">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

