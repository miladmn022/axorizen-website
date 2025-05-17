import "./globals.css";
import { Inter } from "next/font/google";
import { CursorProvider } from "./context/CursorProvider";
import RootWrapper from "./components/RootWrapper";
import ThemeProvider from "./components/ThemeProvider";

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
        <ThemeProvider>
          <CursorProvider>
            <RootWrapper>{children}</RootWrapper>
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}