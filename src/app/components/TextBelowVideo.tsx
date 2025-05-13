"use client";

import { useState, useEffect } from "react";
import useScroll from "../hooks/useScroll";

export default function TextBelowVideo() {
  const scrolled = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(scrolled > 300);
  }, [scrolled]);

  return (
    <section
      style={{
        padding: "200px 50px 100px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          margin: "0 auto 0 30%",
          textAlign: "left",
        }}
      >
        <p
          style={{
            fontSize: "50px",
            fontWeight: "normal", // حذف حالت بولد برای سازگاری با استایل کلی
            margin: "0 0 15px 0",
            letterSpacing: "6px",
            lineHeight: "1.2",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          We are a dedicated team crafting innovative websites that elevate your brand with cutting-edge design and seamless functionality.
        </p>
      </div>
    </section>
  );
}
