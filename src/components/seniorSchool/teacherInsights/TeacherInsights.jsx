import React from "react";
import Link from "next/link";
export default function TeacherInsights() {
  return (
    <div class="bg-white p-6 rounded-lg">
      <div class="bg-white  rounded-lg ">
        <div className="flex flex-col items-center justify-center gap-5 text-center px-5">
          <p className="w-60 font-bold text-blue-500 py-2 px-4 border border-sky-400 rounded-full bg-slate-200">
            Meet the teachers
          </p>

          <p className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-700">
            Meet our brilliant teachers at GCSE
          </p>
        </div>
      </div>
    </div>
  );
}
