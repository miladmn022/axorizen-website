"use client";

import { useEffect, useRef, useState } from "react";

export default function TwoImagesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [zoom, setZoom] = useState(1.2);
  const [isSticky, setIsSticky] = useState(false);

  const leftImageHeight = 400;
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

    handleScroll(); // اجرا در شروع
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col md:flex-row gap-3 px-3 min-h-[800px]"
    >
      {/* تصویر چپ (sticky) */}
      <div
        className={`w-full md:w-1/2 overflow-hidden h-[400px] ${
          isSticky ? "md:sticky md:top-[50px]" : ""
        }`}
      >
        <img
          src="/images/image-2.jpg"
          alt="Project Image 1"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
        />
      </div>

      {/* تصویر راست */}
      <div className="w-full md:w-1/2 relative overflow-hidden h-[800px]">
        <img
          src="/images/image-3.jpg"
          alt="Project Image 2"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
        />
      </div>
    </section>
  );
}
