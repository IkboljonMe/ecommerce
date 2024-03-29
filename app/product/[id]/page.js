"use client";
import MainLayout from "../../layouts/MainLayout";
import SimilarProducts from "../../components/SimilarProducts";
import { useEffect, useState } from "react";
import { useCart } from "../../context/cart";
import { toast } from "react-toastify";

export default function Product({ params }) {
  const cart = useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const response = await fetch(`/api/product/${params.id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const prod = await response.json();
      setProduct(prod);
      cart.isItemAddedToCart(prod);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row px-4 py-10">
          <div className="w-full md:w-2/5 md:mr-8 mb-4 md:mb-0">
            {product?.url ? (
              <img
                className={`w-full h-auto rounded-lg object-cover md:max-w-[300px] lg:max-w-full`}
                src={product?.url}
                alt={product.title}
              />
            ) : (
              <div className="w-full"></div>
            )}
          </div>

          <div className="w-full md:w-3/5">
            <div className="font-bold text-xl">{product?.title}</div>

            <div className="border-b py-1" />

            <div className="pt-3 pb-2">
              <div className="flex items-center">
                In store:{" "}
                <span className="font-bold text-[17px] ml-2">Yes</span>
              </div>
            </div>

            <div className="border-b py-1" />

            <div className="pt-3">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                  Price:
                  {product?.price ? (
                    <div className="font-bold text-[14px] ml-2">
                      {(product?.price / 100).toFixed(2)} PLN
                    </div>
                  ) : null}
                </div>
                <button
                  onClick={() => {
                    if (cart.isItemAdded) {
                      cart.removeFromCart(product);
                      toast.info("Removed from cart", { autoClose: 3000 });
                    } else {
                      cart.addToCart(product);
                      toast.success("Added to cart", { autoClose: 3000 });
                    }
                  }}
                  className={`
                      text-white py-2 px-20 rounded-full cursor-pointer 
                      ${
                        cart.isItemAdded
                          ? "bg-[#e9a321] hover:bg-[#bf851a]"
                          : "bg-[#3498C9] hover:bg-[#0054A0]"
                      }
                    `}
                >
                  {cart.isItemAdded ? "Remove From Cart" : "Add To Cart"}
                </button>
              </div>
            </div>

            <div className="border-b py-1" />

            <div className="pt-3">
              <div className="font-semibold pb-1">Description:</div>
              <div className="text-sm">{product?.description}</div>
            </div>
          </div>
        </div>
      </div>

      <SimilarProducts />
    </MainLayout>
  );
}
