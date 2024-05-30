"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { ProjectList, SingleProject } from "@/types/TypeWork";
import { ArrowUpRight, Github, Grid2x2Check, Wrench } from "lucide-react";
import { Swiper as SwiperType } from "swiper/types";
import { Autoplay } from "swiper/modules";
import SliderButton from "@/components/common/Work/SliderButton";

const projects: ProjectList = [
  {
    number: "01",
    title: "Pilih Dhewe",
    description:
      "Pilih Dhewe is a web application-based voting service using Rest API",
    categories: ["Backend", "Frontend", "Restful API"],
    techStack: ["React Js", "Laravel", "Javascript", "PHP", "Tailwind CSS"],
    image: "/assets/work/pilih-dhewe.png",
    preview: "https://pilihdhewe.my.id",
    github: "https://dendik-creation/pilihdhewe-apps-laravel",
  },
  {
    number: "02",
    title: "Gudang Ajaib",
    description:
      "Gudang Ajaib is an inventory application that is used to manage warehouse goods.",
    categories: ["Fullstack"],
    techStack: ["Laravel", "PHP", "Bootstrap"],
    image: "/assets/work/gudang-ajaib.png",
    preview: "https://gudang.tkjsmkn2kudus.my.id",
  },
  {
    number: "03",
    title: "Sobat Telat",
    description:
      "Sobat Telat is an application for recording student tardiness and permission to leave.",
    categories: ["Fullstack"],
    techStack: ["Laravel", "PHP", "Bootstrap"],
    image: "/assets/work/sobat-telat.png",
    preview: "https://sobattelat.tkjsmkn2kudus.my.id",
  },
  {
    number: "04",
    title: "SDN 2 Mlatinorowito",
    description:
      "A school profile website to provide information to the wider community.",
    categories: ["Builder"],
    techStack: ["Wordpress", "PHP"],
    image: "/assets/work/sdn-2.png",
    preview: "https://sdn2mlatinorowito.netlify.app",
  },
  {
    number: "05",
    title: "Get The Matrix",
    description:
      "Interactive learning multimedia adapted from matrix materials for students and organized into applications",
    categories: ["Builder", "Edu Game"],
    techStack: ["HTML", "CSS", "Javascript"],
    image: "/assets/work/get-the-matrix.png",
    github: "https://github.com/dendik-creation/get-the-matrix",
    preview: "https://dendik-creation.github.io/get-the-matrix",
  },
  {
    number: "06",
    title: "Gamelaneka",
    description:
      "The interactive learning multimedia is adapted from a wide variety of gamelans and compiled in the application",
    categories: ["Builder", "Edu Game"],
    techStack: ["HTML", "CSS", "Javascript"],
    image: "/assets/work/gamelaneka.png",
    github: "https://github.com/dendik-creation/gamelaneka",
    preview: "https://dendik-creation.github.io/gamelaneka",
  },
  {
    number: "07",
    title: "Sasana Widya Inventory",
    description:
      "Inventory system used for book data management in the library",
    categories: ["Fullstack"],
    techStack: ["Laravel", "PHP", "Bootstrap"],
    image: "/assets/work/sasana-inventory.png",
    preview: "https://sasanainventory.smkn2kudus.sch.id/",
  },
  {
    number: "08",
    title: "Sasana Widya Pustaka",
    description:
      "A school library profile website to provide information to the wider community.",
    categories: ["Builder"],
    techStack: ["Wordpress", "PHP"],
    image: "/assets/work/sasana-widya.png",
    preview: "https://sasanawidyapustaka.smkn2kudus.sch.id/",
  },
  {
    number: "09",
    title: "AMI (Audit Mutu Internal)",
    description:
      "Used to recap and carry out the entire audit process in an agency or company",
    categories: ["Frontend", "Backend", "Restful API"],
    techStack: ["React Js", "Javascript", "Laravel", "PHP", "Tailwind CSS"],
    image: "/assets/work/ami.png",
    github: "https://github.com/dendik-creation/ami_be",
  },
];

