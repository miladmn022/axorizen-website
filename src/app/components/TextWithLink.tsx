import Link from "next/link";
import useScroll from "../hooks/useScroll";

export default function TextWithLink() {
  const scrolled = useScroll();

  return (
    <section
      style={{
        padding: "150px 50px",
        opacity: scrolled > 1200 ? 1 : 0,
        transform: scrolled > 1200 ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div
        style={{
          maxWidth: "80%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            letterSpacing: "6px",
            lineHeight: "1.2",
            margin: "0 0 60px 0",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          Our designs reflect a perfect blend of creativity and functionality.
        </p>
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Link
            href="/projects"
            style={{
              position: "relative",
              display: "inline-block",
              color: "#fff",
              fontSize: "18px",
              textDecoration: "none",
              letterSpacing: "2px",
              padding: "10px 20px",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#000";
              e.currentTarget.querySelector("span")!.style.borderColor = "#fff";
              e.currentTarget.querySelector("span")!.style.background = "#fff";
              window.dispatchEvent(
                new CustomEvent("cursor-hover", {
                  detail: { isHovering: true },
                })
              );
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.querySelector("span")!.style.borderColor = "#fff";
              e.currentTarget.querySelector("span")!.style.background = "transparent";
              window.dispatchEvent(
                new CustomEvent("cursor-hover", {
                  detail: { isHovering: false },
                })
              );
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "150px",
                height: "150px",
                border: "2px solid #fff",
                borderRadius: "50%",
                zIndex: -1,
                transition: "background 0.3s ease, border-color 0.3s ease",
              }}
            ></span>
            view projects
          </Link>
        </div>
      </div>
    </section>
  );
}