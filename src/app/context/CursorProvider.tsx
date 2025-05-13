"use client";

import { createContext, useContext, useCallback } from "react";

interface CursorContextType {
  setHovering: (value: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const setHovering = useCallback((value: boolean) => {
    if (typeof window !== "undefined" && window.dispatchEvent) {
      window.dispatchEvent(
        new CustomEvent("cursor-hover", {
          detail: { isHovering: value },
        })
      );
    }
  }, []);

  return (
    <CursorContext.Provider value={{ setHovering }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
