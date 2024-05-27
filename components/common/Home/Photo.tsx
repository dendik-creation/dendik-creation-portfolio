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
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
          <Image
            src={"/assets/home/myPhoto.jpg"}
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
