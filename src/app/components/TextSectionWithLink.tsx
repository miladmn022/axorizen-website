"use client";

import { useEffect, useRef, useState } from "react";

export default function TextSectionWithLink() {
  const textLines = [
    ["W", "E", " ", "A", "R", "E", " ", "B", "U", "I", "L", "D", "I", "N", "G"],
    ["A", " ", "N", "E", "W", " ", "M", "I", "N", "D", "S", "E", "T"],
    ["A", "R", "O", "U", "N", "D", " ", "D", "E", "S", "I", "G", "N"],
    ["T", "O", " ", "I", "N", "N", "O", "V", "A", "T", "E"],
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
    <section className="bg-darkBg text-white px-6 md:px-28 py-32">
      <div className="max-w-[90%] mx-0 flex flex-col gap-6">
        {textLines.map((line, index) => (
          <p
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className={`
              font-normal font-serif leading-tight m-0
              ${index === 4 ? "text-right" : "text-left"}
              ${index === 1 ? "pl-8 md:pl-32" : ""}
              ${index === 2 ? "pl-12 md:pl-48" : ""}
              ${index === 3 ? "pl-4 md:pl-20" : ""}
              ${index === 4 ? "text-[32px] md:text-[56px]" : "text-[36px] md:text-[80px]"}
            `}
          >
            {line.map((char, charIndex) =>
              char === "→" ? (
                <a
                  key={charIndex}
                  href="/contact"
                  className="inline-block text-white no-underline transition-transform duration-300"
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
              ) : (
                <span
                  key={charIndex}
                  className="inline-block"
                  style={{
                    marginRight: char === " " ? "20px" : "0px",
                    opacity: visibleLines[index] ? 1 : 0,
                    transform: visibleLines[index]
                      ? "translateY(0)"
                      : "translateY(30px)",
                    transition: `opacity 0.5s ease-out ${charIndex * 0.05}s, transform 0.5s ease-out ${charIndex * 0.05}s`,
                  }}
                >
                  {char}
                </span>
              )
            )}
          </p>
        ))}
      </div>
    </section>
  );
}
