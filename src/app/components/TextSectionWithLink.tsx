/// <reference types="react" />
"use client";

import { useEffect, useRef, useState } from "react";
import React from "react";

export default function TextSectionWithLink() {
  const textLines = [
    ["W", "E", " ", "T", "U", "R", "N"],
    ["I", "D", "E", "A", "S", " ", "I", "N", "T", "O", " ", "I", "D", "E", "N", "T", "I", "T", "Y"],
    ["D", "E", "S", "I", "G", "N", " ", "I", "N", "T", "O", " ", "I", "M", "P", "A", "C", "T"],
    ["V", "I", "S", "I", "O", "N", "S", " ", "I", "N", "T", "O", " ", "E", "X", "P", "E", "R", "I", "E", "N", "C", "E"],
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
            const updated = [...prev];
            updated[index] =
              rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.35;
            return updated;
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
        {textLines.map((line, index) => {
          const skipIndexes = new Set<number>();
          const elements: JSX.Element[] = [];

          for (let i = 0; i < line.length; i++) {
            if (skipIndexes.has(i)) continue;

            const isInto =
              i + 3 < line.length &&
              line[i] === "I" &&
              line[i + 1] === "N" &&
              line[i + 2] === "T" &&
              line[i + 3] === "O";

            if (isInto) {
              ["I", "N", "T", "O"].forEach((c, offset) => {
                skipIndexes.add(i + offset);
                elements.push(
                  <span
                    key={`${index}-${i + offset}`}
                    className="inline-block text-[80%]"
                    style={{
                      marginRight: c === " " ? "20px" : "0px",
                      opacity: visibleLines[index] ? 1 : 0,
                      transform: visibleLines[index]
                        ? "translateY(0)"
                        : "translateY(30px)",
                      transition: `opacity 0.5s ease-out ${(i + offset) * 0.05}s, transform 0.5s ease-out ${(i + offset) * 0.05}s`,
                    }}
                  >
                    {c}
                  </span>
                );
              });
              continue;
            }

            const char = line[i];

            if (char === "→") {
              elements.push(
                <a
                  key={`${index}-${i}`}
                  href="/contact"
                  className="inline-block text-[var(--foreground)] no-underline transition-transform duration-300"
                  style={{
                    opacity: visibleLines[index] ? 1 : 0,
                    transform: visibleLines[index]
                      ? "translateX(0)"
                      : "translateX(-10px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  {char}
                </a>
              );
            } else {
              elements.push(
                <span
                  key={`${index}-${i}`}
                  className="inline-block"
                  style={{
                    marginRight: char === " " ? "20px" : "0px",
                    opacity: visibleLines[index] ? 1 : 0,
                    transform: visibleLines[index]
                      ? "translateY(0)"
                      : "translateY(30px)",
                    transition: `opacity 0.5s ease-out ${i * 0.05}s, transform 0.5s ease-out ${i * 0.05}s`,
                  }}
                >
                  {char}
                </span>
              );
            }
          }

          return (
            <p
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className={`
                font-normal font-serif leading-tight m-0
                ${index === 4 ? "text-right" : "text-left"}
                ${index === 1 ? "pl-4 sm:pl-8 md:pl-32" : ""}
                ${index === 2 ? "pl-6 sm:pl-12 md:pl-48" : ""}
                ${index === 3 ? "pl-2 sm:pl-4 md:pl-20" : ""}
                ${
                  index === 4
                    ? "text-[16px] sm:text-[28px] md:text-[56px]"
                    : "text-[20px] sm:text-[32px] md:text-[80px]"
                }
              `}
            >
              {elements}
            </p>
          );
        })}
      </div>
    </section>
  );
}
