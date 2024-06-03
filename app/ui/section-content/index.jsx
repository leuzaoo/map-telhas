import MyButton from "../button";
import Image from "next/image";
import Center from "../center";
import Link from "next/link";

const SectionContent = ({ title, image, desc, link, buttonText }) => {
  return (
    <Center>
      <div className="bg-white rounded-xl w-full md:grid md:grid-cols-2 gap-10 items-center justify-between">
        <div className="text-left p-3">
          <h1 className="text-title uppercase font-bold mb-3">{title}</h1>
          <div className="bg-black w-3/4 h-[2px]" />
          <p className="text-xl my-3">{desc}</p>
          <div className="text-center">
            <Link href={link}>
              <MyButton text={buttonText} style="red-white" />
            </Link>
          </div>
        </div>
        <div className="h-full mt-2 md:mt-0">
          <Image
            className="w-full h-full rounded-br-xl rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl md:rounded-br-xl object-cover object-left"
            src={image}
            width={4000}
            height={3000}
            alt={title}
          />
        </div>
      </div>
    </Center>
  );
};

export default SectionContent;
