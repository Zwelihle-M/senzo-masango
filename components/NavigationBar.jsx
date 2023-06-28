import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SunAnimationSVG from "./SunAnimationSVG";
import MoonAnimationSVG from "./MoonAnimationSVG";
import SmillingEmoji from "../public/images/SmillingEmoji.svg";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavigationBar = () => {
  // dark//light theme
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  // hydration
  const [mounted, setMounted] = useState(false);

  const renderThemeChanger = () => {
    // hydration error handling for nextjs
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div onClick={() => setTheme("light")}>
          <SunAnimationSVG />
        </div>
      );
    } else {
      return (
        <div onClick={() => setTheme("dark")}>
          <MoonAnimationSVG />
        </div>
      );
    }
  };

  const [navigation, setNavigation] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      target: "home",
    },
    {
      id: 2,
      link: "about",
      target: "about",
    },
    {
      id: 3,
      link: "skills",
      target: "skills",
    },
    {
      id: 4,
      link: "projects",
      target: "projects",
    },
    {
      id: 5,
      link: "contact",
      target: "contact",
    },
  ];

  const handleLinkClick = (target) => {
    smoothScroll(target);
  };

  const smoothScroll = (target) => {
    const targetElement = document.querySelector(`#${target}`);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="w-full h-20 z-20 fixed duration-300 ease-in ">
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4 backdrop-blur-md">
        <div>
          <Link href="/">
            <Image
              src={SmillingEmoji}
              alt="emoji navigationbar"
              quality={100}
              priority
              width={55}
              height={50}
              className="rounded-full"
            />
          </Link>
        </div>

        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link, target }) => (
              <li key={id}>
                <button
                  className="ml-10 text-md cursor-pointer duration-500 ease-out hover:scale-110 capitalize "
                  onClick={() => handleLinkClick(target || link)}
                >
                  {link}
                </button>
              </li>
            ))}

            <div className="ml-10 cursor-pointer duration-700 ease-out hover:scale-125 ">
              {renderThemeChanger()}
            </div>
          </ul>

          {!navigation && (
            <button
              className="md:hidden cursor-pointer"
              onClick={() => setNavigation(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* mobile navigationbar */}
      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/5 backdrop-blur p-6"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between mb-4">
              <Link href="/">
                <Image
                  src={SmillingEmoji}
                  alt="emoji placeholder"
                  priority
                  quality={100}
                  width={48}
                  height={50}
                  sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
                  className="rounded-full "
                />
              </Link>

              <button
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-18 flex flex-col h-fit gap-20 text-black">
            <ul>
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="text-lg py-4 tracking-wider cursor-pointer text-black capitalize mr-0"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>

            <div className="text-lg py-4 tracking-wider cursor-pointer text-black capitalize mr-0">
                Resume
            </div>

             <div className="flex flex-row gap-4">
            <Link href={"https://github.com/Zwelihle-M"}>
              {" "}
              <FaGithub size={30} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/zwelihle-masango-2750081b4/"}
            >
              <FaLinkedin size={30} />
            </Link>
          </div> 

            <button className=" cursor-pointer">{renderThemeChanger()}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
