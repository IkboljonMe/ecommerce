"use client";
import { useCart } from "../context/cart";
import { toast } from "react-toastify";

export default function CartItem({ product }) {
  const cart = useCart();

  const removeItemFromCart = () => {
    let res = confirm(
      `Are you sure you want to remove this? "${product.title}"`
    );
    if (res) {
      cart.removeFromCart(product);
      toast.info("Removed from cart", { autoClose: 3000 });
    }
  };

  return (
    <>
      <div className=" flex justify-start my-2 border w-full p-6">
        <div className=" flex flex-row justify-between w-full">
          <div className="flex gap-2">
            <div className="flex justify-start">
              <img
                src={product?.url}
                className=" max-w-[100px] md:max-w-[200px] justify-start rounded sm:flex hidden"
              />
            </div>
            <div className="flex flex-col justify-start ">
              <div className="font-semibold text-lg md:text-sm">
                {product?.title}
              </div>
              <div className="text-sm mt-2 md:text-xs">
                {product?.description.substring(0, 150)}...
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold flex justify-center  md:text-sm">
              {(product?.price / 100).toFixed(2) + " PLN"}
            </div>
            <div className="flex justify-center text-sm">
              <button
                onClick={() => removeItemFromCart()}
                className="underline text-blue-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
