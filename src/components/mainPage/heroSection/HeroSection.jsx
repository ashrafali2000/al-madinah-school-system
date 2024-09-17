"use client";

import { useState } from "react";
import Image from "next/image";
import AnimationPopUp from "../../animations/AnimationPopup";
import AnimationBottom from "../../animations/AnimationBottom";
import AnimationLeft from "../../animations/AnimationLeft";
import AnimationRigth from "../../animations/AnimationRigth";
import { Button } from "../../middleSchool/button/Button";
export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" relative pt-10 pb-5 mt-20 mb-6">
      {/* Blurred Background Image */}
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // backgroundImage: "url(./main-bg.jpeg)",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // filter: "blur(4px)", // Applies blur effect to the background image
          // zIndex: -1, // Keeps the background behind the content
        }}
      ></div> */}

      {/* Foreground Content */}
      <div className="relative   isolate px-4 overflow-hidden">
        <div
          className="max-w-7xl border-4 border-gray-700   rounded-[40px] h-[560px] relative mx-auto"
          style={{
            backgroundImage: "url(./herobanner1.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Two Equal Divs */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
            {/* Left Side - Image */}
            <div className="flex flex-col items-center">
              <div className="w-full flex justify-center animate-slide-in-left">
                <Image
                  src={"/bannerImage3.png"}
                  className="w-80 h-[300px]"
                  alt="heroImage"
                  width={3000000}
                  height={2000000}
                />
              </div>
              <div className="animate-slide-in-left">
                <h2 className="cursor-pointer text-center text-xs sm:text-sm md:text-xl lg:text-2xl font-bold text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105">
                  Where Academic Excellence Meets Islamic Values
                </h2>
                <h2 className="cursor-pointer text-xs sm:text-sm text-center md:text-xl lg:text-2xl font-bold tracking-wider text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105 mt-4">
                  Learn Anywhere, Anytime.
                </h2>
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="flex justify-center">
              <AnimationRigth>
                <Image
                  src={"/Herobanner2.png"}
                  alt="heroImage"
                  className="w-96 h-[550px]  animate-slide-in-right"
                  width={3000000}
                  height={2000000}
                />
              </AnimationRigth>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
