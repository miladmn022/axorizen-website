"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Hoverable from "../components/Hoverable";

export default function TextBelowVideo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const localRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (localRef) observer.observe(localRef);
    return () => {
      if (localRef) observer.unobserve(localRef);
    };
  }, []);

  return (
    <section className="bg-[var(--background)] px-6 md:px-20 py-32">
      <div
        ref={ref}
        className={`
          transition-all duration-700 ease-out will-change-transform 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          max-w-3xl md:ml-[30%] mx-auto text-left
        `}
      >
        <p
          className="text-[24px] md:text-[48px] font-light leading-relaxed text-[var(--foreground)] mb-10"
          style={{
            fontFamily: `'Helvetica Neue', 'Suisse Int\'l', sans-serif`,
          }}
        >
          We are a dedicated team crafting innovative websites that elevate your brand with cutting-edge design and seamless functionality.
        </p>

        <Hoverable>
          <Link
            href="/about"
            className="inline-block text-[var(--foreground)] text-sm md:text-base font-light px-6 py-2 border border-gray-400 hover:border-white transition-all duration-300"
          >
            Read more
          </Link>
        </Hoverable>
      </div>
    </section>
  );
}
