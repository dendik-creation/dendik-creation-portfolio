"use client";
import React from "react";
import { DrawerClose } from "../ui/drawer";
import { Activity } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { umamiAnalytics } from "@/lib/constant";

const redirectToAnalytics = () => {
  window.open(umamiAnalytics.shareURL, "_blank");
};

export const UmamiBtnMobile = () => {
  return (
    <button
      onClick={redirectToAnalytics}
      className={`text-xl capitalize w-3/4 hover:text-accent transition-all text-white/80`}
    >
      <DrawerClose className="flex justify-center items-center gap-4 w-full border border-accent/20 hover:border-accent/40 rounded-md transition-all px-4 py-4">
        <Activity className="text-accent" />
        <h2 className="text-lg flex gap-2 items-center">
          <span>Analytics</span>
          <span className="text-sm text-accent/70">by Umami</span>
        </h2>
      </DrawerClose>
    </button>
  );
};

export const UmamiBtnDesktop = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <div
            onClick={redirectToAnalytics}
            className="border border-accent/10 px-4 py-2 rounded-md hover:border-accent/20 transition-all"
          >
            <Activity className="text-accent" />
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={20}>
          Analytics
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
