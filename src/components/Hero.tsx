"use client";
import { Swiper as SwiperClass } from "swiper/types";

import Image from "next/image";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { useRef } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Hero = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const images = ["/th01.png", "/th02.png", "/th03.png", "/th04.png"];

  return (
    <div className="mt-40 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center mx-auto">
        Everything You Need for a Modern Interior
      </h1>

      <div className="relative w-full max-w-6xl mt-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-2 top-1/2 -translate-y-2.5 -translate-x-2.5 z-10 
             w-12 h-12 md:w-14 md:h-14 
             flex items-center justify-center 
             border-2 border-gray-400 
             rounded-full  hover:bg-gray-100 dark:hover:bg-slate-800  transition"
        >
          <GoChevronLeft />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-2 top-1/2 -translate-y-2.5 translate-x-2.5  z-10 
             w-12 h-12 md:w-14 md:h-14 
             flex items-center justify-center 
             border-2  
             rounded-full border-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800  transition"
        >
          <GoChevronRight />
        </button>

        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          centeredSlides
          slidesPerView="auto"
          loop={true}
          grabCursor
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          className="w-full h-[400px]"
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="w-[250px] flex justify-center items-center"
            >
              <div className="transition-all duration-500">
                <Image
                  src={img}
                  alt={`Slide ${index}`}
                  width={500}
                  height={500}
                  className={`object-contain mx-auto `}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col items-center gap-2 mt-8  dark:text-white text-gray-700">
        <span className="font-semibold ">
          Blue armchair with iron legs
        </span>
        <span className="font-bold text-xl ">$220.00</span>
        <Button className=" dark:bg-white bg-gray-900 hover:bg-black text-white dark:text-gray-900 py-6 px-6 rounded-full flex items-center gap-2">
          Shop now <GoChevronRight />

        </Button>
      </div>
    </div>
  );
};

export default Hero;
