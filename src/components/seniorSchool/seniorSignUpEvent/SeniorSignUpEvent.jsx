"use client";
import React from "react";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { motion } from "framer-motion";
import { Button } from "../button/Button";
import AnimationBottom from "../../animations/AnimationBottom";
import AnimationPopUp from "../../animations/AnimationPopup";
import AnimationTop from "../../animations/AnimationTop";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function SeniorSignUpEvent() {
  return (
    <div className="pt-5 mt-20">
      <div className="relative isolate px-4 overflow-hidden">
        <div
          className="max-w-8xl rounded-[40px] relative mx-auto overflow-hidden"
          style={{
            backgroundImage: "url(./middle_School_Banner.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-full overflow-hidden">
              <AnimationBottom>
                <Image
                  src={"/NextEventBookingImage1.png"}
                  className="mx-auto w-full h-full rounded-[40px]"
                  alt="heroImage"
                  width={1800}
                  height={200}
                />
              </AnimationBottom>
            </div>

            {/* Middle Card */}
            <div className="flex justify-center items-center w-full md:col-span-1 md:absolute md:left-2/3 md:top-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/2">
              <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[60%] xl:w-[50%] bg-white rounded-xl shadow-lg p-8 sm:p-8 md:p-20 lg:p-16 min-h-[300px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px] overflow-hidden">
                <div className="text-center">
                  <h2 className="text-3xl font-semibold text-gray-800 sm:text-xl md:text-2xl lg:text-4xl">
                    Join our school at any time
                  </h2>
                  <p className="mt-8 text-base text-gray-600 sm:text-xl md:text-2xl lg:text-xl">
                    Enrol today, and join lessons within days! <br />
                  </p>
                  <p className="mt-2 text-base text-gray-600 sm:text-xl md:text-xxl lg:text-xl">
                    King’s InterHigh is open for enrolment all year round. We
                    kickstart each student’s online learning experience with a
                    welcoming induction process to make the transition smooth.
                  </p>
                  <div className="mt-8 text-sm sm:text-base md:text-lg lg:text-xl">
                    <Button link={"/"} title={"Book A Call"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
