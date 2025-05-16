"use client";
import MirroredImageSection from "../components/MirroredImageSection";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const heroLines = [
  ["T", "H", "I", "N", "K"],
  ["B", "O", "L", "D", "E", "R"],
  ["I", "M", "P", "A", "C", "T"],
];

const statementLines = [
  "We are create spaces",
  "that are impossible to ignore.",
  "We believe in sharing",
  "and embracing the unexplored.",
];

const paragraphLines = [
  "Our studio thrives on curiosity and innovation,",
  "exploring uncharted territories of creativity.",
  "We believe in the power of storytelling,",
  "connecting brands with their audiences authentically.",
];

export default function AboutHero() {
  const sectionRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const whiteSectionRef = useRef<HTMLDivElement | null>(null);

  const [visibleHero, setVisibleHero] = useState(Array(heroLines.length).fill(false));
  const [showImage, setShowImage] = useState(false);
  const [visibleStatement, setVisibleStatement] = useState(Array(statementLines.length).fill(false));
  const [whiteVisible, setWhiteVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref instanceof HTMLElement) {
          const rect = ref.getBoundingClientRect();
          setVisibleHero((prev) => {
            const updated = [...prev];
            updated[index] =
              rect.top < window.innerHeight * 0.8 &&
              rect.bottom > window.innerHeight * 0.2;
            return updated;
          });
        }
      });

      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.2) {
          setShowImage(true);
        }
      }

      if (whiteSectionRef.current) {
        const rect = whiteSectionRef.current.getBoundingClientRect();
        const visible = rect.top < window.innerHeight * 0.85;
        setWhiteVisible(visible);

        if (visible) {
          setTimeout(() => document.body.classList.add("light"), 100);
          setTimeout(() => document.body.classList.remove("dark"), 100);
        } else {
          setTimeout(() => document.body.classList.add("dark"), 100);
          setTimeout(() => document.body.classList.remove("light"), 100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timers = statementLines.map((_, i) =>
      setTimeout(() => {
        setVisibleStatement((prev) => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, 800 + i * 1000)
    );
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <>
      {/* THINK / BOLDER / IMPACT */}
      <section className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center px-6 md:px-20">
        <div className="flex flex-col gap-6 text-center">
          {heroLines.map((line, i) => (
            <p
              key={i}
              ref={(el) => (sectionRefs.current[i] = el)}
              className={`text-[40px] md:text-[80px] font-bold tracking-tight leading-tight m-0 ${
                i === 1 ? "pl-12 md:pl-24" : i === 2 ? "pl-4 md:pl-10" : ""
              }`}
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
          ))}
        </div>
      </section>

      {/* IMAGE WITH ZOOM ON SCROLL */}
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

      {/* FOUR-LINE STATEMENT */}
      <section className="bg-[var(--background)] text-[var(--foreground)] px-6 md:px-20 py-12">
        <div className="flex flex-col gap-4 text-left">
          {statementLines.map((line, i) => (
            <p
              key={i}
              className="text-[24px] md:text-[36px] font-light tracking-wide leading-snug"
              style={{
                opacity: visibleStatement[i] ? 1 : 0,
                transform: visibleStatement[i] ? "translateY(0px)" : "translateY(-30px)",
                transition: `opacity 0.6s ease ${i * 0.3}s, transform 0.6s ease ${i * 0.3}s`,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* WHITE SECTION WITH TEXT */}
      <section
        ref={whiteSectionRef}
        className="relative z-0 px-6 md:px-20 py-24 bg-[var(--background)] text-[var(--foreground)]"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[40px] md:text-[64px] font-bold leading-tight">
            We craft narratives that resonate deeply,<br />
            weaving design and emotion into every experience.
          </h2>
          <div className="mt-8 space-y-4">
            {paragraphLines.map((line, index) => (
              <p
                key={index}
                className="text-lg md:text-xl opacity-100 translate-y-0 transition-all duration-1000"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE RIGHT – STICKY WITHIN SECTION */}
      <section className="w-full bg-[var(--background)] px-6 md:px-20 py-24">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="w-full md:w-[30%]">
            {/* Optional text here */}
          </div>

          {/* RIGHT SIDE - IMAGE STICKY */}
          <div className="w-full md:w-[70%]">
            <div className="sticky top-24">
              <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-1000 transform hover:scale-105">
                <Image
                  src="/images/image-8.jpg"
                  alt="Side Visual"
                  width={1600}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

<MirroredImageSection />