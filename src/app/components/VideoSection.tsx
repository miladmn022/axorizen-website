"use client";

import { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";

export default function VideoSection() {
  const scrolled = useScroll();
  const [opacity, setOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setOpacity(1 - Math.min(scrolled / 500, 1));

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrolled]);

  const fontSize = isMobile ? "40px" : "100px";
  const letterSpacing = isMobile ? "0px" : "15px";
  const whiteSpace = "nowrap";
  const sectionHeight = isMobile ? "85vh" : "100vh";

  return (
    <section style={{ position: "relative", height: sectionHeight, marginTop: "60px", overflow: "hidden" }}>
      <video autoPlay muted loop style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <source src="/video/slider-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translateY(${scrolled * 0.3}px)`,
          textAlign: "center",
          color: "#fff",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
          opacity,
          transition: "opacity 0.3s ease-in-out",
          maxWidth: "80%",
          whiteSpace,
        }}
      >
        <h1 style={{ fontSize, fontWeight: "bold", margin: 0, letterSpacing, lineHeight: "1" }}>
          A X O R I Z E N
        </h1>
      </div>
    </section>
  );
}
