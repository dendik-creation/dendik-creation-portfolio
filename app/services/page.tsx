"use client";
import React from "react";
import { ServicesList } from "@/types/TypeServices";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const myServices: ServicesList = [
  {
    title: "Web Development",
    description: "Create a website according to your needs and goals with me",
    href: "#",
  },
  {
    title: "UI/UX Design",
    description:
      "Design a website that is easy to use and visually appealing with a modern look",
    href: "#",
  },
  {
    title: "Wordpress",
    description: "Complicated WordPress? Leave it to the experts!",
    href: "#",
  },
  {
    title: "RESTful API",
    description:
      "Automate your business processes and increase productivity with efficient RESTful API",
    href: "#",
  },
];

const Services: React.FC = () => {
  const delayIndex = (index: number) => {
    return (index + 1) * 1.99;
  };
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 1,
              ease: "easeInOut",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {myServices?.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.4,
                  delay: delayIndex(index) * 0.2,
                  ease: "easeInOut",
                },
              }}
              className="flex flex-1 relative flex-col min-h-[30vh] justify-center gap-6 group"
              key={index}
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{`0${
                  index + 1
                }`}</div>
                <Link
                  href={item.href}
                  className="w-[70px] h-[70px] rounded-full border-white group-hover:border-opacity-0 border-2 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <ArrowDownRight className="text-white group-hover:text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {item.title}
              </h2>
              <p className="text-white/60">{item.description}</p>

              {/* border */}
              <div className="border-b absolute bottom-0 border-solid group-hover:border-dashed group-hover:border-inherit transition-all  border-white/20 w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
