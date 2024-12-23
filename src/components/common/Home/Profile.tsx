"use client";
import React from "react";
import { Variants, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Socials from "@/components/common/Home/Socials";
import Link from "next/link";
import { cvUrl } from "@/lib/constant";

const myname: {
  firstname: string;
  lastname: string;
} = {
  firstname: "Dendi'",
  lastname: "Setiawan",
};

const firstVariants: Variants = {
  initial: {
    y: 280,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: -280,
  },
};
const lastVariants: Variants = {
  initial: {
    y: -280,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: 280,
  },
};

const Profile: React.FC = () => {
  return (
    <div className="text-center xl:text-left order-2 xl:order-none">
      <h1 className="mb-6 overflow-hidden">
        <motion.div
          variants={lastVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay: 2.5,
            ease: "circInOut",
            duration: 0.5,
          }}
          className="xl:h2 overflow-hidden h3"
        >
          Hi {"I'm,"}
        </motion.div>{" "}
        <br />
        <div className="text-accent h1 flex xl:justify-start justify-center overflow-hidden h-fit">
          {myname.firstname?.split("").map((value, index) => {
            return (
              <motion.div
                key={index}
                variants={firstVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  delay: 2 + (index + 1) * 0.1,
                  ease: "circInOut",
                  duration: 0.5,
                }}
              >
                {value}
              </motion.div>
            );
          })}
        </div>
        <div
          className={`text-accent h1 flex xl:justify-start justify-center overflow-hidden h-fit`}
        >
          {myname.lastname?.split("").map((value, index) => (
            <motion.div
              key={index}
              variants={lastVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                delay: 2.5 + (index + 1) * 0.1,
                ease: "circInOut",
                duration: 0.5,
              }}
            >
              {value}
            </motion.div>
          ))}
        </div>
      </h1>
      <p className="max-w-[500px] mb-9 text-white/80">
        I excel at crafting elegant digital experience and I am proficient in
        various programming languages & technologies
      </p>

      {/* CV Download  & Social Media */}
      <div className="flex flex-col xl:flex-row items-center gap-8">
        <Button variant={"outline"} size={"lg"} className="">
          <Link
            target="_blank"
            href={cvUrl as string}
            className="capitalize flex items-center gap-2"
          >
            <span>Download CV</span>
            <Download className="text-xl" />
          </Link>
        </Button>
        <div className="mb-8 xl:mb-0">
          <Socials
            containerStyles="flex gap-6"
            iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
