import React from "react";

export type ContactInfo = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}[];
