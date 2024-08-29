import React from "react";
import { Button } from "../button/Button";
import AnimationBottom from "../../animations/AnimationBottom";
import AnimationPopUp from "../../animations/AnimationPopup";

export const SchoolCard = () => {
  const schoolCardList = [
    {
      studentImg: "./girl.jpg",
      schoolName: "Middle School",
      key_stage: "Key Stage 3",
      year: "Years 7–9 | Ages 11–14",
      link: "/middleSchool",
      linkTitle: "Middle School",
    },
    {
      studentImg: "./boy.jpg",
      schoolName: "Senior School (GCSE)",
      key_stage: "Key Stage 4",
      year: "Years 10–11 | Ages 14–16",
      link: "/",
      linkTitle: "Senior School",
    },
  ];
  return (
    <AnimationBottom>
      <div className="flex flex-wrap gap-8 justify-center">
        {schoolCardList.map((item, index) => (
          <div
            key={index}
            className={`
            ${
              item.schoolName === "Middle School"
                ? "bg-[#153254]"
                : item.schoolName === "Senior School (GCSE)"
                ? "bg-[#397bce]"
                : "bg-blue-400"
            } w-full py-10 max-w-xl border border-sky-200 rounded-lg shadow
          `}
          >
            <div className="flex flex-col items-center ">
              <div
                className={` ${
                  item.schoolName === "Middle School"
                    ? "bg-[#153254]"
                    : "bg-[#397bce]"
                }
           flex justify-center items-center
                  `}
              >
                <img
                  className="w-34 h-40"
                  src={item.studentImg}
                  alt="Bonnie image"
                />
              </div>
              <h5 className="py-3 text-4xl font-bold text-gray-900 dark:text-white">
                {item.schoolName}
              </h5>
              <span className="text-xl font-medium py-3 text-gray-200 ">
                {item.key_stage}
              </span>
              <span className="text-sm text-gray-200 py-3">{item.year}</span>
              <div className="flex justify-center items-center mt-4 md:mt-6">
                {/* <a
                href={item.link}
                className="inline-flex items-center justify-center px-4 w-56 py-4 text-lg font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {item.linkTitle}
              </a> */}
                <AnimationPopUp>
                  <div>
                    <Button link={item.link} title={item.linkTitle} />
                  </div>
                </AnimationPopUp>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimationBottom>
  );
};
