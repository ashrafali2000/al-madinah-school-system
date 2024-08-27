"use client";
import Link from "next/link";
import { IoStar } from "react-icons/io5";
import { PiCalendarStar } from "react-icons/pi";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log("Form data:", formData);
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
      imageUrl: "/bannerHero.jpg",
    },
    {
      id: 2,
      title: "Grades and Fees",
      btnText: "Find Out More",
      imageUrl: "/02.jpg",
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
      imageUrl: "/04.jpg",
    },
    { id: 5, title: "Terms Date", btnText: "Learn More", imageUrl: "/05.jpg" },
    {
      id: 6,
      title: "Our Prospectus ",
      btnText: "Get It now",
      imageUrl: "/06.jpg",
    },
  ];
  return (
    <div>
      <div className="pt-5 mt-28">
        <div className="border-gray-300 border-4 rounded-2xl bg-gray-50  p-10 ml-8 flex flex-col items-start justify-start max-w-8xl mr-8  ">
          <Link href={`/`} className="text-lg font-bold mb-2">
            Admissions
          </Link>
          <h1 className="text-4xl font-bold mb-4">Join us</h1>
          <p className="text-lg font-bold mb-2">
            We’re a Top 4% British Private
          </p>
          <p className="text-lg font-bold mb-6">
            Independent School based on A*/A <br /> grades
          </p>
          {/* <hr className="my-18 border-yellow-300 " /> */}
        </div>
      </div>

      <div className="pt-0 mt-0">
        <hr className="my-18 border-yellow-300 border-t-8 w-full max-w-9xl mx-auto" />
      </div>
      <div className="   p-10  ml-8  ">
        <div className="grid grid-cols-3 gap-12  ">
          <div className="col-span-2 bg-white p-8 flex flex-row items-center justify-center">
            <div className="flex flex-col">
              <h1 className="text-2xl text-blue-950  font-bold">
                Current Enrolment: Sept 2024/2025 Academic Year
              </h1>
              <p className="text-xl text-black mt-4">
                Please use this form to complete your application to Cambridge
                Home School Online. Follow the link to pay our registration fee
                at the end of the form and a member of our admissions team will
                be in touch.{" "}
              </p>
              <p className="text-xl text-black mt-4">
                If you are not ready to apply yet and would like an informal
                chat with our admissions team{" "}
                <Link href={`/`}>
                  {" "}
                  <u className="text-blue-800"> click here</u>
                </Link>{" "}
                click here to schedule an online meeeting or simply{" "}
                <Link href={`/`}>
                  {" "}
                  <u className="text-blue-800"> contact us</u>
                </Link>{" "}
                and we will be glad to help.
              </p>
              <div className=" bg-blue-950 text-white font-semibold text-2xl mt-4 pb-10 max-w-8xl gap-3 ">
                <h1 className="ml-20 pb-10  text-2xl lg:text-4xl mt-6">
                  {" "}
                  Application Form{" "}
                </h1>
                {/* <div className="max-w-2xl mx-auto p-6 bg-white text-black shadow-md rounded mt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-3 block w-full border-green-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="block text-sm font-medium text-gray-700"
                      >
                        Parent First Name*
                      </label>
                      <input
                        type="text"
                        id="parentFirstName"
                        name="parentFirstName"
                        value={formData.parentFirstName}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="block text-sm font-medium text-gray-700"
                      >
                        Parent Last Name*
                      </label>
                      <input
                        type="text"
                        id="parentLastName"
                        name="parentLastName"
                        value={formData.parentLastName}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street Address*
                      </label>
                      <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="block text-sm font-medium text-gray-700"
                      >
                        City*
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="block text-sm font-medium text-gray-700"
                      >
                        Postal Code*
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="studentFirstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Student's First Name (If not the same as above)*
                      </label>
                      <input
                        type="text"
                        id="studentFirstName"
                        name="studentFirstName"
                        value={formData.studentFirstName}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="block text-sm font-medium text-gray-700"
                      >
                        Student's Last Name (If not the same as above)*
                      </label>
                      <input
                        type="text"
                        id="studentLastName"
                        name="studentLastName"
                        value={formData.studentLastName}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.studentLastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.studentLastName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="studentDOB"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Student's Date of Birth*
                      </label>
                      <input
                        type="date"
                        id="studentDOB"
                        name="studentDOB"
                        value={formData.studentDOB}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="block text-sm font-medium text-gray-700"
                      >
                        School Year on Entry*
                      </label>
                      <select
                        id="schoolYear"
                        name="schoolYear"
                        value={formData.schoolYear}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="block text-sm font-medium text-gray-700"
                      >
                        When would you like to enrol?
                      </label>
                      <select
                        id="enrolDate"
                        name="enrolDate"
                        value={formData.enrolDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Register
                    </button>
                  </form>
                </div> */}
                <div className="max-w-2xl mx-auto p-8 bg-white text-black shadow-lg rounded-lg mt-6">
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
                    <div>
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
                    </div>
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
          <div className="col-span-1 bg-white p-4">
            {" "}
            <div className="grid grid-cols-1 gap-4">
              <Link href={`/`}>
                <Card className="relative z-0 w-64 h-64">
                  <CardHeader className="p-0 z-0">
                    <img
                      src={`/bannerhero.jpg`}
                      alt={"ddddd"}
                      width={250}
                      height={250}
                      className="absolute inset-0 h-full w-full object-cover rounded-lg"
                    />
                  </CardHeader>

                  <CardBody className="absolute inset-0 bg-opacity-50 bg-black text-white p-4 flex items-center justify-center">
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
                  </CardBody>
                  <CardFooter className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black">
                    <Button color="primary" className="w-full text-white">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </Link>

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
                    <Card
                      key={card.id}
                      className="relative z-0 w-64 h-64 bg-blu "
                    >
                      <CardHeader className="p-0 z-0">
                        <img
                          src={card.imageUrl}
                          alt={card.title}
                          className="absolute inset-0 h-full w-full object-cover rounded-lg"
                        />
                      </CardHeader>
                      <CardBody className="absolute inset-0 bg-opacity-50 bg-black text-white p-4 flex items-left justify-center">
                        <h3 className="text-xl font-bold">{card.title}</h3>
                        <p className="text-base ml font-bold">
                          {card.description}
                        </p>
                      </CardBody>
                      <CardFooter className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black items-left justify-center">
                        <Button
                          color="primary"
                          className={`w-full text-white ${buttonColor}`}
                        >
                          {card.btnText}
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-amber-700 max ">
        <div className="p-1 flex flex-wrap items-center justify-center">
          {/* Card 1 */}
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-0 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <Image
                className="relative w-s"
                src={`./family2.jpg`}
                alt="Peace Lily"
                width={160}
                height={160}
              />
            </div>
            <div className="relative text-white px-4 pb-5 mt-4">
              {/* <span className="block opacity-75 -mb-1">Indoor</span> */}
              <div className="flex flex-col  gap-7 justify-between">
                <div>
                  <img src={`./family2.jpg`} alt="" />
                </div>
                <span className=" font-semibold text-xl">22nd August 2024</span>
                <span className=" rounded-full text-white text-xl font-bold px-0 py-2 leading-none flex items-center">
                  {" "}
                  The Importance of taster Days in Online Education{" "}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 m-6 relative overflow-hidden  bg-teal-500 rounded-lg max-w-xs shadow-lg group">
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-0 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <Image
                className="relative w-s"
                src={`./family2.jpg`}
                alt="Peace Lily"
                // width={160}
                // height={160}
              />
            </div>
            <div className="relative text-white px-4 pb-5 mt-4">
              {/* <span className="block opacity-75 -mb-1">Indoor</span> */}
              <div className="flex flex-col  gap-7 justify-between">
                <div>
                  <img src={`./family2.jpg`} alt="" />
                </div>
                <span className=" font-semibold text-xl">19th August 2024</span>
                <span className=" rounded-full text-white text-xl font-bold px-0 py-2 leading-none flex items-center">
                  {" "}
                  The Importance of taster Days in Online Education{" "}
                </span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-0 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <Image
                className="relative w-s"
                src={`./family2.jpg`}
                alt="Peace Lily"
                // width={160}
                // height={160}
              />
            </div>
            <div className="relative text-white px-4 pb-5 mt-4">
              {/* <span className="block opacity-75 -mb-1">Indoor</span> */}
              <div className="flex flex-col  gap-7 justify-between">
                <div>
                  <img src={`./family2.jpg`} alt="" />
                </div>
                <span className=" font-semibold text-xl">22nd August 2024</span>
                <span className=" rounded-full text-white text-xl font-bold px-0 py-2 leading-none flex items-center">
                  {" "}
                  The Importance of taster Days in Online Education{" "}
                </span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex-shrink-0 m-6 relative overflow-hidden  bg-teal-500 rounded-lg max-w-xs shadow-lg group">
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-0 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <Image
                className="relative w-s"
                src={`./family2.jpg`}
                alt="Peace Lily"
                // width={160}
                // height={160}
              />
            </div>
            <div className="relative text-white px-4 pb-5 mt-4">
              {/* <span className="block opacity-75 -mb-1">Indoor</span> */}
              <div className="flex flex-col  gap-7 justify-between">
                <div>
                  <img src={`./family2.jpg`} alt="" />
                </div>
                <span className=" font-semibold text-xl">22nd August 2024</span>
                <span className=" rounded-full text-white text-xl font-bold px-0 py-2 leading-none flex items-center">
                  {" "}
                  The Importance of taster Days in Online Education{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
