import React from "react";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";
export const KeyStagesText = () => {
  return (
    <div
      id="key-Stages"
      className="mx-auto mt-10 bg-white border-4 border-gray-700  rounded-[40px]  max-w-7xl py-8 "
    >
      <div className="flex justify-center">
        <AnimationPopUp>
          <div>
            <Button link={""} title={"Introduction"} />
          </div>
        </AnimationPopUp>
      </div>

      <div className="text-center gap-8 pt-3 mt-5 rounded-[40px]">
        <p className="mt-4 text-md lg:text-lg  font-bold leading-8  text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105">
          Welcome To Al-Madinah Online Secondary School, An Islamic institution
          where academic excellence nurtures <br /> the growth of confident and
          compassionate individuals, Guided by the principles of Islam.
        </p>
      </div>
    </div>
  );
};
