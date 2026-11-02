"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { CursorProvider } from "./context/CursorProvider";
import CustomCursor from "./components/CustomCursor";
import ThemeProvider from "./components/ThemeProvider";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import CustomCookieConsent from "./components/CustomCookieConsent";
import { CONSENT_EVENT, readConsent, type Consent } from "./lib/consent";

const inter = Inter({ subsets: ["latin"] });

const GA_ID = "G-42TYVE9LXH";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Google Analytics is only loaded after the visitor actively opts in (TDDDG §25, Art. 6(1)(a) GDPR).
function loadGoogleAnalytics() {
  if (window.gtag) {
    window.gtag("consent", "update", { analytics_storage: "granted" });
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);
}

function stopGoogleAnalytics() {
  if (window.gtag) window.gtag("consent", "update", { analytics_storage: "denied" });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (readConsent()?.analytics) loadGoogleAnalytics();

    const onChange = (e: Event) => {
      const consent = (e as CustomEvent<Consent>).detail;
      if (consent.analytics) loadGoogleAnalytics();
      else stopGoogleAnalytics();
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <NavBar />
        <ThemeProvider>
          <CursorProvider>
            <CustomCookieConsent />
            {children}
          </CursorProvider>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
