"use client";

import { useEffect, useState, useRef } from "react";

export default function TextWithEffect() {
  const textLines = [
    ["C", "R", "E", "A", "T", "I", "V", "E"],
    ["D", "E", "S", "I", "G", "N"],
    ["I", "S", " ", "E", "V", "E", "R", "Y", "T", "H", "I", "N", "G"],
    ["W", "E", "B", " ", "D", "E", "S", "I", "G", "N", " ", "M", "A", "T", "T", "E", "R", "S", "."]
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
            updatedLines[index] =
              rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.35;
            return updatedLines;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] px-6 md:px-28 py-32">
      <div className="max-w-[90%] mx-0 flex flex-col gap-6">
        {textLines.map((line, lineIndex) => (
          <p
            key={lineIndex}
            ref={(el) => {
              sectionRefs.current[lineIndex] = el;
            }}
            className={`
              font-normal font-serif leading-tight
              ${lineIndex === 1 ? "pl-8 md:pl-16" : ""}
              text-left
              ${lineIndex === 3 ? "text-[36px] md:text-[56px]" : "text-[40px] md:text-[80px]"}
              m-0
            `}
          >
            {line.map((char, charIndex) => (
              <span
                key={charIndex}
                className="inline-block"
                style={{
                  marginRight: char === " " ? "20px" : "0px",
                  opacity: visibleLines[lineIndex] ? 1 : 0,
                  transform: visibleLines[lineIndex]
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `opacity 0.5s ease-out ${charIndex * 0.05}s, transform 0.5s ease-out ${charIndex * 0.05}s`,
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
