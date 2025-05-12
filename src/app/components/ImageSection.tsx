import useScroll from "../hooks/useScroll";

export default function ImageSection() {
  const scrolled = useScroll();

  return (
    <section
      style={{
        position: "relative",
        height: "500px",
        opacity: scrolled > 600 ? 1 : 0,
        transition: "opacity 0.6s ease-out",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "60%",
          height: "100%",
          position: "absolute",
          right: 0,
          overflow: "hidden",
        }}
      >
        <img
          src="/images/image-1.jpg"
          alt="Web Design Project"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${1 + scrolled / 2000})`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>
    </section>
  );
}