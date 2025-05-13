import "./globals.css";
import { Inter } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import { CursorProvider } from "./context/CursorProvider";
import TextSectionWithLink from "./components/TextSectionWithLink";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

// حذف `use client` چون نیازی به Client Component ندارد
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
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.className} bg-black text-white overflow-x-hidden m-0 p-0`}
      >
        <CursorProvider>
          <CustomCursor />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
