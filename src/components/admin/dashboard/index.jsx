"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import TextEditor from "./textEditor";
import FileEditor from "./fileEditor";
import ChartOne from "./charts/chart1";
import ChartTwo from "./charts/chart2";
import ChartThree from "./charts/chart3";
import ChartFour from "./charts/chart4";

const DashBoardComp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 bg-gray-300">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="md:col-span-4 ml-32">
          <h2 className=" text-center text-5xl text-green-600 font-bold">
            Some Data Here
          </h2>
          {/* <TextEditor /> */}
          {/* <FileEditor /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <ChartOne />
            <ChartTwo />
            <ChartThree />
            <ChartFour /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardComp;
