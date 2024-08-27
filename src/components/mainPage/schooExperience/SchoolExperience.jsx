import React from "react";
import { AboutSchool } from "../school/AboutSchool";

export const SchoolExperience = () => {
  return (
    <div>
      <div className="mx-auto max-w-6xl py-16">
        <AboutSchool
          buttonTile="student Life"
          title="Life at an online school"
          subtitle="The full school experience"
          describe="Our students never miss out on the great parts of attending a physical school."
        />
      </div>
    </div>
  );
};
