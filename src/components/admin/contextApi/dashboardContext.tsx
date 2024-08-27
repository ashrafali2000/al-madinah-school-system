"use client";
import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface DashboardContextProps {
  mainSection: any;
  midSection: any;
  childSection: any;
  userEmail: any;
  userImage: any;
  loggedIn: boolean;
  setAuthHandler: Dispatch<boolean>;
  setMainSectionHandler: Dispatch<SetStateAction<string>>;
  setChildSectionHandler: Dispatch<SetStateAction<string>>;
  setImageHandler: Dispatch<SetStateAction<string>>;
  setEmailHandler: Dispatch<SetStateAction<string>>;
  setMidSectionHandler: Dispatch<SetStateAction<string>>;
}

export const DashboardContext = createContext<
  DashboardContextProps | undefined
>(undefined);

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within an DashboardContext.Provider"
    );
  }
  return context;
};
