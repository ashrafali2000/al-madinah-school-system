import Image from "next/image";
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import Link from "next/link";
import { Button } from "../../components/mainPage/button/Button";
import AnimationBottom from "../../components/animations/AnimationBottom";
import AnimationPopUp from "../../components/animations/AnimationPopup";
import AnimatedComponentRight from "../../components/animations/AnimationRigth";
import AnimatedComponentLeft from "../../components/animations/AnimationLeft";
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
      <div className="border-4  mx-28 mt-36 mb-6 rounded-[40px] border-gray-700  bg-white ">
        <div className="  flex flex-col gap-8 md:flex-cols-2 w-full ">
          {/* Text Section */}
          <div className="flex-1 mt-6 text-black text-center   p-6">
            <h2 className="text-4xl font-bold mb-4">Teaching Methodology</h2>
            <p className="text-lg">
              Our teaching methods are designed to engage students actively in
              their learning journey.
              <br /> We employ a variety of instructional strategies, Including
            </p>

            <div className="space-y-8">
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
                    " Group work and discussions to foster teamwork and communication skills.",
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
                // {
                //   color: "bg-sky-600",
                //   title: "Catch up on lessons with our lesson library",
                //   description:
                //     "Once class wraps up, a full recording is uploaded to our lesson library, along with all the resources from the day. Students can revisit these materials at any time to reinforce their knowledge.",
                // },
                // {
                //   color: "bg-orange-600",
                //   title: "Apply your knowledge after class",
                //   description:
                //     "Then, learners get to apply what they’ve learned through homework tasks, with regular low-pressure assessments designed to build their confidence.",
                // },
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
          </div>
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
      {/* 
      <div className="mx-4 mt-4 mb-8 flex flex-col items-center justify-center text-center space-y-4">
        <div className=" font-bold bg-blue-200 rounded-full text-blue-500 w-auto max-w-md p-2">
          Getting your education online
        </div>
        <h3 className="text-5xl gap font-semibold">
          Live, timetabled online lessons led by
        </h3>
        <h3 className="text-5xl mt-12 font-semibold">brilliant teachers</h3>
        <p className="max-w-xl">
          Students join their classmates for real-time lessons each school day
          in a virtual classroom environment. Highly trained in online
          education, our teachers keep lessons engaging and interactive with
          discussions and activities, encouraging participation in a range of
          ways.
        </p>
        <div className="border-2 w-auto max-w-md p-3 font-bold cursor-pointer hover:bg-gray-200 transition">
          VIEW EXAMPLE TIMETABLE
        </div>
      </div> */}
      <div className="border-4  mx-28 mt-36 mb-6 rounded-[40px] border-gray-700  bg-white ">
        <div className="  flex flex-col gap-8 md:flex-cols-2 w-full ">
          {/* Text Section */}
          <div className="flex-1 mt-6 text-black text-center   p-6">
            <h2 className="text-4xl font-bold mb-4">
              Assessment and Evaluation{" "}
            </h2>
            <p className="text-lg">
              We use a comprehensive assessment system to evaluate student
              progress and achievement. This Includes:
            </p>

            <div className="space-y-8">
              {[
                {
                  color: "bg-sky-600",
                  title: "Examinations",
                  description:
                    "Formal exams to assess understanding and knowledge retention. ",
                },
                {
                  color: "bg-orange-600",
                  title: "Coursework ",
                  description:
                    "Assignments and projects that allow students to apply their learning in practical ways",
                },
                {
                  color: "bg-yellow-600",
                  title: "Formative Assessments ",
                  description:
                    "Regular quizzes and class activities to monitor ongoing progress. ",
                },
                // {
                //   color: "bg-green-600",
                //   title: "Continuous Feedback",
                //   description:
                //     "Regular assessments and feedback to support student growth and improvement.",
                // },
                // {
                //   color: "bg-sky-600",
                //   title: "Catch up on lessons with our lesson library",
                //   description:
                //     "Once class wraps up, a full recording is uploaded to our lesson library, along with all the resources from the day. Students can revisit these materials at any time to reinforce their knowledge.",
                // },
                // {
                //   color: "bg-orange-600",
                //   title: "Apply your knowledge after class",
                //   description:
                //     "Then, learners get to apply what they’ve learned through homework tasks, with regular low-pressure assessments designed to build their confidence.",
                // },
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
          </div>
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
      <div className="border-4  mx-28 mt-36 mb-6 rounded-[40px] border-gray-700  bg-white ">
        <div className="  flex flex-col gap-8 md:flex-cols-2 w-full ">
          {/* Text Section */}
          <div className="flex-1 mt-6 text-black text-center   p-6">
            <h2 className="text-4xl font-bold mb-4">
              Extracurricular Enrichment
            </h2>
            <p className="text-lg">
              Beyond the classroom, we offer a variety of extracurricular
              activities that complement our academic program.
              <br /> These activities provide opportunities for students to
              explore their interests and develop new skills
            </p>

            <div className="space-y-8">
              {[
                {
                  color: "bg-sky-600",
                  title: "Clubs and Societies",
                  description:
                    "Science Club, Debate Team, Art Club, Quran Recitation Group.",
                },
                {
                  color: "bg-orange-600",
                  title: "Sports Teams ",
                  description: "Soccer, Basketball, Swimming, Athletics.",
                },
                {
                  color: "bg-yellow-600",
                  title: "Competitions and Events",
                  description:
                    " Participation in academic competitions, sports meet, and cultural events.",
                },
                // {
                //   color: "bg-green-600",
                //   title: "Continuous Feedback",
                //   description:
                //     "Regular assessments and feedback to support student growth and improvement.",
                // },
                // {
                //   color: "bg-sky-600",
                //   title: "Catch up on lessons with our lesson library",
                //   description:
                //     "Once class wraps up, a full recording is uploaded to our lesson library, along with all the resources from the day. Students can revisit these materials at any time to reinforce their knowledge.",
                // },
                // {
                //   color: "bg-orange-600",
                //   title: "Apply your knowledge after class",
                //   description:
                //     "Then, learners get to apply what they’ve learned through homework tasks, with regular low-pressure assessments designed to build their confidence.",
                // },
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
          </div>
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
      {/* <div className="bg-slate-100 py-10 relative">
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         
          <div className="sticky top-0 mx-auto px-4 h-screen flex items-center">
            <div className="flex flex-col items-center text-center bg-white p-10 rounded-lg shadow-xl">
              <h1 className="text-5xl font-bold text-gray-800">
                What happens in an online lesson?
              </h1>
              <p className="mt-4 max-w-xl text-lg text-gray-600">
                Discover what happens in an online lesson with Al Madinah
                School. Our goal is to make it as simple as possible for
                students to login, learn, and love their education.
              </p>
              <div className="mt-6 border-2 border-yellow-400 w-full max-w-md p-3 font-bold text-black bg-yellow-400 hover:bg-yellow-500 transition duration-300 ease-in-out cursor-pointer rounded-lg shadow-md">
                SIGN UP TO OUR NEXT OPEN EVENT
              </div>
            </div>
          </div>

          {/* Second Div: Scrollable Content */}
      {/* <div className="mx-auto px-4">
          <div className="space-y-8">
            {[
              {
                color: "bg-sky-600",
                title: "Login to your Student Hub",
                description:
                  "The school day begins when students log into their Student Hub to check their timetables and join their virtual classrooms.",
              },
              {
                color: "bg-orange-600",
                title: "Experience engaging teacher-led lessons",
                description:
                  "Each lesson is brought to life by one of our expert teachers, who delivers engaging classes to give our students the best understanding.",
              },
              {
                color: "bg-yellow-600",
                title: "Join in and participate online",
                description:
                  "Lessons, which last 40 minutes each, are filled with activities like quizzes to test knowledge, breakout rooms for group work, and lots of opportunities to participate by typing or talking.",
              },
              {
                color: "bg-green-600",
                title: "Deepen your understanding with various lesson formats",
                description:
                  "We offer various lesson formats for consolidated learning. Some lessons will introduce students to new concepts, while others are designed to explore a specific topic in more detail.",
              },
              {
                color: "bg-sky-600",
                title: "Catch up on lessons with our lesson library",
                description:
                  "Once class wraps up, a full recording is uploaded to our lesson library, along with all the resources from the day. Students can revisit these materials at any time to reinforce their knowledge.",
              },
              {
                color: "bg-orange-600",
                title: "Apply your knowledge after class",
                description:
                  "Then, learners get to apply what they’ve learned through homework tasks, with regular low-pressure assessments designed to build their confidence.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span
                  className={`${item.color} w-32 h-28 rounded-full p-6 flex items-center justify-center shadow-lg`}
                >
                  <IoCheckmarkSharp className="w-16 h-16 text-white" />
                </span>
                <div className="ml-6">
                  <p className="text-xl lg:text-2xl font-bold text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-base mt-4 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div className=" bg-slate-100 pb-10 px-5">
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-20  lg:gap-5 mx-auto my-20 py-20 max-w-6xl"> */}
      {/* <AnimatedComponentLeft>
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
          </AnimatedComponentLeft> */}

      {/* <AnimatedComponentRight> */}
      {/* <div className="flex flex-col gap-5 px-5">
              {/* <p className="w-60 font-bold text-blue-500 py-2 px-4 border-1 border-sky-400 rounded-full bg-slate-200">
                Our learning platform
              </p> */}
      {/* <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-700">
              Why families love our online school
            </h2> */}
      {/* <p className="text-xl md:text-1xl lg:text-5xl font-bold text-gray-700">
                Full school environment in one virtual space
              </p> */}

      {/* <p className="text-lg font-semibold">
                At Al Madinah online school, Our comprehensive online learning
                platform means everything is in one place, and students have all
                the resources they need at their fingertips.
              </p> */}
      {/* </div> */}
      {/* </AnimatedComponentRight> */}
      {/* </div> */}

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-6xl  mx-auto">
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-green-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6  text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              Lesson timetables and classroom links
            </p>
            <p className="text-base font-light">
              Students can find everything they need in their learning platform,
              including updated lesson timetables and classroom links, so they
              can stay on top of their school work and never miss out on any
              activity.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-orange-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6 text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              A wealth of resources for the entire school year
            </p>
            <p className="text-base font-light">
              At Al-Madinah,Aside from lesson recordings, students can access a
              wealth of class resources to explore topics at their own pace,
              consolidate their learnings, and plan ahead for exam studies.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6 text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              Access to all essential tools and apps
            </p>
            <p className="text-base font-light">
              Students can easily access all the tools and apps they need for
              learning and socialising. These include a dedicated learning area
              to view class information and course resources; clubs; societies;
              and even our school reward shop
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-yellow-500 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6 text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              Valuable teacher feedback in one place{" "}
            </p>
            <p className="text-base font-light">
              Our teachers provide regular feedback on student engagement and
              performance, with a clear focus on encouraging students to reap
              their full potential. This enables students to self-reflect and
              understand their strengths and opportunities for improvement.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6 text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              A helpful to-do list for keeping on top of tasks
            </p>
            <p className="text-base font-light">
              All our students can access their to-do list on their learning
              platform. This enables students to easily get organised, keep on
              top of their school work and confidently progress in their
              learning.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-green-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6 text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              The latest and greatest school news updates
            </p>
            <p className="text-base font-light">
              As the leading online school, AL Madinah School is always
              innovating. Our students are the first to know about exciting new
              tech features, events, competitions, celebrations, and much more.
            </p>
          </div>
        </div> */}
      {/* </div> */}
      {/* <div className=" bg-slate-100 pb-10 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20  lg:gap-5 mx-auto my-20 py-20 max-w-6xl">
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
              <p className="w-60 font-bold text-blue-500 py-2 px-4 border-1 border-sky-400 rounded-full bg-slate-200">
                Technology
              </p>

              <p className="text-xl md:text-1xl lg:text-5xl font-bold text-gray-700">
                Bringing learning to life with technology
              </p>

              <p className="text-lg font-semibold">
                At Al Madinah online school,Wondering how students get a
                practical education at a fully online school? At King’s
                InterHigh, we use the power of technology to bring students a
                truly immersive learning experience. Our teachers incorporate
                innovative educational technologies into a wide variety of
                subjects to help students learn in a more “hands-on” way,
                explore topics in-depth, and get the very best understanding of
                each subject. Plus, this makes learning even more fun!
              </p>
            </div>
          </AnimatedComponentRight>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-6xl  mx-auto">
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-green-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6  text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              Virtual science labs
            </p>
            <p className="text-base font-light">
              From growing bacteria and sequencing genetics in biology to
              testing pH and extracting compounds in chemistry, our virtual
              science labs do it all!
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-orange-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6 text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              Extended reality learning
            </p>
            <p className="text-base font-light">
              Using moderated virtual reality (VR) and augmented reality tools
              (AR), our students can explore real-world environments they’d
              never be able to in a traditional classroom.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6 text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              Using technology to make learning inclusive
            </p>
            <p className="text-base font-light">
              Virtual activities can help students with additional needs learn
              in more three-dimensional ways, bridge knowledge gaps and boost
              their confidence in the classroom.
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-20  lg:gap-5 mx-auto my-20 py-20 max-w-6xl">
        <div className="grid grid-cols-2 place-items-center lg:block lg:relative">
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-green-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6 text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              Adapted to Modern Needs
            </p>
            <p className="text-base font-light">
              Our approach to online education is designed to meet the needs of
              today's learners. By integrating advanced educational technologies
              and methodologies, we ensure that our students receive an
              education that is both effective and engaging.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 px-5">
          <div className="flex flex-col gap-20">
            <span className="w-12 h-12 bg-green-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6 text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              Supportive and Inclusive Environment
            </p>
            <p className="text-base font-light">
              We believe in providing a supportive and inclusive environment
              where students can grow into confident, compassionate individuals
              guided by Islamic principles and academic success.
            </p>
          </div>
        </div>
      </div> */}
      {/* </div> */}
      {/* <div className=" bg-slate-100 pb-10 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20  lg:gap-5 mx-auto my-20 py-20 max-w-6xl">
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
              <p className="w-60 font-bold text-blue-500 py-2 px-4 border-1 border-sky-400 rounded-full bg-slate-200">
                Feeling supported
              </p>

              <p className="text-xl md:text-1xl lg:text-5xl font-bold text-gray-700">
                Guidance, praise, and support from teachers
              </p>

              <p className="text-lg font-semibold">
                At Al Madinah online school,Just because your teachers aren’t in
                the room with you, doesn’t mean they’re not available to help.
                In fact, you can contact them through our online learning
                platform at any time for support.
              </p>
            </div>
          </AnimatedComponentRight>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-6xl  mx-auto">
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-green-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6  text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              Regular lesson check-ins
            </p>
            <p className="text-base font-light">
              Our distraction-free virtual classrooms are designed with cues and
              features that enable teachers to spot any student who needs a
              helping hand to stay on track and check in with them. When every
              young person gets the attention they deserve, there’s no more risk
              of falling behind.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-orange-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6 text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              Personal feedback on tasks
            </p>
            <p className="text-base font-light">
              Teachers mark all homework tasks online, so students can check
              their feedback with ease at any time. This personalised guidance
              celebrates students’ strengths and successes and helps them see
              where (and how) they can improve.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-12 h-12 bg-sky-600 rounded-full p-3">
              <IoCheckmarkSharp className="w-6 h-6 text-white" />
            </span>
            <p className="text-xl lg:text-2xl font-bold text-sky-900">
              Extra support when needed
            </p>
            <p className="text-base font-light">
              Students who’d like extra help will find lots of ways to get
              academic support at King’s InterHigh. Alongside asking teachers
              for more guidance, your child can join subject-specific weekly
              drop-in clubs, core subject support courses for students with
              special educational needs, and more.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div class="bg-white p-6 rounded-lg">
        <div class="bg-white  rounded-lg ">
          <div className="flex flex-col items-center justify-center gap-5 text-center px-5">
            <p className="w-60 font-bold text-blue-500 py-2 px-4 border border-sky-400 rounded-full bg-slate-200">
              Meet the teachers
            </p>

            <p className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-700">
              Meet our brilliant teachers at GCSE
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="grid grid-cols-9 gap-4 mx-auto pb-8 pt-16 px-5">
        {/* Second Div - Swiper */}
      {/* <div className="flex flex-row gap-1 col-span-9 pb-8">
          <Swiper
            slidesPerView={3} // Default to showing 3 slides at a time
            spaceBetween={20} // Space between slides
            speed={1000}
            navigation={{
              prevEl: "#swiper-button-prev",
              nextEl: "#swiper-button-next",
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="!relative"
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "25px",
            }}
            breakpoints={{
              320: {
                // Mobile screens
                slidesPerView: 1, // Show 1 slide at a time
                spaceBetween: 10, // Adjust space between slides for mobile
              },
              640: {
                // Small screens and up
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                // Medium screens and up
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                // Large screens and up
                slidesPerView: 3, // Adjust as needed for larger screens
                spaceBetween: 20,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="lg:px-5 py-2 transform transition-transform duration-300 hover:-rotate-3">
                  <Link href={`/`}>
                    <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-lg shadow-lg">
                      <div className="w-auto h-auto flex items-center justify-center overflow-hidden">
                        <img
                          src={item.img}
                          alt={`Image ${index}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <h4 className="text-center text-lg font-bold leading-none text-black mt-2">
                        {item.link}
                      </h4>
                      <p className="text-center text-sm leading-none text-gray-500 mt-2">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Buttons */}
      {/* <div
              id="swiper-button-prev"
              className="bg-white !absolute left-2 top-1/2 z-10 rounded-full group hover:bg-teal-500 transition duration-500"
            >
              <BsArrowLeftCircleFill className="text-gray w-8 h-8 font-extrabold cursor-pointer group-hover:text-white transition duration-500" />
            </div> */}
      {/* <div
              id="swiper-button-next"
              className="bg-white !absolute top-1/2 z-10 right-2 rounded-full group hover:bg-teal-500 transition duration-500"
            >
              <BsArrowRightCircleFill className="text-gray w-8 h-8 font-extrabold cursor-pointer group-hover:text-white transition duration-500" />
            </div> */}
      {/* </Swiper> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div id="key-Stages" className="mx-auto max-w-3xl py-10 sm:py-20">
        {/* <div className="flex justify-center">
          <p className="font-bold text-blue-500 py-2 px-4 border-1 border-sky-400 rounded-full bg-slate-200">
            Key Stages
          </p>
        </div> */}
      {/* <div className="text-center pt-3">
          <h1 className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl lg:text-4xl">
            Study with us and discover your love for learning
          </h1>
          <p className="mt-6 text-md lg:text-lg  leading-8 text-gray-700">
            Welcome to Al-Madinah Online Secondary School, an Islamic school
            where academic achievement fosters the development of confident,
            compassionate individuals guided by Islamic principles.
          </p>
        </div> */}
      {/* </div>  */}
      {/* <AnimationBottom>
        {/* <div className="flex flex-wrap gap-8 justify-center">
          {schoolCardList.map((item, index) => (
            <div
              key={index}
              className={`
            ${
              item.schoolName === "Middle School"
                ? "bg-[#153254]"
                : item.schoolName === "Senior School (GCSE)"
                ? "bg-[#397bce]"
                : "bg-blue-400"
            } w-full py-10 max-w-xl border border-sky-200 rounded-lg shadow
          `}
            >
              <div className="flex flex-col items-center ">
                <div
                  className={` ${
                    item.schoolName === "Middle School"
                      ? "bg-[#153254]"
                      : "bg-[#397bce]"
                  }
           flex justify-center items-center
                  `}
                >
                  <img
                    className="w-34 h-40"
                    src={item.studentImg}
                    alt="Bonnie image"
                  />
                </div>
                <h5 className="py-3 text-4xl font-bold text-gray-900 dark:text-white">
                  {item.schoolName}
                </h5>
                <span className="text-xl font-medium py-3 text-gray-200 ">
                  {item.key_stage}
                </span>
                <span className="text-sm text-gray-200 py-3">{item.year}</span>
                <div className="flex justify-center items-center mt-4 md:mt-6">
                  {/* <a
                href={item.link}
                className="inline-flex items-center justify-center px-4 w-56 py-4 text-lg font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {item.linkTitle}
              </a> */}
      {/* <AnimationPopUp>
                    <div>
                      <Button link={item.link} title={item.linkTitle} />
                    </div>
                  </AnimationPopUp>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      {/* </AnimationBottom> */}
      {/* <div className="pt-5 mt-20">
        <div className="relative isolate px-4 overflow-hidden">
          <div
            className="max-w-8xl rounded-[40px] relative mx-auto overflow-hidden"
            style={{
              backgroundImage: "url(./middle_School_Banner.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center overflow-hidden">
              {/* Left Side - Image */}
      {/* <div className="w-full overflow-hidden">
                <AnimationBottom>
                  <Image
                    src={"/NextEventBookingImage1.png"}
                    className="mx-auto w-full h-full rounded-[40px]"
                    alt="heroImage"
                    width={1800}
                    height={200}
                  />
                </AnimationBottom>
              </div> */}

      {/* Middle Card */}
      {/* <div className="flex justify-center items-center w-full md:col-span-1 md:absolute md:left-2/3 md:top-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/2">
                {/* <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[60%] xl:w-[50%] bg-white rounded-xl shadow-lg p-8 sm:p-8 md:p-20 lg:p-16 min-h-[300px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px] overflow-hidden">
                  {/* <div className="flex justify-center">
                    <p className="font-bold text-blue-500 py-2 px-4 border-1 border-sky-400 rounded-full bg-slate-200">
                      What next
                    </p>
                  </div> */}
      {/* <div className="text-center">
                    {/* <h2 className="text-3xl font-semibold text-gray-800 sm:text-xl md:text-2xl lg:text-4xl">
                      Join our school at any time
                    </h2> */}
      {/* <p className="mt-8 text-base text-gray-600 sm:text-xl md:text-2xl lg:text-xl">
                      Enrol today, and join lessons within days! <br />
                    </p> */}
      {/* <p className="mt-2 text-base text-gray-600 sm:text-xl md:text-xxl lg:text-xl">
                      Al Madinah is open for enrolment all year round. We
                      kickstart each student’s online learning experience with a
                      welcoming induction process to make the transition smooth.
                    </p> */}
      {/* <div className="mt-8 text-sm sm:text-base md:text-lg lg:text-xl">
                      <Button link={"/"} title={"Book A Call"} />
                    </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default SlidingImageSection;
