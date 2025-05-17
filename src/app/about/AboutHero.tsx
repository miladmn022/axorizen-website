"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MirroredImageSection from "../components/MirroredImageSection";

const heroLines = [
  ["I", "D", "E", "N", "T", "I", "T", "Y"],
  ["I", "M", "P", "A", "C", "T"],
  ["E", "X", "P", "E", "R", "I", "E", "N", "C", "E"],
];

const statementLines = [
  "We design immersive spaces,",
  "crafted to captivate and engage.",
  "We believe in building clarity,",
  "and exploring the unfamiliar with intention.",
];

const paragraphLines = [
  "We turn design into presence,",
  "experience into connection,",
  "and bold ideas into living interfaces.",
];

const philosophyLines = [
  "We design with purpose and curiosity,",
  "transforming complexity into elegant simplicity.",
  "Every pixel tells a story,",
  "crafted to connect users with brands intuitively.",
];

export default function AboutHero() {
  const heroRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const statementRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const philosophyRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const whiteSectionRef = useRef<HTMLDivElement | null>(null);

  const [visibleHero, setVisibleHero] = useState(Array(heroLines.length).fill(false));
  const [visibleStatement, setVisibleStatement] = useState(Array(statementLines.length).fill(false));
  const [visiblePhilosophy, setVisiblePhilosophy] = useState(Array(philosophyLines.length).fill(false));
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      heroRefs.current.forEach((ref, index) => {
        if (ref instanceof HTMLElement) {
          const rect = ref.getBoundingClientRect();
          setVisibleHero((prev) => {
            const updated = [...prev];
            updated[index] = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
            return updated;
          });
        }
      });

      statementRefs.current.forEach((ref, index) => {
        if (ref instanceof HTMLElement) {
          const rect = ref.getBoundingClientRect();
          setVisibleStatement((prev) => {
            const updated = [...prev];
            updated[index] = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
            return updated;
          });
        }
      });

      philosophyRefs.current.forEach((ref, index) => {
        if (ref instanceof HTMLElement) {
          const rect = ref.getBoundingClientRect();
          setVisiblePhilosophy((prev) => {
            const updated = [...prev];
            updated[index] = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
            return updated;
          });
        }
      });

      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setShowImage(rect.top < window.innerHeight * 0.85 && rect.bottom > 0);
      }

      if (whiteSectionRef.current) {
        const rect = whiteSectionRef.current.getBoundingClientRect();
        const visible = rect.top < window.innerHeight * 0.85;
        document.body.classList.toggle("light", visible);
        document.body.classList.toggle("dark", !visible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HERO HEADINGS */}
      <section className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center px-6 md:px-20">
        <div className="flex flex-col gap-6 w-full">
          {heroLines.map((line, i) => {
            const alignment =
              i === 0 ? "md:text-left" : i === 1 ? "text-center" : "md:text-right";
            return (
              <p
                key={i}
                ref={(el) => (heroRefs.current[i] = el)}
                className={`text-[40px] md:text-[80px] font-bold tracking-tight leading-tight m-0 text-center ${alignment}`}
              >
                {line.map((char, j) => (
                  <span
                    key={j}
                    className="inline-block"
                    style={{
                      marginRight: char === " " ? "20px" : "0px",
                      opacity: visibleHero[i] ? 1 : 0,
                      transform: visibleHero[i] ? "translateY(0px)" : "translateY(30px)",
                      transition: `opacity 0.5s ease ${j * 0.05}s, transform 0.5s ease ${j * 0.05}s`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </p>
            );
          })}
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section
        ref={imageRef}
        className="w-full h-screen relative flex items-center justify-center bg-[var(--background)]"
      >
        <div
          className="w-full h-full transition-all duration-1000 ease-out"
          style={{
            opacity: showImage ? 1 : 0,
            transform: showImage ? "scale(1)" : "scale(1.1)",
          }}
        >
          <Image
            src="/images/image-7.jpg"
            alt="About Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </section>

      {/* PARAGRAPH 1 */}
      <section className="bg-[var(--background)] text-[var(--foreground)] px-6 md:px-20 py-12">
        <div className="flex flex-col gap-4 text-left">
          {statementLines.map((line, i) => (
            <p
              key={i}
              ref={(el) => (statementRefs.current[i] = el)}
              className="text-[24px] md:text-[36px] font-light tracking-wide leading-snug"
              style={{
                opacity: visibleStatement[i] ? 1 : 0,
                transform: visibleStatement[i] ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.2}s, transform 0.5s ease ${i * 0.2}s`,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* PARAGRAPH 2 (CENTERED, BIGGER + BOLD TEXT) */}
      <section className="bg-[var(--background)] text-[var(--foreground)] px-6 md:px-20 py-20">
        <div className="text-center space-y-3">
          {paragraphLines.map((line, i) => (
            <p
              key={i}
              className="text-[30px] md:text-[48px] font-semibold tracking-tight leading-snug"
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* PARAGRAPH 3 (RIGHT-ALIGNED EVEN MORE) */}
      <section
        ref={whiteSectionRef}
        className="relative z-0 px-6 md:px-20 py-24 bg-[var(--background)] text-[var(--foreground)]"
      >
        <div className="w-full md:w-[70%] ml-auto md:mr-[12%] text-left space-y-4">
          {philosophyLines.map((line, i) => (
            <p
              key={i}
              ref={(el) => (philosophyRefs.current[i] = el)}
              className="text-[20px] md:text-[28px] font-light tracking-wide"
              style={{
                opacity: visiblePhilosophy[i] ? 1 : 0,
                transform: visiblePhilosophy[i] ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.2}s, transform 0.5s ease ${i * 0.2}s`,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      <MirroredImageSection />
    </>
  );
}
