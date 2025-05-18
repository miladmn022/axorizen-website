import "./globals.css";
import { Inter } from "next/font/google";
import { CursorProvider } from "./context/CursorProvider";
import CustomCursor from "./components/CustomCursor";
import ThemeProvider from "./components/ThemeProvider";
import NavBar from "./components/NavBar";
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <CustomCursor />
        <NavBar />
        <ThemeProvider>
          <CursorProvider>
          {children}
          </CursorProvider>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}