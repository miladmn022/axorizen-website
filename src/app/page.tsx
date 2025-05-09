export default function Home() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: "50px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "48px", margin: 0 }}>Axorizen</h1>
        <p style={{ fontSize: "18px" }}>Professional Web Design Solutions</p>
      </header>
      <main style={{ maxWidth: "800px", margin: "0 auto" }}>
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "32px", borderBottom: "2px solid #fff", paddingBottom: "10px" }}>Our Services</h2>
          <p style={{ lineHeight: "1.6" }}>
            At Axorizen, we create stunning, fast, and user-friendly websites. From UI design to seamless UX, we’ve got your business covered!
          </p>
        </section>
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "32px", borderBottom: "2px solid #fff", paddingBottom: "10px" }}>Our Work</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            {/* Placeholders for images */}
            <div style={{ width: "200px", height: "150px", background: "#333", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              Project 1
            </div>
            <div style={{ width: "200px", height: "150px", background: "#333", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              Project 2
            </div>
          </div>
        </section>
        <section>
          <h2 style={{ fontSize: "32px", borderBottom: "2px solid #fff", paddingBottom: "10px" }}>Get Started</h2>
          <button
            style={{
              padding: "15px 30px",
              background: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Contact Us Now
          </button>
        </section>
      </main>
    </div>
  );
}