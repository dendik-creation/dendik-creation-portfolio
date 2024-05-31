"use server";
import { ContactForm } from "@/types/TypeContact";
import React from "react";
import nodemailer from "nodemailer";
import { googleUserApp, targetEmail } from "@/lib/constant";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: "gmail",
  secure: true,
  auth: googleUserApp,
});

const SendEmailForm = async (form: ContactForm) => {
  try {
    const response = await transporter.sendMail({
      from: {
        name: form?.yourname,
        address: form?.email,
      },
      to: targetEmail,
      subject: form?.subject,
    });
    console.log("success", response?.messageId);
    return true;
  } catch (error) {
    console.log("fail", error);
    return false;
  }
};

export default SendEmailForm;
