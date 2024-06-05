import React from "react";

export type AboutMeType = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  info: {
    fieldName: string;
    fieldValue: string;
  }[];
};

export type ExperienceList = {
  company: string;
  position: string;
  duration: string;
  activities?: string[];
};

export type ExperienceMe = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  items: ExperienceList[];
};

export type EducationList = {
  institution: string;
  degree: string;
  duration: string;
  activities?: string[];
};

export type EducationMe = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  items: EducationList[];
};

export type SkillMe = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  skill_list: {
    icon: React.ReactNode;
    name: string;
  }[];
};
