import React from "react";
import Link from "next/link";
export default function ComparionOFGrades() {
  return (
    <div className="mt-20  bg-slate-200 p-4 sm:p-6">
      <div className="lg:gap-5 mx-auto py-20 max-w-5xl">
        <div className="flex flex-col items-center justify-center gap-5 text-center px-5">
          <p className="w-60 font-bold text-blue-500 py-2 px-4 border border-sky-400 rounded-full bg-slate-200">
            Results
          </p>

          <p className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-700">
            We aim to get the best out of every student
          </p>

          <div className="text-lg font-semibold">
            <p className="w-60 font-bold text-black py-5 px-4 border border-gray-400 rounded-lg bg-slate-200 hover:bg-gray-400 hover:text-white">
              <Link href={`/results`}> VIEW ALL RESULTS</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:left-1/2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center">
        <div className="bg-[#eefaf3] rounded-lg shadow-lg p-6 sm:p-10 min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center">
          <div className="mb-4">
            <img
              src={`/result1.svg`}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60"
              alt="result1"
            />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">
            71% of students achieved a <br /> Grade 4+
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center">
            3% higher than the JCQ Average
          </p>
        </div>

        <div className="bg-[#f0f6ff] rounded-lg shadow-lg p-6 sm:p-10 min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center">
          <div className="mb-4">
            <img
              src={`/result2.svg`}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60"
              alt="result2"
            />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">
            29% of students achieved a <br /> Grade 7+
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center">
            7% higher than the JCQ Average
          </p>
        </div>

        <div className="bg-[#fff0e6] rounded-lg shadow-lg p-6 sm:p-10 min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center">
          <div className="mb-4">
            <img
              src={`/result3.svg`}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60"
              alt="result3"
            />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">
            29% of students achieved a <br /> Grade 7+
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center">
            7% higher than the JCQ Average
          </p>
        </div>
      </div>
    </div>
  );
}
