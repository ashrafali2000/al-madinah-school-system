import React from "react";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";
export const KeyStagesText = () => {
  return (
    <div id="key-Stages" className="mx-auto max-w-3xl py-10 sm:py-20">
      <div className="flex justify-center">
        <AnimationPopUp>
          <div>
            <Button link={""} title={"Key Stages"} />
          </div>
        </AnimationPopUp>
      </div>

      <div className="text-center pt-3">
        <h1 className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl lg:text-2xl">
          Nurturing Your Child’s Potential At Every Stage Of Their Education
        </h1>
        <p className="mt-6 text-md lg:text-lg  leading-8 text-gray-700">
          Welcome To Al-Madinah Online Secondary School, An Islamic institution
          where academic excellence nurtures the growth of confident and
          compassionate individuals, Guided by the principles of Islam.
        </p>
      </div>
    </div>
  );
};
