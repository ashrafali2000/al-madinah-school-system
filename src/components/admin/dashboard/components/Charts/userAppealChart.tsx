// "use client";
// import React, { useEffect, useState } from "react";
// import { VectorMap } from "@react-jvectormap/core";
// import { usAea } from "@react-jvectormap/unitedstates";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/components/newUi/config/firebase";

// const UserAppealDonationChart = () => {
//   const [quickDonationData, setQuickDonationData] = useState<any>([]);
//   const [appealData, setAppealData] = useState<any>([]);
//   const getDataFromFireStoreAppealDonation = async () => {
//     try {
//       const collectionRef = collection(db, "userAppealDonation");
//       const querySnapshot = await getDocs(collectionRef);
//       const data: any = [];

//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       return data;
//     } catch (error) {
//       console.error("Error fetching data from Firestore:", error);
//       return [];
//     }
//   };
//   const getDataFromFireStoreQuickDonation = async () => {
//     try {
//       const collectionRef = collection(db, "userQuickDonation");
//       const querySnapshot = await getDocs(collectionRef);
//       const data: any = [];

//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       return data;
//     } catch (error) {
//       console.error("Error fetching data from Firestore:", error);
//       return [];
//     }
//   };
//   useEffect(() => {
//     getDataFromFireStoreQuickDonation().then((result) => {
//       setQuickDonationData(result);
//     });
//     getDataFromFireStoreAppealDonation().then((result) => {
//       setAppealData(result);
//     });
//   }, []);

//   function downloadFileAppealDonation(data: any) {
//     const filterData = appealData.filter(
//       (title: any) => data === title.userData.donationTitle
//     );
//     // Add header
//     let csvData = "Donation Title" + "," + "Donation" + "," + "Date" + "\n";

//     // Add data
//     filterData.forEach(function (row: any) {
//       csvData +=
//         row.userData.donationTitle +
//         "," +
//         row.userData.donation +
//         "," +
//         row.userData.date +
//         "\n";
//     });

//     // Download the CSV file
//     let anchor = document.createElement("a");
//     anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
//     anchor.target = "_blank";
//     anchor.download = `${data}.csv`;
//     anchor.click();
//   }
//   function downloadFileQuickDonation() {
//     // Add header
//     let csvData = "Donation Title" + "," + "Donation" + "," + "Date" + "\n";

//     // Add data
//     quickDonationData.forEach(function (row: any) {
//       csvData +=
//         row.userData.donationTitle +
//         "," +
//         row.userData.donation +
//         "," +
//         row.userData.date +
//         "\n";
//     });
//     // Download the CSV file
//     let anchor = document.createElement("a");
//     anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
//     anchor.target = "_blank";
//     anchor.download = "quickDonation.csv";
//     anchor.click();
//   }

//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-6 shadow-default xl:col-span-7">
//       <h4 className="mb-2 text-xl font-semibold text-black">Users</h4>
//       <div id="mapOne" className="mapOne map-btn h-90">
//         <div className="flex flex-col gap-4">
//           <div className="flex gap-2 items-center">
//             <hr className="h-[2px] bg-teal-500 w-full" />
//             <span className="text-teal-500">Appeal</span>
//             <hr className="h-[2px] bg-teal-500 w-full" />
//           </div>
//           {/* palestine */}
//           <div className="flex items-center justify-between ">
//             <p>Winter Emergency</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Winter Emergency")}
//               className="bg-teal-500 text-sm  p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Sadaqah */}
//           <div className="flex items-center justify-between ">
//             <p>Sadaqah</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Sadaqah")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Zakat */}
//           <div className="flex items-center justify-between ">
//             <p>Zakat</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Zakat")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Food Box */}
//           <div className="flex items-center justify-between ">
//             <p>Food Box</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Food Box")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Orphan */}
//           <div className="flex items-center justify-between ">
//             <p>Palestine Emergency</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Palestine Emergency")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* hand pump */}
//           <div className="flex items-center justify-between ">
//             <p>Hand Pump</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Hand Pump Donation")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Water well */}
//           <div className="flex items-center justify-between ">
//             <p>Water Well</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Water Well")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Masjid */}
//           <div className="flex items-center justify-between ">
//             <p>Ramadan</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Ramadan")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Orphan */}
//           <div className="flex items-center justify-between ">
//             <p>Orphan</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Orphan")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Hand Pump */}
//           <div className="flex items-center justify-between ">
//             <p>Hand Pump</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Hand Pump")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Masjid */}
//           <div className="flex items-center justify-between ">
//             <p>Masjid</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Masjid")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>

//           {/* Quick Donation */}
//           <div className="flex gap-2 items-center">
//             <hr className="h-[2px] bg-teal-500 w-2/6" />
//             <span className="text-teal-500 ">Quick Donations</span>
//             <hr className="h-[2px] bg-teal-500 w-2/6" />
//           </div>
//           {/* Reclaim Gifts */}
//           <div className="flex items-center justify-between ">
//             <p>Quick Donations</p>

//             <button
//               onClick={() => downloadFileQuickDonation()}
//               className="bg-teal-500 text-sm  p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserAppealDonationChart;
