"use client";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { removeFromCart } from "../../store/slices/Cartslice";
import { toast } from "sonner";

const Cart = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black z-10 transition-opacity duration-300 ${
          open
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[80%] sm:w-[60%] md:w-[36%] h-screen z-20 dark:bg-gray-800 bg-white dark:text-white text-gray-900 p-5 shadow-lg transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Shopping cart</h2>
          <button onClick={onClose} className="text-xl">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center space-y-1">
            <FiShoppingCart className="text-6xl mb-4" />
            <h3>Your shopping cart is currently empty!</h3>
            <p>
              Explore our wide range of products and add items to your cart to
              proceed with your purchase.
            </p>
            <Button className="mt-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white py-2 px-4 rounded-full">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="overflow-y-auto flex-1 space-y-4 pr-1">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt="ddd"
                      width={64}
                      height={64}
                      className="object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold ">{item.head}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-red-500 text-2xl hover:text-red-700"
                    onClick={() => {
                      dispatch(removeFromCart({ id: item.id }));
                      toast.success("Item removed from cart!");
                    }}
                  >
                    <HiOutlineTrash />
                  </button>
                </div>
              ))}
            </div>

            {/* ✅ زرار Checkout في الأسفل */}
            <div className="pt-4 border-t mt-4">
              <Button className="w-full bg-gray-900 dark:bg-white dark:text-gray-900 text-white py-2 rounded-full">
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
