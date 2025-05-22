"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useScroll from "../hooks/useScroll";

export default function MirroredImageSection2() {
  const scrolled = useScroll();
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setOpacity(scrolled > 600 ? 1 : 0);
    setScale(1 + Math.min(scrolled / 2000, 0.15));
  }, [scrolled]);

  return (
    <section
      className="relative h-[600px] overflow-hidden transition-opacity duration-700 ease-out"
      style={{ opacity }}
    >
      <div className="absolute right-0 h-full w-[72%] overflow-hidden">
        <Image
          src="/images/image-9.jpg"
          alt="Web Design Project Mirrored 2"
          width={720}
          height={600}
          className="object-cover w-full h-full transition-transform duration-300 ease-out"
          style={{ transform: `scale(${scale})` }}
          priority
        />
      </div>
    </section>
  );
}
