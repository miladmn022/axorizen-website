import useScroll from "../hooks/useScroll";

export default function TextWithEffect() {
  const scrolled = useScroll();

  return (
    <section
      style={{
        padding: "100px 50px",
      }}
    >
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto 0 0",
          textAlign: "left",
          opacity: scrolled > 900 ? 1 : 0,
          transform: `translateY(${scrolled > 900 ? 0 : 50}px)`,
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <p
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            fontFamily: "Times New Roman, serif",
            margin: "0",
            letterSpacing: "8px",
            lineHeight: "1.1",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          We Are Crafting
          <br />
          <span style={{ paddingLeft: "60px" }}>Professional</span>
          <br />
          Web Design Solutions
        </p>
      </div>
    </section>
  );
}