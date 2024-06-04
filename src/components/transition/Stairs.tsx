import { Variants, motion } from "framer-motion";
import React from "react";

const stairAnimateLeft: Variants = {
  initial: {
    left: "0%",
  },
  animate: {
    left: "100%",
  },
  exit: {
    left: ["100%", "0%"],
  },
};

const stairAnimateRight: Variants = {
  initial: {
    right: "0%",
  },
  animate: {
    right: "100%",
  },
  exit: {
    right: ["100%", "0%"],
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
            variants={index % 2 == 0 ? stairAnimateRight : stairAnimateLeft}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            className={`h-full w-full relative border-t-0 ${
              index == 5 ? "border-b-0" : "border-b"
            } border-l-0 border-r-0 border-accent border backdrop-blur-xl`}
          />
        );
      })}
    </>
  );
};

export default Stairs;
