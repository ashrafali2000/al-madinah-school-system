"use client";
import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// interface ContentContextProps {
//   content: any;
// }

export const ContentContext = createContext(undefined);

export const useContentContext = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error(
      "useContentContext must be used within an ContentContext.Provider"
    );
  }
  return context;
};
