import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Digital business card: standalone page at /card, not linked in the site nav
  async rewrites() {
    return [{ source: "/card", destination: "/card.html" }];
  },
};

export default nextConfig;
