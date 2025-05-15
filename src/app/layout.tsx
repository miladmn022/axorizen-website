import "./globals.css";
import { Inter } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import { CursorProvider } from "./context/CursorProvider";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

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
      <body className={`${inter.className} bg-black text-white overflow-x-hidden m-0 p-0`}>
        <CursorProvider>
          <CustomCursor />
          <NavBar />
          {children}
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}
