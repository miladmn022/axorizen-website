"use client";

import { useEffect, useState, useRef } from "react";

export default function TextWithEffect() {
  const textLines = [
    ["C", "R", "E", "A", "T", "I", "V", "E"],
    ["D", "E", "S", "I", "G", "N"],
    ["I", "S", " ", "E", "V", "E", "R", "Y", "T", "H", "I", "N", "G"],
    ["L", "E", "T", "'", "S", " ", "T", "A", "L", "K", " ", "→"]
  ];

  const sectionRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [visibleLines, setVisibleLines] = useState(Array(textLines.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref instanceof HTMLElement) {
          const rect = ref.getBoundingClientRect();
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
  }, []);

  return (
    <div>
      <section style={{ padding: "150px 120px", backgroundColor: "#000", color: "#fff", textAlign: "left" }}>
        <div style={{ maxWidth: "90%", margin: "0 auto 0 0" }}>
          {textLines.map((line, lineIndex) => (
            <p
              key={lineIndex}
              ref={(el) => {
                sectionRefs.current[lineIndex] = el;
              }}
              style={{
                fontSize: lineIndex === 3 ? "56px" : "80px",
                fontWeight: "normal",
                fontFamily: "'NewParisText-Regular', serif",
                margin: "0",
                textAlign: lineIndex === 3 ? "right" : "left",
              }}
            >
              {line.map((char, charIndex) => (
                char === "→" ? (
                  <a
                    key={charIndex}
                    href="/contact"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      transition: "transform 0.3s ease",
                      display: "inline-block",
                      opacity: visibleLines[lineIndex] ? 1 : 0,
                      transform: visibleLines[lineIndex] ? "translateX(0)" : "translateX(-10px)",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.transform = "translateX(0)";
                    }}
                  >
                    {char}
                  </a>
                ) : (
                  <span
                    key={charIndex}
                    style={{
                      opacity: visibleLines[lineIndex] ? 1 : 0,
                      transform: visibleLines[lineIndex] ? "translateY(0)" : "translateY(30px)",
                      transition: `opacity 0.5s ease-out ${charIndex * 0.05}s, transform 0.5s ease-out ${charIndex * 0.05}s`,
                      display: "inline-block",
                      marginRight: char === " " ? "20px" : "0px",
                    }}
                  >
                    {char}
                  </span>
                )
              ))}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
