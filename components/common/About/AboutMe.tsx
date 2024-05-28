import { AboutMeType } from "@/types/TypeAbout";
import React from "react";

type AboutMeTab = {
  aboutMe: AboutMeType;
};
const AboutMe: React.FC<AboutMeTab> = ({ aboutMe }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold text-accent flex justify-start items-center gap-5">
        <div className="scale-[1.3]">{aboutMe?.icon}</div>
        <span>{aboutMe?.title}</span>
      </h3>
      <p className="max-w-[600px] text-white/60 text-left">
        {aboutMe?.description}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6">
        {aboutMe?.info?.map((item, index) => (
          <li key={index} className="flex items-center justify-start gap-4">
            <span className="text-white/60">{item?.fieldName}</span>
            <span className="text-xl">{item?.fieldValue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutMe;
