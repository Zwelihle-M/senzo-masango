import React from "react";
import educationTimeline from "@/constants/educationTimeline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Image from "next/image";
import CTULogo from "../public/images/CTU-Logo.png";
import Link from "next/link";

const EducationTimeline = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center text-black">
      <VerticalTimeline lineColor={"#7F00FF"}>
        {educationTimeline.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="text-lg font-medium text-gray-400"
              iconStyle={{
                background: "#FFFFFF",
                border: "2px solid #7F00FF",
                borderRadius: "50%",
              }}
              contentStyle={{
                background: "#FFFFFF",
                border: "1px solid #7F00FF",
                borderRadius: "0.5rem",
                padding: "1.5rem",
              }}
              contentArrowStyle={{ borderRight: "7px solid #7F00FF" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <Image
                    src={CTULogo}
                    alt="CTU Logo"
                    width={50}
                    height={50}
                    quality={100}
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>
              }
            >
              <div className="">
                <h1 className="">{element.title}</h1>
                <span className="text-sm">{element.location}</span>
                <Link href={element.url}>
                  <button className="mt-2 flex gap-1 text-black text-center mx-auto hover:scale-105 hover:text-blue-500">
                    Visit Website
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
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
                <p className="text-left">{element.description}</p>
                <div className="space-y-2 text-left mb-2 font-medium">
                  {element.keypoints.map((point, index) => (
                    <p key={`element-point-${index}`} className=" text-sm">
                      {point}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <ul className="space-y-2 list-disc text-left ml-4">
                  {element.languages.map((point, index) => (
                    <li key={`element-point-${index}`} className="pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default EducationTimeline;
