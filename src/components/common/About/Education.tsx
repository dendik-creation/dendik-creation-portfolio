import { ScrollArea } from "@/components/ui/scroll-area";
import { EducationMe } from "@/types/TypeAbout";
import React from "react";
import MoreDetailDrawer from "./MoreDetailDrawer";
import MoreDetailDialog from "./MoreDetailDialog";
import { GraduationCap } from "lucide-react";

type EducationTab = {
  education: EducationMe;
  isMobile: boolean;
};

const Education: React.FC<EducationTab> = ({ education, isMobile }) => {
  return (
    <div className="flex flex-col gap-[30px] text-left">
      <h3 className="text-4xl font-bold flex text-accent justify-start items-center gap-5">
        <div className="scale-[1.3]">{education?.icon}</div>
        <span>{education?.title}</span>
      </h3>
      <p className="max-w-[600px] text-white/60 text-left">
        {education?.description}
      </p>
      <ScrollArea className="h-auto md:h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {education?.items?.map((item, index) => (
            <li
              key={index}
              className="bg-[#232329] h-[184px] py-6 relative overflow-hidden px-10 rounded-xl flex flex-col justify-start items-start gap-1 lg:items-start"
            >
              {isMobile ? (
                <MoreDetailDrawer education={item} delay={index} />
              ) : (
                <MoreDetailDialog education={item} delay={index} />
              )}

              <span className="text-accent">{item?.duration}</span>
              <span className="text-xl max-w-[260px] min-h-[60px] text-left">
                {item?.degree}
              </span>
              <div className="flex items-center gap-3">
                {/* dot */}
                <GraduationCap className="text-accent" />
                <p className="text-white/60">{item?.institution}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Education;
