import React from "react";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimatedComponentRight from "../../animations/AnimationRigth";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function SeniorSchoolStories() {
  return (
    <div className="bg-white pb-10 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-5 mx-auto my-20 py-20 pb-18 max-w-7xl">
        <AnimatedComponentLeft>
          <div className="w-full relative">
            <Swiper
              navigation={{
                nextEl: "#slider-button-right",
                prevEl: "#slider-button-left",
              }}
              pagination={{ clickable: true, el: ".swiper-pagination" }}
              modules={[Navigation, Pagination]}
              className="fraction-slide-carousel swiper-container relative"
            >
              <div className="swiper-wrapper mt-10">
                <SwiperSlide>
                  <div className="flex justify-center items-center mt-9 pb-4 rotate-6">
                    <div className="bg-yellow-300 rounded-2xl h-112 w-96 flex flex-col items-center p-6 gap-4">
                      <img
                        src="/girl.jpg"
                        alt="Mrs Kanagasabai"
                        className="w-28 h-28 rounded-full object-cover"
                      />
                      <p className="text-2xl font-semibold text-indigo-600">
                        Mrs Kanagasabai
                      </p>
                      <p className="text-lg font-medium text-indigo-500">
                        King’s InterHigh Parent
                      </p>
                      <p className="text-base text-center text-gray-700">
                        “Since joining King’s InterHigh, my children have become
                        independent learners. They don’t depend on me for help
                        any more. They can research by themselves and present
                        what they’ve learned directly to their teachers.”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex justify-center items-center mt-9 pb-4 -rotate-6">
                    <div className="bg-orange-500 rounded-2xl h-112 w-96 flex flex-col items-center p-6 gap-4">
                      <img
                        src="/bannerHero.jpg"
                        alt="Jessica"
                        className="w-28 h-28 rounded-full object-cover"
                      />
                      <p className="text-2xl font-semibold text-indigo-600">
                        Jessica
                      </p>
                      <p className="text-lg font-medium text-indigo-500">
                        King’s InterHigh Student
                      </p>
                      <p className="text-base text-center text-gray-700">
                        “My grades have improved, I have more time to do extra
                        stuff – it’s amazing. I feel happy now, I can relax, I’m
                        not on the edge all the time. I don’t hate going to
                        school anymore.”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex justify-center items-center mt-9 pb-4 rotate-6">
                    <div className="bg-green-500 rounded-2xl h-112 w-96 flex flex-col items-center p-6 gap-4">
                      <img
                        src="/boy1.jpg"
                        alt="Auraine"
                        className="w-28 h-28 rounded-full object-cover"
                      />
                      <p className="text-2xl font-semibold text-indigo-600">
                        Auraine
                      </p>
                      <p className="text-lg font-medium text-indigo-500">
                        King’s InterHigh Student
                      </p>
                      <p className="text-base text-center text-gray-700">
                        “If I cannot attend my live lessons because of horse
                        riding training, I plan to watch recordings the day
                        after. We always find solutions with the teachers to
                        deal with everything.”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>

            {/* Navigation buttons */}
            <div className="flex items-center gap-8 lg:justify-start justify-center text-green-500">
              <button
                id="slider-button-left"
                className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-black  bg-white !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8 !left-5 hover:bg-slate-50"
              ></button>
              <button
                id="slider-button-right"
                className="swiper-button-next group !p-2 flex justify-center bg-white items-center border border-solid border-black !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8 !right-5 hover:bg-slate-50"
              >
                <svg
                  className="h-4 w-4 text-black group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </AnimatedComponentLeft>
        <AnimatedComponentRight>
          <div className="flex flex-col gap-8 px-5 place-items-center mt-12  justify-center">
            <p className="inline-block font-bold  text-blue-500 py-2 px-6 border-2 border-sky-400 rounded-full bg-slate-200 ">
              Student stories
            </p>

            <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-gray-700 text-center">
              Don't just take our word for it. Hear from our students.
            </h2>
            <Link
              href={`/`}
              className="text-lg font-semibold  text-blue-500 py-2 px-6 border-2 hover:bg-gray-500 hover:text-white border-sky-400 rounded-md "
            >
              <p>VIEW MORE STORIES</p>
            </Link>
          </div>
        </AnimatedComponentRight>
      </div>
    </div>
  );
}
