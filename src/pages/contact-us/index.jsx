"use client";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <div className="my-32 mx-10">
      <div>
        <div className="  border-4 border-gray-700 rounded-[40px] bg-white p-6">
          <p className="text-gray-700 font-medium text-xl pt-3 ">
            We welcome you to get in touch with us for any questions, additional
            information, or to arrange a call. <br /> Our team is here to assist
            you and provide all the details you need about our school.
          </p>
          {/* <div className="flex   ">
            <motion.h3
              className="cursor-pointer text-3xl  w-auto p-4 inline-block rounded-lg  bg-[rgb(250,204,20)] text-black font-semibold "
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 20, // removed quotes around the duration
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Contact Information
            </motion.h3>
          </div> */}
          <ul className=" mt-5">
            <li>
              <span className="font-semibold ">Phone </span>: 07878165910
            </li>
            <li>
              <span className="font-semibold ">Email</span> :
              info@almadinahonline.co.uk
            </li>
          </ul>
        </div>
        <div className="mt-12 bg-white  grid grid-cols-2 gap-5 p-6 border-4 border-gray-700 rounded-[40px]">
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-gray-700 pt-3 font-medium text-xl">
              Have a question or need more information? Please fill out the form
              ,and <br />
              we will get back to you as soon as possible.
            </p>
            <div className="flex   ">
              <motion.h3
                className="cursor-pointer text-3xl  w-auto p-4 inline-block rounded-lg  bg-[rgb(250,204,20)] text-black font-semibold "
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 20, // removed quotes around the duration
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                Get In Touch
              </motion.h3>
            </div>
          </div>
          <div className="bg-sky-400 px-10 py-5 rounded-3xl max-w-3xl mt-5">
            <form className="max-w-md mx-auto">
              <div className="mb-5">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  for="query"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your Query
                </label>
                <textarea
                  id="query"
                  placeholder="Your Message "
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
