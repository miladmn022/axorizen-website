"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false); // بررسی فعال بودن در دسکتاپ

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 20 });

  const [isHovering, setIsHovering] = useState(false);

  const moveCursor = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  const handleCursorHover = useCallback((e: Event) => {
    if (e instanceof CustomEvent) {
      setIsHovering(e.detail?.isHovering ?? false);
    }
  }, []);

  useEffect(() => {
    // فقط در دسکتاپ فعال بشه
    const isDesktop = window.innerWidth > 768;
    if (!isDesktop) return;

    setEnabled(true);
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("cursor-hover", handleCursorHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("cursor-hover", handleCursorHover);
    };
  }, [moveCursor, handleCursorHover]);

  if (!enabled) return null;

  return (
    <motion.div
      className={`pointer-events-none fixed z-[9999] top-0 left-0 rounded-full bg-white mix-blend-difference
        ${isHovering ? "w-12 h-12" : "w-4 h-4"}`}
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    />
  );
}
