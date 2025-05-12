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

    const handleCursorHover = (e: CustomEvent) => {
      setIsHovering(!!e.detail?.isHovering);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("cursor-hover", handleCursorHover as EventListener);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("cursor-hover", handleCursorHover as EventListener);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`pointer-events-none fixed z-[9999] top-0 left-0 rounded-full bg-white mix-blend-difference flex items-center justify-center
        ${isHovering ? "w-10 h-10" : "w-3 h-3"}`}
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