// import Image from "next/image";
// import React from "react";
// import { IoCheckmarkSharp } from "react-icons/io5";
// import AnimatedComponentLeft from "../../animations/AnimationLeft";
// import AnimatedComponentRight from "../../animations/AnimationRigth";

// export const FamiliesLoveSec = () => {
//   return (
//     <div className=" bg-slate-100 pb-10 px-5">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-20  lg:gap-5 mx-auto my-20 py-20 max-w-6xl">
//         <AnimatedComponentLeft>
//           <div className="grid grid-cols-2 place-items-center lg:block lg:relative">
//             <img
//               className="w-72 h-96 lg:w-64 lg:h-80 -rotate-3"
//               // src="https://www.shutterstock.com/image-photo/mother-teenager-girl-laptop-computer-260nw-74632564.jpg"
//               src="/04.jpg"
//               alt="familyImage"
//             />
//             <img
//               className="w-72 h-96 lg:absolute lg:w-64 lg:h-80 rotate-12 top-8 left-56"
//               src="/01.jpg"
//               alt="familyImage"
//             />
//           </div>
//         </AnimatedComponentLeft>
//         <AnimatedComponentRight>
//           <div className="flex flex-col gap-5 px-5">
//             <p className="w-60 font-bold text-blue-500 py-2 px-4 border-1 border-sky-400 rounded-full bg-slate-200">
//               What makes us different?
//             </p>
//             <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-700">
//               Why families love our online school
//             </h2>
//             <p className="text-lg font-semibold">
//               King’s InterHigh is a place where everyone can belong. Our diverse
//               and inclusive global online school community welcomes every
//               family, right from your first-day induction.
//             </p>
//           </div>
//         </AnimatedComponentRight>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-6xl  mx-auto">
//         <div className="flex flex-col gap-5">
//           <span className="w-12 h-12 bg-green-600 rounded-full p-3">
//             <IoCheckmarkSharp className="w-6 h-6  text-white" />
//           </span>
//           <p className="text-xl lg:text-2xl font-bold text-sky-900">
//             Education tailoured for your child
//           </p>
//           <p className="text-base font-light">
//             Al-Madinah Online School is accredited by the world-renowned
//             Cambridge International, ensuring that your child receives a
//             high-quality education recognised globally.
//           </p>
//         </div>
//         <div className="flex flex-col gap-5">
//           <span className="w-12 h-12 bg-orange-600 rounded-full p-3">
//             <IoCheckmarkSharp className="w-6 h-6 text-white" />
//           </span>
//           <p className="text-xl lg:text-2xl font-bold text-sky-900">
//             Qualified and motivated Teachers
//           </p>
//           <p className="text-base font-light">
//             At Al-Madinah, we understand that each student has unique learning
//             needs. Our smaller class sizes and one-to-one support from
//             experienced tutors provide a flexible and personalised learning
//             experience, ensuring that every student can thrive.
//           </p>
//         </div>
//         <div className="flex flex-col gap-5">
//           <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
//             <IoCheckmarkSharp className="w-6 h-6 text-white" />
//           </span>
//           <p className="text-xl lg:text-2xl font-bold text-sky-900">
//             Live Lessons
//           </p>
//           <p className="text-base font-light">
//             Even if there isn't a Cambridge school nearby, students can access
//             the prestigious Cambridge International curriculum through
//             Al-Madinah. This allows them to benefit from a broad and balanced
//             education that is respected worldwide.
//           </p>
//         </div>
//         <div className="flex flex-col gap-5">
//           <span className="w-12 h-12 bg-yellow-500 rounded-full p-3">
//             <IoCheckmarkSharp className="w-6 h-6 text-white" />
//           </span>
//           <p className="text-xl lg:text-2xl font-bold text-sky-900">
//             Focus on Child spiritual growth and wellbeing
//           </p>
//           <p className="text-base font-light">
//             Our online platform allows students to study from anywhere, whether
//             they are moving to a different city or country, or unable to attend
//             school for medical or wellbeing reasons. This flexibility ensures
//             that no child misses out on their education
//           </p>
//         </div>
//         <div className="flex flex-col gap-5">
//           <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
//             <IoCheckmarkSharp className="w-6 h-6 text-white" />
//           </span>
//           <p className="text-xl lg:text-2xl font-bold text-sky-900">
//             Interactive sessions
//           </p>
//           <p className="text-base font-light">
//             Al-Madinah Online School offers a variety of subjects that may not
//             be available in local schools. This wider curriculum enables
//             students to explore and excel in areas of interest, providing a
//             well-rounded education.
//           </p>
//         </div>
//         {/* <div className="flex flex-col gap-5">
//           <span className="w-12 h-12 bg-green-600 rounded-full p-3">
//             <IoCheckmarkSharp className="w-6 h-6 text-white" />
//           </span>
//           <p className="text-xl lg:text-2xl font-bold text-sky-900">
//             Adapted to Modern Needs
//           </p>
//           <p className="text-base font-light">
//             Our approach to online education is designed to meet the needs of
//             today's learners. By integrating advanced educational technologies
//             and methodologies, we ensure that our students receive an education
//             that is both effective and engaging.
//           </p>
//         </div>
//         <div className="flex flex-col gap-5">
//           <span className="w-12 h-12 bg-green-600 rounded-full p-3">
//             <IoCheckmarkSharp className="w-6 h-6 text-white" />
//           </span>
//           <p className="text-xl lg:text-2xl font-bold text-sky-900">
//             Supportive and Inclusive Environment
//           </p>
//           <p className="text-base font-light">
//             We believe in providing a supportive and inclusive environment where
//             students can grow into confident, compassionate individuals guided
//             by Islamic principles and academic success.
//           </p>
//         </div> */}
//       </div>
//       <p className="mx-auto text-center py-8 max-w-4xl">
//         Choose Al-Madinah Online School for an education that combines academic
//         excellence with the flexibility and support of online learning, all
//         within a framework of strong Islamic values.
//       </p>
//     </div>
//   );
// };

