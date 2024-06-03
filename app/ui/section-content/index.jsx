import MyButton from "../button";
import Image from "next/image";
import Center from "../center";
import Link from "next/link";

const SectionContent = ({ title, image, desc, link, buttonText }) => {
  return (
    <Center>
      <div className="bg-white rounded-xl w-full md:grid md:grid-cols-2 gap-5 items-center justify-between">
        <div className="h-full mt-2 md:mt-0">
          <Image
            className="w-full h-full rounded-tr-xl rounded-tl-xl md:rounded-tr-none md:rounded-br-none md:rounded-bl-xl object-cover object-left"
            src={image}
            width={4000}
            height={3000}
            alt={title}
          />
        </div>
        <div className="text-left p-5 md:py-5 md:pr-5">
          <h1 className="text-title text-primaryRed uppercase font-bold mb-3">
            {title}
          </h1>
          <p className="text-xl my-3">{desc}</p>
          <div className="text-center py-5">
            <Link href={link}>
              <MyButton text={buttonText} style="red-white" />
            </Link>
          </div>
        </div>
      </div>
    </Center>
  );
};

export default SectionContent;
