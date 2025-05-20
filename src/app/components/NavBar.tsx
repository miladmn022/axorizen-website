"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";
import Hoverable from "../components/Hoverable";

export default function NavBar() {
  const scrolled = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");

  const updateTheme = () => {
    if (document.body.classList.contains("light")) {
      setCurrentTheme("light");
    } else {
      setCurrentTheme("dark");
    }
  };

  useEffect(() => {
    updateTheme(); // بار اول اجرا

    // رصد تغییرات کلاس body
    const observer = new MutationObserver(() => {
      updateTheme();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    // گوش دادن به اسکرول اگر تم با اسکرول تغییر می‌کنه
    window.addEventListener("scroll", updateTheme);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateTheme);
    };
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full h-[60px] px-6 md:px-10 flex items-center justify-between z-[1000] transition-colors duration-300
        ${scrolled > 50 ? "bg-[var(--background)]/90 backdrop-blur-sm" : "bg-transparent"}
      `}
    >
      <div className="flex items-center gap-3">
        <div className="block md:hidden h-[32px] w-[32px]">
          <Image
            src={
              currentTheme === "dark"
                ? "/images/Logo-A(white).svg"
                : "/images/Logo-A(black).svg"
            }
            alt="A Logo"
            width={32}
            height={32}
            className="object-contain h-full w-auto"
          />
        </div>

        <Hoverable>
          <Link href="/" className="hidden md:block">
            <Image
              src={
                currentTheme === "dark"
                  ? "/images/Logo-Axorizen(white).svg"
                  : "/images/Logo-Axorizen(black).svg"
              }
              alt="Axorizen"
              width={140}
              height={35}
              className="object-contain h-[35px] w-auto"
            />
          </Link>
        </Hoverable>
      </div>

      <div
        className="md:hidden flex flex-col gap-[5px] cursor-pointer z-[1100]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-[2px] bg-[var(--foreground)]" />
        <span className="w-6 h-[2px] bg-[var(--foreground)]" />
        <span className="w-6 h-[2px] bg-[var(--foreground)]" />
      </div>

      <div className="hidden md:flex items-center gap-6">
        {[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Hoverable key={label}>
            <Link
              href={href}
              className="text-[var(--foreground)] text-sm font-light border-b border-transparent hover:border-white transition-all duration-300"
            >
              {label}
            </Link>
          </Hoverable>
        ))}
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 w-full bg-[var(--background)]/95 flex flex-col items-end px-6 py-4 md:hidden z-[1050]">
          {[
            { href: "/", label: "Home" },
            { href: "/projects", label: "Projects" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Hoverable key={label}>
              <Link
                href={href}
                className="text-[var(--foreground)] text-base font-light py-2 border-b border-white/20 w-full text-right"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </Hoverable>
          ))}
        </div>
      )}
    </nav>
  );
}
