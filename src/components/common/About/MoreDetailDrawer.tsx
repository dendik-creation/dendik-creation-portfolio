import { EducationList, ExperienceList } from "@/types/TypeAbout";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Building,
  ChevronUp,
  GitCommitHorizontal,
  Hourglass,
} from "lucide-react";
import { motion } from "framer-motion";

type DetailData = {
  experience?: ExperienceList;
  education?: EducationList;
  delay: number;
};

const MoreDetailDrawer: React.FC<DetailData> = ({
  experience = null,
  education = null,
  delay,
}) => {
  return (
    <Drawer>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 0.3 + (delay + 1) * 0.1,
        }}
        className="absolute top-0 right-4 w-12 h-12 flex justify-center cursor-pointer items-center rounded-b-full group bg-accent"
      >
        <DrawerTrigger>
          <ChevronUp className=" text-primary group-hover:reflect-x transition-all duration-500" />
        </DrawerTrigger>
      </motion.div>
      <DrawerContent className="outline-none border-0 min-h-[400px]">
        <DrawerHeader>
          <DrawerTitle>
            <div className="text-3xl text-start my-4">
              {experience?.position || education?.degree}
            </div>
          </DrawerTitle>
          <DrawerDescription>
            <div className="flex flex-col gap-6">
              <div className="flex justify-start flex-col items-start text-md text-white text-[14px] font-semibold gap-3">
                <div className="flex justify-start items-center gap-3">
                  <Hourglass className="text-accent" />
                  <span>{experience?.duration || education?.duration}</span>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <Building className="text-accent" />
                  <span>{experience?.company || education?.institution}</span>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {experience &&
                  experience?.activities?.map((act, actIdx) => (
                    <li
                      key={actIdx}
                      className="flex justify-start items-center gap-3"
                    >
                      <GitCommitHorizontal className="text-accent text-start" />
                      <div className="text-white/60 text-start max-w-[390px] leading-tight text-md">
                        {act}
                      </div>
                    </li>
                  ))}
                {education &&
                  education?.activities?.map((act, actIdx) => (
                    <li
                      key={actIdx}
                      className="flex justify-start items-center gap-3"
                    >
                      <GitCommitHorizontal className="text-accent text-start" />
                      <div className="text-white/60 text-start max-w-[390px] leading-tight text-md">
                        {act}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default MoreDetailDrawer;
