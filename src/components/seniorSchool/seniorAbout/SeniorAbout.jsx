import React from "react";
import Image from "next/image";
import { IoCheckmarkSharp } from "react-icons/io5";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimatedComponentRight from "../../animations/AnimationRigth";
import Link from "next/link";
export default function SeniorAbout() {
  return (
    <div className="bg-slate-100 pb-10 px-5 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-5  my-20 py-20 pb-18 max-w-7xl">
        <AnimatedComponentLeft>
          <div className="grid grid-cols-2 place-items-center lg:block lg:relative">
            <img
              className="w-72 h-96 lg:w-60 lg:h-80 -rotate-3"
              // src="https://www.shutterstock.com/image-photo/mother-teenager-girl-laptop-computer-260nw-74632564.jpg"
              // src="https://image1.masterfile.com/getImage/NjMwLTA2NzIzMDE3ZW4uMDAwMDAwMDA=AJfl5r/630-06723017en_Masterfile.jpg"
              src={"/bannerHero.jpg"}
              alt="familyImage"
            />
            <img
              className="w-70 h-96 lg:absolute lg:w-64 lg:h-80 rotate-12 top-6 left-56"
              // src="https://www.shutterstock.com/image-photo/mother-teenager-girl-laptop-computer-260nw-74632564.jpg"
              src={"/Family.jpg"}
              alt="familyImage"
            />
          </div>
        </AnimatedComponentLeft>
        <AnimatedComponentRight>
          <div className="flex flex-col gap-5 px-5">
            <p className="w-60 font-bold text-blue-500 py-2 px-20 border-sky-400 rounded-full bg-slate-200">
              About us
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-700">
              The online middle school where your child can thrive as their true
              self
            </h2>
            <p className="text-lg font-semibold">
              At Al Madinah online school, school life is designed to be
              enriching, balanced, and supportive. We foster an environment
              where academic excellence goes hand in hand with personal and
              spiritual growth. Our students thrive in a community that values
              respect, responsibility, and the pursuit of knowledge.
            </p>
          </div>
        </AnimatedComponentRight>
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8  max-w-7xl mx-auto">
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-green-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Over 20 IGCSE subjects
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
            Expert subject specialist teachers
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
            Join real-time, interactive virtual classrooms on a flexible school
            timetable. <br />{" "}
            <Link href={`/`}>
              {" "}
              <u className="text-blue-400"> View example timetable. </u>
            </Link>
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
            Catch up on missed lessons or revisit topics for revision at any
            time.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Sit IGCSE exams online
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            Choose between sitting exams at a centre or at home with the world’s
            first online IGCSE examinations in a range of subjects.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-12 h-12 bg-green-600 rounded-full p-3">
            <IoCheckmarkSharp className="w-6 h-6 text-white" />
          </span>
          <p className="text-1xl lg:text-2xl font-bold text-sky-900">
            Unlocking every student's potential
          </p>
          <p className="text-lg lg:text-xl font-light text-gray-700">
            Join a school where students achieve results above the UK average
            year after year.
          </p>
        </div>
      </div>
    </div>
  );
}
