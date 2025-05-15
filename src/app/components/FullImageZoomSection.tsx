"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FullImageZoomSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ scale }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/images/image-5.jpg"
          alt="Zooming Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
