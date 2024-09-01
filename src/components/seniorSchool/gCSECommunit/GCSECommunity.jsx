import React from "react";
import Link from "next/link";
export default function GCSECommunity() {
  return (
    <div className="mt-10 pb-10">
      <div className="flex flex-row justify-between items-center">
        <h1 className="ml-5 text-2xl font-extrabold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Online GCSEs advice and guidance
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 mx-auto max-w-8xl">
        {/* First Div */}
        <div
          className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('OnlineGroup.jpg')` }}
        >
          {/* Optionally add content here, if needed */}
        </div>

        {/* Second Div */}
        <div className="text-white p-4 md:p-6 lg:p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Sub Div */}
            <Link href={`/`} className="flex flex-col gap-4">
              <div className="bg-green-700 p-4 md:p-6 lg:p-8 rounded-lg">
                <img
                  src="GCSE-1.jpeg"
                  alt="GCSE 1"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <p className="text-black text-base md:text-lg lg:text-xl mt-2 md:mt-4 lg:mt-6">
                7 Fascinating Subjects to Study alongside online GCSE, at Al
                Madina School
              </p>
              <p className="text-black text-sm md:text-base lg:text-lg mt-1 md:mt-2 lg:mt-4">
                Alongside your online GCSEs, study Assured subjects to explore
                your passion and build a creative portfolio.
              </p>
            </Link>

            {/* Second Sub Div */}
            <Link href={`/`} className="flex flex-col gap-4">
              <div className="bg-green-900 p-4 md:p-6 lg:p-8 rounded-lg">
                <img
                  src="GCSE-2.jpeg"
                  alt="GCSE 2"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <p className="text-black text-base md:text-lg lg:text-xl mt-2 md:mt-4 lg:mt-6">
                Who are online GCSEs for?
              </p>
              <p className="text-black text-sm md:text-base lg:text-lg mt-1 md:mt-2 lg:mt-4">
                Online GCSEs provide flexibility which benefits a diverse mix of
                students, from ambitious entrepreneurs to expat families.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
