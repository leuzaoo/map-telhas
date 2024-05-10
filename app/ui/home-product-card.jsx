import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomeProductCard({ title, image, link }) {
  return (
    <>
      <Link href={link}>
        <div className="hover:opacity-80 transition-all duration-200 mx-auto mt-5 shadow-md border border-neutral-200 rounded-xl max-w-[300px]">
          <h1 className="text-xl uppercase font-bold pt-3">{title}</h1>
          <Image
            className="object-cover mt-3 rounded-bl-xl rounded-br-xl min-h-[165px] max-h-[165px]"
            src={image}
            width={1000}
            height={1000}
            alt="Imagem do Produto"
          />
        </div>
      </Link>
    </>
  );
}
