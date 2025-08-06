"use client";

import ProductsNav from "@/components/ProductsNav";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  const shouldShowNav = path !== "/products" && path !== "/products/room";

  return (
    <div className="my-24 min-h-screen">
      {!shouldShowNav && <ProductsNav />}

      <div>{children}</div>
    </div>
  );
};

export default Layout;
