import Image from "next/image";
import React from "react";

export default function ProductCard({ image, product_name, model }) {
  return (
    <div className="min-h-[300px] max-h-[300px] bg-white shadow-md mt-5 pb-5 rounded-xl max-w-[400px] hover:opacity-70 transition-all duration-200">
      <Image
        className="object-cover max-w-full max-h-[200px] rounded-tr-xl rounded-tl-xl"
        src={image}
        width={1000}
        height={1000}
        alt={product_name}
      />
      <div className="mt-5">
        <h2 className="text-xl font-bold uppercase text-center">
          {product_name}
        </h2>
        <p className="font-bold text-center text-xs">{model}</p>
      </div>
    </div>
  );
}
