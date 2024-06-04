import MyButton from "../button";
import Image from "next/image";
import Link from "next/link";

const SectionContent = ({ title, image, desc, link, buttonText }) => {
  return (
    <div className="max-w-md pb-5 rounded-xl flex items-center mx-auto lg:mx-0 text-center bg-white">
      <div>
        <Image
          className="rounded-xl"
          src={image}
          width={6000}
          height={3000}
          alt={title}
        />
        <h1 className="text-primaryRed text-4xl lg:text-5xl uppercase font-bold text-left pl-5 pt-5">
          {title}
        </h1>
        <p className="mb-5 mt-5 text-xl text-left px-5">{desc}</p>
        <Link href={link}>
          <MyButton text={buttonText} style="red-white" />
        </Link>
      </div>
    </div>
  );
};

export default SectionContent;
