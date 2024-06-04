import { SocialIcon } from "@/types/TypeHome";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const socialIcons: SocialIcon = [
  {
    icon: <Github />,
    path: "https://github.com/dendik-creation",
  },
  {
    icon: <Linkedin />,
    path: "https://www.linkedin.com/in/dendi-setiawan-165057263",
  },
  {
    icon: <Instagram />,
    path: "https://instagram.com/dendik_542",
  },
];

type Social = {
  containerStyles: string;
  iconStyles: string;
};

const Socials: React.FC<Social> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialIcons?.map((icon, index) => (
        <Link
          key={index}
          target="_blank"
          href={icon.path}
          className={iconStyles}
        >
          {icon.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
