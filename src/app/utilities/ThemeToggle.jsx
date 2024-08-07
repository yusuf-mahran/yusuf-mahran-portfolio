"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

export default function ThemeBtn() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={`theme-btn hover:scale-125 transition-all`}
    >
      {resolvedTheme === "dark" ? (
        <MdSunny className="text-2xl text-orange-400" />
      ) : (
        <IoMoon className="text-2xl" />
      )}
    </button>
  );
}
