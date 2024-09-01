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

export const SeniorTeacherSlider = () => {
  const data = [
    {
      img: "./family2.jpg",
      link: "Joel A. Hofer",
      title: "Head of Mddile School",
    },

    {
      img: "./family2.jpg",
      link: "Abraham",
      title: " Leader of learning Science",
    },
    {
      img: "./family2.jpg",
      link: "Alan",
      title: "Leader of Bussiness and Economics",
    },
    {
      img: "./family2.jpg",
      link: "Eva Snap ",
      title: "Head of faculty-English",
    },
    {
      img: "./family2.jpg",
      link: "farhan Ahmed",
      title: "Leader of Bussiness and Economics",
    },
    {
      img: "./family2.jpg",
      link: "Sea Edward",
      title: "Leader of Learnng History",
    },
  ];

  return (
    <div className="grid grid-cols-9 gap-4 mx-auto pb-8 pt-16 px-5">
      {/* Second Div - Swiper */}
      <div className="flex flex-row gap-1 col-span-9 pb-8">
        <Swiper
          slidesPerView={3} // Default to showing 3 slides at a time
          spaceBetween={20} // Space between slides
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
          breakpoints={{
            320: {
              // Mobile screens
              slidesPerView: 1, // Show 1 slide at a time
              spaceBetween: 10, // Adjust space between slides for mobile
            },
            640: {
              // Small screens and up
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              // Medium screens and up
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              // Large screens and up
              slidesPerView: 3, // Adjust as needed for larger screens
              spaceBetween: 20,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="lg:px-5 py-2 transform transition-transform duration-300 hover:-rotate-3">
                <Link href={`/`}>
                  <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-lg shadow-lg">
                    <div className="w-auto h-auto flex items-center justify-center overflow-hidden">
                      <img
                        src={item.img}
                        alt={`Image ${index}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-center text-lg font-bold leading-none text-black mt-2">
                      {item.link}
                    </h4>
                    <p className="text-center text-sm leading-none text-gray-500 mt-2">
                      {item.title}
                    </p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div
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
          </div>
        </Swiper>
      </div>
    </div>
  );
};
