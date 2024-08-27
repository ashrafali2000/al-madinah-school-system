import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { useDashboardContext } from "../../../contextApi/dashboardContext";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const dataContext = useDashboardContext();
  const setMainSection = dataContext.setMainSectionHandler;
  const setChildSection = dataContext.setChildSectionHandler;
  const setMidSection = dataContext.setMidSectionHandler;
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  // new Code
  const disasterManagementLst = [
    "Covid-19",
    "Pakistan Flood",
    "Turkey & Syria Earthquake",
    "Morocco Earthquake",
    "Palestine",
  ];
  const healthCareLst = [
    "Eye Camps",
    "Blood Donation",
    "Madical Van",
    "Faizan Rehabilitation Center",
    "Madical Clinic",
  ];
  const environmentDepartmentLst = ["Plantation"];

  const appealLst = [
    "Ramadan 2024",
    "Zakat",
    "Sadaqah",
    "Palestine Emergency",
    "Winter Emergency",
    "Food Box",
    "Hand Pump Project",
    "Water Well Project",
    "Orphan Kind",
    "Masjid Project",
  ];
  const donationLst = [
    "Iftar Donation",
    "Zakat Donation",
    "Food Box Donation",
    "Winter Emergency Donation",
    "Palestine Emergency Donation",
    "Orphan Donation",
    "Hand Pump Donation",
    "Water Well Donation",
    "Masjid Donation",
  ];
  const ourDepartmentList = [
    "Disaster Management",
    "Health Care",
    "Environment Department",
    "Water Project",
    "Orphan",
    "Masjid",
    "Education & Skills",
  ];
  const ourDepartmentAllList = [
    {
      title: "Disaster Management",
      data: [
        "Covid-19",
        "Pakistan Flood",
        "Turkey & Syria Earthquake",
        "Morocco Earthquake",
        "Palestine",
      ],
    },
    {
      title: "Health Care",
      data: [
        "Eye Camps",
        "Blood Donation",
        "Madical Van",
        "Faizan Rehabilitation Center",
        "Madical Clinic",
      ],
    },
    {
      title: "Environment Department",
      data: ["Plantation"],
    },
  ];
  return (
    <aside
      ref={sidebar}
      className={`absolute md:w-80 left-0 top-0 z-50 flex h-screen flex-col overflow-y-hidden bg-blue-800 text-gray-200 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 bg-blue-700">
        <h2 className="text-2xl text-center  font-bold py-6 uppercase w-full ">
          DashBoard
        </h2>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <FaArrowLeft className="w-14 h-14 text-white " />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-6 lg:px-6">
          {/* Donation */}
          <div
            className={`flex items-center gap-3 py-2 justify-center mb-4 ml-4 ${
              pathname === "/admin/dashboard" && "bg-blue-700"
            } `}
          >
            <TiHome className="w-5 h-5 text-gray-300" />
            <Link
              href={"/admin/dashboard"}
              className=" text-md text-gray-200 font-semibold "
            >
              Dashboard
            </Link>
          </div>
          {/* home */}
          <div
            className={`flex items-center gap-3 py-2 mb-4 ml-4 ${
              pathname === "/" && "bg-sky-900"
            } `}
          >
            <Link
              href={"/admin/form"}
              className=" text-md text-gray-200 font-semibold "
              onClick={() => {
                setChildSection("Main Page");
                setMainSection("Main Page");
                setMidSection("Main Page");
              }}
            >
              Main Page
            </Link>
          </div>
          {/* <!-- Menu Our Department --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={pathname === "/" || pathname.includes("admin")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <p
                        className={`group relative cursor-pointer flex items-center gap-2.5 rounded-sm py-2 px-4  text-md text-gray-200 font-semibold duration-300  ${
                          (pathname === "/admin/form" ||
                            pathname.includes("dashboard")) &&
                          ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/admin/form");
                          setMainSection("Our Department");
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        Our Students
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </p>

                      <div
                        className={`translate transform overflow-hidden ${
                          open && "hidden"
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          {ourDepartmentList.map((Department, index) => (
                            <div key={index}>
                              {Department === "Disaster Management" ||
                              Department === "Health Care" ||
                              Department === "Environment Department" ? (
                                <SidebarLinkGroup
                                  activeCondition={
                                    pathname === "/" ||
                                    pathname.includes("admin")
                                  }
                                >
                                  {(handleClick, open) => {
                                    return (
                                      <React.Fragment>
                                        <Link
                                          href="/admin/form"
                                          className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300  ${
                                            (pathname === "/" ||
                                              pathname.includes("dashboard")) &&
                                            ""
                                          }`}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setMidSection(Department);
                                            sidebarExpanded
                                              ? handleClick()
                                              : setSidebarExpanded(true);
                                          }}
                                        >
                                          {Department}
                                          <svg
                                            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                              open && "rotate-180"
                                            }`}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                              fill=""
                                            />
                                          </svg>
                                        </Link>

                                        <div
                                          className={`translate transform overflow-hidden ${
                                            open && "hidden"
                                          }`}
                                        >
                                          <ul className="">
                                            {ourDepartmentAllList
                                              .filter((elem: any) => {
                                                return (
                                                  Department === elem.title
                                                );
                                              })
                                              .map((elem: any, index: any) => (
                                                <div
                                                  key={index}
                                                  className="mt-2 mb-2 flex flex-col pl-4 gap-2"
                                                >
                                                  {elem.data.map(
                                                    (elem: any, index: any) => (
                                                      <div key={index}>
                                                        <Link
                                                          href="/admin/form"
                                                          onClick={() =>
                                                            setChildSection(
                                                              elem
                                                            )
                                                          }
                                                          className={`group  relative flex flex-col  rounded-md px-4 font-medium  duration-300 ease-in-out hover:text-teal-400 ${
                                                            pathname ===
                                                              `/${Department}` &&
                                                            "text-white"
                                                          } `}
                                                        >
                                                          {elem}
                                                        </Link>
                                                      </div>
                                                    )
                                                  )}
                                                </div>
                                              ))}
                                          </ul>
                                        </div>
                                      </React.Fragment>
                                    );
                                  }}
                                </SidebarLinkGroup>
                              ) : (
                                <Link
                                  href="/admin/form"
                                  onClick={() => setMidSection(Department)}
                                  className={`group relative hover:text-teal-500 flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300  ${
                                    (pathname === "/" ||
                                      pathname.includes("dashboard")) &&
                                    ""
                                  }`}
                                  // onClick={(e) => {
                                  //   e.preventDefault();
                                  //   setMidSection(Department);
                                  //   sidebarExpanded
                                  //     ? handleClick()
                                  //     : setSidebarExpanded(true);
                                  // }}
                                >
                                  {Department}
                                </Link>
                              )}
                            </div>
                          ))}
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
          {/* <!-- Menu Items Appeal --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={pathname === "/" || pathname.includes("admin")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <p
                        // href="/admin/form"
                        className={`group relative cursor-pointer flex items-center gap-2.5 rounded-sm py-2 px-4  text-md text-gray-200 font-semibold  duration-300  ${
                          (pathname === "/" ||
                            pathname.includes("dashboard")) &&
                          ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/admin/form");
                          setMainSection("Appeals");
                          // setMidSection(" ");
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        Instructors
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </p>

                      <div
                        className={`translate transform overflow-hidden ${
                          open && "hidden"
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          {appealLst.map((items, index) => (
                            <Link
                              key={index}
                              href="/admin/form"
                              className={`group relative hover:text-teal-500 flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300  ${
                                (pathname === "/" ||
                                  pathname.includes("dashboard")) &&
                                ""
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                setChildSection(items);
                                sidebarExpanded
                                  ? handleClick()
                                  : setSidebarExpanded(true);
                              }}
                            >
                              {items}
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
          {/* <!-- Menu Items Donation --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={pathname === "/" || pathname.includes("admin")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <p
                        // href="/admin/form"
                        className={`group relative cursor-pointer flex items-center gap-2.5 rounded-sm py-2 px-4  text-md text-gray-200 font-semibold  duration-300  ${
                          (pathname === "/" ||
                            pathname.includes("dashboard")) &&
                          ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/admin/form");
                          setMainSection("Donations");
                          // setMidSection(" ");
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        Campuses
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </p>

                      <div
                        className={`translate transform overflow-hidden ${
                          open && "hidden"
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          {donationLst.map((items, index) => (
                            <Link
                              key={index}
                              href="/admin/form"
                              className={`group relative hover:text-teal-500 flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300  ${
                                (pathname === "/" ||
                                  pathname.includes("dashboard")) &&
                                ""
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                setChildSection(items);
                                sidebarExpanded
                                  ? handleClick()
                                  : setSidebarExpanded(true);
                              }}
                            >
                              {items}
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
          {/* new page  */}
          <div
            className={`flex items-center gap-3 py-2 mb-4 ml-4 ${
              pathname === "/" && "bg-sky-900"
            } `}
          >
            <Link
              href={"/admin/form"}
              className=" text-md text-gray-200 font-semibold "
              onClick={() => {
                setChildSection("New Page");
                setMidSection("New Page");
                setMainSection("New Page");
              }}
            >
              Create New Page
            </Link>
          </div>
          {/* hide page  */}
          <div
            className={`flex items-center gap-3 py-2 mb-4 ml-4 ${
              pathname === "/" && "bg-sky-900"
            } `}
          >
            <Link
              href={"/admin/form"}
              className=" text-md text-gray-200 font-semibold "
              onClick={() => {
                setChildSection("Hide Page");
                setMidSection("Hide Page");
                setMainSection("Hide Page");
              }}
            >
              Hide / Delete Page
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
