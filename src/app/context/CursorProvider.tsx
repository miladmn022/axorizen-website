"use client";

import { createContext, useContext, useState } from "react";

const CursorContext = createContext({
  setHovering: (value: boolean, text?: string) => {},
});

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [setIsHovering] = useState<(val: boolean) => void>(() => () => {});
  const [setCursorText] = useState<(text: string) => void>(() => () => {});

  const setHovering = (value: boolean, text = "") => {
    document.dispatchEvent(
      new CustomEvent("cursor-hover", {
        detail: { isHovering: value, text },
      })
    );
  };

  return (
    <CursorContext.Provider value={{ setHovering }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
