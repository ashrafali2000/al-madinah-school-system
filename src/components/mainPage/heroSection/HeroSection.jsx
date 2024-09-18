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
    <div className="relative pt-10 pb-5 mt-20 mb-6">
      {/* Blurred Background Image */}

      {/* Foreground Content */}
      <div className="relative isolate px-4 overflow-hidden">
        <div
          className="max-w-7xl border-4 border-gray-700 rounded-[40px] h-auto relative mx-auto"
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
                  className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto"
                  alt="heroImage"
                  width={3000000}
                  height={2000000}
                />
              </div>
              <div className="animate-slide-in-left text-center mt-4">
                <h2 className="cursor-pointer text-xs sm:text-sm md:text-xl lg:text-2xl font-bold text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105">
                  Where Academic Excellence Meets Islamic Values
                </h2>
                <h2 className="cursor-pointer text-xs sm:text-sm md:text-xl lg:text-2xl font-bold tracking-wider text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105 mt-2">
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
                  className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto animate-slide-in-right"
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
