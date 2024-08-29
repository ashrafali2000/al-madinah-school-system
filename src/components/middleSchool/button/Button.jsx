import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
export const Button = ({ link, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, filter: "brightness(1.3)" }}
      transition={{ type: "spring", stiffness: 100, damping: 40 }}
    >
      <Link
        href={link}
        className="bg-yellow-400 uppercase py-2 md:py-3 lg:py-4 hover:scale-105 transition duration-1000 text-sm md:text-base px-3 md:px-8 rounded-lg font-bold"
      >
        {title}
      </Link>
    </motion.div>
  );
};
