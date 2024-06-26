import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { UmamiBtnDesktop } from "./UmamiBtn";

const Header: React.FC = () => {
  return (
    <header className="py-8 xl:py-12 sticky top-0 z-20 backdrop-blur-lg text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-extrabold" style={{ letterSpacing: 6 }}>
            Dendi<span className="text-accent">{"'"}</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-12">
          <Nav />
          <UmamiBtnDesktop />
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
