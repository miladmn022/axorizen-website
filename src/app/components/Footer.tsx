"use client";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#b3b3b3",
        textAlign: "left",
        fontFamily: "'Helvetica Neue', sans-serif",
        fontSize: "16px",
        fontWeight: "300",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "30px 0",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr 0.8fr 0.8fr", // تنظیم نسبت اندازه‌ها
          width: "90%",
          margin: "0 auto",
          gap: "160px",
        }}
      >
        {/* ایمیل و شماره تلفن */}
        <div>
          <p style={{ marginBottom: "10px", opacity: "0.85" }}>info@axorizen.com</p>
          <p style={{ opacity: "0.85" }}>+98 912 949 59 07</p>
        </div>

        {/* آدرس */}
        <div>
          <p style={{ opacity: "0.85" }}>
            No.1, Bahar Alley, Bahonar St (after Yaser Square), Tehran, Iran
          </p>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div>
          <a
            href="https://www.instagram.com/miladmn02"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#b3b3b3",
              opacity: "0.8",
              display: "block",
              marginBottom: "10px",
              fontWeight: "300",
            }}
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/milad_mahdipour"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#b3b3b3",
              opacity: "0.8",
              display: "block",
              fontWeight: "300",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* بخش ارتباط */}
        <div>
          <a
            href="/contact"
            style={{
              textDecoration: "none",
              color: "#b3b3b3",
              opacity: "0.8",
              display: "block",
              fontWeight: "300",
            }}
          >
            Contact
          </a>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div style={{ width: "100%", padding: "10px 65px" }}>
        <p style={{ fontSize: "14px", opacity: "0.7", fontWeight: "300" }}>
          © 2025 Axorizen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
