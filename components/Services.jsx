import React from "react";
import SEOGlobe from "../public/images/SEOGlobe.gif";
import AnimatedPen from "../public/images/UIUXPen.gif";
import WebDevelopment from "../public/images/FullstackDeveloper.gif";
import Image from "next/image";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center mt-28">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div className="h-full w-full bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-sm">
          <div>
            <Image
              src={SEOGlobe}
              alt="animated rocket animation"
              width={500}
              height={450}
              quality={100}
              className="h-[300px] mb-4 md:mb-0 md:mr-0 flex flex-col items-center justify-center p-1.5"
            />
            <div className="flex flex-col items-center justify-center p-5">
              <h1 className="font-bold">Search Engine Optimization</h1>
              <p>
                I create fully scalable and economically viable web
                applications.
              </p>
            </div>
          </div>
        </div>
        {/* ui */}
        <div className="h-full w-full bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-sm">
          <div>
            <Image
              src={AnimatedPen}
              alt="animated rocket animation"
              width={500}
              height={450}
              quality={100}
              className="h-[300px] mb-4 md:mb-0 md:mr-0 flex flex-col items-center justify-center p-1.5"
            />
            <div className="flex flex-col items-center justify-center p-5">
              <h1 className="font-bold">UI/UX Design</h1>
              <p>
                Powerful UI/UX is the key to higher user adoption rates, and
                easier onboarding. By taking the following elements, I conduct
                initial research and craft the design.
              </p>
            </div>
          </div>
        </div>
        {/* dev */}
        <div className="h-full w-full bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-sm">
          <div>
            <Image
              src={WebDevelopment}
              alt="animated rocket animation"
              width={500}
              height={450}
              quality={100}
              className="h-[300px] mb-4 md:mb-0 md:mr-0 flex flex-col items-center justify-center p-1.5"
            />
            <div className="flex flex-col items-center justify-center p-5">
              <h1 className="font-bold">Web Development</h1>
              <p>
                Powerful UI/UX is the key to higher user adoption rates, and
                easier onboarding. By taking the following elements, I conduct
                initial research and craft the design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
