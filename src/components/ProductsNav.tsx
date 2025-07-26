"use client";

import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Filters from "./Filters";
import Link from "next/link";

const FilterDropdown = ({
  label,
  options,
}: {
  label: string;
  options: string[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 px-4 py-2 border rounded-lg min-w-[150px] bg-white hover:shadow"
      >
        {label}
        <span className="ml-2">
          <IoIosArrowDown />
        </span>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-lg z-10">
          {options.map((option) => (
            <label
              key={option}
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input type="checkbox" className="mr-2" />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductsNav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Shop catalog</h1>

      <div className="flex flex-wrap gap-4 mb-6 justify-between dark:text-gray-900">
        <div className="md:flex flex-wrap gap-4 hidden">
          <FilterDropdown
            label="Sort by"
            options={["Best Sellers", "New Arrivals", "On Sale"]}
          />
          <FilterDropdown
            label="Categories"
            options={[
              "Living room",
              "Bedroom",
              "Kitchen",
              "Office",
              "Lighting",
              "Decoration",
              "Accessories",
            ]}
          />
          <FilterDropdown
            label="Types"
            options={["Chair", "Table", "Lamp", "Sofa"]}
          />
          <FilterDropdown
            label="Colors"
            options={["Black", "White", "Gray", "Brown"]}
          />

          <span
            className="flex relative items-center dark:text-white group cursor-pointer"
            onClick={() => setToggle(true)}
          >
            <CiFilter /> All filters
            <span className="absolute left-0 bottom-2 h-[1px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>

        <ul className="flex items-center gap-4 dark:text-white">
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/products/room">Room</Link></li>
        </ul>
      </div>

      <Filters toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default ProductsNav;
