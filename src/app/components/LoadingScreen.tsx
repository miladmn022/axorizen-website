// src/app/components/LoadingScreen.tsx

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500); // adjust duration as needed
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[9999] bg-[var(--background)] flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.6, rotate: 0 }}
          animate={{ scale: [0.6, 1.2, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/Logo-A.png"
            alt="Loading A"
            width={64}
            height={64}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
