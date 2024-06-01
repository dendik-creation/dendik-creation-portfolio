"use client";

import {
  AboutMeType,
  EducationMe,
  ExperienceMe,
  SkillMe,
} from "@/types/TypeAbout";
import React, { useState } from "react";

import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "@/components/common/About/Experience";
import Education from "@/components/common/About/Education";
import Skills from "@/components/common/About/Skills";
import AboutMe from "@/components/common/About/AboutMe";
import { BarChart2, GraduationCap, UserSearch, Wrench } from "lucide-react";

const aboutMe: AboutMeType = {
  icon: <UserSearch />,
  title: "About Me",
  description:
    "I am an experienced web developer with more than 3 years of experience in designing, developing, and maintaining websites and web applications. I have a great passion for coding and programming, and I am always looking for new ways to improve my work.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dendi' Setiawan",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 851 7974 2593",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesia, English (Basic)",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "creationdendik729@gmail.com",
    },
    {
      fieldName: "Nationally",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Hobbies",
      fieldValue: "Gaming, Coding",
    },
  ],
};

const experience: ExperienceMe = {
  icon: <BarChart2 />,
  title: "My Experience",
  description:
    "Learning and applying it in the world of work is the real experience.",
  items: [
    {
      company: "PT Pura Rotogravure",
      position: "IT Development Internship",
      duration: "Feb 2024 - May 2024",
    },
    {
      company: "Vocational School",
      position: "Freelance Web Developer",
      duration: "2023 - May 2024",
    },
    {
      company: "PT Humanika Mitra Solusi",
      position: "Fieldwork Practices",
      duration: "Jun 2023 - Aug 2023",
    },
    {
      company: "Vocational School",
      position: "Game Web Developer",
      duration: "Sep 2022 - Des 2022",
    },
  ],
};

const education: EducationMe = {
  icon: <GraduationCap />,
  title: "My Education",
  description: "My journey while learning web programming",
  items: [
    {
      institution: "SMK Negeri 2 Kudus",
      degree: "Student",
      duration: "2021 - 2024",
    },
    {
      institution: "Telkom DigiUp Indonesia",
      degree: "Junior Web Programmer",
      duration: "Okt 2023 - Nov 2023",
    },
    {
      institution: "Dicoding Indonesia",
      degree: "Basic Algorithm Programming",
      duration: "Jul 2023 - Aug 2023",
    },
    {
      institution: "AWS Training",
      degree: "AWS Cloud Practitioner",
      duration: "Jun 2023",
    },
  ],
};

const skills: SkillMe = {
  icon: <Wrench />,
  title: "My Skills",
  description: "Skills I have now in web programming",
  skill_list: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React Js",
    },
    {
      icon: <FaVuejs />,
      name: "Vue Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Js",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap 5",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node Js",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
  ],
};

const variants = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 40,
  },
};

const About: React.FC = () => {
  const [activeTab, setTab] = useState<string>("about_me");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about_me"
          value={activeTab}
          onValueChange={(e) => setTab(e)}
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="grid grid-cols-2 w-full xl:max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger className="relative overflow-hidden" value="about_me">
              <div className="flex absolute -bottom-4 xl:-bottom-10 left-2 opacity-30">
                <UserSearch className="xl:w-44 xl:h-44 w-16 h-16" />
              </div>
              <span className="static xl:absolute left-0 w-full text-center xl:top-8 xl:text-2xl text-balance">
                About Me
              </span>
            </TabsTrigger>
            <TabsTrigger
              className="relative overflow-hidden"
              value="experience"
            >
              <div className="flex absolute -bottom-3 xl:-bottom-8 left-2 opacity-30">
                <BarChart2 className="xl:w-44 xl:h-44 w-16 h-16" />
              </div>
              <span className="static xl:absolute left-0 w-full text-center xl:top-8 xl:text-2xl text-balance">
                Experience
              </span>
            </TabsTrigger>
            <TabsTrigger className="relative overflow-hidden" value="education">
              <div className="flex absolute -bottom-6 xl:-bottom-14 left-2 opacity-30">
                <GraduationCap className="xl:w-44 xl:h-44 w-16 h-16" />
              </div>
              <span className="static xl:absolute left-0 w-full text-center xl:top-8 xl:text-2xl text-balance">
                Education
              </span>
            </TabsTrigger>
            <TabsTrigger className="relative overflow-hidden" value="skills">
              <div className="flex absolute -bottom-6 xl:-bottom-12 left-2 opacity-30">
                <Wrench className="xl:w-44 xl:h-44 w-16 h-16" />
              </div>
              <span className="static xl:absolute left-0 w-full text-center xl:top-8 xl:text-2xl text-balance">
                Skills
              </span>
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            <AnimatePresence mode="wait">
              {activeTab == "about_me" ? (
                <motion.div
                  key="about_me"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full text-left"
                >
                  <AboutMe aboutMe={aboutMe} />
                </motion.div>
              ) : activeTab == "experience" ? (
                <motion.div
                  key="experience"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full"
                  variants={variants}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Experience experience={experience} />
                </motion.div>
              ) : activeTab == "education" ? (
                <motion.div
                  key="education"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  className="w-full"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Education education={education} />
                </motion.div>
              ) : (
                <motion.div
                  key="skills"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <Skills skills={skills} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
