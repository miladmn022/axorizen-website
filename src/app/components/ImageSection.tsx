"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useScroll from "../hooks/useScroll";

export default function ImageSection() {
  const scrolled = useScroll();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(scrolled > 600 ? 1 : 0);
  }, [scrolled]);

  const dynamicHeight = typeof window !== "undefined" && window.innerWidth < 640 ? "300px" : "500px";

  return (
    <section
      style={{
        position: "relative",
        height: dynamicHeight,
        opacity,
        transition: "opacity 0.6s ease-out",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "60%",
          height: "100%",
          position: "absolute",
          right: 0,
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/image-1.jpg"
          alt="Web Design Project"
          width={800}
          height={500}
          style={{
            objectFit: "cover",
            transform: `scale(${1 + scrolled / 2000})`,
            transition: "transform 0.3s ease-out",
          }}
          priority
        />
      </div>
    </section>
  );
}
