"use client";

import { useEffect, useState, useRef, createRef } from "react";

export default function TextWithEffect() {
  const textLines = [
    ["W", "e", " ", "A", "r", "e", " ", "C", "r", "a", "f", "t", "i", "n", "g"],
    ["P", "r", "o", "f", "e", "s", "s", "i", "o", "n", "a", "l"],
    ["W", "e", "b", " ", "D", "e", "s", "i", "g", "n", " ", "S", "o", "l", "u", "t", "i", "o", "n", "s"]
  ];

  // رفع مشکل `useRef` با استفاده از `createRef()`
  const sectionRefs = useRef(textLines.map(() => createRef())); 
  const [visibleLines, setVisibleLines] = useState(Array(textLines.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          setVisibleLines((prev) => {
            const updatedLines = [...prev];
            updatedLines[index] = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.35;
            return updatedLines;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs.current]); // افزودن وابستگی در `useEffect`

  return (
    <section style={{ padding: "100px 50px" }}>
      <div style={{ maxWidth: "90%", margin: "0 auto 0 0", textAlign: "left" }}>
        {textLines.map((line, lineIndex) => (
          <p
            key={lineIndex}
            ref={sectionRefs.current[lineIndex]}
            style={{
              fontSize: "100px",
              fontWeight: "normal", // حذف حالت بولد برای ظاهر مینیمال‌تر
              fontFamily: "'Times New Roman', serif",
              margin: "0",
              letterSpacing: "6px",
              lineHeight: "1.6",
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
              paddingLeft: lineIndex === 1 ? "80px" : "0px",
            }}
          >
            {line.map((char, charIndex) => (
              <span
                key={charIndex}
                style={{
                  opacity: visibleLines[lineIndex] ? 1 : 0,
                  transform: visibleLines[lineIndex] ? "translateY(0)" : "translateY(25px)",
                  transition: `opacity 0.4s ease-out ${charIndex * 0.05}s, transform 0.4s ease-out ${charIndex * 0.05}s`,
                  display: "inline-block",
                  marginRight: char === " " ? "15px" : "0px",
                }}
              >
                {char}
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}
