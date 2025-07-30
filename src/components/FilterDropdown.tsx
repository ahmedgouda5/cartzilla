"use client";

import { IoIosArrowDown } from "react-icons/io";

type Props = {
  label: string;
  options: string[];
  isOpen: boolean;
  onClick: () => void;
};

const FilterDropdown = ({ label, options, isOpen, onClick }: Props) => {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="flex items-center justify-between gap-2 px-4 py-2 border rounded-lg min-w-[150px] bg-white hover:shadow"
      >
        {label}
        <span className="ml-2">
          <IoIosArrowDown />
        </span>
      </button>

      {isOpen && (
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

export default FilterDropdown;
