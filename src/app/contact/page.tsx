"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { ContactForm, ContactInfo } from "@/types/TypeContact";

import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkedAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { SelectValue } from "@radix-ui/react-select";
import { Send, Unplug, Github } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const contactInfo: ContactInfo = [
  {
    icon: <FaWhatsapp />,
    title: "Phone",
    description: "(+62) 851 7974 2593",
    href: "https://wa.me/6285179742593?message=Holla",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "creationdendik729@gmail.com",
    href: "mailto:creationdendik729@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Kudus, Central Java Indonesia",
    href: "https://maps.app.goo.gl/3eNP98LpccbmvYw57",
  },
  {
    icon: <FaLinkedin />,
    title: "Linkedin",
    description: "Dendi' Setiawan",
    href: "https://linkedin.com/in/dendi-setiawan-165057263",
  },
  {
    icon: <SiUpwork />,
    title: "Upwork",
    description: "Dendi' Setiawan",
    href: "https://www.upwork.com/freelancers/~019a1d14923d5e4999?mp_source=share",
  },
  {
    icon: <TbBrandFiverr />,
    title: "Fiverr",
    description: "Dendi' Setiawan",
    href: "https://www.fiverr.com/dendik_creation",
  },
  {
    icon: <Github />,
    title: "Github",
    description: "Dendi' Creation",
    href: "https://github.com/dendik-creation",
  },
];

const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    yourname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmit, setSubmit] = useState<boolean>(false);

  const submitForm = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    }).finally(() => {
      setSubmit(false);
    });
  };

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
    toast.promise(submitForm, {
      loading: "Sending Message",
      error: "Failed Send Message",
      success: () => {
        setContactForm({
          yourname: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        return `Successfully Send Message`;
      },
    });
  };

  const allowedPhoneNumber = (val: string, prev: ContactForm): string => {
    const numRegex = /^\d{0,15}$/;
    return numRegex.test(val) ? val : prev.phone;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string | any
  ) => {
    if (e && e?.target?.name == "phone") {
      setContactForm((prev) => ({
        ...prev,
        phone: allowedPhoneNumber(e?.target.value, prev),
      }));
    } else {
      setContactForm((prev) => ({
        ...prev,
        [e?.target ? e?.target?.name : "subject"]: e?.target
          ? e?.target?.value
          : e,
      }));
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <Toaster theme="light" />
        <div className="flex flex-col-reverse xl:flex-row gap-[30px]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.4,
                ease: "easeIn",
              },
            }}
            className="xl:w-[54%] order-2 xl:order-none"
          >
            <form
              onSubmit={handleSendMessage}
              className="flex flex-col gap-6 p-10 bg-[#27272c] overflow-hidden relative rounded-xl"
            >
              <div className="absolute -top-6 -right-6 rotate-90">
                <Unplug className="xl:w-64 xl:h-64 w-40 h-40 text-accent/10" />
              </div>
              <h3 className="text-4xl font-extrabold text-accent">
                {"Let's Connect"}
              </h3>
              <p className="text-whit/60">
                For questions, suggestions, or just to get acquainted, contact
                me via the form below or the contact information provided. I
                will respond as soon as possible.
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  required
                  autoComplete="off"
                  name="yourname"
                  type="text"
                  onChange={handleChange}
                  value={contactForm?.yourname}
                  placeholder="Your Name"
                />
                <Input
                  required
                  autoComplete="off"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={contactForm?.email}
                  placeholder="Email Address"
                />
                <Input
                  required
                  autoComplete="off"
                  name="phone"
                  type="phone"
                  onChange={handleChange}
                  value={contactForm?.phone}
                  placeholder="Phone Number"
                />
                {/* Select */}
                <Select
                  required
                  name="subject"
                  onValueChange={handleChange}
                  value={contactForm?.subject}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={"Select a service"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Wordpress Project">
                        Wordpress Project
                      </SelectItem>
                      <SelectItem value="Suggestions & Feedback">
                        Suggestions & Feedback
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Textarea
                required
                name="message"
                onChange={handleChange}
                value={contactForm?.message}
                className="h-[200px]"
                placeholder="Your Message"
              />
              {/* Button Send */}
              <Button
                disabled={isSubmit}
                size={"md"}
                className="flex gap-2 items-center"
              >
                <div className="">
                  <Send />
                </div>
                <div className="">Send Message</div>
              </Button>
            </form>
          </motion.div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:items-start xl:item order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="grid grid-cols-2 xl:grid-cols-5 gap-6 w-full">
              {contactInfo?.map((item, index) => (
                <li
                  key={index}
                  className={`group w-full xl:w-fit overflow-hidden ${
                    (index + 1) % 2 == 1 && index === contactInfo.length - 1
                      ? "col-span-2"
                      : ""
                  } xl:col-span-1`}
                >
                  <motion.div
                    initial={{ y: 100 }}
                    animate={{
                      y: 0,
                    }}
                    transition={{
                      delay: 1.5 + (index + 1) * 0.1,
                      ease: "circInOut",
                      duration: 0.6,
                    }}
                  >
                    <a
                      target="_blank"
                      href={item?.href}
                      className="flex items-center w-full xl:w-fit gap-6"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full xl:w-fit bg-[#27272c] relative rounded-md">
                            <div className="w-max gap-4 p-3 xl:p-0 h-[52px] xl:w-[72px] xl:h-[72px] text-accent rounded-md flex items-center xl:justify-center justify-start">
                              <div className="text-[28px]">{item?.icon}</div>
                              <div className="absolute -bottom-0 rounded-md left-0 w-full h-0 bg-gradient-to-t from-accent/40 to-transparent opacity-0 group-hover:opacity-100 duration-500 transition-all group-hover:h-1/2"></div>

                              <div className="xl:hidden flex">
                                {item?.title}
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent sideOffset={15} side="bottom">
                            <p>{item?.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
