"use client";
import { GoArrowDown } from "react-icons/go";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-5 lg:px-8">
    //     <div
    //       className="max-w-8xl rounded-[40px] relative mx-auto"
    //       style={{
    //         backgroundImage: "url(./middle_School_Banner.jpg)",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full gap-4">
    //         {/* Left Side - Image */}
    //         <div className="p-4 sm:p-6 md:p-8 lg:p-10">
    //           <AnimationBottom>
    //             <Image
    //               src={"/bannerHero.jpg"}
    //               className="mx-auto w-full h-auto rounded-[40px]"
    //               alt="heroImage"
    //               width={400}
    //               height={200}
    //             />
    //           </AnimationBottom>
    //         </div>

    //         {/* Middle Card */}
    //         <div className="absolute top-1/2 left-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2  md:-translate-x-1/3  md:top-1/2  md:left-1/2  -translate-x-1/3 -translate-y-1/2 w-[90%] sm:w-[20%] md:w-[60%] lg:w-[65%] xl:w-[65%] bg-white rounded-xl shadow-lg p-8 sm:p-4 md:p-20 lg:p-32 min-h-[300px] sm:min-h-[30px] md:min-h-[200px] lg:min-h-[650px]">
    //           <div className="text-center">
    //             <h2 className="text-3xl font-semibold text-gray-800 sm:text-2xl md:text-5xl lg:text-6xl">
    //               Middle School Online
    //             </h2>
    //             <p className="mt-8 text-lg text-gray-600 sm:text-xl md:text-2xl lg:text-3xl">
    //               Key Stage 3 Online ∙ Years 7–9 ∙ Ages 11–14
    //             </p>
    //             <div className="mt-8">
    //               <Button link={"/"} title={"Browse Subjects"} />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-4 lg:px-8">
    //     <div
    //       className="max-w-8xl rounded-[40px] relative mx-auto"
    //       style={{
    //         backgroundImage: "url(./middle_School_Banner.jpg)",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full gap-5">
    //         {/* Left Side - Image */}
    //         <div className="w-full">
    //           <AnimationBottom>
    //             <Image
    //               src={"/bannerHero.jpg"}
    //               className="mx-auto w-full h-full  rounded-[40px]"
    //               alt="heroImage"
    //               width={300}
    //               height={200}
    //             />
    //           </AnimationBottom>
    //         </div>

    //         {/* Middle Card */}
    //         <div
    //           className="flex md:absolute md:transform  md:left-2/3 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2  lg:absolute lg:transform  lg:left-2/3 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 sm:absolute  sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-y-1 sm:-translate-x-1/2   justify-center items-center w-full md:col-span-1
    //         "
    //         >
    //           <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[60%] xl:w-[60%] bg-white rounded-xl shadow-lg p-8 sm:p-8 md:p-20 lg:p-32 min-h-[300px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[650px]">
    //             <div className="text-center">
    //               <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
    //                 Middle School Online
    //               </h2>
    //               <p className="mt-8 text-lg text-gray-600 sm:text-xl md:text-2xl lg:text-3xl">
    //                 Key Stage 3 Online ∙ Years 7–9 ∙ Ages 11–14
    //               </p>
    //               <div className="mt-8  text-sm sm:text-base md:text-lg lg:text-xl  ">
    //                 <Button link={"/"} title={"Browse Subjects"} />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
                <img
                  src={"/Senior-B.jpeg"}
                  className="mx-auto w-full h-full rounded-[40px]"
                  alt="heroImage"
                />
              </AnimationBottom>
            </div>

            {/* Middle Card */}
            <div className="flex justify-center items-center w-full md:col-span-1 md:absolute md:left-2/3 md:top-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/2">
              <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[60%] xl:w-[60%] bg-white rounded-xl shadow-lg p-8 sm:p-8 md:p-20 lg:p-32 min-h-[300px] sm:min-h-[450px] md:min-h-[400px] lg:min-h-[470px] overflow-hidden">
                <div className="text-center">
                  <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
                    Middle School Online
                  </h2>
                  <p className="mt-8 text-lg text-gray-600 sm:text-xl md:text-2xl lg:text-3xl">
                    Key Stage 3 Online ∙ Years 7–9 ∙ Ages 11–14
                  </p>
                  <div className="mt-8 text-sm sm:text-base md:text-lg lg:text-xl">
                    <Button link={"/"} title={"Browse Subjects"} />
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
