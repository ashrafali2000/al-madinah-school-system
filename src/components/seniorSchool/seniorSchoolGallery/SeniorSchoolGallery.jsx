import React from "react";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimationBottom from "../../animations/AnimationBottom";
import AnimatedComponentRight from "../../animations/AnimationRigth";
import Link from "next/link";
function SeniorSchoolGallery() {
  return (
    <div>
      <div className="bg-slate-50 rounded-lg mx-auto">
        <div className=" lg:gap-5 mx-auto  py-20 max-w-5xl">
          <div className="flex flex-col items-center justify-center gap-3 text-center px-5">
            <p className="w-60 font-bold text-blue-500 py-2 px-4 border border-sky-400 rounded-full bg-slate-200">
              The full school experience
            </p>

            <p className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-700">
              A typical week at Al Madinah School
            </p>

            <div className="text-lg font-semibold">
              <p className="w-60 font-bold text-black py-4 px-4 border border-gray-400 rounded-lg bg-slate-200 hover:bg-gray-400 hover:text-white">
                <Link href={`/`}> School Life </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 place-items-center max-w-7xl mx-auto lg:grid-cols-4 pt-15 pb-32 px-5">
          <AnimatedComponentLeft>
            <img
              className="h-80 w-64 rotate-6"
              // src="https://c8.alamy.com/comp/2RM7BNB/happy-kid-and-headphones-with-tablet-in-bedroom-to-watch-movies-video-game-and-elearning-app-boy-child-smile-with-digital-technology-for-multimedia-2RM7BNB.jpg"
              src={"/boy.jpg"}
              alt="image"
            />
          </AnimatedComponentLeft>
          <AnimationBottom>
            <img
              className="h-80 w-72 -rotate-3"
              src={"/Family.jpg"}
              alt="image"
            />
          </AnimationBottom>
          <AnimationBottom>
            <img
              className="h-80 w-64 rotate-6"
              src={"/Student_Life.jpg"}
              alt="image"
            />
          </AnimationBottom>
          <AnimatedComponentRight>
            <img
              className="h-80 w-72 -rotate-6"
              src={"/family2.jpg"}
              alt="image"
            />
          </AnimatedComponentRight>
        </div>
      </div>
    </div>
  );
}

export default SeniorSchoolGallery;
