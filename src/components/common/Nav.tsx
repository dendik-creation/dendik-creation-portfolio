"use client";
import { Links } from "@/types/TypeHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links: Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav: React.FC = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links?.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathName && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
