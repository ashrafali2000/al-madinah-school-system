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
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-6 lg:px-8">
    //     <div
    //       className="max-w-7xl rounded-[40px] w-full h-[600px] relative mx-auto "
    //       style={{
    //         backgroundImage: "url(./Al-MadinahN.png)",
    //         backgroundSize: " 100% 100%", // Adjust this percentage to decrease the height
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         borderRadius: "40px",
    //       }}
    //     >
    //       <div className="absolute mt-2 top-2/3 left-1/4 transform -translate-x-1/2 mx-auto w-11/12 sm:py-10">
    //         <div className="text-center  space-y-4">
    //           <AnimationPopUp>
    //             <h2 className="text-lg font-semibold tracking-tight  text-[#00477e] md:text-xl lg:text-2xl leading-tight animate-slideToCenter">
    //               Where Academic Excellence Meets Islamic Values
    //             </h2>
    //             <h2 className="text-lg font-semibold tracking-tight   text-[#00477e]  md:text-2xl lg:text-2xl leading-tight ">
    //               Learn Anywhere, Anytime.
    //             </h2>
    //           </AnimationPopUp>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-6 lg:px-8">
    //     <div
    //       className="max-w-7xl rounded-[40px] w-full h-[600px] relative mx-auto transition-transform duration-500 hover:rotate-3 hover:scale-105"
    //       style={{
    //         backgroundImage: "url(./Al-MadinahN.png)",
    //         backgroundSize: "100% 100%",
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         borderRadius: "40px",
    //         perspective: "1000px", // Add perspective for 3D effect
    //         transformStyle: "preserve-3d", // Maintain the 3D effect
    //         transition: "transform 0.6s ease", // Smooth transition for animation
    //       }}
    //     >
    //       <div className="absolute mt-2 top-2/3 left-1/4 transform -translate-x-1/2 mx-auto w-11/12 sm:py-10">
    //         <div className="text-center space-y-4">
    //           <AnimationPopUp>
    //             <h2 className="text-lg font-semibold tracking-tight text-[#00477e] md:text-xl lg:text-2xl leading-tight animate-slideToCenter">
    //               Where Academic Excellence Meets Islamic Values
    //             </h2>
    //             <h2 className="text-lg font-semibold tracking-tight text-[#00477e] md:text-2xl lg:text-2xl leading-tight">
    //               Learn Anywhere, Anytime.
    //             </h2>
    //           </AnimationPopUp>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-6 lg:px-8">
    //     <div
    //       className="max-w-7xl rounded-[40px] w-full h-[600px] relative mx-auto transition-transform duration-500 hover:rotate-3 hover:scale-105"
    //       style={{
    //         backgroundImage: "url(./Al-MadinahN.png)",
    //         backgroundSize: "100% 100%",
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         borderRadius: "40px",
    //         perspective: "1000px", // Add perspective for 3D effect
    //         transformStyle: "preserve-3d", // Maintain the 3D effect
    //         transition: "transform 0.6s ease", // Smooth transition for animation
    //       }}
    //     >
    //       <div className="absolute mt-2 top-2/3 left-1/4 transform -translate-x-1/2 mx-auto w-11/12 sm:py-10">
    //         <div className="text-center space-y-4">
    //           <AnimationPopUp>
    //             <h2
    //               className="text-lg font-semibold tracking-tight text-[#00477e] md:text-xl lg:text-2xl leading-tight animate-slideToCenter transition-transform duration-700 hover:rotateX-6 hover:rotateY-6"
    //               style={{
    //                 textShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)", // Adds shadow for depth
    //                 transform: "translateZ(20px)", // 3D translation for depth effect
    //               }}
    //             >
    //               Where Academic Excellence Meets Islamic Values
    //             </h2>
    //             <h2
    //               className="text-lg font-semibold tracking-tight text-[#00477e] md:text-2xl lg:text-2xl leading-tight transition-transform duration-700 hover:rotateX-6 hover:rotateY-6"
    //               style={{
    //                 textShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)", // Adds shadow for depth
    //                 transform: "translateZ(20px)", // 3D translation for depth effect
    //               }}
    //             >
    //               Learn Anywhere, Anytime.
    //             </h2>
    //           </AnimationPopUp>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-6 lg:px-8">
    //     <div
    //       className="max-w-7xl rounded-[40px] w-full h-[600px] relative mx-auto transition-transform duration-500 hover:rotate-3 hover:scale-105"
    //       style={{
    //         backgroundImage: "url(./Al-MadinahN.png)",
    //         backgroundSize: "100% 100%",
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         borderRadius: "40px",
    //         perspective: "1000px", // Perspective to create 3D depth
    //         transformStyle: "preserve-3d", // 3D effect is preserved in child elements
    //         transition: "transform 0.6s ease",
    //       }}
    //     >
    //       <div className="absolute mt-2 top-2/3 left-1/4 transform -translate-x-1/2 mx-auto w-11/12 sm:py-10">
    //         <div className="text-center space-y-4">
    //           <AnimationPopUp>
    //             {/* First Heading with 3D Text Effect */}
    //             <h2
    //               className="text-lg font-semibold tracking-tight text-[#00477e] md:text-xl lg:text-2xl leading-tight animate-slideToCenter transition-transform duration-700 hover:rotateX-6 hover:rotateY-6"
    //               style={{
    //                 textShadow:
    //                   "3px 3px 5px rgba(0, 0, 0, 0.4), -3px -3px 5px rgba(255, 255, 255, 0.2)", // Dual shadow for 3D depth
    //                 transform: "translateZ(30px) rotateX(15deg)", // 3D positioning and rotation
    //                 perspective: "500px", // Perspective for text rotation
    //               }}
    //             >
    //               Where Academic Excellence Meets Islamic Values
    //             </h2>

    //             {/* Second Heading with Neon Glow and 3D Skew */}
    //             <h2
    //               className="text-lg font-semibold tracking-tight text-[#00477e] md:text-2xl lg:text-2xl leading-tight transition-transform duration-700 hover:rotateX-6 hover:rotateY-6 hover:skewY-3"
    //               style={{
    //                 textShadow:
    //                   "0 0 10px #00477e, 0 0 20px #00477e, 0 0 30px rgba(0, 71, 126, 0.8)", // Neon glow effect
    //                 transform: "translateZ(40px) skewX(5deg) rotateY(10deg)", // Skew and rotation
    //                 transition: "transform 0.6s ease-in-out", // Smooth transitions
    //               }}
    //             >
    //               Learn Anywhere, Anytime.
    //             </h2>
    //           </AnimationPopUp>
    //         </div>
    //       </div>
    //
    //   <div className="relative isolate px-6 lg:px-8">
    //     <div
    //       className="max-w-7xl rounded-[40px] w-full h-[600px] relative mx-auto transition-transform duration-500 hover:rotate-3 hover:scale-105"
    //       style={{
    //         backgroundImage: "url(./Al-MadinahN.png)",
    //         backgroundSize: "100% 100%",
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         borderRadius: "40px",
    //         perspective: "1000px", // Perspective for 3D effect
    //         transformStyle: "preserve-3d", // 3D effect is preserved in child elements
    //         transition: "transform 0.6s ease",
    //       }}
    //     >
    //       <div className="absolute mt-2 top-2/3 left-1/4 transform -translate-x-1/2 mx-auto w-11/12 sm:py-10">
    //         <div className="text-center space-y-4">
    //           <AnimationPopUp>
    //             {/* First Heading with Bold on Hover */}
    //             <h2
    //               className="text-lg font-semibold tracking-wider text-[#00477e] md:text-xl lg:text-2xl leading-tight transition-all duration-700 hover:rotateX-6 hover:rotateY-6 hover:skewY-3 hover:blur-sm hover:text-blue-600 hover:font-bold" // Added hover:font-bold
    //               style={{
    //                 textShadow:
    //                   "0 0 10px #00477e, 0 0 20px #00477e, 0 0 30px rgba(0, 71, 126, 0.8)", // Neon glow effect
    //                 transform: "translateZ(40px) skewX(5deg) rotateY(10deg)", // Skew and rotation
    //                 letterSpacing: "0.1em", // Increased letter spacing for readability
    //               }}
    //             >
    //               Where Academic Excellence Meets Islamic Values
    //             </h2>

    //             {/* Second Heading with Bold on Hover */}
    //             <h2
    //               className="text-lg font-semibold tracking-wider text-[#00477e] md:text-2xl lg:text-2xl leading-tight transition-all duration-700 hover:rotateX-6 hover:rotateY-6 hover:skewY-3 hover:blur-sm hover:text-blue-600 hover:font-bold" // Added hover:font-bold
    //               style={{
    //                 textShadow:
    //                   "0 0 10px #00477e, 0 0 20px #00477e, 0 0 30px rgba(0, 71, 126, 0.8)", // Neon glow effect
    //                 transform: "translateZ(40px) skewX(5deg) rotateY(10deg)", // Skew and rotation
    //                 letterSpacing: "0.1em", // Increased letter spacing for readability
    //               }}
    //             >
    //               Learn Anywhere, Anytime.
    //             </h2>
    //           </AnimationPopUp>
    //         </div>
    //       </div>
    //
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-6 lg:px-8">
    //     <div
    //       className="max-w-7xl rounded-[40px] w-full h-[600px] relative mx-auto transition-transform duration-500 hover:rotate-3 hover:scale-105"
    //       style={{
    //         backgroundImage: "url(./Al-Madinah-L.png)",
    //         backgroundSize: "100% 100%",
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         borderRadius: "40px",
    //         perspective: "1000px", // Perspective for 3D effect
    //         transformStyle: "preserve-3d", // 3D effect is preserved in child elements
    //         transition: "transform 0.6s ease",
    //       }}
    //     >
    //       <div className="absolute grid grid-rows-2 mt-2 top-2/3 left-1/4 transform -translate-x-1/2 mx-auto w-11/12 sm:py-10">
    //         <div className="text-center  space-y-4">
    //           <AnimationPopUp>
    //             <h2
    //               className="text-base sm:text-xs md:text-xl lg:text-2xl font-semibold tracking-wider text-[#ff9a08] leading-tight transition-transform duration-700 hover:rotateX-6 hover:rotateY-6 hover:skewY-3 hover:blur-sm hover:text-blue-600"
    //               style={{
    //                 textShadow:
    //                   "0 0 10px #00477e, 0 0 20px #00477e, 0 0 30px rgba(0, 71, 126, 0.8)", // Neon glow effect
    //                 transform: "translateZ(40px) skewX(5deg) rotateY(10deg)", // Skew and rotation
    //               }}
    //             >
    //               Where Academic Excellence Meets Islamic Values
    //             </h2>

    //             <h2
    //               className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wider text-[#ff9a08] leading-tight transition-transform duration-700 hover:rotateX-6 hover:rotateY-6 hover:skewY-3 hover:blur-sm hover:text-blue-600"
    //               style={{
    //                 textShadow:
    //                   "0 0 10px #00477e, 0 0 20px #00477e, 0 0 30px rgba(0, 71, 126, 0.8)", // Neon glow effect
    //                 transform: "translateZ(40px) skewX(5deg) rotateY(10deg)", // Skew and rotation
    //                 letterSpacing: "0.1em", // Increased letter spacing for readability
    //               }}
    //             >
    //               Learn Anywhere, Anytime.
    //             </h2>
    //           </AnimationPopUp>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-6 lg:px-8">
    //     <div
    //       className="max-w-7xl rounded-[40px] w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative mx-auto transition-transform duration-500 hover:rotate-3 hover:scale-105"
    //       style={{
    //         backgroundImage: "url(./Al-MadinahN.png)",
    //         backgroundSize: "cover", // Ensure the background image scales properly
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         borderRadius: "40px",
    //         perspective: "1000px", // Perspective for 3D effect
    //         transformStyle: "preserve-3d", // 3D effect is preserved in child elements
    //         transition: "transform 0.6s ease",
    //       }}
    //     >
    //       {/* Grid container to manage text responsiveness */}
    //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto w-11/12 sm:py-10">
    //         <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center items-center">
    //           <AnimationPopUp>
    //             {/* First Heading in Grid Item */}
    //             <h2
    //               className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wider text-[#00477e] leading-tight transition-transform duration-700 hover:rotateX-6 hover:rotateY-6 hover:skewY-3 hover:blur-sm hover:text-blue-600"
    //               style={{
    //                 textShadow:
    //                   "0 0 10px #00477e, 0 0 20px #00477e, 0 0 30px rgba(0, 71, 126, 0.8)", // Neon glow effect
    //                 transform: "translateZ(40px) skewX(5deg) rotateY(10deg)", // Skew and rotation
    //                 letterSpacing: "0.1em", // Increased letter spacing for readability
    //               }}
    //             >
    //               Where Academic Excellence Meets Islamic Values
    //             </h2>

    //             {/* Second Heading in Grid Item */}
    //             <h2
    //               className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider text-[#00477e] leading-tight transition-transform duration-700 hover:rotateX-6 hover:rotateY-6 hover:skewY-3 hover:blur-sm hover:text-blue-600"
    //               style={{
    //                 textShadow:
    //                   "0 0 10px #00477e, 0 0 20px #00477e, 0 0 30px rgba(0, 71, 126, 0.8)", // Neon glow effect
    //                 transform: "translateZ(40px) skewX(5deg) rotateY(10deg)", // Skew and rotation
    //                 letterSpacing: "0.1em", // Increased letter spacing for readability
    //               }}
    //             >
    //               Learn Anywhere, Anytime.
    //             </h2>
    //           </AnimationPopUp>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-6 lg:px-8">
    //     <div
    //       className="max-w-7xl rounded-[40px] w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative mx-auto transition-transform duration-500 hover:rotate-3 hover:scale-105"
    //       style={{
    //         backgroundImage: "url(./Al-MadinahN.png)",
    //         backgroundSize: "cover", // Ensure the background image scales properly
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         borderRadius: "40px",
    //         perspective: "1000px", // Perspective for 3D effect
    //         transformStyle: "preserve-3d", // 3D effect is preserved in child elements
    //         transition: "transform 0.6s ease",
    //       }}
    //     >
    //       {/* Grid container to manage text responsiveness */}
    //       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 mx-auto w-11/12 sm:py-10">
    //         <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 text-left items-start">
    //           <AnimationPopUp>
    //             {/* First text div */}
    //             <div>
    //               <h2
    //                 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wider text-[#00477e] leading-tight transition-transform duration-700 hover:rotateX-6 hover:rotateY-6 hover:skewY-3 hover:blur-sm hover:text-blue-600"
    //                 style={{
    //                   textShadow:
    //                     "0 0 10px #00477e, 0 0 20px #00477e, 0 0 30px rgba(0, 71, 126, 0.8)", // Neon glow effect
    //                   transform: "translateZ(40px) skewX(5deg) rotateY(10deg)", // Skew and rotation
    //                   letterSpacing: "0.1em", // Increased letter spacing for readability
    //                 }}
    //               >
    //                 Where Academic Excellence Meets Islamic Values
    //               </h2>
    //             </div>

    //             {/* Second text div */}
    //             <div>
    //               <h2
    //                 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider text-[#00477e] leading-tight transition-transform duration-700 hover:rotateX-6 hover:rotateY-6 hover:skewY-3 hover:blur-sm hover:text-blue-600"
    //                 style={{
    //                   textShadow:
    //                     "0 0 10px #00477e, 0 0 20px #00477e, 0 0 30px rgba(0, 71, 126, 0.8)", // Neon glow effect
    //                   transform: "translateZ(40px) skewX(5deg) rotateY(10deg)", // Skew and rotation
    //                   letterSpacing: "0.1em", // Increased letter spacing for readability
    //                 }}
    //               >
    //                 Learn Anywhere, Anytime.
    //               </h2>
    //             </div>
    //           </AnimationPopUp>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-6 lg:px-8">
    //     <div
    //       className="max-w-7xl rounded-[40px] w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[630px] relative mx-auto "
    //       style={{
    //         backgroundImage: "url(./Al-Madinah-L.png)",
    //         backgroundSize: "cover", // Ensure the background image scales properly
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         borderRadius: "40px",
    //       }}
    //     >
    //       {/* Grid container to manage two equal-size divs */}
    //       <div className="absolute top-3/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 mt-7 w-11/12 sm:py-10">
    //         <div className="grid grid-rows-1 sm:grid-rows-2 gap-4 w-full h-full">
    //           {/* First Equal Size Div */}
    //           <div className="flex items-center flex-col w-[50%] sm:w-[50%]  md:w-[50%] justify-center mt-9 rounded-lg p-4">
    //             <h2 className="text-lg sm:text-lg md:text-xl lg:text-xl font-extrabold tracking-wider text-[#00477e] leading-tight">
    //               Where Academic Excellence Meets Islamic Values
    //             </h2>
    //             <h2 className="text-base font-extrabold sm:text-lg md:text-xl lg:text-xl  tracking-wider text-[#00477e] leading-tight">
    //               Learn Anywhere, Anytime.
    //             </h2>
    //           </div>

    //           {/* Second Equal Size Div */}
    //           <div className="flex items-center justify-center rounded-lg p-4"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-4 lg:px-2">
    //     <div
    //       className="max-w-7xl rounded-[40px] w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[600px] relative mx-auto"
    //       style={{
    //         backgroundImage: "url(./Herobanner1.png)",
    //         backgroundSize: "cover", // Ensure the background image scales properly
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         borderRadius: "40px",
    //       }}
    //     >
    //       {/* Grid container to manage two equal-size divs */}
    //       <div className="">
    //         <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-flow-cols-3 gap-4 w-full h-full">
    //           {/* First Equal Size Div */}
    //           <div className="flex items-center flex-col justify-center mt-9">
    //             <h2 className="cursor-pointer text-xs sm:text-sm text-center md:text-xl lg:text-2xl font-bold text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105">
    //               Where Academic Excellence Meets Islamic Values
    //             </h2>
    //             <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl font-bold tracking-wider text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105">
    //               Learn Anywhere, Anytime.
    //             </h2>
    //           </div>

    //           {/* Second Equal Size Div */}
    //           <div className="flex items-center justify-center rounded-lg p-8">
    //             <img
    //               src="/herobanner2.png"
    //               alt="herobanner2"
    //               className="h-114 w-108 object-cover"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-2 lg:px-2">
    //     <div
    //       className="max-w-7xl rounded-[40px] w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[590px] relative mx-auto"
    //       style={{
    //         backgroundImage: "url(./Herobanner1.png)",
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         borderRadius: "40px",
    //       }}
    //     >
    //       <div className="">
    //         <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-flow-cols-3  w-full h-full">
    //           {/* First Equal Size Div */}
    //           <div className="flex grid-cols-1 md:grid-cols-2 sm:grid-flow-cols-3 items-center flex-col justify-center ">
    //             <div>
    //               <img
    //                 src="/bannerImage3.png"
    //                 alt="herobanner2.png"
    //                 className="h-[550px] w-[650px]"
    //               />
    //             </div>
    //             <div>
    //               <h2 className="cursor-pointer text-center text-xs sm:text-sm  md:text-xl lg:text-2xl font-bold text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105">
    //                 Where Academic Excellence Meets Islamic Values
    //               </h2>
    //               <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl font-bold tracking-wider text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105">
    //                 Learn Anywhere, Anytime.
    //               </h2>
    //             </div>
    //           </div>

    //           {/* Second Equal Size Div */}
    //           <div className="flex items-center justify-center rounded-lg p-4">
    //             <div>
    //               <img
    //                 src="/herobanner2.png"
    //                 alt="herobanner2"
    //                 className="h-[550px] w-[650px] " // Custom height and width
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="pt-5 mt-20">
    //   <div className="relative isolate px-4 overflow-hidden">
    //     <div
    //       className="max-w-7xl rounded-[40px] h-[600px] relative mx-auto overflow-hidden"
    //       style={{
    //         backgroundImage: "url(./Herobanner1.png)",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className="grid grid-rows-1 md:grid-rows-2 items-center justify-center ">
    //         {/* Left Side - Image */}
    //         <div className="w-full flex  ">
    //           <AnimationLeft>
    //             <Image
    //               src={"/bannerImage3.png"}
    //               className="mx-auto w-full h-full rounded-[40px]"
    //               alt="heroImage"
    //               width={3000000}
    //               height={2000000}
    //             />
    //           </AnimationLeft>
    //         </div>
    //         <div className="w-full ">
    //           <h2 className="cursor-pointer text-center text-xs sm:text-sm  md:text-xl lg:text-2xl font-bold text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105">
    //             Where Academic Excellence Meets Islamic Values{" "}
    //           </h2>{" "}
    //           <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl font-bold tracking-wider text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105">
    //             Learn Anywhere, Anytime.{" "}
    //           </h2>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div
    //   style={{
    //     width: "100%",
    //     height: "100%",
    //     backgroundImage: "url(./main-bg.jpeg)",
    //     backgroundSize: "cover",

    //     filter: "blur(-6px)", // Applies blur effect to the background image
    //     zIndex: -1, // Keeps the background behind the content

    //     // backgroundSize: "cover", // Ensures the image covers the div entirely
    //     // filter: "blur(-2px)", // Applies the blur effect
    //   }}
    //   className="pt-5 mt-20"
    // >
    //   <div className="relative isolate px-4 overflow-hidden">
    //     <div
    //       className="max-w-7xl rounded-[40px] h-[600px] relative mx-auto "
    //       style={{
    //         backgroundImage: "url(./Herobanner1.png)",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       {/* Two Equal Divs */}
    //       <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
    //         {/* Left Side - Image */}
    //         <div className="flex flex-col items-center ">
    //           <div className="w-full flex justify-center">
    //             {/* <AnimationLeft> */}
    //             <Image
    //               src={"/bannerImage3.png"}
    //               className="w-80 h-[300px]"
    //               alt="heroImage"
    //               width={3000000}
    //               height={2000000}
    //             />
    //             {/* </AnimationLeft> */}
    //           </div>
    //           <div>
    //             <h2 className="cursor-pointer text-center text-xs sm:text-sm md:text-xl lg:text-2xl font-bold text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105">
    //               Where Academic Excellence Meets Islamic Values
    //             </h2>
    //             <h2 className="text-xs sm:text-sm text-center md:text-xl lg:text-2xl font-bold tracking-wider text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105 mt-4">
    //               Learn Anywhere, Anytime.
    //             </h2>
    //           </div>
    //         </div>

    //         {/* Right Side - Text */}
    //         <div className="flex justify-center">
    //           <AnimationRigth>
    //             <Image
    //               src={"/herobanner2.png"}
    //               alt="heroImage"
    //               className="w-96 h-[550px]"
    //               width={3000000}
    //               height={2000000}
    //             />
    //           </AnimationRigth>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
