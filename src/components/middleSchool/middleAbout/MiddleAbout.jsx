import Image from "next/image";
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimatedComponentRight from "../../animations/AnimationRigth";
import { motion } from "framer-motion";
export const MiddleAbout = () => {
  return (
    <div className=" mt-28 pb-10 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-1 border-4 border-gray-700 rounded-[40px]  bg-white gap-10 lg:gap-5 mx-auto my-20 py-20 pb-18 max-w-7xl">
        {/* <AnimatedComponentLeft>
          {/* <div className="grid grid-cols-2 place-items-center lg:block lg:relative">
            <img
              className="w-80 h-104 lg:w-72 lg:h-96 -rotate-3"
              src={"/bannerHero.jpg"}
              alt="familyImage"
            />
            <img
              className="w-96 h-112 lg:absolute lg:w-80 lg:h-96 rotate-12 top-6 left-56"
              src={"/Family.jpg"}
              alt="familyImage"
            />
          </div> */}
        {/* </AnimatedComponentLeft> */}
        {/* <AnimatedComponentRight> */}
        <div className="flex flex-col place-items-center  gap-5 px-5">
          {/* <p className="w-auto h-auto font-bold text-blue-500 p-5 border-sky-400 rounded-full bg-slate-200">
            Key Stage 3 Subjects
          </p> */}
          <motion.h3
            className=" border-2 border-gray-700 rounded-[40px]  cursor-pointer text-3xl  w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 20, // removed quotes around the duration
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Key Stage 3 Subjects
          </motion.h3>
          <h2 className="text-2xl text-center md:text-2xl lg:text-2xl p-4 text-[#00477e] hover:text-[#ffa500] font-medium">
            In Years 7 to 9, our students engage in a broad range of subjects
            <br /> that form the foundation of their secondary education. These
            subjects include
          </h2>
          <p className="text-lg font-semibold">
            {/* At Al Madinah online school, school life is designed to be
            enriching, balanced, and supportive. We foster an environment where
            academic excellence goes hand in hand with personal and spiritual
            growth. Our students thrive in a community that values respect,
            responsibility, and the pursuit of knowledge. */}
          </p>
          {/* <div className="border-4  mx-28 mt-36 mb-6 rounded-[40px] border-gray-700  bg-white "> */}
          <div className="  flex flex-col gap-8 md:flex-cols-2 w-full ">
            {/* Text Section */}
            <div className="flex-1 mt-6 text-black   p-6">
              {/* <h2 className="text-4xl font-bold mb-4">
                Assessment and Evaluation{" "}
              </h2>
              <p className="text-lg">
                We use a comprehensive assessment system to evaluate student
                progress and achievement. This Includes:
              </p> */}

              <div className="space-y-7">
                {[
                  {
                    color: "bg-sky-600",
                    title: "English Language and Literature ",
                    description:
                      "Students develop advanced reading, writing, and analytical skills, exploring a variety of literary genres and texts.",
                  },
                  {
                    color: "bg-orange-600",
                    title: "Mathematics ",
                    description:
                      "Our mathematics program focuses on developing strong numeracy skills, logical reasoning, and problem-solving abilities.",
                  },
                  {
                    color: "bg-yellow-600",
                    title: "Science",
                    description:
                      "The science curriculum covers Biology, Chemistry, and Physics, encouraging students to explore the natural world through experiments and inquiry-based learning.",
                  },
                  {
                    color: "bg-green-600",
                    title: "History",
                    description:
                      " Students learn about significant historical events and figures, developing an understanding of how the past shapes the present.",
                  },
                  {
                    color: "bg-sky-600",
                    title: "Geography",
                    description:
                      "The study of physical and human geography helps students understand the complexities of our world and the environment. ",
                  },
                  {
                    color: "bg-orange-600",
                    title: "Modern Foreign Languages ",
                    description:
                      " We offer Arabic, providing students with the opportunity to become proficient in additional languages.",
                  },
                  {
                    color: "bg-orange-600",
                    title: "IT  ",
                    description:
                      "  Students acquire essential skills in coding, programming, and digital literacy.",
                  },
                  {
                    color: "bg-yellow-600",
                    title: "Physical Education",
                    description:
                      " Regular physical activity promotes health and well-being, with a focus on teamwork. ",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex pt-10  items-center">
                    <span
                      className={`${item.color} w-24 h-24 rounded-full p-6 flex items-center justify-center shadow-lg`}
                    >
                      <IoCheckmarkSharp className="w-16 h-16 text-white" />
                    </span>
                    <div className="px-2 ">
                      <p className="text-xl text-left lg:text-xl font-bold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-base mt-1 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* </div> */}
              {/* Image Slider Section */}
              {/* <div className="flex-2 mt-12 items-center overflow-y-hidden overflow-x-hidden flex w-full h-80">
            <div className="flex space-x-8">
              <img
                src="/Family.jpg"
                alt="Image 1"
                className=" rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center rotate-6"
              />
              <img
                src="/family2.jpg"
                alt="Image 2"
                className=" rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center -rotate-6"
              />
              <img
                src="/Family.jpg"
                alt="Image 3"
                className="rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center rotate-6"
              />
              <img
                src="/family2.jpg"
                alt="Image 4"
                className="rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center -rotate-6"
              />
              <img
                src="/Family.jpg"
                alt="Image 5"
                className="rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center rotate-6"
              />
              <img
                src="/family2.jpg"
                alt="Image 6"
                className="rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center -rotate-6"
              />
              <img
                src="/Family.jpg"
                alt="Image 7"
                className="rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center rotate-6"
              />
              {/* Add more images as needed */}
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* </AnimatedComponentRight> */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 border-4 border-gray-700 rounded-[40px]  bg-white gap-10 lg:gap-5 mx-auto my-20 py-20 pb-18 max-w-7xl">
        {/* <AnimatedComponentLeft>
          {/* <div className="grid grid-cols-2 place-items-center lg:block lg:relative">
            <img
              className="w-80 h-104 lg:w-72 lg:h-96 -rotate-3"
              src={"/bannerHero.jpg"}
              alt="familyImage"
            />
            <img
              className="w-96 h-112 lg:absolute lg:w-80 lg:h-96 rotate-12 top-6 left-56"
              src={"/Family.jpg"}
              alt="familyImage"
            />
          </div> */}
        {/* </AnimatedComponentLeft> */}
        {/* <AnimatedComponentRight> */}
        <div className="flex flex-col place-items-center  gap-5 px-5">
          {/* <p className="w-auto h-auto font-bold text-blue-500 p-5 border-sky-400 rounded-full bg-slate-200">
            Key Stage 3 Subjects
          </p> */}
          <motion.h3
            className=" border-2 border-gray-700 rounded-[40px]  cursor-pointer text-3xl  w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 20, // removed quotes around the duration
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Integration with Islamic Studies
          </motion.h3>
          <h2 className="text-2xl text-center md:text-2xl lg:text-2xl p-6 text-[#00477e] hover:text-[#ffa500] font-medium">
            Our curriculum seamlessly integrates Islamic studies, ensuring that
            students receive a balanced education that nurtures their spiritual
            and moral development. Key Islamic subjects include
          </h2>
          <p className="text-lg font-semibold">
            {/* At Al Madinah online school, school life is designed to be
            enriching, balanced, and supportive. We foster an environment where
            academic excellence goes hand in hand with personal and spiritual
            growth. Our students thrive in a community that values respect,
            responsibility, and the pursuit of knowledge. */}
          </p>
          {/* <div className="border-4  mx-28 mt-36 mb-6 rounded-[40px] border-gray-700  bg-white "> */}
          <div className="  flex flex-col gap-8 md:flex-cols-2 w-full ">
            {/* Text Section */}
            <div className="flex-1 mt-5 text-black   p-6">
              {/* <h2 className="text-4xl font-bold mb-4">
                Assessment and Evaluation{" "}
              </h2>
              <p className="text-lg">
                We use a comprehensive assessment system to evaluate student
                progress and achievement. This Includes:
              </p> */}

              <div className="space-y-7">
                {[
                  {
                    color: "bg-sky-600",
                    title: "Quranic Studies",
                    description:
                      "Students understand the Quran, learning its application in daily life. ",
                  },
                  {
                    color: "bg-orange-600",
                    title: "Islamic History",
                    description:
                      "Lessons on the life of the Prophet Muhammad (Peace and blessings be upon them) and significant events in Islamic history.",
                  },
                  {
                    color: "bg-yellow-600",
                    title: "Fiqh and Aqeedah ",
                    description:
                      "Understanding Islamic jurisprudence and beliefs.",
                  },
                  {
                    color: "bg-green-600",
                    title: "Arabic Language ",
                    description:
                      "Emphasis on proficiency in Arabic to enhance Quranic understanding and communication.",
                  },
                  {
                    color: "bg-sky-600",
                    title: "Geography",
                    description:
                      "The study of physical and human geography helps students understand the complexities of our world and the environment. ",
                  },
                  {
                    color: "bg-orange-600",
                    title: "Modern Foreign Languages ",
                    description:
                      " We offer Arabic, providing students with the opportunity to become proficient in additional languages.",
                  },
                  {
                    color: "bg-orange-600",
                    title: "IT  ",
                    description:
                      "  Students acquire essential skills in coding, programming, and digital literacy.",
                  },
                  {
                    color: "bg-yellow-600",
                    title: "Physical Education",
                    description:
                      " Regular physical activity promotes health and well-being, with a focus on teamwork. ",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex pt-10  items-center">
                    <span
                      className={`${item.color} w-24 h-24 rounded-full p-6 flex items-center justify-center shadow-lg`}
                    >
                      <IoCheckmarkSharp className="w-16 h-16 text-white" />
                    </span>
                    <div className="px-2 ">
                      <p className="text-xl text-left lg:text-xl font-bold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-base mt-1 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* </div> */}
              {/* Image Slider Section */}
              {/* <div className="flex-2 mt-12 items-center overflow-y-hidden overflow-x-hidden flex w-full h-80">
            <div className="flex space-x-8">
              <img
                src="/Family.jpg"
                alt="Image 1"
                className=" rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center rotate-6"
              />
              <img
                src="/family2.jpg"
                alt="Image 2"
                className=" rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center -rotate-6"
              />
              <img
                src="/Family.jpg"
                alt="Image 3"
                className="rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center rotate-6"
              />
              <img
                src="/family2.jpg"
                alt="Image 4"
                className="rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center -rotate-6"
              />
              <img
                src="/Family.jpg"
                alt="Image 5"
                className="rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center rotate-6"
              />
              <img
                src="/family2.jpg"
                alt="Image 6"
                className="rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center -rotate-6"
              />
              <img
                src="/Family.jpg"
                alt="Image 7"
                className="rounded-[40px] w-96 h-72 object-contain flex-shrink-0 snap-center rotate-6"
              />
              {/* Add more images as needed */}
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* </AnimatedComponentRight> */}
      </div>
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-6xl mx-auto">
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-green-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-3xl font-bold text-sky-900">
            Accredited by Cambridge International
          </p>
          <p className="text-lg font-light">
            Al-Madinah Online School is accredited by the world-renowned
            Cambridge International, ensuring that your child receives a
            high-quality education recognised globally.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-orange-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-2xl lg:text-3xl font-bold text-sky-900">
            Personalised Learning Experience
          </p>
          <p className="text-lg font-light">
            At Al-Madinah, we understand that each student has unique learning
            needs. Our smaller class sizes and one-to-one support from
            experienced tutors provide a flexible and personalised learning
            experience, ensuring that every student can thrive.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-2xl lg:text-3xl font-bold text-sky-900">
            Access to the Cambridge International Curriculum
          </p>
          <p className="text-lg font-light">
            Even if there isn't a Cambridge school nearby, students can access
            the prestigious Cambridge International curriculum through
            Al-Madinah. This allows them to benefit from a broad and balanced
            education that is respected worldwide.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-yellow-500 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-2xl lg:text-3xl font-bold text-sky-900">
            Flexibility and Accessibility
          </p>
          <p className="text-lg font-light">
            Our online platform allows students to study from anywhere, whether
            they are moving to a different city or country, or unable to attend
            school for medical or wellbeing reasons. This flexibility ensures
            that no child misses out on their education.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-2xl lg:text-3xl font-bold text-sky-900">
            Wide Range of Subjects
          </p>
          <p className="text-lg font-light">
            Al-Madinah Online School offers a variety of subjects that may not
            be available in local schools. This wider curriculum enables
            students to explore and excel in areas of interest, providing a
            well-rounded education.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-green-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-2xl lg:text-3xl font-bold text-sky-900">
            Adapted to Modern Needs
          </p>
          <p className="text-lg font-light">
            Our approach to online education is designed to meet the needs of
            today's learners. By integrating advanced educational technologies
            and methodologies, we ensure that our students receive an education
            that is both effective and engaging.
          </p>
        </div>
      </div> */}
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8  max-w-7xl mx-auto">
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-green-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Education tailored to you
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            From timetable adjustments to anxiety-friendly exemptions, we make
            our school fit your child.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-orange-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Passionate teachers
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            Our highly qualified, caring, passionate teachers want to see every
            child succeed.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Live lessons
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            Students log in to a virtual classroom and participate in live
            lessons with classmates and teachers. View example timetable.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-yellow-500 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            24/7 lesson recordings
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            Revise, revisit and catch up so a lesson is never missed.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Focus on wellbeing
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            With a dedicated pastoral team, we focus on the whole child, not
            just their academic achievements.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-green-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Opportunities to socialise
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            Take part in virtual clubs, school trips, summer camps, and
            in-person meetups.
          </p>
        </div>
      </div> */}
    </div>
  );
};
