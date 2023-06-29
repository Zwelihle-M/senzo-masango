import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SunAnimationSVG from "./SunAnimationSVG";
import MoonAnimationSVG from "./MoonAnimationSVG";

const MiniNavigationBar = () => {
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

  const links = [
    {
      id: 1,
      link: "home",
      target: "home",
    },
  ];
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] Z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
    <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8  xl:rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-300">
      <Link
        href={"/"}
        className="relative flex items-center group transition-all duration-500"
      >
        {/* Tooltip */}

        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
          <ul className="bg-white relative flex items-center p-2 rounded-[3px] text-black">
            {links.map(({ id, link, target }) => (
              <li key={id}>
                <button onClick={() => handleLinkClick(target || link)}>
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      </Link>
      <Link
        href={"/"}
        className="relative flex items-center group transition-all duration-500"
      >
        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
          <p className="bg-white relative flex items-center p-[6px] rounded-sm text-black">
            Hireme
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
          <path
            fillRule="evenodd"
            d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </Link>

      <Link
        href={"/contact"}
        className="relative flex items-center group transition-all duration-500"
      >
        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
          <p className="bg-white relative flex items-center p-[6px] rounded-[3px] text-black">
            Contact
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>

      </Link>

      <button>{renderThemeChanger()}</button>
    </div>
  </nav>
  )
}

export default MiniNavigationBar