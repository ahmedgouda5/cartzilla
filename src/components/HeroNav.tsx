const HeroNav = () => {

  return (
    <div className="my-2 flex justify-between items-center font-extralight text-sm text-black dark:text-white">
      <h4>Contact us 24/7 +1 50 537 53 082</h4>
      <h3 className="hidden md:block">🔥 The Biggest Sale Ever 50% Off</h3>
      <ul className="flex justify-between items-center gap-4">
        <li className="relative group cursor-pointer">
          wishlist
          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group cursor-pointer">
          Account
          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
    </div>
  );
};

export default HeroNav;

