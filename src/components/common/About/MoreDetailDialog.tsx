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

type DetailData = {
  experience?: ExperienceList;
  education?: EducationList;
};
const MoreDetailDialog: React.FC<DetailData> = ({ experience, education }) => {
  return <div>MoreDetailDialog</div>;
};

export default MoreDetailDialog;
