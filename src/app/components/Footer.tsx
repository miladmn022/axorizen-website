"use client";

import Hoverable from "../components/Hoverable";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-[#b3b3b3] text-left font-light text-base font-['Helvetica Neue'] py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr_0.8fr_0.8fr] gap-10 md:gap-40">
        {/* ایمیل و تلفن */}
        <div>
          <p className="mb-2 opacity-85">info@axorizen.com</p>
          <p className="opacity-85">+98 912 949 59 07</p>
        </div>

        {/* آدرس */}
        <div>
          <p className="opacity-85">
            No.1, Bahar Alley, Bahonar St (after Yaser Square), Tehran, Iran
          </p>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div>
          <Hoverable>
            <a
              href="https://www.instagram.com/miladmn02"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-2 text-[#b3b3b3] opacity-80 hover:opacity-100 transition"
            >
              Instagram
            </a>
          </Hoverable>
          <Hoverable>
            <a
              href="https://www.linkedin.com/in/milad_mahdipour"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#b3b3b3] opacity-80 hover:opacity-100 transition"
            >
              LinkedIn
            </a>
          </Hoverable>
        </div>

        {/* ارتباط */}
        <div>
          <Hoverable>
            <a
              href="/contact"
              className="block text-[#b3b3b3] opacity-80 hover:opacity-100 transition"
            >
              Contact
            </a>
          </Hoverable>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="w-full px-10 pt-6">
        <p className="text-sm opacity-70 font-light">
          © 2025 Axorizen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
