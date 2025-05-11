"use client"; // Required for scroll effect in App Router

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

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
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrolled ? "rgba(0, 0, 0, 0.9)" : "transparent",
          transition: "background 0.3s",
          zIndex: 1000,
        }}
      >
        <div>
          <Link href="/" style={{ color: "#fff", fontSize: "20px", fontWeight: "bold", textDecoration: "none" }}>
            Axorizen
          </Link>
        </div>
        <div style={{ display: "flex", gap: "25px" }}>
          <Link href="/projects" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>
            Projects
          </Link>
          <Link href="/about" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>
            About
          </Link>
          <Link href="/contact" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>
            Contact
          </Link>
        </div>
      </nav>

      <section style={{ position: "relative", height: "100vh", marginTop: "60px", overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/video/slider-video.mp4" type="video/mp4" />
          <p>Video failed to load.</p>
        </video>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#000",
            textShadow: "2px 2px 4px rgba(255, 255, 255, 0.7)",
          }}
        >
          <h1 style={{ fontSize: "80px", fontWeight: "bold", margin: "0 0 15px 0", letterSpacing: "3px" }}>
            Axorizen
          </h1>
          <p style={{ fontSize: "28px", margin: 0, letterSpacing: "2px" }}>
            Crafting Professional Web Design Solutions
          </p>
        </div>
      </section>

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