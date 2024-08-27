import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
export const SchoolCategories = () => {
  return (
    <div className="bg-slate-100 pb-20 lg:py-20 px-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-6xl mx-auto ">
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center text-white bg-sky-600 text-xl lg:t-3xl font-semibold rounded-full p-3">
            1
          </span>
          <p className="text-2xl font-bold text-sky-900">Pastoral care</p>
          <p className="text-base font-light">
            From scheduled small group ‘tutor time’ to one-to-one sessions and
            workshops for concerns like anxiety, our dedicated pastoral team is
            always on hand to listen and support the wellbeing of our students.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center text-white bg-green-600 text-xl lg:ext-3xl font-semibold rounded-full p-3">
            2
          </span>
          <p className="text-2xl font-bold text-sky-900">SEN support</p>
          <p className="text-base font-light">
            We have a dedicated SEN team who work alongside our teachers to
            offer accessible, student-centred SEN support, making our online
            learning inclusive for all.
          </p>
          <Link
            href={"/"}
            className="text-blue-600 font-semibold text-xl flex items-center"
          >
            Learn more about SEN support{" "}
            <IoIosArrowForward className="text-blue-600 w-6 h-6" />
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center text-white bg-orange-500 text-xl lg:text-3xl font-semibold rounded-full p-3">
            3
          </span>
          <p className="text-2xl font-bold text-sky-900">
            A strong school community
          </p>
          <p className="text-base font-light">
            We’re proud of our community. Every student has plenty of
            opportunities to make friends and memories that last a lifetime,
            from school trips to summer camps, adventure weekends, and meetups
            with local King’s InterHigh families throughout the year.
          </p>
        </div>
      </div>
    </div>
  );
};
