import React from "react";

export type ContactInfo = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}[];

export type ContactForm = {
  yourname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
