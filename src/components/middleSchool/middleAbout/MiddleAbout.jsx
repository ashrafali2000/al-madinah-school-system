import Image from "next/image";
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimatedComponentRight from "../../animations/AnimationRigth";

export const MiddleAbout = () => {
  return (
    <div className="bg-slate-100 pb-10 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-5 mx-auto my-20 py-20 pb-18 max-w-7xl">
        <AnimatedComponentLeft>
          <div className="grid grid-cols-2 place-items-center lg:block lg:relative">
            <img
              className="w-80 h-104 lg:w-72 lg:h-96 -rotate-3"
              src={"/bannerHero.jpg"}
              alt="familyImage"
            />
            <img
              className="w-96 h-112 lg:absolute lg:w-80 lg:h-96 rotate-12 top-6 left-56"
              src={"/Family.jpg"}
              alt="familyImage"
            />
          </div>
        </AnimatedComponentLeft>
        <AnimatedComponentRight>
          <div className="flex flex-col gap-5 px-5">
            <p className="w-60 font-bold text-blue-500 py-2 px-20 border-sky-400 rounded-full bg-slate-200">
              About us
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-700">
              The online middle school where your child can thrive as their true
              self
            </h2>
            <p className="text-lg font-semibold">
              At Al Madinah online school, school life is designed to be
              enriching, balanced, and supportive. We foster an environment
              where academic excellence goes hand in hand with personal and
              spiritual growth. Our students thrive in a community that values
              respect, responsibility, and the pursuit of knowledge.
            </p>
          </div>
        </AnimatedComponentRight>
      </div>

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-6xl mx-auto">
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-green-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-3xl font-bold text-sky-900">
            Accredited by Cambridge International
          </p>
          <p className="text-lg font-light">
            Al-Madinah Online School is accredited by the world-renowned
            Cambridge International, ensuring that your child receives a
            high-quality education recognised globally.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-orange-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-2xl lg:text-3xl font-bold text-sky-900">
            Personalised Learning Experience
          </p>
          <p className="text-lg font-light">
            At Al-Madinah, we understand that each student has unique learning
            needs. Our smaller class sizes and one-to-one support from
            experienced tutors provide a flexible and personalised learning
            experience, ensuring that every student can thrive.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-2xl lg:text-3xl font-bold text-sky-900">
            Access to the Cambridge International Curriculum
          </p>
          <p className="text-lg font-light">
            Even if there isn't a Cambridge school nearby, students can access
            the prestigious Cambridge International curriculum through
            Al-Madinah. This allows them to benefit from a broad and balanced
            education that is respected worldwide.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-yellow-500 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-2xl lg:text-3xl font-bold text-sky-900">
            Flexibility and Accessibility
          </p>
          <p className="text-lg font-light">
            Our online platform allows students to study from anywhere, whether
            they are moving to a different city or country, or unable to attend
            school for medical or wellbeing reasons. This flexibility ensures
            that no child misses out on their education.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-2xl lg:text-3xl font-bold text-sky-900">
            Wide Range of Subjects
          </p>
          <p className="text-lg font-light">
            Al-Madinah Online School offers a variety of subjects that may not
            be available in local schools. This wider curriculum enables
            students to explore and excel in areas of interest, providing a
            well-rounded education.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-green-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-2xl lg:text-3xl font-bold text-sky-900">
            Adapted to Modern Needs
          </p>
          <p className="text-lg font-light">
            Our approach to online education is designed to meet the needs of
            today's learners. By integrating advanced educational technologies
            and methodologies, we ensure that our students receive an education
            that is both effective and engaging.
          </p>
        </div>
      </div> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8  max-w-7xl mx-auto">
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-green-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Education tailored to you
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            From timetable adjustments to anxiety-friendly exemptions, we make
            our school fit your child.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-orange-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Passionate teachers
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            Our highly qualified, caring, passionate teachers want to see every
            child succeed.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Live lessons
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            Students log in to a virtual classroom and participate in live
            lessons with classmates and teachers. View example timetable.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-yellow-500 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            24/7 lesson recordings
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            Revise, revisit and catch up so a lesson is never missed.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Focus on wellbeing
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            With a dedicated pastoral team, we focus on the whole child, not
            just their academic achievements.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-green-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Opportunities to socialise
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            Take part in virtual clubs, school trips, summer camps, and
            in-person meetups.
          </p>
        </div>
      </div>
    </div>
  );
};
