import React, { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { ImYoutube } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { RiStarFill } from "react-icons/ri";
import Link from "next/link";
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
export const Footer = () => {
  const [dropdown, setDropDown] = useState(false);
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
  return (
    <footer className="rounded-[40px]  bg-white max-w-7xl border-4  border-gray-700   mx-auto">
      <div className="mx-auto w-full  py-4 lg:py-4">
        <div className="md:flex ">
          <div className=" flex flex-col  ">
            <div className="  md:mb-0 ml-20">
              <a href="/" className="">
                <img src="./logo.png" className="h-32 " alt="FlowBite Logo" />
              </a>
            </div>
            <div className="flex pl-10 flex-col items-center gap-2">
              <div className="flex flex-col  gap-3 pt-10 ">
                <p className="text-md text-gray-800 text-center">07878165910</p>
                <p className="text-md text-gray-800 text-center">
                  info@almadinahonline.co.uk
                </p>
              </div>

              <div className="flex ">
                <a href="#" className="text-gray-900">
                  <FaFacebook className="w-7 h-7 text-gray-700 transition duration-500 hover:text-gray-500" />
                  <span className="sr-only">Facebook page</span>
                </a>

                <a
                  href="#"
                  className="text-gray-700 transition duration-500 hover:text-gray-500 ms-5"
                >
                  <svg
                    className="w-7 h-7"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-700 ms-5">
                  <IoLogoInstagram className="w-7 h-7 text-gray-700 transition duration-500 hover:text-gray-500" />
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-700 ms-5">
                  <ImYoutube className="w-7 h-7 text-gray-700 transition duration-500 hover:text-gray-500" />
                  <span className="sr-only">Twitter page</span>
                </a>
              </div>
            </div>
          </div>

          {/* <div className=" mx-auto px-4 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4"> */}
          {/* <div>
              <h2 className="mb-6 text-lg font-bold text-gray-800 uppercase">
                Partners
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Schools
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Sports Academies
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Agents
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Resource Portal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold text-gray-800 uppercase ">
                Our Schools
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Alumni
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Feedback
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    HomeSchooling Support
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Conditions Of Attendance
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Learning From Aboard
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Safeguarding
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    School Policies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold text-gray-800 uppercase ">
                Learning Stages
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Secondary
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    GCSE
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold text-gray-800 uppercase">
                Updates
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Our Community
                  </a>
                </li>
              </ul>
            </div> */}
          <div className="grid grid-cols-9 gap-4   ">
            {/* First Div */}

            {/* Second Div - Swiper */}
            <div className="flex flex-row gap-1  col-span-9 pb-8">
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
                    <div className="lg:px-5 py-6  transform transition-transform duration-300 hover:-rotate-3">
                      <Link href={`/`}>
                        <div className="flex flex-col border border-gray-400 items-center gap-3 bg-white p-6 rounded-lg shadow-lg">
                          <div className="w-auto h-auto flex items-center justify-center overflow-hidden">
                            <img
                              src={item.img}
                              alt={`Image ${index}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <h4 className="text-center text-lg font-bold leading-none text-black mt-2">
                            {/* {item.link} */}
                          </h4>
                          <p className="text-center text-sm leading-none text-gray-500 mt-2">
                            {/* {item.title} */}
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
          {/* </div> */}
        </div>
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
        {/* <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center text-gray-700">
            © 2024{" "}
            <a href="https://bawdicsoft.com/" className="hover:underline">
              Bawdicsoft™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-900">
              <FaFacebook className="w-5 h-5 text-gray-700" />
              <span className="sr-only">Facebook page</span>
            </a>

            <a href="#" className="text-gray-700 ms-5">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-700 ms-5">
              <IoLogoInstagram className="w-5 h-5 text-gray-500" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-700 ms-5">
              <ImYoutube className="w-5 h-5 text-gray-500" />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div> */}

        {/* mid footer */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
          <div className="flex flex-col gap-3 ">
            <span className="text-xs">Accreditations</span>
            <div className="flex gap-3 bg-gray-200 p-4">
              <img src="./cambridge_assessment.svg" alt="image" />
              <p className="text-xs">
                Al Madinah School is a registered online Cambridge International
                School.
              </p>
            </div>
          </div>
        </div> */}
        {/* last footer */}
      </div>
      {/* <hr className="h-[1px] bg-gray-300" /> */}
      <div className="">
        <div className=" mx-auto  max-w-7xl text-sm p-2">
          {/* <div className="flex text-center  gap-4"> */}
          {/* <Link href={"/"}>Privacy policy</Link> */}
          {/* <Link href={"/"}>Terms of Use</Link> */}
          {/* <Link href={"/"}>Refundes</Link> */}
          {/* <Link href={"/"}>Website by Bawdicsoft</Link> */}
          {/* <Link href={"/"}>Show Company details</Link> */}
          {/* <Link href={"/"}>Show Company details</Link> */}
          {/* </div> */}
          <p className="text-center">
            {" "}
            All Rights Are Reserved By{" "}
            <span className="text-[#00477e]">Al-Madinah School</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};
