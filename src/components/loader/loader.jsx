import React from "react";
import Image from "next/image";
export default function loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Image
        src="/Al-Madinah-Loader.gif" // Path to your loader image
        alt="Loading..."
        width={400} // Set the width of the image
        height={400} // Set the height of the image
      />
    </div>
  );
}
