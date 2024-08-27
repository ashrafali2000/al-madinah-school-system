import React from "react";
import { AboutSchool } from "../school/AboutSchool";

export const SchoolInsights = () => {
  return (
    <div className="py-20">
      <AboutSchool
        title={"School insights"}
        subtitle={"Latest insights from our school"}
        buttonTile={"View all insights"}
      />
    </div>
  );
};
