"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`
        w-9 h-9 rounded-lg border flex items-center justify-center text-base
        transition-all duration-300 group
        border-[var(--border)]
        text-[var(--text-3)]
        hover:border-violet-500/60
        hover:bg-violet-500/10
        hover:text-violet-400
      `}
    >
      {isDark ? (
        <SunOutlined className="transition-transform group-hover:rotate-12 group-hover:scale-110" />
      ) : (
        <MoonOutlined className="transition-transform group-hover:-rotate-12 group-hover:scale-110" />
      )}
    </button>
  );
}
