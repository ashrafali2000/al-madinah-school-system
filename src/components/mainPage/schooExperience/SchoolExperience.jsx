import React from "react";
import { AboutSchool } from "../school/AboutSchool";

export const SchoolExperience = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl gap-12 py-16">
        <AboutSchool
          buttonTile="student Life"
          title="Life at an online school"
          subtitle="The Full School Experience"
          describe="Our Students Never Miss Out On The Great Parts Of Attending A Physical School."
        />
      </div>
    </div>
  );
};
