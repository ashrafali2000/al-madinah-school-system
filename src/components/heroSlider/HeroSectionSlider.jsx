"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// import { useContentContext } from "../contextApi/contentContext";

const HeroBannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const contentContext = useContentContext();
  // const data = contentContext.content;

  // const mainSlider = foodBoxData[0]?.content?.mainSlider;
  // const heroImage = mainSlider;
  const heroImage = [
    { img: "/newImges/al-madinah-banner-pic.png", titl: "firstimg" },
    { img: "/newImges/register.png" },
    // { img: "/newImges/1.jpg" },
    // { img: "/newImges/2.jpg" },
    // { img: "/newImges/3.jpg" },
  ];
  const handleUpdate = (newIndex) => {
    if (newIndex < 0 || newIndex > 1) {
      newIndex = 0;
    } else if (newIndex >= heroImage.length) {
      newIndex = heroImage.length - 1;
    }
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleUpdate(currentIndex + 1);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex, heroImage]);

  return (
    <div className="md:h-[370px] lg:h-[650px] mt-40 h-[300px] w-full max-w-7xl border-4 border-gray-700 rounded-[40px] mx-auto flex items-center text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <div className="overflow-hidden w-full h-full flex flex-col justify-center">
          <div
            className="transform duration-1000 whitespace-nowrap h-full"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
          >
            {heroImage?.map((data, index) => (
              <div
                className="inline-flex w-full relative items-center justify-center h-full bg-white"
                key={index}
              >
                <Image
                  className="w-full h-full md:object-fill object-fill"
                  src={data.img}
                  alt=""
                  width={1200}
                  height={1200}
                />
                {data.titl && (
                  // <div className="absolute top-60 mt-2 left-48 lg:ml-24 lg:left-1/3 transform -translate-x-3/4 -translate-y-3/4 lg:top-[550px] sm:top-[50px] md:w-auto md:top-[320px] md:left-1/3 sm:left-1/3 sm:mt-2 w-full">
                  //   <div className="animate-slide-in-left text-center md:w-[300px] lg:w-auto">
                  //     <h2 className="cursor-pointer text-xs sm:text-xs md:text-xl lg:text-2xl font-bold text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105 break-words sm:w-full whitespace-normal">
                  //       Where Academic Excellence Meets Islamic Values
                  //     </h2>

                  //     <h2 className="cursor-pointer text-xs sm:text-sm md:text-xl lg:text-2xl font-bold tracking-wider text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105 mt-2">
                  //       Learn Anywhere, Anytime.
                  //     </h2>
                  //   </div>
                  // </div>
                  <div className="absolute top-60 mt-6 left-48  lg:ml-22 lg:left-1/3 transform -translate-x-3/4 -translate-y-3/4 lg:top-[550px] sm:top-[50px] md:w-auto md:top-[320px] md:left-1/3 sm:left-1/3 sm:mt-2 w-full">
                    <div className="animate-slide-in-left text-center md:w-[300px] lg:w-auto">
                      <h2 className="cursor-pointer text-xs sm:text-xs md:text-xl lg:text-2xl font-bold text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105 break-words sm:w-full whitespace-normal">
                        Where Academic Excellence
                        <span className="hidden sm:inline">
                          {" "}
                          meets Islamic Values
                        </span>{" "}
                        {/* Default for non-mobile screens */}
                        <span className="sm:hidden block">
                          {" "}
                          <br /> meets Islamic Values
                        </span>{" "}
                        {/* Line break for mobile screens */}
                      </h2>

                      <h2 className="cursor-pointer text-xs sm:text-sm md:text-xl lg:text-2xl font-bold tracking-wider text-[#00477e] hover:text-[#ffa500] transition duration-300 transform hover:scale-105 mt-2">
                        Learn Anywhere, Anytime.
                      </h2>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-20 absolute left-0 transform -translate-y-1/2 z-40">
        <div className="max-w-[1200px] mx-auto px-2 h-full flex justify-between items-end mt-6 lg:mt-0">
          <div
            className="md:w-12 md:h-12 w-6 h-6 cursor-pointer relative flex items-center justify-center"
            onClick={() => {
              handleUpdate(currentIndex - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="md:w-12 md:h-12 w-6 h-6 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <div className="bg-sky-800  shadow-inner md:w-16 md:h-16 w-12 h-12 z-[-1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-tr rounded-br xl:rounded"></div>
          </div>
          <div
            className="md:w-12 md:h-12 w-6 h-6 cursor-pointer relative flex items-center"
            onClick={() => {
              handleUpdate(currentIndex + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="md:w-12 md:h-12 w-6 h-6 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <div className="bg-sky-800   shadow-inner md:w-16 md:h-16 w-12 h-12 z-[-1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-tl rounded-bl xl:rounded"></div>
          </div>
        </div>
      </div>
      {/* <div
        className="absolute animate-pulse opacity-30 md:block hidden maskanimation2 -bottom-[1%] right-0 w-full bg-no-repeat bg-center bg-cover z-[3] 2xl:h-[320px] xl:h-[260px] lg:h-[230px] h-[300px]"
        style={{ backgroundImage: `url(/img/mask1.svg)` }}
      ></div> */}
      {/* <div
        className="absolute  opacity-40 md:block hidden maskanimat1on -bottom-[1%] right-0 w-full bg-no-repeat bg-center bg-cover z-[3] 2xl:h-[320px] xl:h-[260px] lg:h-[230px] h-[300px]"
        style={{ backgroundImage: `url(/img/mask2.svg)` }}
      ></div> */}
      <div
        className="absolute animate-pulse opacity-5 md:block hidden -bottom-[1%] right-0 w-full bg-no-repeat bg-center bg-cover z-[3] 2xl:h-[320px] xl:h-[260px] lg:h-[230px] h-[300px]"
        style={{ backgroundImage: `url(/img/mask3.svg)` }}
      ></div>
    </div>
  );
};

export default HeroBannerSlider;
