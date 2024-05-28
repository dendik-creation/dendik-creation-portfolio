import { ScrollArea } from "@/components/ui/scroll-area";
import { ExperienceMe } from "@/types/TypeAbout";
import React from "react";

type ExperienceTab = {
  experience: ExperienceMe;
};

const Experience: React.FC<ExperienceTab> = ({ experience }) => {
  return (
    <div className="flex flex-col gap-[30px] text-left">
      <h3 className="text-4xl font-bold text-accent flex justify-start items-center gap-5">
        <div className="scale-[1.3]">{experience?.icon}</div>
        <span>{experience?.title}</span>
      </h3>
      <p className="max-w-[600px] text-white/60 text-left">
        {experience?.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {experience?.items?.map((item, index) => (
            <li
              key={index}
              className="bg-[#232329] h-[184px] py-6 px-10 ronded-xl flex flex-col justify-center gap-1 items-start"
            >
              <span className="text-accent">{item?.duration}</span>
              <span className="text-xl max-w-[260px] min-h-[60px] text-left">
                {item?.position}
              </span>
              <div className="flex items-center gap-3">
                {/* dot */}
                <div className="w-[6px] h-[6px] rounded-full bg-accent"></div>
                <p className="text-white/60">{item?.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Experience;
