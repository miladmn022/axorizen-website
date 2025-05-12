"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState(""); // ✅ این خط اضافه شد

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleCursorHover = (e: CustomEvent) => {
      if (typeof e.detail === "object") {
        setIsHovering(e.detail.isHovering);
        setCursorText(e.detail.text || "");
      } else {
        setIsHovering(!!e.detail);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("cursor-hover", handleCursorHover as EventListener);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("cursor-hover", handleCursorHover as EventListener);
    };
  }, []);

  return (
    <motion.div
      className={`pointer-events-none fixed z-[9999] top-0 left-0 flex items-center justify-center
        ${isHovering ? "w-24 h-24 bg-white mix-blend-difference" : "w-6 h-6 border border-white"} 
        rounded-full transition-all duration-300`}
      style={{
        translateX: springX,
        translateY: springY,
        marginLeft: "-50%",
        marginTop: "-50%",
      }}
    >
      {isHovering && cursorText && (
        <span className="text-black text-xs font-bold">{cursorText}</span>
      )}
    </motion.div>
  );
}
