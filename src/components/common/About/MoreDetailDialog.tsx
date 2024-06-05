import { EducationList, ExperienceList } from "@/types/TypeAbout";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowUpRight,
  Building,
  GitCommitHorizontal,
  Hourglass,
} from "lucide-react";
import { motion } from "framer-motion";
type DetailData = {
  experience?: ExperienceList;
  education?: EducationList;
  delay: number;
};
const MoreDetailDialog: React.FC<DetailData> = ({
  experience,
  education,
  delay,
}) => {
  return (
    <Dialog>
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
        <DialogTrigger className="w-full h-full flex justify-center items-center">
          <ArrowUpRight className="text-primary rotate-90 group-hover:rotate-[360deg] transition-all duration-500" />
        </DialogTrigger>
      </motion.div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="text-3xl text-start">
              {experience?.position || education?.degree}
            </div>
          </DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-6">
              <div className="flex justify-start items-center text-md text-accent/70 font-semibold gap-8">
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
                      <div className="text-white/60 text-start leading-tight text-md">
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
                      <div className="text-white/60 text-start leading-tight text-md">
                        {act}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MoreDetailDialog;
