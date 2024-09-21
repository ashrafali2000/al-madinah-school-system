"use client";
import Link from "next/link";
import { IoStar } from "react-icons/io5";
import { PiCalendarStar } from "react-icons/pi";
import axios from "axios";
import { useState } from "react";
import { adminMailer, registration } from "../../libs/api";

export default function Enquiry() {
  const products = [
    {
      id: 1,
      title: "Peace Lily",
      type: "Indoor",
      price: "$36.00",
      image:
        "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
      bgColor: "bg-orange-500",
      priceTextColor: "text-orange-500",
    },
    {
      id: 2,
      title: "Monstera",
      type: "Outdoor",
      price: "$45.00",
      image:
        "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
      bgColor: "bg-teal-500",
      priceTextColor: "text-teal-500",
    },
    {
      id: 3,
      title: "Oak Tree",
      type: "Outdoor",
      price: "$68.50",
      image:
        "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
      bgColor: "bg-orange-500",
      priceTextColor: "text-purple-500",
    },
  ];
  const validateForm = () => {
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    // Validate parent first name
    if (!formData.parentFirstName) {
      newErrors.parentFirstName = "Parent First Name is required";
    }

    // Validate parent last name
    if (!formData.parentLastName) {
      newErrors.parentLastName = "Parent Last Name is required";
    }

    // Validate street address
    if (!formData.streetAddress) {
      newErrors.streetAddress = "Street Address is required";
    }

    // Validate city
    if (!formData.city) {
      newErrors.city = "City is required";
    }

    // Validate postal code
    if (!formData.postalCode) {
      newErrors.postalCode = "Postal Code is required";
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.postalCode)) {
      newErrors.postalCode = "Postal Code is invalid";
    }

    // Validate phone number
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{11}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number is invalid. It should be 11 digits";
    }

    // Validate student first name
    if (!formData.studentFirstName) {
      newErrors.studentFirstName = "Student's First Name is required";
    }

    // Validate student last name
    if (!formData.studentLastName) {
      newErrors.studentLastName = "Student's Last Name is required";
    }

    // Validate student date of birth
    if (!formData.studentDOB) {
      newErrors.studentDOB = "Student's Date of Birth is required";
    }

    // Validate school year
    if (!formData.schoolYear) {
      newErrors.schoolYear = "School Year on Entry is required";
    }

    // Validate enrolment date
    if (!formData.enrolDate) {
      newErrors.enrolDate = "Enrolment Date is required";
    }

    return newErrors;
  };

  const [formData, setFormData] = useState({
    email: "",
    parentFirstName: "",
    parentLastName: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    studentFirstName: "",
    studentLastName: "",
    studentDOB: "",
    schoolYear: "",
    enrolDate: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log("Form data:", formData);
      await registration(formData);
      await adminMailer(formData);

      setFormData(initialFormData);
      // You can send formData to an API or handle it as needed
    } else {
      setErrors(validationErrors);
    }
  };
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const initialFormData = {
    email: "",
    parentFirstName: "",
    parentLastName: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    studentFirstName: "",
    studentLastName: "",
    studentDOB: "",
    schoolYear: "",
    enrolDate: "",
  };
  const cardData = [
    {
      id: 1,
      title: "Our Schools",
      description: "Prep, Upper,Lower and Sixth Form",
      btnText: "Learn More",
      imageUrl: "/hijab-girl.jpg",
    },
    {
      id: 2,
      title: "Grades and Fees",
      btnText: "Find Out More",
      imageUrl: "/culture.jpg",
    },
    {
      id: 3,
      title: "Our Ideal Student",
      btnText: "Learn More",
      imageUrl: "/03.jpg",
    },
    {
      id: 4,
      title: "Admission Process",
      btnText: "Apply Today",
      imageUrl: "/newImges/5.jpg",
    },
    // { id: 5, title: "Terms Date", btnText: "Learn More", imageUrl: "/05.jpg" },
    // // {
    //   id: 6,
    //   title: "Our Prospectus ",
    //   btnText: "Get It now",
    //   imageUrl: "/06.jpg",
    // },
  ];
  return (
    <div>
      {/* <div className="pt-5 mt-28"> */}
      {/* <div className="border-gray-300 border-4 rounded-2xl bg-gray-50  p-10 ml-8 flex flex-col items-start justify-start max-w-8xl mr-8  "> */}
      {/* <Link href={`/`} className="text-lg font-bold mb-2">
            Admissions
          </Link> */}
      {/* <h1 className="text-4xl font-bold mb-4">Join us</h1> */}
      {/* <p className="text-lg font-bold mb-2">
            We’re a Top 4% British Private
          </p> */}
      {/* <p className="text-lg font-bold mb-6"> */}
      {/* </p> */}
      {/* <hr className="my-18 border-yellow-300 " /> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div className="pt-0 ">
        <hr className="my-18 border-yellow-300 border-t-8 w-full max-w-9xl mx-auto" />
      </div> */}
      <div className=" mt-28  p-10  ml-8  ">
        <div className="mx-auto grid grid-cols-1  md:grid-cols-3 gap-12 max-w-7xl ">
          <div className="md:col-span-2 w-auto rounded-[40px] border-4 border-gray-700 h-[1350px] bg-white p-4 md:p-8 flex flex-col  ">
            <div className="flex flex-col">
              <div className=" bg-blue-950 rounded-[40px] border-4 border-[#ffa500] text-white font-semibold  text-2xl mt-4 pb-10 gap-3 ">
                <h1 className=" pb-10 text-center  text-2xl lg:text-4xl mt-6">
                  {" "}
                  Registration Form{" "}
                </h1>

                <div className="max-w-2xl mx-auto p-8  bg-white text-black shadow-lg rounded-lg mt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="parentFirstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Parent First Name*
                      </label>
                      <input
                        type="text"
                        id="parentFirstName"
                        name="parentFirstName"
                        value={formData.parentFirstName}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                      />
                      {errors.parentFirstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.parentFirstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="parentLastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Parent Last Name*
                      </label>
                      <input
                        type="text"
                        id="parentLastName"
                        name="parentLastName"
                        value={formData.parentLastName}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                      />
                      {errors.parentLastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.parentLastName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="streetAddress"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Street Address*
                      </label>
                      <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                      />
                      {errors.streetAddress && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.streetAddress}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        City*
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                      />
                      {errors.city && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.city}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="postalCode"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Postal Code*
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                      />
                      {errors.postalCode && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.postalCode}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                    {/* <div>
                      <label
                        htmlFor="studentFirstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Student's First Name (If not the same as above)*
                      </label>
                      <input
                        type="text"
                        id="studentFirstName"
                        name="studentFirstName"
                        value={formData.studentFirstName}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                      />
                      {errors.studentFirstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.studentFirstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="studentLastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Student's Last Name (If not the same as above)*
                      </label>
                      <input
                        type="text"
                        id="studentLastName"
                        name="studentLastName"
                        value={formData.studentLastName}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                      />
                      {errors.studentLastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.studentLastName}
                        </p>
                      )}
                    </div> */}
                    <div>
                      <label
                        htmlFor="studentDOB"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Student's Date of Birth*
                      </label>
                      <input
                        type="date"
                        id="studentDOB"
                        name="studentDOB"
                        value={formData.studentDOB}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                      />
                      {errors.studentDOB && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.studentDOB}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="schoolYear"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        School Year on Entry*
                      </label>
                      <select
                        id="schoolYear"
                        name="schoolYear"
                        value={formData.schoolYear}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                      >
                        <option value="">Select a year</option>
                        <option value="Year 1">Year 1</option>
                        <option value="Year 2">Year 2</option>
                        <option value="Year 3">Year 3</option>
                        <option value="Year 4">Year 4</option>
                        <option value="Year 5">Year 5</option>
                        <option value="Year 6">Year 6</option>
                      </select>
                      {errors.schoolYear && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.schoolYear}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="enrolDate"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        When would you like to enrol?
                      </label>
                      <select
                        id="enrolDate"
                        name="enrolDate"
                        value={formData.enrolDate}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                      >
                        <option value="">Select a date</option>
                        <option value="January 2025">January 2025</option>
                        <option value="February 2025">February 2025</option>
                        <option value="March 2025">March 2025</option>
                        <option value="April 2025">April 2025</option>
                        <option value="May 2025">May 2025</option>
                        <option value="June 2025">June 2025</option>
                      </select>
                      {errors.enrolDate && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.enrolDate}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 border-4 border-gray-700 rounded-[40px] bg-white p-4">
            {" "}
            <div className="grid grid-cols-1 gap-4">
              {/* <Link href={`/`}>
                <div className="relative z-0 w-64 h-64">
                  <div className="p-0 z-0">
                    <img
                      src={`/bannerhero.jpg`}
                      alt={"ddddd"}
                      width={250}
                      height={250}
                      className="absolute inset-0 h-full w-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="absolute inset-0 bg-opacity-50 bg-black text-white p-4 flex items-center justify-center">
                    <h3 className="text-xl font-bold">
                      See Our 5 Stars Reviews
                    </h3>
                    <div className="flex gap-2 ">
                      <IoStar className="w-6 h-6 text-yellow-400" />
                      <IoStar className="w-6 h-6 text-yellow-400" />
                      <IoStar className="w-6 h-6 text-yellow-400" />
                      <IoStar className="w-6 h-6 text-yellow-400" />
                      <IoStar className="w-6 h-6 text-yellow-400" />
                    </div>
                    <p>powered by </p>
                    <div className="flex flex-row">
                      <PiCalendarStar className="w-6 h-6 text-blue-400" />{" "}
                      <p>
                        {" "}
                        Trust <span className="text-blue-400">Pilot</span>
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black">
                    <button className="w-full text-white">Learn More</button>
                  </div>
                </div>
              </Link> */}

              {cardData.map((card, index) => {
                // Define an array of colors you want to use for the buttons
                const buttonColors = [
                  "bg-yellow-600",
                  "bg-blue-600",
                  "bg-blue-600",
                  "bg-blue-600",
                  "bg-blue-600",
                ];

                // Determine the color based on the index
                const buttonColor = buttonColors[index % buttonColors.length]; // Cycle through colors if more cards than colors

                return (
                  <Link href={"/"}>
                    <div
                      key={card.id}
                      className="relative z-0 w-90 h-96 border-8 border-gray-700 rounded-lg "
                    >
                      <div className="p-0 z-0">
                        <img
                          src={card.imageUrl}
                          alt={card.title}
                          className="absolute inset-0 h-full w-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="absolute inset-0 bg-opacity-50 bg-black text-white p-4 flex items-left justify-center">
                        {/* <h3 className="text-xl font-bold">{card.title}</h3> */}
                        {/* <p className="text-base ml font-bold">
                          {card.description}
                        </p> */}
                      </div>
                      <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black items-left justify-center">
                        {/* <button
                          // color="primary"
                          className={`w-full text-white ${buttonColor}`}
                        >
                          {card.btnText}
                        </button> */}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
