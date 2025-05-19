"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { CursorProvider } from "./context/CursorProvider";
import CustomCursor from "./components/CustomCursor";
import ThemeProvider from "./components/ThemeProvider";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CookieConsentBanner from "./components/CookieConsentBanner";
import { useEffect } from "react";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });



declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const loadGoogleAnalytics = (measurementId: string) => {
  if (!window.gtag) {
    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    document.head.appendChild(script2);
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const hasConsent = Cookies.get("axorizenCookieConsent") === "true";
    if (hasConsent) {
      loadGoogleAnalytics("G-42TYVE9LXH");
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <NavBar />
        <ThemeProvider>
          <CursorProvider>
            {children}
            <CookieConsentBanner />
          </CursorProvider>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
