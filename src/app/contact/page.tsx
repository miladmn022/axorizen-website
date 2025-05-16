

"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="theme-section min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-32">
      <h1 className="text-[28px] sm:text-[36px] md:text-[56px] font-light leading-snug tracking-tight text-center mb-16 hover:invert transition duration-500">
        Let&apos;s create something amazing together.
      </h1>

      <div className="flex flex-col items-center gap-6 text-base sm:text-lg text-center font-light">
        <p>
          Phone:{" "}
          <a href="tel:+989129495907" className="underline hover:text-[var(--foreground)]">
            +98 912 949 5907
          </a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:hello@axorizen.com" className="underline hover:text-[var(--foreground)]">
            hello@axorizen.com
          </a>
        </p>
        <p>
          Telegram:{" "}
          <a
            href="https://t.me/miladmn02"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--foreground)]"
          >
            @miladmn02
          </a>
        </p>
        <p>
          WhatsApp:{" "}
          <a
            href="https://wa.me/989129495907"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--foreground)]"
          >
            Message on WhatsApp
          </a>
        </p>

        <p className="mt-10 text-sm sm:text-base md:text-lg opacity-60">
          I’d love to hear from you, just say hi or share your next idea 
        </p>
      </div>
    </section>
  );
}