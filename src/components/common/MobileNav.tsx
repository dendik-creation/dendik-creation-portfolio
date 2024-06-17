"use client";
import { Links } from "@/types/TypeHeader";
import { usePathname } from "next/navigation";
import React from "react";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { UmamiBtnMobile } from "./UmamiBtn";

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

const MobileNav: React.FC = () => {
  const pathname = usePathname();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <AlignRight className="text-[32px] text-accent" />
      </DrawerTrigger>
      <DrawerContent className="outline-none border-0">
        <DrawerHeader>
          <DrawerTitle>
            <div className="mt-12 mb-12 text-center text-2xl">
              <Link href="/" className="flex flex-col gap-3">
                <h1
                  className="text-4xl font-extrabold"
                  style={{ letterSpacing: 6 }}
                >
                  Dendi<span className="text-accent">{"'"}</span>
                </h1>
                <h1 className="text-lg font-semibold">
                  <span className="text-accent">Portfolio Website</span>
                </h1>
              </Link>
            </div>
          </DrawerTitle>
          <DrawerDescription>
            <nav className="flex mb-12 flex-col justify-center items-center gap-8">
              {links?.map((link, index) => (
                <Link
                  href={link.path}
                  key={index}
                  className={`text-xl capitalize hover:text-accent transition-all ${
                    link.path == pathname
                      ? "text-accent border-b-2 border-accent"
                      : "text-white/80"
                  }`}
                >
                  <DrawerClose>{link.name}</DrawerClose>
                </Link>
              ))}
              <UmamiBtnMobile />
            </nav>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
