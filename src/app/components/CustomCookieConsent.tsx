"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const COOKIE_NAME = "axorizenCookieConsent";

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

export default function CustomCookieConsent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [showBanner, setShowBanner] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = getCookie(COOKIE_NAME);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  if (!mounted || !showBanner) return null;

  const bgColor = isDark ? "rgba(25, 25, 25, 0.75)" : "rgba(255, 255, 255, 0.85)";
  const textColor = isDark ? "#e0e0e0" : "#222222";
  const buttonBg = "#000000"; // مشکی برای دکمه Accept
  const buttonTextColor = "#ffffff";

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        backgroundColor: bgColor,
        color: textColor,
        padding: "1rem 1.5rem",
        borderRadius: 12,
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        maxWidth: 420,
        width: "calc(100% - 32px)",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        opacity: 1,
        animation: "fadeIn 0.3s ease",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .cookie-button {
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          transition: background-color 0.25s ease;
          user-select: none;
        }
        .cookie-button:hover {
          filter: brightness(1.1);
        }
        .read-more {
          background: none;
          border: none;
          color: inherit;
          font-size: 13px;
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
          font-weight: 500;
          user-select: none;
        }
        .read-more:hover {
          color: ${buttonBg};
        }
      `}</style>

      <div style={{ fontSize: 14, lineHeight: 1.4, textAlign: "center" }}>
        We use cookies to enhance your experience.
        <button
          className="read-more"
          onClick={() => setShowMore(!showMore)}
          aria-expanded={showMore}
          aria-controls="cookie-more-info"
          style={{ marginLeft: 8 }}
        >
          {showMore ? "Hide" : "Read More"}
        </button>
        {showMore && (
          <p
            id="cookie-more-info"
            style={{ marginTop: 8, fontSize: 12, opacity: 0.8, color: textColor }}
          >
            Cookies help us personalize content, serve targeted ads, and analyze traffic.
            By continuing to browse, you agree to our cookies. See our{" "}
            <Link
              href="/privacy-policy"
              style={{ color: buttonBg, textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>
            .
          </p>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
        <button
          className="cookie-button"
          style={{ backgroundColor: buttonBg, color: buttonTextColor }}
          onClick={() => {
            setCookie(COOKIE_NAME, "accepted", 365);
            setShowBanner(false);
          }}
          aria-label="Accept cookies"
        >
          Accept
        </button>
        <button
          className="cookie-button"
          style={{
            backgroundColor: isDark ? "#555" : "#ddd",
            color: isDark ? "#eee" : "#444",
          }}
          onClick={() => {
            setCookie(COOKIE_NAME, "declined", 365);
            setShowBanner(false);
          }}
          aria-label="Decline cookies"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
