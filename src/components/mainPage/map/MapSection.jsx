import AnimationBottom from "../../animations/AnimationBottom";
import { BorderButton } from "../borderButton/BorderButton";

const MapSection = () => {
  return (
    // New Code
    <div className="flex flex-col gap-10 py-14 md:py-16 pb-80 bg-slate-100 px-5">
      <div className="flex justify-center items-center">
        <p className="text-2xl lg:text-4xl text-gray-700 font-bold text-center w-6/12 py-2 px-4">
          Delivering the Full UK curriculum internationally
        </p>
      </div>
      <div className="md:w-[700px] lg:w-[1000px] w-full h-[450px] max-w-7xl lg:px-8 mx-auto">
        <iframe
          className="h-full w-full rounded-3xl"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Farazana+building+karachi+pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          scrolling="no"
        ></iframe>
      </div>
      <AnimationBottom>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto pt-5 pb-20 ">
          <div className="bg-white p-6 flex flex-col gap-3 shadow-2xl pb-10">
            <p className="text-2xl font-semibold text-gray-700">UK Timetable</p>
            <p className="text-lg font-semibold">GMT/BST</p>
            <BorderButton title={"Learn more"} link={"/"} />
          </div>
          <div className="bg-white  p-6 flex flex-col gap-3 shadow-2xl pb-10">
            <p className="text-2xl font-semibold text-gray-700">
              Middle East Timetable
            </p>
            <p className="text-lg font-semibold">GST/GMT+4</p>
            <BorderButton title={"Learn more"} link={"/"} />
          </div>
          <div className="bg-white p-6 flex flex-col gap-3 shadow-2xl pb-10">
            <p className="text-2xl font-semibold text-gray-700">
              Southeast Asia Timetable
            </p>
            <p className="text-lg font-semibold">GMT+7</p>
            <BorderButton title={"Learn more"} link={"/"} />
          </div>
        </div>
      </AnimationBottom>
    </div>
  );
};
export default MapSection;
