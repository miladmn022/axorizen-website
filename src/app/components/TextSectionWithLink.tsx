"use client";

import { useEffect, useState, useRef, createRef } from "react";

export default function StyledTextSection() {
  const textLines = [
    ["W", "E", " ", "A", "R", "E", " ", "B", "U", "I", "L", "D", "I", "N", "G"],
    ["A", " ", "N", "E", "W", " ", "M", "I", "N", "D", "S", "E", "T"],
    ["A", "R", "O", "U", "N", "D", " ", "D", "E", "S", "I", "G", "N"],
    ["T", "O", " ", "I", "N", "N", "O", "V", "A", "T", "E"],
    ["L", "E", "T", "'", "S", " ", "T", "A", "L", "K", " ", "→"]
  ];

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
  }, [sectionRefs.current]);

  return (
    <div>
      <section style={{ padding: "150px 120px", backgroundColor: "#000", color: "#fff", textAlign: "left" }}>
        <div style={{ maxWidth: "90%", margin: "0 auto 0 0" }}>
          {textLines.map((line, lineIndex) => (
            <p
              key={lineIndex}
              ref={sectionRefs.current[lineIndex]}
              style={{
                fontSize: lineIndex === 4 ? "56px" : "80px",
                fontWeight: "normal",
                fontFamily: "'NewParisText-Regular', serif",
                margin: "0",
                paddingLeft: lineIndex === 1 ? "250px" : lineIndex === 2 ? "390px" : lineIndex === 3 ? "90px" : "0px",
                textAlign: lineIndex === 4 ? "right" : "left",
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
                    onMouseEnter={(e) => e.target.style.transform = "translateX(5px)"}
                    onMouseLeave={(e) => e.target.style.transform = "translateX(0)"}
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
