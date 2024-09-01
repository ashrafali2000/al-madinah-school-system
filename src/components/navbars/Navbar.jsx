"use client";
import React from "react";
import Drawer from "../drawer/Drawer";
import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "../mainPage/button/Button";
import { BorderButton } from "../mainPage/borderButton/BorderButton";
import Link from "next/link";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const drawerHandler = () => {
    setOpen(!open);
  };
  const [activeTab, setActiveTab] = useState("/");

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <>
      <nav className="border-gray-200 bg-gray-100 fixed w-full top-0  left-0 z-40">
        <div className="max-w-screen-2xl lg:px-10 flex  items-center justify-between mx-auto py-1 px-2">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="./logo.png" className="h-20" alt="Flowbite Logo" />
            {/* <span className="self-center text-xl  xl:text-2xl font-semibold whitespace-nowrap dark:text-gray-900">
              Al Madina School System
            </span> */}
          </a>
          <button
            type="button"
            onClick={drawerHandler}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className=" hidden w-full lg:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 border-gray-100 rounded-lg md:flex-row  lg:space-x-2 xl:space-x-6 rtl:space-x-reverse ">
              <li>
                <Link
                  href="/"
                  onClick={() => handleTabClick("/")}
                  className={`transition duration-1000 hover:text-sky-400 block font-semibold py-2 px-3 xl:text-lg ${
                    activeTab === "/" ? "text-sky-400" : "md:text-black"
                  }`}
                >
                  Secondary
                </Link>
              </li>
              <li>
                <Link
                  href={"/about-us"}
                  onClick={() => handleTabClick("/about-us")}
                  className={`transition duration-1000 hover:text-sky-400 block font-semibold py-2 px-3 text-gray-900 xl:text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 ${
                    activeTab === "/about-us"
                      ? "text-sky-400"
                      : "md:hover:text-blue-400"
                  }`}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href={`/contact-us`}
                  onClick={() => handleTabClick("/contact-us")}
                  className={`transition duration-1000 hover:text-sky-400 block font-semibold py-2 px-3 text-gray-900 xl:text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 ${
                    activeTab === "/contact-us"
                      ? "text-sky-400"
                      : "md:hover:text-blue-400"
                  }`}
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href={"/how-we-teach"}
                  onClick={() => handleTabClick("/how-we-teach")}
                  className={`transition duration-1000 hover:text-sky-400 block font-semibold py-2 px-3 text-gray-900 xl:text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 ${
                    activeTab === "/how-we-teach"
                      ? "text-sky-400"
                      : "md:hover:text-blue-400"
                  }`}
                >
                  How we teach
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden  lg:flex items-center gap-3  xl:gap-6">
            {/* <button className="hover:scale-105 bg-sky-900 transition duration-1000 border hover:text-gray-800 hover:bg-gray-100 hover:border-sky-600 text-gray-100 text-sm xl:text-base uppercase  py-2 px-4 rounded-md font-bold ">
              enquire
            </button> */}

            <Button link="/Enquiry" title={"enquire"} />

            <BorderButton link="/" title={"register now"} />
          </div>
        </div>
      </nav>
      {/* Drawer */}
      <Drawer open={open} drawerHandler={drawerHandler} />
    </>
  );
};
