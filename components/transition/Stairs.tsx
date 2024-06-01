import { motion } from "framer-motion";
import React from "react";

const stairAnimate = {
  initial: {
    bottom: "0%",
  },
  animate: {
    bottom: "100%",
  },
  exit: {
    bottom: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimate}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className={`h-full w-full relative bg-accent`}
          />
        );
      })}
    </>
  );
};

export default Stairs;
