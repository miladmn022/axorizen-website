"use client";

import { usePathname } from "next/navigation";
import CustomCursor from "./CustomCursor";
import NavBar from "./NavBar";
import TextSectionWithLink from "./TextSectionWithLink";
import Footer from "./Footer";

export default function RootWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <CustomCursor />
      <NavBar />
      {children}
      {pathname !== "/contact" && <TextSectionWithLink />}
      <Footer />
    </>
  );
}