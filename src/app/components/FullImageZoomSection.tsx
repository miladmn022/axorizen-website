"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FullImageZoomSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.img
        src="images/image-5.jpg" // عکس مورد نظر رو در پوشه public بذار
        alt="Zooming Background"
        style={{ scale }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
