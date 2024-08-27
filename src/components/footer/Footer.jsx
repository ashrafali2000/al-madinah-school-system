import React, { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { ImYoutube } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { RiStarFill } from "react-icons/ri";
import Link from "next/link";
export const Footer = () => {
  const [dropdown, setDropDown] = useState(false);
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col ">
            <div className="mb-6 md:mb-0 ml-20">
              <a href="/" className="">
                <img src="./logo.png" className="h-32 " alt="FlowBite Logo" />
              </a>
            </div>
            <div className="flex pl-10 flex-col items-center gap-4">
              <div className="flex flex-col  gap-3 pt-10 ">
                <p className="text-md text-gray-800 text-center">
                  +44 (0)1873 777 444
                </p>
                <p className="text-md text-gray-800 text-center">
                  contact@kingsinterhigh.co.uk
                </p>
              </div>

              <div className="flex ">
                <a href="#" className="text-gray-900">
                  <FaFacebook className="w-7 h-7 text-gray-700 transition duration-500 hover:text-gray-500" />
                  <span className="sr-only">Facebook page</span>
                </a>

                <a
                  href="#"
                  className="text-gray-700 transition duration-500 hover:text-gray-500 ms-5"
                >
                  <svg
                    className="w-7 h-7"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-700 ms-5">
                  <IoLogoInstagram className="w-7 h-7 text-gray-700 transition duration-500 hover:text-gray-500" />
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-700 ms-5">
                  <ImYoutube className="w-7 h-7 text-gray-700 transition duration-500 hover:text-gray-500" />
                  <span className="sr-only">Twitter page</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-lg font-bold text-gray-800 uppercase">
                Partners
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Schools
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Sports Academies
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Agents
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Resource Portal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold text-gray-800 uppercase ">
                Our Schools
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Alumni
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Feedback
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    HomeSchooling Support
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Conditions Of Attendance
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Learning From Aboard
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Safeguarding
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    School Policies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold text-gray-800 uppercase ">
                Learning Stages
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Secondary
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    GCSE
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold text-gray-800 uppercase">
                Updates
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Our Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        {/* <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center text-gray-700">
            © 2024{" "}
            <a href="https://bawdicsoft.com/" className="hover:underline">
              Bawdicsoft™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-900">
              <FaFacebook className="w-5 h-5 text-gray-700" />
              <span className="sr-only">Facebook page</span>
            </a>

            <a href="#" className="text-gray-700 ms-5">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-700 ms-5">
              <IoLogoInstagram className="w-5 h-5 text-gray-500" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-700 ms-5">
              <ImYoutube className="w-5 h-5 text-gray-500" />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div> */}

        {/* mid footer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
          <div className="flex flex-col gap-3 ">
            <span className="text-xs">Accreditations</span>
            <div className="flex gap-3 bg-gray-200 p-4">
              <img src="./cambridge_assessment.svg" alt="image" />
              <p className="text-xs">
                King's InterHigh is a registered online Cambridge International
                School.
              </p>
            </div>
            <div className="flex gap-3 bg-gradient-to-tl bg-sky-50 p-4">
              <img src="./diploma_programme.svg" alt="image" />
              <p className="text-xs">
                King's InterHigh is proud to offer the world's first online
                International Baccalaureate® (IB) Diploma Programme.
              </p>
            </div>
            <div className="flex gap-5 items-center flex-wrap justify-center py-5">
              <span className="text-md">Excellent</span>
              <div className="flex gap-1">
                <span className="bg-green-600 p-1">
                  <RiStarFill className="text-white w-3 h-3" />
                </span>
                <span className="bg-green-600 p-1">
                  <RiStarFill className="text-white w-3 h-3" />
                </span>
                <span className="bg-green-600 p-1">
                  <RiStarFill className="text-white w-3 h-3" />
                </span>
                <span className="bg-green-600 p-1">
                  <RiStarFill className="text-white w-3 h-3" />
                </span>
                <span className="bg-green-600 p-1">
                  <RiStarFill className="text-white w-3 h-3" />
                </span>
              </div>

              <div className="flex justify-center items-center gap-1 ">
                <RiStarFill className="text-green-600 w-5 h-5" />
                <span className="text-sm">TrustPilot</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-xs ">Exam Boards</span>
              <div className="grid grid-cols-4 pt-4">
                <img src="./ocr.svg" alt="image" />{" "}
                <img src="./aqa.svg" alt="image" />{" "}
                <img src="./wjec.svg" alt="image" />{" "}
                <img src="./edexcel.svg" alt="image" />{" "}
              </div>
            </div>
            <div>
              <span className="text-xs ">Endorsements</span>
              <div className="grid grid-cols-5 pt-4">
                <img src="./good_schools_guide.svg" alt="image" />{" "}
                <img
                  src="./top_schools_award.png"
                  className="w-20 h-16"
                  alt="image"
                />{" "}
                <img
                  src="./muddy_stilettos.png"
                  className="w-20 h-16"
                  alt="image"
                />{" "}
                <img src="./besa.svg" alt="image" />{" "}
                <img src="./cobis.svg" alt="image" />{" "}
              </div>
            </div>
          </div>
        </div>
        {/* last footer */}
      </div>
      <div className="bg-gray-200">
        <div className=" mx-auto py-4 max-w-7xl text-xs p-3">
          <div className="flex flex-wrap gap-4">
            <Link href={"/"}>Privacy policy</Link>
            <Link href={"/"}>Terms of Use</Link>
            <Link href={"/"}>Refundes</Link>
            <Link href={"/"}>Website by Bawdicsoft</Link>
            {/* <Link href={"/"}>Show Company details</Link> */}
            {/* <Link href={"/"}>Show Company details</Link> */}
            <button
              type="button"
              onClick={() => setDropDown(!dropdown)}
              className="inline-flex items-center   font-medium rounded-lg border  text-gray-800 "
            >
              Show Company details
              <svg
                className="hs-dropdown-open:rotate-180 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {dropdown ? (
              <div className="transition duration gap-5 max-w-7xl grid grid-cols-4 rounded-lg p-2 mt-2 ">
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">
                    Company's UK Registration name:
                  </p>
                  <span className="text-xs">
                    Reddam House (Berkshire) Limited T/A Kings InterHigh
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">
                    Company’s UK place of registration:
                  </p>
                  <span className="text-xs">
                    Reddam House, Bearwood, Wokingham, Berkshire, RG41 5BG
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">
                    Company’s UK registered office:
                  </p>
                  <span className="text-xs">
                    Reddam House, Bearwood, Wokingham, Berkshire, RG41 5BG
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">
                    Company’s UK registered number:
                  </p>
                  <span className="text-xs">09093739</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">
                    Company's International Registration name
                  </p>
                  <span className="text-xs">
                    InterHigh International W.L.L T/A Kings InterHigh
                    International
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">
                    Company’s International registered office:
                  </p>
                  <span className="text-xs">
                    Office 1652, Entrance 1565, Road 1722,Diplomatic Area 0317,
                    Kingdom of Bahrain
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">
                    Company’s International registered number:
                  </p>
                  <span className="text-xs">147446 – 1</span>
                </div>
              </div>
            ) : null}
            <div>
              <p>
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Google Terms of Service apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
