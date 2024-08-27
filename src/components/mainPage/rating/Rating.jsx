import Link from "next/link";
import React from "react";
import { RiStarFill } from "react-icons/ri";
export const Rating = () => {
  return (
    <div className="mx-auto pt-16 px-5">
      <div className="flex gap-5 items-center flex-wrap justify-center">
        <Link href={"/"} className="text-sm">
          Our customers say
        </Link>
        <span className="text-base">Excellent</span>
        <div className="flex gap-1">
          <span className="bg-green-600 p-1">
            <RiStarFill className="text-white w-4 h-4" />
          </span>
          <span className="bg-green-600 p-1">
            <RiStarFill className="text-white w-4 h-4" />
          </span>
          <span className="bg-green-600 p-1">
            <RiStarFill className="text-white w-4 h-4" />
          </span>
          <span className="bg-green-600 p-1">
            <RiStarFill className="text-white w-4 h-4" />
          </span>
          <span className="bg-green-600 p-1">
            <RiStarFill className="text-white w-4 h-4" />
          </span>
        </div>
        <span className="text-sm">4.7 out of 5 based on 633 reviews</span>
        <div className="flex justify-center items-center gap-1 ">
          <RiStarFill className="text-green-600 w-4 h-4" />
          <span className="text-sm">TrustPilot</span>
        </div>
      </div>
    </div>
  );
};
