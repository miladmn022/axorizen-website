"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function TwoImagesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [zoom, setZoom] = useState(1.2);
  const [isSticky, setIsSticky] = useState(false);

  const rightImageHeight = 800;
  const navBarHeight = 50;
  const zoomRange = 400;
  const initialZoom = 1.2;
  const finalZoom = 1;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const sectionBottom = sectionTop + rightImageHeight;

      const newZoom = Math.max(
        finalZoom,
        initialZoom -
          (Math.max(0, window.scrollY - (sectionTop - zoomRange)) / zoomRange) *
            (initialZoom - finalZoom)
      );

      setZoom(newZoom);
      setIsSticky(window.scrollY < sectionBottom - navBarHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col md:flex-row gap-3 px-3 min-h-[800px]"
    >
      {/* تصویر چپ (sticky + داخل قاب با زوم داخلی) */}
      <div
        className={`relative w-full md:w-1/2 h-[400px] overflow-hidden ${
          isSticky ? "md:sticky md:top-[50px]" : ""
        }`}
      >
        <div
          className="w-full h-full"
          style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
        >
          <Image
            src="/images/image-2.jpg"
            alt="Project Image 1"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* تصویر راست (داخل قاب با زوم داخلی) */}
      <div className="relative w-full md:w-1/2 h-[800px] overflow-hidden">
        <div
          className="w-full h-full"
          style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
        >
          <Image
            src="/images/image-3.jpg"
            alt="Project Image 2"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
