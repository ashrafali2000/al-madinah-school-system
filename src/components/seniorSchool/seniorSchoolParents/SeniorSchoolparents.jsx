import React from "react";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimatedComponentRight from "../../animations/AnimationRigth";
import Link from "next/link";
export default function SeniorSchoolparents() {
  return (
    <div className=" bg-slate-100 pb-10 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20  lg:gap-5 mx-auto  py-20 max-w-6xl">
        <AnimatedComponentLeft>
          <div className="grid grid-cols-2 place-items-center lg:block lg:relative">
            <img
              className="w-72 h-96 lg:w-60 lg:h-80 -rotate-3"
              // src="https://www.shutterstock.com/image-photo/mother-teenager-girl-laptop-computer-260nw-74632564.jpg"
              // src="https://image1.masterfile.com/getImage/NjMwLTA2NzIzMDE3ZW4uMDAwMDAwMDA=AJfl5r/630-06723017en_Masterfile.jpg"
              src={"/bannerHero.jpg"}
              alt="familyImage"
            />
            <img
              className="w-70 h-96 lg:absolute lg:w-64 lg:h-80 rotate-12 top-6 left-56"
              // src="https://www.shutterstock.com/image-photo/mother-teenager-girl-laptop-computer-260nw-74632564.jpg"
              src={"/Family.jpg"}
              alt="familyImage"
            />
          </div>
        </AnimatedComponentLeft>
        <AnimatedComponentRight>
          <div className="flex flex-col gap-5 px-5">
            <p className="w-60 font-bold text-blue-500 py-2 px-4 border-1 border-sky-400 rounded-full bg-slate-200">
              Our promise
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700">
              What parents want to know
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-6xl mt-10  mx-auto pb-19">
        <div className="flex flex-col items-center md:items-start gap-4 ">
          <span className="w-12 h-12 bg-green-600 text-center font-bold text-white rounded-full flex items-center justify-center">
            1
          </span>
          <p className="text-xl lg:text-2xl font-bold text-sky-900 text-center md:text-left">
            A window into your child’s education
          </p>
          <p className="text-base font-light text-center md:text-left">
            Al-Madinah Online School is accredited by the world-renowned
            Cambridge International, ensuring that your child receives a
            high-quality education recognized globally.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:items-start gap-4 mt-8 ">
          <span className="w-12 h-12 bg-orange-600 rounded-full text-center font-bold text-white flex items-center justify-center">
            2
          </span>
          <p className="text-xl lg:text-2xl font-bold text-sky-900 text-center md:text-left">
            Preparing for GCSEs and more
          </p>
          <p className="text-base font-light text-center md:text-left">
            At Al-Madinah, we understand that each student has unique learning
            needs. Our smaller class sizes and one-to-one support from
            experienced tutors provide a flexible and personalized learning
            experience, ensuring that every student can thrive.
          </p>
          <p className="text-base font-light text-center md:text-left ">
            {" "}
            <Link href={`/`}>
              {" "}
              <u className="text-blue-500 font-bold">
                {" "}
                How we teach <span className="text-2xl">{">"}</span>
              </u>{" "}
            </Link>{" "}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 mt-9">
          <span className="w-12 h-12 bg-sky-600 text-center font-bold text-white rounded-full flex items-center justify-center">
            3
          </span>
          <p className="text-xl lg:text-2xl font-bold text-sky-900 text-center md:text-left">
            Specialist support for SEN
          </p>
          <p className="text-base font-light text-center md:text-left">
            Even if there isn't a Cambridge school nearby, students can access
            the prestigious Cambridge International curriculum through
            Al-Madinah. This allows them to benefit from a broad and balanced
            education that is respected worldwide.
          </p>
          <p className="text-base font-light text-center md:text-left ">
            {" "}
            <Link href={`/`}>
              {" "}
              <u className="text-blue-500 font-bold">
                {" "}
                School Life <span className="text-2xl">{">"}</span>
              </u>{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
