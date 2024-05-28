"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo: React.FC = () => {
  return (
    <div className="h-full w-full relative">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 2.2,
            ease: "easeIn",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: "easeInOut",
            },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute"
        >
          <Image
            src={"/assets/home/myPhoto.jpg"}
            priority
            quality={100}
            fill
            alt=""
            className="object-contain pt-2 pl-2"
          />
        </motion.div>

        {/* Circle Svg */}
        {/* <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill={"transparent"}
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth={4}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.svg> */}

        {/* Square Svg */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 3 3 H 503 V 503 H 3 Z"
            stroke="#00ff99"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 20 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              strokeDashoffset: [0, -100, -400],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
