import React from "react";
import AboutMiddleSchool from "../aboutMiddleSchool/AboutMiddleSchool";

export default function MeetTeachers() {
  return (
    <div className="pb-9">
      <AboutMiddleSchool
        title="Meet the teachers"
        subtitle={
          <p className="text-4xl md:text-5xl lg:text-6xl  font-bold text-gray-800">
            Our brilliant teachers at middle school
          </p>
        }
      />
    </div>
  );
}
