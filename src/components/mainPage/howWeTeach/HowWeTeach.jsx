import Image from "next/image";
import React from "react";

import { IoCheckmarkSharp } from "react-icons/io5";
import { BorderButton } from "../borderButton/BorderButton";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";
export const HowWeTeach = () => {
  return (
    // <div>
    //   <div
    //     className="max-w-7xl rounded-[40px] relative mx-auto"
    //     style={{
    //       backgroundImage: "url(./nnn.png)",
    //       backgroundSize: "cover",
    //       backgroundRepeat: "no-repeat",
    //     }}
    //   >
    //     <div className="mx-auto w-9/12  grid grid-cols-1 gap-20 lg:gap-5 lg:grid-cols-5 py-20 lg:py-32 ">
    //       <div className="lg:col-span-2">
    //         <AnimationPopUp>
    //           <Button link={"#"} title={"  How we teach"}></Button>
    //         </AnimationPopUp>
    //         <div className="text-start pt-5">
    //           <h1 className="text-3xl font-bold tracking-tight text-white lg:text-2xl">
    //             How we teach at our online school
    //           </h1>
    //           <p className="mt-6 text-xl font-semibold leading-8 text-gray-200">
    //             Our teachers combine innovative technologies with engaging
    //             lesson content to help students learn in the best way.
    //           </p>
    //         </div>
    //         <div className="pt-8">
    //           <AnimationPopUp>
    //             <Button link={"/how-we-teach"} title={"  Click Here "}></Button>
    //           </AnimationPopUp>
    //         </div>
    //       </div>
    //       <div className="lg:col-span-3 flex flex-col py-10 bg-white rounded-xl px-5 lg:px-10">
    //         <p className="text-2xl text-gray-700 font-semibold lg:font-bold">
    //           Live, timetabled lessons — plus lesson recordings!
    //         </p>{" "}
    //         <span className="flex justify-between py-5">
    //           <span className="font-bold text-gray-700">
    //             Virtual classrooms
    //           </span>
    //           <span>
    //             <IoCheckmarkSharp className="w-6 h-6 lg:w-8 lg:h-8 text-green-500" />
    //           </span>
    //         </span>
    //         <hr className="h-[1px] bg-gray-300" />
    //         <span className="flex justify-between py-5">
    //           <span className="font-bold text-gray-700">Small class sizes</span>
    //           <span>
    //             <IoCheckmarkSharp className="w-6 h-6 lg:w-8 lg:h-8 text-green-500" />
    //           </span>
    //         </span>
    //         <hr className="h-[1px] bg-gray-300" />
    //         <span className="flex justify-between py-5">
    //           <span className="font-bold text-gray-700">
    //             Collaborative learning
    //           </span>
    //           <span>
    //             <IoCheckmarkSharp className="w-6 h-6 lg:w-8 lg:h-8 text-green-500" />
    //           </span>
    //         </span>
    //         <hr className="h-[1px] bg-gray-300" />
    //         <span className="flex justify-between py-5">
    //           <span className="font-bold text-gray-700">
    //             Valuable teacher feedback
    //           </span>
    //           <span>
    //             <IoCheckmarkSharp className="w-6 h-6 lg:w-8 lg:h-8 text-green-500" />
    //           </span>
    //         </span>
    //         <hr className="h-[1px] bg-gray-300" />
    //         <span className="flex justify-between py-5">
    //           <span className="font-bold text-gray-700">
    //             Making learning inclusive with technology
    //           </span>
    //           <span>
    //             <IoCheckmarkSharp className="w-6 h-6 lg:w-8 lg:h-8 text-green-500" />
    //           </span>
    //         </span>
    //         <hr className="h-[1px] bg-gray-300" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="pb-10">
      <div
        className="max-w-7xl  border-4 border-gray-700  rounded-[40px] relative mx-auto"
        style={{
          backgroundImage: "url(./nnn.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Apply a backdrop blur effect */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-[40px]"></div>

        {/* Main content */}
        <div className="relative mx-auto w-9/12 grid grid-cols-1 gap-20 lg:gap-5 lg:grid-cols-5 py-20 lg:py-32 ">
          <div className="lg:col-span-2 flex flex-col place-items-start justify-center">
            <div className=" text-">
              <AnimationPopUp>
                <Button link={"#"} title={"Teaching Methodology"}></Button>
              </AnimationPopUp>
            </div>
            <div className="text-start pt-5">
              <p className="mt-6 text-xl font-semibold leading-8 text-gray-200">
                Our teaching methods are designed to engage students actively in
                their learning journey. We employ a variety of instructional
                strategies, including:
              </p>
            </div>
          </div>

          <div className="lg:col-span-3  flex flex-col py-10 bg-white rounded-xl px-7 lg:px-10">
            <p className="text-2xl text-gray-700 font-semibold lg:font-bold">
              Live, timetabled lessons — plus lesson recordings!
            </p>
            <span className="flex justify-between py-2">
              <div className="flex flex-col">
                <span className="mt-3 font-bold  text-gray-700">
                  Interactive Lessons
                </span>
                <span className="mt-1 font-base  text-gray-700">
                  Use of technology and multimedia to make lessons dynamic and
                  engaging.
                </span>
              </div>
              <span className="mt-3 w-12 h-12 bg-green-600 rounded-full p-3">
                <IoCheckmarkSharp className="w-6 h-6  text-white" />
              </span>
            </span>
            <hr className="h-[1px] bg-gray-300" />
            <span className="flex justify-between py-3">
              <div className="flex flex-col">
                <span className="mt-3 font-bold  text-gray-700">
                  Collaborative Learning
                </span>
                <span className="mt-1 font-base  text-gray-700">
                  Group work and discussions to foster teamwork and
                  communication skills.
                </span>
              </div>
              <span className="mt-3 w-12 h-12 bg-green-600 rounded-full p-3">
                <IoCheckmarkSharp className="w-6 h-6  text-white" />
              </span>
            </span>
            <hr className="h-[1px] bg-gray-300" />
            <span className="flex justify-between py-3">
              <div className="flex flex-col">
                <span className="mt-3 font-bold  text-gray-700">
                  Inquiry-Based Learning
                </span>
                <span className="mt-1 font-base  text-gray-700">
                  Encouraging students to ask questions and explore topics in
                  depth.
                </span>
              </div>
              <span className="mt-3 w-12 h-12 bg-green-600 rounded-full p-3">
                <IoCheckmarkSharp className="w-6 h-6  text-white" />
              </span>
            </span>
            <hr className="h-[1px] bg-gray-300" />
            <span className="flex justify-between py-3">
              <div className="flex flex-col">
                <span className="mt-3 font-bold  text-gray-700">
                  Continuous Feedback
                </span>
                <span className="mt-1 font-base  text-gray-700">
                  Regular assessments and feedback to support student growth and
                  improvement.
                </span>
              </div>
              <span className="mt-3 w-12 h-12 bg-green-600 rounded-full p-3">
                <IoCheckmarkSharp className="w-6 h-6  text-white" />
              </span>
            </span>
            <hr className="h-[1px] bg-gray-300" />
            {/* <span className="flex justify-between py-3">
              <span className="mt-3  font-bold text-gray-700">
                Making learning inclusive with technology
              </span>
              <span className="w-12 h-12 bg-green-600 rounded-full p-3">
                <IoCheckmarkSharp className="w-6 h-6  text-white" />
              </span>
            </span> */}
            <hr className="h-[1px] bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};
