import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { motion } from "framer-motion";
export default function fees() {
  return (
    <div className=" mt-28 pb-10 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-1 border-4 border-gray-700 rounded-[40px]  bg-white gap-10 lg:gap-5 mx-auto my-20 py-20 pb-18 max-w-7xl">
        <div className="flex flex-col place-items-center    gap-5 px-5">
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
            Fees Structure
          </motion.h3>
          <h2 className="text-2xl text-center md:text-2xl lg:text-2xl p-6 text-[#00477e] hover:text-[#ffa500] font-medium">
            At our Islamic secondary school, we strive to provide quality
            education while ensuring our fee structure is both accessible and
            transparent. Below is the breakdown of our fee payment options:
          </h2>
        </div>

        <div className="flex flex-col place-items-center   gap-5 px-5">
          <motion.h3
            className="  cursor-pointer text-3xl border-2 border-gray-700 rounded-[40px] w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 20, // removed quotes around the duration
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Monthly Fee
          </motion.h3>
          <p className="border-2 rounded-[40px] p-3  font-bold  border-[#00477e]">
            £210 per month
          </p>
          <h2 className="text-2xl text-center md:text-2xl lg:text-2xl p-6 text-[#00477e] hover:text-[#ffa500] font-medium">
            Payments must be transferred via direct debit at the beginning of
            each month. This allows for a flexible approach, giving parents the
            opportunity to spread the cost evenly across the year.
          </h2>
        </div>
        <div className="flex flex-col place-items-center   gap-5 px-5">
          <motion.h3
            className="  cursor-pointer text-3xl border-2 border-gray-700 rounded-[40px] w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 20, // removed quotes around the duration
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Term Fee
          </motion.h3>
          <p className="border-2 rounded-[40px] p-3  font-bold  border-[#00477e]">
            £840 per term
          </p>
          <h2 className="text-2xl text-center md:text-2xl lg:text-2xl p-6 text-[#00477e] hover:text-[#ffa500] font-medium">
            For parents who prefer to pay termly, payments will be made at the
            beginning of each term. The academic year is divided into three
            terms: First Term: Payment due in September Second Term: Payment due
            in January Third Term: Payment due in April All term payments must
            be transferred via direct debit.
          </h2>
        </div>
        <div className="flex flex-col place-items-center   gap-5 px-5">
          <motion.h3
            className="  cursor-pointer text-3xl border-2 border-gray-700 rounded-[40px] w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 20, // removed quotes around the duration
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Annual Fee
          </motion.h3>
          <p className="border-2 rounded-[40px] p-3 font-bold border-[#00477e]">
            £2,520 per year
          </p>
          <h2 className="text-2xl text-center md:text-2xl lg:text-2xl p-6 text-[#00477e] hover:text-[#ffa500] font-medium">
            Parents can choose to make a one-time annual payment, which will
            cover the entire academic year. Annual payments are due at the start
            of the academic year in September and are eligible for a 5% discount
            for early payments.
          </h2>
        </div>
        <div className="flex flex-col place-items-center   gap-5 px-5">
          <motion.h3
            className="  cursor-pointer text-3xl border-2 border-gray-700 rounded-[40px] w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 20, // removed quotes around the duration
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Sibling Discount
          </motion.h3>

          <h2 className="text-2xl text-center md:text-2xl lg:text-2xl p-6 text-[#00477e] hover:text-[#ffa500] font-medium">
            We offer a 10% sibling discount to families enrolling more than one
            child. This discount will apply to the fees of each additional
            sibling after the first child. Please contact our admissions office
            for more details on the available discount for your family.
          </h2>
        </div>
        <div className="flex flex-col place-items-center   gap-5 px-5">
          <motion.h3
            className="  cursor-pointer text-3xl border-2 border-gray-700 rounded-[40px] w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 20, // removed quotes around the duration
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Payment Methods
          </motion.h3>

          <h2 className="text-2xl text-center md:text-2xl lg:text-2xl p-6 text-[#00477e] hover:text-[#ffa500] font-medium">
            All fees must be paid via direct debit. Payments can be made
            monthly, termly, or annually according to the schedule outlined
            above.
          </h2>
        </div>
        <div className="">
          <p className="text-center font-bold">
            For further inquiries regarding the fee structure or payment plans,
            please feel free to contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
