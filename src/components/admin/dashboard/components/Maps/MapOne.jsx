"use client";
import React, { useEffect, useState } from "react";
import { VectorMap } from "@react-jvectormap/core";
import { usAea } from "@react-jvectormap/unitedstates";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/components/newUi/config/firebase";

const MapOne = () => {
  const [donationData, setDonationData] = useState([]);
  const [reclaimData, setReclaimData] = useState([]);
  const getDataFromFirestoreDonation = async () => {
    try {
      // const collectionRef = collection(db, "userDonation");
      // const querySnapshot = await getDocs(collectionRef);
      // const data;
      // querySnapshot.forEach((doc) => {
      //   data.push({ id: doc.id, ...doc.data() });
      // });
      // return data;
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
      return [];
    }
  };
  const getDataFromFirestoreReclaimGifts = async () => {
    try {
      // const collectionRef = collection(db, "userReclaimGifts");
      // const querySnapshot = await getDocs(collectionRef);
      // const data;
      // querySnapshot.forEach((doc) => {
      //   data.push({ id: doc.id, ...doc.data() });
      // });
      // return data;
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
      return [];
    }
  };
  useEffect(() => {
    getDataFromFirestoreDonation().then((result) => {
      setDonationData(result);
    });
    getDataFromFirestoreReclaimGifts().then((result) => {
      setReclaimData(result);
    });
  }, []);

  function downloadFileDonation(data) {
    const filterData = donationData.filter(
      (title) => data === title.userData.donationTitle
    );
    // Add header
    let csvData =
      "First Name" +
      "," +
      "Contact No" +
      "," +
      "Donation" +
      "," +
      "Donation Title" +
      "," +
      "Email" +
      "," +
      "Date" +
      "\n";

    // Add data
    filterData.forEach(function (row) {
      csvData +=
        row.userData.firstName +
        "," +
        row.userData.contactNo +
        "," +
        row.userData.donation +
        "," +
        row.userData.donationTitle +
        "," +
        row.userData.email +
        "," +
        row.userData.date +
        "\n";
    });

    // Download the CSV file
    let anchor = document.createElement("a");
    anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
    anchor.target = "_blank";
    anchor.download = `${data}.csv`;
    anchor.click();
  }
  function downloadFileReclaimGifts() {
    console.log("reclaimData---->", reclaimData);
    // Add header
    let csvData =
      "Email" +
      "," +
      "Address-1" +
      "," +
      "Address-2" +
      "," +
      "City" +
      "," +
      "Country" +
      "," +
      "Postal-Code" +
      "," +
      "Date" +
      "\n";

    // Add data
    reclaimData.forEach(function (row) {
      csvData +=
        row.userData.email +
        "," +
        row.userData.address1 +
        "," +
        row.userData.address2 +
        "," +
        row.userData.city +
        "," +
        row.userData.country +
        "," +
        row.userData.postalCode +
        "," +
        row.userData.date +
        "\n";
    });
    // Download the CSV file
    let anchor = document.createElement("a");
    anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
    anchor.target = "_blank";
    anchor.download = "reclaimGifts.csv";
    anchor.click();
  }
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-6 shadow-default xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black">Users</h4>
      <div id="mapOne" className="mapOne map-btn h-90">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <hr className="h-[2px] bg-teal-500 w-full" />
            <span className="text-teal-500">Donations</span>
            <hr className="h-[2px] bg-teal-500 w-full" />
          </div>
          {/* palestine */}
          <div className="flex items-center justify-between ">
            <p>Palestine</p>

            <button
              onClick={() =>
                downloadFileDonation("Palestine Emergency Donation")
              }
              className="bg-teal-500 text-sm  p-2 text-white"
            >
              {" "}
              Download CSV file{" "}
            </button>
          </div>
          {/* Food Pack */}
          <div className="flex items-center justify-between ">
            <p>Food Pack</p>

            <button
              onClick={() => downloadFileDonation("Food Box Donation")}
              className="bg-teal-500 text-sm p-2 text-white"
            >
              {" "}
              Download CSV file{" "}
            </button>
          </div>
          {/* Winter */}
          <div className="flex items-center justify-between ">
            <p>Winter</p>

            <button
              onClick={() => downloadFileDonation("Winter Emergency Donation")}
              className="bg-teal-500 text-sm p-2 text-white"
            >
              {" "}
              Download CSV file{" "}
            </button>
          </div>
          {/* Iftar */}
          <div className="flex items-center justify-between ">
            <p>Iftar</p>

            <button
              onClick={() => downloadFileDonation("Iftar Donation")}
              className="bg-teal-500 text-sm p-2 text-white"
            >
              {" "}
              Download CSV file{" "}
            </button>
          </div>
          {/* Orphan */}
          <div className="flex items-center justify-between ">
            <p>Orphan</p>

            <button
              onClick={() => downloadFileDonation("Orphan Donation")}
              className="bg-teal-500 text-sm p-2 text-white"
            >
              {" "}
              Download CSV file{" "}
            </button>
          </div>
          {/* hand pump */}
          <div className="flex items-center justify-between ">
            <p>Hand Pump</p>

            <button
              onClick={() => downloadFileDonation("Hand Pump Donation")}
              className="bg-teal-500 text-sm p-2 text-white"
            >
              {" "}
              Download CSV file{" "}
            </button>
          </div>
          {/* Water well */}
          <div className="flex items-center justify-between ">
            <p>Water Well</p>

            <button
              onClick={() => downloadFileDonation("Water Well Donation")}
              className="bg-teal-500 text-sm p-2 text-white"
            >
              {" "}
              Download CSV file{" "}
            </button>
          </div>
          {/* Masjid */}
          <div className="flex items-center justify-between ">
            <p>Masjid</p>

            <button
              onClick={() => downloadFileDonation("Masjid Donation")}
              className="bg-teal-500 text-sm p-2 text-white"
            >
              {" "}
              Download CSV file{" "}
            </button>
          </div>

          {/* Reclaim Gifts */}
          <div className="flex gap-2 items-center">
            <hr className="h-[2px] bg-teal-500 w-full" />
            <span className="text-teal-500 ">ReclaimGifts</span>
            <hr className="h-[2px] bg-teal-500 w-full" />
          </div>
          {/* Reclaim Gifts */}
          <div className="flex items-center justify-between ">
            <p>Reclaim Gifts</p>

            <button
              onClick={() => downloadFileReclaimGifts()}
              className="bg-teal-500 text-sm  p-2 text-white"
            >
              {" "}
              Download CSV file{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapOne;
