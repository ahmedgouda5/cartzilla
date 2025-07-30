"use client";

import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import FilterDropdown from "./FilterDropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Filters from "./Filters";

const ProductsNav = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Shop catalog</h1>

      <div className="flex flex-wrap gap-4 mb-6 justify-between dark:text-gray-900">
        <div className="md:flex flex-wrap gap-4 hidden">
          <FilterDropdown
            label="Sort by"
            options={["Best Sellers", "New Arrivals", "On Sale"]}
            isOpen={openDropdown === "Sort by"}
            onClick={() => handleDropdownToggle("Sort by")}
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
            isOpen={openDropdown === "Categories"}
            onClick={() => handleDropdownToggle("Categories")}
          />
          <FilterDropdown
            label="Types"
            options={["Chair", "Table", "Lamp", "Sofa"]}
            isOpen={openDropdown === "Types"}
            onClick={() => handleDropdownToggle("Types")}
          />
          <FilterDropdown
            label="Colors"
            options={["Black", "White", "Gray", "Brown"]}
            isOpen={openDropdown === "Colors"}
            onClick={() => handleDropdownToggle("Colors")}
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
          <li className={pathname === "/products" ? "font-bold border-b-2 border-black dark:border-white" : ""}>
            <Link href="/products">Products</Link>
          </li>
          <li className={pathname === "/products/room" ? "font-bold border-b-2 border-black dark:border-white" : ""}>
            <Link href="/products/room">Room</Link>
          </li>
        </ul>
      </div>

      <Filters toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default ProductsNav;
