"use client";
export default function AboutUs() {
  return (
    <div className="my-32 mx-10">
      <div>
        <p className="text-gray-700 pt-3 pb-5">
          We welcome you to get in touch with us for any questions, additional
          information, or to arrange a call. Our team is here to assist you and
          provide all the details you need about our school.
        </p>
        <h3 className="text-2xl text-gray-700 font-semibold">
          Contact Information
        </h3>
        <ul className="pb-5">
          <li>
            <span className="font-semibold ">Phone:</span> 07878165910
          </li>
          <li>
            <span className="font-semibold ">Email:</span>{" "}
            info@almadinahonline.co.uk
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-5 p-5 border border-teal-400 rounded-lg">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-gray-700 font-semibold">
              Get in touch
            </h3>
            <p className="text-gray-700 pt-3 text-xl">
              Have a question or need more information? Please fill out the form
              below, and we will get back to you as soon as possible.
            </p>
          </div>
          <div className="bg-teal-500 px-10 py-5 rounded-3xl max-w-3xl mt-5">
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
                  placeholder="name@flowbite.com"
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
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
