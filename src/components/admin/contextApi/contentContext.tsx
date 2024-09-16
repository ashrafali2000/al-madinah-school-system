"use client";
import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the shape of the context's value
interface ContentContextProps {
  content: any;
}

// Create the context with a default value of `undefined` and type it correctly
export const ContentContext = createContext<ContentContextProps | undefined>(
  undefined
);

// Custom hook to use the ContentContext
export const useContentContext = () => {
  const context = useContext(ContentContext);
  if (!context === undefined) {
    throw new Error(
      "useContentContext must be used within a ContentContext.Provider"
    );
  }

  return context;
};
