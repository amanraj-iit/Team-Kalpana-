import React from "react";
import { motion } from "framer-motion";

const OnboardingContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
      className="flex items-center flex-col justify-center space-y-4"
    >
      {children}
    </motion.div>
  );
};

export default OnboardingContainer;
