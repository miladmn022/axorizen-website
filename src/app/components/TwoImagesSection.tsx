"use client";

import { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";
import Image from "next/image";

export default function TwoImagesSection() {
  const scrolled = useScroll();
  const [scaleLeft, setScaleLeft] = useState(1);
  const [scaleRight, setScaleRight] = useState(1);

  // تنظیم ارتفاع‌ها
  const leftImageHeight = 400;
  const rightImageHeight = 800;

  useEffect(() => {
    // تنظیم افکت زوم نرم هنگام اسکرول
    setScaleLeft(1 + Math.min(scrolled / 2000, 0.15));
    setScaleRight(1 + Math.min(scrolled / 2500, 0.12));
  }, [scrolled]);

  return (
    <section
      style={{
        position: "relative",
        minHeight: `${rightImageHeight}px`,
        padding: "0 10px",
        overflow: "visible",
        display: "flex",
        gap: "10px",
      }}
    >
      {/* تصویر چپ که حالا همزمان با اسکرول حرکت می‌کند */}
      <div
        style={{
          width: "50%",
          height: `${leftImageHeight}px`,
          position: "relative", // حذف `sticky`
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/image-2.jpg"
          alt="Project Image 1"
          width={600}
          height={leftImageHeight}
          style={{
            objectFit: "cover",
            display: "block",
            transform: `scale(${scaleLeft})`,
            transformOrigin: "center center",
            transition: "transform 0.3s ease-out",
          }}
          priority
        />
      </div>

      {/* تصویر راست که همچنان اسکرول می‌شود */}
      <div
        style={{
          width: "50%",
          height: `${rightImageHeight}px`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/image-3.jpg"
          alt="Project Image 2"
          width={600}
          height={rightImageHeight}
          style={{
            objectFit: "cover",
            display: "block",
            transform: `scale(${scaleRight})`,
            transformOrigin: "center center",
            transition: "transform 0.3s ease-out",
          }}
          priority
        />
      </div>
    </section>
  );
}
