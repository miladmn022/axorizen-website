import "./globals.css";
import { Inter } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import { CursorProvider } from "./context/CursorProvider";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Axorizen",
  description: "Portfolio website for Axorizen.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ margin: 0, padding: 0, background: "#000", overflowX: "hidden" }}
      >
        <CursorProvider>
          <CustomCursor />
          {children}
          <Footer /> {/* اضافه کردن فوتر به انتها */}
        </CursorProvider>
      </body>
      
    </html>
  );
}