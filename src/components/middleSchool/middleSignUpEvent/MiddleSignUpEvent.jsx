import React from "react";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimationPopUp from "../../animations/AnimationPopup";

function MiddleSignUpEvent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-20 max-w-7xl mx-auto relative px-5">
      {" "}
      <AnimatedComponentLeft>
        <div>
          <img className=" rounded-xl" src={"/family.jpg"} alt="image" />
        </div>
      </AnimatedComponentLeft>
      <div className="bg-sky-800"></div>
      <div className="absolute max-w-96 md:max-w-2xl lg:max-w-3xl grid grid-cols-3 gap-10 top-1/3 p-4 lg:p-10 left-5 md:left-20 lg:left-1/3 rounded-2xl bg-white">
        <div className="flex  flex-col gap-3">
          <AnimationPopUp>
            <p className="shadow-2xl rounded-xl flex justify-center p-3 text-3xl lg:text-5xl  text-gray-800 font-bold">
              01
            </p>
          </AnimationPopUp>
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-800">
            days to go
          </p>
        </div>
        <div className="flex col-span-2  flex-col gap-3 md:gap-8">
          <span className="text-xl lg:text-3xl font-bold text-gray-800">
            {" "}
            Sign up for our next online Open Event
          </span>
          <span className="text-base lg:text-xl text-gray-800">
            Wednesday 30th August 2024 - 11:00am UK time.
          </span>
        </div>
      </div>
    </div>
  );
}

export default MiddleSignUpEvent;
