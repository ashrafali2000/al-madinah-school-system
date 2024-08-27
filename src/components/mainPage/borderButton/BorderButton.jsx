import Link from "next/link";
import React from "react";

export const BorderButton = ({ link, title, border }) => {
  return (
    <Link
      href={link}
      className={`${
        border === "white" ? "border-2 border-white text-white w-52 " : ""
      } hover:scale-105 text-sm xl:text-base flex justify-center items-center transition duration-1000 hover:bg-sky-900 hover:text-gray-100 uppercase border border-sky-900 py-3 px-8 rounded-md font-bold text-gray-800`}
    >
      {title}
    </Link>
  );
};
