"use client";

import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function CookieConsentBanner() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [showMore, setShowMore] = useState(false);

  const bgColor = isDark ? "rgba(15,15,15,0.85)" : "rgba(255,255,255,0.85)";
  const textColor = isDark ? "#f3f4f6" : "#1f2937";

  // Fix positioning for SSR hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] flex justify-center items-end px-4 py-6 pointer-events-none">
      <CookieConsent
        location="none"
        disableStyles={true}
        cookieName="axorizenCookieConsent"
        enableDeclineButton
        declineButtonText="Decline"
        buttonText="Accept"
        containerClasses="pointer-events-auto"
        style={{
          backdropFilter: "blur(12px)",
          background: bgColor,
          color: textColor,
          fontSize: "14px",
          borderRadius: "16px",
          padding: "1.5rem",
          width: "100%",
          maxWidth: "36rem", // تغییر عرض
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: showMore ? "auto" : "120px", // بزرگترش کردیم
          transition: "all 0.3s ease",
          overflow: "hidden",
        }}
        buttonStyle={{
          background: "#000",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "8px",
          padding: "0.5rem 1.25rem",
          border: "1px solid #444",
          marginTop: "1rem",
        }}
        declineButtonStyle={{
          background: isDark ? "#1e1e1e" : "#e5e5e5",
          color: isDark ? "#ffffff" : "#111827",
          fontSize: "14px",
          borderRadius: "8px",
          padding: "0.5rem 1.25rem",
          border: "1px solid #ccc",
          marginTop: "1rem",
          marginLeft: "0.5rem",
        }}
        expires={365}
      >
        <div className="text-center leading-snug">
          We use cookies to enhance your experience.
          <button
            onClick={() => setShowMore(!showMore)}
            className="ml-2 underline underline-offset-4 hover:text-indigo-500 transition-colors text-sm"
            style={{ color: textColor }}
          >
            {showMore ? "Hide" : "Read More"}
          </button>

          {showMore && (
            <div className="mt-2 text-xs opacity-90" style={{ color: textColor }}>
              Cookies help us personalize content, serve targeted ads, and analyze traffic.
              By continuing to browse, you agree to our cookies. See our{" "}
              <Link href="/privacy-policy" className="text-indigo-500 hover:underline">
                Privacy Policy
              </Link>.
            </div>
          )}
        </div>
      </CookieConsent>
    </div>
  );
}
