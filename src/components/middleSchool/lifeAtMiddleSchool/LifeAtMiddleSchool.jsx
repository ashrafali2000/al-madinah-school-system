import React from "react";
import { AboutSchool } from "../../mainPage/school/AboutSchool";

export default function LifeAtMiddleSchool() {
  return (
    <div className="mx-auto max-w-6xl py-16">
      <AboutSchool
        buttonTile="School Life"
        title="A typical school day"
        subtitle={
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Everything you'd get in a traditional school and more...
          </h2>
        }
      />
    </div>
  );
}
