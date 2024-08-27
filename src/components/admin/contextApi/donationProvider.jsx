"use client";
import { useEffect, useState } from "react";
import { DonationContext } from "./donationContext";

export default function DonationProvider({ children }) {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationTitle, setDonationTitle] = useState("");
  const [donationModal, setDonationModal] = useState(false);

  const setDonationAmountHandler = (data) => {
    setDonationAmount(data);
  };
  const setDonationTitleHandler = (data) => {
    setDonationTitle(data);
  };
  const setDonationModalHandler = (bol) => {
    setDonationModal(bol);
  };
  return (
    <DonationContext.Provider
      value={{
        donationAmount: donationAmount,
        donationTitle: donationTitle,
        donationModal: donationModal,
        setDonationModalHandler,
        setDonationAmountHandler,
        setDonationTitleHandler,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
}
