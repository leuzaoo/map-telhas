import { Facebook, Headset, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-strongDark p-5 w-screen">
        <Image
          className="mx-auto"
          src="/logo.svg"
          width={170}
          height={100}
          alt="Logo image"
        />
        <p className="text-center py-5 text-white uppercase font-bold">
          Contatos
        </p>
        <div className="max-w-screen-lg mx-auto pb-5 flex flex-col lg:flex-row lg:justify-between text-white gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <MapPin />
              <Link
                href="https://www.google.com/maps/place/Map+Calhas+e+Telhas/@-23.2012925,-46.7966512,17z/data=!3m1!4b1!4m6!3m5!1s0x94cedf228749fb63:0x926d241a8c4754d2!8m2!3d-23.2012925!4d-46.7940763!16s%2Fg%2F11bvt5xr0s?entry=ttu"
                target="_blank"
              >
                <p>
                  Rua Brás Cubas 160 - Vila Tavares
                  <br />
                  Campo Limpo Paulista/SP - 13230-078
                </p>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/whatsapp-icon-white.svg"
              width={24}
              height={24}
              alt="Whatsapp icon"
            />
            <Link href="http://wa.me/551140393236">
              <p>(11) 4039-3236</p>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Headset />
            <Link href="tel:1148930293">
              <p>(11) 4893-0293</p>
            </Link>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-center gap-20 py-5 text-white">
          <Link
            href="https://www.facebook.com/profile.php?id=61558732025330"
            target="_blank"
          >
            <Facebook />
          </Link>
          <Link href="https://www.instagram.com/maptelhas/" target="_blank">
            <Instagram />
          </Link>
        </div>
        <span className="flex justify-center text-white text-xs">
          ©️ 2024 MAP Telhas. Todos os direitos reservados.{" "}
        </span>
      </div>
    </>
  );
}
