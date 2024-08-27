"use client";
import Link from "next/link";
import React from "react";
export const SmallNavbar = () => {
  return (
    <nav className="hidden lg:block border-gray-200 bg-gray-100 fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-2xl lg:px-10 flex  bg-sky-900 text-white font-bold lg:text-md xl:text-md items-center justify-end mx-auto py-2 px-2">
        <div className="flex gap-7">
          <Link
            href="/"
            className="transition duration-1000 hover:text-sky-400"
          >
            Login
          </Link>
          <Link
            href="/"
            className="transition duration-1000 hover:text-sky-400"
          >
            IT Support
          </Link>
        </div>
      </div>
    </nav>
  );
};
