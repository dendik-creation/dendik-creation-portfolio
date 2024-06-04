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
        className={btnStyles}
        onClick={() =>
          swiper.isBeginning
            ? swiper.slideTo(projectsLength)
            : swiper.slidePrev()
        }
      >
        <ChevronLeft className={iconStyles} />
      </button>
      <button
        className={btnStyles}
        onClick={() => (swiper.isEnd ? swiper.slideTo(0) : swiper.slideNext())}
      >
        <ChevronRight className={iconStyles} />
      </button>
    </div>
  );
};

export default SliderButton;
