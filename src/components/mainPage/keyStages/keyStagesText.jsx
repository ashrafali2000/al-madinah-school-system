import React from "react";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";
export const KeyStagesText = () => {
  return (
    <div
      id="key-Stages"
      className="mx-auto  bg-white border-2 border-gray-700  rounded-lg max-w-3xl py-8 "
    >
      <div className="flex justify-center">
        <AnimationPopUp>
          <div>
            <Button link={""} title={"Key Stages"} />
          </div>
        </AnimationPopUp>
      </div>

      <div className="text-center gap-8 pt-3 mt-5 rounded-lg">
        <h1 className="text-xl mt-9  font-semibold tracking-tight text-gray-900 md:text-2xl lg:text-2xl">
          Nurturing Your Child’s Potential At Every Stage Of Their Education
        </h1>
        <p className="mt-9 text-md lg:text-lg  leading-8 text-gray-700">
          Welcome To Al-Madinah Online Secondary School, An Islamic institution
          where academic excellence nurtures the growth of confident and
          compassionate individuals, Guided by the principles of Islam.
        </p>
      </div>
    </div>
  );
};
