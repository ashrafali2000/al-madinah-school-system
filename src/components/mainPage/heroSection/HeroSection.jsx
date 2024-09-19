"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AnimationPopUp from "../../animations/AnimationPopup";
import AnimationBottom from "../../animations/AnimationBottom";
import AnimationLeft from "../../animations/AnimationLeft";
import AnimationRigth from "../../animations/AnimationRigth";
import { Button } from "../../middleSchool/button/Button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Pagination,
  Navigation,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import HeroBannerSlider from "../../heroSlider/HeroSectionSlider";
export default function HeroSection() {
  const heroImage = [
    { img: "/Herobanner2.png" },
    { img: "/newImges/register.png" },
  ];
  const data = [
    {
      img: "/newImges/1.jpg",
      link: "Joel A. Hofer",
      title: "Head of Mddile School",
    },

    {
      img: "/newImges/2.jpg",
      link: "Alan",
      title: "Leader of Bussiness and Economics",
    },
    {
      img: "/newImges/3.jpg",
      link: "Alan",
      title: "Leader of Bussiness and Economics",
    },
    {
      img: "/newImges/5.jpg",
      link: "Alan",
      title: "Leader of Bussiness and Economics",
    },
    {
      img: "/newImges/4.jpg",
      link: "Eva Snap ",
      title: "Head of faculty-English",
    },
    {
      img: "/newImges/8.jpg",
      link: "farhan Ahmed",
      title: "Leader of Bussiness and Economics",
    },
    {
      img: "/newImges/9.jpg",
      link: "Sea Edward",
      title: "Leader of Learnng History",
    },
    {
      img: "/newImges/10.jpg",
      link: "Sea Edward",
      title: "Leader of Learnng History",
    },
    {
      img: "/newImges/6.jpg",
      link: "Sea Edward",
      title: "Leader of Learnng History",
    },
    {
      img: "/newImges/11.jpg",
      link: "Sea Edward",
      title: "Leader of Learnng History",
    },
  ];
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const handleUpdate = (newIndex) => {
  //   if (newIndex < 0 || newIndex > 2) {
  //     newIndex = 0;
  //   } else if (newIndex >= heroImage.length) {
  //     newIndex = heroImage.length - 1;
  //   }
  //   setCurrentIndex(newIndex);
  // };
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     handleUpdate(currentIndex + 1);
  //   }, 10000);

  //   return () => clearInterval(intervalId);
  // }, [currentIndex, heroImage]);
  return (
    // <div className="relative pt-10 pb-5 mt-20 mb-6">
    //   {/* Blurred Background Image */}

    //   {/* Foreground Content */}
    //   <div className="relative isolate px-4 overflow-hidden">
    //     <div
    //       className="max-w-7xl border-4 border-gray-700 rounded-[40px] h-auto relative mx-auto"
    //       style={{
    //         backgroundImage: "url(./herobanner1.png)",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       {/* Two Equal Divs */}
    //       <div className="grid grid-cols-1 gap-40  md:grid-cols-2 items-center h-full">
    //         {/* Left Side - Image */}
    //         <div className="flex flex-col items-center">
    //           <div className="w-full flex justify-center animate-slide-in-left">
    //             <Image
    //               src={"/bannerImage3.png"}
    //               className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto"
    //               alt="heroImage"
    //               width={3000000}
    //               height={2000000}
    //             />
    //           </div>
    //           <div className="animate-slide-in-left text-center mt-4">
    //             <h2 className="cursor-pointer text-xs sm:text-sm md:text-xl lg:text-2xl font-bold text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105">
    //               Where Academic Excellence Meets Islamic Values
    //             </h2>
    //             <h2 className="cursor-pointer text-xs sm:text-sm md:text-xl lg:text-2xl font-bold tracking-wider text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105 mt-2">
    //               Learn Anywhere, Anytime.
    //             </h2>
    //           </div>
    //         </div>

    //         {/* Right Side - Text */}
    //         <div className="flex justify-center">
    //           <AnimationRigth>
    //             {/* {heroImage.map((d) => (
    //               <Image
    //                 src={d.img}
    //                 alt="heroImage"
    //                 className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto animate-slide-in-right"
    //                 width={3000000}
    //                 height={2000000}
    //               />
    //             ))} */}
    //             <div className="grid grid-cols-12   ">
    //               {/* First Div */}

    //               {/* Second Div - Swiper */}
    //               <div className="flex flex-row  col-span-12">
    //                 <Swiper
    //                   slidesPerView={1} // Default to showing 3 slides at a time
    //                   // spaceBetween={20} // Space between slides
    //                   speed={3000}
    //                   autoplay={{
    //                     delay: 1,
    //                     disableOnInteraction: false,
    //                   }}
    //                   loop={true}
    //                   modules={[Autoplay]}
    //                   className=""
    //                   // style={{
    //                   //   "--swiper-navigation-color": "#fff",
    //                   //   "--swiper-navigation-size": "25px",
    //                   // }}
    //                   // breakpoints={{
    //                   //   320: {
    //                   //     // Mobile screens
    //                   //     slidesPerView: 1, // Show 1 slide at a time
    //                   //     spaceBetween: 10, // Adjust space between slides for mobile
    //                   //   },
    //                   //   640: {
    //                   //     // Small screens and up
    //                   //     slidesPerView: 2,
    //                   //     spaceBetween: 15,
    //                   //   },
    //                   //   768: {
    //                   //     // Medium screens and up
    //                   //     slidesPerView: 3,
    //                   //     spaceBetween: 20,
    //                   //   },
    //                   //   1024: {
    //                   //     // Large screens and up
    //                   //     slidesPerView: 3, // Adjust as needed for larger screens
    //                   //     spaceBetween: 20,
    //                   //   },
    //                   // }}
    //                 >
    //                   {heroImage.map((item, index) => (
    //                     <SwiperSlide key={index}>
    //                       <div className=" w-[450px]  h-[620px]">
    //                         {/* <Link href={`/`}> */}
    //                         {/* <div className="flex flex-col border border-gray-400 items-center rounded-lg shadow-lg"> */}
    //                         <div className="w-full h-full">
    //                           <img
    //                             src={item.img}
    //                             alt={`Image ${index}`}
    //                             className="w-full h-full rounded-lg"
    //                           />
    //                         </div>
    //                         {/* </div> */}
    //                         {/* </Link> */}
    //                       </div>
    //                     </SwiperSlide>
    //                   ))}
    //                 </Swiper>
    //               </div>
    //             </div>
    //           </AnimationRigth>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <HeroBannerSlider />
    </div>
  );
}
