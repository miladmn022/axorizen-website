"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 20 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleCursorHover = (e: Event) => {
      if (e instanceof CustomEvent) {
        setIsHovering(!!e.detail?.isHovering);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("cursor-hover", handleCursorHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("cursor-hover", handleCursorHover);
    };
  }, []);

  return (
    <motion.div
      className={`pointer-events-none fixed z-[9999] top-0 left-0 rounded-full bg-white mix-blend-difference flex items-center justify-center
        ${isHovering ? "w-12 h-12" : "w-4 h-4"}`} // کمی افزایش اندازه برای تجربه بصری بهتر
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
