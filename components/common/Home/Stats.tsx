"use client";
import { MyStats } from "@/types/TypeHome";
import { motion } from "framer-motion";
import { CalendarCheck2, CodeXml, ListTodo } from "lucide-react";
import React from "react";

import CountUp from "react-countup";

const myStats: MyStats = [
  {
    number: 3,
    text: "Years of experience",
  },
  {
    number: 9,
    text: "Project completed",
  },
  {
    number: 8,
    text: "Technologies mastered",
  },
];

const Stats: React.FC = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 z-0 xl:pb-0">
      <div className="container mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2,
              ease: "easeInOut",
            },
          }}
          className="flex flex-wrap gap-8 max-w-[80vw] mx-auto xl:max-w-none"
        >
          {myStats?.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center relative justify-start xl:justify-center"
              key={index}
            >
              {index == 0 ? (
                <CalendarCheck2 className="absolute top-0 left-4 xl:w-24 xl:h-24 hidden xl:block z-0 text-stone-200/10" />
              ) : index == 1 ? (
                <ListTodo className="absolute top-0 left-4 xl:w-24 xl:h-24 hidden xl:block z-0 text-stone-200/10" />
              ) : (
                <CodeXml className="absolute top-0 left-4 xl:w-24 xl:h-24 hidden xl:block z-0 text-stone-200/10" />
              )}
              <CountUp
                end={item.number}
                duration={4}
                delay={2}
                className="text-6xl xl:text-8xl font-extrabold z-10"
              />
              <p
                className={`${
                  item?.text?.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/90`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