import Image from "next/image";
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimatedComponentRight from "../../animations/AnimationRigth";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";
export const FamiliesLoveSec = () => {
  return (
    <div className="pb-15">
      <div className="border-4 border-gray-700 bg-white grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center justify-center rounded-[40px] lg:gap-10 mx-auto my-20 py-10 max-w-7xl">
        <AnimatedComponentLeft>
          <div className="grid grid-cols-2 gap-2 justify-between lg:relative">
            <img
              className="w-80 h-96 lg:w-60 lg:h-80 -rotate-3"
              src={"/07.jpg"}
              alt="familyImage"
            />
            <img
              className="w-80 h-96 lg:absolute lg:w-60 lg:h-80 rotate-12 top-5 left-56"
              src={"/hijab-girl.jpg"}
              alt="familyImage"
            />
          </div>
        </AnimatedComponentLeft>
        <AnimatedComponentRight>
          <div className="flex flex-col gap-2">
            <AnimationPopUp>
              <div>
                <Button
                  link={""}
                  title={"WHY CHOOSE AL-MADINAH ONLINE SCHOOL ?"}
                />
              </div>
            </AnimationPopUp>
            <p className="text-lg pt-5 font-bold tracking-tight text-gray-900 md:text-xl lg:text-lg">
              Choose Al-Madinah Online School for An Education That Combines
              Academic Excellence With The Flexibility And Support Of Online
              Learning, All Within A Framework Of Strong Islamic Values.
            </p>
          </div>
        </AnimatedComponentRight>
      </div>

      <div className="border-4 mx-auto max-w-7xl rounded-[40px] bg-white border-gray-700">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {[
            {
              title: "Accredited By Cambridge International",
              description:
                "Al-Madinah Online School is accredited by the world-renowned Cambridge International, ensuring that your child receives a high-quality education recognised globally.",
              color: "bg-green-600",
            },
            {
              title: "Personalised Learning Experience",
              description:
                "At Al-Madinah, we understand that each student has unique learning needs. Our smaller class sizes and one-to-one support from experienced tutors provide a flexible and personalised learning experience, ensuring that every student can thrive.",
              color: "bg-orange-600",
            },
            {
              title: "Access To The Cambridge International Curriculum",
              description:
                "Even if there isn't a Cambridge school nearby, students can access the prestigious Cambridge International curriculum through Al-Madinah. This allows them to benefit from a broad and balanced education that is respected worldwide.",
              color: "bg-sky-600",
            },
            {
              title: "Flexibility And Accessibility",
              description:
                "Our online platform allows students to study from anywhere, whether they are moving to a different city or country, or unable to attend school for medical or wellbeing reasons. This flexibility ensures that no child misses out on their education.",
              color: "bg-green-600",
            },
            {
              title: "Wide Range Of Subjects",
              description:
                "Al-Madinah Online School offers a variety of subjects that may not be available in local schools. This wider curriculum enables students to explore and excel in areas of interest, providing a well-rounded education.",
              color: "bg-orange-600",
            },
            {
              title: "Supportive And Inclusive Environment",
              description:
                "We believe in providing a supportive and inclusive environment where students can grow into confident, compassionate individuals guided by Islamic principles and academic success.",
              color: "bg-sky-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 items-center text-center"
            >
              <span className={`w-12 h-12 ${item.color} rounded-full p-3`}>
                <IoCheckmarkSharp className="w-6 h-6 text-white" />
              </span>
              <p className="text-xl lg:text-xl font-bold text-sky-900">
                {item.title}
              </p>
              <p className="text-base font-light">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-20 mt-10 lg:gap-5 mx-auto py-10 max-w-6xl">
          <div className="flex flex-col gap-5 items-center text-center">
            <span className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center p-3">
              <IoCheckmarkSharp className="w-6 h-6 text-white" />
            </span>
            <p className="text-xl lg:text-xl font-bold text-sky-900">
              Adapted To Modern Needs
            </p>
            <p className="text-base font-light max-w-md">
              Our approach to online education is designed to meet the needs of
              today's learners. By integrating advanced educational technologies
              and methodologies, we ensure that our students receive an
              education that is both effective and engaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
