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
  return (
    <nav
    className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] Z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen  
  "
  >
    <div
      className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8  xl:rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
"
    >
      <Link
        href={"/"}
        className="relative flex items-center group transition-all duration-500"
      >
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

      <button>{renderThemeChanger()}</button>
    </div>
  </nav>
  )
}

export default MiniNavigationBar