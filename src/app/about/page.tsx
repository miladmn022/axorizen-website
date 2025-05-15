"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full min-h-screen font-sans bg-black text-white overflow-x-hidden relative">
      {/* Text Section */}
      <div className="relative z-10 px-8 md:px-24 pt-32 pb-16 flex flex-col items-center">
        <motion.h1
          className="font-light tracking-wide mb-8 text-center leading-[1.1] w-full max-w-7xl
                     text-[60px] md:text-[150px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Crafting Digital Excellence
        </motion.h1>
        <motion.p
          className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          At Axorizen Studio, we transform ideas into engaging digital experiences.
          From custom websites to brand-driven design systems, every project we create is rooted in purpose, strategy, and beauty.
        </motion.p>

        <motion.h2
          className="font-light tracking-wide text-center w-full max-w-7xl
                     text-[28px] md:text-[80px] leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          We’re a passionate team of creatives and developers dedicated to building elegant, responsive, and human-centered websites.
          Our mission? To empower visionary businesses with a digital presence that reflects their essence and ambition.
        </motion.p>
      </div>

      {/* Full Width Background Image with Zoom Out Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-10"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          backgroundImage: "url('/images/image-7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      />
    </div>
  );
}
