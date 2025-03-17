import Image from "next/image";
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const SlidingImageSection = () => {
  const schoolCardList = [
    {
      studentImg: "./girl1.png",
      schoolName: "Middle School",
      key_stage: "Key Stage 3",
      year: "Years 7–9 | Ages 11–14",
      link: "/middleSchool",
      linkTitle: "Middle School",
    },
    {
      studentImg: "./boy.png",
      schoolName: "Senior School (GCSE)",
      key_stage: "Key Stage 4",
      year: "Years 10–11 | Ages 14–16",
      link: "/seniorSchool",
      linkTitle: "Senior School",
    },
  ];
  const data = [
    {
      img: "./family.jpg",
      link: "Joel A. Hofer",
      title: "Head of Mddile School",
    },

    {
      img: "./family2.jpg",
      link: "Abraham",
      title: " Leader of learning Science",
    },
    {
      img: "./family.jpg",
      link: "Alan",
      title: "Leader of Bussiness and Economics",
    },
    {
      img: "./family2.jpg",
      link: "Eva Snap ",
      title: "Head of faculty-English",
    },
    {
      img: "./family.jpg",
      link: "farhan Ahmed",
      title: "Leader of Bussiness and Economics",
    },
    {
      img: "./family2.jpg",
      link: "Sea Edward",
      title: "Leader of Learnng History",
    },
  ];
  return (
    <div>
      <div className="border-4 mx-4 md:mx-28 mt-40 mb-6 rounded-[40px] border-gray-700 bg-white">
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Teaching Methodology
          </h2>
          <p className="text-lg text-center md:text-xl font-bold max-w-[90%]">
            Our teaching methods are designed to engage students actively in
            their learning journey. We employ a variety of instructional
            strategies, including:
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full h-full">
          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center items-center text-black text-center p-6">
            <div className="space-y-8 mt-6">
              {[
                {
                  color: "bg-sky-600",
                  title: "Interactive Lessons",
                  description:
                    "Use of technology and multimedia to make lessons dynamic and engaging.",
                },
                {
                  color: "bg-orange-600",
                  title: "Collaborative Learning",
                  description:
                    "Group work and discussions to foster teamwork and communication skills.",
                },
                {
                  color: "bg-yellow-600",
                  title: "Inquiry-Based Learning",
                  description:
                    "Encouraging students to ask questions and explore topics in depth.",
                },
                {
                  color: "bg-green-600",
                  title: "Continuous Feedback",
                  description:
                    "Regular assessments and feedback to support student growth and improvement.",
                },
              ].map((item, index) => (
                <div key={index} className="flex pt-10 items-center">
                  <span
                    className={`${item.color} w-16 h-16 md:w-24 md:h-24 rounded-full p-6 flex items-center justify-center shadow-lg`}
                  >
                    <IoCheckmarkSharp className="w-10 h-10 md:w-16 md:h-16 text-white" />
                  </span>
                  <div className="px-2">
                    <p className="text-lg md:text-xl text-left font-bold text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-base mt-1 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center p-6">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-education-elements-background_23-2147732424.jpg"
              alt="Teaching Methodology"
              className="rounded-lg shadow-lg w-full h-auto md:w-3/4"
            />
          </div>
        </div>
      </div>

      <div className="border-4 mx-4 md:mx-28 mt-12 mb-6 rounded-[40px] border-gray-700 bg-white">
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Assessment and Evaluation
          </h2>
          <p className="text-lg text-center md:text-xl font-bold max-w-[90%]">
            We use a comprehensive assessment system to evaluate student
            progress and achievement. This includes:
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full h-full">
          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center items-center text-black text-center p-6">
            <div className="space-y-8 mt-6">
              {[
                {
                  color: "bg-sky-600",
                  title: "Examinations",
                  description:
                    "Formal exams to assess understanding and knowledge retention.",
                },
                {
                  color: "bg-orange-600",
                  title: "Coursework",
                  description:
                    "Assignments and projects that allow students to apply their learning in practical ways.",
                },
                {
                  color: "bg-yellow-600",
                  title: "Formative Assessments",
                  description:
                    "Regular quizzes and class activities to monitor ongoing progress.",
                },
              ].map((item, index) => (
                <div key={index} className="flex pt-10 items-center">
                  <span
                    className={`${item.color} w-16 h-16 md:w-24 md:h-24 rounded-full p-6 flex items-center justify-center shadow-lg`}
                  >
                    <IoCheckmarkSharp className="w-10 h-10 md:w-16 md:h-16 text-white" />
                  </span>
                  <div className="px-2">
                    <p className="text-lg md:text-xl text-left font-bold text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-base mt-1 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center p-6">
            <img
              src="https://img.freepik.com/free-vector/school-materials-icons_23-2147501904.jpg"
              alt="Teaching Methodology"
              className="rounded-lg shadow-lg w-full h-auto md:w-3/4"
            />
          </div>
        </div>
      </div>

      <div className="border-4 mx-4 md:mx-28 mt-12 mb-6 rounded-[40px] border-gray-700 bg-white">
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Extracurricular Enrichment
          </h2>
          <p className="text-lg text-center md:text-xl font-bold max-w-[90%]">
            Beyond the classroom, we offer a variety of extracurricular
            activities that complement our academic program. These activities
            provide opportunities for students to explore their interests and
            develop new skills.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full h-full">
          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center items-center text-black text-center p-6">
            <div className="space-y-8 mt-6">
              {[
                {
                  color: "bg-sky-600",
                  title: "Clubs and Societies",
                  description:
                    "Science Club, Debate Team, Art Club, Quran Recitation Group.",
                },
                {
                  color: "bg-orange-600",
                  title: "Sports Teams",
                  description: "Soccer, Basketball, Swimming, Athletics.",
                },
                {
                  color: "bg-yellow-600",
                  title: "Competitions and Events",
                  description:
                    "Participation in academic competitions, sports meets, and cultural events.",
                },
              ].map((item, index) => (
                <div key={index} className="flex pt-10 items-center">
                  <span
                    className={`${item.color} w-16 h-16 md:w-24 md:h-24 rounded-full p-6 flex items-center justify-center shadow-lg`}
                  >
                    <IoCheckmarkSharp className="w-10 h-10 md:w-16 md:h-16 text-white" />
                  </span>
                  <div className="px-2">
                    <p className="text-lg md:text-xl text-left font-bold text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-base mt-1 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center p-6">
            <img
              src="https://media.istockphoto.com/id/1747349867/vector/happy-teacher%C3%A2s-day-a-muslim-female-teacher-with-children-students-world-teacher%C3%A2s-day.jpg?s=612x612&w=0&k=20&c=QTwhvxSUI17JfKNAZ2vD8erQGbn5Bp6gBVjbUDXyoEU="
              alt="Teaching Methodology"
              className="rounded-lg shadow-lg w-full h-auto md:w-3/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingImageSection;