const variants = {
  initial: {
    // opacity: 0,
    y: -580,
  },
  animate: {
    // opacity: 1,
    y: 0,
  },
  exit: {
    // opacity: 0,
    y: -580,
  },
};

const numberVariants = {
  initial: {
    // opacity: 0,
    y: 280,
  },
  animate: {
    // opacity: 1,
    y: 0,
  },
  exit: {
    // opacity: 0,
    y: 280,
  },
};

const Work: React.FC = () => {
  const [project, setProject] = useState<SingleProject>(projects[0]);
  const [progressTime, setProgressTime] = useState<number>(0);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const handleProgress = (
    swiper: SwiperType,
    timeLeft: number,
    percentage: number
  ) => {
    setProgressTime(Math.floor(percentage * 100));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-8">
          {/* Project Data */}
          <div className="">
            <div className="w-full xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px]">
                {/* Outline */}
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={project?.number}
                      variants={numberVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{
                        duration: 0.3,
                        delay: 0,
                        ease: "circInOut",
                      }}
                      className={`${
                        progressTime < 17 && "blink-animate"
                      } text-8xl leading-none font-extrabold w-fit text-transparent text-outline hover:text-accent/40 cursor-default transition-all`}
                    >
                      {project?.number}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={project?.number}
                      variants={variants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{
                        duration: 0.4,
                        delay: 0.1,
                        ease: "circInOut",
                      }}
                      className="flex flex-col gap-[30px]"
                    >
                      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                        {project?.title}
                      </h2>
                      <p className="text-white/60">{project?.description}</p>
                      <div className="flex items-start flex-col justify-start gap-4">
                        <div className="flex gap-2 items-center">
                          <Wrench className="text-white/80" />
                          <span className="text-sm text-white/80">
                            Tech Stack
                          </span>
                        </div>
                        <ul className="flex gap-3 flex-wrap">
                          {project?.techStack?.map((item, index) => (
                            <li
                              className="text-sm bg-accent/10 p-2 rounded-md text-accent"
                              key={index}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Border */}
                      <div className="border-4 relative border-white/20 rounded-full">
                        <div
                          className={`border-4 transition-all w-full absolute border-accent rounded-full -top-[3.7px] xl:-top-[3px] -left-1`}
                          style={{
                            width: `${progressTime}%`,
                            transition: "all ease-in-out 0.2s",
                          }}
                        ></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-start flex-col justify-start gap-4">
                          <ul className="flex gap-3 flex-wrap">
                            {project?.categories?.map((item, index) => (
                              <li
                                className="text-sm bg-blue-200/10 p-2 rounded-md text-blue-200"
                                key={index}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center gap-4">
                          {/* Live Preview */}
                          {project?.preview && (
                            <a target="_blank" href={project?.preview}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <ArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Live Preview</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </a>
                          )}
                          {/* Github Project */}
                          {project?.github && (
                            <a target="_blank" href={project?.github}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <Github className="text-white text-3xl group-hover:text-accent" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Github Repository</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
          {/* Project Image */}
          <div className="w-full xl:w-[50%] rounded-md">
            <Swiper
              autoplay={{
                delay: 10000,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={30}
              effect={"flip"}
              rewind={true}
              grabCursor={true}
              onAutoplayTimeLeft={(swiper, timeLeft, percentage) =>
                handleProgress(swiper, timeLeft, percentage)
              }
              modules={[Autoplay]}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 rounded-md"
              onSlideChange={handleSlideChange}
            >
              {projects?.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[465px] relative group rounded-xl flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full rounded-xl">
                      {item?.image ? (
                        <Image
                          src={item?.image}
                          fill
                          sizes="465"
                          className="object-cover outline-none rounded-xl"
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SliderButton
                projectsLength={projects?.length}
                containerStyles="flex gap-4 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent/10 mx-3 xl:mx-0 disabled:opacity-20 rounded-md hover:bg-accent/80 hover:text-primary text-accent text-[22px] w-[54px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
