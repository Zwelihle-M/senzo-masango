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
    <div>MiniNavigationBar</div>
  )
}

export default MiniNavigationBar