"use client";
import { useEffect } from "react";

const Filters = ({
  setToggle,
  toggle,
}: {
  setToggle: (value: boolean) => void;
  toggle: boolean;
}) => {
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black z-10 transition-opacity duration-300 ${
          toggle
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setToggle(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white text-gray-900 dark:bg-gray-900 dark:text-white z-20 shadow-lg transform transition-transform duration-300 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-xl font-semibold">Filters</h2>
            <button
              onClick={() => setToggle(false)}
              className="text-gray-500 "
            >
              ✕
            </button>
          </div>

          <div className="space-y-4 ">
            <div>
              <h4 className="font-medium mb-2">Category</h4>
              <label className="block">
                <input type="checkbox" className="mr-2" /> Living Room
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" /> Bedroom
              </label>
            </div>

            <div>
              <h4 className="font-medium mb-2">Color</h4>
              <label className="block">
                <input type="checkbox" className="mr-2" /> Black
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" /> White
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
