"use server";
import { ContactForm } from "@/types/TypeContact";
import nodemailer from "nodemailer";
import { googleUserApp, targetEmail } from "@/lib/constant";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: "gmail",
  secure: true,
  auth: googleUserApp,
});

const htmlEmail = (form: ContactForm): string => {
  return ` 
      <div style="font-size : 400px;" className="text-accent text-9xl">${form.email}</div>
  `;
};

const SendEmailForm = async (form: ContactForm) => {
  try {
    const response = await transporter.sendMail({
      from: "Contact Portfolio Submission",
      to: targetEmail,
      subject: `Portfolio Subject Submission => ${form?.subject}`,
      html: htmlEmail(form),
    });
    console.log("success", response?.messageId);
    return true;
  } catch (error) {
    console.log("fail", error);
    return false;
  }
};

export default SendEmailForm;
