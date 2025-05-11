"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: CustomEvent) => {
      setIsHovering(e.detail.isHovering);
      setCursorText(e.detail.text);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("cursor-hover", handleHover as EventListener);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("cursor-hover", handleHover as EventListener);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`pointer-events-none fixed z-[9999] top-0 left-0 flex items-center justify-center ${
        isHovering ? "w-24 h-24" : "w-6 h-6"
      } rounded-full border border-white mix-blend-difference transition-all duration-300`}
      style={{
        translateX: springX,
        translateY: springY,
        marginLeft: "-50%",
        marginTop: "-50%",
      }}
    >
      {isHovering && (
        <span className="text-white text-sm">{cursorText}</span>
      )}
    </motion.div>
  );
}
