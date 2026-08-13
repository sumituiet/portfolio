"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="icon-button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle color theme"}
      title={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle color theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
}
