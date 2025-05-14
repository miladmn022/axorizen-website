"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    description: "Intuitive and elegant interface experiences.",
  },
  {
    title: "SEO Optimization",
    description: "Maximizing your visibility across search platforms.",
  },
  {
    title: "Responsive Design",
    description: "Pixel-perfect layouts across all devices.",
  },
  {
    title: "Performance Tuning",
    description: "Speed and efficiency for top-tier UX.",
  },
];

export default function OurServices() {
  return (
    <section className="py-24 px-6 md:px-20 bg-darkBg text-white">
      <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-20 text-center uppercase tracking-[0.3em]">
        Our Services
      </h2>

      <div className="flex flex-col gap-16">
        {services.map((service, index) => {
          const isRight = index === 0 || index === 2;
          const alignmentClass = isRight
            ? "ml-[20%] text-right"
            : "mr-[20%] text-left";

          return (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className={`w-full sm:w-[80%] md:w-[35%] lg:w-[30%] px-6 py-6
                  rounded-xl bg-white/5 hover:scale-105 transition-transform duration-300 cursor-pointer ${alignmentClass}
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
                <p className="text-sm text-gray-400 leading-relaxed">
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
