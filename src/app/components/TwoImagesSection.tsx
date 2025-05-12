export default function TwoImagesSection() {
  return (
    <section
      style={{
        position: "relative",
        height: "600px",
        padding: "0 10px",
        overflow: "visible", // تغییر به visible برای تست
      }}
    >
      <div
        style={{
          width: "50%",
          height: "600px",
          position: "relative",
          float: "left",
          marginRight: "5px",
          overflow: "visible", // تغییر به visible برای تست
          display: "block",
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
            console.error("Image 2 failed to load:", e);
          }}
        />
      </div>
      <div
        style={{
          width: "50%",
          height: "600px",
          position: "relative",
          float: "right",
          marginLeft: "5px",
          overflow: "visible", // تغییر به visible برای تست
          display: "block",
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
            console.error("Image 3 failed to load:", e);
          }}
        />
      </div>
    </section>
  );
}