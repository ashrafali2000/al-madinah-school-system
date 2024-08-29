import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimatedComponentRight from "../../animations/AnimationRigth";
import { useState } from "react";
import Link from "next/link";
export default function MiddleSchoolPackeges() {
  const [selectedTimetable, setSelectedTimetable] = useState("UK/Europe");

  const handleTimetableChange = (timetable) => {
    setSelectedTimetable(timetable);
  };
  return (
    <div className="bg-slate-100 pb-10 rounded-2xl px-5 m-8">
      <div className="gap-20 lg:gap-5 mx-auto my-20 py-20 max-w-5xl">
        <div className="flex flex-col items-center justify-center gap-5 text-center px-5">
          <p className="w-60 font-bold text-blue-500 py-2 px-4 border border-sky-400 rounded-full bg-slate-200">
            Curriculum & Packages
          </p>

          <p className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-700">
            Middle School Package
          </p>

          <p className="text-lg font-semibold">
            This package includes 9 subjects, including 4 core subjects plus 5
            additional subjects.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {/* Card 1 */}
        <div className="flex flex-col gap-8 p-12 bg-white rounded-lg min-h-[650px] shadow-lg">
          <p className="text-xl lg:text-2xl font-bold text-sky-900">
            Select your preferred timetable
          </p>
          <p className="text-xl font-light text-gray-600">
            Select your preferred timetable to see subjects available for your
            time zone.
          </p>
          <div className="grid grid-flow-row gap-3 pb-20">
            {/* UK/Europe */}

            <div
              onClick={() => handleTimetableChange("UK/Europe")}
              className={`flex items-center justify-between gap-4 ${
                selectedTimetable === "UK/Europe"
                  ? "bg-sky-100 border-sky-950 border-5"
                  : "bg-gray-100 border-gray-300"
              } border-2 p-0.5 rounded-lg transition duration-200 cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-20 h-20 transition duration-200 ${
                    selectedTimetable === "UK/Europe"
                      ? "text-sky-950"
                      : "text-gray-400"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 0v19.5M2.25 12h19.5"
                  />
                </svg>
                <div className="flex flex-col">
                  <p
                    className={`text-xl font-bold ${
                      selectedTimetable === "UK/Europe"
                        ? "text-sky-950"
                        : "text-gray-400"
                    }`}
                  >
                    UK / EUROPE
                  </p>
                  <p className="text-sm text-gray-500">GMT/BST</p>
                </div>
              </div>

              <div className="flex items-center mr-5 relative">
                <input
                  type="radio"
                  id="radio-uk"
                  name="timetable"
                  value="UK/Europe"
                  className={`appearance-none border-2 mr-auto rounded-full w-10 h-10 relative ${
                    selectedTimetable === "UK/Europe"
                      ? "border-sky-950 outline outline-sky-950 outline-2"
                      : "border-[#dcdcdc]"
                  }`}
                />
                <span
                  className={`absolute top-2 left-2 border rounded-full w-6 h-6 ${
                    selectedTimetable === "UK/Europe"
                      ? "bg-sky-950 border-sky-950"
                      : "border-[#dcdcdc]"
                  }`}
                ></span>
              </div>
            </div>

            {/* Middle East */}

            <div
              onClick={() => handleTimetableChange("Middle East")}
              className={`flex items-center justify-between gap-4 ${
                selectedTimetable === "Middle East"
                  ? "bg-sky-100 border-sky-950 border-5"
                  : "bg-gray-100 border-gray-300"
              } border-2 p-0.5 rounded-lg transition duration-200 cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-20 h-20 transition duration-200 ${
                    selectedTimetable === "Middle East"
                      ? "text-sky-950"
                      : "text-gray-400"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 0v19.5M2.25 12h19.5"
                  />
                </svg>
                <div className="flex flex-col">
                  <p
                    className={`text-xl font-bold ${
                      selectedTimetable === "Middle East"
                        ? "text-sky-950"
                        : "text-gray-400"
                    }`}
                  >
                    Middle East
                  </p>
                  <p className="text-sm text-gray-500">GMT/BST</p>
                </div>
              </div>

              <div className="flex items-center mr-5 relative">
                <input
                  type="radio"
                  id="radio-uk"
                  name="timetable"
                  value="Middle East"
                  className={`appearance-none border-2 mr-auto rounded-full w-10 h-10 relative ${
                    selectedTimetable === "Middle East"
                      ? "border-sky-950 outline outline-sky-950 outline-2"
                      : "border-[#dcdcdc]"
                  }`}
                />
                <span
                  className={`absolute top-2 left-2 border rounded-full w-6 h-6 ${
                    selectedTimetable === "Middle East"
                      ? "bg-sky-950 border-sky-950"
                      : "border-[#dcdcdc]"
                  }`}
                ></span>
              </div>
            </div>

            {/* South Asia */}

            <div
              onClick={() => handleTimetableChange("South Asia")}
              className={`flex items-center justify-between gap-4 ${
                selectedTimetable === "South Asia"
                  ? "bg-sky-100 border-sky-950 border-5"
                  : "bg-gray-100 border-gray-300"
              } border-2 p-0.5 rounded-lg transition duration-200 cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-20 h-20 transition duration-200 ${
                    selectedTimetable === "South Asia"
                      ? "text-sky-950"
                      : "text-gray-400"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 0v19.5M2.25 12h19.5"
                  />
                </svg>
                <div className="flex flex-col">
                  <p
                    className={`text-xl font-bold ${
                      selectedTimetable === "South Asia"
                        ? "text-sky-950"
                        : "text-gray-400"
                    }`}
                  >
                    South Asia
                  </p>
                  <p className="text-sm text-gray-500">GMT/BST</p>
                </div>
              </div>

              <div className="flex items-center mr-5 relative">
                <input
                  type="radio"
                  id="radio-uk"
                  name="timetable"
                  value="South Asia"
                  className={`appearance-none border-2 mr-auto rounded-full w-10 h-10 relative ${
                    selectedTimetable === "South Asia"
                      ? "border-sky-950 outline outline-sky-950 outline-2"
                      : "border-[#dcdcdc]"
                  }`}
                />
                <span
                  className={`absolute top-2 left-2 border rounded-full w-6 h-6 ${
                    selectedTimetable === "South Asia"
                      ? "bg-sky-950 border-sky-950"
                      : "border-[#dcdcdc]"
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-8 p-12 bg-white rounded-lg min-h-[650px] shadow-lg">
          <p className="text-xl lg:text-2xl font-bold text-black">
            Includes 4 core subjects
          </p>
          <p className="font-normal text-xl text-gray-600">
            {selectedTimetable === "UK/Europe"
              ? "These core subjects are included in your package at Key Stage 3."
              : selectedTimetable === "Middle East"
              ? "These core subjects are included in your package at Key Stage 3."
              : selectedTimetable === "South Asia"
              ? "These core subjects are included in your package at Key Stage 3."
              : "These core subjects are included in your package at Key Stage 3."}
          </p>

          {/* Subject Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {selectedTimetable === "UK/Europe" && (
              <>
                <div className="p-3 mb-3 border-2 flex flex-row gap-3 border-[#dcdcdc] rounded-lg font-semibold shadow-sm hover:bg-sky-100 transition duration-200">
                  <img
                    src="./English.svg"
                    alt="English"
                    className="w-16 h-16"
                  />
                  <p className="text-xl lg:text-2xl mt-2">English</p>
                </div>
                <div className="p-3 mb-3 border-2 flex flex-row gap-3 border-[#dcdcdc] rounded-lg font-semibold shadow-sm hover:bg-sky-100 transition duration-200">
                  <img src="./Math.svg" alt="Math" className="w-16 h-16" />
                  <p className="text-xl lg:text-2xl mt-2">Math</p>
                </div>
                <div className="p-3 mb-3 border-2 flex flex-row gap-3 border-[#dcdcdc] rounded-lg font-semibold shadow-sm hover:bg-sky-100 transition duration-200">
                  <img src="./PSHE.svg" alt="PSHE" className="w-16 h-16" />
                  <p className="text-xl lg:text-2xl mt-2">PSHE</p>
                </div>
                <div className="p-3 mb-3 border-2 flex flex-row gap-3 border-[#dcdcdc] rounded-lg font-semibold shadow-sm hover:bg-sky-100 transition duration-200">
                  <img src="./SCI.svg" alt="Science" className="w-16 h-16" />
                  <p className="text-xl lg:text-2xl mt-2">Science</p>
                </div>
              </>
            )}

            {selectedTimetable === "Middle East" && (
              <>
                <div className="p-3 mb-3 border-2 flex flex-row gap-3 border-[#dcdcdc] rounded-lg font-semibold shadow-sm hover:bg-sky-100 transition duration-200">
                  <img
                    src="./English.svg"
                    alt="English"
                    className="w-16 h-16"
                  />
                  <p className="text-xl lg:text-2xl mt-2">English</p>
                </div>
                <div className="p-3 mb-3 border-2 flex flex-row gap-3 border-[#dcdcdc] rounded-lg font-semibold shadow-sm hover:bg-sky-100 transition duration-200">
                  <img src="./Math.svg" alt="Math" className="w-16 h-16" />
                  <p className="text-xl lg:text-2xl mt-2">Math</p>
                </div>
                <div className="p-3 mb-3 border-2 flex flex-row gap-3 border-[#dcdcdc] rounded-lg font-semibold shadow-sm hover:bg-sky-100 transition duration-200">
                  <img src="./PSHE.svg" alt="PSHE" className="w-16 h-16" />
                  <p className="text-xl lg:text-2xl mt-2">PSHE</p>
                </div>
                <div className="p-3 mb-3 border-2 flex flex-row gap-3 border-[#dcdcdc] rounded-lg font-semibold shadow-sm hover:bg-sky-100 transition duration-200">
                  <img src="./SCI.svg" alt="Science" className="w-16 h-16" />
                  <p className="text-xl lg:text-2xl mt-2">Science</p>
                </div>
              </>
            )}

            {selectedTimetable === "South Asia" && (
              <>
                <div className="p-3 mb-3 border-2 flex flex-row gap-3 border-[#dcdcdc] rounded-lg font-semibold shadow-sm hover:bg-sky-100 transition duration-200">
                  <img
                    src="./English.svg"
                    alt="English"
                    className="w-16 h-16"
                  />
                  <p className="text-xl lg:text-2xl mt-2">English</p>
                </div>
                <div className="p-3 mb-3 border-2 flex flex-row gap-3 border-[#dcdcdc] rounded-lg font-semibold shadow-sm hover:bg-sky-100 transition duration-200">
                  <img src="./Math.svg" alt="Math" className="w-16 h-16" />
                  <p className="text-xl lg:text-2xl mt-2">Math</p>
                </div>
                <div className="p-3 mb-3 border-2 flex flex-row gap-3 border-[#dcdcdc] rounded-lg font-semibold shadow-sm hover:bg-sky-100 transition duration-200">
                  <img src="./PSHE.svg" alt="PSHE" className="w-16 h-16" />
                  <p className="text-xl lg:text-2xl mt-2">PSHE</p>
                </div>
                <div className="p-3 mb-3 border-2 flex flex-row gap-3 border-[#dcdcdc] rounded-lg font-semibold shadow-sm hover:bg-sky-100 transition duration-200">
                  <img src="./SCI.svg" alt="Science" className="w-16 h-16" />
                  <p className="text-xl lg:text-2xl mt-2">Science</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-8 p-12 bg-white rounded-lg min-h-[650px] shadow-lg">
          <p className="text-xl lg:text-2xl font-bold text-sky-900">
            Plus 5 additional subjects
          </p>
          <p className="text-base font-light text-gray-600">
            {selectedTimetable === "UK/Europe"
              ? "Pick five additional subjects of your choice, included in the package costs. You can also add more for an extra cost.."
              : selectedTimetable === "Middle East"
              ? "Pick five additional subjects of your choice, included in the package costs. You can also add more for an extra cost.."
              : "Pick five additional subjects of your choice, included in the package costs. You can also add more for an extra cost."}
          </p>

          {/* Subject Cards */}
          {selectedTimetable === "UK/Europe" && (
            <div className="flex flex-wrap gap-9">
              {/* Column with 9 subjects in a grid */}
              <div className="w-auto md:w-2/3 lg:w-2/3">
                <div className="grid grid-cols-1 gap-3.5">
                  <Link
                    href="/computer-science"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Art</p>
                  </Link>
                  <Link
                    href="/creative-media"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Computer Science </p>
                  </Link>
                  <Link
                    href="/drama"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p> Creative Media </p>
                  </Link>
                  <Link
                    href="/film-studies"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Drama</p>
                  </Link>
                  <Link
                    href="/geography"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>French</p>
                  </Link>
                  <Link
                    href="/german-yr9"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Geography</p>
                  </Link>
                  <Link
                    href="/german-yr9"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>German (Yr 9)</p>
                  </Link>{" "}
                  <Link
                    href="/germa"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p> History</p>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Middle East and South Asia Timetables */}
          {selectedTimetable === "Middle East" && (
            <div className="flex flex-wrap gap-9">
              {/* Column with 9 subjects in a grid */}
              <div className="w-auto md:w-2/3 lg:w-2/3">
                <div className="grid grid-cols-1 gap-3.5">
                  <Link
                    href="/computer-science"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Art</p>
                  </Link>
                  <Link
                    href="/creative-media"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Computer Science </p>
                  </Link>
                  <Link
                    href="/drama"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p> Creative Media </p>
                  </Link>
                  <Link
                    href="/french"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Islamic Studies</p>
                  </Link>
                  <Link
                    href="/german-yr9"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Geography</p>
                  </Link>
                  <Link
                    href="/german-yr9"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Spanish</p>
                  </Link>{" "}
                  <Link
                    href="/germa"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p> STEM</p>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {selectedTimetable === "South Asia" && (
            <div className="flex flex-wrap gap-9">
              {/* Column with 9 subjects in a grid */}
              <div className="w-auto md:w-2/3 lg:w-2/3">
                <div className="grid grid-cols-1 gap-3.5">
                  <Link
                    href="/computer-science"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Art</p>
                  </Link>
                  <Link
                    href="/creative-media"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Computer Science </p>
                  </Link>
                  <Link
                    href="/drama"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p> Creative Media </p>
                  </Link>
                  <Link
                    href="/film-studies"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Drama</p>
                  </Link>
                  <Link
                    href="/french"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Film Studies</p>
                  </Link>

                  <Link
                    href="/german-yr9"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p>Geography</p>
                  </Link>
                  <Link
                    href="/germa"
                    className="p-2 border-2 mr-auto border-[#dcdcdc] rounded-md font-semibold shadow-sm transition duration-200"
                  >
                    <p> History</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-9">
        <p className=" font-bold text-black text-3xl   text-center  rounded-full">
          Payment Options
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-5 mx-auto my-20 py-5 max-w-7xl">
        {selectedTimetable === "UK/Europe" && (
          <div className="bg-[#32de84] border-2 rounded-lg p-5 lg:p-8 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 mb-5">
              <div className="text-xl lg:text-2xl border-4 border-solid border-blue-100 rounded-full py-2 px-5 text-white font-light">
                Middle School
              </div>
              <p className="text-white text-lg font-medium mt-4 lg:mt-0">
                Annual Contract - 2024/25
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center mb-5">
              <h1 className="text-3xl lg:text-6xl py-2 px-5 text-white font-light">
                £4,700
              </h1>
              <span className="text-white text-lg font-medium mt-4 lg:mt-0 lg:ml-4">
                / year (excludes VAT)
              </span>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-lg lg:text-xl py-2 px-5 text-white font-light font-serif">
                Excludes VAT.{" "}
                <Link href={`/`}>
                  <u> Find out more </u>
                </Link>
              </p>
              <p className="text-lg lg:text-xl py-2 px-5 text-white font-light font-serif">
                Save 36% when you sign the annual contract.
              </p>
              <p className="text-lg lg:text-xl py-2 px-5 text-white font-light font-serif">
                Sibling discount available.{" "}
                <Link href={`/`}>
                  <u> Find out more </u>
                </Link>
              </p>
            </div>
            <div>
              <hr className="border-t-2 border-gray-300 my-5" />
              <ul className="list-disc list-inside space-y-2 px-5">
                <li className="text-lg text-white">
                  £100 one-off registration fee
                </li>
                <li className="text-lg text-white">
                  £350 per additional subject - 8 extra to choose from
                </li>
                <li className="text-lg text-white">
                  £500 deposit for UK students (£1000 outside of UK)
                </li>
              </ul>
            </div>
          </div>
        )}
        {selectedTimetable === "UK/Europe" && (
          <div className="bg-[#32de84] border-2 rounded-lg p-5 lg:p-8 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 mb-5">
              <div className="text-xl lg:text-2xl border-4 border-solid border-blue-100 rounded-full py-2 px-5 text-white font-light">
                Middle School
              </div>
              <p className="text-white text-lg font-medium mt-4 lg:mt-0">
                Rolling Contract - 2024/25
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center mb-5">
              <h1 className="text-3xl lg:text-6xl py-2 px-5 text-white font-light">
                £4,700
              </h1>
              <span className="text-white text-lg font-medium mt-4 lg:mt-0 lg:ml-4">
                / Half Term (excludes VAT)
              </span>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-lg lg:text-xl py-2 px-5 text-white font-light font-serif">
                Cancel at the end of any half term.
              </p>
            </div>
            <div>
              <hr className="border-t-2 border-gray-300 my-5" />
              <ul className="list-disc list-inside space-y-2 px-5">
                <li className="text-lg text-white">
                  £100 one-off registration fee
                </li>
                <li className="text-lg text-white">
                  £350 per additional subject - 8 extra to choose from
                </li>
                <li className="text-lg text-white">
                  £500 deposit for UK students (£1000 outside of UK)
                </li>
              </ul>
            </div>
          </div>
        )}
        {selectedTimetable === "Middle East" && (
          <div className="bg-[#32de84] border-2 rounded-lg p-5 lg:p-8 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 mb-5">
              <div className="text-xl lg:text-2xl border-4 border-solid border-blue-100 rounded-full py-2 px-5 text-white font-light">
                Middle School
              </div>
              <p className="text-white text-lg font-medium mt-4 lg:mt-0">
                Annual Contract - 2024/25
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center mb-5">
              <h1 className="text-3xl lg:text-6xl py-2 px-5 text-white font-light">
                £4,700
              </h1>
              <span className="text-white text-lg font-medium mt-4 lg:mt-0 lg:ml-4">
                / year (excludes VAT)
              </span>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-lg lg:text-xl py-2 px-5 text-white font-light font-serif">
                Excludes VAT.{" "}
                <Link href={`/`}>
                  <u> Find out more </u>
                </Link>
              </p>
              <p className="text-lg lg:text-xl py-2 px-5 text-white font-light font-serif">
                Save 36% when you sign the annual contract.
              </p>
              <p className="text-lg lg:text-xl py-2 px-5 text-white font-light font-serif">
                Sibling discount available.{" "}
                <Link href={`/`}>
                  <u> Find out more </u>
                </Link>
              </p>
            </div>
            <div>
              <hr className="border-t-2 border-gray-300 my-5" />
              <ul className="list-disc list-inside space-y-2 px-5">
                <li className="text-lg text-white">
                  £100 one-off registration fee
                </li>
                <li className="text-lg text-white">
                  £350 per additional subject - 8 extra to choose from
                </li>
                <li className="text-lg text-white">
                  £500 deposit for UK students (£1000 outside of UK)
                </li>
              </ul>
            </div>
          </div>
        )}
        {selectedTimetable === "Middle East" && (
          <div className="bg-[#32de84] border-2 rounded-lg p-5 lg:p-8 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 mb-5">
              <div className="text-xl lg:text-2xl border-4 border-solid border-blue-100 rounded-full py-2 px-5 text-white font-light">
                Middle School
              </div>
              <p className="text-white text-lg font-medium mt-4 lg:mt-0">
                Rolling Contract - 2024/25
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center mb-5">
              <h1 className="text-3xl lg:text-6xl py-2 px-5 text-white font-light">
                £4,700
              </h1>
              <span className="text-white text-lg font-medium mt-4 lg:mt-0 lg:ml-4">
                / Half Term (excludes VAT)
              </span>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-lg lg:text-xl py-2 px-5 text-white font-light font-serif">
                Cancel at the end of any half term.
              </p>
            </div>
            <div>
              <hr className="border-t-2 border-gray-300 my-5" />
              <ul className="list-disc list-inside space-y-2 px-5">
                <li className="text-lg text-white">
                  £100 one-off registration fee
                </li>
                <li className="text-lg text-white">
                  £350 per additional subject - 8 extra to choose from
                </li>
                <li className="text-lg text-white">
                  £500 deposit for UK students (£1000 outside of UK)
                </li>
              </ul>
            </div>
          </div>
        )}
        {selectedTimetable === "South Asia" && (
          <div className="bg-[#32de84] border-2 rounded-lg p-5 lg:p-8 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 mb-5">
              <div className="text-xl lg:text-2xl border-4 border-solid border-blue-100 rounded-full py-2 px-5 text-white font-light">
                Middle School
              </div>
              <p className="text-white text-lg font-medium mt-4 lg:mt-0">
                Annual Contract - 2024/25
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center mb-5">
              <h1 className="text-3xl lg:text-6xl py-2 px-5 text-white font-light">
                £4,700
              </h1>
              <span className="text-white text-lg font-medium mt-4 lg:mt-0 lg:ml-4">
                / year (excludes VAT)
              </span>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-lg lg:text-xl py-2 px-5 text-white font-light font-serif">
                Excludes VAT.{" "}
                <Link href={`/`}>
                  <u> Find out more </u>
                </Link>
              </p>
              <p className="text-lg lg:text-xl py-2 px-5 text-white font-light font-serif">
                Save 36% when you sign the annual contract.
              </p>
              <p className="text-lg lg:text-xl py-2 px-5 text-white font-light font-serif">
                Sibling discount available.{" "}
                <Link href={`/`}>
                  <u> Find out more </u>
                </Link>
              </p>
            </div>
            <div>
              <hr className="border-t-2 border-gray-300 my-5" />
              <ul className="list-disc list-inside space-y-2 px-5">
                <li className="text-lg text-white">
                  £100 one-off registration fee
                </li>
                <li className="text-lg text-white">
                  £350 per additional subject - 8 extra to choose from
                </li>
                <li className="text-lg text-white">
                  £500 deposit for UK students (£1000 outside of UK)
                </li>
              </ul>
            </div>
          </div>
        )}
        {selectedTimetable === "South Asia" && (
          <div className="bg-[#32de84] border-2 rounded-lg p-5 lg:p-8 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 mb-5">
              <div className="text-xl lg:text-2xl border-4 border-solid border-blue-100 rounded-full py-2 px-5 text-white font-light">
                Middle School
              </div>
              <p className="text-white text-lg font-medium mt-4 lg:mt-0">
                Rolling Contract - 2024/25
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center mb-5">
              <h1 className="text-3xl lg:text-6xl py-2 px-5 text-white font-light">
                £4,700
              </h1>
              <span className="text-white text-lg font-medium mt-4 lg:mt-0 lg:ml-4">
                / Half Term (excludes VAT)
              </span>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-lg lg:text-xl py-2 px-5 text-white font-light font-serif">
                Cancel at the end of any half term.
              </p>
            </div>
            <div>
              <hr className="border-t-2 border-gray-300 my-5" />
              <ul className="list-disc list-inside space-y-2 px-5">
                <li className="text-lg text-white">
                  £100 one-off registration fee
                </li>
                <li className="text-lg text-white">
                  £350 per additional subject - 8 extra to choose from
                </li>
                <li className="text-lg text-white">
                  £500 deposit for UK students (£1000 outside of UK)
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* fees button  */}
      {selectedTimetable === "UK/Europe" && (
        <div className=" flex justify-center mt-4">
          <Link
            href={`/`}
            className="font-bold text-white text-xl lg:text-2xl bg-yellow-500 hover:bg-yellow-600 transition duration-300 ease-in-out px-8 py-3 rounded-full shadow-lg cursor-pointer"
          >
            View Fees U
          </Link>
        </div>
      )}
      {selectedTimetable === "Middle East" && (
        <div className=" flex justify-center mt-4">
          <Link
            href={`/`}
            className="font-bold text-white text-xl lg:text-2xl bg-yellow-500 hover:bg-yellow-600 transition duration-300 ease-in-out px-8 py-3 rounded-full shadow-lg cursor-pointer"
          >
            View Fees M
          </Link>
        </div>
      )}
      {selectedTimetable === "South Asia" && (
        <div className=" flex justify-center mt-4">
          <Link
            href={`/`}
            className="font-bold text-white text-xl lg:text-2xl bg-yellow-500 hover:bg-yellow-600 transition duration-300 ease-in-out px-8 py-3 rounded-full shadow-lg cursor-pointer"
          >
            View Fees S
          </Link>
        </div>
      )}
    </div>
  );
}
