import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialPinterest,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

export const Footer = () => {
  return (
    <footer className="flex w-[90%] mx-auto md:justify-between justify-center  gap-8 py-24 bg-gray-800 text-white">
      <section className="hidden md:block">
        <ul className="flex flex-col gap-2 items-center">
          <li>Bedroom</li>
          <li>Living room</li>
          <li>Bathroom</li>
          <li>Decoration</li>
          <li>Kitchen</li>
          <li>Sale</li>
        </ul>
      </section>
      <section className=" flex-col items-center md:justify-between justify-center  gap-5 flex">
        <h3>Stay in touch with us</h3>
        <span className="text-gray-500 font-medium">Receive the latest updates about our products & promotions</span>
        <input
          type="email"
          placeholder="Your email"
          className="w-full max-w-sm p-3 mb-7 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        <ul className="flex gap-4 mt-10 text-2xl">
          <li>
            <TiSocialYoutube />
          </li>
          <li>
            <TiSocialFacebook />
          </li>
          <li>
            <TiSocialInstagram />
          </li>
          <li>
            <TiSocialTwitter />
          </li>
          <li>
            <TiSocialPinterest />
          </li>
        </ul>
        <h5 className="text-gray-500 text-sm mt-10">
          © All rights reserved. Made by <Link href="#">Ahmed Gouda</Link>
        </h5>
      </section>
      <section className="hidden md:block">
        <ul className="flex flex-col gap-2 justify-between items-center">
          <li>Shipping options</li>
          <li>Tracking a package</li>
          <li>Help center</li>
          <li>Contact us</li>
          <li>Product returns</li>
          <li>Locations</li>
        </ul>
      </section>
    </footer>
  );
};
