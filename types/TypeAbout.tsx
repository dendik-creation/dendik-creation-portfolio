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

export type ExperienceMe = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  items: {
    company: string;
    position: string;
    duration: string;
  }[];
};

export type EducationMe = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  items: {
    institution: string;
    degree: string;
    duration: string;
  }[];
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
