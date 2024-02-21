"use client";

import Link from "next/link";

export default function Product({ product }) {
  return (
    <Link href={`/product/${product?.id}`}>
      <div className="block max-w-[150px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl bg-gray-100 rounded mx-auto cursor-pointer">
        {product?.url && (
          <img
            className="rounded"
            src={product.url + "/190"}
            alt={product.title}
          />
        )}
        <div className="pt-2 px-1">
          <div className="font-semibold text-sm hover:underline">
            {product?.title}
          </div>
          <div className="font-extrabold text-sm">
            {(product?.price / 100).toFixed(2)} PLN
          </div>
          <div className="text-xs relative flex items-center text-gray-500">
            <div className="line-through">
              {((product?.price * 1.2) / 100).toFixed(2)} PLN
            </div>
            <div className="px-2">-</div>
            <div className="line-through">20%</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
