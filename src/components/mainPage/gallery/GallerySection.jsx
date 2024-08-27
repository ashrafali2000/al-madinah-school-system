import Link from "next/link";
import React from "react";
import { Button } from "../button/Button";
import AnimationBottom from "../../animations/AnimationBottom";
import AnimationTop from "../../animations/AnimationTop";

export const GallerySection = () => {
  return (
    <div className="pb-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10 mx-auto max-w-7xl pt-10 pb-20">
        <AnimationBottom>
          <div className="overflow-hidden w-full h-[300px] md:h-[400px] lg:h-[500px] relative ">
            <img
              className="w-full h-full hover:scale-125 ease-in duration-300"
              src="/02.jpg"
            />
            <div className="absolute top-16  left-10">
              <Link
                className="bg-gray-500 text-sm  md:text-base text-gray-200 p-3 rounded-full hover:scale-105 transition duration-1000"
                href={"/"}
              >
                Feature Article
              </Link>
            </div>
            <div className="absolute top-1/2 left-5 md:left-20 right-0 bg-white p-3 md:p-8">
              <Link
                className="flex gap-4 flex-col text-gray-800 md:p-3 rounded-full"
                href={"/"}
              >
                <span className="">27/06/2024</span>
                <span className="text-base md:text-2xl text-gray-800">
                  Award-winning actress Lillia Turner- Star on screen, online
                  student backstage
                </span>
              </Link>
            </div>
          </div>
        </AnimationBottom>
        <AnimationTop>
          <div className="w-full h-[300px] overflow-hidden md:h-[400px] lg:h-[500px] relative">
            <img
              className="w-full h-full hover:scale-125 ease-in duration-300"
              src="/05.jpg"
            />
            <div className="absolute bottom-10 left-1/3">
              <Button title={"Read Article"} link={"/"} />
            </div>
          </div>
        </AnimationTop>
      </div>
      <AnimationBottom>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3  mx-auto">
          <div className="group hover:shadow-2xl w-11/12 h-60 md:h-[250px] relative">
            <div className=" overflow-hidden">
              <img
                className="group-hover:scale-125 ease-in duration-300 w-full h-full"
                src="/03.jpg"
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
                src="/04.jpg"
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
                src="/08.jpg"
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
};
