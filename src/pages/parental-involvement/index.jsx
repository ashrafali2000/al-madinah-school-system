import React from "react";
import AnimatedComponentLeft from "../../components/animations/AnimationLeft";
import AnimatedComponentRight from "../../components/animations/AnimationRigth";
import { motion } from "framer-motion";
export default function ParentalInvolvement() {
  return (
    <div className="my-32  max-w-7xl  mx-auto  ">
      {/* <div className="mx-auto">
<div className="bg-white p-4 border-4 mx-auto rounded-[40px] border-gray-700">
  {/* {" "}
  <div className="flex justify-center items-center  ">
    <motion.h3
      className="cursor-pointer text-3xl rounded w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 20, // removed quotes around the duration
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      Mission Statement
    </motion.h3>
  </div>
  <p className="text-gray-700 pt-3 pb-5">
    At Al-Madinah Online School, our mission is to provide an
    exceptional and varied education that nurtures the intellectual,
    spiritual, and moral development of every child. We are committed to
    fostering a love for learning grounded in strong ethical values,
    while also offering a broad curriculum that prepares students for
    all aspects of life. By cultivating compassionate, confident
    individuals who are ready to contribute positively to society, we
    aim to inspire and empower our students to achieve their full
    potential in both their academic and personal journeys. Through a
    comprehensive curriculum, personalised support, and a vibrant online
    community, we strive to create a holistic educational experience.
  </p> */}
      {/* <div className="flex justify-center items-center">
<motion.h3
  className="cursor-pointer text-3xl rounded w-auto p-4 px-7 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
  initial={{ opacity: 0, scale: 0.2 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 20, // removed quotes around the duration
    delay: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
  }}
>
  Vision
</motion.h3>
</div> */}
      {/* <p className="text-gray-700 pt-3 pb-5">
At Al-Madinah Online School, we are committed to providing a
comprehensive education that integrates core academic subjects such as
Maths, English, Science, and Islamic studies with the ethical framework
and principles of Islam. Our mission is to empower students with the
knowledge and skills to excel academically while nurturing a strong
foundation in Islamic values such as compassion, integrity, and social
responsibility. Through innovative teaching methodologies and
personalised learning experiences in both academic and Islamic studies,
we prepare students to impact society and thrive in a diverse global
community positively.
</p> */}
      {/* <div className="flex justify-center items-center">
<motion.h3
  className="cursor-pointer text-3xl rounded w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold"
  initial={{ opacity: 0, scale: 0.2 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 20,
    delay: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
  }}
>
  Values
</motion.h3>
</div> */}
      {/* <p className="text-gray-700 pt-3">
At Al-Madinah Online School, Islamic values shape our nurturing
environment. We emphasise respectful behaviour and good manners in all
interactions, fostering virtues such as honesty, kindness, humility, and
patience. Our commitment to excellence is guided by sincerity, fairness,
and empathy towards all. Encouraging cooperation and support within our
community, we instil accountability and responsibility in our students,
preparing them to contribute to society positively.
</p> */}
      {/* <ul className="pb-5">
    <li>
      <span className="font-semibold ">
        English Language and Literature
      </span>{" "}
      Students develop advanced reading, writing, and analytical skills,
      exploring a variety of literary genres and texts.
    </li>
    <li>
      <span className="font-semibold ">Mathematics</span> Our
      mathematics program focuses on developing strong numeracy skills,
      logical reasoning, and problem-solving abilities.
    </li>
    <li>
      <span className="font-semibold ">Science </span> The science
      curriculum covers Biology, Chemistry, and Physics, encouraging
      students to explore the natural world through experiments and
      inquiry-based learning.
    </li>
    <li>
      <span className="font-semibold ">History </span> Students learn
      about significant historical events and figures, developing an
      understanding of how the past shapes the present.
    </li>
    <li>
      <span className="font-semibold ">Geography </span> The study of
      physical and human geography helps students understand the
      complexities of our world and the environment.
    </li>
    <li>
      <span className="font-semibold ">Modern Foreign Languages </span>{" "}
      We offer Arabic, providing students with the opportunity to become
      proficient in additional languages.
    </li>
    <li>
      <span className="font-semibold ">IT </span> Students acquire
      essential skills in coding, programming, and digital literacy.
    </li>
    <li>
      <span className="font-semibold ">Physical Education </span>{" "}
      Regular physical activity promotes health and well-being, with a
      focus on teamwork.
    </li>
  </ul> */}
      {/* <h3 className="text-2xl text-gray-700 font-semibold">
    Integration with Islamic Studies
  </h3> */}
      {/* <p className="text-gray-700 pt-3">
    Our curriculum seamlessly integrates Islamic studies, ensuring that
    students receive a balanced education that nurtures their spiritual
    and moral development. Key Islamic subjects include:
  </p> */}
      {/* <ul className="pb-5">
    <li>
      <span className="font-semibold ">Quranic Studies</span> Students
      understand the Quran, learning its application in daily life.
    </li>
    <li>
      <span className="font-semibold ">Islamic History</span>Lessons on
      the life of the Prophet Muhammad (Peace and blessings be upon
      them) and significant events in Islamic history.
    </li>
    <li>
      <span className="font-semibold ">Fiqh and Aqeedah </span>{" "}
      Understanding Islamic jurisprudence and beliefs.
    </li>
    <li>
      <span className="font-semibold ">History </span> Students learn
      about significant historical events and figures, developing an
      understanding of how the past shapes the present.
    </li>
    <li>
      <span className="font-semibold ">Arabic Language </span>Emphasis
      on proficiency in Arabic to enhance Quranic understanding and
      communication.
    </li>
    <li>
      <span className="font-semibold ">Modern Foreign Languages </span>{" "}
      We offer Arabic, providing students with the opportunity to become
      proficient in additional languages.
    </li>
    <li>
      <span className="font-semibold ">IT </span> Students acquire
      essential skills in coding, programming, and digital literacy.
    </li>
    <li>
      <span className="font-semibold ">Physical Education </span>{" "}
      Regular physical activity promotes health and well-being, with a
      focus on teamwork.
    </li>
  // </ul> */}
      {/* // <h3 className="text-2xl text-gray-700 font-semibold">
  //   Teaching Methodology
  // </h3> */}
      {/* <p className="text-gray-700 pt-3">
    Our teaching methods are designed to engage students actively in
    their learning journey. We employ a variety of instructional
    strategies, including:
  </p> */}
      {/* <ul className="pb-5">
    <li>
      <span className="font-semibold ">Interactive Lessons</span> Use of
      technology and multimedia to make lessons dynamic and engaging.
    </li>
    <li>
      <span className="font-semibold ">Collaborative Learning</span>
      Group work and discussions to foster teamwork and communication
      skills.
    </li>
    <li>
      <span className="font-semibold ">Inquiry-Based Learning </span>{" "}
      Encouraging students to ask questions and explore topics in depth.
    </li>
    <li>
      <span className="font-semibold ">Continuous Feedback </span>{" "}
      Regular assessments and feedback to support student growth and
      improvement.
    </li>
  </ul> */}
      {/* <h3 className="text-2xl text-gray-700 font-semibold">
    Assessment and Evaluation
  </h3> */}
      {/* <p className="text-gray-700 pt-3">
    We use a comprehensive assessment system to evaluate student
    progress and achievement. This includes:
  </p> */}
      {/* <ul className="pb-5">
    <li>
      <span className="font-semibold ">Examinations</span> Formal exams
      to assess understanding and knowledge retention.
    </li>
    <li>
      <span className="font-semibold ">Coursework </span>
      Assignments and projects that allow students to apply their
      learning in practical ways.
    </li>
    <li>
      <span className="font-semibold ">Formative Assessments </span>{" "}
      Regular quizzes and class activities to monitor ongoing progress.
    </li>
  </ul> */}
      {/* <h3 className="text-2xl text-gray-700 font-semibold">
    Extracurricular Enrichment
  </h3> */}
      {/* <p className="text-gray-700 pt-3">
    Beyond the classroom, we offer a variety of extracurricular
    activities that complement our academic program. These activities
    provide opportunities for students to explore their interests and
    develop new skills:
  </p> */}
      {/* <ul className="pb-5">
    <li>
      <span className="font-semibold ">Clubs and Societies</span>{" "}
      Science Club, Debate Team, Art Club, Quran Recitation Group.
    </li>
    <li>
      <span className="font-semibold ">Sports Teams </span>
      Soccer, Basketball, Swimming, Athletics.
    </li>
    <li>
      <span className="font-semibold ">Competitions and Events </span>{" "}
      Participation in academic competitions, sports meets, and cultural
      events.
    </li>
  </ul> */}
      {/* </div> */}
      {/* </div> */}
      <div className="bg-white place-items-center rounded-[40px] max-w-7xl h-auto border-4 border-gray-700 mx-4 md:mx-0">
        <div className="grid grid-cols-1 mx-auto lg:pb-8 lg:grid-cols-2 px-6 lg:px-10 gap-6 mt-10 lg:mt-20">
          <AnimatedComponentLeft>
            <div className="flex justify-center">
              <img
                className="rounded-xl w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
                src="/newImges/parent.jpg"
                alt="image"
              />
            </div>
          </AnimatedComponentLeft>
          <AnimatedComponentRight>
            <div className="flex flex-col gap-4">
              <div className="flex items-start">
                <motion.h3
                  className="cursor-pointer text-xl sm:text-2xl md:text-3xl border-2 border-gray-700 rounded-lg w-auto p-3 md:p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold"
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 20,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  Parental Involvement
                </motion.h3>
              </div>
              <p className="text-base sm:text-lg md:text-lg mt-4 text-gray-700 font-bold">
                We believe in strong partnerships between the school and
                parents. Parents are encouraged to participate in volunteering
                for school events and stay engaged through regular communication
                channels such as newsletters, parent-teacher meetings, and our
                online portal.
              </p>
            </div>
          </AnimatedComponentRight>
        </div>
      </div>

      {/* <div className="pt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-5 lg:gap-10">
  {/* <div className="p-7 h-80  rounded-[40px] border-4 border-gray-700 bg-white ">
  {/* <div className="">
    <AnimationPopUp>
      <div>
        <Button link={""} title={"School Life"} />
      </div>
    </AnimationPopUp>
  </div> */}

      {/* <p className="text-gray-700 mt-5 pt-3">
    At Al-Madinah online school,School life is designed to be
    enriching,balanced,and supportive.We foster an environment where
    academic excellence goes hand in hand with personal and spiritual
    growth.Our students thrive in a community that values respect,
    responsibility,and the pursuit of knowledge.
  </p> */}
      {/* </div> */}
      {/* <div className="p-7 h-80   rounded-[40px] border-4 border-gray-700 bg-white ">
  {/* <h3 className="text-2xl text-gray-700 font-semibold">
    Daily Schedule
  </h3> */}
      {/* <div className="">
    <AnimationPopUp>
      <div>
        <Button link={""} title={"Daily Schedule"} />
      </div>
    </AnimationPopUp>
  </div> */}
      {/* <p className=" mt-5 text-gray-700 pt-3">
    A typical school day at our school starts at 8:30 and ends at
    3:30.Our schedule includes time for academic classes,
    prayers,breaks,and extracurricular activities.Each day is structured
    to provide a balanced mix of learning,reflection,and recreation.
  </p> */}
      {/* </div> */}
      {/* <div className="p-7 h-80 rounded-[40px] border-4 border-gray-700 bg-white ">
  {/* <h3 className="text-2xl text-gray-700 font-semibold">
    {" "}
    Extracurricular Activities
  </h3> */}
      {/* <div className="">
  <AnimationPopUp>
    <div>
      <Button link={""} title={"Daily Schedule"} />
    </div>
  </AnimationPopUp>
</div> */}
      {/* <p className="mt-4 text-gray-700 pt-3">
  We offer a wide range of extracurricular activities to complement our
  academic programs:
</p> */}
      {/* <ul>
  {/* <li>
    <span className="font-semibold ">Clubs:</span> Quran Club, Science
    Club,Debate Club,Art Club
  </li> */}
      {/* <li>
    <span className="font-semibold ">Community Service:</span> Volunteer
    programs,charity drives,environmental projects.
  </li> */}
      {/* </ul>  */}
      {/* </div> */}
      {/* <div className="p-7 h-80 rounded-[40px] border-4 border-gray-700 bg-white ">
  {/* <h3 className="text-2xl text-gray-700 font-semibold">
    Support Services
  </h3> */}
      {/* <div className="">
    <AnimationPopUp>
      <div>
        <Button link={""} title={"Support Services"} />
      </div>
    </AnimationPopUp>
  </div> */}
      {/* <p className="mt-5 text-gray-700 pt-3">
    We provide comprehensive support services to ensure the well-being
    of our students:
  </p> */}
      {/* <ul>
    <li>
      <span className="font-semibold ">Academic Support:</span>{" "}
      Tutoring,homework help, study skills workshops.
    </li>
    <li>
      <span className="font-semibold ">Counseling:</span> Professional
      counselors available for personal and academic guidance.
      programs,charity drives,environmental projects.
    </li>
    <li>
      <span className="font-semibold ">Personal Development:</span>{" "}
      Workshops on time management,leadership,and spiritual growth.
    </li>
  </ul> */}
      {/* </div> */}
      {/* <div className="p-7 h-80 rounded-[40px] border-4 border-gray-700 bg-white ">
  {/* <h3 className="text-2xl text-gray-700 font-semibold">
   
  </h3> */}
      {/* <div className="">
    <AnimationPopUp>
      <div>
        <Button link={""} title={"Community and Culture"} />
      </div>
    </AnimationPopUp>
  </div> */}
      {/* <p className="mt-4 text-gray-700 pt-3">
    Our school community is built on the principles of mutual
    respect,collaboration, and a share commitment to Islamic values.We
    celebrate diversity and encourage students to engage with and
    contribute to the community through various events.
  </p> */}
      {/* </div> */}
      {/* <div className="p-7 h-80 rounded-[40px] border-4 border-gray-700 bg-white ">
  {/* <h3 className="text-2xl text-gray-700 font-semibold">
    Parental Involvement
  </h3> */}
      {/* <div className="">
    <AnimationPopUp>
      <div>
        <Button link={""} title={"Parental Involvement"} />
      </div>
    </AnimationPopUp>
  </div> */}
      {/* <p className="mt-4 text-gray-700 pt-3">
    We believe in Strong partnerships between the school and
    parents.Parents are encouraged to participate in the Volunteer for
    school events,and stay engaged through regular communication
    channels such as newsletters,parent-teacher meetings,and our online
    portal.
  </p> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
