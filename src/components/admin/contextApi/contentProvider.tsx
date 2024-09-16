// "use client";
// import { useEffect, useState } from "react";
// import { ContentContext } from "./contentContext";
// // import { collection, getDocs } from "firebase/firestore";
// // import { db } from "../config/firebase";

// export default function ContentProvider({ children }) {
//   const [content, setContent] = useState([]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const usersRef = collection(db, "contents");
//   //       const querySnapshot = await getDocs(usersRef);
//   //       querySnapshot.forEach((doc) => {
//   //         const docData = doc.data();
//   //         const chooseSec = docData.content;
//   //         setContent(chooseSec);
//   //       });
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   // new code

//   // const getDataFromFirestore = async () => {
//   //   try {
//   //     const collectionRef = collection(db, "contents");
//   //     const querySnapshot = await getDocs(collectionRef);
//   //     const data = [];

//   //     querySnapshot.forEach((doc) => {
//   //       data.push({ id: doc.id, ...doc.data() });
//   //     });
//   //     // const filterData = data.filter((item: any) => item.status === "publish");
//   //     return data;
//   //   } catch (error) {
//   //     console.error("Error fetching data from Firestore:", error);
//   //     return [];
//   //   }
//   // };
//   // useEffect(() => {
//   //   getDataFromFirestore().then((result) => {
//   //     setContent(result);
//   //   });
//   // }, []);

//   return (
//     <ContentContext.Provider
//       value={{
//         content: content,
//       }}
//     >
//       {children}
//     </ContentContext.Provider>
//   );
// }
"use client";
import { useEffect, useState, ReactNode } from "react";
import { ContentContext } from "./contentContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";

interface ContentProviderProps {
  children: ReactNode;
}

export default function ContentProvider({ children }: ContentProviderProps) {
  const [content, setContent] = useState([]);

  const getDataFromFirestore = async () => {
    try {
      const collectionRef = collection(db, "contents");
      const querySnapshot = await getDocs(collectionRef);
      const data: any[] = [];

      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
      return [];
    }
  };

  useEffect(() => {
    getDataFromFirestore().then((result) => {
      setContent(result);
    });
  }, []);

  return (
    <ContentContext.Provider
      value={{
        content,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}
