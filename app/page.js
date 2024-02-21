"use client";
import { useEffect, useState } from "react";
import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";
import MainLayout from "./layouts/MainLayout";
import useIsLoading from "@/app/hooks/useIsLoading";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/products");
      const prods = await response.json();
      setProducts(prods);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainLayout>
      <CarouselComp />
      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
        {isLoading ? (
          <div>Loading products...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
