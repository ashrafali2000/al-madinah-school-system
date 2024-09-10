"use client";

import { useState } from "react";
import Image from "next/image";
import AnimationPopUp from "../../animations/AnimationPopup";

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="pt-5 mt-20">
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="max-w-9xl rounded-[40px] w-full h-[550px] relative mx-auto "
          style={{
            backgroundImage: "url(./Al-MadinahNew.png)",
            backgroundSize: " 100% 95%", // Adjust this percentage to decrease the height
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "40px",
          }}
        >
          <div className="absolute mt-3 top-2/3 left-1/2 transform -translate-x-1/2 mx-auto w-11/12 sm:py-10">
            <div className="text-center space-y-4">
              <AnimationPopUp>
                <h2 className="text-lg font-semibold tracking-tight text-white md:text-2xl lg:text-4xl leading-tight animate-slideToCenter">
                  Where Academic Excellence Meets Islamic Values
                </h2>
                <h2 className="text-lg font-semibold tracking-tight  text-white md:text-2xl lg:text-4xl animate-blink leading-tight ">
                  Learn Anywhere, Anytime.
                </h2>
              </AnimationPopUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
