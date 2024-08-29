import React from "react";
import Link from "next/link";
import AnimationBottom from "../../animations/AnimationBottom";
export default function MiddleSchoolInsight() {
  return (
    // <div className="bg-slate-100 pb-10 rounded-2xl px-5 m-8">
    //   <div className="gap-20 lg:gap-5 mx-auto my-20 py-20 max-w-5xl">
    //     <div className="flex flex-col items-center justify-center gap-5 text-center px-5">
    //       <p className="w-60 font-bold text-blue-500 py-2 px-4 border border-sky-400 rounded-full bg-slate-200">
    //         School insights
    //       </p>

    //       <p className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-700">
    //         Latest insights from our school
    //       </p>

    //       <div className="text-lg font-semibold">
    //         <p className="w-60 font-bold text-black py-5 px-4 border border-gray-400 rounded-lg bg-slate-200 hover:bg-gray-400 hover:text-white">
    //           <Link href={`/`}> VIEW ALL INSIGHTS</Link>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className=" bg-slate-100 pb-28 mb-5 max-w-7xl mx-auto">
    //     <AnimationBottom>
    //       <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3  mx-auto">
    //         <div className="group hover:shadow-2xl w-11/12 h-60 md:h-[250px] relative">
    //           <div className=" overflow-hidden">
    //             <img
    //               className="group-hover:scale-125 ease-in duration-300 w-full h-full"
    //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
    //             />
    //           </div>
    //           <span className="absolute  -bottom-7 -left-2 bg-white w-40 flex justify-center items-center rounded-[50px] pt-6 pb-6">
    //             20/02/2024
    //           </span>
    //           <p className="pt-5 text-lg font-semibold">
    //             {" "}
    //             Lorem Ipsum has been the industry's standard dummy text ever
    //             since the 1500s, when an unknown printer took a galley of{" "}
    //           </p>
    //         </div>
    //         <div className="group hover:shadow-2xl w-11/12 mt-32 lg:mt-0 h-60  md:h-[250px] relative">
    //           <div className=" overflow-hidden">
    //             <img
    //               className="group-hover:scale-125 ease-in duration-300 w-full h-full"
    //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
    //             />
    //           </div>
    //           <span className="absolute -bottom-7 -left-2 bg-white w-40 flex justify-center items-center rounded-[50px] pt-6 pb-6">
    //             20/02/2024
    //           </span>
    //           <p className="pt-5 text-lg font-semibold">
    //             {" "}
    //             Lorem Ipsum has been the industry's standard dummy text ever
    //             since the 1500s, when an unknown printer took a galley of{" "}
    //           </p>
    //         </div>
    //         <div className="w-11/12 h-60 group hover:shadow-2xl md:h-[250px]  mt-32 md:mt-40 lg:mt-0 relative">
    //           <div className=" overflow-hidden">
    //             <img
    //               className="group-hover:scale-125 ease-in duration-300 w-full h-full"
    //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
    //             />
    //           </div>
    //           <span className="absolute -bottom-7 -left-2 bg-white w-40 flex justify-center items-center rounded-[50px] pt-6 pb-6 ">
    //             20/02/2024
    //           </span>
    //           <p className="pt-5 text-lg font-semibold">
    //             {" "}
    //             Lorem Ipsum has been the industry's standard dummy text ever
    //             since the 1500s, when an unknown printer took a galley of{" "}
    //           </p>
    //         </div>
    //       </div>
    //     </AnimationBottom>
    //   </div>
    // </div>
    <div className="bg-slate-100 pb-10 rounded-2xl px-5 m-8">
      <div className="lg:gap-5 mx-auto py-20 max-w-5xl">
        <div className="flex flex-col items-center justify-center gap-5 text-center px-5">
          <p className="w-60 font-bold text-blue-500 py-2 px-4 border border-sky-400 rounded-full bg-slate-200">
            School insights
          </p>

          <p className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-700">
            Latest insights from our school
          </p>

          <div className="text-lg font-semibold">
            <p className="w-60 font-bold text-black py-5 px-4 border border-gray-400 rounded-lg bg-slate-200 hover:bg-gray-400 hover:text-white">
              <Link href={`/`}> VIEW ALL INSIGHTS</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 pb-28 mb-5 max-w-7xl mx-auto">
        <AnimationBottom>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 mx-auto">
            <div className="group hover:shadow-2xl w-11/12 h-60 md:h-[250px] relative">
              <div className="overflow-hidden">
                <img
                  className="group-hover:scale-125 ease-in duration-300 w-full h-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
                />
              </div>
              <span className="absolute -bottom-7 -left-2 bg-white w-40 flex justify-center items-center rounded-[50px] pt-6 pb-6">
                20/02/2024
              </span>
              <p className="pt-5 text-lg font-semibold">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of
              </p>
            </div>
            <div className="group hover:shadow-2xl w-11/12 mt-32 lg:mt-0 h-60 md:h-[250px] relative">
              <div className="overflow-hidden">
                <img
                  className="group-hover:scale-125 ease-in duration-300 w-full h-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
                />
              </div>
              <span className="absolute -bottom-7 -left-2 bg-white w-40 flex justify-center items-center rounded-[50px] pt-6 pb-6">
                20/02/2024
              </span>
              <p className="pt-5 text-lg font-semibold">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of
              </p>
            </div>
            <div className="w-11/12 h-60 group hover:shadow-2xl md:h-[250px] mt-32 md:mt-40 lg:mt-0 relative">
              <div className="overflow-hidden">
                <img
                  className="group-hover:scale-125 ease-in duration-300 w-full h-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
                />
              </div>
              <span className="absolute -bottom-7 -left-2 bg-white w-40 flex justify-center items-center rounded-[50px] pt-6 pb-6 ">
                20/02/2024
              </span>
              <p className="pt-5 text-lg font-semibold">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of
              </p>
            </div>
          </div>
        </AnimationBottom>
      </div>
    </div>
  );
}
