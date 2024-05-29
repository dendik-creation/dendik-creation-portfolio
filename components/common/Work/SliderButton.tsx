"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";

type SliderBtn = {
  containerStyles: string;
  btnStyles: string;
  iconStyles?: string;
  projectsLength: number;
};

const SliderButton: React.FC<SliderBtn> = ({
  containerStyles,
  btnStyles,
  iconStyles,
  projectsLength,
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button
        disabled={swiper?.activeIndex == 0}
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeft className={iconStyles} />
      </button>
      <button
        disabled={swiper?.activeIndex == projectsLength - 1}
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <ChevronRight className={iconStyles} />
      </button>
    </div>
  );
};

export default SliderButton;
