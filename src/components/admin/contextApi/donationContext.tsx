"use client";
import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface DonationContextProps {
  donationAmount: any;
  setDonationAmountHandler: Dispatch<SetStateAction<string>>;
  donationTitle: any;
  setDonationTitleHandler: Dispatch<SetStateAction<string>>;
  donationModal: boolean;
  setDonationModalHandler: Dispatch<any>;
}

export const DonationContext = createContext<DonationContextProps | undefined>(
  undefined
);

export const useDonationContext = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error(
      "useDonationContext must be used within an DonationContext.Provider"
    );
  }
  return context;
};
