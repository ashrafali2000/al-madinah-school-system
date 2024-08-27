import React from "react";
import { BorderButton } from "../borderButton/BorderButton";

export const AboutSchool = ({ title, buttonTile, subtitle, describe }) => {
  return (
    <div className="">
      <div className="flex gap-5 max-w-4xl mx-auto flex-col items-center">
        <p className="font-bold text-blue-500 py-2 px-4 border-1 border-sky-400 rounded-full bg-slate-200">
          {title}
        </p>
        <p className=" md:text-2xl lg:text-4xl font-semibold lg:font-bold text-center text-gray-800">
          {subtitle}
        </p>
        {describe ? (
          <p className="text-xl  text-center text-gray-800">{describe}</p>
        ) : null}
        <BorderButton link="/" title={buttonTile} />
      </div>
    </div>
  );
};
