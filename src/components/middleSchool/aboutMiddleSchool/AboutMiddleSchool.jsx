import React from "react";

export default function AboutMiddleSchool({ title, subtitle }) {
  return (
    <div className="">
      <div className="flex gap-5 max-w-4xl mx-auto flex-col items-center">
        <p className="font-bold text-blue-500 py-2 px-4 border-1 border-sky-400 rounded-full bg-slate-200">
          {title}
        </p>
        <p className=" md:text-2xl lg:text-4xl font-semibold lg:font-bold text-center text-gray-800">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
