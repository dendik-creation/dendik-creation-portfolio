import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React from "react";
// Component
import Photo from "@/components/common/Home/Photo";
import Socials from "@/components/common/Home/Socials";
import Stats from "@/components/common/Home/Stats";

const Home: React.FC = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Name */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="mb-6">
              <span className="xl:h2 h3">Hello {"I'm,"}</span> <br />{" "}
              <span className="text-accent h1">{"Dendi'"} Setiawan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experience and I am proficient
              in various programming languages & technologies
            </p>

            {/* CV Download  & Social Media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                className="capitalize flex items-center gap-2"
              >
                <span>Download CV</span>
                <Download className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
