import Link from "next/link";
import useScroll from "../hooks/useScroll";

export default function NavBar() {
  const scrolled = useScroll();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled > 50 ? "rgba(0, 0, 0, 0.9)" : "transparent",
        transition: "background 0.3s",
        zIndex: 1000,
      }}
    >
      <div>
        <Link
          href="/"
          style={{
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          onMouseEnter={() =>
            window.dispatchEvent(
              new CustomEvent("cursor-hover", {
                detail: { isHovering: true },
              })
            )
          }
          onMouseLeave={() =>
            window.dispatchEvent(
              new CustomEvent("cursor-hover", {
                detail: { isHovering: false },
              })
            )
          }
        >
          Axorizen
        </Link>
      </div>
      <div style={{ display: "flex", gap: "25px" }}>
        <Link
          href="/projects"
          style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}
          onMouseEnter={() =>
            window.dispatchEvent(
              new CustomEvent("cursor-hover", {
                detail: { isHovering: true },
              })
            )
          }
          onMouseLeave={() =>
            window.dispatchEvent(
              new CustomEvent("cursor-hover", {
                detail: { isHovering: false },
              })
            )
          }
        >
          Projects
        </Link>
        <Link
          href="/about"
          style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}
          onMouseEnter={() =>
            window.dispatchEvent(
              new CustomEvent("cursor-hover", {
                detail: { isHovering: true },
              })
            )
          }
          onMouseLeave={() =>
            window.dispatchEvent(
              new CustomEvent("cursor-hover", {
                detail: { isHovering: false },
              })
            )
          }
        >
          About
        </Link>
        <Link
          href="/contact"
          style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}
          onMouseEnter={() =>
            window.dispatchEvent(
              new CustomEvent("cursor-hover", {
                detail: { isHovering: true },
              })
            )
          }
          onMouseLeave={() =>
            window.dispatchEvent(
              new CustomEvent("cursor-hover", {
                detail: { isHovering: false },
              })
            )
          }
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}