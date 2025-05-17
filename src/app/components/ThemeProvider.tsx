"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  // بارگذاری تم ذخیره شده در localStorage هنگام شروع
  useEffect(() => {
    const stored = localStorage.getItem("admin-theme") as Theme | null;
    if (stored) {
      setTheme(stored);
      document.body.classList.add(stored);
      document.body.classList.remove(stored === "dark" ? "light" : "dark");
    } else {
      // پیش‌فرض
      document.body.classList.add("dark");
    }
  }, []);

  // تغییر تم و ذخیره در localStorage
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("admin-theme", newTheme);
      document.body.classList.add(newTheme);
      document.body.classList.remove(newTheme === "dark" ? "light" : "dark");
      return newTheme;
    });
  }, []);

  // اضافه کردن event listener برای کلید Alt+T جهت تغییر تم
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "t") {
        e.preventDefault();
        toggleTheme();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [toggleTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// هوک برای استفاده آسان از ThemeContext
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;