import Image from "next/image";
import React from "react";

import { IoCheckmarkSharp } from "react-icons/io5";
import { BorderButton } from "../borderButton/BorderButton";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";
export const HowWeTeach = () => {
  return (
    <div>
      <div
        className="max-w-7xl rounded-[40px] relative mx-auto"
        style={{
          backgroundImage: "url(./bannerHero.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto w-9/12  grid grid-cols-1 gap-20 lg:gap-5 lg:grid-cols-5 py-20 lg:py-32 ">
          <div className="lg:col-span-2">
            <AnimationPopUp>
              <Button link={"#"} title={"  How we teach"}></Button>
            </AnimationPopUp>
            <div className="text-start pt-5">
              <h1 className="text-3xl font-bold tracking-tight text-white lg:text-2xl">
                How we teach at our online school
              </h1>
              <p className="mt-6 text-xl font-semibold leading-8 text-gray-200">
                Our teachers combine innovative technologies with engaging
                lesson content to help students learn in the best way.
              </p>
            </div>
            <div className="pt-8">
              <AnimationPopUp>
                <Button link={"/how-we-teach"} title={"  Click Here "}></Button>
              </AnimationPopUp>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col py-10 bg-white rounded-xl px-5 lg:px-10">
            <p className="text-2xl text-gray-700 font-semibold lg:font-bold">
              Live, timetabled lessons — plus lesson recordings!
            </p>{" "}
            <span className="flex justify-between py-5">
              <span className="font-bold text-gray-700">
                Virtual classrooms
              </span>
              <span>
                <IoCheckmarkSharp className="w-6 h-6 lg:w-8 lg:h-8 text-green-500" />
              </span>
            </span>
            <hr className="h-[1px] bg-gray-300" />
            <span className="flex justify-between py-5">
              <span className="font-bold text-gray-700">Small class sizes</span>
              <span>
                <IoCheckmarkSharp className="w-6 h-6 lg:w-8 lg:h-8 text-green-500" />
              </span>
            </span>
            <hr className="h-[1px] bg-gray-300" />
            <span className="flex justify-between py-5">
              <span className="font-bold text-gray-700">
                Collaborative learning
              </span>
              <span>
                <IoCheckmarkSharp className="w-6 h-6 lg:w-8 lg:h-8 text-green-500" />
              </span>
            </span>
            <hr className="h-[1px] bg-gray-300" />
            <span className="flex justify-between py-5">
              <span className="font-bold text-gray-700">
                Valuable teacher feedback
              </span>
              <span>
                <IoCheckmarkSharp className="w-6 h-6 lg:w-8 lg:h-8 text-green-500" />
              </span>
            </span>
            <hr className="h-[1px] bg-gray-300" />
            <span className="flex justify-between py-5">
              <span className="font-bold text-gray-700">
                Making learning inclusive with technology
              </span>
              <span>
                <IoCheckmarkSharp className="w-6 h-6 lg:w-8 lg:h-8 text-green-500" />
              </span>
            </span>
            <hr className="h-[1px] bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};
