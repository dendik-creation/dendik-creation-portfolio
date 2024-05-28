import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SkillMe } from "@/types/TypeAbout";
import React from "react";

type SkillsTab = {
  skills: SkillMe;
};

const Skills: React.FC<SkillsTab> = ({ skills }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-left">
        <h3 className="text-4xl font-bold text-accent flex justify-start items-center gap-5">
          <div className="scale-[1.3]">{skills?.icon}</div>
          <span>{skills?.title}</span>
        </h3>
        <p className="max-w-[600px] text-left text-white/60">
          {skills?.description}
        </p>
      </div>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
          {skills?.skill_list?.map((item, index) => (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {item?.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{item?.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Skills;
