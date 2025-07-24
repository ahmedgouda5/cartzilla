import Image from "next/image";
import { images } from "../../Utilits/Index";

const HouseParts = () => {
  return (
    <div className="py-24">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {images.map((image, index) => (
          <li
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-28 h-28 hover:scale-60 rounded-full bg-slate-100 shadow-md flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src={image.src}
                alt={image.alt}
                width={130}
                height={130}
                className="object-contain"
              />
            </div>

            <h3 className="mt-3 text-sm font-semibold text-gray-800 dark:text-gray-100">
              {image.head}
            </h3>

            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs text-gray-500 dark:text-gray-400">
              {image.headTwo}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HouseParts;
