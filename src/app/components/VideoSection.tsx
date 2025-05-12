import useScroll from "../hooks/useScroll";

export default function VideoSection() {
  const scrolled = useScroll();

  return (
    <section style={{ position: "relative", height: "100vh", marginTop: "60px", overflow: "hidden" }}>
      <video autoPlay muted loop style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <source src="/video/slider-video.mp4" type="video/mp4" />
        <p>Video failed to load.</p>
      </video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translateY(${scrolled * 0.3}px)`,
          textAlign: "center",
          color: "#fff",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
          opacity: 1 - scrolled / 500,
          transition: "opacity 0.3s",
          maxWidth: "80%",
          whiteSpace: "nowrap",
        }}
      >
        <h1 style={{ fontSize: "100px", fontWeight: "bold", margin: 0, letterSpacing: "15px", lineHeight: "1" }}>
          A X O R I Z E N
        </h1>
      </div>
    </section>
  );
}