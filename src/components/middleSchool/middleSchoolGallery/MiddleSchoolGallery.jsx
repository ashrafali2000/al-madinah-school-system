import React from "react";
import Link from "next/link";
import { Button } from "../button/Button";
import AnimationBottom from "../../animations/AnimationBottom";
import AnimationTop from "../../animations/AnimationTop";
function MiddleSchoolGallery() {
  return (
    <div className=" bg-slate-100 pb-28 mb-20 max-w-6xl mx-auto">
      <AnimationBottom>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3  mx-auto">
          <div className="group hover:shadow-2xl w-11/12 h-60 md:h-[250px] relative">
            <div className=" overflow-hidden">
              <img
                className="group-hover:scale-125 ease-in duration-300 w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
              />
            </div>
            <span className="absolute  -bottom-7 -left-2 bg-white w-40 flex justify-center items-center rounded-[50px] pt-6 pb-6">
              20/02/2024
            </span>
            <p className="pt-5 text-lg font-semibold">
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of{" "}
            </p>
          </div>
          <div className="group hover:shadow-2xl w-11/12 mt-32 lg:mt-0 h-60  md:h-[250px] relative">
            <div className=" overflow-hidden">
              <img
                className="group-hover:scale-125 ease-in duration-300 w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
              />
            </div>
            <span className="absolute -bottom-7 -left-2 bg-white w-40 flex justify-center items-center rounded-[50px] pt-6 pb-6">
              20/02/2024
            </span>
            <p className="pt-5 text-lg font-semibold">
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of{" "}
            </p>
          </div>
          <div className="w-11/12 h-60 group hover:shadow-2xl md:h-[250px]  mt-32 md:mt-40 lg:mt-0 relative">
            <div className=" overflow-hidden">
              <img
                className="group-hover:scale-125 ease-in duration-300 w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
              />
            </div>
            <span className="absolute -bottom-7 -left-2 bg-white w-40 flex justify-center items-center rounded-[50px] pt-6 pb-6 ">
              20/02/2024
            </span>
            <p className="pt-5 text-lg font-semibold">
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of{" "}
            </p>
          </div>
        </div>
      </AnimationBottom>
    </div>
  );
}

export default MiddleSchoolGallery;
