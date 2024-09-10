import React from "react";
import { BorderButton } from "../borderButton/BorderButton";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";
export const AboutSchool = ({ title, buttonTile, subtitle, describe }) => {
  return (
    <div className="">
      <div className="flex gap-5 max-w-4xl mx-auto flex-col items-center">
        <p className="font-bold py-2 px-4 border-1 rounded-full ">
          <AnimationPopUp>
            {" "}
            <Button link={"/#"} title={" Life at an online school "}>
              {" "}
              Life at an online school{" "}
            </Button>
          </AnimationPopUp>
        </p>
        <p className=" md:text-2xl lg:text-4xl font-semibold lg:font-bold text-center text-gray-800">
          {subtitle}
        </p>
        {describe ? (
          <p className="text-xl  text-center text-gray-800">{describe}</p>
        ) : null}
        <AnimationPopUp>
          {" "}
          <Button link={"/#"} title={" Student Life "}>
            {" "}
            Life at an online school{" "}
          </Button>
        </AnimationPopUp>
      </div>
    </div>
  );
};
