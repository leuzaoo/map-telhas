import Image from "next/image";
import React from "react";

export default function ProductCard({
  image,
  product_name,
  description,
  material,
  application,
}) {
  return (
    <div className="bg-white shadow-md mt-5 pb-5 rounded-xl max-w-[400px] hover:opacity-70 transition-all duration-200">
      <Image
        className="max-w-full rounded-tr-xl rounded-tl-xl"
        src={image}
        width={1000}
        height={1000}
        alt={product_name}
      />
      <div className="mt-5">
        <h2 className="text-xl font-bold uppercase text-center">
          {product_name}
        </h2>
        <p className="font-bold text-center text-xs">Trapézio 40/980</p>
      </div>
      {/* <ul className="px-5 flex flex-col gap-3 mt-3 text-sm">
        <li>{description}</li>
        <li>
          {material ? (
            <>
              <span className="font-bold">Opções de Material: </span>
              <br />
              {material}
            </>
          ) : (
            ""
          )}
        </li>
        <li>
          {application ? (
            <>
              <span className="font-bold">Aplicações: </span>
              <br />
              {application}
            </>
          ) : (
            ""
          )}
        </li>
      </ul> */}
    </div>
  );
}
