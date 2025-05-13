import useScroll from "../hooks/useScroll";

export default function TwoImagesSection() {
  const scrolled = useScroll();

  // ارتفاع‌ها
  const leftImageHeight = 400; // ارتفاع عکس چپ (می‌تونی با سایت مرجع تنظیم کنی)
  const rightImageHeight = 800; // ارتفاع عکس راست (2 برابر چپ)
  const navBarHeight = 50; // ارتفاع تقریبی نویگیشن بار (باید با NavBar دقیق تنظیم بشه)

  // موقعیت دقیق بخش نسبت به بالای صفحه
  const sectionTop = 1600; // مقدار تقریبی، با F12 > Elements دقیق کن

  // موقعیت پایین بخش
  const sectionBottom = sectionTop + rightImageHeight;

  // sticky تا وقتی پایین بخش از دید خارج نشده فعال باشه
  const isSticky = scrolled < sectionBottom - navBarHeight;

  return (
    <section
      style={{
        position: "relative",
        minHeight: `${rightImageHeight}px`,
        padding: "0 10px",
        overflow: "visible",
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