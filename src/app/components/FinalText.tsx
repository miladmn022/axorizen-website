import useScroll from "../hooks/useScroll";

export default function FinalText() {
  const scrolled = useScroll();

  return (
    <section
      style={{
        padding: "150px 50px",
        opacity: scrolled > 1800 ? 1 : 0,
        transform: scrolled > 1800 ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div
        style={{
          maxWidth: "90%",
          margin: "0 0 0 auto",
          textAlign: "right",
        }}
      >
        <p
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            fontFamily: "Times New Roman, serif",
            margin: "0",
            letterSpacing: "8px",
            lineHeight: "1.2",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          We create websites that inspire and transform your digital presence.
        </p>
      </div>
    </section>
  );
}