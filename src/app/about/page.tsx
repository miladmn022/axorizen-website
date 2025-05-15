"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full min-h-screen font-sans">
      {/* بخش اول - تیره */}
      <div className="bg-black text-white px-8 md:px-24 py-32">
        <motion.h1
          className="text-5xl md:text-6xl font-light tracking-wide mb-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Crafting Digital Excellence
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          At Axorizen Studio, we transform ideas into engaging digital experiences.
          From custom websites to brand-driven design systems, every project we create is rooted in purpose, strategy, and beauty.
        </motion.p>
      </div>

      {/* مرز رنگی - ترنزیشن به روشن */}
      <div className="h-32 bg-gradient-to-b from-black to-white"></div>

      {/* بخش دوم - روشن */}
      <div className="bg-white text-black px-8 md:px-24 py-32">
        <motion.h2
          className="text-4xl md:text-5xl font-light tracking-wide mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          We’re a passionate team of creatives and developers dedicated to building elegant, responsive, and human-centered websites.
          Our mission? To empower visionary businesses with a digital presence that reflects their essence and ambition.
        </motion.p>
      </div>
    </div>
  );
}
