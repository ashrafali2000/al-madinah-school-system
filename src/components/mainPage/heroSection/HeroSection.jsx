// "use client";
// import { GoArrowDown } from "react-icons/go";
// import { useState } from "react";
// import { Dialog, DialogPanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// import { motion } from "framer-motion";
// import { Button } from "../button/Button";
// import AnimationBottom from "../../animations/AnimationBottom";
// import AnimationPopUp from "../../animations/AnimationPopup";
// import AnimationTop from "../../animations/AnimationTop";
// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

// export default function HeroSection() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="pt-5 mt-28 ">
//       <div className="relative isolate px-6 lg:px-8 ">
//         <div
//           className="max-w-7xl rounded-[40px] h-[550px] relative pt-48 mx-auto"
//           style={{
//             backgroundImage: "url(./09.jpg)",
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           {/* <AnimationBottom>
//             <Image
//               src={"/heroSecImg.png"}
//               className="mx-auto w-7/12 h-90"
//               alt="heroImage"
//               width={900}
//               height={200}
//             ></Image>
//           </AnimationBottom> */}

//           <div className="absolute top-40 md:top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto w-11/12">
//             <div className="text-center pb-36">
//               <AnimationPopUp>
//                 <h1 className="text-md font-semibold tracking-tight text-gray-900 pr-10 md:text-3xl lg:text-5xl">
//                   Academic Excellence Meets Islamic Values Learn Anywhere,
//                   Anytime.
//                 </h1>
//               </AnimationPopUp>
//               <p className="mt-6 text-md md:text-2xl font-bold leading-8 text-gray-900">
//                 Building Brighter Futures through Faith and Virtual Learning.
//               </p>
//               <div className="mt-5 md:mt-10 flex items-center justify-center gap-x-6">
//                 <AnimationTop>
//                   <Button link={"/"} title={"Join Our next open event"} />
//                 </AnimationTop>
//               </div>
//             </div>
//             <div className="flex justify-center -mt-20">
//               <ScrollLink
//                 to="key-Stages" // This should match the ID of the element you want to scroll to
//                 smooth={true}
//                 duration={600}
//                 offset={-80} // Adjust this offset based on your layout
//                 className="cursor-pointer"
//               >
//                 <AnimationTop>
//                   <div className="bg-white flex justify-center items-center p-3 md:p-4 md:w-14 lg:w-16 md:h-14 lg:h-16 rounded-full transition duration-1000 hover:scale-110">
//                     <GoArrowDown className="h-5 w-5 md:w-8 md:h-8 text-gray-600" />
//                   </div>
//                 </AnimationTop>
//               </ScrollLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import AnimationPopUp from "../../animations/AnimationPopup";

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="pt-5 mt-28">
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="max-w-7xl rounded-[40px] h-[550px] relative mx-auto animate-zoomFadeIn animate-backgroundMove"
          style={{
            backgroundImage: "url(./bannerHero2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 mx-auto w-11/12 sm:py-10">
            <div className="text-center space-y-4">
              <AnimationPopUp>
                <h2 className="text-lg font-semibold tracking-tight text-indigo md:text-2xl lg:text-4xl leading-tight animate-slideToCenter">
                  Academic Excellence Meets Islamic Values
                </h2>
                <h2 className="text-lg font-semibold tracking-tight text-indigo md:text-2xl lg:text-4xl animate-blink leading-tight ">
                  Learn Anywhere, Anytime.
                </h2>
              </AnimationPopUp>
            </div>
            <div className="flex justify-center mt-10 animate-imageTranslate">
              {/* <Image
                src="/heroSecImg.png"
                className="w-7/12 h-90 animate-imageMove"
                alt="heroImage"
                width={900}
                height={200}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
