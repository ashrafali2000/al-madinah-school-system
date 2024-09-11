import React from "react";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimatedComponentRight from "../../animations/AnimationRigth";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";
export const StudentSupport = () => {
  return (
    <div className="bg-slate-100">
      <div className="grid grid-cols-1 place-items-center max-w-8xl mx-auto lg:grid-cols-2  py-32 px-20 gap-10 mt-20">
        <AnimatedComponentLeft>
          <div>
            <img className="-rotate-6 rounded-xl" src="/08.jpg" alt="image" />
          </div>
        </AnimatedComponentLeft>
        <AnimatedComponentRight>
          <div className="flex flex-col gap-4">
            {/* <p className="font-bold text-blue-500 w-40 py-2 px-4 border-1 border-sky-400 rounded-full bg-slate-200">
              Student Support
            </p> */}
            <AnimationPopUp>
              <Button
                link={"/how-we-teach"}
                title={"     Student Support "}
              ></Button>
            </AnimationPopUp>
            <p className="text-2xl mt-6 lg:text-4xl font-bold text-zinc-800">
              Student Support
            </p>
            <p className="text-lg mt-5 text-gray-700 font-bold">
              Every Student Should Feel Nurtured, Celebrated, and Supported To
              Learn And Grow, Which Is Why Wellbeing Is Our Utmost Priority At
              Al-Madinah School.
            </p>
          </div>
        </AnimatedComponentRight>
      </div>
    </div>
  );
};
