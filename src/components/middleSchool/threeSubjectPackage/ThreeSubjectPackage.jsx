import React from "react";
import Link from "next/link";
export default function ThreeSubjectPackage() {
  return (
    <div className="border-gray-300 border-4 rounded-2xl p-10 ml-8 flex flex-col items-center justify-center w-auto max-w-8xl mr-8 ">
      <p className="text-2xl font-bold mb-4">3 Subject Package</p>
      <p className="text-lg font-bold mb-2">
        We also offer a 3 Subject Package for homeschooling families which
        includes your choice of any 3 core
      </p>
      <p className="text-lg font-bold mb-6">
        subjects. Find out more about our 3 Subject Package fees by using our
        <Link href={`/`}>
          {" "}
          <u className="text-blue-400"> cost calculator </u>.{" "}
        </Link>
      </p>
    </div>
  );
}
