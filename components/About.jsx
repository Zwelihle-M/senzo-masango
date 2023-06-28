import Link from "next/link";
import React, { useEffect, useState } from "react";


const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      id="about"
      className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center mt-28"
    >
      <h1 className="text-4xl md:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-mainFuchsia">
          About
        </span>
      </h1>

      <div className="my-8 px-8">
        <p className="py-4 max-w-2xl mx-auto text-left text-lg">
          Hello, my name is Zwelihle Masango, a CTU Training Solutions graduate.
          who completed the Programming Foundation and Software Development
          courses. In the Programming Foundation course, I acquired the
          fundamentals of coding languages and gained a strong understanding of
          programming concepts. The Software Development course helped me to
          broaden my programming abilities and knowledge, with a focus on more
          sophisticated issues such as database architecture, software
          testing,and project management. These seminars have provided me with a
          solid foundation in software programming, and I{"'"}m excited to apply
          what I{"'"}ve learned to solve real-world problems.
        </p>

        <p className="py-4 max-w-2xl mx-auto text-left text-lg">
          When I{"'"}m not coding, you can find me expressing myself in a
          variety of ways. I{"'"}m an ardent gamer that is always looking for
          the next challenge. In my spare time, I enjoy learning new things,
          whether it{"'"}s a new programming language or a new framework.
          Drawing and music are two of my favourite ways to express myself, and
          I apply that same creative attitude to my web development work. There
          {"'"}s nothing like the sensation of creating something from scratch
          and seeing it come to life, and I{"'"}m always seeking for new ways to
          push my boundaries and attempt new things.
        </p>
      </div>
{/* 
      <div className="mx-auto h-[400px] cursor-grab rounded-lg mb-10">
        {isLoading ? <SpinnerLoader /> : <XboxEliteModel />}
      </div>  */}
      <Link href={"/Zwelihle"}>
        <button className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium  transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-darkPurple hover:scale-110">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-darkPurple via-primaryPurple to-mainFuchsia"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">Read More</span>
        </button>
      </Link>
    </div>
  );
};

export default About;
