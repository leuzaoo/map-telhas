import { Headset, Map, MapPin, Phone } from "lucide-react";
import Center from "../ui/center";
import Image from "next/image";
import Link from "next/link";

const List = [
  {
    icon: <MapPin />,
    title: "Onde estamos",
    desc: (
      <p className="md:pl-12">
        Rua Brás Cubas 160 - Vila Tavares. Campo Limpo Paulista/SP - 13230-078.
      </p>
    ),
  },
  {
    icon: <Headset />,
    title: "Telefones",
    desc: (
      <p className="flex flex-col gap-3 lg:flex-row lg:gap-10 md:pl-12">
        <span className="flex items-center gap-3">
          <Image
            className=""
            src="/whatsapp-icon.svg"
            alt="whatsapp icon"
            width={24}
            height={24}
          />
          (11) 9 7434-4466
        </span>
        <span className="flex items-center gap-3">
          <Phone />
          (11) 4893-0293
        </span>
      </p>
    ),
  },
  {
    icon: <Map />,
    title: "Localização",
    desc: (
      <div className="flex flex-col gap-3 rounded-lg mt-5">
        <iframe
          className="w-full min-h-[400px] rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29337.180465741003!2d-46.832185125683644!3d-23.20129249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cedf228749fb63%3A0x926d241a8c4754d2!2sMap%20Calhas%20e%20Telhas!5e0!3m2!1spt-BR!2sbr!4v1715182976809!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        <Link
          target="_blank"
          className="bg-blue-600 rounded-xl text-center text-white px-3 py-2 lg:text-xl"
          href="https://www.google.com/maps/place/Map+Calhas+e+Telhas/@-23.2012925,-46.7966512,17z/data=!3m1!4b1!4m6!3m5!1s0x94cedf228749fb63:0x926d241a8c4754d2!8m2!3d-23.2012925!4d-46.7940763!16s%2Fg%2F11bvt5xr0s?entry=ttu"
        >
          Ir para Google Maps
        </Link>
      </div>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="py-10">
      <Center>
        <h1 className="text-title uppercase font-extrabold text-primaryRed">
          Entre em Contato
        </h1>
        <div className="h-[2px] w-full md:w-5/6 bg-primaryRed" />

        <section className="pt-5">
          <ul className="flex flex-col gap-5">
            {List.map((item) => (
              <li className="flex flex-col gap-2" key={item.title}>
                <div className="flex items-center gap-2">
                  <span className="bg-primaryRed p-2 rounded-full text-white">
                    {item.icon}
                  </span>
                  <h1 className="text-2xl lg:text-3xl uppercase font-extrabold text-strongDark">
                    {item.title}
                  </h1>
                </div>
                <div className="text-lg text-softDark">{item.desc}</div>
              </li>
            ))}
          </ul>
        </section>
      </Center>
    </div>
  );
}
