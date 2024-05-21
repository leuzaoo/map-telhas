import MyButton from "../button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Center from "../center";

const SectionContent = ({ title, button, image, link }) => {
  return (
    <div>
      <Center>
        <h1 className="bg-strongDark p-2 lg:p-5 max-w-max text-white text-3xl md:text-title lg:text-[60px] uppercase font-bold">
          {title}
        </h1>
      </Center>
      <div className="mx-auto">
        <Image
          className="max-h-[500px] object-cover shadow-md"
          src={image}
          width={3000}
          height={3000}
          alt={title}
        />
      </div>
      <div className="mt-5 w-full absolute bottom-10 z-10">
        <Link href={link}>
          <MyButton text={button} style="red-white" />
        </Link>
      </div>
    </div>
  );
};

export default SectionContent;
