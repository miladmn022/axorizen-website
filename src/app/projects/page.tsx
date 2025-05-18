"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TextSectionWithLink from "../components/TextSectionWithLink";

const projects = [
  {
    url: "https://www.pns-project.com",
    label: "PNS Project GmbH",
  },
  {
    url: "https://www.amintarabar.com/?lang=en",
    label: "Amin Tarabar Co.",
  },
  {
    url: "https://www.pnslogistics.ca",
    label: "PNS Logistics Co. Canada",
  },
  {
    url: "https://www.pishronavgan.com",
    label: "Pishro Navgan Siraf Co.",
  },
];

export default function ProjectsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-24 px-6 md:px-20">
      <h1 className="text-center text-4xl md:text-6xl font-light tracking-widest mb-6 uppercase">
        Projects
      </h1>

      <p className="text-center text-xl sm:text-2xl md:text-4xl font-light text-white opacity-80 mb-20 max-w-4xl mx-auto">
        Where bold ideas take shape, explore how design becomes experience
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-28 justify-center items-start">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group flex flex-col items-center cursor-pointer"
            onClick={() => window.open(project.url, "_blank")}
          >
            {!isMobile ? (
              <>
                {/* iMac Frame */}
                <div className="relative w-[460px] h-[280px] bg-[#d1d3d4] rounded-t-[24px] border-[8px] border-[#1a1a1a] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                  <div className="absolute inset-0 scale-[0.32] origin-top-left bg-[var(--background)]">
                    <iframe
                      src={project.url}
                      className="w-[1440px] h-[900px] border-none pointer-events-auto"
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/5 pointer-events-none" />
                </div>

                {/* iMac Bottom Bar with Apple logo */}
                <div className="relative w-[460px] h-[60px] bg-gradient-to-b from-[#d8d8d8] to-[#b2b2b2] border-x-[8px] border-b-[8px] border-[#aaa] rounded-b-[20px] flex items-center justify-center">
                  <div className="text-[var(--foreground)] text-3xl opacity-60"></div>
                </div>

                {/* iMac Original Stand */}
                <div className="relative w-[120px] h-[50px] mt-1">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[20px] bg-gradient-to-b from-[#ddd] to-[#aaa] rounded-[30px] shadow-inner shadow-black/10" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[12px] bg-gradient-to-t from-[#999] to-[#bbb] rounded-b-[50%] shadow-[0_6px_14px_rgba(0,0,0,0.4)]" />
                </div>
              </>
            ) : (
              // Mobile Phone Frame
              <div className="relative w-[300px] sm:w-[320px] h-[600px] rounded-[40px] bg-[var(--background)] border-[10px] border-[#444] shadow-xl overflow-hidden">
                <iframe
                  src={project.url}
                  className="w-full h-full pointer-events-auto"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
                  loading="lazy"
                  style={{ border: "none" }}
                />
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[60px] h-[6px] bg-[#333] rounded-full opacity-60" />
              </div>
            )}

            <div className="mt-6 text-sm opacity-60 group-hover:opacity-100 transition text-center">
              {project.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <TextSectionWithLink />
    </>
  );
  
}
