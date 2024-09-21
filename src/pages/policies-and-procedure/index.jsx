import React from "react";

import { motion } from "framer-motion";
export default function PolicyAndProcedure() {
  return (
    // <div className="bg-white mt-40 mb-10 gap-6 flex flex-col border-4 border-gray-700 md:flex-row rounded-[40px] justify-between mx-4 md:mx-20 p-6">
    //   {/* First div */}
    //   <div className="text-center md:text-left text-lg md:text-2xl font-bold mb-6">
    //     Policies and Procedures
    //   </div>
    //   <div className="bg-[#ffa500] items-center border-4 border-gray-700 text-black p-10 md:p-20 rounded-[40px] w-full md:w-1/2 mb-6 md:mb-0 flex flex-col justify-center text-center">
    //     <h2 className="text-lg md:text-xl font-bold">Tapestry Policy</h2>
    //     <a
    //       href="/Tapestry-Policy.pdf"
    //       download
    //       className="inline-block mt-4 text-black font-bold underline"
    //     >
    //       Download File from here
    //     </a>
    //   </div>

    //   {/* Second div */}
    //   <div className="bg-[#ffa500] items-center border-4 border-gray-700 text-black p-10 md:p-20 rounded-[40px] w-full md:w-1/2 mb-6 md:mb-0 flex flex-col justify-center text-center">
    //     <h2 className="text-lg md:text-xl font-bold">
    //       Staff Tapestry Agreement
    //     </h2>
    //     <a
    //       href="/Staff_Tapestry_Agreement.pdf"
    //       download
    //       className="inline-block mt-4 text-black font-bold underline"
    //     >
    //       Download File from here
    //     </a>
    //   </div>
    // </div>
    <div className="bg-white mt-40 mb-10 gap-6 flex flex-col border-4 border-gray-700 rounded-[40px] justify-between mx-4 md:mx-20 p-6">
      {/* Heading at the top */}
      <div className="text-center bg-[rgb(250,204,20)]  mx-auto md:text-left border-2 p-3 border-gray-700 rounded-[40px] text-lg md:text-3xl font-bold mb-6">
        <motion.h3
          className="   cursor-pointer text-3xl  w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 20, // removed quotes around the duration
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Policy and procedure
        </motion.h3>
      </div>

      {/* Main content with flex-row on larger screens */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* First div */}
        <div className=" bg-[rgb(250,204,20)] items-center border-4 border-gray-700 text-black p-10 md:p-20 rounded-[40px] w-full md:w-1/2 mb-6 md:mb-0 flex flex-col justify-center text-center">
          <h2 className="text-lg md:text-xl font-bold">Tapestry Policy</h2>
          <a
            href="/Tapestry-Policy.pdf"
            download
            className="inline-block mt-4 text-black font-bold underline"
          >
            Download File from here
          </a>
        </div>

        {/* Second div */}
        <div className=" bg-[rgb(250,204,20)] items-center border-4 border-gray-700 text-black p-10 md:p-20 rounded-[40px] w-full md:w-1/2 mb-6 md:mb-0 flex flex-col justify-center text-center">
          <h2 className="text-lg md:text-xl font-bold">
            Staff Tapestry Agreement
          </h2>
          <a
            href="/Staff_Tapestry_Agreement.pdf"
            download
            className="inline-block mt-4 text-black font-bold underline"
          >
            Download File from here
          </a>
        </div>
      </div>
    </div>
  );
}
