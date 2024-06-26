"use server";
import { ContactForm } from "@/types/TypeContact";
import nodemailer from "nodemailer";
import { googleUserApp, targetEmail } from "@/lib/constant";
import { selfEmail, thanksEmail } from "./EmailTemplate";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: "gmail",
  secure: true,
  auth: googleUserApp,
});

const SendEmailForm = async (form: ContactForm) => {
  try {
    const selfResponse = await transporter.sendMail({
      from: {
        name: "Dendi' Setiawan",
        address: googleUserApp.user || "",
      },
      to: form.email,
      subject: `${form?.subject}`,
      html: selfEmail(form, new Date().toString()),
    });
    const submitterResponse = await transporter.sendMail({
      from: {
        name: "Kontak Portfolio",
        address: googleUserApp.user || "",
      },
      to: targetEmail,
      subject: `${form?.subject}`,
      html: thanksEmail(form, new Date().toString()),
    });
    return true;
  } catch (error) {
    console.log("fail", error);
    return false;
  }
};

export default SendEmailForm;
