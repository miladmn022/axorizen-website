"use client";

import { useEffect, useState, useRef } from "react";

export default function TextWithEffect() {
  const textLines = [
    ["C", "R", "E", "A", "T", "I", "V", "E"],
    ["D", "E", "S", "I", "G", "N"],
    ["D", "R", "I", "V", "E", "S", " ", "I", "N", "N", "O", "V", "A", "T", "I", "O", "N"],
    ["G", "R", "E", "A", "T", " ", "D", "E", "S", "I", "G", "N", " ", "C", "H", "A", "N", "G", "E", "S", " ", "E", "V", "E", "R", "Y", "T", "H", "I", "N", "G"]
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
    <section className="bg-[var(--background)] text-[var(--foreground)] px-6 md:px-28 pt-20 pb-24 sm:pt-28 sm:pb-32">
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
              ${
                lineIndex === 3
                  ? "text-[20px] sm:text-[28px] md:text-[56px]"
                  : "text-[24px] sm:text-[36px] md:text-[80px]"
              }
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
