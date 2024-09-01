import React from "react";
import Link from "next/link";
export default function SeniorContactForm() {
  return (
    <div className="bg-slate-100 pb-10 rounded-2xl px-5 m-7">
      <div className="lg:gap-2 mx-auto py-16 max-w-5xl">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-3 text-center px-4">
          <p className="w-60 font-bold text-blue-500 py-2 px-4 border border-sky-400 rounded-full bg-slate-200">
            School insights
          </p>
          <p className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-700"></p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            {/* Responsive buttons */}
            <div className="text-sm font-semibold w-full sm:w-auto">
              <Link href={`/`}>
                <p className="bg-blue-500 text-white py-2 px-4 border border-gray-400 rounded-lg hover:bg-gray-400 hover:text-white text-center">
                  SEND A MESSAGE
                </p>
              </Link>
            </div>
            <div className="text-sm font-semibold w-full sm:w-auto">
              <Link href={`/`}>
                <p className="text-black py-2 px-4 border border-gray-400 rounded-lg bg-slate-200 hover:bg-gray-400 hover:text-white text-center">
                  BOOK A CALL
                </p>
              </Link>
            </div>
            <div className="text-sm font-semibold w-full sm:w-auto">
              <Link href={`/`}>
                <p className="text-black py-2 px-4 border border-gray-400 rounded-lg bg-slate-200 hover:bg-gray-400 hover:text-white text-center">
                  ATTEND AN OPEN EVENT
                </p>
              </Link>
            </div>
            <div className="text-sm font-semibold w-full sm:w-auto">
              <Link href={`/`}>
                <p className="text-black py-2 px-4 border border-gray-400 rounded-lg bg-slate-200 hover:bg-gray-400 hover:text-white text-center">
                  MESSAGE US
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 pb-20 mb-4 max-w-5xl mx-auto">
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <form className="bg-white p-4 sm:p-10 rounded-lg shadow-lg max-w-3xl w-full">
            {/* Form Header */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-700 text-center">
              Enquire now
            </h2>

            {/* Parent/Guardian Details */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-700 text-center">
              Parent / Guardian Details
            </h2>
            <div className="flex flex-col">
              <div className="mb-6 flex flex-col sm:flex-row items-center">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 sm:mb-0 w-full sm:w-1/4"
                  htmlFor="name"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Parent / Guardian First Name"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 flex flex-col sm:flex-row items-center">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 sm:mb-0 w-full sm:w-1/4"
                  htmlFor="name"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Parent / Guardian Last Name"
                />
              </div>
            </div>

            <div className="mb-6 flex flex-col sm:flex-row items-center">
              <label
                className="block text-gray-700 text-lg font-bold mb-2 sm:mb-0 w-full sm:w-1/4"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Parent / Guardian Email"
              />
            </div>

            <div className="flex flex-col">
              <div className="mb-6 flex flex-col sm:flex-row items-center">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 sm:mb-0 w-full sm:w-1/4"
                  htmlFor="name"
                >
                  Phone Number:
                </label>
                <input
                  type="number"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Parent / Guardian Phone Number"
                />
              </div>
            </div>

            {/* Student Details */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-700 text-center">
              Student Details
            </h2>
            <div className="flex flex-col">
              <div className="mb-6 flex flex-col sm:flex-row items-center">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 sm:mb-0 w-full sm:w-1/4"
                  htmlFor="name"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Student First Name"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 flex flex-col sm:flex-row items-center">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 sm:mb-0 w-full sm:w-1/4"
                  htmlFor="name"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Student Last Name"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 flex flex-col sm:flex-row items-center">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 sm:mb-0 w-full sm:w-1/4"
                  htmlFor="dob"
                >
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="shadow appearance-none border rounded w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Student Date of birth"
                />
              </div>
            </div>

            <div className="mb-6 flex flex-col sm:flex-row items-center">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 sm:mb-0 w-full sm:w-1/4"
                htmlFor="options"
              >
                Preferred Start Date*
              </label>
              <select
                id="options"
                name="options"
                className="shadow appearance-none border rounded w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select an option</option>
                <option value="option1">I am not sure, just researching</option>
                <option value="option2">As Soon as possible</option>
                <option value="option3">Other date</option>
              </select>
            </div>

            <div className="mb-6 flex flex-col sm:flex-row items-center">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 sm:mb-0 w-full sm:w-1/4"
                htmlFor="options"
              >
                Key Stage
              </label>
              <select
                id="options"
                name="options"
                className="shadow appearance-none border rounded w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select an option</option>
                <option value="option1">Key Stage 1</option>
                <option value="option2">Key Stage 2</option>
                <option value="option3">Key Stage 3</option>
                <option value="option4">Key Stage 4</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 border border-gray-400 rounded-lg hover:bg-gray-400 hover:text-white text-center"
              >
                SEND ENQUIRY
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
