"use client";

import { createContext, useContext } from "react";

interface CursorContextType {
  setHovering: (value: boolean) => void;
}

const CursorContext = createContext<CursorContextType>({
  setHovering: () => {},
});

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const setHovering = (value: boolean) => {
    document.dispatchEvent(
      new CustomEvent("cursor-hover", {
        detail: { isHovering: value },
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