"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useScroll from "../hooks/useScroll";

export default function MirroredImageSection() {
  const scrolled = useScroll();
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setOpacity(scrolled > 600 ? 1 : 0); // نمایش تصویر هنگام اسکرول

    // زوم داخل قاب عکس و بازگشت به حالت اولیه هنگام توقف اسکرول
    setScale(1 + Math.min(scrolled / 2000, 0.15));
  }, [scrolled]);

  return (
    <section
      style={{
        position: "relative",
        height: "600px", // افزایش اندازه‌ی تصویر ۲۰٪
        opacity,
        transition: "opacity 0.6s ease-out",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "72%", // افزایش عرض ۲۰٪
          height: "100%",
          position: "absolute",
          left: 0,
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/image-4.jpg"
          alt="Web Design Project Mirrored"
          width={720} // افزایش عرض ۲۰٪
          height={600} // افزایش ارتفاع ۲۰٪
          style={{
            objectFit: "cover",
            transform: `scale(${scale})`, // زوم داخل قاب عکس
            transition: "transform 0.3s ease-out",
          }}
          priority
        />
      </div>
    </section>
  );
}
