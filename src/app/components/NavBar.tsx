"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useScroll from "../hooks/useScroll";
import Hoverable from "../components/Hoverable";

export default function NavBar() {
  const scrolled = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`
        fixed top-0 w-full h-[60px] px-6 md:px-10 flex items-center justify-between z-[1000] transition-colors duration-300
        ${scrolled > 50 ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"}
      `}
    >
      {/* سمت چپ */}
      <div className="flex items-center gap-3">
        {/* لوگوی A برای موبایل */}
        <div className="block md:hidden h-[32px] w-[32px]">
          <Image
            src="/images/Logo-A.png"
            alt="A Logo"
            width={32}
            height={32}
            className="object-contain h-full w-auto"
          />
        </div>

        {/* لوگوی Axorizen برای دسکتاپ */}
        <Hoverable>
          <Link href="/" className="hidden md:block">
            <Image
              src="/images/Logo-Axorizen.png"
              alt="Axorizen Logo"
              width={140}
              height={35}
              className="object-contain h-[35px] w-auto"
            />
          </Link>
        </Hoverable>
      </div>

      {/* آیکون منو در موبایل */}
      <div
        className="md:hidden flex flex-col gap-[5px] cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-[2px] bg-white" />
        <span className="w-6 h-[2px] bg-white" />
        <span className="w-6 h-[2px] bg-white" />
      </div>

      {/* منو برای دسکتاپ */}
      <div className="hidden md:flex items-center gap-6">
        {[
          { href: "/projects", label: "Projects" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Hoverable key={label}>
            <Link
              href={href}
              className="text-white text-sm font-light border-b border-transparent hover:border-white transition-all duration-300"
            >
              {label}
            </Link>
          </Hoverable>
        ))}
      </div>

      {/* منوی بازشونده موبایل */}
      {isOpen && (
        <div className="absolute top-full right-0 w-full bg-black/90 flex flex-col items-end px-6 py-4 md:hidden">
          {[
            { href: "/projects", label: "Projects" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Hoverable key={label}>
              <Link
                href={href}
                className="text-white text-base font-light py-2 border-b border-white/30 w-full text-right"
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
