import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import {
  Pagination,
  Navigation,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { RiStarFill } from "react-icons/ri";
import Link from "next/link";

export const Rating = () => {
  const data = [
    {
      img: "this is perfect School",
      link: "King’s Interhigh is a fantastic educational option if your child cannot cope with traditional schooling",
      title: "06 June 2024",
    },

    {
      img: "King’s Interhigh is a fantastic…",
      link: "King’s Interhigh is a fantastic educational option if your child cannot cope with traditional schooling",
      title: " 06 June 2024",
    },
    {
      img: "The 5* is based on the registration…",
      link: "The 5* is based on the registration process as we are due to start in September '24...",
      title: "05 August 2024",
    },
    {
      img: "Kings InterHigh Is The Best Academic and Very Kind",
      link: "Kings InterHigh Is The Best Academic and Very Kind...",
      title: "26 July 2024",
    },
    {
      img: "My son has just finished his first year",
      link: "My son has just finished his first year…",
      title: "18 July 2024",
    },
    {
      img: "Absolutely brilliant",
      link: "I00% 5 star rating for Kings Interhigh. From the very first moment of speaking to the admin team I was so impressed...",
      title: "27 June 2024",
    },
  ];

  return (
    // <div className="grid grid-cols-1 md:grid-cols-9 gap-4 mx-auto pt-16 px-5">
    //   {/* First Div */}

    //   <Link href={`/`} className="flex flex-col gap-4 col-span-1">
    //     <div className="flex-row gap-5 items-center flex-wrap justify-center">
    //       <span className="text-base">Excellent</span>
    //       <div className="flex gap-1">
    //         <span className="bg-green-600 p-1">
    //           <RiStarFill className="text-white w-4 h-4" />
    //         </span>
    //         <span className="bg-green-600 p-1">
    //           <RiStarFill className="text-white w-4 h-4" />
    //         </span>
    //         <span className="bg-green-600 p-1">
    //           <RiStarFill className="text-white w-4 h-4" />
    //         </span>
    //         <span className="bg-green-600 p-1">
    //           <RiStarFill className="text-white w-4 h-4" />
    //         </span>
    //         <span className="bg-green-600 p-1">
    //           <RiStarFill className="text-white w-4 h-4" />
    //         </span>
    //       </div>
    //       <span className="text-sm"> Based on 633 reviews</span>
    //       <div className=" flex flex-row gap-2 items-center flex-wrap justify-center ">
    //         <RiStarFill className="text-green-600 w-5 h-5" />
    //         <span className="text-lg">TrustPilot</span>
    //       </div>
    //     </div>
    //   </Link>

    //   {/* Second Div - Swiper */}

    //   <div className="flex flex-row gap-1 col-span-8 pb-8">
    //     <Swiper
    //       slidesPerView={5} // Show 5 slides at a time
    //       spaceBetween={10} // Adjust space between slides
    //       speed={1000}
    //       navigation={{
    //         prevEl: "#swiper-button-prev",
    //         nextEl: "#swiper-button-next",
    //       }}
    //       modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    //       className="!relative"
    //       style={{
    //         "--swiper-navigation-color": "#fff",
    //         "--swiper-navigation-size": "25px",
    //       }}
    //     >
    //       {data.map((item, index) => (
    //         <SwiperSlide key={index} className="!bg-[#fff]">
    //           <div className="lg:px-10 bg-[#fff] py-1">
    //             <Link href={`/`}>
    //               <div className="flex flex-col items-center gap-1">
    //                 {/* Star Ratings */}
    //                 <div className="md:h-10 h-16 relative">
    //                   <div className="flex gap-1">
    //                     {[...Array(5)].map((_, starIndex) => (
    //                       <span key={starIndex} className="bg-green-600 p-1">
    //                         <RiStarFill className="text-white w-4 h-4" />
    //                       </span>
    //                     ))}
    //                   </div>
    //                 </div>
    //                 <div>
    //                   <h4 className="text-center text-sm  font-bold leading-none text-black mt-2">
    //                     {item.img}
    //                   </h4>
    //                 </div>
    //                 {/* Item Link */}
    //                 <div>
    //                   <h4 className="text-center text-sm leading-none text-black mt-2">
    //                     {item.link}
    //                   </h4>
    //                 </div>

    //                 {/* Item Title */}
    //                 <div>
    //                   <h4 className="text-center text-sm leading-none text-black mt-2">
    //                     {item.title}
    //                   </h4>
    //                 </div>
    //               </div>
    //             </Link>
    //           </div>
    //         </SwiperSlide>
    //       ))}

    //       {/* Navigation Buttons */}
    //       <div
    //         id="swiper-button-prev"
    //         className="bg-white !absolute left-2 top-1/2 z-10 rounded-full group hover:bg-teal-500 transition duration-500"
    //       >
    //         <BsArrowLeftCircleFill className="text-gray w-8 h-8 font-extrabold cursor-pointer group-hover:text-white transition duration-500" />
    //       </div>
    //       <div
    //         id="swiper-button-next"
    //         className="bg-white !absolute top-1/2 z-10 right-2 rounded-full group hover:bg-teal-500 transition duration-500"
    //       >
    //         <BsArrowRightCircleFill className="text-gray w-8 h-8 font-extrabold cursor-pointer group-hover:text-white transition duration-500" />
    //       </div>
    //     </Swiper>
    //   </div>
    // </div>
    <div className="grid grid-cols-1 md:grid-cols-9 gap-4 mx-auto pt-16 px-5">
      {/* First Div */}
      <Link
        href={`/`}
        className="flex flex-col gap-4 col-span-1   items-center  justify-center"
      >
        <div className="flex flex-col gap-2 items-center   justify-center text-center w-full">
          <span className="text-base">Excellent</span>
          <div className="flex gap-1 justify-center">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="bg-green-600 p-1">
                <RiStarFill className="text-white w-4 h-4" />
              </span>
            ))}
          </div>
          <span className="text-sm">Based on 633 reviews</span>
          <div className="flex flex-row gap-2 items-center justify-center">
            <RiStarFill className="text-green-600 w-5 h-5" />
            <span className="text-lg">TrustPilot</span>
          </div>
        </div>
      </Link>

      {/* Second Div - Swiper */}
      <div className="flex flex-row gap-4 col-span-8 mt-4 pb-8">
        <Swiper
          slidesPerView={1} // Default to showing 1 slide (for mobile)
          breakpoints={{
            640: {
              slidesPerView: 1, // Show 1 slide on screens wider than 640px
            },
            768: {
              slidesPerView: 3, // Show 3 slides on screens wider than 768px
            },
            1024: {
              slidesPerView: 5, // Show 5 slides on screens wider than 1024px
            },
          }}
          spaceBetween={10}
          speed={1000}
          navigation={{
            prevEl: "#swiper-button-prev",
            nextEl: "#swiper-button-next",
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="!relative"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "25px",
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="!bg-[#fff]">
              <div className="lg:px-10 bg-[#fff] py-1">
                <Link href={`/`}>
                  <div className="flex flex-col items-center gap-1">
                    {/* Star Ratings */}
                    <div className="md:h-10 h-16 relative">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <span key={starIndex} className="bg-green-600 p-1">
                            <RiStarFill className="text-white w-4 h-4" />
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-center text-sm font-bold leading-none text-black mt-2">
                        {item.img}
                      </h4>
                    </div>
                    {/* Item Link */}
                    <div>
                      <h4 className="text-center text-sm sm:text-base leading-none text-black mt-1 px-2 w-full max-w-[90%] mx-auto">
                        {item.link}
                      </h4>
                    </div>
                    {/* Item Title */}
                    <div>
                      <h4 className="text-center text-sm leading-none text-black mt-2">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          {/* <div
            id="swiper-button-prev"
            className="bg-white !absolute left-2 top-1/2 z-10 rounded-full group hover:bg-teal-500 transition duration-500"
          >
            <BsArrowLeftCircleFill className="text-gray w-8 h-8 font-extrabold cursor-pointer group-hover:text-white transition duration-500" />
          </div>
          <div
            id="swiper-button-next"
            className="bg-white !absolute top-1/2 z-10 right-2 rounded-full group hover:bg-teal-500 transition duration-500"
          >
            <BsArrowRightCircleFill className="text-gray w-8 h-8 font-extrabold cursor-pointer group-hover:text-white transition duration-500" />
          </div> */}
          {/* Navigation Buttons */}
          <div
            id="swiper-button-prev"
            className="bg-white !absolute left-2 top-1/2 z-10 rounded-full group hover:bg-teal-500 transition duration-500 md:left-4 md:w-10 md:h-10 w-8 h-8"
          >
            <BsArrowLeftCircleFill className="text-gray w-full h-full font-extrabold cursor-pointer group-hover:text-white transition duration-500" />
          </div>
          <div
            id="swiper-button-next"
            className="bg-white !absolute top-1/2 z-10 right-2 rounded-full group hover:bg-teal-500 transition duration-500 md:right-4 md:w-10 md:h-10 w-8 h-8"
          >
            <BsArrowRightCircleFill className="text-gray w-full h-full font-extrabold cursor-pointer group-hover:text-white transition duration-500" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};
