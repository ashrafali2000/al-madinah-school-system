import Link from "next/link";
import React from "react";

export default function SeniorSchoolFaqs() {
  return (
    <div>
      <div className="mx-auto max-w-8xl mt-16 px-5">
        <div className="">
          <p className="  text-2xl md:text-3xl w-60 lg:text-4xl text-center font-bold text-blue-500 py-2 px-2 border border-sky-400 rounded-full bg-slate-200">
            FAQs
          </p>

          <h1 className="ml-2  mt-10 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Our online GCSE community
          </h1>
        </div>
        <div className="divide-y mt-4 divide-gray-100">
          <details className="group" open>
            <summary className="  text-xl  flex cursor-pointer list-none items-center justify-between py-4  font-medium text-secondary-900 group-open:text-primary-500 transition duration-1000">
              <p> What does GCSE stand for? </p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden transition duration-1000"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block transition duration-1000"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-3 text-secondary-500 transition duration-1000">
              GCSE stands for General Certificate of Secondary Education. GCSEs
              are the exams which students following the British Curriculum take
              between the ages of 14 and 16. Students start preparing for GCSEs
              in Year 10 and usually take their exams at the end of Year 11.
            </div>
            <div className="pb-4 text-secondary-500 transition duration-1000">
              GCSEs are usually a student’s first encounter with gaining a
              formal qualification, and so they prepare students for the
              pressures that come with higher education. They are an opportunity
              for students to expand their academic knowledge and develop their
              study skills too, as students can explore new subjects and
              discover their passions. Colleges, Sixth Forms and universities
              look to GCSEs to understand a student’s knowledge base, but also
              as an indication of a student’s personal attributes and study
              skills.
            </div>
            <div className="pb-4 text-secondary-500 transition duration-1000">
              IGCSEs, which are what is offered at Al Madinah School, are
              International GCSEs. Both GCSEs and IGCSEs are equally highly
              valued by universities and employers around the world. Most
              students take approximately 9 GCSE subjects and there may be a
              mixture of coursework and exams, depending on the individual
              subject. Take a look at the IGCSEs we offer on this page.
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
              Can you do GCSEs online?
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-4 text-secondary-500">
              Yes, doing full-time GCSE studies online with a virtual school is
              now a viable and sometimes more suitable option for many students.
              The popularity of online GCSE courses is on the rise, offering the
              advantages of traditional schooling along with added flexibility.
              One of the key benefits is the ability to learn from anywhere in
              the world, coupled with the convenience of revisiting recordings
              of live, timetabled lessons at any time.
            </div>
            <div className="pb-4 text-secondary-500"></div>
            <div className="pb-4 text-secondary-500">
              High-quality online GCSE courses are designed to mirror the
              traditional classroom experience while leveraging cutting-edge
              technologies to enhance the learning experience. With over 19
              years of experience in delivering the British Curriculum online,
              AL Madinah School provides students worldwide with a flexible
              approach to studying for their International GCSEs.
            </div>
            <div className="pb-4 text-secondary-500">
              For those considering GCSE studies outside a physical school
              setting, an online school offers invaluable structure and support.
              Rest assured, every part of the official subject curriculum is
              covered, with expert and qualified teachers guiding students every
              step of the way. Studying online also means you can learn in
              smaller class groups, so you get all the support you deserve, in a
              distraction-free learning environment.
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
              How to take a GCSE outside of school?
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-3 text-secondary-500">
              Online learning can be a great way to study for your GCSEs outside
              of a traditional school. Online schooling revolves around the
              individual. Along with the flexibility to study anywhere at any
              time, virtual schools, such as King’s InterHigh, offer students a
              broad range of subject options, plus the ability to learn from
              specialist, qualified teachers. In addition to live, timetabled
              lessons, the added flexibility of 24/7 access to recorded lessons
              means there is no need to worry about timetabling clashes or other
              commitments stopping our students from studying the exact choices
              they desire.
            </div>
            <div className="pb-4 text-secondary-500">
              There are many reasons why students may wish to take GCSE subjects
              outside of a physical school setting. For starters, the curriculum
              options available at the local school may not include all the
              subjects that learners are interested in. Timetabling restrictions
              may also limit the number of GCSEs students can take up. Students
              are often looking outside of school to take all the subjects they
              want to, and cover topics needed for future careers and
              aspirations.
            </div>
            <div className="pb-4 text-secondary-500">
              Studying for your GCSEs online could also mean you can get started
              with your GCSEs earlier than the British schooling system usually
              allows. King’s InterHigh alumnus, Kieran Bjegstrom, studied his
              GCSEs at age 13 and went on to study Theoretical Physics at
              Cambridge University by the age of 15. Other students might
              consider online GCSEs so that they can study at their own pace due
              to struggles in past schooling, commitments outside of their
              schoolwork, or if they are retaking their GCSEs. To see if online
              GCSEs could work for you, click here.
            </div>
            <div className="pb-4 text-secondary-500">
              \If you are already studying for your GCSEs, at home or at a local
              school, and are looking for extra support outside of school,
              King’s InterHigh’s 3-subject package allows students to enrol and
              select extra GCSEs. These additional GCSEs can be taken alongside
              in-school learning, or to support home educators studying their
              GCSEs from home.{" "}
              <Link href={`/#`}>
                {" "}
                <u>
                  {" "}
                  For more information on the support we offer for homeschooling
                  online, click here.
                </u>
              </Link>
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
              What Key Stage is GCSE?
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-4 text-secondary-500">
              Online learning can be a great way to study for your GCSEs outside
              of a traditional school. Online schooling revolves around the
              individual. Along with the flexibility to study anywhere at any
              time, virtual schools, such as King’s InterHigh, offer students a
              broad range of subject options, plus the ability to learn from
              specialist, qualified teachers. In addition to live, timetabled
              lessons, the added flexibility of 24/7 access to recorded lessons
              means there is no need to worry about timetabling clashes or other
              commitments stopping our students from studying the exact choices
              they desire.
            </div>
            <div className="pb-4 text-secondary-500">
              There are many reasons why students may wish to take GCSE subjects
              outside of a physical school setting. For starters, the curriculum
              options available at the local school may not include all the
              subjects that learners are interested in. Timetabling restrictions
              may also limit the number of GCSEs students can take up. Students
              are often looking outside of school to take all the subjects they
              want to, and cover topics needed for future careers and
              aspirations.
            </div>
            <div className="pb-4 text-secondary-500">
              Studying for your GCSEs online could also mean you can get started
              with your GCSEs earlier than the British schooling system usually
              allows. King’s InterHigh alumnus, Kieran Bjegstrom, studied his
              GCSEs at age 13 and went on to study Theoretical Physics at
              Cambridge University by the age of 15. Other students might
              consider online GCSEs so that they can study at their own pace due
              to struggles in past schooling, commitments outside of their
              schoolwork, or if they are retaking their GCSEs. To see if online
              GCSEs could work for you, click here
            </div>
            <div className="pb-4 text-secondary-500">
              If you are already studying for your GCSEs, at home or at a local
              school, and are looking for extra support outside of school,
              King’s InterHigh’s 3-subject package allows students to enrol and
              select extra GCSEs. These additional GCSEs can be taken alongside
              in-school learning, or to support home educators studying their
              GCSEs from home.{" "}
              <Link href={"/#"}>
                {" "}
                <u>
                  {" "}
                  For more information on the support we offer for homeschooling
                  online, click here .{" "}
                </u>
              </Link>
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
              What are the entry requirements to study your GCSEs online?
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-3 text-secondary-500">
              Typically, there are no entry requirements for enrolling in online
              GCSE courses, mirroring the approach of traditional schools. While
              some online schools may require an entry test, at King’s
              InterHigh, we embrace inclusivity, welcoming students at the GCSE
              level without any academic prerequisites, except for a proficient
              level of English necessary for active participation in lessons and
              studies.
            </div>
            <div className="pb-4 text-secondary-500">
              The purpose of GCSEs is to provide students with nationally and
              internationally recognised qualifications that allow higher
              education institutions, like colleges and universities, along with
              prospective employers, to gauge an individual’s intellectual
              aptitude relative to their peers. To uphold fairness, GCSE exams
              must remain accessible to students of all abilities, ensuring an
              equitable opportunity for every student to showcase their
              intelligence.
            </div>
            <div className="pb-4 text-secondary-500">
              Beyond assessing academic ability, GCSEs impart invaluable skills
              that endure long after completion. They instil a sense of
              responsibility for your own learning journey, foster collaboration
              with peers through group projects, and acquaint students with the
              examination process, all of which serve as a foundational toolkit,
              equipping students for the challenges and opportunities for life
              after GCSEs.
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
              How can I revise for GCSEs?
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-3 text-secondary-500">
              Wondering how to ace your GCSE exams? Start by laying a strong
              foundation early on – ideally, in year 10. Whilst you are
              learning, you may find it helpful to take notes throughout the
              year, including example questions and answers, while the topic is
              still fresh in your mind. Later, when mock or real exams approach,
              revisit these notes to help with your revision.
            </div>
            <div className="pb-4 text-secondary-500">
              The purpose of GCSEs is to provide students with nationally and At
              Al Madinah School, all students also have access to recordings of
              all live lessons. Lesson recordings and other learning resources
              are available 24/7.
            </div>
            <div className="pb-4 text-secondary-500">
              We would also recommend that you create a revision plan with what
              you plan to revise, and when, which will help you manage your
              revision time and enable you to focus on what is most important at
              each point in the academic year. It also means you won’t run out
              of time or forget to cover a crucial topic right before the exam.
            </div>
            <div className="pb-4 text-secondary-500">
              Tackling challenging topics requires patience and perseverance.
              Break them down into manageable chunks, practicing with past exam
              questions until you feel confident in your abilities. Regular
              practice builds confidence, empowering you to navigate exam day
              stress with ease.
            </div>
            <div className="pb-4 text-secondary-500">
              Dedicate ample time to subjects and topics where improvement is
              needed most. While it’s tempting to focus on strong areas,
              prioritising the areas you find more challenging ensures
              well-rounded preparation. Create checklists for difficult topics
              within each subject, setting achievable milestones to tackle one
              step at a time.
            </div>
            <div className="pb-4 text-secondary-500">
              Studying GCSEs online offers additional benefits. Access a library
              of online lessons and resources to revisit challenging topics as
              needed until you feel confident. With consistent effort and
              planning, success in your GCSE exams is within reach.
            </div>
            <div className="pb-4 text-secondary-500">
              The education team at King’s InterHigh are experts in helping
              students prepare for their exams and are on hand to answer any
              questions you may have to ensure you are fully prepared ahead of
              your GCSEs.
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
              What online GCSE subjects are there?
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-3 font-bold text-secondary-500">
              Studying with an online school opens the door to a wide range of
              GCSE subjects. This includes the core GCSE subjects of
              Mathematics, English and Sciences, as well as languages,
              humanities and more. Most GCSEs that are taught in traditional
              schools can now be found online, with the same British curriculum.
            </div>
            <div className="pb-4 text-secondary-500">
              At Al-Madinah , we cover 18 different International GCSE subjects
              online, as well as 7 assured subjects to complement your IGCSE
              curriculum. These are more vocational subjects, such as Art &
              Design or Photography, which will allow you to develop practical
              skills, explore a particular interest or help in producing a
              creative portfolio. IGCSEs, or International GCSES, are recognised
              as equivalent to GCSEs by employers and top universities around
              the world.
            </div>
            <div className="pb-4 text-secondary-500">
              Our 18 online International GCSE subjects include:
              <ul>
                <li>
                  Core subjects (English Language, English Literature, and
                  Mathematics)
                </li>
                <li>
                  Sciences (Biology, Chemistry, Physics, Further Mathematics,
                  Computer Science)
                </li>
                <li>
                  Modern Foreign Languages (French, German, Arabic, and Spanish)
                </li>
                <li>
                  Humanities (Geography, History, Business Studies, Psychology
                  and Religious Studies)
                </li>
              </ul>
            </div>
            <div className="pb-4 text-secondary-500">
              This covers a broad spectrum of the British Curriculum, with
              plenty of choice when it comes to picking GCSEs that will prepare
              you for A Levels or college, and beyond.{" "}
              <Link href={`/`}>
                <u>
                  {" "}
                  Click here to view the range of online GCSE subjects we offer
                  at Al Madinah School.
                </u>
              </Link>
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
              How many GCSEs can you take?
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-3 font-bold text-secondary-500">
              Usually, students take between 7 and 9 GCSE subjects. This number
              is recommended so that you can develop a broad academic
              understanding, whilst not overloading you when it comes to taking
              your exams. Most schools will request GCSE Maths and GCSE English
              as compulsory subjects, as most Sixth Forms and Colleges have an
              entry requirement of these subjects at grade 4 or above. In
              addition to this, most will want you to have at least 5 GCSEs at
              grade 4 or above.
            </div>
            <div className="pb-4 text-secondary-500">
              Universities are now increasingly looking at GCSE results, as well
              as A Levels or BTEC, to decide who they offer places to. Lots of
              Sixth Form and College students apply to universities with similar
              A Level or BTEC results, so succeeding at GCSEs is another way to
              prove yourself a worthy candidate to universities.
            </div>
            <div className="pb-4 text-secondary-500">
              You can always take more subjects if there is a certain topic you
              would love to learn more about. Online learning gives you the
              opportunity to take extra GCSE subjects, which isn’t possible at
              most traditional schools. Online lesson recordings are especially
              useful for revisiting tricky topics or to catch up on lessons you
              miss due to timetable clashes or personal commitments.
            </div>
            <div className="pb-4 text-secondary-500">
              Whilst it is tempting to try and study as many subjects as
              possible at GCSE, make sure you are not overworking yourself. It
              is more important to focus on better grades in fewer subjects,
              than trying to take on too much and sacrificing your grades. If
              you would like advice on choosing your GCSE options or what
              subjects are recommended for certain progression pathways, click
              here to get in touch with our admissions team.
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
              What are the best GCSEs to take?
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-3 font-bold text-secondary-500">
              No GCSE subject is ‘better’ to take than another. Most
              universities and employers will ask for the core subjects of
              English and Maths, as these develop the vital skills for you to be
              able to take the next steps in your studies. In these core
              subjects, you develop your analytical skills, learn to problem
              solve and think creatively. Alongside these core subjects, you are
              free to choose a selection of subjects which you feel you will
              enjoy and that will set you up for your future education and
              career.
            </div>
            <div className="pb-4 text-secondary-500">
              It is important when choosing your subjects to think about what
              you want to do after studying your GCSEs, and which subjects will
              align best with these future plans. Thinking ahead to your future
              career, or the industry you would love to work in can be a great
              starting point, and you can plan from there. Try researching your
              ideal A Levels or degree choices. Universities, Colleges and Sixth
              Forms will usually have on their websites the subjects they would
              recommend taking for various careers or university courses.
            </div>
            <div className="pb-4 text-secondary-500">
              For example, if you would love to study Economics at university,
              you might see that this requires you to have studied Maths,
              Business and/or Economics at A Level. With this in mind, you want
              to choose GCSE subjects which will prepare you for this. Alongside
              Maths, which is a compulsory GCSE option at most schools, you may
              want to take Business Studies at GCSE too, so that you can start
              to develop your understanding of the subject and the skills needed
              to succeed in it as soon as possible.
            </div>
            <div className="pb-4 text-secondary-500">
              If you are not set on a future pathway just yet, there is no need
              to worry. A good starting point is to consider what you really
              enjoy learning. Often, the subject you enjoy the most will be the
              one you have the highest grades in, and potentially lead to a
              career you enjoy too!
            </div>
          </details>
          <hr />
        </div>
      </div>
    </div>
  );
}
