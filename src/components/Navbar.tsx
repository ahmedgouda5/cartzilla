"use client";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { ModeToggle } from "./ModeToggle";
import { FiMenu } from "react-icons/fi";
import Cart from "./Cart";
import { useState } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 bg-white dark:bg-slate-800 shadow-lg  flex justify-between items-center py-2 px-3 rounded-full mt-10">
        <div className="md:hidden font-bold text-3xl">
          <FiMenu />
        </div>
        <h1 className="Logo font-bold text-2xl">Cartzilla</h1>
        <ul className=" hidden md:flex justify-between items-center gap-10 ">
          <li className="relative group cursor-pointer">
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            shop
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            Account
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            pages
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
        <ul className="flex items-center gap-5">
          <li className="text-2xl hover:scale-140 transition-all duration-300">
            <ModeToggle />
          </li>
          <li className="text-2xl relative hover:scale-140 transition-all duration-300">
            <IoCartOutline onClick={() => setOpen(true)} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold px-1 rounded-full">
              {items.length}
            </span>
          </li>
          <li className="text-2xl hover:scale-140   transition-all duration-300 rounded-full flex justify-center  ">
            <CiSearch />
          </li>
        </ul>
      </nav>
      <Cart open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
