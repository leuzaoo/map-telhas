import Image from "next/image";
import React from "react";

export default function InfoCard({ title, desc, image }) {
  return (
    <div className="mx-auto flex flex-col justify-between min-w-xs max-w-xs min-h-[340px] max-h-[340px] bg-neutral-50 rounded-xl shadow-md">
      <Image
        className="rounded-xl max-h-44 object-cover"
        src={image}
        alt="Image"
        width={1000}
        height={1000}
      />

      <div className="p-3">
        <h2 className="text-center">{title}</h2>
        <h3 className="text-sm">{desc}</h3>
      </div>
    </div>
  );
}
