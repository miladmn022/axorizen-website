import { motion } from "framer-motion";

export default function OurServices() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "30px",
        padding: "10vw 5%",
      }}
    >
      <motion.div
        style={{
          backgroundColor: "#f4f4f4",
          borderRadius: "10px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3>Website Design</h3>
        <p>We create stunning and functional websites.</p>
      </motion.div>

      <motion.div
        style={{
          backgroundColor: "#f4f4f4",
          borderRadius: "10px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3>Branding</h3>
        <p>Elevate your brand with unique, memorable identity design.</p>
      </motion.div>

      <motion.div
        style={{
          backgroundColor: "#f4f4f4",
          borderRadius: "10px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3>SEO</h3>
        <p>Improve your website's visibility and rank in search engines.</p>
      </motion.div>
    </section>
  );
}
