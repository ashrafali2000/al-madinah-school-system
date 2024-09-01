import React from "react";
import Link from "next/link";
export default function AdviceAndGuidance() {
  return (
    <div className="bg-slate-50 rounded-lg mx-auto">
      <div className="flex flex-row justify-between items-center">
        <h1 className="ml-5 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Our online GCSE community
        </h1>
        <div className="text-lg font-semibold">
          <p className="w-50 font-extrabold text-black py-5 mr-5 px-3 border border-gray-400 rounded-lg bg-slate-200 hover:bg-gray-400 hover:text-white text-center">
            <Link href={`/`}>SHOW ALL</Link>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {/* First Div */}

        <div
          className="w-full h-[350px] md:h-[450px] lg:h-[550px] bg-cover bg-center"
          style={{ backgroundImage: `url('GCSE-3.jpeg')` }}
          alt="gffg"
        ></div>

        {/* Second Div */}
        <Link href={`/`}>
          <div className="text-black p-4 md:p-6 lg:p-8 rounded-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* First Sub Div */}
              <div className="p-4 flex flex-col items-center justify-center rounded-lg">
                <p className="font-bold text-base md:text-lg lg:text-xl text-center">
                  “ My daughter loves it. She is a selective mute. At our
                  offline school… she hadn’t spoken to anyone at all. At Al
                  Madinah…”
                </p>
                <p className="text-sm md:text-base lg:text-lg font-medium mt-2 text-center">
                  Elena
                </p>
                <p className="text-orange-400 text-sm md:text-base lg:text-lg font-medium text-center">
                  Parent
                </p>
              </div>

              {/* Second Sub Div */}
              <div className="p-4 flex flex-col rounded-lg">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* First Image */}
                  <div
                    className="w-full h-[150px] sm:h-[200px] md:h-[250px] bg-cover bg-center"
                    style={{ backgroundImage: `url('GCSE-4.jpeg')` }}
                    alt="gffg"
                  ></div>

                  {/* Second Image */}
                  <div
                    className="w-full h-[150px] sm:h-[200px] md:h-[250px] bg-cover bg-center"
                    style={{ backgroundImage: `url('GCSE-5.jpeg')` }}
                    alt="gffg"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
