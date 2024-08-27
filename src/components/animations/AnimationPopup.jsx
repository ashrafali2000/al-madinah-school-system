"use client";

import { motion } from "framer-motion";

const AnimationPopUp = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: "20",
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationPopUp;
