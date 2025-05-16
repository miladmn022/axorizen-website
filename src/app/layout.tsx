import "./globals.css";
import { Inter } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import { CursorProvider } from "./context/CursorProvider";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TextSectionWithLink from "./components/TextSectionWithLink";

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
      <body className={`${inter.className} dark`}>
        <CursorProvider>
          <CustomCursor />
          <NavBar />
          {children}
          <TextSectionWithLink />
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}
