"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Products } from "../../Utilits/Index";
import Image from "next/image";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useRef } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./../../store/store";
import { addToCart } from "../../store/slices/Cartslice";
import Link from "next/link";

const ProductsShow = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="flex items-center justify-between  mb-10 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold ">Popular products</h1>
        <h4 className="flex items-center relative group cursor-pointer ">
          <Link href="/products">View All</Link> <GoChevronRight />
          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black  dark:bg-white transition-all duration-300 group-hover:w-full"></span>
        </h4>
      </div>
      <div className="py-10 px-4 relative">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute z-10 left-2 top-1/2 -translate-y-54 md:-translate-y-1/2 md:-translate-x-14 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        >
          <GoChevronLeft size={24} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute z-10 right-2 top-1/2 -translate-y-54 md:-translate-y-1/2 md:translate-x-14 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        >
          <GoChevronRight size={24} />
        </button>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={2}
          spaceBetween={20}
          freeMode={true}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {Products.map((image, index) => (
            <SwiperSlide key={index}>
              <div data-aos="zoom-in-down" className="group relative flex flex-col  shadow-md rounded-lg overflow-hidden transition-all duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[300px] overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                  />

                  <Image
                    width={500}
                    height={500}
                    src={image.Hover}
                    alt={image.alt}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                </div>

                <div className="p-3 sm:p-4 flex flex-col justify-between h-full gap-2">
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white ">
                      {image.head}
                    </h2>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white ">
                      ${image.price}
                    </span>

                    <button className="text-gray-500 dark:text-white hover:scale-125 text-xl transition">
                      <FaRegHeart />
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: image.id,
                          head: image.alt,
                          price: image.price,
                          image: image.src,
                        })
                      )
                    }
                    className="mt-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 rounded-lg text-sm sm:text-base hover:bg-gray-800 transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductsShow;
