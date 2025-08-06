import Image from "next/image";
import { SiAfterpay } from "react-icons/si";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { AlertDialogDemo } from "@/components/AlertDialogDemo";
import { prodDetails } from "./../../../../Utilits/Index";
import { GoChevronRight } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import AccordionDesc from "@/components/AccordionDesc";
import ProductsShow from "@/components/ProductsShow";

type PageProps = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: PageProps) => {
  let name ;
  if (params) {
    name= "product page";

  }
  return (
    <div className="p-4 sm:p-6 container mx-auto">
      <h1 className="text-base sm:text-xl font-light mb-4 sm:mb-6 flex items-center flex-wrap gap-1">
        <span>Home</span>
        <GoChevronRight />
        <span>product</span>
        <GoChevronRight />
        <span className="font-light text-gray-400">{name}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Left Section */}
        <section className="md:col-span-4 p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {prodDetails.map((img) => (
            <div
              key={img.image}
              className="relative group overflow-hidden rounded-md"
            >
              <Image
                src={img.image}
                alt="dd"
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg">
                  <AlertDialogDemo />
                </span>
              </div>
            </div>
          ))}
          <div className="col-span-full mt-4 p-2 sm:p-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The chair will bring a stylish retro atmosphere to your room,
              inspired by Scandinavian design...
            </p>
            <ul className="space-y-2 pt-4 text-sm sm:text-base">
              <li>Backrest height: 46 cm</li>
              <li>Width: 64 cm </li>
              <li>Depth: 78 cm</li>
              <li>Height under furniture: 22 cm</li>
              <li>Seat width: 56 cm</li>
              <li>Armrest height: 63 cm</li>
            </ul>
            <AccordionDesc />
          </div>
        </section>

        {/* Right Section */}
        <section className="md:col-span-2 p-2 sm:p-4 flex flex-col space-y-4 sm:space-y-5">
          <span className="text-gray-400 text-sm">V00273124</span>
          <h2 className="font-medium text-lg sm:text-xl">
            Chair with wooden legs 60x100 cm
          </h2>
          <span className="font-bold text-2xl sm:text-3xl">$357.00</span>
          <h4 className="text-sm sm:text-base">
            Pay 4 interest-free payments of $89.00 with
          </h4>
          <div className="flex items-center bg-emerald-300 w-fit py-1 px-2 rounded-lg gap-1">
            <span>afterpay</span>
            <SiAfterpay />
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <h3>
              We provide a <span className="font-bold">3-year warranty</span>
            </h3>
            <span className="text-xl">
              <BsFillPatchCheckFill />
            </span>
          </div>
          <div className="flex flex-col items-start gap-y-2 text-sm sm:text-base">
            <h5>Material of the cover:</h5>
            <form className="w-full">
              <select
                id="countries"
                className="border-2 dark:border-white rounded-full py-2 px-3 w-full text-gray-900 dark:text-white dark:bg-gray-800 outline-none"
              >
                <option selected>Choose a country</option>
                <option value="Natural fabric">Natural fabric</option>
                <option value="Synthetic fabric">Synthetic fabric</option>
                <option value="Leather">Leather</option>
                <option value="Cotton">Cotton</option>
              </select>
            </form>
          </div>
          <div className="flex justify-between gap-x-2">
            <button className="dark:bg-white bg-gray-900 dark:text-gray-900 text-white p-3 rounded-full flex-1">
              Add to cart
            </button>
            <button className="text-gray-500 dark:text-white hover:scale-125 text-xl transition">
              <FaRegHeart />
            </button>
          </div>
        </section>
      </div>

      {/* Related Products */}
      <div className="mt-8">
        <ProductsShow />
      </div>
    </div>
  );
};

export default Page;
