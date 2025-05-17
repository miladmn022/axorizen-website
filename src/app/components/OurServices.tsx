"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    description: "Crafting smooth, intuitive journeys that feel good and look great",
  },
  {
    title: "SEO Optimization",
    description: "Strategic SEO that brings your audience, right to your digital doorstep",
  },
  {
    title: "Responsive Design",
    description: "Flawless designs that adapt beautifully, everywhere",
  },
  {
    title: "Performance Tuning",
    description: "Optimized for speed, crafted for seamless user flow",
  },
];

export default function OurServices() {
  return (
    <section className="py-24 px-6 md:px-20 bg-[var(--background)] text-[var(--foreground)]">
      <h2 className="text-2xl md:text-4xl font-light text-[var(--foreground)] mb-20 text-center uppercase tracking-[0.3em]">
        Our Services
      </h2>

      <div className="flex flex-col gap-10 sm:gap-16">
        {services.map((service, index) => {
          const isRight = index === 0 || index === 2;
          const containerAlignment = isRight
            ? "sm:ml-[20%] items-start"
            : "sm:mr-[20%] items-end";

          const textAlignment = isRight
            ? "text-left"
            : "text-right";

          return (
            <motion.div
              key={index}
              className={`flex justify-center ${containerAlignment}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className={`w-[95%] sm:w-[80%] md:w-[35%] lg:w-[30%] px-6 py-6
                  rounded-xl bg-[var(--background)]/5 hover:scale-105 transition-transform duration-300 cursor-pointer ${textAlignment}
                `}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
                onMouseEnter={() =>
                  window.dispatchEvent(
                    new CustomEvent("cursor-hover", {
                      detail: { isHovering: true },
                    })
                  )
                }
                onMouseLeave={() =>
                  window.dispatchEvent(
                    new CustomEvent("cursor-hover", {
                      detail: { isHovering: false },
                    })
                  )
                }
              >
                <h3 className="text-base md:text-xl font-medium mb-2 tracking-widest">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--foreground)] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
