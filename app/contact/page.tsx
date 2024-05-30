"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
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
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { SelectValue } from "@radix-ui/react-select";

const contactInfo: ContactInfo = [
  {
    icon: <FaPhoneAlt />,
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
    icon: <FaLinkedin />,
    title: "Linkedin",
    description: "Dendi' Setiawan",
    href: "https://linkedin.com/in/dendi-setiawan-165057263",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Kudus, Central Java Indonesia",
    href: "https://maps.app.goo.gl/3eNP98LpccbmvYw57",
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
  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(contactForm);
  }, [contactForm]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string | any
  ) => {
    setContactForm((prev) => ({
      ...prev,
      [e?.target ? e?.target?.name : "subject"]: e?.target
        ? e?.target?.value
        : e,
    }));
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
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSendMessage}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
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
                  name="yourname"
                  type="text"
                  onChange={handleChange}
                  value={contactForm?.yourname}
                  placeholder="Your Name"
                />
                <Input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={contactForm?.email}
                  placeholder="Email Address"
                />
                <Input
                  name="phone"
                  type="phone"
                  onChange={handleChange}
                  value={contactForm?.phone}
                  placeholder="Phone Number"
                />
                {/* Select */}
                <Select
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
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Textarea
                name="message"
                onChange={handleChange}
                value={contactForm?.message}
                className="h-[200px]"
                placeholder="Your Message"
              />
              {/* Button Send */}
              <Button size={"md"} className="">
                Send Message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:items-start xl:item xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo?.map((item, index) => (
                <li key={index} className="group overflow-hidden">
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
                      className="flex items-center gap-6"
                    >
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item?.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl group-hover:underline transition-all group-hover:underline-offset-4">
                          {item.description}
                        </h3>
                      </div>
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
