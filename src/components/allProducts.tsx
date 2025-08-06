"use client";

import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { addToCart } from "../../store/slices/Cartslice";
import Link from "next/link";
import { ProducView } from "../../Utilits/Index";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const AllProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [products, setProducts] = useState<number>(8);
const router=useRouter()
  return (
    <>
      <div className="flex items-center justify-between mb-10 border-b border-gray-200 dark:border-gray-700 ">
        <h1 className="text-2xl sm:text-3xl font-bold">Popular products</h1>
        <h4 className="flex items-center relative group cursor-pointer">
          <Link href="/products">View All</Link> <GoChevronRight />
          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
        </h4>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {ProducView.slice(0, products).map((item) => (
          <div
            key={item.id}
            onClick={() => {
              router.push(`/products/${item.id}`);
            }}
            className="group relative flex flex-col shadow-md rounded-lg overflow-hidden transition-all duration-300"
          >
            <div className="relative w-full h-60 sm:h-72 overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={item.Hover}
                alt={item.alt}
                fill
                className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="p-3 sm:p-4 flex flex-col justify-between gap-2">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                {item.head}
              </h2>

              <div className="flex items-center justify-between mt-2">
                <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                  ${item.price}
                </span>

                <button className="text-gray-500 dark:text-white hover:scale-125 text-xl transition">
                  <FaRegHeart />
                </button>
              </div>

              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: item.id,
                      head: item.alt,
                      price: item.price,
                      image: item.src,
                    })
                  );
                  toast.success(" Added to cart!");
                }}
                className="mt-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 rounded-lg text-sm sm:text-base hover:bg-gray-800 transition-all"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center flex-col items-center mt-8">
        <span>
          {products} of {ProducView.length} products shown
        </span>
        {products < ProducView.length && (
          <button
            onClick={() => setProducts(products + 4)}
            className="mt-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 px-4 rounded-lg text-sm sm:text-base hover:bg-gray-800 transition-all"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default AllProducts;
