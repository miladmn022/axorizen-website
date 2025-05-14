"use client";

import Link from "next/link";
import useScroll from "../hooks/useScroll";
import Hoverable from "./Hoverable"; // اگر در پروژه‌ات استفاده می‌کنی

export default function TextWithLink() {
  const scrolled = useScroll();
  const visible = scrolled > 1200;

  return (
    <section
      className={`
        px-6 sm:px-10 md:px-20 py-24
        transition-all duration-700 ease-out
        transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      <div className="max-w-[80%] mx-auto text-center">
        <p className="text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.3em] leading-snug text-white drop-shadow-lg mb-12">
          Our designs reflect a perfect blend of creativity and functionality
        </p>

        <div className="text-right">
          <Hoverable>
            <Link
              href="/projects"
              className="relative inline-block text-white text-base sm:text-lg tracking-wider px-6 py-2 transition-colors duration-300 group"
            >
              {/* حلقه سفید دایره‌ای */}
              <span className="
                absolute top-1/2 left-1/2 w-36 h-36 -translate-x-1/2 -translate-y-1/2
                border-2 border-white rounded-full z-[-1]
                transition-all duration-300 group-hover:bg-white group-hover:border-white
              " />
              <span className="group-hover:text-black transition-colors duration-300">
                view projects
              </span>
            </Link>
          </Hoverable>
        </div>
      </div>
    </section>
  );
}
