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
import Link from "next/link";
import Image from "next/image";
import { ProjectList, SingleProject } from "@/types/TypeWork";
import { ArrowUpRight, Github, Grid2x2Check, Wrench } from "lucide-react";
import { Swiper as SwiperType } from "swiper/types";
import SliderButton from "@/components/common/Work/SliderButton";

const projects: ProjectList = [
  {
    number: "01",
    title: "Pilih Dhewe",
    description:
      "Pilih Dhewe adalah layanan voting berbasis aplikasi web dengan menggunakan Rest API",
    categories: ["Backend", "Frontend", "Restful API"],
    techStack: ["React Js", "Laravel", "Javascript", "PHP", "Tailwind CSS"],
    image: "/",
  },
  {
    number: "02",
    title: "Gudang Ajaib",
    description:
      "Gudang ajaib merupakan aplikasi inventaris yang digunakan untuk memanajemen barang gudang",
    categories: ["Fullstack"],
    techStack: ["Laravel", "PHP", "Bootstrap"],
    image: "/",
  },
  {
    number: "03",
    title: "Sobat Telat",
    description:
      "Sobat telat adalah aplikasi untuk pencatatan keterlambatan dan izin keluar siswa",
    categories: ["Fullstack"],
    techStack: ["Laravel", "PHP", "Bootstrap"],
    image: "/",
  },
  {
    number: "04",
    title: "SDN 2 Mlatinorowito",
    description:
      "Merupakan website profil sekolah untuk memberikan informasi kepada masyarakat luas",
    categories: ["Builder"],
    techStack: ["Wordpress", "PHP"],
    image: "/",
  },
  {
    number: "05",
    title: "Get The Matrix",
    description:
      "Multimedia pembelajaran interaktif diadaptasi dari materi matrix untuk siswa dan disusun kedalam aplikasi",
    categories: ["Builder", "Edu Game"],
    techStack: ["HTML", "CSS", "Javascript"],
    image: "/",
  },
  {
    number: "06",
    title: "Gamelaneka",
    description:
      "Multimedia pembelajaran interaktif diadaptasi dari beragam macam gamelan dan disusun di aplikasi",
    categories: ["Builder", "Edu Game"],
    techStack: ["HTML", "CSS", "Javascript"],
    image: "/",
  },
  {
    number: "07",
    title: "Sasana Widya Inventory",
    description:
      "Sistem inventaris yang digunakan untuk manajemen data buku di perpustakaan",
    categories: ["Fullstack"],
    techStack: ["Laravel", "PHP", "Bootstrap"],
    image: "/",
  },
  {
    number: "08",
    title: "Sasana Widya Pustaka",
    description:
      "Merupakan website profil perpustakaan sekolah untuk memberikan informasi kepada masyarakat luas",
    categories: ["Builder"],
    techStack: ["Wordpress", "PHP"],
    image: "/",
  },
  {
    number: "09",
    title: "AMI (Audit Mutu Internal)",
    description:
      "Digunakan untuk merekap dan melaksanakan seluruh proses audit dalam suatu instansi atau perusahaan",
    categories: ["Frontend", "Backend", "Restful API"],
    techStack: ["React Js", "Javascript", "Laravel", "PHP", "Tailwind CSS"],
    image: "/",
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
    y: 580,
  },
};

const Work: React.FC = () => {
  const [project, setProject] = useState<SingleProject>(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
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
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={project?.number}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "circInOut" }}
                className="w-full xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
              >
                <div className="flex flex-col gap-[30px] h-[50%]">
                  {/* Outline */}
                  <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                    {project?.number}
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                    {project?.title}
                  </h2>
                  <p className="text-white/60">{project?.description}</p>
                  <div className="flex items-start flex-col justify-start gap-4">
                    <div className="flex gap-2 items-center">
                      <Wrench className="text-white/80" />
                      <span className="text-sm text-white/80">Tech Stack</span>
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
                  <div className="border border-white/20"></div>
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
                      <Link href="#">
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
                      </Link>
                      {/* Github Project */}
                      <Link href="#">
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
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Project Image */}
          <div className="w-full xl:w-[50%] rounded-md">
            <Swiper
              spaceBetween={30}
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
                      {item?.image !== "/" ? (
                        <Image
                          src={"/"}
                          fill
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
                btnStyles="bg-accent mx-3 disabled:opacity-20 rounded-md hover:bg-accent/80 text-primary text-[22px] w-[54px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
