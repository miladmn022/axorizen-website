import useScroll from "../hooks/useScroll";

export default function TextBelowVideo() {
  const scrolled = useScroll();

  return (
    <section
      style={{
        padding: "200px 50px 100px",
        opacity: scrolled > 300 ? 1 : 0,
        transform: scrolled > 300 ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div
        style={{
          maxWidth: "65%",
          margin: "0 auto 0 25%",
          textAlign: "left",
        }}
      >
        <p
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            margin: "0 0 20px 0",
            letterSpacing: "6px",
            lineHeight: "1.2",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          We are a dedicated team crafting innovative websites that elevate your brand with cutting-edge design and seamless functionality.
        </p>
      </div>
    </section>
  );
}