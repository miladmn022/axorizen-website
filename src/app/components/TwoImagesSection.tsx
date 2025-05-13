import useScroll from "../hooks/useScroll";

export default function TwoImagesSection() {
  const scrolled = useScroll();

  // ارتفاع‌ها
  const leftImageHeight = 400; // ارتفاع عکس چپ
  const rightImageHeight = 800; // ارتفاع عکس راست
  const navBarHeight = 50; // ارتفاع تقریبی نویگیشن بار

  // موقعیت دقیق بخش نسبت به بالای صفحه (باید با ابزار توسعه‌دهنده تنظیم بشه)
  const sectionTop = 1600; // مقدار تقریبی، لطفاً با F12 > Elements دقیق کن

  // موقعیت پایین بخش
  const sectionBottom = sectionTop + rightImageHeight;

  // محاسبه موقعیت اسکرول نسبت به بخش
  const scrollRelativeToSection = Math.max(0, scrolled - sectionTop);

  // sticky تا وقتی پایین بخش از دید خارج نشده فعال باشه
  const isSticky = scrolled < sectionBottom - navBarHeight;

  // محاسبه زوم بر اساس ImageSection
  const zoom = 1 + scrollRelativeToSection / 2000; // زوم کند و نرم

  return (
    <section
      style={{
        position: "relative",
        minHeight: `${rightImageHeight}px`,
        padding: "0 10px",
        overflow: "visible", // مطمئن می‌شیم overflow مانع sticky نشه
        display: "flex",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "50%",
          height: `${leftImageHeight}px`,
          position: isSticky ? "sticky" : "relative",
          top: isSticky ? `${navBarHeight}px` : "auto",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/image-2.jpg"
          alt="Project Image 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            visibility: "visible",
            transform: `scale(${zoom})`,
            transformOrigin: "center center",
            transition: "transform 0.3s ease-out",
          }}
          onError={(e) => {
            console.error("Image 2 failed to load. Check path: /images/image-2.jpg", e);
          }}
          onLoad={() => {
            console.log("Image 2 loaded successfully");
          }}
        />
      </div>
      <div
        style={{
          width: "50%",
          height: `${rightImageHeight}px`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/image-3.jpg"
          alt="Project Image 2"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            visibility: "visible",
            transform: `scale(${zoom})`,
            transformOrigin: "center center",
            transition: "transform 0.3s ease-out",
          }}
          onError={(e) => {
            console.error("Image 3 failed to load. Check path: /images/image-3.jpg", e);
          }}
          onLoad={() => {
            console.log("Image 3 loaded successfully");
          }}
        />
      </div>
    </section>
  );
}