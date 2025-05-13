"use client";

import { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";

export default function FinalText() {
  const scrolled = useScroll();
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState("50px");

  useEffect(() => {
    setOpacity(scrolled > 1800 ? 1 : 0);
    setTranslateY(scrolled > 1800 ? "0px" : "50px");
  }, [scrolled]);

  return (
    <section
      style={{
        padding: "150px 50px",
        opacity,
        transform: `translateY(${translateY})`,
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div
        style={{
          maxWidth: "80%",
          margin: "0 0 0 auto",
          textAlign: "right",
        }}
      >
        <p
          style={{
            fontSize: "70px",
            fontWeight: "normal",
            fontFamily: "'Times New Roman', serif",
            margin: "0",
            letterSpacing: "8px",
            lineHeight: "1.1",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          We create websites that inspire and transform your digital presence
        </p>
      </div>
    </section>
  );
}
