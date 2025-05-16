"use client";

import { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";

export default function TextBelowTwoImage() {
  const scrolled = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(scrolled > 1800);
  }, [scrolled]);

  return (
    <section
      className={`
        transition-all duration-700 ease-out
        px-6 sm:px-10 md:px-20 py-36
        transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      <div className="max-w-[80%] ml-auto text-right">
        <p
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-normal font-serif
            tracking-[0.3em] leading-tight
            text-[var(--foreground)] drop-shadow-lg
          "
        >
          We create websites that inspire and transform your digital presence
        </p>
      </div>
    </section>
  );
}
