"use client"; // Required for scroll effect in App Router

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar and video opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "Arial, sans-serif", overflowX: "hidden" }}>
      {/* Navigation Bar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          padding: "20px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrolled ? "rgba(0, 0, 0, 0.9)" : "transparent",
          transition: "background 0.3s",
          zIndex: 1000,
        }}
      >
        <div>
          <Link href="/" style={{ color: "#fff", fontSize: "24px", fontWeight: "bold", textDecoration: "none" }}>
            Axorizen
          </Link>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <Link href="/projects" style={{ color: "#fff", textDecoration: "none", fontSize: "16px" }}>
            Projects
          </Link>
          <Link href="/about" style={{ color: "#fff", textDecoration: "none", fontSize: "16px" }}>
            About
          </Link>
          <Link href="/contact" style={{ color: "#fff", textDecoration: "none", fontSize: "16px" }}>
            Contact
          </Link>
        </div>
      </nav>

      {/* Video Section */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            opacity: scrolled ? 0.3 : 1, // Fade effect on scroll
            transition: "opacity 0.3s",
          }}
        >
          <source src="/video/slider-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Text Overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
            opacity: scrolled ? 0.7 : 1, // Fade text on scroll
            transition: "opacity 0.3s",
          }}
        >
          <h1 style={{ fontSize: "72px", fontWeight: "bold", margin: 0, letterSpacing: "2px" }}>
            Axorizen
          </h1>
          <p style={{ fontSize: "24px", marginTop: "10px", letterSpacing: "1px" }}>
            Crafting Professional Web Design Solutions
          </p>
        </div>
      </section>

      {/* Additional Content Section */}
      <section style={{ padding: "100px 50px", textAlign: "center", background: "#000" }}>
        <h2 style={{ fontSize: "32px", borderBottom: "2px solid #fff", paddingBottom: "10px", display: "inline-block" }}>
          Welcome to Axorizen
        </h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", lineHeight: "1.6", fontSize: "18px" }}>
          We specialize in creating stunning, user-friendly websites tailored to your business needs. Let’s bring your vision to life!
        </p>
      </section>
    </div>
  );
}