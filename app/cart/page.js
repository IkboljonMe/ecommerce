"use client";

import MainLayout from "../layouts/MainLayout";
import SimilarProducts from "../components/SimilarProducts";
import CartItem from "../components/CartItem";
import { useCart } from "../context/cart";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useIsLoading from "../hooks/useIsLoading";
import ClientOnly from "../components/ClientOnly";

export default function Cart() {
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    useIsLoading(true);
    cart.getCart();
    cart.cartTotal();
    useIsLoading(false);
  }, [cart]);

  const goToCheckout = () => {
    if (!cart.cartTotal()) {
      alert("You don't have any items in the cart.");
      return;
    }
    router.push("/checkout");
  };

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
          <div className="text-2xl font-bold my-4">Shopping cart</div>
          <div className="flex justify-between  flex-col md:flex-row gap-4">
            <ClientOnly>
              <div className="w-full ">
                {cart.getCart().map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
            </ClientOnly>

            <div className="flex justify-center">
              <ClientOnly>
                <div className="flex flex-col bg-white p-4 border rounded-xl">
                  <p className="justify-center flex font-bold text-lg">
                    Summary
                  </p>

                  <div className="pt-3 flex items-center justify-between text-sm mb-4">
                    <div>Items ({cart.getCart().length})</div>
                    <div>{(cart.cartTotal() / 100).toFixed(2)} PLN</div>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div>Shipping:</div>
                    <div>Free</div>
                  </div>

                  <div className="border-b border-gray-300 mb-4" />

                  <div className="flex items-center justify-between text-lg font-semibold">
                    <div>Subtotal: </div>
                    <div>
                      {" " + (cart.cartTotal() / 100).toFixed(2) + " PLN"}{" "}
                    </div>
                  </div>
                  <button
                    onClick={() => goToCheckout()}
                    className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4 mb-4 md:hidden"
                  >
                    Go to checkout
                  </button>
                  <button
                    onClick={() => goToCheckout()}
                    className="hidden md:flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4"
                  >
                    Go to checkout
                  </button>
                </div>
              </ClientOnly>
            </div>
          </div>
        </div>

        <SimilarProducts />
      </MainLayout>
    </>
  );
}
