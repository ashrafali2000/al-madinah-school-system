import React from "react";
import { BorderButton } from "../borderButton/BorderButton";
import { AboutSchool } from "../school/AboutSchool";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimationTop from "../../animations/AnimationTop";
import AnimatedComponentRight from "../../animations/AnimationRigth";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";
export const SchoolTrust = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-5 ">
      <div className="">
        <div className="flex justify-center">
          <AnimationPopUp>
            <div>
              <Button link={""} title={"A school you can trust"} />
            </div>
          </AnimationPopUp>
        </div>
        <div className="text-center pt-9 pb-5">
          <h1 className="text-xl mt-4 font-semibold tracking-tight text-gray-900 md:text-2xl lg:text-2xl">
            We Are The Original Online School, Where Learning Revolves Around
            Every Unique Student.
          </h1>
        </div>
        <div className="flex  justify-center mt-9">
          <AnimationPopUp>
            <div>
              <Button link={"/#"} title={"Our School"} />
            </div>
          </AnimationPopUp>
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-3 lg:gap-8 pt-10">
        <AnimatedComponentLeft>
          <div className="bg-yellow-400 text-gray-800 gap-5  p-8 rounded-full w-64 h-64 lg:w-96 lg:h-96 flex flex-col justify-center items-center">
            {/* <p className="md:text-3xl lg:text-5xl font-bold">
             
            </p> */}
            <p className="text-xl lg:text-3xl text-white font-semibold text-center">
              Experienced Teachers Building Strong Islamic Foundations
            </p>
          </div>
        </AnimatedComponentLeft>
        <AnimationTop>
          <div className="bg-orange-600 text-gray-100  gap-5 p-8 rounded-full w-64 h-64 lg:w-96 lg:h-96 flex flex-col justify-center items-center">
            <p className="md:text-3xl lg:text-5xl font-bold"></p>
            <p className="text-xl lg:text-3xl font-semibold text-center">
              Interactive and Engaging Islamic Learning
            </p>
          </div>
        </AnimationTop>
        <AnimatedComponentRight>
          <div className="bg-green-600 text-gray-100  gap-5  p-8 rounded-full w-64 h-64 lg:w-96 lg:h-96 flex flex-col justify-center items-center">
            {/* <p className="md:text-3xl lg:text-5xl font-bold">
              Backed by 10+ Years
            </p> */}
            <p className="text-xl lg:text-2xl font-semibold text-center">
              Backed by 10+ Years of Experience in UK Schools Now Bringing
              Interactive Islamic Learning Online
            </p>
          </div>
        </AnimatedComponentRight>
      </div>
    </div>
  );
};
