import React from "react";

import Link from "next/link";
import AnimationBottom from "../../animations/AnimationBottom";
export default function SeniorSchoolInsights() {
  return (
    <div className="bg-white mt-20 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 rounded-lg">
      <div className="lg:gap-5 mx-auto ">
        <div className="flex flex-col items-center justify-center gap-8 text-center px-5">
          <p className="w-60 font-bold text-blue-500 py-2 px-4 border border-sky-400 rounded-full bg-slate-200">
            School insights
          </p>
          <p className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-700">
            Latest insights from our school
          </p>
          <div className="text-lg font-semibold">
            <p className="w-60 font-bold text-black py-5 px-4 border border-gray-400 rounded-lg bg-slate-200 hover:bg-gray-400 hover:text-white">
              <Link href={`/`}> VIEW ALL INSIGHTS</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-0 max-w-7xl mx-auto">
        <AnimationBottom>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mx-auto">
            {/* Card 1 */}
            <div className="border-2 mx-auto group hover:shadow-2xl w-full sm:w-[80%] md:w-4/5 lg:w-3/4 h-auto flex flex-col relative rounded-lg overflow-hidden bg-white">
              <div className="relative overflow-hidden flex-grow">
                <img
                  className="group-hover:scale-125 ease-in duration-300 w-full h-auto object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
                  alt="Insight Image"
                />
                <div className="absolute bottom-0 left-0 bg-white border-2 w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 flex justify-center items-center rounded-tr-lg md:rounded-tr-xl lg:rounded-tr-2xl py-3 sm:py-4 md:py-5 lg:py-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  20/02/2024
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between">
                <p className="text-sm sm:text-lg md:text-lg font-semibold ">
                  Celebrating our students’ 2024 IGCSE successes
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className=" border-2  group hover:shadow-2xl w-full sm:w-[80%] md:w-4/5 lg:w-3/4 h-auto flex flex-col relative rounded-lg overflow-hidden bg-white">
              <div className="relative overflow-hidden flex-grow">
                <img
                  className="group-hover:scale-125 ease-in duration-300 w-full h-auto object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
                  alt="Insight Image"
                />
                <div className="absolute bottom-0 left-0  bg-white border-2 w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 flex justify-center items-center rounded-tr-lg md:rounded-tr-xl lg:rounded-tr-2xl py-3 sm:py-4 md:py-5 lg:py-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  20/02/2024
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between">
                <p className="text-sm sm:text-lg md:text-lg font-semibold line-clamp-2 ">
                  Award-winning actress Lillia Turner — star on screen, online
                  student backstage
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border-2 group hover:shadow-2xl w-full sm:w-[80%] md:w-4/5 lg:w-3/4 h-auto flex flex-col relative rounded-lg overflow-hidden bg-white">
              <div className="relative overflow-hidden flex-grow">
                <img
                  className="group-hover:scale-125 ease-in duration-300 w-full h-auto object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
                  alt="Insight Image"
                />
                <div className="absolute bottom-0 left-0 bg-white border-2 w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 flex justify-center items-center rounded-tr-lg md:rounded-tr-xl lg:rounded-tr-2xl py-3 sm:py-4 md:py-5 lg:py-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  20/02/2024
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between">
                <p className="text-sm sm:text-lg md:text-lg font-semibold ">
                  Top exam revision tips from rising star, Charlotte Parsons
                </p>
              </div>
            </div>
          </div>
        </AnimationBottom>
      </div>
    </div>
  );
}
