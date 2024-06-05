import { ScrollArea } from "@/components/ui/scroll-area";
import { ExperienceMe } from "@/types/TypeAbout";
import React from "react";
import { Building } from "lucide-react";
import MoreDetailDrawer from "./MoreDetailDrawer";
import MoreDetailDialog from "./MoreDetailDialog";

type ExperienceTab = {
  experience: ExperienceMe;
  isMobile: boolean;
};

const Experience: React.FC<ExperienceTab> = ({ experience, isMobile }) => {
  return (
    <div className="flex flex-col gap-[30px] text-left">
      <h3 className="text-4xl font-bold text-accent flex justify-start items-center gap-5">
        <div className="scale-[1.3]">{experience?.icon}</div>
        <span>{experience?.title}</span>
      </h3>
      <p className="max-w-[600px] text-white/60 text-left">
        {experience?.description}
      </p>
      <ScrollArea className="h-auto md:h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {experience?.items?.map((item, index) => (
            <li
              key={index}
              className="bg-[#232329] h-[184px] relative py-6 px-10 rounded-xl flex overflow-hidden flex-col justify-center gap-1 items-start"
            >
              {isMobile ? (
                <MoreDetailDrawer experience={item} delay={index} />
              ) : (
                <MoreDetailDialog experience={item} delay={index} />
              )}
              <span className="text-accent">{item?.duration}</span>
              <span className="text-xl max-w-[260px] min-h-[60px] text-left">
                {item?.position}
              </span>
              <div className="flex items-center gap-3">
                {/* dot */}
                <Building className="text-accent" />
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
